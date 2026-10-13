import { Hono } from 'hono';
import { secureHeaders } from 'hono/secure-headers';
import { contactSchema, type ContactInput } from './schema.js';
import { RateLimiter, clientKey } from './ratelimit.js';
import { ContactMetrics, type Outcome } from './metrics.js';

export interface DecisionRecord {
  ts: string;
  event: 'contact_decision';
  outcome: Outcome;
  status: number;
  peer: string;
  locale?: string;
}

export interface AppDeps {
  send: (input: ContactInput) => Promise<void>;
  limiter?: RateLimiter;
  metrics?: ContactMetrics;
  /** Exact Origin values a browser may post from (scheme://host[:port]). */
  allowedOrigins?: string[];
  log?: (record: DecisionRecord) => void;
}

export const DEFAULT_ALLOWED_ORIGINS = ['https://leviora.ai'];

/** CONTACT_ALLOWED_ORIGINS: a comma-separated list; empty or unset means the default. */
export function originsFromEnv(value: string | undefined): string[] {
  const list = (value ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  return list.length ? list : DEFAULT_ALLOWED_ORIGINS;
}

// One JSON line per decision: outcome, the rate-limit key of the peer (IPv4 address or IPv6 /64),
// locale. Never the message, name, email, phone or company (KVKK: only what abuse triage needs).
const stdoutLog = (record: DecisionRecord) => console.log(JSON.stringify(record));

export function createApp(deps: AppDeps): Hono {
  const limiter = deps.limiter ?? new RateLimiter();
  const metrics = deps.metrics ?? new ContactMetrics();
  const allowedOrigins = new Set(deps.allowedOrigins ?? DEFAULT_ALLOWED_ORIGINS);
  const log = deps.log ?? stdoutLog;

  const app = new Hono();

  // The API only answers JSON to its own site: nothing may frame or render it as a document.
  app.use(
    '*',
    secureHeaders({
      contentSecurityPolicy: { defaultSrc: ["'none'"], frameAncestors: ["'none'"] },
      xFrameOptions: 'DENY',
    }),
  );

  app.get('/healthz', (c) => c.text('ok\n'));

  app.get('/metrics', (c) =>
    c.body(metrics.render(), 200, { 'Content-Type': 'text/plain; version=0.0.4; charset=utf-8' }),
  );

  app.post('/api/contact', async (c) => {
    const peer = clientKey(c.req.header('x-forwarded-for')?.split(',')[0]);
    const decide = <S extends 200 | 400 | 403 | 415 | 422 | 429 | 502>(
      outcome: Outcome,
      status: S,
      body: Record<string, unknown>,
      locale?: string,
    ) => {
      metrics.inc(outcome);
      log({
        ts: new Date().toISOString(),
        event: 'contact_decision',
        outcome,
        status,
        peer,
        ...(locale ? { locale } : {}),
      });
      return c.json(body, status);
    };

    // Cross-site posts: a browser always sends Origin on a POST, and Sec-Fetch-Site where it
    // supports it. A <form enctype="text/plain"> on another site needs no CORS preflight, so the
    // server itself must refuse it. Clients without these headers are not browsers and get no
    // ambient authority from a victim's session (there is none) — they meet the limiter.
    const origin = c.req.header('origin');
    const fetchSite = c.req.header('sec-fetch-site');
    if (
      (origin !== undefined && !allowedOrigins.has(origin)) ||
      (fetchSite !== undefined && fetchSite !== 'same-origin' && fetchSite !== 'none')
    ) {
      return decide('forbidden_origin', 403, { ok: false, error: 'forbidden_origin' });
    }

    // The site's own form always posts application/json; anything else is not ours.
    const contentType = (c.req.header('content-type') ?? '').split(';')[0].trim().toLowerCase();
    if (contentType !== 'application/json') {
      return decide('unsupported_media_type', 415, { ok: false, error: 'unsupported_media_type' });
    }

    // Limits before the body is read: a limited client costs no parsing.
    if (!limiter.hit(peer)) {
      return decide('rate_limited', 429, { ok: false, error: 'rate_limited' });
    }
    if (!limiter.globalAvailable()) {
      return decide('global_limited', 429, { ok: false, error: 'rate_limited' });
    }

    let raw: unknown;
    try {
      raw = await c.req.json();
    } catch {
      return decide('invalid_json', 400, { ok: false, error: 'invalid_json' });
    }

    const parsed = contactSchema.safeParse(raw);
    if (!parsed.success) {
      return decide('invalid_input', 422, { ok: false, error: 'invalid_input' });
    }
    const locale = parsed.data.locale;

    // Honeypot: pretend success so bots don't adapt.
    if (parsed.data.website !== '') {
      return decide('honeypot', 200, { ok: true }, locale);
    }

    if (!limiter.takeGlobal()) {
      return decide('global_limited', 429, { ok: false, error: 'rate_limited' }, locale);
    }

    try {
      await deps.send(parsed.data);
      return decide('sent', 200, { ok: true }, locale);
    } catch (err) {
      console.error('contact email failed:', err instanceof Error ? err.message : err);
      return decide('send_failed', 502, { ok: false, error: 'send_failed' }, locale);
    }
  });

  return app;
}

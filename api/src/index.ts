import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { contactSchema } from './schema.js';
import { allow } from './ratelimit.js';
import { sendContactEmail } from './email.js';

const app = new Hono();

app.get('/healthz', (c) => c.text('ok\n'));

app.post('/api/contact', async (c) => {
  const ip =
    c.req.header('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';

  let raw: unknown;
  try {
    raw = await c.req.json();
  } catch {
    return c.json({ ok: false, error: 'invalid_json' }, 400);
  }

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    return c.json({ ok: false, error: 'invalid_input' }, 422);
  }

  // Honeypot: pretend success so bots don't adapt.
  if (parsed.data.website !== '') {
    return c.json({ ok: true });
  }

  if (!allow(ip)) {
    return c.json({ ok: false, error: 'rate_limited' }, 429);
  }

  try {
    await sendContactEmail(parsed.data);
    return c.json({ ok: true });
  } catch (err) {
    console.error('contact email failed:', err instanceof Error ? err.message : err);
    return c.json({ ok: false, error: 'send_failed' }, 502);
  }
});

const port = Number(process.env.PORT ?? 8080);
serve({ fetch: app.fetch, port }, (info) => {
  console.log(`leviora-website-api listening on :${info.port}`);
});

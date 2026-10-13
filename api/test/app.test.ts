import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createApp, originsFromEnv, type DecisionRecord } from '../src/app.js';
import { RateLimiter } from '../src/ratelimit.js';
import { ContactMetrics } from '../src/metrics.js';
import type { ContactInput } from '../src/schema.js';

const ORIGIN = 'https://leviora.ai';
const VALID = { email: 'a@b.co', company: 'Acme', name: 'Ada', message: 'hi', locale: 'tr' };

function setup(opts: { limiter?: RateLimiter; failSend?: boolean } = {}) {
  const sent: ContactInput[] = [];
  const logs: DecisionRecord[] = [];
  const metrics = new ContactMetrics();
  const app = createApp({
    send: async (input) => {
      if (opts.failSend) throw new Error('boom');
      sent.push(input);
    },
    limiter: opts.limiter ?? new RateLimiter(),
    metrics,
    log: (r) => logs.push(r),
  });
  return { app, sent, logs, metrics };
}

function post(
  app: ReturnType<typeof setup>['app'],
  body: string,
  headers: Record<string, string> = {},
) {
  return app.request('/api/contact', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      origin: ORIGIN,
      'sec-fetch-site': 'same-origin',
      'x-forwarded-for': '203.0.113.9',
      ...headers,
    },
    body,
  });
}

test('the site form post is accepted and sent', async () => {
  const { app, sent, logs, metrics } = setup();
  const res = await post(app, JSON.stringify(VALID));
  assert.equal(res.status, 200);
  assert.deepEqual(await res.json(), { ok: true });
  assert.equal(sent.length, 1);
  assert.equal(metrics.get('sent'), 1);
  assert.equal(logs.length, 1);
  assert.equal(logs[0].outcome, 'sent');
  assert.equal(logs[0].peer, '203.0.113.9');
  assert.equal(logs[0].locale, 'tr');
});

test('the decision log never carries the submitted fields', async () => {
  const { app, logs } = setup();
  await post(app, JSON.stringify(VALID));
  const line = JSON.stringify(logs[0]);
  for (const v of [VALID.email, VALID.company, VALID.name, VALID.message]) {
    assert.equal(line.includes(v), false, `log line contains ${v}`);
  }
});

test('a cross-site text/plain form post is refused before anything is sent', async () => {
  const { app, sent, metrics } = setup();
  // what <form enctype="text/plain"> with the JSON in a field name produces
  const body = '{"email":"a@b.co","company":"X","x":"=junk"}';
  const res = await post(app, body, {
    'content-type': 'text/plain',
    origin: 'https://evil.example',
    'sec-fetch-site': 'cross-site',
  });
  assert.equal(res.status, 403);
  assert.equal(sent.length, 0);
  assert.equal(metrics.get('forbidden_origin'), 1);
});

test('a foreign Origin is refused even with a JSON content type', async () => {
  const { app, sent } = setup();
  const res = await post(app, JSON.stringify(VALID), { origin: 'https://evil.example' });
  assert.equal(res.status, 403);
  assert.equal(sent.length, 0);
});

test('Sec-Fetch-Site same-site or cross-site is refused', async () => {
  for (const site of ['same-site', 'cross-site']) {
    const { app, sent } = setup();
    const res = await post(app, JSON.stringify(VALID), { 'sec-fetch-site': site });
    assert.equal(res.status, 403, site);
    assert.equal(sent.length, 0);
  }
});

test('a same-origin text/plain or missing content type is refused (415)', async () => {
  for (const ct of ['text/plain', 'application/x-www-form-urlencoded', '']) {
    const { app, sent, metrics } = setup();
    const res = await post(app, JSON.stringify(VALID), { 'content-type': ct });
    assert.equal(res.status, 415, ct);
    assert.equal(sent.length, 0);
    assert.equal(metrics.get('unsupported_media_type'), 1);
  }
});

test('application/json with a charset parameter is accepted', async () => {
  const { app, sent } = setup();
  const res = await post(app, JSON.stringify(VALID), {
    'content-type': 'application/json; charset=utf-8',
  });
  assert.equal(res.status, 200);
  assert.equal(sent.length, 1);
});

test('a non-browser client without Origin/Sec-Fetch-Site still works', async () => {
  const { app, sent } = setup();
  const res = await app.request('/api/contact', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-forwarded-for': '203.0.113.9' },
    body: JSON.stringify(VALID),
  });
  assert.equal(res.status, 200);
  assert.equal(sent.length, 1);
});

test('the per-client limit applies before the body is read', async () => {
  const { app, metrics } = setup({ limiter: new RateLimiter({ maxPerKey: 1 }) });
  assert.equal((await post(app, JSON.stringify(VALID))).status, 200);
  const res = await post(app, '{not json');
  assert.equal(res.status, 429);
  assert.equal(metrics.get('rate_limited'), 1);
  assert.equal(metrics.get('invalid_json'), 0);
});

test('IPv6 sources inside one /64 share the per-client limit', async () => {
  const { app } = setup({ limiter: new RateLimiter({ maxPerKey: 2 }) });
  const send = (ip: string) => post(app, JSON.stringify(VALID), { 'x-forwarded-for': ip });
  assert.equal((await send('2001:db8:5:6::1')).status, 200);
  assert.equal((await send('2001:db8:5:6::2')).status, 200);
  assert.equal((await send('2001:db8:5:6::3')).status, 429);
  assert.equal((await send('2001:db8:5:7::1')).status, 200);
});

test('the global budget stops sends from many sources', async () => {
  const { app, sent, metrics } = setup({
    limiter: new RateLimiter({ globalMaxSends: 2 }),
  });
  const statuses: number[] = [];
  for (let i = 1; i <= 4; i++) {
    const res = await post(app, JSON.stringify(VALID), { 'x-forwarded-for': `198.51.100.${i}` });
    statuses.push(res.status);
  }
  assert.deepEqual(statuses, [200, 200, 429, 429]);
  assert.equal(sent.length, 2);
  assert.equal(metrics.get('global_limited'), 2);
});

test('honeypot hits and invalid input do not consume the global budget', async () => {
  const { app, sent } = setup({ limiter: new RateLimiter({ globalMaxSends: 1 }) });
  const honeypot = await post(app, JSON.stringify({ ...VALID, website: 'x' }), {
    'x-forwarded-for': '198.51.100.1',
  });
  assert.equal(honeypot.status, 200);
  const invalid = await post(app, JSON.stringify({ email: 'nope' }), {
    'x-forwarded-for': '198.51.100.2',
  });
  assert.equal(invalid.status, 422);
  const real = await post(app, JSON.stringify(VALID), { 'x-forwarded-for': '198.51.100.3' });
  assert.equal(real.status, 200);
  assert.equal(sent.length, 1);
});

test('honeypot and validation outcomes are counted and logged', async () => {
  const { app, logs, metrics } = setup();
  await post(app, JSON.stringify({ ...VALID, website: 'x' }));
  await post(app, '{oops', { 'x-forwarded-for': '198.51.100.8' });
  await post(app, JSON.stringify({ email: 'a@b.co' }), { 'x-forwarded-for': '198.51.100.9' });
  assert.equal(metrics.get('honeypot'), 1);
  assert.equal(metrics.get('invalid_json'), 1);
  assert.equal(metrics.get('invalid_input'), 1);
  assert.deepEqual(
    logs.map((l) => l.outcome),
    ['honeypot', 'invalid_json', 'invalid_input'],
  );
});

test('a CR/LF in the company (email subject) is rejected', async () => {
  const { app, sent } = setup();
  const res = await post(app, JSON.stringify({ ...VALID, company: 'Acme\r\nBcc: x@y.z' }));
  assert.equal(res.status, 422);
  assert.equal(sent.length, 0);
});

test('a send failure answers 502 with a constant body', async () => {
  const { app, metrics } = setup({ failSend: true });
  const res = await post(app, JSON.stringify(VALID));
  assert.equal(res.status, 502);
  assert.deepEqual(await res.json(), { ok: false, error: 'send_failed' });
  assert.equal(metrics.get('send_failed'), 1);
});

test('API responses carry security headers', async () => {
  const { app } = setup();
  for (const res of [await post(app, JSON.stringify(VALID)), await app.request('/healthz')]) {
    assert.equal(res.headers.get('x-content-type-options'), 'nosniff');
    assert.equal(res.headers.get('x-frame-options'), 'DENY');
    assert.match(res.headers.get('content-security-policy') ?? '', /default-src 'none'/);
    assert.match(res.headers.get('content-security-policy') ?? '', /frame-ancestors 'none'/);
    assert.ok(res.headers.get('referrer-policy'));
    assert.ok(res.headers.get('strict-transport-security'));
  }
});

test('/metrics renders the counter by outcome', async () => {
  const { app } = setup();
  await post(app, JSON.stringify(VALID));
  const res = await app.request('/metrics');
  assert.equal(res.status, 200);
  const text = await res.text();
  assert.match(text, /# TYPE leviora_website_contact_requests_total counter/);
  assert.match(text, /leviora_website_contact_requests_total\{outcome="sent"\} 1/);
  assert.match(text, /leviora_website_contact_requests_total\{outcome="rate_limited"\} 0/);
});

test('CONTACT_ALLOWED_ORIGINS parsing', () => {
  assert.deepEqual(originsFromEnv(undefined), ['https://leviora.ai']);
  assert.deepEqual(originsFromEnv(' '), ['https://leviora.ai']);
  assert.deepEqual(originsFromEnv('http://localhost:8088, https://leviora.ai'), [
    'http://localhost:8088',
    'https://leviora.ai',
  ]);
});

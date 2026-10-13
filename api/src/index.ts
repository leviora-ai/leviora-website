import { serve } from '@hono/node-server';
import { createApp, originsFromEnv } from './app.js';
import { RateLimiter } from './ratelimit.js';
import { sendContactEmail } from './email.js';

const limiter = new RateLimiter();
limiter.start();

const app = createApp({
  send: sendContactEmail,
  limiter,
  allowedOrigins: originsFromEnv(process.env.CONTACT_ALLOWED_ORIGINS),
});

const port = Number(process.env.PORT ?? 8080);
serve({ fetch: app.fetch, port }, (info) => {
  console.log(`leviora-website-api listening on :${info.port}`);
});

import { styleText } from 'node:util';
import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { messages } from '#shared/messages.ts';

const origin = process.env.DEV ? 'http://localhost:4000' : '';

const app = new Hono()
  .use(cors({ origin, credentials: true }))
  .basePath('/api')
  .use(logger())
  .get('/health', (c) => c.text('OK'));

serve({
  fetch: app.fetch,
});

export type HonoServer = typeof app;
console.log(styleText('magentaBright', messages.server));

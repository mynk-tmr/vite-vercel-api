import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';

const app = new Hono()
  .use(
    cors({
      origin: process.env.CLIENT_URL || '',
    }),
  )
  .basePath('/api')
  .use(logger())
  .get('/health', (c) => c.text('OK'));

serve({
  fetch: app.fetch,
});

export type HonoServer = typeof app;

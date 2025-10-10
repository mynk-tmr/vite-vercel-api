import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';

const app = new Hono().basePath('/api');

if (!process.env.VERCEL) {
  app.use(cors({ origin: '*' }));
  app.use(logger());
}

app.get('/', (c) => {
  return c.text('Hello Hono!');
});

export default app;

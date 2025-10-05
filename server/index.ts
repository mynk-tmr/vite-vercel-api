import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'

const origin = process.env.VERCEL ? '' : '*'

const app = new Hono()
  .basePath('/api')
  .use(logger())
  .use(cors({ origin }))
  .get('/hello', c => c.text('Hello From Server!'))

serve({
  fetch: app.fetch,
}).once('listening', () => console.log('Listening on http://localhost:3000'))

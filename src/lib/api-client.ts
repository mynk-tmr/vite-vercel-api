import { hc } from 'hono/client';
import type { HonoServer } from '#server/index.ts';
import { messages } from '#shared/messages.ts';

const apiUrl = import.meta.env.DEV ? 'http://localhost:3000' : '';
console.log(messages.client);

export const { api } = hc<HonoServer>(apiUrl);

export const data = api.health
  .$get()
  .then((rs) => rs.text())
  .catch((err) => err.message);

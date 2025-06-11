import { hc } from 'hono/client';
import type { HonoServer } from '~server/index';

const apiUrl = import.meta.env.DEV ? 'http://localhost:3000' : '';

export const { api } = hc<HonoServer>(apiUrl);

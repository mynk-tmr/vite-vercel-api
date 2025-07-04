import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import vercel from 'vite-plugin-vercel';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vercel()],
  server: {
    watch: {
      ignored: './server',
    },
  },
  build: {
    rollupOptions: {
      external: ['./server'],
    },
  },
});

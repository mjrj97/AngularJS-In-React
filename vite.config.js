import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'es2022',
  },
  preview: { host: 'localhost', port: 3000 },
  server: { host: 'localhost', port: 3000 },
});

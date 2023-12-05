import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  preview: { host: 'localhost', port: 4000 },
  server: { host: 'localhost', port: 3000 },
});
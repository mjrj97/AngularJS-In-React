import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  publicDir: 'public',
  build: {
    outDir: '../dist',
    target: 'es2022',
  },
  preview: { host: 'localhost', port: 3000 },
  server: { host: 'localhost', port: 3000 },
});

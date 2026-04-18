import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/lumeri-mini-app/',
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0
  }
});

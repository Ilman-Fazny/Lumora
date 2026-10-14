import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Lumora/',
  server: {
    port: 3000,
    open: true
  }
});

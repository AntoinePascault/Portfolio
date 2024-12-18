import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Remove the /Portfolio/ base as it's causing the 404 errors
  base: '/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
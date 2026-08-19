import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load all environment variables from process.cwd() regardless of prefix
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    build: {
      sourcemap: true
    },
    css: {
      devSourcemap: true
    },
    define: {
      'import.meta.env.VITE_SITE_URL': JSON.stringify(env.SITE_URL || 'https://netfusionideal.com'),
      'import.meta.env.VITE_EMAILJS_SERVICE_ID': JSON.stringify(env.EMAILJS_SERVICE_ID || ''),
      'import.meta.env.VITE_EMAILJS_TEMPLATE_ID': JSON.stringify(env.EMAILJS_TEMPLATE_ID || ''),
      'import.meta.env.VITE_EMAILJS_PUBLIC_KEY': JSON.stringify(env.EMAILJS_PUBLIC_KEY || '')
    }
  };
});

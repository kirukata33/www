import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Ganti `site` dengan domain asli setelah deploy (untuk sitemap dan SEO).
export default defineConfig({
  site: 'https://example.com',
  vite: {
    plugins: [tailwindcss()],
  },
});

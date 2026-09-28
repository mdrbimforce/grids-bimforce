import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// grids.bimforce.com — productwebsite van GRiDS (2026-09-28, quest-139 step-07).
// Zelfde stack als knowledge.bimforce.com: Astro 5 + Tailwind + Cloudflare Pages.
export default defineConfig({
  site: 'https://grids.bimforce.com',
  integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
});

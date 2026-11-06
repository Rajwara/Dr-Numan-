// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// TODO: set to the final production domain before launch.
export default defineConfig({
  site: 'https://www.drnaumanniaz.com',
  integrations: [mdx(), sitemap()],
});

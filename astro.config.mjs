// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

/**
 * The site's public address, used for share-preview images (Slack, WhatsApp, LinkedIn…),
 * canonical links and the sitemap. Order of preference:
 *  1. SITE_URL, if set in Vercel → Settings → Environment Variables
 *  2. the project's production domain, which Vercel provides at build time
 *     (a custom domain once one is connected, otherwise the .vercel.app address)
 *  3. the planned final domain
 */
const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const site = process.env.SITE_URL || (vercelProd ? `https://${vercelProd}` : 'https://www.drnaumanniaz.com');

export default defineConfig({
  site,
  integrations: [mdx(), sitemap()],
});

// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import frenchTypography from './src/integrations/french-typography.mjs';

// Domaine de production — à mettre à jour si le nom de domaine change.
const SITE_URL = 'https://www.msprohygiene.fr';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap(), frenchTypography()],
});

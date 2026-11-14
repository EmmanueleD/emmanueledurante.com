import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  site: 'https://emmanueledurante.com',
  // Download during build; browsers fetch these fonts from our own domain.
  fonts: [
    {
      name: 'Radio Canada Big',
      cssVariable: '--local-radio-canada-big',
      provider: fontProviders.google(),
      weights: [400, 700],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      formats: ['woff2'],
    },
    {
      name: 'Radio Canada',
      cssVariable: '--local-radio-canada',
      provider: fontProviders.google(),
      weights: [400, 500],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      formats: ['woff2'],
    },
  ],
});

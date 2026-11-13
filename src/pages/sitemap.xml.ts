import type { APIRoute } from 'astro';
import { languages, languagePath } from '../data/locales';

/** Include only published routes and their equivalent translated versions. */
export const GET: APIRoute = ({ site }) => {
  if (!site) {
    throw new Error('Set Astro site in astro.config.mjs to generate the sitemap');
  }

  const paths = ['', 'privacy/'];
  const sections = paths.map((path) => {
    const pages = languages.map((language) => ({
      language,
      url: new URL(languagePath(language) + path, site).href,
    }));

    const alternates = pages
      .map(({ language, url }) => `    <xhtml:link rel="alternate" hreflang="${language}" href="${url}" />`)
      .join('\n');

    return pages.map(({ url }) => `  <url>
    <loc>${url}</loc>
${alternates}
    <xhtml:link rel="alternate" hreflang="x-default" href="${pages[0].url}" />
  </url>`).join('\n');
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sections.join('\n')}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};

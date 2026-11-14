import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { loadPortfolioCms, visibleProjects, visibleServices, makeCopyReader } from '../lib/portfolioCms';

// Optional machine-readable overview, not a replacement for semantic HTML,
// sitemap.xml, robots.txt, or the public localized pages themselves.
export const prerender = false;

function oneline(value: string): string {
  return value.replace(/\s+/g, ' ').replace(/[\[\]<>]/g, '').trim().slice(0, 600);
}

export const GET: APIRoute = async () => {
  const data = await loadPortfolioCms();
  const copy = makeCopyReader(data.copy, 'en');
  const projects = visibleProjects(data.projects, 'en') ?? site.projects;
  const services = visibleServices(data.services, 'en') ?? site.services;

  const lines = [
    '# Emmanuele Durante',
    '',
    '> ' + oneline(copy('seo_description', site.description)),
    '',
    'Frontend developer based in Forlì, Italy. This is the official personal portfolio.',
    '',
    '## Official language versions',
    '- [English](https://emmanueledurante.com/)',
    '- [Italiano](https://emmanueledurante.com/it/)',
    '- [Español](https://emmanueledurante.com/es/)',
    '',
    '## Selected work',
    ...projects.map((project) =>
      '- **' + oneline(project.title) + '**: ' + oneline(project.description)
    ),
    '',
    '## Areas of expertise',
    ...services.map((service) =>
      '- **' + oneline(service.title) + '**: ' + oneline(service.detail)
    ),
    '',
    '## Contact and authoritative sources',
    '- [Portfolio and contact](https://emmanueledurante.com/#contact)',
    '- [LinkedIn profile](https://www.linkedin.com/in/e14e/)',
    '- [Sitemap](https://emmanueledurante.com/sitemap.xml)',
    '',
    'For the most current information, prefer the public pages in their respective languages.',
    '',
  ];
  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'private, no-store',
      'X-Content-Type-Options': 'nosniff',
    },
  });
};

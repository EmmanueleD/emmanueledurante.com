/**
 * Server-side, anonymous PocketBase data access for the portfolio.
 *
 * Used by Astro while generating static pages and llms.txt for Hetzner.
 * After editing content in PocketBase, rerun the Hetzner deployment workflow
 * to regenerate the public pages. A failed request uses embedded fallbacks.
 * Public list rules are enforced by PocketBase; testimonials are also filtered
 * here to prevent including records without explicit publication + consent.
 */
import type { Language } from '../data/locales';
import type { ClientLogo } from '../data/clientLogos';
import type { Testimonial } from '../data/testimonials';

const CMS_ORIGIN = 'https://cms.emmanueledurante.com';
type DataRow = Record<string, unknown>;
type CollectionName = 'homepage_copy' | 'portfolio_projects' | 'portfolio_services' | 'client_logos' | 'testimonials';

export interface ProjectContent {
  category: string;
  title: string;
  description: string;
  technologies: string[];
}
export interface ServiceContent {
  title: string;
  detail: string;
}
export interface PortfolioCms {
  copy: DataRow[] | null;
  projects: DataRow[] | null;
  services: DataRow[] | null;
  clients: DataRow[] | null;
  testimonials: DataRow[] | null;
}

async function fetchCollection(name: CollectionName): Promise<DataRow[] | null> {
  const url = new URL(`/api/collections/${name}/records`, CMS_ORIGIN);
  url.searchParams.set('perPage', '100');
  if (name === 'portfolio_projects' || name === 'portfolio_services' || name === 'client_logos') {
    url.searchParams.set('sort', 'sort_order');
  }
  try {
    const response = await fetch(url, {
      headers: { Accept: 'application/json' },
      cache: 'no-store',
      signal: AbortSignal.timeout(4000),
    });
    if (!response.ok) return null;
    const value: unknown = await response.json();
    if (!value || typeof value !== 'object') return null;
    const items = (value as { items?: unknown }).items;
    if (!Array.isArray(items)) return null;
    return items.filter((row): row is DataRow => typeof row === 'object' && row !== null);
  } catch (error) {
    console.warn(`PocketBase: could not load ${name}`, error);
    return null;
  }
}

export async function loadPortfolioCms(): Promise<PortfolioCms> {
  const [copy, projects, services, clients, testimonials] = await Promise.all([
    fetchCollection('homepage_copy'),
    fetchCollection('portfolio_projects'),
    fetchCollection('portfolio_services'),
    fetchCollection('client_logos'),
    fetchCollection('testimonials'),
  ]);
  return { copy, projects, services, clients, testimonials };
}

function value(row: DataRow, name: string): string {
  const raw = row[name];
  return typeof raw === 'string' ? raw.trim() : '';
}

export function localized(row: DataRow, name: string, lang: Language, fallback = ''): string {
  return value(row, `${name}_${lang}`) || value(row, `${name}_en`) || fallback;
}

export function makeCopyReader(rows: DataRow[] | null, lang: Language) {
  const map = new Map<string, DataRow>();
  for (const item of rows ?? []) {
    if (item.visible === true && value(item, 'slug')) {
      map.set(value(item, 'slug'), item);
    }
  }
  return (key: string, fallback: string): string => {
    const row = map.get(key);
    return row ? localized(row, 'text', lang, fallback) : fallback;
  };
}

export function visibleProjects(rows: DataRow[] | null, lang: Language): ProjectContent[] | null {
  if (rows === null) return null;
  return rows.filter((row) => row.visible === true)
    .map((row): ProjectContent => ({
      category: localized(row, 'category', lang),
      title: localized(row, 'title', lang),
      description: localized(row, 'description', lang),
      technologies: value(row, 'technologies').split(',').map((tag) => tag.trim()).filter(Boolean),
    }))
    .filter((row) => row.title && row.description);
}

export function visibleServices(rows: DataRow[] | null, lang: Language): ServiceContent[] | null {
  if (rows === null) return null;
  return rows.filter((row) => row.visible === true)
    .map((row): ServiceContent => ({
      title: localized(row, 'title', lang),
      detail: localized(row, 'detail', lang),
    }))
    .filter((row) => row.title && row.detail);
}

function safeHttps(raw: string): string | undefined {
  try {
    const url = new URL(raw);
    if (url.protocol === 'https:') return url.href;
  } catch { /* invalid or empty URL */ }
  return undefined;
}

export function visibleClients(rows: DataRow[] | null): ClientLogo[] | null {
  if (rows === null) return null;
  return rows.filter((row) => row.visible === true && value(row, 'name'))
    .map((row): ClientLogo => {
      const collectionId = value(row, 'collectionId');
      const id = value(row, 'id');
      const filename = value(row, 'logo');
      const validId = /^[a-zA-Z0-9_-]+$/;
      const storedLogo =
        validId.test(collectionId) && validId.test(id) && filename
          ? `${CMS_ORIGIN}/api/files/${collectionId}/${id}/${encodeURIComponent(filename)}`
          : undefined;
      return {
        id: value(row, 'slug') || id,
        name: value(row, 'name'),
        website: safeHttps(value(row, 'website')),
        logoSrc: storedLogo ?? safeHttps(value(row, 'legacy_logo_url')),
      };
    });
}

export function approvedTestimonials(rows: DataRow[] | null): Testimonial[] {
  // If the API fails, render no testimonials rather than risk disclosing
  // records that have been unpublished or whose consent was withdrawn.
  return (rows ?? [])
    .filter((row) => row.published === true && row.consent_to_publish === true)
    .map((row): Testimonial | null => {
      const sourceLanguage = value(row, 'source_language') as Language;
      if (!(['it', 'en', 'es'] as const).includes(sourceLanguage)) return null;
      const text = {
        en: value(row, 'text_en'),
        it: value(row, 'text_it'),
        es: value(row, 'text_es'),
      };
      const original = text[sourceLanguage];
      const author = value(row, 'author');
      const role = value(row, 'role');
      if (!original || !author || !role) return null;

      const fallback = original;
      const localizedText = {
        en: text.en || fallback,
        it: text.it || fallback,
        es: text.es || fallback,
      };
      return {
        id: value(row, 'id'),
        author,
        role,
        company: value(row, 'company') || undefined,
        profileUrl: safeHttps(value(row, 'linkedin_url')),
        sourceLanguage,
        text: localizedText,
        excerpt: {
          en: value(row, 'excerpt_en') || localizedText.en,
          it: value(row, 'excerpt_it') || localizedText.it,
          es: value(row, 'excerpt_es') || localizedText.es,
        },
        consentToPublish: true,
      };
    })
    .filter((item): item is Testimonial => item !== null);
}

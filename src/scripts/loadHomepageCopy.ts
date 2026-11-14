/**
 * Runtime localized homepage content from PocketBase.
 * Static Astro text remains in the DOM until the CMS returns valid rows.
 * No HTML is injected; all user-editable fields are rendered via textContent.
 */
type Lang = 'en' | 'it' | 'es';

interface CopyRow {
  slug: string;
  visible: boolean;
  text_it: string;
  text_en: string;
  text_es: string;
}

const validLang = (lang: string | undefined): lang is Lang =>
  lang === 'en' || lang === 'it' || lang === 'es';

function validRow(value: unknown): value is CopyRow {
  if (!value || typeof value !== 'object') return false;
  const record = value as Record<string, unknown>;
  return record.visible === true && typeof record.slug === 'string';
}

async function hydrate() {
  const lang = document.documentElement.lang;
  if (!validLang(lang)) return;
  const url = new URL(
    '/api/collections/homepage_copy/records',
    'https://cms.emmanueledurante.com',
  );
  url.searchParams.set('perPage', '100');
  try {
    const response = await fetch(url, { credentials: 'omit', cache: 'no-store' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data: unknown = await response.json();
    if (!data || typeof data !== 'object') return;
    const items = (data as { items?: unknown }).items;
    if (!Array.isArray(items)) return;
    const rows = new Map<string, CopyRow>();
    for (const value of items) if (validRow(value)) rows.set(value.slug, value);

    for (const node of document.querySelectorAll<HTMLElement>('[data-cms-copy]')) {
      const key = node.dataset.cmsCopy;
      if (!key) continue;
      const record = rows.get(key);
      if (!record) continue;
      const translated = record[`text_${lang}`];
      const english = record.text_en;
      const text = typeof translated === 'string' && translated.trim()
        ? translated : typeof english === 'string' ? english : '';
      if (!text.trim()) continue;

      if (key === 'expertise_technologies') {
        const tags = text.split(',').map((item) => item.trim()).filter(Boolean);
        if (tags.length === 0 || tags.length > 30) continue;
        node.replaceChildren(...tags.map((tag) => {
          const li = document.createElement('li');
          li.textContent = tag;
          return li;
        }));
      } else {
        node.textContent = text;
      }
    }
  } catch (error) {
    console.warn('Homepage CMS fallback:', error);
  }
}

void hydrate();

/**
 * Progressive CMS enhancement for projects and services.
 * Static Astro content remains an SEO/offline fallback if PocketBase fails.
 * Only textContent is used when rendering remote data.
 */
type Language = 'en' | 'it' | 'es';
type DataRow = Record<string, unknown>;

function isLanguage(lang: string | undefined): lang is Language {
  return lang === 'en' || lang === 'it' || lang === 'es';
}

function textValue(record: DataRow, prefix: string, lang: Language): string {
  const localized = record[`${prefix}_${lang}`];
  const english = record[`${prefix}_en`];
  return typeof localized === 'string' && localized.trim()
    ? localized : typeof english === 'string' ? english : '';
}

function element<K extends keyof HTMLElementTagNameMap>(
  tag: K, className: string, text: string
): HTMLElementTagNameMap[K] {
  const result = document.createElement(tag);
  if (className) result.className = className;
  result.textContent = text;
  return result;
}

async function getItems(collection: string): Promise<DataRow[]> {
  const url = new URL(
    `/api/collections/${collection}/records`,
    'https://cms.emmanueledurante.com'
  );
  url.searchParams.set('perPage', '100');
  url.searchParams.set('sort', 'sort_order');
  const response = await fetch(url, {
    credentials: 'omit',
    cache: 'no-store'
  });
  if (!response.ok) throw new Error(`${collection}: HTTP ${response.status}`);
  const data: unknown = await response.json();
  if (typeof data !== 'object' || data === null) throw new Error('Invalid data');
  const items = (data as { items?: unknown }).items;
  if (!Array.isArray(items)) throw new Error('Missing collection items');
  return items.filter((row): row is DataRow =>
    typeof row === 'object' &&
    row !== null &&
    (row as DataRow).visible === true
  );
}

function projectCard(item: DataRow, lang: Language): HTMLLIElement | null {
  const title = textValue(item, 'title', lang);
  const description = textValue(item, 'description', lang);
  if (!title || !description) return null;

  const li = element('li', 'project-index__item', '');
  const lead = element('div', 'project-index__lead', '');
  const category = textValue(item, 'category', lang);
  lead.append(
    element('p', 'project-index__type', category.replaceAll(' · ', ' / ')),
    element('h3', '', title)
  );

  const details = element('div', 'project-index__details', '');
  details.append(element('p', '', description));
  const tags = element('ul', '', '');
  const technologies = item.technologies;
  if (typeof technologies === 'string') {
    for (const name of technologies.split(',').map((s) => s.trim()).filter(Boolean)) {
      tags.append(element('li', '', name));
    }
  }
  details.append(tags);
  li.append(lead, details);
  return li;
}

function serviceCard(item: DataRow, lang: Language): HTMLLIElement | null {
  const title = textValue(item, 'title', lang);
  const detail = textValue(item, 'detail', lang);
  if (!title || !detail) return null;
  const li = element('li', '', '');
  const content = element('div', '', '');
  content.append(element('h3', '', title), element('p', '', detail));
  li.append(content);
  return li;
}

async function renderProjects(): Promise<void> {
  const list = document.querySelector<HTMLUListElement>('[data-cms-projects]');
  const lang = list?.dataset.lang;
  if (!list || !isLanguage(lang)) return;
  try {
    const items = await getItems('portfolio_projects');
    const cards = items.map((item) => projectCard(item, lang))
      .filter((item): item is HTMLLIElement => item !== null);
    // An intentionally empty CMS collection means the owner hid all projects.
    list.replaceChildren(...cards);
    const section = list.closest<HTMLElement>('section');
    if (section) section.hidden = cards.length === 0;
  } catch (err) {
    // Keep the build-time HTML for SEO and availability during CMS outages.
    console.warn('Projects CMS fallback:', err);
  }
}

async function renderServices(): Promise<void> {
  const list = document.querySelector<HTMLUListElement>('[data-cms-services]');
  const lang = list?.dataset.lang;
  if (!list || !isLanguage(lang)) return;
  try {
    const items = await getItems('portfolio_services');
    const cards = items.map((item) => serviceCard(item, lang))
      .filter((item): item is HTMLLIElement => item !== null);
    list.replaceChildren(...cards);
    const section = list.closest<HTMLElement>('section');
    if (section) section.hidden = cards.length === 0;
  } catch (err) {
    console.warn('Services CMS fallback:', err);
  }
}

void renderProjects();
void renderServices();

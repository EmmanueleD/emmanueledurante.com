/**
 * Runtime PocketBase loading keeps testimonial updates independent of Astro builds.
 * PocketBase's collection list/view rules are the first authorization boundary.
 * Fail closed on the client as well: only published + consent-cleared records render.
 * Always use textContent for untrusted content, never innerHTML.
 */
type Lang = 'en' | 'it' | 'es';

interface CmsTestimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  linkedin_url: string;
  source_language: Lang;
  text_it: string;
  text_en: string;
  text_es: string;
  excerpt_it: string;
  excerpt_en: string;
  excerpt_es: string;
  published: boolean;
  consent_to_publish: boolean;
}

const languages: readonly Lang[] = ['en', 'it', 'es'];
const languageNames: Record<Lang, Record<Lang, string>> = {
  en: { en: 'English', it: 'Italian', es: 'Spanish' },
  it: { en: 'inglese', it: 'italiano', es: 'spagnolo' },
  es: { en: 'inglés', it: 'italiano', es: 'español' },
};
const readOriginalLabel: Record<Lang, string> = {
  en: 'Original in',
  it: 'Originale in',
  es: 'Original en',
};

function isLang(value: unknown): value is Lang {
  return typeof value === 'string' && languages.includes(value as Lang);
}

function isValidItem(value: unknown): value is CmsTestimonial {
  if (typeof value !== 'object' || value === null) return false;
  const item = value as Record<string, unknown>;
  return (
    item.published === true &&
    item.consent_to_publish === true &&
    typeof item.id === 'string' &&
    typeof item.author === 'string' && item.author.trim().length > 0 &&
    typeof item.role === 'string' && item.role.trim().length > 0 &&
    isLang(item.source_language) &&
    typeof item.text_it === 'string' &&
    typeof item.text_en === 'string' &&
    typeof item.text_es === 'string' &&
    typeof item.excerpt_it === 'string' &&
    typeof item.excerpt_en === 'string' &&
    typeof item.excerpt_es === 'string'
  );
}

function safeLinkedInUrl(value: string): string | null {
  try {
    const url = new URL(value);
    if (
      url.protocol === 'https:' &&
      (url.hostname === 'www.linkedin.com' || url.hostname === 'linkedin.com') &&
      url.pathname.startsWith('/in/')
    ) return url.href;
  } catch {
    // Ignore a missing or invalid profile URL.
  }
  return null;
}

function fillCard(template: HTMLTemplateElement, item: CmsTestimonial, lang: Lang): HTMLLIElement | null {
  const card = template.content.firstElementChild?.cloneNode(true);
  if (!(card instanceof HTMLLIElement)) return null;

  const source = item.source_language;
  // If a translation is missing, show the original rather than an empty quote.
  const translated = item[`text_${lang}`] || item[`text_${source}`];
  const original = item[`text_${source}`];
  if (!translated.trim() || !original.trim()) return null;

  const excerpt = item[`excerpt_${lang}`] || translated;
  const excerptNode = card.querySelector<HTMLElement>('[data-testimonial-excerpt]');
  const textNode = card.querySelector<HTMLElement>('[data-testimonial-text]');
  const originalNode = card.querySelector<HTMLElement>('[data-testimonial-original]');
  const originalTextNode = card.querySelector<HTMLElement>('[data-testimonial-original-text]');
  const originalTitleNode = card.querySelector<HTMLElement>('[data-testimonial-original-title]');
  const nameNode = card.querySelector<HTMLElement>('[data-testimonial-author]');
  const roleNode = card.querySelector<HTMLElement>('[data-testimonial-role]');
  const profileNode = card.querySelector<HTMLAnchorElement>('[data-testimonial-profile]');

  if (!excerptNode || !textNode || !originalNode || !originalTextNode ||
      !originalTitleNode || !nameNode || !roleNode || !profileNode) return null;

  excerptNode.textContent = `“${excerpt}”`;
  excerptNode.lang = lang;
  textNode.textContent = `“${translated}”`;
  textNode.lang = lang;
  nameNode.textContent = item.author;
  roleNode.textContent = item.role + (item.company ? ` · ${item.company}` : '');

  if (lang !== source) {
    originalNode.hidden = false;
    originalTitleNode.textContent = `${readOriginalLabel[lang]} ${languageNames[lang][source]}`;
    originalTextNode.textContent = original;
    originalTextNode.lang = source;
  }

  const profileUrl = safeLinkedInUrl(item.linkedin_url || '');
  if (profileUrl) {
    profileNode.href = profileUrl;
    profileNode.hidden = false;
  }

  return card;
}

function initializeRail(section: HTMLElement, rail: HTMLElement): void {
  section.addEventListener('wheel', (event: WheelEvent) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey) return;
    if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
    if (event.target instanceof Element &&
        event.target.closest('button, a, .testimonial__details[open]')) return;

    const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? rail.clientWidth : 1;
    const delta = event.deltaY * unit;
    const maxLeft = Math.max(0, rail.scrollWidth - rail.clientWidth);
    const current = rail.scrollLeft;
    const next = Math.max(0, Math.min(maxLeft, current + delta));
    if (Math.abs(next - current) > 0.1) {
      event.preventDefault();
      rail.scrollLeft = next;
    }
  }, { passive: false });

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  for (const button of section.querySelectorAll<HTMLButtonElement>('[data-rail-step]')) {
    button.addEventListener('click', () => {
      const firstCard = rail.querySelector<HTMLElement>('.testimonials__item');
      if (!firstCard) return;
      const gap = parseFloat(getComputedStyle(rail).columnGap) || 0;
      rail.scrollBy({
        left: Number(button.dataset.railStep) * (firstCard.getBoundingClientRect().width + gap),
        behavior: reducedMotion.matches ? 'instant' : 'smooth',
      });
    });
  }
}

async function loadSection(section: HTMLElement): Promise<void> {
  const lang = section.dataset.language;
  const api = section.dataset.cmsUrl;
  const rail = section.querySelector<HTMLUListElement>('[data-testimonials-rail]');
  const template = section.querySelector<HTMLTemplateElement>('[data-testimonial-template]');
  if (!isLang(lang) || !api || !rail || !template) return;

  initializeRail(section, rail);

  try {
    const url = new URL('/api/collections/testimonials/records', api);
    url.searchParams.set('perPage', '100');
    url.searchParams.set('sort', '-created');

    // No auth token is needed: PocketBase allows only consent-cleared,
    // explicitly published records through its public API.
    const response = await fetch(url, {
      mode: 'cors',
      credentials: 'omit',
      cache: 'no-store',
    });
    if (!response.ok) throw new Error(`PocketBase returned ${response.status}`);
    const result: unknown = await response.json();
    if (typeof result !== 'object' || result === null) return;
    const items = (result as { items?: unknown }).items;
    if (!Array.isArray(items)) return;

    const cards = items
      .filter(isValidItem)
      .map((item) => fillCard(template, item, lang))
      .filter((item): item is HTMLLIElement => item !== null);
    if (cards.length === 0) return;

    rail.append(...cards);
    section.hidden = false;
    for (const link of document.querySelectorAll<HTMLElement>('[data-testimonials-nav]')) {
      link.hidden = false;
    }
  } catch (error) {
    // Fail closed: do not reveal unpublished content or break the rest of the page.
    console.warn('Unable to load published testimonials:', error);
  }
}

for (const section of document.querySelectorAll<HTMLElement>('[data-testimonials-cms]')) {
  void loadSection(section);
}

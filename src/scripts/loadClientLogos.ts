/**
 * Render client logos directly from PocketBase; no new Astro build on edits.
 * The PocketBase logo file wins over the temporary legacy image URL.
 * Never inject untrusted CMS values as HTML.
 */
type ClientRow = {
  id: string;
  collectionId: string;
  slug: string;
  name: string;
  website: string;
  logo: string;
  legacy_logo_url: string;
  sort_order: number;
  visible: boolean;
};

function isClient(value: unknown): value is ClientRow {
  if (typeof value !== 'object' || value === null) return false;
  const row = value as Record<string, unknown>;
  return (
    row.visible === true &&
    typeof row.id === 'string' &&
    typeof row.collectionId === 'string' &&
    typeof row.name === 'string' && row.name.trim().length > 0
  );
}

function httpsUrl(value: unknown): string | null {
  if (typeof value !== 'string') return null;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' ? url.href : null;
  } catch {
    return null;
  }
}

function fileUrl(base: string, client: ClientRow): string | null {
  if (typeof client.logo !== 'string' || !client.logo) return null;
  if (!/^[a-z0-9_-]+$/i.test(client.collectionId) ||
      !/^[a-z0-9_-]+$/i.test(client.id)) return null;
  const filename = encodeURIComponent(client.logo);
  return `${base}/api/files/${client.collectionId}/${client.id}/${filename}`;
}

function makeImage(src: string, name: string, alt: string): HTMLImageElement {
  const image = document.createElement('img');
  image.src = src;
  image.alt = alt;
  image.loading = 'lazy';
  image.decoding = 'async';
  image.referrerPolicy = 'no-referrer';
  image.dataset.logoLabel = name;

  const fallback = () => {
    const replacement = document.createElement('span');
    replacement.className = 'clients__placeholder';
    replacement.textContent = name;
    image.replaceWith(replacement);
  };
  image.addEventListener('error', fallback, { once: true });
  if (image.complete && image.naturalWidth === 0) fallback();
  return image;
}

function buildLogo(client: ClientRow, base: string, duplicate = false, directory = false): HTMLLIElement {
  const li = document.createElement('li');
  const website = httpsUrl(client.website);
  const link = website ? document.createElement('a') : null;
  if (link) {
    link.href = website!;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', client.name);
    if (duplicate) link.tabIndex = -1;
  }
  const imageSrc = fileUrl(base, client) || httpsUrl(client.legacy_logo_url);
  const visual = imageSrc
    ? makeImage(imageSrc, client.name, duplicate ? '' : client.name)
    : document.createElement('span');
  if (!imageSrc) {
    visual.className = 'clients__placeholder';
    visual.textContent = client.name;
  }
  if (link) {
    link.append(visual);
    li.append(link);
  } else {
    li.append(visual);
  }

  if (directory && imageSrc) {
    const name = document.createElement('span');
    name.className = 'clients__all-name';
    name.textContent = client.name;
    li.append(name);
  }
  return li;
}

function startMarquee(section: HTMLElement, original: HTMLUListElement, track: HTMLElement) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const pauseButton = section.querySelector<HTMLButtonElement>('[data-client-pause]');
  let offset = 0;
  let lastFrame = 0;
  let paused = false;

  const render = () => {
    const width = original.getBoundingClientRect().width;
    if (width <= 0) return;
    offset = ((offset % width) + width) % width;
    track.style.transform = `translate3d(${-offset}px, 0, 0)`;
  };

  const tick = (time: number) => {
    if (!section.isConnected) return;
    if (!lastFrame) lastFrame = time;
    const elapsed = Math.min((time - lastFrame) / 1000, 0.06);
    lastFrame = time;
    if (!paused && !reducedMotion.matches && !document.hidden) {
      offset += 33 * elapsed;
      render();
    }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);

  for (const button of section.querySelectorAll<HTMLButtonElement>('[data-client-step]')) {
    button.addEventListener('click', () => {
      const firstLogo = original.querySelector<HTMLElement>('li');
      if (!firstLogo) return;
      const gap = parseFloat(getComputedStyle(original).columnGap) || 0;
      offset += Number(button.dataset.clientStep) * (firstLogo.getBoundingClientRect().width + gap);
      render();
    });
  }

  pauseButton?.addEventListener('click', () => {
    paused = !paused;
    pauseButton.textContent = paused
      ? section.dataset.resumeLabel || 'Resume'
      : section.dataset.pauseLabel || 'Pause';
    pauseButton.setAttribute('aria-pressed', String(paused));
  });
}

async function initialize(section: HTMLElement) {
  const original = section.querySelector<HTMLUListElement>('[data-client-original]');
  const duplicate = section.querySelector<HTMLUListElement>('[data-client-duplicate]');
  const directory = section.querySelector<HTMLUListElement>('[data-client-directory]');
  const track = section.querySelector<HTMLElement>('[data-client-track]');
  const count = section.querySelector<HTMLElement>('[data-client-count]');
  if (!original || !duplicate || !directory || !track || !count) return;

  const base = 'https://cms.emmanueledurante.com';
  try {
    const url = new URL('/api/collections/client_logos/records', base);
    url.searchParams.set('perPage', '100');
    url.searchParams.set('sort', 'sort_order');
    const response = await fetch(url, { credentials: 'omit', cache: 'no-store' });
    if (!response.ok) throw new Error(`PocketBase returned ${response.status}`);
    const data: unknown = await response.json();
    if (typeof data !== 'object' || data === null) return;
    const rawItems = (data as { items?: unknown }).items;
    if (!Array.isArray(rawItems)) return;

    const clients = rawItems.filter(isClient);
    if (!clients.length) return;

    original.replaceChildren(...clients.map((item) => buildLogo(item, base)));
    directory.replaceChildren(...clients.map((item) => buildLogo(item, base, false, true)));
    count.textContent = String(clients.length);

    if (clients.length >= 4) {
      duplicate.replaceChildren(...clients.map((item) => buildLogo(item, base, true)));
      duplicate.hidden = false;
      for (const control of section.querySelectorAll<HTMLElement>('[data-client-moving]')) {
        control.hidden = false;
      }
    }
    section.hidden = false;
    if (clients.length >= 4) startMarquee(section, original, track);
  } catch (error) {
    console.warn('Unable to load clients from PocketBase:', error);
  }
}

for (const section of document.querySelectorAll<HTMLElement>('[data-client-marquee]')) {
  void initialize(section);
}

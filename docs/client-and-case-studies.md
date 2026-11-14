# Portfolio — client brands and project presentation

## Clients

The owner supplied 15 client names and their official website domains.
They live in `src/data/clientLogos.ts`, in the requested order.

Nine clients currently reference publicly visible third-party logo image URLs.
The remaining six (Mamata, Limpido Design, Divani.Store, Korff,
Teloneria Welding, Rimini Terme) have **no reliable logo file provided yet**:
the component shows the real brand name, not a fabricated logo.
Remote image loading can also fail due to changes or hotlink restrictions;
in that case the brand name is shown automatically instead.

The animation shows every entry in sequence, with previous/next controls,
an explicit pause button and reduced-motion support. The compact
“View all clients” disclosure under the strip opens a static directory
containing all 15 entries, avoiding the need to wait for the full loop.

Before final publication, obtain permission to display the brands and replace
remote URL hotlinks with approved, optimized SVG/PNG/WebP assets hosted locally.
Do not treat the fact that a logo is publicly visible as blanket permission.

## Project work section

Following owner feedback, the original compact project descriptions and
technology lists were restored. The generated case-study details, expanders
and associated data file were removed. Visible ordinal numbers stay removed.

## Contact form in previews

The Vercel `PUBLIC_TURNSTILE_SITE_KEY` environment variable currently has
a production target only. In preview deployments without that public key,
the contact form cannot initialize Cloudflare Turnstile, so it cannot submit
successfully. The form now shows an error **only after a submit attempt**,
not when a visitor merely scrolls past it. It remains a live contact form
in production when Turnstile is configured.

## Verification

Vercel builds check Astro compilation. A manual review is still needed for:
language pages, image loading, mouse/touch carousel, keyboard use, and
contact form behavior in the preview and production environments.

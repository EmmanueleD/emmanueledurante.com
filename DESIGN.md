---
version: 4
name: Emmanuele Durante
design_system: Hallmark Grid
theme_slug: grid
theme_source: https://github.com/Nutlope/hallmark/blob/main/skills/hallmark/references/themes/grid.md
theme_gallery: https://www.usehallmark.com/themes/grid/
status: proposed
---

# Emmanuele Durante — Hallmark Grid

This website follows **Grid**, the actual Hallmark theme for Swiss International Style, chosen on 12 November 2026. Do not revive the earlier navy, ivory, orange or Studio systems.

## Official tokens
Use the source `skills/hallmark/references/themes/grid.md` in Nutlope/hallmark. The exact theme CSS tokens are at the top of `src/styles/global.css`:

- White poster stock: `oklch(97.5% 0.005 90)`.
- Blue-black ink: `oklch(19% 0.022 266)`.
- Ultramarine field: `oklch(44% 0.2 266)`.
- Swiss red mark: `oklch(57% 0.215 29)`; one isolated selected mark or hover, never laid over ultramarine.
- Display: Radio Canada Big 700, sentence case.
- Body: Radio Canada 400/500.
- No outlines around cards, gradients, decorative strokes, shadows, radii or fake metrics.
- Layout: 12-column asymmetric typographic grids, flat colour fields, scale rather than ornament.

## Structure
- Two-line personal wordmark and isolated red square.
- White poster hero with large type, one introductory sentence, clear action and genuine portrait.
- Work section as index, not feature cards, preserving the real anonymized project facts from `src/data/site.ts`.
- One ultramarine field for capabilities, with no red on the field.
- Background/technology section and contact form follow on white/soft paper.

## Technical constraints
- Astro, TypeScript and native CSS.
- Preserve links and anchors `#top`, `#work`, `#services`, `#expertise`, `#profile`, `#contact`.
- Preserve `src/components/ContactForm.astro`: unchanged fields, names, Turnstile verification, submission endpoint and JS handler.
- Use `src/assets/emmanuele-hero-no-earbuds-hires.webp` and Astro responsive image delivery. No replacement stock photo; display duotone via CSS while retaining original asset.
- Maintain keyboard focus, semantic headings and responsive widths from 320px up.
- No invented client logos, figures, certifications or testimonials.
- Validate that descriptions are permissible to publish before production.
- Do not merge or publish to the production domain without explicit review.

## Implementation status
Draft theme implementation. Vercel build is necessary but not sufficient: perform visual review and test the contact form before approval.

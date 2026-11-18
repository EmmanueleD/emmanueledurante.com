---
version: 5
name: Emmanuele Durante
design_system: Hallmark Grid editorial layout with approved midnight navy, cream and warm terracotta palette
status: approved
updated: 2026-11-18
---

# Emmanuele Durante — Identity

The site owner selected the midnight navy / cream / warm terracotta combination on 18 November 2026. Keep the existing Swiss editorial Grid-inspired layout, content hierarchy and local typography, replacing the previous ultramarine, black and Swiss-red palette.

## Main palette
- Midnight navy: `#0B1F3B` — logo foreground bar, primary typography and dark field.
- Cream: `#FAF8F5` — dominant background and text on navy.
- Warm terracotta: `#C64A2F` — logo silhouette and sparse decorative accents.

Functional supporting shades: paper-alt `#F2EFEB`, muted navy `#526376`, border `#D5CFCA`, accessible accent `#A63820`. The principal terracotta is about 4.48:1 against cream and is decorative only at small text sizes. Use the darker accessible accent for small links/buttons with cream text.

## Logo
- Solid terracotta D silhouette, with a flat left edge and sharp square ends.
- A crisp, square-ended navy horizontal bar crosses in front.
- No typography inside the symbol, no shadows, gradients or rounded bar caps.
- `public/brand-mark.svg` for the header (transparent), `public/favicon.svg` for the icon (cream background), matching PNG, ICO and Apple touch assets. Cache version v4.

## Usage
- Mostly cream background, navy text and sections; accent terracotta should be scarce.
- Dark service section uses navy and cream, without low-contrast terracotta text.
- Primary CTAs use the darker terracotta for accessibility.
- Keep keyboard focus visible and all interactive states legible.
- Preserve portrait, mobile responsive layout, footer, navigation, testimonial CMS, actual portfolio facts and multilingual copy.

## Technical constraints
- Astro and CSS; keep the responsive image handling, alternate languages, SEO metadata and structured data.
- Do not change contact form, consent checks, Turnstile, submission endpoint or existing labels.
- Existing GitHub Actions validates PRs, then deploys approved merges to Hetzner.

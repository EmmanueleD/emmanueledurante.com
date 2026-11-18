---
version: 6
name: Emmanuele Durante
design_system: Hallmark Grid editorial layout with midnight navy, off-white and red
status: approved
updated: 2026-11-18
---

# Emmanuele Durante — Visual identity

Final palette selected on 18 November 2026 after comparison with warm terracotta and green/rose variants. Maintain the established Swiss-inspired editorial composition, type system, portrait, factual work examples and functionality.

## Primary colors

- Midnight navy `#0B1F3B` — primary text, dark services section and horizontal logo bar.
- Off-white `#FAF8F5` — primary background, icon background and light text on dark surfaces.
- Red `#C13E32` — solid D-shaped logo, key call-to-action buttons, focus and selected accents.

Supporting variants are for UI utility, not new brand colors: light secondary background `#F2EFEB`, navy secondary text `#526376`, hairline borders `#D5CFCA` and darker red hover `#A93329`.

The red against the off-white background meets WCAG AA contrast for normal text (approximately 4.95:1); navy contrasts even more strongly.

## Symbol

A solid red D-shaped silhouette, flat left edge and crisp corners, overlaid by a square-ended navy horizontal bar. The bar clearly crosses in front. No gradients, shadows or round bar ends. Keep the logo geometry unchanged; recolor only.

- Transparent header logo: `public/brand-mark.svg`.
- Cream-backed vector favicon: `public/favicon.svg`.
- Matching ICO, PNG 48/192 and iOS touch icon.
- Cache-busting icon and mark URLs versioned `v=5`.

## Site usage

- Off-white dominates light surfaces; navy is used for typography and the services field.
- Red is reserved for logo and meaningful interaction states / CTAs.
- Preserve multilingual (English, Italian, Spanish) content, copy, layout, CMS integrations and responsive styling.
- Preserve the contact form inputs, privacy language, Turnstile and submission behavior.
- PR validation precedes merging; the existing GitHub Action deploys `main` to Hetzner.

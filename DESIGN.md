---
version: 3
name: Emmanuele Durante
design_system: Hallmark Studio
theme_slug: studio
theme_source: https://github.com/Nutlope/hallmark/blob/main/skills/hallmark/references/themes/studio.md
theme_gallery: https://www.usehallmark.com/themes/studio/
status: proposed
---

# Emmanuele Durante · Design system

The site's design system is **Hallmark Studio**, as selected for the November 2026 portfolio redesign. This replaces the prior custom navy/ivory/Instrument Sans system, which must not be mixed into new pages.

## Official theme material

The governing theme definition is `skills/hallmark/references/themes/studio.md` in `Nutlope/hallmark`. Use its palette, typography and surface rules rather than paraphrased approximations.

- Cool blue-white proof paper: `oklch(97.2% 0.006 215)`.
- Dark blue-black ink: `oklch(16% 0.032 250)`.
- Studio construction orange: `oklch(68% 0.172 50)`. Keep it for primary action and fine lines only.
- Display: **Hedvig Letters Serif**, regular weight 400.
- Body: **Geist**, primarily 400/500.
- 24px proof-sheet dot grid: limited to hero/contact edges and never behind running text at full strength.
- Printed sheets, crop marks, narrow registration ticks, 1px rules and very limited sheet shadow.
- No generic feature cards, pills, decorative orange type, fake dimension labels, invented figures or brand logos.

CSS tokens live in `src/styles/global.css` and must match the official Studio values. The typefaces are loaded by `src/layouts/BaseLayout.astro`.

## Content and functionality to preserve

- Actual copy and anonymized work descriptions from `src/data/site.ts`.
- Main links and anchors: `#work`, `#services`, `#expertise`, `#profile`, `#contact`, `#top`.
- The live Turnstile-protected contact form, including unchanged field names and submission endpoint.
- The user's actual portrait at `src/assets/emmanuele-hero-no-earbuds-hires.webp`; maintain detailed image sources on high-density screens.
- Accurate role description, no invented results or client-privileged material.
- Keyboard focus, accessible labels, reduced-motion fallback and layouts from 320px upward.

## Page composition

Studio is a *theme material*, not a pre-built one-size-fits-all template. The portfolio uses its proof-sheet language with a personal portrait, selected project index, capabilities, professional background/stack and working contact form. Sections are composed for the job of helping a recruiter or client evaluate the engineer and contact him.

## Checks before publication

- Run Astro build/check and verify desktop/mobile layout, including focus and the portrait at retina scale.
- Test the contact form in its intended environment.
- Review the description of each anonymized work item and ensure it can be published.
- The owner must approve deployment to the production domain.

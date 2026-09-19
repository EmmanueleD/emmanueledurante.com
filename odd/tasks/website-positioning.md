# Website positioning refinement

## Intent
Clarify Emmanuele Durante's positioning as a frontend developer specializing in Shopify and e-commerce, improve visitor paths for freelance clients, employers, and collaborators, and strengthen hierarchy without changing the site's minimal visual identity.

## Constraints
- Preserve Astro, current components, design tokens, responsive conventions, and existing uncommitted contact-form work.
- Do not invent projects, clients, testimonials, metrics, case studies, or achievements.
- Do not add a portfolio/Selected Work section or unnecessary dependencies.
- Keep the page concise and technology presentation intentionally small.
- Preserve the contact endpoint, exact eight-field payload, Turnstile, honeypot, timing, validation, and feedback behavior.
- Contact categories must submit `LEAD`, `JOB`, and `COLLAB` behind human-readable labels.
- Do not commit or push automatically; preserve the user's earlier explicit constraint.

## Tasks
- [x] Task 1 — Align contact request categories.
  - File: `src/components/ContactForm.astro`.
  - Outcome: `I have a project` → `LEAD`; `Job opportunity` → `JOB`; `Collaboration / agency support` → `COLLAB`; no unsupported fourth category.
  - Checks: structural readback of options, payload, endpoint, and protections.
  - Rollback: restore only the three select options.
- [x] Task 2 — Clarify homepage positioning and information architecture.
  - Files: `src/data/site.ts`, `src/pages/index.astro`.
  - Outcome: Shopify/frontend/e-commerce hero, one `Start a project` CTA to `#contact`, compact help section, distinct expertise and professional-context content, six prioritized technologies, aligned title/description/Open Graph source.
  - Checks: heading hierarchy, anchors, no invented evidence, no portfolio section.
  - Rollback: restore homepage data and composition changes only.
- [x] Task 3 — Polish responsive presentation and accessibility.
  - File: `src/styles/global.css`.
  - Outcome: one prominent hero CTA, compact service mini-cards, technology badges, consistent spacing, visible focus, and no small-screen clipping or horizontal overflow.
  - Checks: desktop/mobile visual inspection where locally feasible; horizontal-overflow and keyboard/focus review.
  - Rollback: remove only positioning-related style additions and adjustments.
- [x] Task 4 — Update the component gallery.
  - File: `src/pages/dev-gallery/[page].astro`.
  - Outcome: gallery examples document the service mini-card and technology badge treatments using current component/design conventions.
  - Checks: gallery route builds and examples match production classes/tokens.
  - Rollback: remove only the new gallery examples.
- [ ] Task 5 — Verify final candidate.
  - Checks: `npm run check`, `npm run build`, `git diff --check`, generated HTML assertions, and local Chrome inspection at 320px, 375px, 768px, and 1440px.
  - Rollback: N/A; verification only.

## Configuration
- TDD: not configured; use structural, build, and visual verification.
- Delivery: uncommitted working tree per user instruction.
- Forecast: approximately 120–240 authored changed lines beyond the existing contact-form work.

## Evidence
- OpenAI writer updated the four authorized production files and preserved the contact endpoint, exact eight-field payload, spam controls, validation, and feedback.
- Parent structural readback confirmed the three uppercase category values, factual copy, section order, CTA destinations, technology list, heading hierarchy, and responsive selectors.
- Writer reported `npm run check`, `npm run build`, `git diff --check`, and generated HTML assertions passing.
- First independent browser verification found narrow-screen clipping at 320px and 375px; this must be corrected and re-verified.
- User follow-up requires service mini-cards, technology badges, one hero CTA to the contact form, and corresponding component-gallery updates.
- Follow-up implementation now uses one hero CTA, two-column service mini-cards on desktop, text badges for technologies, and matching gallery examples.
- The root minimum width was removed and display sizing/wrapping made fluid to address the verified 320px/375px defect.
- Final independent command and browser-width verification remains pending under Task 5.

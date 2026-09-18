# Publishable v1

## Goal

Prepare emmanueledurante.com for a focused first production release without adding speculative features.

## Decisions

- Publish without Projects; an empty projects collection must render no Projects UI.
- Do not expand the component library.
- Add no new dependencies or abstractions unless strictly required.
- Treat the current `site.ts` Hero, Services, Profile, and Contact copy as definitive.

## Non-goals

- Projects or case studies.
- Contact forms or backend services.
- Analytics, CMS, blog, or additional product features.
- New design-system components.

## Tasks

- [x] Create and verify the initial repository baseline commit.
- [x] Add an actionable public email to Contact.
- [x] Verify definitive content and confirm Projects remain absent.
- [x] Add essential v1 SEO: canonical, favicon, Open Graph, robots, and sitemap.
- [x] Run responsive and accessibility audits with proportionate fixes.
- [x] Verify the 404 page and final production build.

## Evidence

### Definitive content

- Hero, Services, Profile, and Contact production output matches the current `site.ts` copy.
- Services eyebrow and section title were moved out of `index.astro` into `site.ts`.
- `projects` remains empty, no page/component consumes it, and production HTML contains no Projects section or navigation target.
- `npm run check` and `npm run build` pass.

### Contact

- Added `hello@emmanueledurante.com` to the definitive site data.
- Contact renders a keyboard-focusable `mailto:` link with an accessible label.
- `npm run check` and `npm run build` pass.
- Production HTML contains the expected email link.

### Essential SEO

- Configured the canonical site origin as `https://emmanueledurante.com`.
- Added canonical, SVG favicon, Open Graph title/description/type/url/image, and image dimensions/alt metadata.
- Added a 1200×630 optimized Open Graph image generated from the existing portrait without new dependencies.
- Added `robots.txt` and a one-page `sitemap.xml` for the v1.
- Verified all metadata and static assets in production output.
- `npm run check` and `npm run build` pass.

### Responsive and accessibility audit

- Verified rendered layout at 320, 375, 768, and 1440 CSS pixels in headless Chrome.
- Confirmed no horizontal overflow; email and portrait remain within the viewport at every tested width.
- Reduced display type only below 352px to prevent the Hero word “storefronts.” from overflowing at 320px.
- Increased navigation target height to at least 24px and added robust email wrapping.
- Changed neutral Service indexes from subtle to muted text, raising contrast from 3.59:1 to 7.77:1 on the primary background.
- Verified text contrast for ivory, muted, and orange-on-surface combinations.
- Verified one H1, unique IDs, valid section labels, non-empty image alt text, non-empty links, skip-link target, and header/nav/main/footer landmarks.
- Manually inspected generated 320px, 375px, and 1440px screenshots for layout integrity.
- `npm run check` and `npm run build` pass.

### Baseline

- Commit: `2fe4af9 chore: establish initial website baseline`
- `npm run check`: 0 errors, 0 warnings, 0 hints.
- `npm run build`: one static homepage generated successfully.
- Feature branch: `feat/publishable-v1`.

### 404 and final production

- Added a restrained custom 404 page using existing layout and primitives, with `noindex, nofollow` and a homepage return link.
- Production build emits exactly the homepage and `404.html`; the development-only gallery remains excluded.
- Production preview returns HTTP 200 for `/`, HTTP 404 with custom content for an unknown route, and HTTP 200 for robots and sitemap.
- `npm run check`: 0 errors, 0 warnings, 0 hints.
- `npm run build`: 2 pages built successfully.
- `git diff --check`: clean.

Further commit evidence is pending explicit authorization for additional commits.

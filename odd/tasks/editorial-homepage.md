# Editorial Homepage

## Goal

Build the first complete, responsive one-page experience for emmanueledurante.com from the rules in `DESIGN.md`, while keeping all professional content explicitly provisional and easy to replace.

## Scope

- Establish the final visual foundation and locally served Instrument Sans typography.
- Add a shared Astro layout with essential metadata and accessibility primitives.
- Build an asymmetric editorial homepage with minimal navigation, hero, selected-work index, profile, contact-led close, and footer.
- Centralize provisional content separately from presentation.
- Verify Astro diagnostics, production build, and local runtime.

## Non-goals

- Inventing clients, employment history, outcomes, or testimonials.
- CMS, blog, backend forms, analytics, deployment, or additional pages.
- Decorative card grids, gradients, glass effects, technology logos, or theatrical motion.

## Tasks

- [x] Establish typography, design tokens, shared layout, and Astro diagnostics.
- [x] Build the responsive editorial homepage with centralized provisional content.
- [x] Verify accessibility-oriented behavior, production build, and local runtime.

### Final verification evidence

- `npm run check`: 0 errors, 0 warnings, 0 hints.
- `npm run build`: one static page generated successfully.
- Semantic assertions passed for language, one primary heading, main landmark, navigation, skip link, and section anchors.
- Local Instrument Sans font assets were emitted in the production bundle.
- Focus-visible and reduced-motion rules are present.
- Gradient scan passed; the orange accent token is used only four times.
- Local dev server returned HTTP 200 with the expected title.
- Independent subagent verification was unavailable because the unborn repository cannot be registered as a delegated worktree; the same command plan was run inline.

### Homepage evidence

- Added centralized provisional content in `src/data/site.ts` without invented clients, roles, or outcomes.
- Rebuilt the page as a semantic one-page composition with minimal navigation, asymmetric hero, editorial work index, profile, contact-led close, and footer.
- Added intentional mobile/desktop composition and restrained hover behavior.
- `npm run check`: 0 errors, 0 warnings, 0 hints.

### Visual foundation evidence

- Added locally served Instrument Sans variable typography.
- Added the complete CSS token foundation, reset, focus treatment, reduced-motion behavior, and shared shell.
- Added `BaseLayout.astro` with metadata and a keyboard skip link.
- `npm run check`: 0 errors, 0 warnings, 0 hints.

## Planned edit surface

- `package.json`
- `package-lock.json`
- `src/layouts/BaseLayout.astro`
- `src/data/site.ts`
- `src/pages/index.astro`
- `src/styles/global.css`
- `odd/tasks/editorial-homepage.md`

## Follow-up: conditional content sections

- [x] Align the homepage with the new services content model.
- [x] Hide empty sections and their navigation links.
- [x] Re-run diagnostics, build, and local runtime verification.

### Conditional content evidence

- The services section now consumes `site.services`; stale project/year references were removed.
- Services, profile, and contact sections render only when their meaningful content is present.
- Navigation links are filtered against the same visibility rules, and the hero link targets the first visible section.
- Section numbering reflects the number of visible sections.
- `npm run check`: 0 errors, 0 warnings, 0 hints.
- `npm run build`: one static page generated successfully.
- Rendered output includes the services navigation target and supplied service content, with no stale work/project output.
- Local dev server returned HTTP 200 with the services section present.

## Follow-up: profile portrait

- [x] Normalize the uploaded portrait file extension to its real PNG format.
- [x] Integrate the optimized portrait into the responsive profile composition.
- [x] Verify image generation, diagnostics, build, and local runtime.

### Portrait integration evidence

- Added the portrait through Astro's `Image` component with responsive widths, WebP output, intrinsic dimensions, and descriptive alternative text.
- Integrated the image into the Profile section using the existing editorial grid and a 4:5 crop.
- The Profile section remains content-aware and is now populated by the portrait even if its text is removed.
- `npm run check`: 0 errors, 0 warnings, 0 hints.
- `npm run build`: successful, with four optimized WebP variants generated from the portrait.
- Rendered HTML contains responsive `srcset`, intrinsic `1122×1402` dimensions, and descriptive alternative text.
- Local dev server returned HTTP 200 with the portrait present.

## Follow-up: compact hero portrait

- [x] Move the portrait from Profile into the Hero.
- [x] Reduce its visual footprint across mobile and desktop layouts.
- [x] Verify responsive image output, diagnostics, build, and local runtime.

### Compact hero portrait evidence

- Moved the portrait next to the primary Hero message to provide immediate human context.
- Constrained it to `min(52vw, 13rem)` on mobile and a maximum of `15rem` on larger screens.
- Reduced generated source widths to 240, 360, and 480 pixels.
- Restored the Profile section to a text-led composition.
- `npm run check`: 0 errors, 0 warnings, 0 hints.
- `npm run build`: successful, with three responsive WebP variants and a `480×600` fallback.
- The largest generated portrait is under 20 kB; the image renders in the Hero only.
- Local dev server returned HTTP 200 with the compact Hero portrait present.

## Follow-up: configurable accent system

- [x] Define reusable accent parameters in `site.ts` without hardcoded words in the page template.
- [x] Render accent-aware text and section treatments from those parameters.
- [x] Verify diagnostics, build, rendered accent behavior, and local runtime.

### Configurable accent evidence

- Hero text uses reusable `{ text, accent }` segments rendered by `AccentText.astro`; no word is hardcoded in the page template.
- Service index treatment is configured as `none`, `interaction`, or `always` from `site.presentation.accents.serviceIndex`.
- The Contact rule is controlled by `site.presentation.accents.contactRule`.
- `npm run check`: 0 errors, 0 warnings, 0 hints.
- `npm run build`: successful.
- Rendered output contains the configured Hero segment, service interaction mode, and Contact rule.
- The page template contains no hardcoded accented word.
- Local dev server returned HTTP 200 with configured accents present.

## Follow-up: native component gallery

- [x] Extract the shared Eyebrow, SectionHeading, TextLink, ActionLink, and ServicesSection components.
- [x] Refactor the homepage to consume the extracted components without changing its content behavior.
- [x] Build a native Astro gallery for foundations and component variants that exists only in development.
- [x] Verify homepage parity, gallery behavior, production exclusion, diagnostics, build, and local runtime.

### Gallery evidence

- Added a native Astro gallery at `/dev-gallery/components` with colors, typography, accent text, links, action variants, Services variants, and the empty-state contract.
- The route is generated through a development-only dynamic path rather than exposed as a normal production page.
- Development server smoke test passed; the empty Services example emitted no section.
- `npm run check`: 0 errors, 0 warnings, 0 hints.
- `npm run build`: successful, with only the homepage generated.
- Production preview returned HTTP 200 for the homepage and HTTP 404 for the gallery route.
- Homepage rendered output preserved Services, accent configuration, and portrait behavior.

### Shared component evidence

- Added `Eyebrow`, `SectionHeading`, `TextLink`, and three-variant `ActionLink` primitives.
- Added a Services-specific section component that owns empty-state suppression, semantic heading linkage, list rendering, and index accent modes.
- Homepage now consumes the shared eyebrow and text-link primitives plus the extracted Services section.
- Production output retains the Services landmark, configured accent mode, and supplied content.
- `npm run check` and `npm run build` pass after the refactor.

## Follow-up: composable Services accents

- [x] Replace the Services index-only accent setting with a general mode-and-targets model.
- [x] Apply interaction accents to the index and border while keeping the title ivory.
- [x] Update gallery variants and verify diagnostics, build, rendered behavior, and runtime.

### Composable Services accent evidence

- Services accents now use a general `mode` (`none`, `interaction`, `always`) plus a target list (`index`, `title`, `border`).
- Homepage configuration selects `interaction` with `index` and `border`; the title remains ivory.
- Component output exposes data attributes consumed by generic target-aware CSS selectors.
- Gallery includes interaction index+border, interaction border-only, and persistent index+border examples.
- `npm run check`: 0 errors, 0 warnings, 0 hints.
- `npm run build`: successful, with homepage `data-accent-mode="interaction"` and `data-accent-targets="index border"` rendered.
- Generic CSS selectors exist for every supported target; legacy accent classes are absent.
- Development gallery rendered index+border, border-only, and persistent examples.
- Gallery remains absent from production output.

## Follow-up: unambiguous Services hover

- [x] Replace the ambiguous border accent target with a background target.
- [x] Apply surface background plus orange index on interaction while keeping borders neutral and rows stable.
- [x] Update gallery variants and verify diagnostics, build, rendered behavior, and runtime.

### Unambiguous Services hover evidence

- Replaced the `border` target with `background` throughout the data and component contracts.
- Homepage now uses `interaction` with `index` and `background` targets.
- Background changes to the navy surface tone; the index becomes orange, the title stays ivory, and borders never change.
- Removed row translation to keep the list geometrically stable.
- Gallery examples now cover index+background, background-only, and persistent index+background.
- `npm run check`: 0 errors, 0 warnings, 0 hints.
- `npm run build`: successful, with homepage `data-accent-targets="index background"` rendered.
- Legacy border accent selectors and row hover movement are absent.
- Development gallery rendered index+background, background-only, and persistent examples.
- Gallery remains absent from production output.

## Follow-up: Services text accent and inset

- [x] Add the service title to the configured interaction accent targets.
- [x] Add stable horizontal padding so indexes and text have breathing room inside the hover background.
- [x] Update gallery variants and verify diagnostics, build, rendered behavior, and runtime.

### Services text accent and inset evidence

- Homepage configuration now targets `index`, `title`, and `background` during interaction.
- Service rows have permanent horizontal padding from the spacing scale, so content stays stable and inset before, during, and after hover.
- Borders remain neutral and unchanged.
- Gallery primary and persistent examples include title accent; the background-only comparison remains available.
- `npm run check`: 0 errors, 0 warnings, 0 hints.
- `npm run build`: successful, with homepage `data-accent-targets="index title background"` rendered.
- Token-based horizontal padding and generic title target selectors are present; border accent remains absent.
- Development gallery rendered the primary and background-only comparison variants.
- Gallery remains absent from production output.

## Evidence

Commit evidence will remain pending because the user authorized implementation without commits.

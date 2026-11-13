# Client logos, case studies and review workflow

## Client strip

The portfolio owner supplied 15 client/brand names in the 13 November 2026 conversation.
They are kept in `src/data/clientLogos.ts`, in that order.

Eight entries currently use publicly available remote logo images. The remaining
seven use their actual names as typographic **fallbacks**, not fabricated logos.
The image URLs should be replaced by local, optimized, permission-cleared files
before the final production release; hotlinks add third-party requests and can break.

Official sites are linked where their identities could be matched confidently.
`Welding` is ambiguous; leave its link empty until the exact company is confirmed.
`Divani.Store` was matched to the public site and agency case-study.

The strip is monochromatic, runs slowly and stops on hover/focus. Reduced-motion
visitors get a non-animated horizontal list.

Do not imply endorsement by these brands. Confirm contractual rights to
display client names and logos before merging.

## Recommendations

`src/components/TestimonialsSection.astro` implements a horizontal rail.
Regular vertical mouse-wheel input scrolls horizontally when possible,
while at either end normal page scrolling resumes. Horizontal trackpads and
keyboard navigation still work. Previous/next buttons are available, and
the visual scrollbar is hidden. The complete texts remain available by expanding
each testimonial; original languages are always recoverable.

The five recommendations are presently staged with
`consentToPublish: false` in `src/data/testimonials.ts`. The special preview
branch temporarily shows them for design review without changing the production
PR's consent filter.

## Project case studies

Details are kept in `src/data/projectCases.ts` in EN/IT/ES, keyed by project
indexes. **Numbers are not shown** to visitors.

Each project keeps a short summary and an expandable breakdown:
- Challenge
- Personal contribution
- Approach and verification

Only claims already present in the portfolio are included. Results, client names
and screenshots have not been invented. Public project links and images must
be added only when appropriately cleared. Never publish private backoffice
screenshots showing customer data, credentials, APIs, order or financial figures
or internal-only logic.

## Validation

Run `npm run check` and `npm run build`. Test all three language routes,
mouse-wheel scrolling without Shift, edge release to page scrolling, arrow
buttons, narrow screens, reduced-motion settings and image fallbacks.

# Portfolio content — client logos and case studies

## Client logo strip

The logo strip appears only when `src/data/clientLogos.ts` contains **approved** entries.
For each client, provide:

- The brand's public display name;
- A locally saved, optimized logo asset at `public/client-logos/<slug>.svg` or `.webp`;
- An official public website URL (optional);
- Confirmation that the brand and logo can be shown in the portfolio and in this context.

Example entry:

```ts
{
  id: 'verified-client-slug',
  name: 'Actual client name',
  logoSrc: '/client-logos/verified-client-slug.svg',
  website: 'https://actual-client-website.example/',
  approvedForDisplay: true,
}
```

No real client names or logos have been supplied yet, so the strip is **hidden on the
production PR branch**. A separate Vercel-only design preview shows clearly
labelled non-client placeholders to demonstrate size, spacing and motion.

The strip moves only when there are four or more logos; motion pauses on hover or
keyboard focus and stops for reduced-motion preferences.

## Project case studies

Details are kept in `src/data/projectCases.ts` in EN/IT/ES, keyed by the
existing project indexes (internally only: **numbers are not displayed**).

Each project keeps a short summary and an expandable breakdown:
- Challenge
- Personal contribution
- Approach and verification

Technical stacks appear inside the breakdown instead of competing with the story.
Only claims already present in the portfolio are included. Results, client names
and screenshots have not been invented.

The `publicUrl` and `publicImage` fields in project case data may be set
**only for approved public material**. Never upload client backoffices containing
private/customer information, access credentials, sales figures, API tokens or
non-public architecture.

## Editorial safeguards

A suggestion to ignore a former employer's objections is not a publication policy:
check employment and client agreements, NDAs and brand usage permissions before
naming clients. If unsure, keep anonymized case studies and use your own generic
diagrams or screenshots recreated with synthetic data.

Test the mobile layout, keyboard-accessible `<details>` and marquee behavior,
then run `npm run check` and `npm run build` before merging.

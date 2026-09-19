# Contact form

## Intent
Replace the Contact section's primary mailto CTA with a native, accessible Astro contact form that posts to the existing backend while preserving the site's current design language and responsive behavior.

## Constraints
- Keep the existing Contact title and descriptive copy.
- Use framework-free client JavaScript.
- Send exactly the documented JSON fields to `https://contact.emmanueledurante.com/contact`.
- Use a public `PUBLIC_TURNSTILE_SITE_KEY`; never include or reference a secret key.
- Keep `hello@emmanueledurante.com` as a secondary fallback.
- Do not modify the backend or unrelated site areas.
- Do not commit or push; the user explicitly prohibited automatic commits.

## Implementation plan
- [x] Task 1 — Add and integrate the reusable contact form.
  - Candidate files: `src/components/ContactForm.astro`, `src/pages/index.astro`, `src/styles/global.css`, `.env.example`.
  - Checks: component/script structural readback; `npm run check`; `npm run build`.
  - Rollback boundary: remove the component and environment example, restore the Contact markup and contact-related CSS only.
  - Commit evidence: intentionally omitted by explicit user instruction.
- [x] Task 2 — Verify the production-facing Astro output.
  - Checks: `npm run check`; `npm run build`.
  - Commit evidence: intentionally omitted by explicit user instruction.

## Configuration
- TDD: not configured/unknown; use the user-required Astro validation commands.
- Delivery strategy: no commit or PR requested.
- Forecast: under 400 authored changed lines.

## Evidence
- Repository inspection mapped the Contact markup, reusable component boundary, global styles, and public environment example.
- Generic agents were configured to use `openai-codex/gpt-5.6-sol` after the default-provider attempts failed before tool use.
- `gentle-ai-worker` implemented the four authorized surfaces without committing or pushing.
- Parent readback corrected the request-field label to “Type of request”.
- `npm run check`: passed on the final candidate with 0 errors, 0 warnings, and 0 hints.
- `npm run build`: passed on the final candidate; 2 static pages built successfully.
- Independent OpenAI verifier confirmed the exact eight-field payload and returned PASS after correcting a prompt-side field-count error.
- Native review consent was declined for this candidate; the required fallback verifier path completed successfully.
- Runtime backend/CORS and production Turnstile behavior remain untested locally.

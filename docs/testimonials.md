# Adding a testimonial

The homepage testimonials section is implemented in `src/components/TestimonialsSection.astro`.
It stays entirely hidden (including the navigation link) until a verified testimonial exists.

## 1. Request permission

Ask the author to approve publication of their words, name, role and company (if any),
and any link to their public profile. Ask for approval to publish faithful translations
in English, Italian and Spanish. Keep the original text verbatim.

## 2. Add the entry

Edit `src/data/testimonials.ts`. The file already contains four real LinkedIn recommendations\n(staged with `consentToPublish: false`). After permission is obtained, change only\nthe corresponding flag to `true`. For additional recommendations, append a new entry.
Example **structure only** (the placeholders below must never be published):

```ts
export const testimonials: readonly Testimonial[] = [
  {
    id: 'unique-id',
    author: 'REAL AUTHOR NAME',
    role: 'REAL ROLE',
    company: 'COMPANY, IF APPROVED',
    profileUrl: 'https://www.linkedin.com/in/real-profile/',
    sourceLanguage: 'it',
    text: {
      it: 'EXACT ORIGINAL ITALIAN TESTIMONIAL',
      en: 'REVIEWED ENGLISH TRANSLATION',
      es: 'TRADUCCIÓN ESPAÑOLA REVISADA',
    },
    consentToPublish: true,
  },
];
```

The original is determined by `sourceLanguage`. All three language variants are required
so visitors see the quote in the language of the current page. On translated pages,
the `<details>` control shows the original. When a profile URL is absent, omit `profileUrl`.

Set `consentToPublish: true` **only** after explicit permission. Unapproved entries,
and entries with empty text, are not rendered. Do not invent testimonials, names or ratings.

## 3. Check before publishing

Run `npm run check` and `npm run build`, review `/`, `/it/`, and `/es/`,
test the original-language toggle from a keyboard, and then deploy.
No third-party widget, database, runtime translation, or tracking is involved.

## Existing LinkedIn recommendations (13 November 2026)

The HTML supplied contains five recommendations. Four are staged with full original text,
translations, attribution and public profile links:

- Valentina Maraio (original: English)
- Fabio Trovato (original: Italian)
- Maria Chiara Barbaro (original: Italian)
- Marco Le Piane (original: Italian)

Camilla Tofani's recommendation is cut short by LinkedIn's “... more” expansion.
Retrieve the **full original text** before adding it; do not infer the missing passage.

These posts being public on LinkedIn does not itself verify permission to republish
on a separate website, so the four current entries remain unpublished pending approval.
The visible source-language text must stay unchanged; translate only the other variants.

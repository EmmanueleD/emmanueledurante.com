# Adding a testimonial

The homepage testimonials section is implemented in `src/components/TestimonialsSection.astro`.
It stays entirely hidden (including the navigation link) until a verified testimonial exists.

## 1. Request permission

Ask the author to approve publication of their words, name, role and company (if any),
and any link to their public profile. Ask for approval to publish faithful translations
in English, Italian and Spanish. Keep the original text verbatim.

## 2. Add the entry

Edit `src/data/testimonials.ts`. The file already contains six real LinkedIn recommendations
(staged with `consentToPublish: false`). After permission is obtained, change only\nthe corresponding flag to `true`. For additional recommendations, append a new entry.
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

The user supplied six complete LinkedIn recommendations, including the full
texts of Camilla Tofani and Clarissa Abbruzzese. All six are staged with original text,
faithful translations and attribution (the Clarissa profile URL was not supplied):

- Valentina Maraio (original: English)
- Camilla Tofani (original: Italian)
- Fabio Trovato (original: Italian)
- Maria Chiara Barbaro (original: Italian)
- Marco Le Piane (original: Italian)
- Clarissa Abbruzzese (original: Italian)

These posts being public on LinkedIn does not itself verify permission to republish
on a separate website, so all six current entries remain unpublished pending approval.
The visible source-language text must stay unchanged; translate only the other variants.

The optional `excerpt` field contains a faithful short passage for the compact
carousel; `text` retains the complete original and full translations.

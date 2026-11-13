import type { Language } from './locales';

/**
 * A testimonial is published only after the author has explicitly
 * authorized use of their words and attribution on the website.
 * The entry for sourceLanguage must contain the exact original wording.
 */
export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company?: string;
  profileUrl?: string;
  sourceLanguage: Language;
  text: Record<Language, string>;
  consentToPublish: boolean;
}

/**
 * Add verified testimonials here. Keep this empty until you have
 * the author's permission; no example or placeholder is published.
 */
export const testimonials: readonly Testimonial[] = [];

export function getPublishedTestimonials(): Testimonial[] {
  return testimonials.filter(
    (item) =>
      item.consentToPublish &&
      item.author.trim().length > 0 &&
      item.role.trim().length > 0 &&
      Object.values(item.text).every((value) => value.trim().length > 0),
  );
}

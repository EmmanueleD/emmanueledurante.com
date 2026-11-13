import type { Language } from './locales';

/**
 * Recommendations are reproduced from the text shared from LinkedIn.
 * Keep sourceLanguage text verbatim and preserve author attribution.
 * Only enable consentToPublish after the author authorizes reuse on this website.
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
 * These four recommendations have complete text in the supplied HTML.
 * They are STAGED, not published: consent to republish on this website is
 * not yet confirmed. Camilla Tofani's recommendation was truncated ("… more")
 * and must be retrieved in full before adding it.
 */
export const testimonials: readonly Testimonial[] = [
  {
    id: 'valentina-maraio',
    author: 'Valentina Maraio',
    role: 'Full-Stack Software Developer',
    profileUrl: 'https://www.linkedin.com/in/valentina-maraio/',
    sourceLanguage: 'en',
    text: {
      en: 'Studying with Emmanuele was a pleasure. His curiosity for three.js brought up interesting conversations about 3D data visualization and inspiring web animation. We worked together on a few projects and his passion for clean code and well-organized app structure makes him the best coding colleague.',
      it: 'Studiare con Emmanuele è stato un piacere. La sua curiosità per three.js ha dato vita a conversazioni interessanti sulla visualizzazione di dati 3D e sulle animazioni web. Abbiamo lavorato insieme ad alcuni progetti e la sua passione per il codice pulito e per una struttura ben organizzata delle applicazioni lo rende il miglior collega con cui programmare.',
      es: 'Estudiar con Emmanuele fue un placer. Su curiosidad por three.js dio lugar a conversaciones interesantes sobre visualización de datos 3D y animaciones web inspiradoras. Trabajamos juntos en algunos proyectos, y su pasión por el código limpio y una estructura de aplicaciones bien organizada lo convierte en el mejor compañero para programar.',
    },
    consentToPublish: false,
  },
  {
    id: 'fabio-trovato',
    author: 'Fabio Trovato',
    role: 'Direttore creativo · Consulente di marketing',
    profileUrl: 'https://www.linkedin.com/in/fabio-trovato/',
    sourceLanguage: 'it',
    text: {
      it: 'Una persona a cui piace il proprio lavoro!\nProfessionale e puntuale, due aspetti che mi hanno sempre portato a collaborare con estremo piacere con Emmanuele.',
      en: 'Someone who enjoys his work! Professional and punctual—two qualities that have always made collaborating with Emmanuele a real pleasure.',
      es: '¡Una persona que disfruta de su trabajo! Profesional y puntual, dos cualidades que siempre han hecho que colaborar con Emmanuele sea un verdadero placer.',
    },
    consentToPublish: false,
  },
  {
    id: 'maria-chiara-barbaro',
    author: 'Maria Chiara Barbaro',
    role: 'Head of Growth',
    profileUrl: 'https://www.linkedin.com/in/mariachiara-barbaro/en/',
    sourceLanguage: 'it',
    text: {
      it: 'Emmanuele non è soltanto uno sviluppatore competente, ma anche una persona affidabile e che sa fare lavoro di squadra. È preciso, puntuale, e non si tira indietro davanti ad una sfida cercando anche soluzioni innovative per raggiungere l’obiettivo. È stato un piacere lavorare con lui e mi sento assolutamente di consigliarlo',
      en: 'Emmanuele is not only a skilled developer but also a reliable person who knows how to work as part of a team. He is precise and punctual, and he never backs down from a challenge, even looking for innovative solutions to achieve the goal. It was a pleasure working with him, and I wholeheartedly recommend him.',
      es: 'Emmanuele no solo es un desarrollador competente, sino también una persona fiable que sabe trabajar en equipo. Es preciso y puntual, y no se echa atrás ante un desafío: también busca soluciones innovadoras para alcanzar el objetivo. Fue un placer trabajar con él y lo recomiendo sin ninguna duda.',
    },
    consentToPublish: false,
  },
  {
    id: 'marco-le-piane',
    author: 'Marco Le Piane',
    role: 'Front Web Developer',
    profileUrl: 'https://www.linkedin.com/in/marco-le-piane/en/',
    sourceLanguage: 'it',
    text: {
      it: 'Ho avuto il piacere di lavorare con Emmanuele su alcuni progetti personali. Si è dimostrato una persona gentile e preparata, da cui ho potuto imparare molto. Spero di poter collaborare con lui ancora in futuro e mettere su altri progetti interessanti. È una persona molto competente, da cui si può apprendere molto.',
      en: 'I had the pleasure of working with Emmanuele on a few personal projects. He proved to be a kind and knowledgeable person from whom I learned a great deal. I hope to work with him again in the future on other interesting projects. He is very competent, and there is a lot to learn from him.',
      es: 'Tuve el placer de trabajar con Emmanuele en algunos proyectos personales. Demostró ser una persona amable y preparada, de la que pude aprender mucho. Espero volver a colaborar con él en el futuro y desarrollar otros proyectos interesantes. Es una persona muy competente, de la que se puede aprender mucho.',
    },
    consentToPublish: false,
  },
];

export function getPublishedTestimonials(): Testimonial[] {
  return testimonials.filter(
    (item) =>
      item.consentToPublish &&
      item.author.trim().length > 0 &&
      item.role.trim().length > 0 &&
      Object.values(item.text).every((value) => value.trim().length > 0),
  );
}

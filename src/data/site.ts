export const site = {
  name: 'Emmanuele Durante',
  title: 'Emmanuele Durante — Frontend & E-commerce Engineer',
  description:
    'Frontend & e-commerce engineering with Vue, React, TypeScript, Shopify and Shopware 6. B2B e-commerce, integrations and AI-assisted development.',

  presentation: {
    accents: {
      serviceItem: {
        mode: 'interaction' as 'none' | 'interaction' | 'always',
        targets: ['index', 'title', 'background'] as readonly (
          | 'index'
          | 'title'
          | 'background'
        )[],
      },
      contactRule: true,
    },
  },

  navigation: [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'About', href: '#profile' },
    { label: 'Contact', href: '#contact' },
  ],

  hero: {
    eyebrow: 'Frontend & E-commerce Engineer · B2B/B2C · AI-assisted development',
    title: [
      { text: 'Frontend engineering', accent: true },
      { text: ' for complex e-commerce problems.' },
    ],
    introduction:
      'I build web applications and e-commerce features that are easier to use, debug and maintain—from Vue and React interfaces to Shopify and Shopware 6.',
  },

  work: {
    eyebrow: 'Selected work',
    title: 'Real problems. Maintainable solutions.',
    introduction:
      'A selection of anonymized work, focused on the technical contribution rather than client names.',
  },

  projects: [
    {
      index: '01',
      category: 'B2B e-commerce · Shopware',
      title: 'Controlled access for a private B2B storefront',
      description:
        'Implemented a restricted e-commerce workflow with controlled registration, access rules, configuration-aware migrations and automated regression tests.',
      technologies: ['Shopware 6', 'PHP / Symfony', 'Twig', 'PHPUnit'],
    },
    {
      index: '02',
      category: 'E-commerce · Shopify',
      title: 'Refactoring a custom routine builder',
      description:
        'Reworked a large inline JavaScript implementation into a maintainable Web Component, centralizing business rules and improving lifecycle and cart-error handling.',
      technologies: ['Shopify', 'Liquid', 'JavaScript', 'Web Components'],
    },
    {
      index: '03',
      category: 'Product interfaces · React',
      title: 'Schema-driven forms with browser-generated PDFs',
      description:
        'Developed typed form flows, structured data models and browser-side PDF generation, with optimistic updates and automated tests.',
      technologies: ['React', 'TypeScript', 'TanStack', 'Zod', 'pdf-lib'],
    },
    {
      index: '04',
      category: 'AI · Developer tooling',
      title: 'AI-assisted development with independent verification',
      description:
        'Explored agent skills, Figma-to-code evaluation and test-first workflows, with an emphasis on independently checking generated results.',
      technologies: ['AI agents', 'TDD', 'Developer tooling', 'Evaluation'],
    },
  ],

  servicesSection: {
    eyebrow: 'Capabilities',
    title: 'Where I contribute',
  },

  services: [
    {
      index: '01',
      title: 'B2B & B2C e-commerce',
      detail:
        'Custom features and workflows on Shopware and Shopify, designed around real operational constraints.',
    },
    {
      index: '02',
      title: 'Web applications & UI systems',
      detail:
        'Vue, React and TypeScript interfaces, reusable components, API integrations and maintainable architecture.',
    },
    {
      index: '03',
      title: 'Debugging & integrations',
      detail:
        'Tracing problems to their root cause, extending platforms safely and integrating third-party services.',
    },
    {
      index: '04',
      title: 'Reliable delivery',
      detail:
        'Regression testing, accessible interfaces, clear documentation and tools that give teams control.',
    },
  ],

  expertise: {
    eyebrow: 'Expertise',
    title: 'Technology, chosen for the problem',
    introduction:
      '4+ years across production web applications and e-commerce platforms. Frontend first, with practical backend work on Shopware.',
    technologies: ['Vue.js', 'React', 'TypeScript', 'Shopify', 'Shopware 6', 'PHP / Symfony', 'Astro', 'Testing'],
  },

  profile: {
    eyebrow: 'About',
    statement:
      'I like getting to the root of a problem—and leaving the system easier to work with.',
    note:
      'I have worked with agency teams, clients and backend developers since 2022. Based in Forlì, Italy; open to frontend and e-commerce engineering roles, remote collaboration and selected freelance projects.',
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Looking for a frontend engineer?',
    note:
      'Hiring for a role, or need help with an e-commerce product? Tell me what you are building.',
    email: 'hello@emmanueledurante.com',
  },
} as const;

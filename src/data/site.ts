export const site = {
  name: 'Emmanuele Durante',
  title: 'Emmanuele Durante — Frontend Developer',
  description:
    'Frontend Developer building and improving web applications, custom interfaces and e-commerce workflows. Experience with Vue, React, Shopify and Shopware 6.',

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
    eyebrow: 'Frontend Developer · Web applications · E-commerce',
    title: [
      { text: 'Frontend development', accent: true },
      { text: ' for complex web applications.' },
    ],
    introduction:
      'I build and improve web interfaces, custom features and e-commerce workflows. I focus on understanding requirements, solving problems at their source and leaving code easier to maintain.',
  },

  work: {
    eyebrow: 'Selected work',
    title: 'Real problems. Maintainable solutions.',
    introduction:
      'Selected work from production projects, focused on the problem, my contribution and the technical choices behind it.',
  },

  projects: [
    {
      index: '01',
      category: 'B2B e-commerce · Shopware',
      title: 'Controlled access for a private B2B storefront',
      description:
        'A private B2B storefront required controlled registration and access. I implemented the workflow, access rules, configuration-aware migrations and regression tests.',
      technologies: ['Shopware 6', 'PHP / Symfony', 'Twig', 'PHPUnit'],
    },
    {
      index: '02',
      category: 'E-commerce · Shopify',
      title: 'Refactoring a custom routine builder',
      description:
        'A large custom routine builder combined complex business rules and cart interactions. I refactored it into a Web Component, centralizing the rules and improving lifecycle and cart-error handling.',
      technologies: ['Shopify', 'Liquid', 'JavaScript', 'Web Components'],
    },
    {
      index: '03',
      category: 'Product interfaces · React',
      title: 'Schema-driven forms with browser-generated PDFs',
      description:
        'Built schema-driven form workflows with typed data models and browser-side PDF generation, including optimistic updates and automated tests.',
      technologies: ['React', 'TypeScript', 'TanStack', 'Zod', 'pdf-lib'],
    },
    {
      index: '04',
      category: 'AI · Developer tooling',
      title: 'AI-assisted development with independent verification',
      description:
        'R&D. Evaluated agent skills and Figma-to-code workflows using test-first approaches and independent checks of generated results.',
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
      'I have worked with agency teams, clients and backend developers since 2022. Based in Forlì, Italy; open to Frontend Developer roles, including remote positions, and collaborations with product teams and agencies.',
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Looking for a frontend developer?',
    note:
      'Hiring for a role, or need help with an e-commerce product? Tell me what you are building.',
    email: 'hello@emmanueledurante.com',
  },
} as const;

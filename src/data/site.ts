export const site = {
  name: 'Emmanuele Durante',
  title: 'Emmanuele Durante — Frontend Developer for Shopify & E-commerce',
  description:
    'Emmanuele Durante is a Frontend Developer building and improving Shopify and e-commerce storefronts with modern JavaScript.',

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
    { label: 'Services', href: '#services' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'About', href: '#profile' },
    { label: 'Contact', href: '#contact' },
  ],

  hero: {
    eyebrow: 'Frontend Developer · Shopify · E-commerce',
    title: [
      { text: 'Shopify & frontend', accent: true },
      { text: ' development for e-commerce teams.' },
    ],
    introduction:
      'I build, improve and maintain e-commerce storefronts using Shopify and modern JavaScript.',
  },

  projects: [],

  servicesSection: {
    eyebrow: 'Services',
    title: 'What I can help with',
  },

  services: [
    {
      index: '01',
      title: 'Shopify storefronts',
      detail:
        'Theme development, custom sections, integrations and focused storefront improvements.',
    },
    {
      index: '02',
      title: 'Frontend implementation',
      detail:
        'Responsive, maintainable interfaces built from designs with modern JavaScript.',
    },
    {
      index: '03',
      title: 'E-commerce improvements',
      detail:
        'Booking and payment integrations, bug fixing, performance work and practical UX improvements.',
    },
    {
      index: '04',
      title: 'Ongoing support',
      detail:
        'Reliable maintenance and development support for agencies and e-commerce teams.',
    },
  ],

  expertise: {
    eyebrow: 'Expertise',
    title: 'E-commerce platforms and frontend tools',
    introduction:
      'A focused set of technologies for building and maintaining production storefronts.',
    technologies: ['Shopify', 'Shopware', 'Vue', 'React', 'TypeScript', 'Astro'],
  },

  profile: {
    eyebrow: 'About',
    statement:
      'I’m a frontend developer focused on e-commerce, with professional agency experience delivering production e-commerce projects.',
    note:
      'Based in Italy and available remotely across Europe for freelance projects, agency collaborations and remote job opportunities.',
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Have something to build or improve?',
    note:
      'Share your project, role or collaboration needs and I’ll get back to you.',
    email: 'hello@emmanueledurante.com',
  },
} as const;

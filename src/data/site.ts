export const site = {
  name: 'Emmanuele Durante',
  title: 'Emmanuele Durante — Frontend Developer',
  description:
    'Frontend developer working across e-commerce, Shopify and modern JavaScript.',

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
    { label: 'Profile', href: '#profile' },
    { label: 'Contact', href: '#contact' },
  ],

  hero: {
    eyebrow: 'Frontend Developer · E-commerce · Shopify',
    title: [
      { text: 'I build and ' },
      { text: 'improve', accent: true },
      { text: ' digital storefronts.' },
    ],
    introduction:
      'I help businesses and teams build, improve and maintain e-commerce experiences across Shopify and modern web stacks.',
  },

  projects: [],

  services: [
    {
      index: '01',
      title: 'Shopify development',
      detail:
        'Theme development, custom sections, storefront customisation and ongoing improvements.',
    },
    {
      index: '02',
      title: 'Frontend implementation',
      detail:
        'Responsive interfaces built from designs using modern JavaScript, Vue, React and component-based workflows.',
    },
    {
      index: '03',
      title: 'E-commerce support',
      detail:
        'Frontend fixes, integrations, maintenance and improvements for existing online stores.',
    },
  ],

  profile: {
    eyebrow: 'Profile',
    statement:
      'I’m a frontend developer with a strong focus on e-commerce. I work with Shopify, Vue, React and modern JavaScript stacks, turning designs and requirements into clear, maintainable interfaces.',
    note:
      'Alongside my agency work, I take on selected independent projects for businesses and professionals.',
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Have something to build or improve?',
    note:
      'I’m available for selected freelance projects, collaborations and frontend development work.',
  },
} as const;

import { site as englishSite } from './site';

export const languages = ['en', 'it', 'es'] as const;
export type Language = (typeof languages)[number];

export function languagePath(language: Language): string {
  return language === 'en' ? '/' : `/${language}/`;
}

type ProjectTranslation = { category: string; title: string; description: string };
type ServiceTranslation = { title: string; detail: string };
type ContentTranslation = {
  title: string;
  description: string;
  navigation: string[];
  heroIntroduction: string;
  workIntroduction: string;
  projects: ProjectTranslation[];
  capabilitiesTitle: string;
  services: ServiceTranslation[];
  profileStatement: string;
  profileNote: string;
  expertiseTitle: string;
  expertiseIntroduction: string;
  contactTitle: string;
  contactNote: string;
};

const contentTranslations: Record<'it' | 'es', ContentTranslation> = {
  it: {
    title: 'Emmanuele Durante — Frontend & E-commerce Engineer',
    description: 'Frontend & e-commerce engineering con Vue, React, TypeScript, Shopify e Shopware 6. B2B e-commerce, API integrations e AI-assisted development.',
    navigation: ['Lavori', 'Servizi', 'Competenze', 'Chi sono', 'Contatti'],
    heroIntroduction: 'Sviluppo web app e feature e-commerce facili da usare, analizzare e mantenere: dalle UI Vue e React a Shopify e Shopware 6.',
    workIntroduction: 'Una selezione degli ultimi lavori svolti.',
    projects: [
      {
        category: 'B2B e-commerce · Shopware',
        title: 'Accesso controllato a uno storefront B2B privato',
        description: 'Implementazione di un workflow e-commerce riservato, con registrazione controllata, access control, config-aware migrations e automated regression tests.',
      },
      {
        category: 'E-commerce · Shopify',
        title: 'Refactoring di un custom routine builder',
        description: 'Refactoring di una grande funzionalità custom. JavaScript in un Web Component manutenibile, con business rules centralizzate e migliore gestione del lifecycle e degli errori del cart.',
      },
      {
        category: 'Product UI · React',
        title: 'Schema-driven forms e PDF generati nel browser',
        description: 'Sviluppo di typed form workflows, structured data models e generazione di PDF nel browser, con optimistic updates e automated tests.',
      },
      {
        category: 'AI · Developer tooling',
        title: 'AI-assisted development con verifica indipendente',
        description: 'R&D. Valutazione di AI agent skills, workflow Figma-to-code e approcci test-first, con attenzione alla verifica indipendente degli output generati.',
      },
    ],
    capabilitiesTitle: 'Di cosa mi occupo',
    services: [
      {
        title: 'B2B & B2C e-commerce',
        detail: 'Feature e workflow personalizzati su Shopware e Shopify, progettati tenendo conto dei vincoli operativi reali.',
      },
      {
        title: 'Web apps & UI systems',
        detail: 'UI Vue, React e TypeScript, reusable components, API integrations e architetture manutenibili.',
      },
      {
        title: 'Debugging & integrations',
        detail: 'Root-cause analysis, estensione sicura delle piattaforme e integrazione con third-party services.',
      },
      {
        title: 'Testing & delivery',
        detail: 'Regression tests, UI accessibili, documentazione chiara e tooling che lascia il controllo ai team.',
      },
    ],
    profileStatement: 'Mi piace andare alla radice di un problema e lasciare il sistema più semplice da gestire.',
    profileNote: 'Lavoro con team di agenzia, clienti e backend developers dal 2022. Vivo a Forlì; sono disponibile per ruoli di frontend ed e-commerce engineering, collaborazioni da remoto e progetti freelance selezionati.',
    expertiseTitle: 'Tecnologie scelte in base al problema',
    expertiseIntroduction: 'Oltre 4 anni di esperienza su web app e piattaforme e-commerce in produzione. Focus sul frontend, con esperienza pratica anche sul backend di Shopware.',
    contactTitle: 'Cerchi un Frontend Engineer?',
    contactNote: 'Stai assumendo o hai bisogno di supporto per un prodotto e-commerce? Raccontami cosa stai realizzando.',
  },
  es: {
    title: 'Emmanuele Durante — Frontend & E-commerce Engineer',
    description: 'Frontend & e-commerce engineering con Vue, React, TypeScript, Shopify y Shopware 6. B2B e-commerce, API integrations y AI-assisted development.',
    navigation: ['Proyectos', 'Servicios', 'Tecnologías', 'Sobre mí', 'Contacto'],
    heroIntroduction: 'Desarrollo web apps y features de e-commerce fáciles de usar, hacer debugging y mantener: desde UI con Vue y React hasta Shopify y Shopware 6.',
    workIntroduction: 'Una selección de los ultimos trabajos realizados.',
    projects: [
      {
        category: 'B2B e-commerce · Shopware',
        title: 'Acceso controlado a un storefront B2B privado',
        description: 'Implementación de un workflow de e-commerce restringido con registro controlado, access control, config-aware migrations y automated regression tests.',
      },
      {
        category: 'E-commerce · Shopify',
        title: 'Refactoring de un custom routine builder',
        description: 'Refactoring de una implementación extensa custom. JavaScript hacia un Web Component mantenible, con business rules centralizadas y mejor manejo del lifecycle y los cart errors.',
      },
      {
        category: 'Product UI · React',
        title: 'Schema-driven forms y PDF generados en el navegador',
        description: 'Desarrollo de typed form workflows, structured data models y generación de PDF en el navegador, con optimistic updates y automated tests.',
      },
      {
        category: 'AI · Developer tooling',
        title: 'AI-assisted development con verificación independiente',
        description: 'R&D. Evaluación de AI agent skills, workflows Figma-to-code y procesos test-first, priorizando la verificación independiente de los outputs generados.',
      },
    ],
    capabilitiesTitle: 'En qué puedo contribuir',
    services: [
      {
        title: 'B2B & B2C e-commerce',
        detail: 'Features y workflows personalizados en Shopware y Shopify, diseñados según necesidades operativas reales.',
      },
      {
        title: 'Web apps & UI systems',
        detail: 'UI con Vue, React y TypeScript, reusable components, API integrations y arquitectura mantenible.',
      },
      {
        title: 'Debugging & integrations',
        detail: 'Root-cause analysis, extensión segura de plataformas e integración de third-party services.',
      },
      {
        title: 'Testing & delivery',
        detail: 'Regression tests, UI accesibles, documentación clara y tooling que da autonomía a los equipos.',
      },
    ],
    profileStatement: 'Me gusta encontrar la raíz de un problema y dejar el sistema más fácil de mantener.',
    profileNote: 'Trabajo con equipos de agencias, clientes y backend developers desde 2022. Vivo en Forlì, Italia; estoy abierto a puestos de frontend y e-commerce engineering, colaboraciones remotas y proyectos freelance seleccionados.',
    expertiseTitle: 'Tecnologías elegidas según el problema',
    expertiseIntroduction: 'Más de 4 años de experiencia en web apps y plataformas de e-commerce en producción. Especializado en frontend, con experiencia práctica en el backend de Shopware.',
    contactTitle: '¿Buscas un Frontend Engineer?',
    contactNote: '¿Estás contratando o necesitas ayuda con un producto e-commerce? Cuéntame qué estás construyendo.',
  },
};

export function localizedSite(language: Language) {
  if (language === 'en') return englishSite;
  const t = contentTranslations[language];
  return {
    ...englishSite,
    title: t.title,
    description: t.description,
    navigation: englishSite.navigation.map((entry, index) => ({ ...entry, label: t.navigation[index] ?? entry.label })),
    hero: { ...englishSite.hero, introduction: t.heroIntroduction },
    work: { ...englishSite.work, introduction: t.workIntroduction },
    projects: englishSite.projects.map((entry, index) => ({ ...entry, ...t.projects[index] })),
    servicesSection: { ...englishSite.servicesSection, title: t.capabilitiesTitle },
    services: englishSite.services.map((entry, index) => ({ ...entry, ...t.services[index] })),
    profile: { ...englishSite.profile, statement: t.profileStatement, note: t.profileNote },
    expertise: { ...englishSite.expertise, title: t.expertiseTitle, introduction: t.expertiseIntroduction },
    contact: { ...englishSite.contact, title: t.contactTitle, note: t.contactNote },
  };
}

export const ui = {
  en: {
    homepageLabel: 'Emmanuele Durante, homepage',
    mainNavigation: 'Main navigation',
    languageSelector: 'Select language',
    headerContact: 'Get in touch',
    heroHeadingFirst: 'Frontend',
    : '& e-commerce.',
    heroAlt: 'Emmanuele Durante wearing blue-framed glasses, photographed in a workspace.',
    viewWork: 'View my work',
    contactMe: 'Contact me',
    basedIn: 'Based in Forlì, Italy',
    heroFolio: 'Frontend & e-commerce engineer',
    selectedWork: 'Selected work.',
    capabilitySubtitle: 'From storefronts to the systems behind them.',
    technologiesLabel: 'Technologies',
    coreTechnologiesLabel: 'Core technologies',
    footerSpecialty: 'Frontend & e-commerce engineering',
    backToTop: 'Back to top',
    contactForm: {
      name: 'Name',
      email: 'Email',
      company: 'Company',
      optional: 'optional',
      category: 'Type of request',
      selectCategory: 'Select a category',
      project: 'I have a project',
      job: 'Job opportunity',
      collaboration: 'Collaboration / agency support',
      message: 'Message',
      website: 'Website',
      captcha: 'Spam verification',
      submit: 'Send message',
      statuses: {
        verificationFailed: 'Verification failed. Please try again.',
        verificationUnavailable: 'Verification is unavailable. Please contact me by email.',
        sending: 'Sending…',
        verificationRequired: 'Please complete the verification and submit again.',
        success: 'Thanks — your message has been sent.',
        invalidFields: 'Check the fields: name must have at least 2 characters and message at least 10.',
        tooFast: 'The form was submitted too quickly. Please try again.',
        securityFailed: 'Security verification failed. Please reload the page and try again.',
        verificationRejected: 'Verification was rejected. Refresh the page and try again, or use email.',
        tooMany: 'Too many attempts. Please try again later or use email.',
        httpError: 'Unable to send the message',
        fallbackEmail: 'Please contact me by email.',
        cannotReach: 'Cannot reach the message service. Please contact me by email.',
      },
    },
  },
  it: {
    homepageLabel: 'Emmanuele Durante, pagina iniziale',
    mainNavigation: 'Navigazione principale',
    languageSelector: 'Seleziona lingua',
    headerContact: 'Contattami',
    heroHeadingFirst: 'Frontend',
    heroHeadingSecond: '& e-commerce.',
    heroAlt: 'Emmanuele Durante con occhiali dalla montatura blu, fotografato in uno spazio di lavoro.',
    viewWork: 'Scopri i lavori',
    contactMe: 'Contattami',
    basedIn: 'A Forlì, Italia',
    heroFolio: 'Frontend & e-commerce engineer',
    selectedWork: 'Lavori selezionati.',
    capabilitySubtitle: 'Dalle vetrine online ai sistemi che le fanno funzionare.',
    technologiesLabel: 'Tecnologie',
    coreTechnologiesLabel: 'Tecnologie principali',
    footerSpecialty: 'Frontend & e-commerce engineering',
    backToTop: 'Torna su',
    contactForm: {
      name: 'Nome',
      email: 'Email',
      company: 'Azienda',
      optional: 'facoltativo',
      category: 'Tipo di richiesta',
      selectCategory: 'Seleziona una categoria',
      project: 'Ho un progetto',
      job: 'Opportunità di lavoro',
      collaboration: 'Collaborazione / supporto agenzia',
      message: 'Messaggio',
      website: 'Sito web',
      captcha: 'Verifica antispam',
      submit: 'Invia messaggio',
      statuses: {
        verificationFailed: 'Verifica non riuscita. Riprova.',
        verificationUnavailable: 'La verifica non è disponibile. Contattami via email.',
        sending: 'Invio in corso…',
        verificationRequired: 'Completa la verifica e invia nuovamente.',
        success: 'Grazie, il tuo messaggio è stato inviato.',
        invalidFields: 'Controlla i campi: il nome deve avere almeno 2 caratteri e il messaggio almeno 10.',
        tooFast: 'Il modulo è stato inviato troppo rapidamente. Riprova.',
        securityFailed: 'Verifica di sicurezza non riuscita. Ricarica la pagina e riprova.',
        verificationRejected: 'Verifica rifiutata. Ricarica la pagina e riprova, oppure scrivimi via email.',
        tooMany: 'Troppi tentativi. Riprova più tardi oppure scrivimi via email.',
        httpError: 'Impossibile inviare il messaggio',
        fallbackEmail: 'Contattami via email.',
        cannotReach: 'Servizio di invio non raggiungibile. Contattami via email.',
      },
    },
  },
  es: {
    homepageLabel: 'Emmanuele Durante, página principal',
    mainNavigation: 'Navegación principal',
    languageSelector: 'Seleccionar idioma',
    headerContact: 'Contáctame',
    heroHeadingFirst: 'Frontend',
    heroHeadingSecond: '& e-commerce.',
    heroAlt: 'Emmanuele Durante con gafas de montura azul, fotografiado en un espacio de trabajo.',
    viewWork: 'Ver mis proyectos',
    contactMe: 'Contáctame',
    basedIn: 'En Forlì, Italia',
    heroFolio: 'Frontend & e-commerce engineer',
    selectedWork: 'Proyectos destacados.',
    capabilitySubtitle: 'Desde las tiendas en línea hasta los sistemas que las sostienen.',
    technologiesLabel: 'Tecnologías',
    coreTechnologiesLabel: 'Tecnologías principales',
    footerSpecialty: 'Frontend & e-commerce engineering',
    backToTop: 'Volver arriba',
    contactForm: {
      name: 'Nombre',
      email: 'Email',
      company: 'Empresa',
      optional: 'opcional',
      category: 'Tipo de solicitud',
      selectCategory: 'Selecciona una categoría',
      project: 'Tengo un proyecto',
      job: 'Oportunidad laboral',
      collaboration: 'Colaboración / apoyo a agencias',
      message: 'Mensaje',
      website: 'Sitio web',
      captcha: 'Verificación antispam',
      submit: 'Enviar mensaje',
      statuses: {
        verificationFailed: 'La verificación falló. Inténtalo de nuevo.',
        verificationUnavailable: 'La verificación no está disponible. Escríbeme por email.',
        sending: 'Enviando…',
        verificationRequired: 'Completa la verificación y vuelve a enviar el mensaje.',
        success: 'Gracias, tu mensaje ha sido enviado.',
        invalidFields: 'Revisa los campos: el nombre debe tener al menos 2 caracteres y el mensaje al menos 10.',
        tooFast: 'El formulario se envió demasiado rápido. Inténtalo de nuevo.',
        securityFailed: 'Falló la verificación de seguridad. Actualiza la página e inténtalo de nuevo.',
        verificationRejected: 'La verificación fue rechazada. Actualiza la página y vuelve a intentar, o usa el email.',
        tooMany: 'Demasiados intentos. Inténtalo más tarde o escríbeme por email.',
        httpError: 'No se pudo enviar el mensaje',
        fallbackEmail: 'Escríbeme por email.',
        cannotReach: 'No se puede contactar con el servicio de mensajes. Escríbeme por email.',
      },
    },
  },
} as const;

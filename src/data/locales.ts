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
    title: 'Emmanuele Durante — Frontend & Commerce Engineer',
    description: 'Sviluppo frontend e soluzioni e-commerce con Vue, React, TypeScript, Shopify e Shopware 6. Commercio B2B, integrazioni e sviluppo assistito dall’IA.',
    navigation: ['Lavori', 'Servizi', 'Competenze', 'Chi sono', 'Contatti'],
    heroIntroduction: 'Sviluppo applicazioni web e funzionalità e-commerce più facili da usare, analizzare e mantenere: dalle interfacce Vue e React a Shopify e Shopware 6.',
    workIntroduction: 'Una selezione di lavori anonimizzati, concentrata sul contributo tecnico anziché sui nomi dei clienti.',
    projects: [
      {
        category: 'Commercio B2B · Shopware',
        title: 'Accesso controllato a uno storefront B2B privato',
        description: 'Implementazione di un flusso commerciale riservato, con registrazione controllata, regole di accesso, migrazioni consapevoli della configurazione e test automatici di regressione.',
      },
      {
        category: 'E-commerce · Shopify',
        title: 'Refactoring di un configuratore personalizzato',
        description: 'Riorganizzazione di una grande implementazione JavaScript inline in un Web Component manutenibile, centralizzando le regole di business e migliorando la gestione del ciclo di vita e degli errori del carrello.',
      },
      {
        category: 'Interfacce di prodotto · React',
        title: 'Form basati su schema e PDF generati nel browser',
        description: 'Sviluppo di flussi di compilazione tipizzati, modelli di dati strutturati e generazione di PDF nel browser, con aggiornamenti ottimistici e test automatici.',
      },
      {
        category: 'IA · Strumenti per sviluppatori',
        title: 'Sviluppo assistito dall’IA con verifica indipendente',
        description: 'Esplorazione di competenze per agenti IA, valutazione del passaggio da Figma al codice e flussi di lavoro test-first, con particolare attenzione alla verifica indipendente dei risultati generati.',
      },
    ],
    capabilitiesTitle: 'Di cosa mi occupo',
    services: [
      {
        title: 'Commercio B2B e B2C',
        detail: 'Funzionalità e flussi personalizzati su Shopware e Shopify, progettati tenendo conto dei vincoli operativi reali.',
      },
      {
        title: 'Applicazioni web e sistemi UI',
        detail: 'Interfacce Vue, React e TypeScript, componenti riutilizzabili, integrazioni API e architetture manutenibili.',
      },
      {
        title: 'Debugging e integrazioni',
        detail: 'Analisi delle cause dei problemi, estensione sicura delle piattaforme e integrazione di servizi esterni.',
      },
      {
        title: 'Consegne affidabili',
        detail: 'Test di regressione, interfacce accessibili, documentazione chiara e strumenti che lasciano il controllo ai team.',
      },
    ],
    profileStatement: 'Mi piace andare alla radice di un problema e lasciare il sistema più semplice da gestire.',
    profileNote: 'Lavoro con team di agenzia, clienti e sviluppatori backend dal 2022. Vivo a Forlì; sono disponibile per posizioni frontend e commerce engineering, collaborazioni da remoto e progetti freelance selezionati.',
    expertiseTitle: 'Tecnologie scelte in base al problema',
    expertiseIntroduction: 'Oltre 4 anni di esperienza su applicazioni web e piattaforme e-commerce in produzione. Specializzato nel frontend, con esperienza pratica anche sul backend di Shopware.',
    contactTitle: 'Cerchi uno sviluppatore frontend?',
    contactNote: 'Stai assumendo o hai bisogno di supporto per un prodotto e-commerce? Raccontami cosa stai realizzando.',
  },
  es: {
    title: 'Emmanuele Durante — Frontend & Commerce Engineer',
    description: 'Desarrollo frontend y comercio electrónico con Vue, React, TypeScript, Shopify y Shopware 6. Comercio B2B, integraciones y desarrollo asistido por IA.',
    navigation: ['Proyectos', 'Servicios', 'Tecnologías', 'Sobre mí', 'Contacto'],
    heroIntroduction: 'Desarrollo aplicaciones web y funcionalidades de comercio electrónico más fáciles de usar, depurar y mantener: desde interfaces con Vue y React hasta Shopify y Shopware 6.',
    workIntroduction: 'Una selección de trabajos anonimizados, centrada en la contribución técnica y no en los nombres de los clientes.',
    projects: [
      {
        category: 'Comercio B2B · Shopware',
        title: 'Acceso controlado a una tienda B2B privada',
        description: 'Implementación de un flujo comercial restringido con registro controlado, reglas de acceso, migraciones adaptadas a la configuración y pruebas automatizadas de regresión.',
      },
      {
        category: 'Comercio electrónico · Shopify',
        title: 'Refactorización de un configurador personalizado',
        description: 'Reestructuración de una implementación extensa de JavaScript inline como Web Component mantenible, centralizando las reglas de negocio y mejorando el ciclo de vida y el manejo de errores del carrito.',
      },
      {
        category: 'Interfaces de producto · React',
        title: 'Formularios basados en esquemas y PDF generados en el navegador',
        description: 'Desarrollo de flujos de formularios tipados, modelos de datos estructurados y generación de PDF en el navegador, con actualizaciones optimistas y pruebas automatizadas.',
      },
      {
        category: 'IA · Herramientas de desarrollo',
        title: 'Desarrollo asistido por IA con verificación independiente',
        description: 'Exploración de habilidades para agentes de IA, evaluación de diseños de Figma llevados a código y procesos test-first, haciendo hincapié en verificar de forma independiente los resultados generados.',
      },
    ],
    capabilitiesTitle: 'En qué puedo contribuir',
    services: [
      {
        title: 'Comercio B2B y B2C',
        detail: 'Funcionalidades y flujos personalizados en Shopware y Shopify, diseñados según necesidades operativas reales.',
      },
      {
        title: 'Aplicaciones web y sistemas UI',
        detail: 'Interfaces con Vue, React y TypeScript, componentes reutilizables, integraciones API y arquitectura mantenible.',
      },
      {
        title: 'Depuración e integraciones',
        detail: 'Identificación de causas raíz, ampliación segura de plataformas e integración de servicios externos.',
      },
      {
        title: 'Entregas confiables',
        detail: 'Pruebas de regresión, interfaces accesibles, documentación clara y herramientas que dan autonomía a los equipos.',
      },
    ],
    profileStatement: 'Me gusta encontrar la raíz de un problema y dejar el sistema más fácil de mantener.',
    profileNote: 'Trabajo con equipos de agencias, clientes y desarrolladores backend desde 2022. Vivo en Forlì, Italia; estoy abierto a puestos de frontend y commerce engineering, colaboraciones remotas y proyectos freelance seleccionados.',
    expertiseTitle: 'Tecnologías elegidas según el problema',
    expertiseIntroduction: 'Más de 4 años de experiencia en aplicaciones web y plataformas de comercio electrónico en producción. Especializado en frontend, con experiencia práctica en el backend de Shopware.',
    contactTitle: '¿Buscas un desarrollador frontend?',
    contactNote: '¿Estás contratando o necesitas ayuda con un producto de comercio electrónico? Cuéntame qué estás construyendo.',
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
    languageSelector: 'Select language',
    headerContact: 'Get in touch',
    heroHeadingFirst: 'Frontend',
    heroHeadingSecond: '& commerce.',
    heroAlt: 'Emmanuele Durante wearing blue-framed glasses, photographed in a workspace.',
    viewWork: 'View my work',
    contactMe: 'Contact me',
    basedIn: 'Based in Forlì, Italy',
    heroFolio: 'Frontend & commerce engineer',
    selectedWork: 'Selected work.',
    capabilitySubtitle: 'From storefronts to the systems behind them.',
    technologiesLabel: 'Technologies',
    coreTechnologiesLabel: 'Core technologies',
    footerSpecialty: 'Frontend & commerce engineering',
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
    languageSelector: 'Seleziona lingua',
    headerContact: 'Contattami',
    heroHeadingFirst: 'Frontend',
    heroHeadingSecond: 'e commercio.',
    heroAlt: 'Emmanuele Durante con occhiali dalla montatura blu, fotografato in uno spazio di lavoro.',
    viewWork: 'Scopri i lavori',
    contactMe: 'Contattami',
    basedIn: 'A Forlì, Italia',
    heroFolio: 'Ingegnere frontend ed e-commerce',
    selectedWork: 'Lavori selezionati.',
    capabilitySubtitle: 'Dalle vetrine online ai sistemi che le fanno funzionare.',
    technologiesLabel: 'Tecnologie',
    coreTechnologiesLabel: 'Tecnologie principali',
    footerSpecialty: 'Sviluppo frontend ed e-commerce',
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
    languageSelector: 'Seleccionar idioma',
    headerContact: 'Contáctame',
    heroHeadingFirst: 'Frontend',
    heroHeadingSecond: 'y comercio.',
    heroAlt: 'Emmanuele Durante con gafas de montura azul, fotografiado en un espacio de trabajo.',
    viewWork: 'Ver mis proyectos',
    contactMe: 'Contáctame',
    basedIn: 'En Forlì, Italia',
    heroFolio: 'Ingeniero frontend y comercio electrónico',
    selectedWork: 'Proyectos destacados.',
    capabilitySubtitle: 'Desde las tiendas en línea hasta los sistemas que las sostienen.',
    technologiesLabel: 'Tecnologías',
    coreTechnologiesLabel: 'Tecnologías principales',
    footerSpecialty: 'Desarrollo frontend y comercio electrónico',
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

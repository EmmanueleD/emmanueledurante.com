import type { Language } from './locales';

interface ProjectCase {
  challenge: string;
  contribution: string;
  verification: string;
  /** Only link a public, approved project or asset. */
  publicUrl?: string;
  publicImage?: string;
  publicImageAlt?: string;
}

export const projectCaseLabels: Record<Language, {
  expand: string; challenge: string; contribution: string; verification: string; site: string;
}> = {
  en: { expand: 'Explore the work', challenge: 'The challenge', contribution: 'My contribution', verification: 'Approach and checks', site: 'Visit public project' },
  it: { expand: 'Approfondisci il progetto', challenge: 'Il problema', contribution: 'Il mio contributo', verification: 'Scelte e verifiche', site: 'Visita il progetto' },
  es: { expand: 'Explorar el proyecto', challenge: 'El problema', contribution: 'Mi contribución', verification: 'Decisiones y pruebas', site: 'Ver el proyecto' },
};

/** Only documented project facts. Do not invent clients, performance figures or results. */
export const projectCases: Record<Language, Record<string, ProjectCase>> = {
  en: {
    '01': {
      challenge: 'A private B2B storefront needed controlled registration and access.',
      contribution: 'I implemented the registration and access workflow, access rules and migrations dependent on the store configuration.',
      verification: 'Regression tests for the updated workflows.',
    },
    '02': {
      challenge: 'A large custom routine builder combined business rules and cart interactions.',
      contribution: 'I refactored it into a Web Component and centralized the rules.',
      verification: 'Improved lifecycle management and cart-error handling.',
    },
    '03': {
      challenge: 'Schema-driven forms needed typed data and browser-generated PDFs.',
      contribution: 'I developed form flows, typed models and PDF generation in the browser.',
      verification: 'Optimistic updates and automated tests.',
    },
    '04': {
      challenge: 'Exploration of AI-assisted development and Figma-to-code workflows.',
      contribution: 'I evaluated developer agents and Figma-to-code workflows.',
      verification: 'A test-first approach and independent checks on generated output.',
    },
  },
  it: {
    '01': {
      challenge: 'Uno storefront B2B privato richiedeva registrazioni e accessi controllati.',
      contribution: 'Ho implementato il flusso di registrazione e accesso, le regole di autorizzazione e le migrazioni legate alla configurazione dello store.',
      verification: 'Test di regressione sui flussi modificati.',
    },
    '02': {
      challenge: 'Un configuratore personalizzato riuniva regole di business e interazioni con il carrello in un unico componente molto esteso.',
      contribution: 'L’ho rifattorizzato come Web Component, centralizzando le regole.',
      verification: 'Gestione del ciclo di vita del componente e degli errori del carrello migliorata.',
    },
    '03': {
      challenge: 'Moduli basati su schemi richiedevano modelli tipizzati e PDF generati nel browser.',
      contribution: 'Ho sviluppato i flussi dei moduli, i modelli di dati tipizzati e la generazione dei PDF sul client.',
      verification: 'Aggiornamenti ottimistici e test automatici.',
    },
    '04': {
      challenge: 'Esplorazione dello sviluppo assistito dall’AI e dei flussi Figma-to-code.',
      contribution: 'Ho valutato agenti di sviluppo e flussi Figma-to-code.',
      verification: 'Approccio test-first e controlli indipendenti sul risultato generato.',
    },
  },
  es: {
    '01': {
      challenge: 'Un storefront B2B privado necesitaba controlar los registros y accesos.',
      contribution: 'Implementé los flujos de registro y acceso, las reglas de autorización y las migraciones ligadas a la configuración de la tienda.',
      verification: 'Pruebas de regresión de los flujos modificados.',
    },
    '02': {
      challenge: 'Un configurador personalizado reunía reglas de negocio e interacciones con el carrito en un componente muy extenso.',
      contribution: 'Lo refactoricé como Web Component, centralizando las reglas.',
      verification: 'Mejoras en la gestión del ciclo de vida del componente y de los errores del carrito.',
    },
    '03': {
      challenge: 'Los formularios basados en esquemas requerían modelos tipados y PDF generados en el navegador.',
      contribution: 'Desarrollé los flujos de formularios, los modelos de datos tipados y la generación de PDF en el cliente.',
      verification: 'Actualizaciones optimistas y pruebas automatizadas.',
    },
    '04': {
      challenge: 'Exploración del desarrollo asistido por IA y de los flujos Figma-to-code.',
      contribution: 'Evalué agentes de desarrollo y flujos Figma-to-code.',
      verification: 'Enfoque test-first y comprobaciones independientes del resultado generado.',
    },
  },
};

import { languagePath, type Language } from './locales';

export function privacyPath(language: Language): string {
  return `${languagePath(language)}privacy/`;
}

type PrivacySection = { title: string; paragraphs: string[] };
type PrivacyCopy = {
  title: string;
  metaTitle: string;
  metaDescription: string;
  updated: string;
  intro: string;
  backHome: string;
  linkLabel: string;
  formNotice: string;
  formLink: string;
  resourcesHeading: string;
  sections: PrivacySection[];
};

export const privacyCopy: Record<Language, PrivacyCopy> = {
  en: {
    title: 'Privacy notice.',
    metaTitle: 'Privacy notice — Emmanuele Durante',
    metaDescription: 'How personal data is handled through the contact form and security protections on this website.',
    updated: 'Updated 13 November 2026',
    intro: 'This notice explains how personal data is handled when you visit emmanueledurante.com or send a message using its contact form.',
    backHome: 'Back to homepage',
    linkLabel: 'Privacy',
    formNotice: 'Your details are used to handle your enquiry. Read the',
    formLink: 'privacy notice',
    resourcesHeading: 'Provider information',
    sections: [
      {
        title: '1. Data controller and contact',
        paragraphs: [
          'Emmanuele Durante, based in Forlì, Italy, is responsible for handling personal data collected via this website. For privacy enquiries and requests to exercise your rights: hello@emmanueledurante.com.',
        ],
      },
      {
        title: '2. What data is processed',
        paragraphs: [
          'The contact form collects your name, email address, type of request and message; company name is optional. Technical data required to send or secure the request, including the Turnstile verification token, is also processed.',
          'The website infrastructure and anti-spam service may process technical connection information such as IP address, user agent and request metadata to serve pages and detect abuse.',
        ],
      },
      {
        title: '3. Purposes and lawful bases',
        paragraphs: [
          'Contact requests are used only to answer messages and evaluate opportunities or professional collaborations. The legal basis is Article 6(1)(b) GDPR for pre-contractual steps requested by the sender when applicable, or Article 6(1)(f) GDPR (legitimate interest in responding to enquiries) for other communications.',
          'Protecting the contact form against spam and abuse relies on the legitimate interest in securing the website and communications (Article 6(1)(f) GDPR).',
        ],
      },
      {
        title: '4. Service providers',
        paragraphs: [
          'The website and its contact API are hosted on Hetzner infrastructure. Contact requests are sent over HTTPS to the API and delivered via Infomaniak email services. Cloudflare Turnstile helps distinguish human visitors from bots. Web fonts are served directly from this website.',
          'These providers may process information necessary to perform their respective services. Cloudflare also describes processing for the improvement of Turnstile in its own privacy notice.',
        ],
      },
      {
        title: '5. Retention and international transfers',
        paragraphs: [
          'Correspondence is kept for as long as needed to handle the enquiry, manage any subsequent professional relationship, comply with applicable legal obligations, or protect legal rights. Technical data held by infrastructure and security providers is subject to their own retention arrangements and the relevant service settings.',
          'Some service providers may process data outside the European Economic Area. Relevant transfer mechanisms and safeguards depend on their service agreements and applicable privacy terms. You may request information about the arrangements relevant to your data using the contact address above.',
        ],
      },
      {
        title: '6. Cookies and security',
        paragraphs: [
          'No audience-measurement, advertising, or profiling trackers are configured on this website. The fonts are self-hosted and do not require visitors to contact Google Fonts.',
          'Cloudflare Turnstile is loaded when you approach or interact with the contact form. It processes technical signals to detect automated submissions, and may use security-related cookies or similar mechanisms as described in Cloudflare’s notice.',
        ],
      },
      {
        title: '7. Your choices and rights',
        paragraphs: [
          'You can request access, correction or erasure of your personal data, restriction of processing, and object to processing. Data portability and other rights apply where provided by law. Send requests to hello@emmanueledurante.com. You may also lodge a complaint with the Italian data protection authority (Garante per la protezione dei dati personali).',
          'Providing your name, email, request type and message is necessary to use the contact form; company name is optional. Alternatively, you can contact me directly by email. Messages are not used to subscribe you to a marketing newsletter.',
        ],
      },
    ],
  },
  it: {
    title: 'Privacy e dati personali.',
    metaTitle: 'Informativa privacy — Emmanuele Durante',
    metaDescription: 'Come vengono trattati i dati inviati tramite il modulo di contatto e i controlli di sicurezza.',
    updated: 'Aggiornata il 13 novembre 2026',
    intro: 'Questa informativa descrive come vengono trattati i dati personali quando visiti emmanueledurante.com o invii un messaggio dal modulo di contatto.',
    backHome: 'Torna alla homepage',
    linkLabel: 'Privacy',
    formNotice: 'I dati inviati saranno utilizzati per gestire la richiesta. Consulta l’informativa completa sulla',
    formLink: 'privacy',
    resourcesHeading: 'Informazioni sui fornitori',
    sections: [
      {
        title: '1. Titolare del trattamento e contatti',
        paragraphs: [
          'Il titolare del trattamento dei dati raccolti tramite questo sito è Emmanuele Durante, con sede di riferimento a Forlì, Italia. Per informazioni sulla privacy o per esercitare i tuoi diritti: hello@emmanueledurante.com.',
        ],
      },
      {
        title: '2. Dati trattati',
        paragraphs: [
          'Il modulo di contatto raccoglie nome, indirizzo email, tipo di richiesta e messaggio; il nome dell’azienda è facoltativo. Sono trattati anche i dati tecnici necessari all’invio e alla protezione del modulo, incluso il token di verifica Turnstile.',
          'L’infrastruttura del sito e il servizio antispam possono trattare informazioni tecniche di connessione come indirizzo IP, user agent e metadati delle richieste, per erogare il servizio e rilevare abusi.',
        ],
      },
      {
        title: '3. Finalità e basi giuridiche',
        paragraphs: [
          'I dati del contatto sono utilizzati per rispondere ai messaggi e valutare opportunità o collaborazioni professionali. La base giuridica è l’art. 6, par. 1, lett. b) GDPR per misure precontrattuali richieste dall’interessato, quando applicabile, oppure l’art. 6, par. 1, lett. f) GDPR (legittimo interesse a rispondere alle comunicazioni) negli altri casi.',
          'La protezione del modulo da spam e abusi si basa sul legittimo interesse alla sicurezza del sito e delle comunicazioni (art. 6, par. 1, lett. f) GDPR).',
        ],
      },
      {
        title: '4. Fornitori utilizzati',
        paragraphs: [
          'Il sito e la relativa API di contatto sono ospitati su infrastruttura Hetzner. I messaggi del modulo sono inviati tramite HTTPS all’API e recapitati attraverso il servizio email Infomaniak. Cloudflare Turnstile protegge il modulo dagli invii automatizzati. I font sono distribuiti direttamente dal sito.',
          'Questi fornitori possono trattare le informazioni necessarie all’erogazione dei rispettivi servizi. Cloudflare descrive inoltre, nella propria informativa, trattamenti finalizzati al miglioramento di Turnstile.',
        ],
      },
      {
        title: '5. Conservazione e trasferimenti internazionali',
        paragraphs: [
          'La corrispondenza viene conservata per il tempo necessario a gestire la richiesta, gli eventuali rapporti professionali successivi, gli obblighi di legge applicabili o la tutela dei diritti. Per i dati tecnici conservati dai fornitori di infrastruttura e sicurezza si applicano le relative condizioni di conservazione e configurazioni del servizio.',
          'Alcuni fornitori possono trattare dati anche fuori dallo Spazio economico europeo. I meccanismi e le garanzie per i trasferimenti dipendono dagli accordi di servizio e dalle condizioni privacy applicabili. Puoi richiedere informazioni sulle condizioni relative ai tuoi dati scrivendo all’indirizzo indicato sopra.',
        ],
      },
      {
        title: '6. Cookie e sicurezza',
        paragraphs: [
          'Il sito non utilizza strumenti di analisi delle visite, tracker pubblicitari o di profilazione. I font sono ospitati localmente e non richiedono collegamenti dei visitatori a Google Fonts.',
          'Cloudflare Turnstile viene caricato quando ci si avvicina al modulo di contatto o si interagisce con esso. Tratta segnali tecnici per riconoscere gli invii automatizzati e può impiegare cookie o meccanismi analoghi per finalità di sicurezza, secondo quanto indicato nell’informativa Cloudflare.',
        ],
      },
      {
        title: '7. Diritti e natura del conferimento',
        paragraphs: [
          'Puoi richiedere accesso, rettifica o cancellazione dei dati, limitazione del trattamento e opporti al trattamento. La portabilità e gli altri diritti si applicano nei casi previsti dalla legge. Scrivi a hello@emmanueledurante.com. Puoi inoltre proporre reclamo al Garante per la protezione dei dati personali.',
          'Nome, email, tipo di richiesta e messaggio sono necessari per utilizzare il modulo; il campo azienda è facoltativo. Puoi anche contattarmi direttamente via email. L’invio del modulo non comporta l’iscrizione a newsletter o comunicazioni promozionali.',
        ],
      },
    ],
  },
  es: {
    title: 'Privacidad y datos personales.',
    metaTitle: 'Política de privacidad — Emmanuele Durante',
    metaDescription: 'Cómo se tratan los datos enviados por el formulario de contacto y los controles de seguridad.',
    updated: 'Actualizada el 13 de noviembre de 2026',
    intro: 'Esta información explica cómo se tratan los datos personales cuando visitas emmanueledurante.com o envías un mensaje mediante el formulario de contacto.',
    backHome: 'Volver a la página principal',
    linkLabel: 'Privacidad',
    formNotice: 'Los datos que envíes se utilizarán para atender tu consulta. Consulta la',
    formLink: 'política de privacidad',
    resourcesHeading: 'Información de los proveedores',
    sections: [
      {
        title: '1. Responsable del tratamiento y contacto',
        paragraphs: [
          'Emmanuele Durante, con sede de referencia en Forlì, Italia, es responsable del tratamiento de los datos recogidos a través de este sitio. Para consultas de privacidad o para ejercer tus derechos: hello@emmanueledurante.com.',
        ],
      },
      {
        title: '2. Datos tratados',
        paragraphs: [
          'El formulario de contacto recoge nombre, correo electrónico, tipo de solicitud y mensaje; el nombre de la empresa es opcional. También se procesan datos técnicos necesarios para enviar y proteger la solicitud, incluido el token de verificación de Turnstile.',
          'La infraestructura del sitio y el servicio antispam pueden procesar información técnica de conexión, como dirección IP, agente de usuario y metadatos de las solicitudes, para prestar el servicio y detectar abusos.',
        ],
      },
      {
        title: '3. Finalidades y bases jurídicas',
        paragraphs: [
          'Los datos de contacto se utilizan para responder mensajes y valorar oportunidades o colaboraciones profesionales. La base jurídica es el art. 6.1.b) del RGPD para medidas precontractuales solicitadas por la persona interesada cuando corresponda, o el art. 6.1.f) (interés legítimo en responder a las consultas) para otras comunicaciones.',
          'La protección del formulario frente a spam y abusos se basa en el interés legítimo de proteger el sitio y las comunicaciones (art. 6.1.f del RGPD).',
        ],
      },
      {
        title: '4. Proveedores',
        paragraphs: [
          'El sitio y su API de contacto están alojados en infraestructura de Hetzner. Los mensajes del formulario se envían por HTTPS a la API y se entregan mediante el servicio de correo electrónico Infomaniak. Cloudflare Turnstile protege el formulario frente a envíos automatizados. Las fuentes se sirven directamente desde este sitio.',
          'Estos proveedores pueden tratar la información necesaria para prestar sus respectivos servicios. Cloudflare describe además en su aviso de privacidad el tratamiento de datos para mejorar Turnstile.',
        ],
      },
      {
        title: '5. Conservación y transferencias internacionales',
        paragraphs: [
          'La correspondencia se conserva durante el tiempo necesario para gestionar la solicitud, las posibles relaciones profesionales posteriores, cumplir las obligaciones legales aplicables o proteger derechos. Los datos técnicos que conserven los proveedores de infraestructura y seguridad se rigen por sus propias condiciones de conservación y configuraciones del servicio.',
          'Algunos proveedores pueden tratar datos fuera del Espacio Económico Europeo. Los mecanismos y garantías aplicables dependen de los acuerdos de servicio y las condiciones de privacidad correspondientes. Puedes solicitar información sobre las condiciones que afecten a tus datos escribiendo al correo indicado arriba.',
        ],
      },
      {
        title: '6. Cookies y seguridad',
        paragraphs: [
          'El sitio no utiliza herramientas de análisis de visitas ni rastreadores publicitarios o de perfilado. Las fuentes están alojadas localmente y no requieren que los visitantes se conecten a Google Fonts.',
          'Cloudflare Turnstile se carga al acercarse al formulario de contacto o interactuar con él. Procesa señales técnicas para detectar envíos automatizados y puede utilizar cookies o mecanismos similares por motivos de seguridad, según su aviso de privacidad.',
        ],
      },
      {
        title: '7. Derechos y carácter de los datos',
        paragraphs: [
          'Puedes solicitar acceso, rectificación o supresión de tus datos, la limitación de su tratamiento y oponerte al mismo. La portabilidad y otros derechos se aplican en los casos previstos por la ley. Escribe a hello@emmanueledurante.com. También puedes presentar una reclamación ante la autoridad italiana de protección de datos (Garante per la protezione dei dati personali).',
          'El nombre, el correo electrónico, el tipo de solicitud y el mensaje son necesarios para usar el formulario; la empresa es opcional. También puedes escribirme directamente por correo. Enviar el formulario no implica suscribirse a una newsletter ni recibir comunicaciones promocionales.',
        ],
      },
    ],
  },
};

export const privacyResources = [
  { name: 'GDPR — EU Regulation 2016/679', href: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj/' },
  { name: 'Cloudflare Turnstile', href: 'https://www.cloudflare.com/turnstile-privacy-policy/' },
  { name: 'Hetzner', href: 'https://www.hetzner.com/legal/privacy-policy/' },
  { name: 'Infomaniak', href: 'https://www.infomaniak.com/en/legal/general-data-protection-regulation' },
];

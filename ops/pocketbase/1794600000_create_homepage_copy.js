/**
 * CMS-editable localized copy for the static Astro homepage.
 * Records are seeded once and preserved on subsequent deployments.
 * Only visible entries can be read by anonymous clients.
 */
migrate((app) => {
  let collection;
  try {
    collection = app.findCollectionByNameOrId("homepage_copy");
  } catch (_) {
    collection = new Collection({
      type: "base",
      name: "homepage_copy",
      listRule: "visible = true",
      viewRule: "visible = true",
      createRule: null,
      updateRule: null,
      deleteRule: null,
      fields: [
        { type: "text", name: "slug", required: true, max: 100 },
        { type: "text", name: "text_en", max: 5000 },
        { type: "text", name: "text_it", max: 5000 },
        { type: "text", name: "text_es", max: 5000 },
        { type: "bool", name: "visible" }
      ],
      indexes: [
        "CREATE UNIQUE INDEX idx_homepage_copy_slug ON homepage_copy (slug)"
      ]
    });
    app.save(collection);
  }

  const items = [
    {
      "slug": "hero_heading_first",
      "visible": true,
      "text_en": "Frontend",
      "text_it": "Frontend",
      "text_es": "Frontend"
    },
    {
      "slug": "hero_heading_second",
      "visible": true,
      "text_en": "Developer.",
      "text_it": "Developer.",
      "text_es": "Developer."
    },
    {
      "slug": "hero_intro",
      "visible": true,
      "text_en": "I build and improve web interfaces, custom features and e-commerce workflows. I focus on understanding requirements, solving problems at their source and leaving code easier to maintain.",
      "text_it": "Sviluppo e miglioro interfacce web, funzionalità su misura e flussi e-commerce. Parto dai requisiti, cerco le cause dei problemi e lascio codice più semplice da mantenere.",
      "text_es": "Desarrollo y mejoro interfaces web, funcionalidades a medida y flujos de e-commerce. Analizo los requisitos, investigo las causas de los problemas y dejo el código más fácil de mantener."
    },
    {
      "slug": "work_title",
      "visible": true,
      "text_en": "Selected work.",
      "text_it": "Lavori selezionati.",
      "text_es": "Proyectos destacados."
    },
    {
      "slug": "work_intro",
      "visible": true,
      "text_en": "Selected work from production projects, focused on the problem, my contribution and the technical choices behind it.",
      "text_it": "Progetti reali raccontati attraverso il problema affrontato, il mio contributo e le scelte tecniche.",
      "text_es": "Proyectos reales explicados a partir del problema, mi contribución y las decisiones técnicas."
    },
    {
      "slug": "services_heading",
      "visible": true,
      "text_en": "Where I contribute",
      "text_it": "Di cosa mi occupo",
      "text_es": "En qué puedo contribuir"
    },
    {
      "slug": "services_subtitle",
      "visible": true,
      "text_en": "From storefronts to the systems behind them.",
      "text_it": "Dalle vetrine online ai sistemi che le fanno funzionare.",
      "text_es": "Desde las tiendas en línea hasta los sistemas que las sostienen."
    },
    {
      "slug": "profile_statement",
      "visible": true,
      "text_en": "I like getting to the root of a problem—and leaving the system easier to work with.",
      "text_it": "Mi piace andare alla radice di un problema e lasciare il sistema più semplice da gestire.",
      "text_es": "Me gusta encontrar la raíz de un problema y dejar el sistema más fácil de mantener."
    },
    {
      "slug": "profile_note",
      "visible": true,
      "text_en": "I have worked with agency teams, clients and backend developers since 2022. Based in Forlì, Italy; open to Frontend Developer roles, including remote positions, and collaborations with product teams and agencies.",
      "text_it": "Lavoro con team di agenzia, clienti e sviluppatori backend dal 2022. Vivo a Forlì e cerco opportunità come Frontend Developer, anche da remoto. Valuto collaborazioni con team e agenzie.",
      "text_es": "Trabajo con equipos de agencias, clientes y desarrolladores backend desde 2022. Vivo en Forlì, Italia, y busco oportunidades como Frontend Developer, también en remoto. Considero colaboraciones con equipos y agencias."
    },
    {
      "slug": "expertise_heading",
      "visible": true,
      "text_en": "Technology, chosen for the problem",
      "text_it": "Tecnologie scelte in base al problema",
      "text_es": "Tecnologías elegidas según el problema"
    },
    {
      "slug": "expertise_intro",
      "visible": true,
      "text_en": "4+ years across production web applications and e-commerce platforms. Frontend first, with practical backend work on Shopware.",
      "text_it": "Oltre 4 anni di esperienza su web app e piattaforme e-commerce in produzione. Focus sul frontend, con esperienza pratica anche sul backend di Shopware.",
      "text_es": "Más de 4 años de experiencia en web apps y plataformas de e-commerce en producción. Especializado en frontend, con experiencia práctica en el backend de Shopware."
    },
    {
      "slug": "contact_heading",
      "visible": true,
      "text_en": "Looking for a frontend developer?",
      "text_it": "Cerchi un Frontend Developer?",
      "text_es": "¿Buscas un Frontend Developer?"
    },
    {
      "slug": "contact_intro",
      "visible": true,
      "text_en": "Hiring for a role, or need help with an e-commerce product? Tell me what you are building.",
      "text_it": "Stai assumendo o hai bisogno di supporto per un prodotto e-commerce? Raccontami cosa stai realizzando.",
      "text_es": "¿Estás contratando o necesitas ayuda con un producto e-commerce? Cuéntame qué estás construyendo."
    },
    {
      "slug": "expertise_technologies",
      "visible": true,
      "text_en": "Vue.js, React, TypeScript, Shopify, Shopware 6, PHP / Symfony, Astro, Testing",
      "text_it": "Vue.js, React, TypeScript, Shopify, Shopware 6, PHP / Symfony, Astro, Testing",
      "text_es": "Vue.js, React, TypeScript, Shopify, Shopware 6, PHP / Symfony, Astro, Testing"
    }
  ];

  for (const item of items) {
    const existing = app.findRecordsByFilter(
      "homepage_copy", "slug = {:slug}", "", 1, 0, { slug: item.slug }
    );
    if (existing.length) continue;
    const record = new Record(collection);
    for (const [key, value] of Object.entries(item)) record.set(key, value);
    app.save(record);
  }
});

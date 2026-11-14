/**
 * PocketBase CMS — editable projects and services in three languages.
 * Existing portfolio copy is seeded once; re-running preserves admin edits.
 * Public API reads only visible items. All write operations require superuser.
 */
migrate((app) => {
  const define = (name, fields) => {
    let collection;
    try {
      collection = app.findCollectionByNameOrId(name);
    } catch (_) {
      collection = new Collection({
        type: "base",
        name,
        listRule: "visible = true",
        viewRule: "visible = true",
        createRule: null,
        updateRule: null,
        deleteRule: null,
        fields: [
          { type: "text", name: "slug", required: true, max: 100 },
          { type: "number", name: "sort_order", onlyInt: true, min: 0, max: 99999 },
          { type: "bool", name: "visible" },
          ...fields.map(([field, max]) => ({ type: "text", name: field, max }))
        ],
        indexes: [
          `CREATE UNIQUE INDEX idx_${name}_slug ON ${name} (slug)`
        ]
      });
      app.save(collection);
    }
    return collection;
  };

  const seed = (collection, items) => {
    for (const item of items) {
      const existing = app.findRecordsByFilter(
        collection.name,
        "slug = {:slug}",
        "",
        1,
        0,
        { slug: item.slug }
      );
      if (existing.length) continue;
      const record = new Record(collection);
      for (const [key, value] of Object.entries(item)) record.set(key, value);
      app.save(record);
    }
  };

  const projects = define("portfolio_projects", [
    ["category_en", 150], ["category_it", 150], ["category_es", 150],
    ["title_en", 250], ["title_it", 250], ["title_es", 250],
    ["description_en", 5000], ["description_it", 5000], ["description_es", 5000],
    ["technologies", 1200]
  ]);
  seed(projects, [
    {
      "slug": "project-1",
      "sort_order": 10,
      "visible": true,
      "category_en": "B2B e-commerce · Shopware",
      "category_it": "B2B e-commerce · Shopware",
      "category_es": "B2B e-commerce · Shopware",
      "title_en": "Controlled access for a private B2B storefront",
      "title_it": "Accesso controllato a uno storefront B2B privato",
      "title_es": "Acceso controlado a un storefront B2B privado",
      "description_en": "A private B2B storefront required controlled registration and access. I implemented the workflow, access rules, configuration-aware migrations and regression tests.",
      "description_it": "Uno storefront B2B privato richiedeva registrazioni e accessi controllati. Ho implementato il flusso, le regole di accesso, le migrazioni legate alla configurazione e i test di regressione.",
      "description_es": "Una tienda B2B privada necesitaba controlar el registro y el acceso. Implementé el flujo, las reglas de acceso, las migraciones dependientes de la configuración y las pruebas de regresión.",
      "technologies": "Shopware 6, PHP / Symfony, Twig, PHPUnit"
    },
    {
      "slug": "project-2",
      "sort_order": 20,
      "visible": true,
      "category_en": "E-commerce · Shopify",
      "category_it": "E-commerce · Shopify",
      "category_es": "E-commerce · Shopify",
      "title_en": "Refactoring a custom routine builder",
      "title_it": "Refactoring di un custom routine builder",
      "title_es": "Refactoring de un custom routine builder",
      "description_en": "A large custom routine builder combined complex business rules and cart interactions. I refactored it into a Web Component, centralizing the rules and improving lifecycle and cart-error handling.",
      "description_it": "Un configuratore personalizzato riuniva regole di business complesse e interazioni con il carrello. L’ho riorganizzato in un Web Component, centralizzando le regole e migliorando la gestione degli errori.",
      "description_es": "Un configurador personalizado combinaba reglas de negocio complejas e interacciones con el carrito. Lo refactoricé en un Web Component, centralizando las reglas y mejorando la gestión de errores.",
      "technologies": "Shopify, Liquid, JavaScript, Web Components"
    },
    {
      "slug": "project-3",
      "sort_order": 30,
      "visible": true,
      "category_en": "Product interfaces · React",
      "category_it": "Product UI · React",
      "category_es": "Product UI · React",
      "title_en": "Schema-driven forms with browser-generated PDFs",
      "title_it": "Schema-driven forms e PDF generati nel browser",
      "title_es": "Schema-driven forms y PDF generados en el navegador",
      "description_en": "Built schema-driven form workflows with typed data models and browser-side PDF generation, including optimistic updates and automated tests.",
      "description_it": "Ho sviluppato moduli basati su schemi, modelli di dati tipizzati e generazione di PDF nel browser, con aggiornamenti ottimistici e test automatici.",
      "description_es": "Desarrollé formularios basados en esquemas, modelos de datos tipados y generación de PDF en el navegador, con actualizaciones optimistas y pruebas automatizadas.",
      "technologies": "React, TypeScript, TanStack, Zod, pdf-lib"
    },
    {
      "slug": "project-4",
      "sort_order": 40,
      "visible": true,
      "category_en": "AI · Developer tooling",
      "category_it": "AI · Developer tooling",
      "category_es": "AI · Developer tooling",
      "title_en": "AI-assisted development with independent verification",
      "title_it": "AI-assisted development con verifica indipendente",
      "title_es": "AI-assisted development con verificación independiente",
      "description_en": "R&D. Evaluated agent skills and Figma-to-code workflows using test-first approaches and independent checks of generated results.",
      "description_it": "Ricerca e sviluppo: valutazione di agenti AI e flussi Figma-to-code, usando approcci test-first e verifiche indipendenti del codice generato.",
      "description_es": "Investigación y desarrollo: evaluación de agentes de IA y flujos Figma-to-code mediante enfoques test-first y comprobaciones independientes del código generado.",
      "technologies": "AI agents, TDD, Developer tooling, Evaluation"
    }
  ]);

  const services = define("portfolio_services", [
    ["title_en", 250], ["title_it", 250], ["title_es", 250],
    ["detail_en", 5000], ["detail_it", 5000], ["detail_es", 5000]
  ]);
  seed(services, [
    {
      "slug": "service-1",
      "sort_order": 10,
      "visible": true,
      "title_en": "B2B & B2C e-commerce",
      "title_it": "B2B & B2C e-commerce",
      "title_es": "B2B & B2C e-commerce",
      "detail_en": "Custom features and workflows on Shopware and Shopify, designed around real operational constraints.",
      "detail_it": "Feature e workflow personalizzati su Shopware e Shopify, progettati tenendo conto dei vincoli operativi reali.",
      "detail_es": "Features y workflows personalizados en Shopware y Shopify, diseñados según necesidades operativas reales."
    },
    {
      "slug": "service-2",
      "sort_order": 20,
      "visible": true,
      "title_en": "Web applications & UI systems",
      "title_it": "Web apps & UI systems",
      "title_es": "Web apps & UI systems",
      "detail_en": "Vue, React and TypeScript interfaces, reusable components, API integrations and maintainable architecture.",
      "detail_it": "UI Vue, React e TypeScript, reusable components, API integrations e architetture manutenibili.",
      "detail_es": "UI con Vue, React y TypeScript, reusable components, API integrations y arquitectura mantenible."
    },
    {
      "slug": "service-3",
      "sort_order": 30,
      "visible": true,
      "title_en": "Debugging & integrations",
      "title_it": "Debugging & integrations",
      "title_es": "Debugging & integrations",
      "detail_en": "Tracing problems to their root cause, extending platforms safely and integrating third-party services.",
      "detail_it": "Root-cause analysis, estensione sicura delle piattaforme e integrazione con third-party services.",
      "detail_es": "Root-cause analysis, extensión segura de plataformas e integración de third-party services."
    },
    {
      "slug": "service-4",
      "sort_order": 40,
      "visible": true,
      "title_en": "Reliable delivery",
      "title_it": "Testing & delivery",
      "title_es": "Testing & delivery",
      "detail_en": "Regression testing, accessible interfaces, clear documentation and tools that give teams control.",
      "detail_it": "Regression tests, UI accessibili, documentazione chiara e tooling che lascia il controllo ai team.",
      "detail_es": "Regression tests, UI accesibles, documentación clara y tooling que da autonomía a los equipos."
    }
  ]);
});

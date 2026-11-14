/**
 * Add SEO title and meta description to the editable multilingual homepage copy.
 * Never overwrite any existing admin changes.
 */
migrate((app) => {
  const collection = app.findCollectionByNameOrId("homepage_copy");
  const items = [
    {
      "slug": "seo_title",
      "text_en": "Emmanuele Durante — Frontend Developer",
      "text_it": "Emmanuele Durante — Frontend Developer",
      "text_es": "Emmanuele Durante — Frontend Developer",
      "visible": true
    },
    {
      "slug": "seo_description",
      "text_en": "Frontend Developer building and improving web applications, custom interfaces and e-commerce workflows. Experience with Vue, React, Shopify and Shopware 6.",
      "text_it": "Frontend Developer: sviluppo e miglioramento di applicazioni web, interfacce personalizzate e flussi e-commerce. Esperienza con Vue, React, Shopify e Shopware 6.",
      "text_es": "Frontend Developer: desarrollo y mejora de aplicaciones web, interfaces personalizadas y flujos de e-commerce. Experiencia con Vue, React, Shopify y Shopware 6.",
      "visible": true
    }
  ];
  for (const item of items) {
    const existing = app.findRecordsByFilter(
      "homepage_copy", "slug = {:slug}", "", 1, 0, { slug: item.slug }
    );
    if (existing.length > 0) continue;
    const record = new Record(collection);
    for (const [key, value] of Object.entries(item)) record.set(key, value);
    app.save(record);
  }
});

/**
 * PocketBase CMS — clients / collaborations directory.
 * Seeds the 15 verified client names from src/data/clientLogos.ts.
 * All edits to existing records are preserved on subsequent runs.
 *
 * Upload brand-approved WebP/PNG/JPEG files to the "logo" field in
 * PocketBase. The old remote image URL is only a transitional fallback;
 * it is never treated as a trusted source for the final stored asset.
 */
migrate((app) => {
  let collection;
  try {
    collection = app.findCollectionByNameOrId("client_logos");
  } catch (_) {
    collection = new Collection({
      type: "base",
      name: "client_logos",
      listRule: "visible = true",
      viewRule: "visible = true",
      createRule: null,
      updateRule: null,
      deleteRule: null,
      fields: [
        { type: "text", name: "slug", required: true, max: 100 },
        { type: "text", name: "name", required: true, max: 150 },
        { type: "url", name: "website" },
        {
          type: "file", name: "logo", maxSelect: 1, maxSize: 2097152,
          mimeTypes: ["image/png", "image/jpeg", "image/webp"]
        },
        { type: "url", name: "legacy_logo_url" },
        { type: "number", name: "sort_order", onlyInt: true, min: 0, max: 99999 },
        { type: "bool", name: "visible" }
      ],
      indexes: [
        "CREATE UNIQUE INDEX idx_client_logos_slug ON client_logos (slug)"
      ],
    });
    app.save(collection);
  }

  const items = [
    {
      "slug": "diego-dalla-palma",
      "name": "Diego dalla Palma",
      "website": "https://diegodallapalma.com/",
      "legacy_logo_url": "https://www.griffi.it/media/catalog/category/DIEGO-DALLA-PALMA.jpg",
      "sort_order": 10,
      "visible": true
    },
    {
      "slug": "mulac",
      "name": "Mulac",
      "website": "https://mulaccosmetics.com/",
      "legacy_logo_url": "https://www.marisaprofumerie.it/cdn/shop/collections/Progetto_senza_titolo_25.png?v=1755089400",
      "sort_order": 20,
      "visible": true
    },
    {
      "slug": "rvb",
      "name": "RVB LAB",
      "website": "https://rvblab.com/",
      "legacy_logo_url": "https://rvblab.com/cdn/shop/files/RVBLAB_Logo_1200_628px_positivo.png?v=1713368199",
      "sort_order": 30,
      "visible": true
    },
    {
      "slug": "officina-naturae",
      "name": "Officina Naturae",
      "website": "https://www.officinanaturae.com/it/",
      "legacy_logo_url": "https://galaxy.al/wp-content/uploads/2024/08/officina.png",
      "sort_order": 40,
      "visible": true
    },
    {
      "slug": "mamata",
      "name": "Mamata",
      "website": "https://mamata.shop/",
      "legacy_logo_url": "",
      "sort_order": 50,
      "visible": true
    },
    {
      "slug": "scm",
      "name": "SCM Group",
      "website": "https://www.scmgroup.com/it",
      "legacy_logo_url": "https://lamello.com/fileadmin/partners/logos/UNT_LOG_PAR_113-scm-group__SALL__AIN__V2.webp",
      "sort_order": 60,
      "visible": true
    },
    {
      "slug": "limpido-design",
      "name": "Limpido Design",
      "website": "https://www.limpidodesign.com/",
      "legacy_logo_url": "",
      "sort_order": 70,
      "visible": true
    },
    {
      "slug": "divani-store",
      "name": "Divani.Store",
      "website": "https://divani.store/",
      "legacy_logo_url": "",
      "sort_order": 80,
      "visible": true
    },
    {
      "slug": "korff",
      "name": "Korff",
      "website": "https://www.korff.it/",
      "legacy_logo_url": "",
      "sort_order": 90,
      "visible": true
    },
    {
      "slug": "welding",
      "name": "Teloneria Welding",
      "website": "https://www.teloneriawelding.it/",
      "legacy_logo_url": "",
      "sort_order": 100,
      "visible": true
    },
    {
      "slug": "camst",
      "name": "Camst Group",
      "website": "https://camstgroup.com/",
      "legacy_logo_url": "https://www.confindustriaemilia.it/flex/images/u/n/i/D.b3371ad56baa8a53591b/Camst_Group_PAYOFF_CMYK.jpg",
      "sort_order": 110,
      "visible": true
    },
    {
      "slug": "bonfiglioli",
      "name": "Bonfiglioli",
      "website": "https://www.bonfiglioli.com/italy/it/",
      "legacy_logo_url": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Bonfiglioli_corporate_logo_color.jpg",
      "sort_order": 120,
      "visible": true
    },
    {
      "slug": "rimini-terme",
      "name": "Rimini Terme",
      "website": "https://riminiterme.com/",
      "legacy_logo_url": "",
      "sort_order": 130,
      "visible": true
    },
    {
      "slug": "il-lanificio",
      "name": "Il Lanificio",
      "website": "https://www.illanificio.com/",
      "legacy_logo_url": "https://www.mcarthurglen.com/globalassets-v12/01-brands/il-lanificio/assets/il-lanificio-brand-logo-1080x1080.jpg",
      "sort_order": 140,
      "visible": true
    },
    {
      "slug": "akris",
      "name": "Akris",
      "website": "https://eu.akris.com/",
      "legacy_logo_url": "https://cdn.shopify.com/s/files/1/0142/1685/5610/files/Akris_Logo_2.png?height=628&pad_color=ffffff&v=1614290508&width=1200",
      "sort_order": 150,
      "visible": true
    }
  ];

  for (const item of items) {
    const matching = app.findRecordsByFilter(
      "client_logos", "slug = {:slug}", "", 1, 0, { slug: item.slug }
    );
    if (matching.length) continue;
    const record = new Record(collection);
    for (const [key, value] of Object.entries(item)) record.set(key, value);
    app.save(record);
  }
});

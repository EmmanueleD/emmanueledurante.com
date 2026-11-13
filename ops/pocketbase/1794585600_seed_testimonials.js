/**
 * Import the six LinkedIn recommendations staged in src/data/testimonials.ts
 * on 2026-11-13. Idempotent by source_key; existing admin edits are preserved.
 *
 * SAFETY: both consent_to_publish and published are false on import.
 * Nothing is made public until both flags are explicitly enabled by the owner
 * and all permissions (including translations / names / roles) are cleared.
 */
migrate((app) => {
  const collection = app.findCollectionByNameOrId("testimonials");

  const fields = [
    new TextField({ name: "source_key", max: 100 }),
    new TextField({ name: "author", required: true, max: 120 }),
    new TextField({ name: "role", required: true, max: 150 }),
    new TextField({ name: "company", max: 150 }),
    new URLField({ name: "linkedin_url" }),
    new FileField({
      name: "photo", maxSelect: 1, maxSize: 2097152,
      mimeTypes: ["image/jpeg", "image/png", "image/webp"]
    }),
    new SelectField({
      name: "source_language", values: ["it", "en", "es"],
      maxSelect: 1, required: true
    }),
    new TextField({ name: "text_it", max: 10000 }),
    new TextField({ name: "text_en", max: 10000 }),
    new TextField({ name: "text_es", max: 10000 }),
    new TextField({ name: "excerpt_it", max: 1000 }),
    new TextField({ name: "excerpt_en", max: 1000 }),
    new TextField({ name: "excerpt_es", max: 1000 }),
    new BoolField({ name: "consent_to_publish" }),
    new BoolField({ name: "published" }),
  ];

  for (const field of fields) {
    if (!collection.fields.getByName(field.name)) {
      collection.fields.add(field);
    }
  }

  // List and view filter protected at collection level, not on the website.
  collection.listRule = "published = true && consent_to_publish = true";
  collection.viewRule = "published = true && consent_to_publish = true";
  collection.createRule = null;
  collection.updateRule = null;
  collection.deleteRule = null;
  app.save(collection);

  const entries = [
    {
      "source_key": "valentina-maraio",
      "author": "Valentina Maraio",
      "role": "Full-Stack Software Developer",
      "company": "",
      "linkedin_url": "https://www.linkedin.com/in/valentina-maraio/",
      "source_language": "en",
      "text_it": "Studiare con Emmanuele è stato un piacere. La sua curiosità per three.js ha dato vita a conversazioni interessanti sulla visualizzazione di dati 3D e sulle animazioni web. Abbiamo lavorato insieme ad alcuni progetti e la sua passione per il codice pulito e per una struttura ben organizzata delle applicazioni lo rende il miglior collega con cui programmare.",
      "text_en": "Studying with Emmanuele was a pleasure. His curiosity for three.js brought up interesting conversations about 3D data visualization and inspiring web animation. We worked together on a few projects and his passion for clean code and well-organized app structure makes him the best coding colleague.",
      "text_es": "Estudiar con Emmanuele fue un placer. Su curiosidad por three.js dio lugar a conversaciones interesantes sobre visualización de datos 3D y animaciones web inspiradoras. Trabajamos juntos en algunos proyectos, y su pasión por el código limpio y una estructura de aplicaciones bien organizada lo convierte en el mejor compañero para programar.",
      "excerpt_it": "La sua passione per il codice pulito e per una struttura ben organizzata delle applicazioni lo rende il miglior collega con cui programmare.",
      "excerpt_en": "His passion for clean code and well-organized app structure makes him the best coding colleague.",
      "excerpt_es": "Su pasión por el código limpio y una estructura de aplicaciones bien organizada lo convierte en el mejor compañero para programar."
    },
    {
      "source_key": "camilla-tofani",
      "author": "Camilla Tofani",
      "role": "Fractional CTO",
      "company": "",
      "linkedin_url": "https://www.linkedin.com/in/camilla-tofani/",
      "source_language": "it",
      "text_it": "Ho lavorato con Emmanuele a diversi progetti lavorativi e non.\nHa una forte capacità di lavorare in team. È un bravissimo ascoltatore ed è sempre stato aperto al confronto chiarendo le sue posizioni quando qualcosa per lui doveva essere fatta diversamente. Senza mai prevaricare nessuno, con assoluto rispetto degli altri e di se stesso.\nA chiunque si dovesse trovare a scegliere se avere Emmanuele come risorsa per il proprio progetto dico di scegliere lui tra tutti.\nIn lui c'è curiosità e voglia di crescere professionalmente ed umanamente. Quando c'è qualcosa che professionalmente non conosce da tutto se stesso per capirla profondamente.",
      "text_en": "I worked with Emmanuele on several projects, both professional and otherwise.\nHe has a strong ability to work in a team. He is an excellent listener and has always been open to discussion, explaining his point of view when he believed something should be done differently. He never imposes himself on anyone and shows absolute respect for others and for himself.\nTo anyone deciding whether to have Emmanuele on their project, I would say: choose him over anyone else.\nHe is curious and eager to grow, both professionally and personally. When he encounters something he does not know in his field, he gives his all to understand it in depth.",
      "text_es": "He trabajado con Emmanuele en varios proyectos, tanto profesionales como de otro tipo.\nTiene una gran capacidad para trabajar en equipo. Sabe escuchar muy bien y siempre ha estado abierto al diálogo, explicando su punto de vista cuando consideraba que algo debía hacerse de otra manera. Nunca se impone sobre nadie y muestra un respeto absoluto por los demás y por sí mismo.\nA cualquiera que tenga que decidir si contar con Emmanuele para su proyecto, le diría que lo elija por encima de cualquier otra persona.\nTiene curiosidad y ganas de crecer tanto profesional como personalmente. Cuando se encuentra con algo que no conoce en su ámbito profesional, lo da todo por comprenderlo en profundidad.",
      "excerpt_it": "Ha una forte capacità di lavorare in team. È un bravissimo ascoltatore ed è sempre stato aperto al confronto.",
      "excerpt_en": "He has a strong ability to work in a team. He is an excellent listener and has always been open to discussion.",
      "excerpt_es": "Tiene una gran capacidad para trabajar en equipo. Sabe escuchar muy bien y siempre ha estado abierto al diálogo."
    },
    {
      "source_key": "fabio-trovato",
      "author": "Fabio Trovato",
      "role": "Direttore creativo · Consulente di marketing",
      "company": "",
      "linkedin_url": "https://www.linkedin.com/in/fabio-trovato/",
      "source_language": "it",
      "text_it": "Una persona a cui piace il proprio lavoro!\nProfessionale e puntuale, due aspetti che mi hanno sempre portato a collaborare con estremo piacere con Emmanuele.",
      "text_en": "Someone who enjoys his work! Professional and punctual—two qualities that have always made collaborating with Emmanuele a real pleasure.",
      "text_es": "¡Una persona que disfruta de su trabajo! Profesional y puntual, dos cualidades que siempre han hecho que colaborar con Emmanuele sea un verdadero placer.",
      "excerpt_it": "Professionale e puntuale, due aspetti che mi hanno sempre portato a collaborare con estremo piacere con Emmanuele.",
      "excerpt_en": "Professional and punctual—two qualities that have always made collaborating with Emmanuele a real pleasure.",
      "excerpt_es": "Profesional y puntual, dos cualidades que siempre han hecho que colaborar con Emmanuele sea un verdadero placer."
    },
    {
      "source_key": "maria-chiara-barbaro",
      "author": "Maria Chiara Barbaro",
      "role": "Head of Growth",
      "company": "",
      "linkedin_url": "https://www.linkedin.com/in/mariachiara-barbaro/en/",
      "source_language": "it",
      "text_it": "Emmanuele non è soltanto uno sviluppatore competente, ma anche una persona affidabile e che sa fare lavoro di squadra. È preciso, puntuale, e non si tira indietro davanti ad una sfida cercando anche soluzioni innovative per raggiungere l’obiettivo. È stato un piacere lavorare con lui e mi sento assolutamente di consigliarlo",
      "text_en": "Emmanuele is not only a skilled developer but also a reliable person who knows how to work as part of a team. He is precise and punctual, and he never backs down from a challenge, even looking for innovative solutions to achieve the goal. It was a pleasure working with him, and I wholeheartedly recommend him.",
      "text_es": "Emmanuele no solo es un desarrollador competente, sino también una persona fiable que sabe trabajar en equipo. Es preciso y puntual, y no se echa atrás ante un desafío: también busca soluciones innovadoras para alcanzar el objetivo. Fue un placer trabajar con él y lo recomiendo sin ninguna duda.",
      "excerpt_it": "È preciso, puntuale, e non si tira indietro davanti ad una sfida cercando anche soluzioni innovative per raggiungere l’obiettivo.",
      "excerpt_en": "He is precise and punctual, and he never backs down from a challenge, even looking for innovative solutions to achieve the goal.",
      "excerpt_es": "Es preciso y puntual, y no se echa atrás ante un desafío: también busca soluciones innovadoras para alcanzar el objetivo."
    },
    {
      "source_key": "marco-le-piane",
      "author": "Marco Le Piane",
      "role": "Front Web Developer",
      "company": "",
      "linkedin_url": "https://www.linkedin.com/in/marco-le-piane/en/",
      "source_language": "it",
      "text_it": "Ho avuto il piacere di lavorare con Emmanuele su alcuni progetti personali. Si è dimostrato una persona gentile e preparata, da cui ho potuto imparare molto. Spero di poter collaborare con lui ancora in futuro e mettere su altri progetti interessanti. È una persona molto competente, da cui si può apprendere molto.",
      "text_en": "I had the pleasure of working with Emmanuele on a few personal projects. He proved to be a kind and knowledgeable person from whom I learned a great deal. I hope to work with him again in the future on other interesting projects. He is very competent, and there is a lot to learn from him.",
      "text_es": "Tuve el placer de trabajar con Emmanuele en algunos proyectos personales. Demostró ser una persona amable y preparada, de la que pude aprender mucho. Espero volver a colaborar con él en el futuro y desarrollar otros proyectos interesantes. Es una persona muy competente, de la que se puede aprender mucho.",
      "excerpt_it": "Si è dimostrato una persona gentile e preparata, da cui ho potuto imparare molto.",
      "excerpt_en": "He proved to be a kind and knowledgeable person from whom I learned a great deal.",
      "excerpt_es": "Demostró ser una persona amable y preparada, de la que pude aprender mucho."
    },
    {
      "source_key": "clarissa-abbruzzese",
      "author": "Clarissa Abbruzzese",
      "role": "UX/UI Designer",
      "company": "Extera Digital Agency",
      "linkedin_url": "",
      "source_language": "it",
      "text_it": "Ho lavorato con Emmanuele in Extera Digital Agency, io come UI/UX designer e lui come frontend developer. Abbiamo condiviso solo alcuni progetti,\n ma ogni volta che ho avuto bisogno di una mano lui c’era: disponibile, pronto a capire il problema e a trovare una soluzione.\n\nNelle occasioni in cui abbiamo collaborato ho apprezzato la sua precisione e il modo in cui si confronta: se qualcosa secondo lui andava fatto diversamente lo diceva chiaramente, spiegando il perché e ascoltando le ragioni dell’altro.\n\nGli interessa capire non solo come realizzare una cosa, ma anche perché è stata progettata in quel modo, e questo rende il confronto con lui molto più semplice.\n\nLo consiglio a qualsiasi team cerchi un frontend developer affidabile, che sappia lavorare bene anche con chi il codice non lo scrive.",
      "text_en": "I worked with Emmanuele at Extera Digital Agency, I as a UI/UX designer and he as a frontend developer. We only shared a few projects,\nbut every time I needed a hand, he was there: helpful, ready to understand the problem and find a solution.\n\nWhen we worked together, I appreciated his precision and the way he discusses things: if he thought something should be done differently, he said so clearly, explaining why and listening to the other person's reasons.\n\nHe wants to understand not only how to build something, but also why it was designed that way, and this makes working through ideas with him much easier.\n\nI recommend him to any team looking for a reliable frontend developer who can also work well with people who don't write code.",
      "text_es": "Trabajé con Emmanuele en Extera Digital Agency, yo como diseñadora de UI/UX y él como desarrollador frontend. Solo compartimos algunos proyectos,\npero cada vez que necesité una mano, él estaba ahí: dispuesto a ayudar, a entender el problema y a encontrar una solución.\n\nEn las ocasiones en las que colaboramos, valoré su precisión y su manera de dialogar: si creía que algo debía hacerse de otra forma, lo decía claramente, explicaba por qué y escuchaba los argumentos de la otra persona.\n\nLe interesa entender no solo cómo realizar algo, sino también por qué se diseñó de esa manera, y eso facilita mucho el intercambio de ideas con él.\n\nLo recomiendo a cualquier equipo que busque un desarrollador frontend fiable y capaz de trabajar bien también con quienes no escriben código.",
      "excerpt_it": "Lo consiglio a qualsiasi team cerchi un frontend developer affidabile, che sappia lavorare bene anche con chi il codice non lo scrive.",
      "excerpt_en": "I recommend him to any team looking for a reliable frontend developer who can also work well with people who don't write code.",
      "excerpt_es": "Lo recomiendo a cualquier equipo que busque un desarrollador frontend fiable y capaz de trabajar bien también con quienes no escriben código."
    }
  ];

  for (const item of entries) {
    const existing = app.findRecordsByFilter(
      "testimonials",
      "source_key = {:key}",
      "",
      1,
      0,
      { key: item.source_key }
    );
    if (existing.length > 0) continue;

    const record = new Record(collection);
    for (const [key, value] of Object.entries(item)) {
      record.set(key, value);
    }
    record.set("consent_to_publish", false);
    record.set("published", false);
    app.save(record);
  }
});

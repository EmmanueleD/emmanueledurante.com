/**
 * Three additional recommendations supplied from LinkedIn HTML
 * on 2026-11-13. This imports only new records, keeping existing entries
 * and any manual PocketBase edits unchanged.
 *
 * All new recommendations begin unpublished and not consent-cleared.
 * Profile pictures are deliberately not hotlinked: LinkedIn photo URLs expire.
 */
migrate((app) => {
  const collection = app.findCollectionByNameOrId("testimonials");

  const entries = [
    {
      "source_key": "sara-ferrarini",
      "author": "Sara Ferrarini",
      "role": "SEO Specialist",
      "company": "Extera",
      "linkedin_url": "https://www.linkedin.com/in/sara-ferrarini/en/",
      "source_language": "it",
      "text_it": "È stato un piacere lavorare con Emmanuele, e lo consiglio senza esitazioni a chiunque abbia la fortuna di averlo in squadra. Oltre a essere un ottimo frontend developer, è una di quelle persone che rendono il lavoro di squadra più leggero: disponibile, sempre pronto ad ascoltare, capace di spiegare anche le cose più tecniche con pazienza e senza mai far sentire nessuno fuori posto.\nNei progetti insieme ho apprezzato soprattutto il suo modo di affrontare le difficoltà: con calma, positività e la voglia di trovare davvero la soluzione migliore. Lavorare con lui è stato semplice, piacevole, e mi ha lasciato qualcosa in più ogni volta.",
      "text_en": "It was a pleasure working with Emmanuele, and I recommend him without hesitation to anyone lucky enough to have him on their team. Besides being an excellent frontend developer, he is one of those people who make teamwork easier: helpful, always ready to listen, able to explain even the most technical things with patience and without ever making anyone feel out of place.\nOn the projects we worked on together, what I particularly appreciated was his way of dealing with difficulties: with calm, positivity and a genuine desire to find the best possible solution. Working with him was straightforward and enjoyable, and I came away with something valuable every time.",
      "text_es": "Fue un placer trabajar con Emmanuele, y lo recomiendo sin dudarlo a cualquiera que tenga la suerte de contar con él en su equipo. Además de ser un excelente desarrollador frontend, es una de esas personas que hacen más llevadero el trabajo en equipo: siempre dispuesto a ayudar y escuchar, capaz de explicar incluso los aspectos más técnicos con paciencia y sin hacer que nadie se sienta fuera de lugar.\nEn los proyectos que compartimos, aprecié especialmente su forma de afrontar las dificultades: con calma, optimismo y ganas de encontrar realmente la mejor solución. Trabajar con él fue sencillo y agradable, y cada vez aprendí algo nuevo.",
      "excerpt_it": "Nei progetti insieme ho apprezzato soprattutto il suo modo di affrontare le difficoltà: con calma, positività e la voglia di trovare davvero la soluzione migliore.",
      "excerpt_en": "On the projects we worked on together, what I particularly appreciated was his way of dealing with difficulties: with calm, positivity and a genuine desire to find the best possible solution.",
      "excerpt_es": "En los proyectos que compartimos, aprecié especialmente su forma de afrontar las dificultades: con calma, optimismo y ganas de encontrar realmente la mejor solución."
    },
    {
      "source_key": "dennis-tiboni",
      "author": "Dennis Tiboni",
      "role": "Collega",
      "company": "Extera srl",
      "linkedin_url": "https://www.linkedin.com/in/dennistiboni/",
      "source_language": "it",
      "text_it": "Lavorare con Emmanuele è stato piacevole. È un ragazzo pieno di entusiasmo, capace e ben organizzato. Ottimo lavoro in team.",
      "text_en": "Working with Emmanuele was a pleasure. He is full of enthusiasm, capable and well organized. Excellent teamwork.",
      "text_es": "Trabajar con Emmanuele fue un placer. Es una persona entusiasta, capaz y muy organizada. Excelente trabajo en equipo.",
      "excerpt_it": "È un ragazzo pieno di entusiasmo, capace e ben organizzato. Ottimo lavoro in team.",
      "excerpt_en": "He is full of enthusiasm, capable and well organized. Excellent teamwork.",
      "excerpt_es": "Es una persona entusiasta, capaz y muy organizada. Excelente trabajo en equipo."
    },
    {
      "source_key": "giacomo-mainardi",
      "author": "Giacomo Mainardi",
      "role": "Digital Advertising Specialist",
      "company": "",
      "linkedin_url": "https://www.linkedin.com/in/giacomomainardi/",
      "source_language": "it",
      "text_it": "Ho avuto il piacere di lavorare con Emanuele e apprezzarne le competenze professionali nell’ambito dello sviluppo frontend e della realizzazione di applicazioni web ed e-commerce.\n\nÈ un professionista serio, competente e affidabile, con una solida preparazione tecnica e una buona padronanza delle principali piattaforme e-commerce.\n\nSi distingue per la precisione, la disponibilità e l’attenzione alla qualità del lavoro, oltre che per la capacità di collaborare in modo efficace e trovare soluzioni alle diverse esigenze progettuali.\n\nÈ stato un piacere lavorare con lui e lo consiglio a chiunque cerchi uno sviluppatore competente e una persona solare e simpatica.",
      "text_en": "I had the pleasure of working with Emmanuele and appreciating his professional skills in frontend development and the creation of web and e-commerce applications.\n\nHe is a serious, skilled and reliable professional, with strong technical knowledge and a solid command of the main e-commerce platforms.\n\nHe stands out for his precision, helpfulness and attention to quality, as well as his ability to collaborate effectively and find solutions to different project needs.\n\nIt was a pleasure working with him, and I recommend him to anyone looking for a skilled developer who is also a friendly and positive person.",
      "text_es": "Tuve el placer de trabajar con Emmanuele y apreciar sus competencias profesionales en desarrollo frontend y creación de aplicaciones web y de comercio electrónico.\n\nEs un profesional serio, competente y fiable, con una sólida preparación técnica y un buen dominio de las principales plataformas de comercio electrónico.\n\nDestaca por su precisión, disposición y atención a la calidad del trabajo, así como por su capacidad para colaborar eficazmente y encontrar soluciones para las distintas necesidades de cada proyecto.\n\nFue un placer trabajar con él y lo recomiendo a cualquiera que busque un desarrollador competente y una persona simpática y positiva.",
      "excerpt_it": "È un professionista serio, competente e affidabile, con una solida preparazione tecnica e una buona padronanza delle principali piattaforme e-commerce.",
      "excerpt_en": "He is a serious, skilled and reliable professional, with strong technical knowledge and a solid command of the main e-commerce platforms.",
      "excerpt_es": "Es un profesional serio, competente y fiable, con una sólida preparación técnica y un buen dominio de las principales plataformas de comercio electrónico."
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

  // Clarissa's public LinkedIn profile URL was newly provided in this HTML.
  // Fill it only when missing, preserving any administrator edits.
  const clarissas = app.findRecordsByFilter(
    "testimonials",
    "source_key = {:key}",
    "",
    1,
    0,
    { key: "clarissa-abbruzzese" }
  );
  if (clarissas.length > 0 && !clarissas[0].getString("linkedin_url")) {
    clarissas[0].set(
      "linkedin_url",
      "https://www.linkedin.com/in/clarissa-abbruzzese-b6399182/"
    );
    app.save(clarissas[0]);
  }
});

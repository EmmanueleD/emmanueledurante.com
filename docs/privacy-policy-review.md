# Privacy notice — draft and implementation audit

> **STATUS: INTERNAL DRAFT — NOT APPROVED FOR PUBLICATION.**
> The new multilingual website has a contact form and privacy-related providers. Do not turn this file into a live privacy policy or copy it into a public page until the unresolved operational facts below have been confirmed. The text here is a working outline, not legal advice.

## Verified in the current website source code

- Site: `https://emmanueledurante.com/` (EN), `/it/` (IT), `/es/` (ES).
- Public professional contact: `hello@emmanueledurante.com`.
- Contact form on each localized homepage asks for: name (required), email (required), company (optional), request type (required), and message (required).
- Anti-spam honeypot field: `website` (not shown to human visitors). The form also sends a submission timestamp and a Cloudflare Turnstile verification token.
- Client submits form contents to `https://contact.emmanueledurante.com/contact` over HTTPS using JSON.
- Cloudflare Turnstile is loaded when the contact form approaches the viewport or receives focus, rather than immediately on page load.
- The site uses Vercel Web Analytics `@vercel/analytics/astro` in its common layout, including all language versions. The project has recorded pageviews.
- No marketing subscription checkbox, user account system, or advertising pixel has been found in the inspected frontend files. This statement does **not** establish that none exists in server-side infrastructure.
- Contact form client code **does not tell us** where emails are sent, logged, backed up or retained. Do not infer backend practices from the form.

## Information to confirm before release

- [ ] Data controller: confirm whether acting as an individual or a registered business, accurate public identity and postal/contact details (if required), any representative or DPO (only if applicable).
- [ ] Contact backend: hosting entity, application maintainer, specific data stores, application/security logs, retention, backups and deletion schedule.
- [ ] Delivery of contact requests: actual email hosting/SMTP provider and recipients. Check whether form submissions are also saved separately from email.
- [ ] Data processor relationships and any international transfers/safeguards for hosting, email, Vercel, Cloudflare and the contact API.
- [ ] Select the appropriate Art. 6 GDPR legal basis for contact requests depending on pre-contractual responses versus general enquiries; document any relevant legitimate interests.
- [ ] Define data-retention periods or objective retention criteria for messages and logs.
- [ ] Check whether Cloudflare Turnstile has pre-clearance enabled and what cookies or equivalent storage are set in this deployment.
- [ ] Review actual Vercel Analytics configuration and whether custom events, path/query strings or sensitive identifiers are transmitted.
- [ ] Determine which rights-response process to describe (access, rectification, erasure, restriction, objection, portability where applicable, and complaint).
- [ ] Verify whether a cookie banner is actually required based on the implemented services and applicable privacy rules; do not claim that all analytics tools automatically require one or that none do.
- [ ] Translate the approved, fact-checked notice into EN/IT/ES and add discoverable footer links and a brief link near the form. Ensure the text is available **before** form submission.
- [ ] Verify against current legal requirements with qualified advice when necessary.

## Italian privacy notice — content outline (review required)

### 1. Titolare del trattamento

**Da verificare e completare.** Nome e recapiti del titolare, inclusa la mail per l'esercizio dei diritti: `hello@emmanueledurante.com`.

### 2. Dati raccolti

Quando una persona invia il modulo di contatto può comunicare nome, indirizzo email, azienda (facoltativa), tipologia della richiesta e contenuto del messaggio. Il sistema invia anche dati tecnici necessari alla verifica anti-spam e alla gestione dell'invio. **Verificare i dettagli di trattamento e log del backend.**

### 3. Finalità e basi giuridiche

- Gestire richieste di contatto, collaborazioni e opportunità professionali: **specificare la base giuridica applicabile**, tenendo conto del tipo di richiesta.
- Proteggere il modulo da invii automatizzati: **specificare base giuridica e funzionamento di Turnstile**.
- Comprendere in forma aggregata l'utilizzo del sito: Vercel Web Analytics. **Verificare la configurazione effettiva prima di descrivere il trattamento come esclusivamente anonimo**.

### 4. Destinatari, fornitori e trasferimenti

Il frontend è distribuito con Vercel; il modulo utilizza Cloudflare Turnstile e invia le richieste all'API `contact.emmanueledurante.com`. **Specificare il fornitore effettivo del backend e della posta elettronica, il ruolo privacy dei fornitori e gli eventuali trasferimenti extra-SEE e relative garanzie.**

### 5. Conservazione

**Da completare:** periodo di conservazione o criteri oggettivi per messaggi di contatto, email, log e backup. Non inventare una durata.

### 6. Diritti

In base al GDPR e ove applicabile, la persona interessata può richiedere accesso, rettifica, cancellazione o limitazione del trattamento e opporsi al trattamento; possono applicarsi ulteriori diritti. È possibile proporre reclamo all'autorità di controllo competente. **Completare con il contatto effettivo e le informazioni pertinenti.**

### 7. Natura del conferimento

Nome, email, tipo di richiesta e messaggio sono necessari per utilizzare il modulo. Il campo azienda è facoltativo. L'utente può scegliere di contattare direttamente l'indirizzo email pubblicato nel sito.

### 8. Servizi di terze parti

**Vercel Web Analytics.** Secondo Vercel, il servizio usa statistiche aggregate e non raccoglie identificatori destinati a identificare gli utenti o tracciare gli stessi individui tra siti diversi. La configurazione applicativa e l'informativa definitiva devono essere controllate.

**Cloudflare Turnstile.** Cloudflare descrive l'uso di segnali come IP, user agent e caratteristiche della connessione per la protezione anti-bot. Il componente è usato nel form e viene caricato in prossimità dell'interazione. Verificare cookies, trasferimenti e dettaglio dei ruoli privacy.

## Implementation after approval

1. Add localized `/privacy/`, `/it/privacy/`, `/es/privacy/` pages (or another agreed canonical route structure).
2. Reuse the shared layout, but ensure correct title, description, canonical and hreflang for each translation.
3. Add footer link to the privacy notice on each language homepage.
4. Add a concise, accessible link next to the contact form submission button.
5. Update `src/pages/sitemap.xml.ts` to include privacy pages after they exist.
6. Check site build, translated paths, and that no factual placeholder remains.

## Primary sources

- GDPR Article 13 (EU 2016/679): https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng/
- Vercel Web Analytics privacy: https://vercel.com/docs/analytics/privacy-policy
- Cloudflare Turnstile overview: https://developers.cloudflare.com/turnstile/
- Cloudflare Turnstile privacy addendum: https://www.cloudflare.com/turnstile-privacy-policy/

Updated: 2026-11-13.

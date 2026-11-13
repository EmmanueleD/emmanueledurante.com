# Hetzner deployment: preparation (no DNS cutover)

This repo is an Astro static website. The public domain currently remains hosted on Vercel.
The migration is staged on the existing Hetzner VPS and uses the Docker network shared with
`contact-caddy`, without altering the `contact-api` stack.

## On the Hetzner VPS

1. Find the Docker network name used by Caddy:

   ```sh
   sudo docker inspect contact-caddy --format '{{range $name, $_ := .NetworkSettings.Networks}}{{println $name}}{{end}}'
   ```

2. Clone this repository into `~/projects/emmanueledurante.com`. Copy
   `deploy/.env.example` to `deploy/.env`. Fill in the Caddy network name
   and `PUBLIC_TURNSTILE_SITE_KEY` from the existing production configuration.
   **Do not use or publish the Turnstile secret key.**

3. Prepare the preview container without changing the production reverse proxy:

   ```sh
   cd ~/projects/emmanueledurante.com/deploy
   sudo docker compose config --quiet
   sudo docker compose up -d --build
   curl -fI http://127.0.0.1:8088/
   curl -fI http://127.0.0.1:8088/it/
   curl -fI http://127.0.0.1:8088/es/
   curl -fI http://127.0.0.1:8088/privacy/
   curl -fI http://127.0.0.1:8088/sitemap.xml
   ```

   `portfolio-web` is on the same Docker network as `contact-caddy`, so it is
   reachable as `portfolio-web:80` when the public reverse proxy is configured.

## Cutover checklist — not performed by this PR

- [ ] Remove `@vercel/analytics` component and update all privacy notice translations.
- [ ] Self-host the Radio Canada fonts to avoid external Google Fonts requests.
- [ ] Confirm staging build, HTML, images, form site key, privacy and sitemap.
- [ ] Test form end-to-end against the existing contact API with consent of recipient.
- [ ] Back up the live Caddyfile and the `contact-api` compose file.
- [ ] Add Caddy vhost for `emmanueledurante.com` and `www.emmanueledurante.com`,
      reversing to `portfolio-web:80`. Do not touch existing hosts
      (contact, Econumo, Donetick, Poznote).
- [ ] Move only web A/AAAA/CNAME records at Infomaniak; preserve MX, SPF,
      DKIM, DMARC and Google Search Console TXT records.
- [ ] Confirm HTTPS, redirects, contact form, sitemap, localized routes and
      social preview. Keep Vercel active as fallback until verified.

No data migrations are necessary: the existing contact API already runs on Hetzner.

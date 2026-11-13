# Production deployment — GitHub Actions → Hetzner

The live site is a static Astro build served by nginx behind the existing
`contact-caddy` reverse proxy. DNS, TLS and Caddy are managed separately.
This deployment only changes `portfolio-web`; it does not rebuild or restart
the contact API, Econumo, Donetick or Poznote.

## How it works

1. A commit is pushed/merged to `main` (or the workflow is launched manually).
2. GitHub Actions runs `npm ci && npm run build` using Node.js 24.
3. It uploads only `dist/` via SSH/rsync into `/srv/portfolio/public/`.
4. nginx serves that directory read-only, with no container restart.
5. The workflow checks localized pages and verifies `/deploy-version.txt`
   contains the exact deployed commit SHA.

The SSH account `portfolio-deploy` has **no Docker or sudo access**. Do not
use the primary VPS login or an administrator's SSH key for deployments.

## One-time server setup (before merging the workflow PR)

On the Hetzner VPS:

```sh
# Separate unprivileged account and isolated static directory.
sudo useradd --create-home --shell /bin/bash portfolio-deploy
sudo install -d -o portfolio-deploy -g portfolio-deploy -m 755 /srv/portfolio/public

# Copy the currently working static site before switching nginx to a bind mount.
sudo docker cp portfolio-web:/usr/share/nginx/html/. /srv/portfolio/public/
sudo chown -R portfolio-deploy:portfolio-deploy /srv/portfolio/public
test -f /srv/portfolio/public/index.html
command -v rsync
```

If `rsync` is missing, install the Ubuntu `rsync` package. Keep the existing
`contact-caddy` and `contact-api` containers unchanged.

Generate a new **dedicated Ed25519 key pair on your own computer** (not on
GitHub, and not inside the repository):

```sh
ssh-keygen -t ed25519 -C "github-actions-portfolio" -f "$HOME/.ssh/portfolio-gh-actions"
```

Install the public key in
`/home/portfolio-deploy/.ssh/authorized_keys` on the VPS, using the OpenSSH
`restrict` authorized-keys option to disable forwarding and PTY access.
Set `.ssh` to mode 700 and `authorized_keys` to mode 600, owned by
`portfolio-deploy`.

Verify login from the computer that holds the key:

```sh
ssh -i ~/.ssh/portfolio-gh-actions portfolio-deploy@2.29.23.159 \
  'whoami && test -w /srv/portfolio/public && echo writable'
```

Add two **repository Actions secrets** via GitHub Settings → Secrets and
variables → Actions:

- `HETZNER_DEPLOY_KEY`: entire content of the private key file
  `~/.ssh/portfolio-gh-actions`. Never paste it into chat or commit it.
- `HETZNER_KNOWN_HOSTS`: the VPS's **verified** SSH host public key
  prefixed with its IP, obtained directly on the VPS using:
  ```sh
  printf '2.29.23.159 %s\n' "$(cat /etc/ssh/ssh_host_ed25519_key.pub)"
  ```

Do not use an unverified `ssh-keyscan` result as a trusted host key.

Before merging the PR, check out its branch **on the VPS**, switch the
portfolio container to the read-only bind mount (after the directory is
populated), and verify the public HTTPS site:

```sh
cd ~/projects/emmanueledurante.com
git fetch origin
git switch --track origin/feat/github-actions-hetzner-static-deploy-2026-11-13
cd deploy
sudo docker compose config --quiet
sudo docker compose up -d
curl -fI https://emmanueledurante.com/
```

After the PR is merged, GitHub Actions will upload the newly built version
automatically. Then align the VPS repository:

```sh
cd ~/projects/emmanueledurante.com
git switch main
git pull --ff-only origin main
```

The existing `deploy/.env` still supplies `CONTACT_DOCKER_NETWORK` to
Docker Compose. The public Turnstile site key is now passed to the CI build
by the GitHub Actions workflow; it is not a private key.

## Operational notes

- The production nginx folder is **read-only inside the container**. Only
  the separate deployment user writes the host-side directory.
- SSH keys are stored as encrypted GitHub Actions secrets. The workflow pins
  SSH host-key verification and does not grant sudo or Docker permissions.
- The upload uses rsync `--delay-updates` to reduce the update window.
- The `deploy/Dockerfile` is retained from the initial manual Docker build
  for reference/rollback; the automated deployment does not use it.
- To roll back content, re-run the workflow on the desired commit or restore
  the previous static content in `/srv/portfolio/public/`. If the service
  is unavailable, the original `portfolio-site:local` Docker image is an
  additional fallback, but requires reverting the compose file to its
  original image-based configuration.

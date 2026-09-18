# Bootstrap Astro

## Goal

Create the smallest working Astro foundation for emmanueledurante.com and verify that it runs locally before visual development begins.

## Scope

- Initialize Astro with TypeScript and npm.
- Add one minimal page and baseline project metadata.
- Verify dependency installation, production build, and local server response.

## Non-goals

- Final visual design.
- Real biography, project, or contact content.
- Deployment configuration.

## Tasks

- [x] Scaffold the minimal Astro project.
- [x] Verify build and local runtime.

### Scaffold evidence

- Astro 7.3.3 declared in `package.json`.
- npm dependencies installed successfully; `package-lock.json` generated.
- Minimal page and native CSS foundation added under `src/`.

### Verification evidence

- `npm run build` passed with one static page generated.
- Local dev server returned HTTP 200 and the expected page title.
- Project scripts explicitly reuse npm's Node executable to avoid an incompatible Node 18 binary found in an ancestor `node_modules/.bin` directory.

## Evidence

Commit evidence is intentionally pending because the user has not authorized commits.

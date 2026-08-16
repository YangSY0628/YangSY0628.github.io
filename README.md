# Shiyuan Yang — Academic Homepage

Personal academic website built with Astro and deployed on GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

The local site is available at `http://localhost:4321`.

## Update content

Most profile content is stored in `src/data/site.ts`. Add a profile photo to
`public/images/profile.jpg`, then replace the placeholder block in
`src/pages/index.astro` when the photo is ready.

## Build

```bash
npm run build
```

Pushing to the `master` branch triggers the GitHub Pages deployment workflow.

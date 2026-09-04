# Benji Kim portfolio

A local portfolio based on the supplied Figma frame, with four project detail pages and Work, About me, and Contact anchors.

## Run locally

Requires Node.js 22.13 or newer.

```sh
npm install
npm run dev
```

Open the Local URL printed in your terminal (normally http://localhost:3000).

```sh
npm run build
```

## Edit

- `app/page.tsx`: homepage, about text, contact links.
- `app/projects.ts`: project captions, images, and detail-page content.
- `app/globals.css`: shared styling and mobile layouts.
- `public/images`: project images extracted from the supplied Figma export.

The homepage preserves the repeated project titles and descriptions in the reference. Detail-page descriptions summarize the visible interfaces; no project outcomes or metrics have been invented. The added About me section uses the experience statement from the reference. The resume links open the supplied 2026 PDF in a new tab. The medication project uses the supplied Group 20 image. No site has been published.

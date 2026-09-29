# Jeffrey Alteza — Portfolio

Single-page portfolio built with Next.js 16 (App Router), React 19, Tailwind CSS 4, and framer-motion.

## Develop

```bash
npm install
npm run dev
```

To test from another device on your LAN, allow its origin:

```bash
DEV_ORIGINS=192.168.1.22 npm run dev
```

Other scripts: `npm run build`, `npm run start`, `npm run lint`.

## Content

All copy lives in `src/lib/data/`:

- `workflows.ts` — n8n workflow cards
- `projects.ts` — Laravel/fullstack projects
- `services.ts` — services and tech stack

Images go in `public/dev-projects/` and `public/n8n-projects/`. Use WebP (or resized JPEG), max ~1920px wide, and no spaces in filenames.

## Deploy

Vercel. Site URL is set in `src/app/layout.tsx` (`metadataBase`), `sitemap.ts`, and `robots.ts`.

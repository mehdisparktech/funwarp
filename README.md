# FUNWARP

Warp-speed code. Unlimited fun.

Premium marketing site for FUNWARP — a global software development company.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint

## Project structure

```
src/
  app/           # routes, SEO, sitemap, robots
  components/    # page sections + UI
  lib/           # content data + helpers
```

## Notes

- Team names, stats, testimonials and project case studies are placeholders until real content is ready.
- Contact form currently shows a success state client-side; wire it to your email/CRM backend before launch.
- Update `metadataBase` / sitemap URLs in `src/app/layout.tsx` and `src/app/sitemap.ts` to your production domain.

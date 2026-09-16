# Ciya Dakwerken — website

Static website for Ciya Dakwerken (Ciya Ismet BV, Lokeren). Built with Astro 7, no frameworks, no third-party scripts.

- **Run locally:** `fnm use 22` (Node ≥ 22.12) → `npm install` → `npm run dev`
- **Build:** `npm run build` → static output in `dist/` (deploy anywhere: Vercel, Netlify, Cloudflare Pages, any web host)
- **Everything you need to know** (content, photos, forms, what is verified, what is still open): see [HANDOVER.md](HANDOVER.md)
- Design brief, competitor audit and QA logs: `_research/`

Before going live: set the real domain in `astro.config.mjs` (`site`) and `src/data/site.ts` (`siteUrl`), then rebuild.

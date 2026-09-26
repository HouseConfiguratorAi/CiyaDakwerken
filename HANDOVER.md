# Handover — Ciya Dakwerken website

Astro 7 static site, built locally. This document is for whoever continues or deploys this project
(Builder B, the client, or a developer). Nothing here has been deployed, pushed to git, or connected
to any live service — see "Not done / needs a human decision" below.

## How to run

Requires Node 22 (repo pins it via `.node-version`; use `fnm`/`nvm`):

```bash
fnm use 22        # or: nvm use
npm install        # first time only
npm run dev         # local dev server
npm run build       # production build to dist/
npm run preview     # serve the dist/ build locally
npm run brand       # regenerate public/brand/* and favicons (see below)
```

## Where content lives (single source of truth per topic)

- `src/data/site.ts` — company info (name, VAT, address, phone, email, Facebook, WhatsApp flag,
  `siteUrl`), trust points, and the 5-question home-page FAQ.
- `src/data/services.ts` — all 11 services. Each entry has `slug, name, short, eyebrow, h1, intro,
  problems[], benefits[], solutions[], approach[], body, faq[], related[], images, seo`.
  `body` is a paragraph array for the long-form "Meer over …" section on the service page — all 11
  services have it filled in (≈700–1000 words per page incl. lists and 6 FAQs). `icon` is the name of
  the line icon from `src/components/Icon.astro` shown next to the service in lists, the dropdown and
  the footer — add a new case to `Icon.astro` if you add a service.
- `src/data/projects.ts` — 5 before/after pairs, the 3-step `projectStory` (voor → isolatie → na, one
  roof), the captioned `gallery` (10 photos) and the `teamOnSite` photo. Shown on `/projecten/`, reused
  on the home page and on matching service pages. Captions describe only what is visible.
- `src/lib/seo.ts` — JSON-LD builders (`localBusinessJsonLd`, `serviceJsonLd`, `breadcrumbJsonLd`,
  `faqJsonLd`). No `aggregateRating`, `review`, `openingHours`, or `priceRange` is emitted anywhere —
  none of that is verified, so don't add it without a real source.

Changing copy or facts almost always means editing one of the three `src/data/*.ts` files, not the
`.astro` page/component files.

## How to swap or add photos

1. Drop new source photos into `../images/` (outside this project, per the brief) or directly into
   `src/assets/images/` with a descriptive kebab-case filename (e.g. `dakgoot-zink-na.jpg`).
2. Import the file at the top of `src/data/services.ts` and/or `src/data/projects.ts` and reference
   it in the relevant entry's `images` object. Astro's `<Image>` component (used by `Frame.astro` and
   `BeforeAfter.astro`) handles resizing/formats automatically — no manual resizing needed.
3. Write accurate alt text describing only what's visible in the photo (no place names, no dates,
   no client names) — see BRIEF §1 for the rule and the verified before/after photo → service mapping.
4. Run `npm run build` and check the affected page(s).

The client said more photos will arrive later — this workflow is designed so that's a data-file change,
not a template change.

## WhatsApp flag

`site.whatsapp.enabled` in `src/data/site.ts` is `false` — **by decision (2026-09-16): no WhatsApp on
the site.** The code path still exists; flipping it to `true` would swap the sticky bar's middle cell
from "E-mail" to "WhatsApp". Leave it off unless the client asks.

## Forms (offerte + contact) — send by e-mail, no third party

The quote page opens with two direct buttons: **Bel ons** (`tel:`) and **E-mail ons** (`mailto:` with a
ready-made subject and body template). The form below them is optional — it only pre-writes the e-mail.

Both forms validate client-side (inline Dutch errors, honeypot), then compose an e-mail to `site.email`
(`ciyaismet@hotmail.com`) and open the visitor's own mail app via a `mailto:` link with subject
("Offerteaanvraag via website — <dienst>") and a fully written body (name, phone, e-mail, gemeente, type
werken, beschrijving). A fallback panel shows the address, a "Kopieer tekst" button and the composed text
for visitors whose device has no mail app configured. Nothing is stored or sent through a server.
Photos cannot be attached by `mailto:` — the form tells the visitor to add them as attachments in the
e-mail. The Dakcheck pre-fills this form via `/offerte/?type=<slug>&bericht=<tekst>`.

To change the recipient: edit `email` in `src/data/site.ts`. If the client later wants submissions
without depending on the visitor's mail app (or wants photos uploaded), replace the `mailto` step in the
`submit` handler of `src/pages/offerte/index.astro` / `src/pages/contact/index.astro` with a form
endpoint (Web3Forms/Formspree/own function) — the validation and success UI can stay.

## Domain — one place

The domain lives only in `astro.config.mjs` (`siteUrl`). `src/data/site.ts` reads it via
`import.meta.env.SITE`, and `robots.txt` is generated (`src/pages/robots.txt.ts`), so canonicals, sitemap,
robots and JSON-LD can never drift apart again. `ciyadakwerken.be` was still **unregistered** on 2026-09-26 —
register it, point it at the site, change that one line, rebuild.

Google Search Console: paste the "HTML tag" verification value in `site.googleSiteVerification`
(or verify the domain via DNS once it exists), then submit `/sitemap-index.xml`.

## Legal pages — placeholders, not legal advice

`/privacy/`, `/cookies/`, and `/algemene-voorwaarden/` contain the identity block that **is** known
(legal name, VAT, address, contact) plus structured headings with bracketed placeholder text like
"[Aan te vullen door Ciya Ismet BV / juridisch adviseur]" for everything that requires a legal or
business decision (retention periods, liability, payment terms, etc.). The cookie page states — this
part is factually true today — that the site sets no tracking cookies. None of this is legal advice;
a lawyer or the client should fill in and review the bracketed sections before launch.

## What was verified vs. what's unknown (see BRIEF §1 for full detail)

**Verified and used:** brand name, legal name (Ciya Ismet BV), VAT (BE 1014.335.829), registered
address (Uebergdreef 55, 9160 Lokeren), phone, email, Facebook page, the "meer dan 20 jaar ervaring"
line (the *roofer's* personal experience — the BV itself was founded 30/09/2024, so this is never
phrased as company age), the 11 confirmed services, and the 4 before/after + 1 single photo pairing.

**Deliberately NOT stated anywhere on the site** because they aren't verified: opening hours,
response times, project/customer counts, star ratings or reviews, certifications ("erkend",
"gecertificeerd"), insurance, prices, team size, financing, "24/7", and any city other than Lokeren
(service area is "Lokeren en omgeving" / "regio Lokeren (Oost-Vlaanderen)" only — no city list, no
location pages). The CTA wording is "Vrijblijvende offerte" / "Offerte aanvragen", never "gratis
plaatsbezoek".

**Hellende daken (pitched roofs):** Ciya Dakwerken's core, confirmed specialisation is platte daken
(flat roofs) — roofing, EPDM, lichtkoepels, dakisolatie. Hellende daken are only ever mentioned in the
context of the specific confirmed services that touch them: Velux/dakramen, dakgoten, and zinkwerk
(plus dakisolatie and dakherstellingen, which the client's own site describes generically — the copy leads with platte daken and only mentions hellende daken for lekken rond dakramen, goten en zinkwerk and for insulation where it fits). The site
never claims general pitched-roof renovation as a service — if you add copy that touches "hellende
daken", keep it scoped to those specific services.

## Logo / brand asset list

Source files (client-supplied, in `src/assets/brand/`): `ciya-logo.png` and `ciya-logo-white.png`
(1598×634 raster, the only place bevel/gloss is allowed on the site — everything else stays flat).
Rendered via `Logo.astro` (`variant="dark"` / `variant="light"`).

Generated by `scripts/build-brand.mjs` (`npm run brand`, uses `sharp`) — re-run this script any time
the mark or tagline needs to change, then rebuild:

- Favicons + app icons are cut from the client's **real logo** (the "C + roof + chimney" part — the full
  wordmark is unreadable at 16–32 px), on a white tile: `public/favicon.ico` (16/32/48),
  `favicon-96x96.png`, `apple-touch-icon.png` (180), `icon-192.png` / `icon-512.png` (+ `site.webmanifest`).
- `public/brand/logo.png` — full logo on white, 800 px; the `logo` in the LocalBusiness schema.
- `public/brand/og-default.jpg` — 1200×630 Open Graph image: charcoal background with the hatch
  texture, white logo, and the tagline "Uw specialist in platte daken · 0484 55 02 52".

## Build status

`npm run build` completes clean — 22 pages, no errors, no font-provider warnings. Two review rounds were
run against the built `dist/` output: the builders' self-review cycles (forbidden words, SEO/tech,
mobile/UX) and a director QA in a real browser at 375/390/412/1280/1440 (`_research/QA-ROUND-1.md`,
with the fix log at the bottom). Final audit: unique title + 140–155-char description on every page,
exactly one `<h1>`, 72 JSON-LD blocks parsed with no rating/review/openingHours/priceRange, sitemap with
20 URLs, robots.txt, 404 page, no console errors, no horizontal overflow at 375/390/412.

Small implementation notes for whoever maintains this:
- Reveal-on-scroll only hides content under `html.js` (set by the first inline script in `<head>`), so
  the site is fully readable without JavaScript. A 2.5s safety timer reveals everything regardless.
- `[hidden] { display: none !important }` is global — it lets `form.hidden = true` work on grid/flex
  forms. Don't remove it.
- `BeforeAfter.astro`: "Voor" is the base layer (left), "Na" is clipped from the left (right). The frame
  is a fixed 4:5 with `object-fit: cover` so pairs with different aspect ratios stay aligned.
- `ProcessSteps.astro` takes `tone="dark"` on charcoal sections; default is the light variant.
- Performance rule of thumb: no infinite animation on paint-only properties (the old skeleton shimmer
  animated `background-position` on ~20 elements and caused visible lag). Image placeholders are static;
  decorative loops (hero shapes, 3D roof) pause when their `[data-anim-root]` section is off-screen.
- Motion lives in `src/styles/motion.css` + the pointer script at the bottom of `Base.astro`: hero
  entrance stagger, drifting roofline shapes, photo float + mouse parallax, card tilt, button sweep,
  photo-band scroll parallax, drawer stagger, phone snap-scroll rows (`.snap-row`). All transform/opacity
  only, no libraries; everything switches off under `prefers-reduced-motion`, and hover/parallax only run
  for fine pointers. `RoofLayers.astro` is the interactive isometric "dakopbouw" (pure CSS 3D + ~50 lines
  of JS); its five layer texts are general roofing knowledge, not claims about a specific product. It also
  appears on the service pages that map to a layer (`roofHighlight` in `[slug].astro`).
- Page transitions: `<ClientRouter>` in `Base.astro` gives app-like navigation. Consequence: every script
  initialises on `astro:page-load` (not `DOMContentLoaded`) and guards against double-binding with a
  `data-ready` flag — keep that pattern for any new script.
- Home uses `headerOverlay` (transparent header over the dark hero, white logo, turns white on scroll).
- Lighthouse (mobile, local): Accessibility 100 · Best Practices 100 · SEO 100; LCP ≈ 0.1 s, CLS 0.
- `/dakcheck/` — 3-question tool (`src/pages/dakcheck/index.astro`). The answer → advice mapping lives in
  the `decide()` function in that file; result texts are general guidance (no prices/timelines). The CTA
  links to `/offerte/?type=<slug>&bericht=<samenvatting>`, which the quote form reads to pre-fill the
  "Type werken" select and the description. Nothing is sent anywhere.
- `Lightbox.astro` (in `Base.astro`) opens any `[data-lightbox-group] [data-lb-item]` photo full-screen
  (gallery + project story). `Compare.astro` is the roofing/EPDM/vloeibaar table on `/diensten/platte-daken/`.
- Owner portrait: `src/data/owner.ts` — `photo` (4:5, torch on a flat roof) feeds the `OwnerCard`
  feature on home + over-ons; `portrait` (square) feeds the compact avatar on offerte + contact. A second
  owner photo (on a roof construction, blue sky) is the home photo band and the over-ons intro. Name and
  role are KBO-verified; no founder story.
- Share images: `npm run brand` also writes `public/brand/og-<slug>.jpg` per service (+ projecten, dakcheck)
  from the `SERVICE_OG` map in `scripts/build-brand.mjs` — keep it in sync when service heroes change.
- Print stylesheet at the end of `global.css` (hides chrome, prints link/phone targets).
- `Base.astro` also renders the scroll-progress line and the desktop quick-actions panel (hidden on
  `/offerte/` and `/contact/`).

## Not done / needs a human decision before this can go live

- **Photos** — 15 high-resolution client photos (2026-09 set, 1536×2048 originals in
  `../images/client-2026-09/`) are now used for the hero, the 3-step project story, the photo band,
  the gallery, service heroes and the OG image. The licence plate on the van photo is blurred. The 5
  older Carrd photos (~500×800) remain for the Velux/lichtkoepel/zinkwerk before/after pairs and the
  EPDM detail — replace those when better shots exist. Two supplied images were not used: the client's
  own "VOOR & NA" graphic and the green-roof photo with baked-in text.
- **Forms open the visitor's mail app** (`mailto:` to `ciyaismet@hotmail.com`) — address confirmed 2026-09-16.
- **Domain not confirmed** — `siteUrl` is a placeholder (see above).
- **Legal pages are placeholders** — need a lawyer/the client to fill in the bracketed sections.
- **No git repository, no deploy, no DNS, no analytics, no email/WhatsApp integration** — this was
  explicitly out of scope for this build (local-only, per the brief) and untouched.

## SEO expansion (2026-09-18)

Added to compete for "dakwerken Oost-Vlaanderen" and build topical authority:

- **`/dakwerken-oost-vlaanderen/`** — dedicated regional landing page. Honest scope only: based in
  Lokeren, works in Lokeren and the wider surroundings — no city list, no "heel Oost-Vlaanderen" claim.
- **`/kennisbank/`** — 6 advice articles as an Astro content collection (`src/content/kennisbank/*.md`,
  schema in `src/content.config.ts`). Each has a `service` field linking it to `data/services.ts`, a TOC,
  reading time, byline (the verified owner), and `Article` JSON-LD. Add a new article by dropping a
  `.md` file with the same frontmatter shape — no template changes needed.
- **`/projecten/[slug]/`** — case-study page per before/after project, with its own factual "wat we
  deden" step list (`steps` field on each project in `data/projects.ts` — NOT derived from the generic
  service solutions, since that produced inaccurate per-project claims).
- **`/veelgestelde-vragen/`** — every service FAQ aggregated on one page with jump links, plus its own
  `FAQPage` schema.
- **Mega-menu**: the Diensten dropdown now shows an icon + one-line description per service and a
  "Doe de dakcheck" card, two columns, in `Header.astro`.
- **Schema/meta**: `RoofingContractor` and `Service` JSON-LD now include `areaServed` for both the city
  and Oost-Vlaanderen as an `AdministrativeArea`, plus `geo` coordinates for Lokeren; `Base.astro` adds
  `geo.region`/`geo.placename`/`geo.position` meta tags. Titles/descriptions mention "Lokeren &
  Oost-Vlaanderen" where they fit within length limits.
- **`siteUrl`** is temporarily the live Vercel URL (`https://cya-dakwerken-1.vercel.app`) — see "Domain — one
  place" above.

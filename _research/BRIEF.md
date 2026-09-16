# CIYA DAKWERKEN — BUILD BRIEF (single source of truth)

Client website, LOCAL ONLY. Never: git init, git remote, push, deploy, DNS, email, analytics, send real emails/WhatsApp, modify the live Carrd site. Everything stays in this folder.

Project root: this repository  (Astro 7.3, Node 22 via fnm: `export PATH="$HOME/.fnm:$PATH"; eval "$(fnm env)"; fnm use 22`)
Photos (verified real Ciya work, from their Carrd site): `../images/carrd-cleaned/` (labels retouched out) and `../images/carrd/` (originals). The client will drop MORE photos in `../images/` later — build so that swapping/adding photos is a data-file change.

---

## 1. VERIFIED FACTS — the only facts allowed on the site

| Field | Value | Source |
|---|---|---|
| Brand name | Ciya Dakwerken | Carrd site |
| Legal name | Ciya Ismet BV | Carrd + KBO |
| VAT | BE 1014.335.829 | Carrd + KBO |
| Address (registered seat) | Uebergdreef 55, 9160 Lokeren | KBO (official register) |
| Phone | 0484 55 02 52 → `tel:+32484550252` | Carrd |
| Email | ciyaismet@hotmail.com | Carrd (decoded from their own contact icon) |
| Facebook | https://www.facebook.com/profile.php?id=61567002783249 | Carrd |
| Positioning (their own words) | "Uw specialist in platte daken" / "Uw betrouwbare dakwerker" | Carrd |
| Experience | "Meer dan 20 jaar ervaring in dakwerken" — this is the ROOFER's personal experience. The BV was founded 30/09/2024. NEVER write "20 jaar bedrijf", "sinds 2004", "al 20 jaar actief als bedrijf". Say: "meer dan 20 jaar ervaring in dakwerken". | Carrd + KBO |
| Trust points | Vakmanschap en hoogwaardige materialen · Persoonlijk advies en maatwerk · Garantie op al onze werkzaamheden | Carrd |
| Services (confirmed) | roofing (bitumen), EPDM, lichtkoepels, Velux/dakramen, zinkwerken, dakisolatie, dakgoten, vloeibare dakbedekking, herstellingen, reiniging, onderhoud | Carrd |
| Scope words they use | nieuwbouw, renovatie, onderhoud | Carrd |
| Activities (NACE) | 43.410 dakwerkzaamheden · 43.230 installatie van isolatie · 43.421 waterdichtingswerken · 43.320 schrijnwerk | KBO |
| Service area | Lokeren + "en omgeving" ONLY. No city list, no city pages, no radius, no province claims beyond "Oost-Vlaanderen" as the province Lokeren is in. | KBO address |

NOT KNOWN → do not state: opening hours, response times, number of projects/customers, ratings, reviews, certifications, insurance, brands used, prices, team size, financing, "24/7", "erkend aannemer", "gratis plaatsbezoek" (say "gratis offerte" only — that IS on the current site? No: current site does not say "gratis". Use "Vrijblijvende offerte" as the primary CTA wording, which is safe. "Gratis offerte aanvragen" is the CTA in the client brief and is standard practice in BE roofing; use "Vrijblijvende offerte" in body copy and "Offerte aanvragen" on buttons. Do NOT promise "gratis plaatsbezoek".)
WhatsApp: number is a BE mobile, but WhatsApp use is NOT verified → build it behind a config flag `whatsapp.enabled = false`. When off, sticky bar shows BEL · E-MAIL · OFFERTE.

Photo → service mapping (verified by eye):
- `gallery01_bc4ee35c.jpg` = roofing plat dak VOOR (old bitumen, gravel) · `gallery01_077954a1.jpg` = NA (new roofing) — pair
- `gallery02_84b5d151.jpg` = Velux VOOR (opening in tiled roof) · `gallery02_05b8589a.jpg` = NA (Velux installed) — pair
- `gallery03_494a5276.jpg` = lichtkoepel VOOR (old dome) · `gallery03_e3402694.jpg` = NA (new flat glass skylight) — pair
- `gallery04_573722a3.jpg` = zinken dakgoot VOOR (bare wooden gutter board) · `gallery04_6164aadd.jpg` = NA (zinc gutter) — pair
- `gallery05_9cc897b3.jpg` = dakgoot/dakrand afgewerkt in EPDM op pannendak — single
- `image01.jpg` = their OLD logo (reference only, do not use on site)
All photos are portrait ~500×800. Design for portrait photos. Never stretch. Never full-bleed a single one wider than ~600 CSS px.
Alt text describes only what is visible ("Plat dak na vernieuwing van de roofing"), never a place or date.

---

## 2. BRAND SYSTEM

**Colors (CSS custom properties, `src/styles/tokens.css`)**
```
--red-900:#3A0B10 --red-800:#651018 --red-700:#8F111B --red-600:#C51F2A (primary action) --red-500:#D9323C (hover)
--black:#0A0A0A --ink:#111111 --charcoal:#1C1C1C --grey-800:#2A2A2A --grey-700:#3D3D3D --grey-500:#6B6B6B --grey-400:#8F8F8C --grey-300:#C9C9C6 --grey-200:#E6E6E3 --grey-100:#F4F4F1 --white:#FFFFFF
```
Rules: white/off-white surfaces dominate; black/charcoal for hero, CTA band, footer; red ONLY for primary buttons, eyebrow labels, the 3px rule under eyebrows, focus rings, the logo gable. No blue/green/purple/orange anywhere (including link colours: links are ink with red underline on hover). No gradients except a flat dark overlay on photos.

**Type (Astro Fonts API, self-hosted, `astro.config.mjs` `fonts:[...]`, `fontProviders.google()`)**
- Display: `Big Shoulders Display` weights 600, 700, 800 → `--font-display`. If the provider rejects that family name, use `Big Shoulders` (the newer consolidated family). Use for: H1, H2, hero numbers, process numbers, nav CTA, sticky bar labels. H1/H2 in **uppercase**, letter-spacing 0.01em, line-height 0.95.
- Body/UI: `IBM Plex Sans` weights 400, 500, 600 → `--font-body`. Use for everything else incl. H3 (600, sentence case).
- Fallback stacks: display → `Impact, "Arial Narrow Bold", sans-serif` ; body → `"Helvetica Neue", Arial, sans-serif`.
- Scale (fluid, clamp): display 44–88px, h1 40–72, h2 32–52, h3 20–24, body 17/1.6, small 14, eyebrow 13 uppercase tracking .12em.

**Shape & texture**
- Radius: 2px everywhere (buttons, cards, inputs, images). NO pill buttons, NO 12px+ rounded cards.
- Borders: 1px `--grey-200` on light; 1px `rgba(255,255,255,.12)` on dark.
- Shadows: none, except an 8px solid offset block (`--red-600` or `--black`) behind featured photos (`.frame--offset`).
- Dark sections get a subtle hatch: `background-image: repeating-linear-gradient(135deg, rgba(255,255,255,.035) 0 1px, transparent 1px 9px)` on `--charcoal`. Subtle. That's the "membrane" texture.
- Roofline motif: a small chevron `^` (the logo gable) used as (a) the eyebrow marker, (b) list bullets in benefit lists, (c) a 100%-width thin zigzag divider between hero and trust strip (SVG, 1 unit). Use it consistently, sparingly.
- Icons: inline SVG, 1.75px stroke, square caps, 24px grid, currentColor. Draw ~14 simple line icons yourself (roof, drop/leak, window, sun/daylight, gutter, layers/insulation, wrench, brush, shield/guarantee, phone, mail, chat, chevron, arrow). No emoji. No icon fonts. No third-party icon packs.

**Buttons** (`.btn`): height 52px (44 on small), padding 0 24px, display font 700 uppercase 15px tracking .06em, radius 2px.
- `.btn--primary`: bg red-600, text white; hover red-500; active red-700.
- `.btn--dark`: bg black, text white; hover grey-800.
- `.btn--ghost`: transparent, 1.5px border currentColor.
- Every button has a 3px red focus ring with 2px offset. Min touch target 44px.

**Logo — USE THE CLIENT'S LOGO** (`src/components/Logo.astro` + files in `public/brand/`)
The client supplied a logo: `../images/logo/ciya-logo.png` (1598×634, transparent, trimmed) = bold italic "CIYA" with the C drawn as a red roofline + chimney, "DAKWERKEN" beneath between two red slashes. Dark-background variant (black → white, reds kept): `../images/logo/ciya-logo-white.png`. These are raster (bevelled/3D style) — that is the ONLY place bevel/gloss is allowed on the site; everything else stays flat and sharp so the logo has room.
- Copy both into `src/assets/brand/` and render via `astro:assets` `<Image>` (format webp with alpha, widths [160, 240, 320, 480], explicit width/height, `loading="eager"` in header). Header: height 48px (≥1024) / 40px (mobile), left aligned, links to `/`. Footer: white variant, height 56px.
- Small-size mark (favicon, apple-touch-icon, mobile drawer header, 404, OG badge): a clean SVG mark that echoes the client's C-roof concept (red gable + black C) because the raster logo turns to mush at 16–32px. Geometry (viewBox 0 0 64 64):
```svg
<path d="M55 27 L33 8 L11 27" fill="none" stroke="#C51F2A" stroke-width="10" stroke-linejoin="miter" stroke-miterlimit="6"/>
<path d="M16 24 V56 H52" fill="none" stroke="#0A0A0A" stroke-width="10" stroke-linejoin="miter"/>
```
(white second path for dark bg). Ship: `public/brand/mark.svg`, `mark-white.svg`, `public/favicon.svg` (mark with 6px padding), `public/favicon.ico` (32px PNG-in-ICO via sharp or a tiny script), `public/apple-touch-icon.png` (180, mark on white, 24px padding), `public/brand/og-default.jpg` 1200×630 (charcoal bg + hatch, white client logo centred ~700px wide, below it "Uw specialist in platte daken · 0484 55 02 52" in white). Generate PNG/JPG assets with sharp in `scripts/build-brand.mjs` (run once; commit outputs to `public/`). No opentype/wordmark work needed anymore — skip task 7.3's font-outlining.

---

## 3. INFORMATION ARCHITECTURE (exact routes; trailing slash; `trailingSlash: 'always'`, `build.format: 'directory'`)

```
/                         Home
/diensten/                Services overview
/diensten/platte-daken/   Umbrella page (roofing + EPDM + koepels + isolatie for flat roofs) — links to the specifics
/diensten/epdm/
/diensten/roofing/
/diensten/lichtkoepels/
/diensten/velux-dakramen/
/diensten/zinkwerken/
/diensten/dakgoten/
/diensten/dakisolatie/
/diensten/vloeibare-dakbedekking/
/diensten/dakherstellingen/
/diensten/dakonderhoud/   (reiniging + onderhoud)
/projecten/               Realisaties (before/after)
/over-ons/
/contact/
/offerte/
/privacy/  /cookies/  /algemene-voorwaarden/   (structured placeholders, clearly marked "aan te vullen door de klant / juridisch adviseur")
/404
```
No location pages. No blog. Nav: Diensten (dropdown on desktop listing all 11) · Projecten · Over ons · Contact · [Offerte aanvragen] · phone number visible in header on ≥1024px.

Services live in ONE data file: `src/data/services.ts` — `{ slug, name, short, eyebrow, h1, intro, problems[], benefits[], solutions[], approach[], faq[], related[], images:{hero?, gallery[], beforeAfter?}, seo:{title, description} }`. Service pages are generated from it by `src/pages/diensten/[slug].astro`. Home, /diensten/, footer and "related services" all read from this file.
Projects live in `src/data/projects.ts` — the 4 before/after pairs + the EPDM gutter single. Fields: `{ slug, title, service (slug), before?, after?, single?, note }`. `note` is factual and minimal ("Vernieuwing roofing op een plat dak." style). No place, no date, no client.
Site config `src/data/site.ts`: name, legalName, vat, phoneDisplay, phoneE164, email, address{}, facebook, whatsapp{enabled:false, number:'32484550252'}, serviceArea:'Lokeren en omgeving', siteUrl (placeholder `https://www.ciyadakwerken.be` — TODO comment, domain not confirmed).

---

## 4. PAGE BLUEPRINTS

**Home**
1. Header (sticky, white, 1px bottom border; becomes 64px tall after scroll).
2. HERO — dark (`--charcoal` + hatch). Two columns ≥1024px (7/5). Left: eyebrow "Dakwerker · Lokeren en omgeving" · H1 "UW SPECIALIST IN PLATTE DAKEN" · sub (2 lines, plain: roofing, EPDM, koepels, Velux, zink, goten — nieuwbouw, renovatie, onderhoud; "meer dan 20 jaar ervaring") · [Offerte aanvragen] [Bel 0484 55 02 52 (ghost, phone icon)] · small line under buttons: "Persoonlijk advies · Kwaliteitsmaterialen · Garantie op ons werk". Right: photo composition — roofing NA photo in `.frame--offset` (red block) ~420px wide, a second smaller frame (Velux NA) overlapping bottom-left, red tag "Realisatie · Roofing plat dak". On mobile: text first, then ONE photo full-width (aspect 4/5, max-height 60vh).
3. Zigzag roofline divider (SVG) into…
4. TRUST STRIP — 4 items on white with icons: "Meer dan 20 jaar ervaring" · "Persoonlijk advies en maatwerk" · "Hoogwaardige materialen" · "Garantie op al onze werkzaamheden". 2×2 on mobile.
5. "WAAR KUNNEN WE U MEE HELPEN?" — 6 problem cards → service pages: Lek in het dak? → dakherstellingen · Plat dak aan vernieuwing toe? → platte-daken · Meer daglicht? → velux-dakramen (mention koepels) · Dakgoten versleten of lek? → dakgoten · Dak isoleren? → dakisolatie · Onderhoud of reiniging? → dakonderhoud. Card = icon, question (h3), 1 line, arrow. Hover: 3px red top border grows.
6. SERVICES — heading "ONZE DIENSTEN", 11 items in a dense 3-col list-grid (name + 1 line + chevron), from data. Not big cards.
7. PROJECTS teaser — heading "REALISATIES", 2 before/after sliders (roofing, Velux) + link to /projecten/.
8. PROCESS — dark section, "ZO WERKEN WE": 01 Contact · 02 Advies ter plaatse of telefonisch · 03 Vrijblijvende offerte · 04 Planning · 05 Uitvoering en oplevering. Oversized display numerals (grey-800 on charcoal), short lines. Word it as "wat u kunt verwachten" — no promises on timing.
9. ABOUT teaser — split: photo (EPDM gutter single) + 3 short paragraphs (experience, materials, personal contact) + link /over-ons/.
10. FAQ — 5 general questions (accordion, native `<details>`), no FAQPage schema on home.
11. CTA BAND — red-700 bg, "UW DAK VERDIENT VAKWERK." + [Offerte aanvragen] [Bel 0484 55 02 52].
12. Footer — 4 cols: lockup(dark)+1-line description+Facebook · Diensten (all 11) · Contact (phone, email, address, VAT) · Info (Over ons, Projecten, Privacy, Cookies, Algemene voorwaarden). Bottom line: "© {year} Ciya Ismet BV · BTW BE 1014.335.829".
13. Mobile sticky bar (≤1023px): 3 equal cells BEL · E-MAIL · OFFERTE (or WHATSAPP when enabled), black bg, white display labels + icons, safe-area padding, body gets `padding-bottom: calc(64px + env(safe-area-inset-bottom))` so nothing is covered.

**Service page** (`[slug].astro`): breadcrumb · hero (light! white bg, eyebrow, H1, intro, 2 CTAs, photo right if available in frame) · "Veelvoorkomende problemen" (icon list) · "Voordelen" (chevron list) · "Oplossingen en materialen" (from data; only what's confirmed generally true) · "Onze aanpak" (4 steps) · photos/before-after (if data has them) · FAQ (details, FAQPage schema) · "Waarom Ciya Dakwerken" (the 4 trust points, compact) · CTA band · "Gerelateerde diensten" (3 from data). 600–900 words each, genuinely useful, no filler, no repeated paragraphs across pages.

**/diensten/**: intro + the 11 services as rows with icon, name, 2 lines, link. Plus problem cards repeated compactly at bottom.
**/projecten/**: intro line ("Een selectie van uitgevoerde werken. Alle foto's zijn van eigen realisaties.") · before/after sliders for the 4 pairs (with service link) · the single EPDM photo · CTA.
**/over-ons/**: H1 "OVER CIYA DAKWERKEN" · 3 sections: Ervaring (20+ jaar, platte daken specialisatie) · Werkwijze (persoonlijk, advies, maatwerk, materialen, garantie) · Regio (Lokeren en omgeving) · facts block (legal name, VAT, address) · CTA. No founder story, no team.
**/contact/**: phone (big, tel link), email, address, Facebook, short contact form (Naam, Telefoon of e-mail, Bericht), link to /offerte/, NO map embed.
**/offerte/**: H1 "VRAAG UW VRIJBLIJVENDE OFFERTE AAN". Form: Naam* · Telefoon* · E-mail · Gemeente/postcode · Type werken (select from services + "Weet ik niet / iets anders") · Beschrijving · Foto's toevoegen (multiple, image/*, client-side thumbnails, max 10, no upload). Only Naam+Telefoon required. Client-side validation with inline Dutch error messages; on submit → mock: `console.info` + show success panel "Bedankt, we nemen contact met u op." (no promise of timing) + "Liever bellen? 0484 55 02 52". Add `<!-- TODO: connect to a form endpoint (e.g. own API / Formspree / Web3Forms). Currently mock. -->`. Honeypot field included. Side column: what happens next (3 steps) + trust points.
**Legal pages**: structured headings with placeholder paragraphs in brackets like "[Aan te vullen door Ciya Ismet BV / juridisch adviseur]". Include the identity block that IS known. Cookie page: state the site sets no tracking cookies (true — we add none).
**404**: "PAGINA NIET GEVONDEN" + links to home/diensten/contact + phone.

---

## 5. SEO / TECH

- `astro.config.mjs`: `site` from config placeholder, `trailingSlash:'always'`, `integrations:[sitemap()]`, `fonts:[...]`, `image: { responsiveStyles: true, layout: 'constrained' }` if supported by this Astro version (check `node_modules/astro/dist/types/public/config.d.ts` for `responsiveStyles`), `build.inlineStylesheets:'auto'`.
- `src/layouts/Base.astro`: `<html lang="nl-BE">`, charset, viewport (`viewport-fit=cover`), title, description, canonical, OG (title/description/type/url/image/locale nl_BE/site_name), twitter card summary_large_image, theme-color `#0A0A0A`, favicon links, `<Font cssVariable="--font-display" preload />` + body font, preconnect none (fonts are self-hosted), JSON-LD slot.
- JSON-LD: every page → `Organization` is NOT needed separately; use `RoofingContractor` (subtype of LocalBusiness) with `@id`, name "Ciya Dakwerken", legalName, vatID "BE1014335829", telephone "+32484550252", email, address (PostalAddress, addressCountry BE), areaServed [{"@type":"City","name":"Lokeren"}], url, logo, image, sameAs [facebook], `knowsAbout` list of services. NO aggregateRating, NO review, NO openingHours, NO priceRange. Service pages add `Service` (name, provider @id, areaServed, serviceType) + `BreadcrumbList` + `FAQPage` (only questions actually visible on the page). /projecten/ adds BreadcrumbList only.
- `public/robots.txt`: allow all, `Sitemap: {siteUrl}/sitemap-index.xml`.
- Images through `astro:assets` `<Image>`/`<Picture>` from `src/assets/images/` (copy from `../images/carrd-cleaned/` with descriptive filenames like `plat-dak-roofing-na.jpg`, `velux-dakraam-voor.jpg`), formats `['avif','webp']`, widths [320, 480, 640, 960], `sizes` per slot, `loading="lazy"` except the hero photo (`loading="eager"` `fetchpriority="high"`). Every image has width/height.
- Before/after component: two stacked `<Image>`s + a range input (`<input type="range">`) driving `clip-path` on the "after" layer; labels "Voor"/"Na" as HTML, keyboard accessible (the range input), `aria-label`. ~40 lines of JS, no library.
- JS budget: mobile nav toggle, header scroll class, before/after slider, offerte form validation + previews, reveal-on-scroll (IntersectionObserver, adds `.is-in`, respects `prefers-reduced-motion`). That's all. No frameworks, no analytics, no external scripts, no cookies.
- Motion: reveal = translateY(12px)→0 + opacity over 400ms, staggered 60ms in grids. Buttons: 120ms bg transition. Header: 200ms height. Nothing else.
- A11y: skip link, landmarks, one H1 per page, logical H2/H3, visible focus (3px red ring), labels on all inputs, `aria-expanded` on nav toggle & dropdown, `aria-current="page"`, dropdown usable by keyboard (focus-within), colour contrast ≥4.5:1 (check red-600 on white for text → use red-700 for text; red-600 only for backgrounds with white text and for rules), `prefers-reduced-motion` disables reveal/transitions, `<details>` FAQ is native.
- Performance: no web-font flash beyond swap; preload display font; CSS < 40KB; hero image ≤ 60KB webp; Lighthouse-style hygiene (no layout shift: fixed aspect boxes on all images).

---

## 6. COPY RULES (Belgian Dutch)

- "u/uw" form. Short sentences. Concrete. Every page answers: wat doet Ciya · past het bij mijn probleem · waarom vertrouwen · wat gebeurt er nu · hoe contact.
- Register examples (write your own, do NOT reuse competitor sentences): "Een plat dak moet vooral één ding doen: dicht blijven." / "Wij komen langs, bekijken de situatie en zeggen eerlijk wat nodig is — en wat niet." / "Kleine herstelling of volledige vernieuwing: u krijgt een duidelijke offerte, zonder verrassingen achteraf."
- Forbidden words: revolutionair, innovatief, seamless, next-gen, disruptive, ecosysteem, AI, premium (as a word on the site), "nummer één", "beste van", "goedkoopste", "24/7", "gratis plaatsbezoek", "erkend", "gecertificeerd", any number of projects/customers, any star rating, any price, any city other than Lokeren, "Oost-Vlaanderen" is allowed only as "regio Lokeren (Oost-Vlaanderen)".
- Technical FAQ answers must be generally true and hedged where variability exists ("EPDM gaat doorgaans meerdere decennia mee, mits correcte plaatsing"; "De levensduur hangt af van ondergrond, afwerking en onderhoud"). Never "Ciya garandeert 30 jaar".
- Titles: `{Service} in Lokeren en omgeving | Ciya Dakwerken` (≤60 chars; drop "en omgeving" if too long). Home: `Ciya Dakwerken | Dakwerker in Lokeren – Specialist platte daken`. Meta descriptions 140–155 chars, contain service + trust + CTA, unique per page.

---

## 7. TASKS FOR BUILDER A (foundation + all non-service pages + 2 exemplary service pages)

7.1 Config, tokens, fonts, Base layout, Header (desktop + mobile drawer + services dropdown), Footer, StickyBar, Logo, Icons component (`Icon.astro` with a `name` prop switch), Button/Eyebrow/SectionHeading/Frame/BeforeAfter/ProblemCard/ServiceRow/ProcessSteps/Faq/CtaBand/TrustStrip components.
7.2 Data files (site.ts, services.ts with ALL 11 entries — names/short/seo/related for all, but full body content only for `epdm` and `dakherstellingen` in this pass; leave the other 9 with `body: null` and the page template must still render a solid, non-thin page from name/short/intro/benefits/faq minimal fields — Builder B fills them), projects.ts.
7.3 Brand files in `public/brand/` as listed in section 2 (client logo copies, SVG mark, favicons, OG image via `scripts/build-brand.mjs` using sharp).
7.4 Pages: /, /diensten/, /diensten/[slug]/ (template), /projecten/, /over-ons/, /contact/, /offerte/, /privacy/, /cookies/, /algemene-voorwaarden/, /404.
7.5 Copy for all of the above (not the 9 pending service bodies).
7.6 `npm run build` must pass with zero warnings that matter; `npm run preview` must serve. Fix all build errors yourself.
7.7 Write `HANDOVER.md` in project root: how to run, where content lives, how to swap photos, the WhatsApp flag, the form TODO, siteUrl TODO, legal placeholders, what was verified vs unknown, the logo asset list.
7.8 Self-review 3 cycles against sections 1, 2, 4, 5, 6 of this brief + the 73-point checklist in the client prompt (you have it in your task). Each cycle: list defects found → fix → rebuild. Report the defect lists in your final message.

## 8. TASKS FOR BUILDER B (later): the 9 remaining service bodies in `services.ts`, 600–900 words each, unique, with 5–7 FAQs each; rebuild; self-review 3 cycles for accuracy vs section 1 and for repetition across pages.

## 9. DEFINITION OF DONE (verified by the director in a real browser at 375/390/412/768/1280/1440/1920)
No horizontal overflow · sticky bar never covers content · every nav/footer/CTA/phone link resolves · no console errors · no missing images · unique title+description per page · one H1 · JSON-LD validates (no fake fields) · form validates & shows success · 404 works · looks like a serious Belgian roofing company, not a template.

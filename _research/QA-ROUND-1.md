# QA ROUND 1 — director's browser verification (2026-09-12)

Tested: built `dist/` served statically; live browser at 375/390 (mobile) and 1280/1440 (desktop); headless full-page captures at 1440. Console: no errors on any page tested. No horizontal overflow at 375/390. Sticky bar OK. Drawer OK. Dropdown OK (click). Titles/descriptions unique, one H1 per page, no forbidden words, JSON-LD has no rating/review/openingHours. Fonts load (Big Shoulders + IBM Plex Sans). Overall design direction is right — the fixes below are what stands between "good" and "done".

## A. BUGS (must fix)

A1. **Before/after orientation is inverted.** `BeforeAfter.astro` clips the AFTER layer with `inset(0 ${100-v}% 0 0)` → the after image shows on the LEFT while the "Voor" tag is top-left and "Na" top-right. Fix: after layer `clip-path: inset(0 0 0 ${v}%)` (after on the right), initial 50%. Add a visible 2px white divider line (with a small handle chevron-pair) at the split position (absolutely positioned, `left: v%`), pointer-events none; keep the range input as the control (also allow dragging on the frame itself: pointerdown/move sets the value).

A2. **Before/after pairs have different heights → ragged grids** (home Realisaties, /projecten/). Photos in a pair have different aspect ratios. Fix: `.ba-slider__frame { aspect-ratio: 4 / 5; }` and make BOTH images `position:absolute; inset:0; width:100%; height:100%; object-fit: cover`. On ≥1024 in a 2-col grid that gives equal cards.

A3. **ProcessSteps text is invisible on light pages.** `.process__item p { color: rgba(255,255,255,.8) }` is hardcoded → "Onze aanpak" on every service page renders empty. Fix: default `color: var(--grey-700)`, numerals `var(--grey-300)`; add prop `tone?: 'dark'|'light'` (default light) — dark variant: p `rgba(255,255,255,.8)`, numerals `var(--grey-700)`. Home passes `tone="dark"`. Also make the numerals genuinely oversized on the dark home section: `font-size: clamp(3.5rem, 3rem + 3vw, 6rem)`; keep them modest on the light service pages.

A4. **Reveal-on-scroll leaves sections blank while scrolling** (opacity 0 until IO fires; visible when scrolling fast on mobile — the process section showed as an empty dark block for >1s). Fix in the reveal script: `new IntersectionObserver(cb, { rootMargin: '0px 0px 15% 0px', threshold: 0 })` (reveal slightly BEFORE entering), immediately mark everything already in the viewport on init, cap stagger at 5 items (`--stagger: min(i,5)`), transition 320ms. Also gate hidden state on a `js` class: `html.js .reveal{opacity:0;transform:translateY(12px)}` and add `document.documentElement.classList.add('js')` as the first inline script in `<head>` so no-JS users see everything.

A5. **Mobile drawer "Diensten" chevron rotates into an "L" glyph when expanded.** Use `transform: rotate(180deg)` on the chevron icon (currently looks like 90°/mirrored).

A6. **Copy — keep "platte daken eerst".** The client's own site claims herstellingen and isolatie generically, so "platte en hellende daken" is allowed for `dakherstellingen` and `dakisolatie`, BUT lead with flat roofs: e.g. "Wij herstellen in de eerste plaats platte daken; ook op hellende daken herstellen we lekken, dakramen, goten en zinkwerk." Never imply full pitched-roof renovation/re-tiling as a service. Check `services.ts` after Builder B's rewrite for any such implication and soften it.

A7. **Meta descriptions > 155 chars** on `/` (163), `/privacy/` (163), `/projecten/` (160). Tighten to 140–155.

## B. LAYOUT / DESIGN (should fix)

B1. **Home problem cards: 6 cards in a 4-col grid → 4 + 2 orphans.** Use 3 columns ≥1024 (3×2), 2 columns 640–1023, 1 below.

B2. **All 11 services share the same house icon** in the services list, dropdown, footer. Add `icon` to each service in `services.ts` and use it in ServiceRow/diensten page/problem cards: platte-daken→roof, epdm→layers, roofing→roof-flame (or "roll"), lichtkoepels→sun, velux-dakramen→window, zinkwerken→gutter-corner, dakgoten→gutter, dakisolatie→layers-stack, vloeibare-dakbedekking→drop, dakherstellingen→wrench, dakonderhoud→brush. Add the missing icons to `Icon.astro` (24px grid, 1.75 stroke, square caps, hand-drawn simple shapes).

B3. **Service page body text is a heading-less wall** (centered column). Add an H2 above the body: `Meer over {name}` (or a `bodyHeading` field if present), left-aligned in the prose column, with the eyebrow "In de praktijk". Prose column max-width 68ch, left-aligned within the container grid (not centered), with the "Waarom Ciya" trust list as a sticky side card on ≥1024.

B4. **Service page "Realisatie" block**: the single slider sits at 480px wide with dead space to the right. Make it a 2-col section on ≥1024: slider left (max 520px), right column = eyebrow "Eigen werk", H2 = project title, note paragraph, link "Bekijk alle realisaties →". Mobile: stacked.

B5. **Hero "Realisatie" tag overlaps the secondary Velux photo** while it describes the roofing photo. Move the tag to the bottom-right corner of the main frame (`right: 20px; bottom: 20px`), ensure the small overlapping frame doesn't cover it (secondary frame bottom-left, tag bottom-right).

B6. **Desktop dropdown panel too narrow** — items wrap onto 2 lines ("Velux &\ndakramen"). Panel `min-width: 520px`, 2 columns, `white-space: nowrap`, 3px red top border, open on hover-intent (120ms) AND click; close on Escape and on outside click.

B7. **/over-ons/ is thin** (three 4-line columns). Rebuild per BRIEF §4: intro split (photo `epdm-dakrand-pannendak.jpg` in `.frame--offset` + 2 paragraphs), then the three pillars expanded to ~80–100 words each (Ervaring · Werkwijze · Regio — still only §1 facts, no founder story, no team), then the 5-step process (dark, `tone="dark"`), then the facts block (legal name, VAT, address, phone, email), then CTA band. Also add the trust strip.

B8. **/offerte/ form is plain.** Inputs/select height 52px, 1.5px `--grey-300` border → `--ink` on focus (plus the red focus ring), 2px radius, labels 600. Replace the native file input with a styled dropzone button: dashed border, icon, "Foto's kiezen of hierheen slepen", helper "Max. 10 foto's · JPG, PNG, HEIC", thumbnails grid 72px with remove buttons; keep the real `<input type="file" multiple accept="image/*">` visually hidden but keyboard-accessible (label-for). Side column in a `--grey-100` panel. Under the submit button: "Liever bellen? 0484 55 02 52" (tel link). Submit button full-width on mobile.

B9. **/contact/**: add a short line under the H1 ("Wij werken in Lokeren en omgeving. Bel, mail of gebruik het formulier — voor een offerte kunt u meteen foto's meesturen via het offerteformulier."). Give the contact details column the same `--grey-100` panel treatment. Form fields same styling as B8.

B10. **Footer logo** is ~48px tall; brief says 56px. Bottom bar: add "Lokeren, België" after the VAT? No — keep facts minimal; just fix the size.

B11. **Home services list**: on ≥1024 the 3-col list-grid is right; on 640–1023 use 2 columns. Rows: add a 3px transparent left border that becomes red on hover/focus-within.

## C. VERIFY AFTER FIXES
- `npm run build` green; re-run the dist grep audit (titles/descriptions/H1/forbidden/JSON-LD).
- Live browser: /projecten/ sliders equal height + correct Voor/Na orientation; a service page shows "Onze aanpak" steps; home problem cards 3×2; dropdown hover+click; drawer chevron; offerte dropzone previews + success state; over-ons has photo + process; no console errors; no horizontal overflow at 375/390/412; sticky bar never covers content.

## Fixer log (director, 2026-09-13 — Sonnet fixer was cut off by a session limit twice, so fixes were applied directly)

A1 DONE — after layer clipped from the left; 2px white divider + handle; pointer drag on the frame; range stays the accessible control.
A2 DONE — frame `aspect-ratio: 4/5`, both layers absolute + `object-fit: cover`.
A3 DONE — `ProcessSteps` `tone` prop; light default (grey-700 text, grey-300 numerals), dark variant oversized numerals; home + over-ons pass `tone="dark"`.
A4 DONE — `html.js` gate (first inline head script), IO `threshold 0` + `rootMargin 0 0 15%`, in-viewport items revealed on init, stagger capped at 5, 320ms, 2.5s safety reveal.
A5 DONE — root cause was `transform-origin` on the SVG (rotated around the corner); `.icon { transform-origin: 50% 50% }`.
A6 DONE — dakherstellingen + dakisolatie intros/description now lead with platte daken; no pitched-roof renovation implied. Also removed two "u spreekt rechtstreeks met wie de werken uitvoert" claims (team size unknown) and an unverified "eigen werk in Lokeren en omgeving" photo-location claim.
A7 DONE — home 141, privacy 147, projecten 148 chars.
B1 DONE — 3×2 ≥1024, 2 cols ≥640 (home + /diensten/).
B2 DONE — `icon` field on every service; 4 new icons (roll, dome, corner, stack); used in home list, /diensten/, related services. Header dropdown/footer are text-only by design.
B3 DONE — H2 "Meer over {name}" with eyebrow "In de praktijk", 68ch prose column, sticky "Waarom Ciya Dakwerken" side card with CTA + phone.
B4 DONE — 2-col realisatie block (slider 520px + eyebrow/H2/label/note/link).
B5 DONE — tag bottom-right of the main hero frame.
B6 DONE — panel 520px, `max-content` columns, nowrap, 3px red top border, hover-intent (120ms open / 200ms close, mouse-only) + click + Escape + outside click.
B7 DONE — over-ons rebuilt: intro split with photo, trust strip, 3 expanded pillars (§1 facts only), dark process, bedrijfsgegevens `<dl>` + Facebook, CTA band.
B8 DONE — shared form styles in `global.css` (52px fields, 1.5px borders, custom select caret), dropzone with drag-and-drop + 72px thumbnails + remove buttons (10 max, nothing uploaded), grey side panel, "Liever bellen?" line, full-width submit on mobile, first invalid field focused. Bug found during verification: `hidden` on a `display:grid` form was overridden → global `[hidden]{display:none!important}`.
B9 DONE — lede line, contact details in a `side-panel`, shared field styles, "Liever bellen?" line.
B10 DONE — `Logo.astro` now honours the `height` prop via `--logo-height` (footer 56px).
B11 DONE — 2 cols ≥640 / 3 ≥1024; red left border + grey-100 background on hover/focus-within.

Verified after fixes (live browser): /projecten/ Voor left / Na right, equal heights; roofing page "Onze aanpak" visible, side card sticky, realisatie 2-col; home cards 3×2, distinct icons, tag position; drawer chevron; offerte validation → focus → success (form hidden); no overflow at 375/412; dropdown hover + click; no console errors (the two 404s in the log were the preview reloading while the dist snapshot was being replaced). Build green, 21 pages, sitemap 20 URLs, 72 JSON-LD blocks clean, all descriptions ≤155.

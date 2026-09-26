# Google Business Profile — setup checklist for Ciya Dakwerken

Why: this is what actually drives local "dakwerken [stad]" map-pack rankings — more than anything on the
website itself. Must be done by the client (Ciya Ismet) or someone he explicitly authorizes, from an
account tied to the business. I can't create or verify it for him.

## 1. Create the listing
Go to https://business.google.com → "Manage now" → sign in with **the account Ciya wants to use long-term**
(ideally a business Google account, e.g. `info@` or `ciyaismet@`, not a personal throwaway).

- **Business name:** `Ciya Dakwerken` (not "Ciya Ismet BV" — use the trade name customers search for)
- **Category (primary):** Roofing contractor
- **Category (secondary, if offered):** Construction company / Waterproofing service
- **Address:** Uebergdreef 55, 9160 Lokeren — this is the KBO-registered seat. If he works from a
  different visible location, use that instead; Google penalizes listings at addresses with no real
  presence. If unsure, safer to set it as a **service-area business** (see below).
- **Service area:** set it to **Oost-Vlaanderen** (the whole province — confirmed by the owner 2026-09-26).
  Google lets you add the province itself; optionally add Gent, Sint-Niklaas, Aalst, Dendermonde,
  Oudenaarde and Eeklo as well, the same towns the website lists.
- **Phone:** 0484 55 02 52
- **Website:** the live site URL (Vercel URL now, swap to the real domain once it exists)

## 2. Verify
Google will offer one of: postcard by mail (5–14 days, most common for a first listing), phone call,
email, or instant verification if eligible. **Postcard is the default — budget the delay.**

## 3. Fill in the profile completely (do this before or right after verification)
- **Hours:** only if he actually wants to publish fixed hours. If work hours vary, it's fine to leave
  this off or mark "by appointment" — never invent hours.
- **Services:** add each one as a distinct service so Google can match searches to them:
  Platte daken, Roofing, EPDM, Lichtkoepels, Velux & dakramen, Zinkwerken, Dakgoten, Dakisolatie,
  Vloeibare dakbedekking, Dakherstellingen, Dakonderhoud — matches the 11 services on the website.
- **Description** (750 char max) — suggested, edit as needed, no invented claims:
  > Ciya Dakwerken is uw specialist in platte daken, actief in heel Oost-Vlaanderen.
  > Meer dan 20 jaar ervaring in dakwerken: roofing, EPDM, dakisolatie, lichtkoepels, Velux dakramen,
  > zinkwerk en dakgoten. Bij nieuwbouw, renovatie en onderhoud werken we met persoonlijk advies,
  > hoogwaardige materialen en garantie op het uitgevoerde werk. Vraag een vrijblijvende offerte aan.
- **Photos:** upload 10–15 of the real project photos already on the site
  (`~/Downloads/ciya dakwerken images/website/src/assets/images/`) — before/after pairs perform best.
  Add the logo as the profile photo and a work photo as the cover photo.
- **Website link:** point it at the homepage. Once Google My Business supports it, also link the
  Diensten and Offerte pages as "menu"/"services" deep links if the option appears.

## 4. After verification — the two things that move rankings most
- **Reviews.** Ask real customers to leave a Google review after a finished job — this is the single
  biggest ranking factor for the map pack, and it's the only source of reviews that's honest (the
  website itself deliberately shows none, per the no-invented-social-proof rule).
- **Consistency (NAP).** Name / Address / Phone must match **exactly** everywhere Ciya Dakwerken is
  listed online (Facebook page, this Google listing, any future directory). Right now Facebook and the
  website both show `0484 55 02 52` and `Ciya Dakwerken` — keep that alignment when the GBP goes live.

## 5. Tell me when it's live
Once the profile is verified and has a Place ID, I can:
- Add a link to it from the website footer/contact page.
- Add `LocalBusiness` schema's `hasMap` / `sameAs` pointing at it, matching the exact GBP details (never
  inventing a rating or review count — those come from Google's own widget/schema, not ours).

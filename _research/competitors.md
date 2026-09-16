# Concurrentieanalyse — 4 Belgische dakwerkers-websites
Research voor de Ciya Dakwerken site-rebuild. Bronnen: live fetch (curl, raw HTML) op 11–12 sept 2026 voor dakwerken-elewaut.be, dakwerken-kevin.be en dakwerkendevlin.be; WebFetch (rendered/summarized) voor dural-bouwgroep.be, waarvan de raw HTML voor onze fetch-IP een bot-protectie 403-pagina teruggaf (zie site 2, "toegangsbeperking"). Alle URL's, titels, meta-tags, schema.org-blokken en formuliervelden hieronder zijn letterlijk uit de HTML/sitemaps gehaald, niet gegokt.

Context (uit BRIEF.md): Ciya Dakwerken — Lokeren, Oost-Vlaanderen. Geen bevestigde reviews, certificaten, openingsuren of stedenlijst. Dat begrenst wat we mogen aanraden in de synthese onderaan.

---

## 1. dakwerken-elewaut.be — Dakwerken Elewaut BV (Zelzate)

### Navigatie & URL-structuur
Hoofdmenu: Home · Diensten (dropdown: Hellende & platte daken · Isolatiewerken · Houtskeletbouw · Herstelling · Dakreiniging · Asbestverwijdering) · Over ons · Blog · Realisaties · Contact.

Werkelijke URL's (uit sitemap.xml):
- Diensten-hub: `/diensten/`
- Onder `/diensten/`: `/diensten/hellende-platte-daken/`, `/diensten/isolatiewerken/`, `/diensten/asbestverwijdering/`, `/diensten/dakreiniging/`, `/diensten/houtskeletbouw/`, `/diensten/herstelling/`
- **Los van `/diensten/`, op root-niveau**: `/epdm-dak-plaatsen/`, `/plat-dak-plaatsen/`, `/hellend-dak-plaatsen/`, `/dakpannen-plaatsen/`, `/dakraam-plaatsen/`, `/dak-lekt/`, `/dakgoten-vervangen/`, `/koramic-dakpannen/`
- Overig: `/contact/`, `/over-ons/`, `/algemene-voorwaarden/`, `/privacybeleid/`, `/cookiebeleid/`
- Locaties (apart sitemap-segment `/locaties-sitemap.xml`): `/locaties/` + 18 stadspagina's — zie sectie "locatietargeting"

**Zwakte in de URL-architectuur**: er zijn twee parallelle, deels overlappende dienst-structuren (`/diensten/hellende-platte-daken/` versus losse `/hellend-dak-plaatsen/`, `/plat-dak-plaatsen/`, `/epdm-dak-plaatsen/`). Die pagina's beconcurreren elkaar waarschijnlijk voor dezelfde zoekwoorden (keyword-cannibalisatie) en geven geen consistent mentaal model van de site.

### Homepage sectievolgorde
1. Header/nav (desktop + mobiel dubbel in de DOM)
2. **Hero**: H1 letterlijk **"Dakwerken Elewaut BV"**, tagline "Uw dak expert in zowel hellende als platte daken", CTA-knop **"Offerte aanvragen"**
3. "Onze diensten" — intro-alinea + CTA "Contacteer ons"
4. 6 dienstenkaarten (Hellende & platte daken, Isolatiewerken, Houtskeletbouw, Herstelling, Dakreiniging, Asbestverwijdering), elk met "Meer info"
5. "Dakwerker in Oost-Vlaanderen" — tekstblok met 10+ jaar ervaring, bedrijfslocatie Zelzate, + korte lijst van 6 steden + link "Helemaal onderaan de pagina vindt u nog meer locaties"
6. "Uw dak, onze zorg!" — herhaalde CTA "Offerte aanvragen"
7. "Uw dakwerker voor al uw herstellingen" — extra tekstblok
8. "Vraag vandaag nog een offerte aan" — CTA-blok
9. "Klantenreviews" — **kopregel zonder zichtbare reviewtekst, sterren of aantal in de statische HTML** (waarschijnlijk een los ingeladen widget — niet crawlbaar, geen schema)
10. Volledige lijst van alle 18 locatiesteden als linkstrip ("We komen graag bij je langs in")
11. "Bel mij terug" callback-widget (enkel telefoonveld)
12. Footer: NAP (Triphonstraat 37, 9060 Zelzate · twee persoonlijke gsm-nummers "0495 34 27 88 (Milan)" / "0472 80 66 47 (Jonas)" · twee e-mails · BTW BE0759.896.911), dienstenlijst, **volledig offerteformulier nogmaals ingebed**, copyright, juridische links

### Trust signals & locatie op de pagina
- "**Met meer dan 10 jaar ervaring**" — enkel als lopende zin in de hero-tekst, geen aparte statistiekenbalk
- Geen "erkend", geen certificeringsbadges, geen zichtbaar Google-sterrencijfer
- Twee genoemde vakmannen bij naam (Milan, Jonas) in de footer — persoonlijk, wel goed voor vertrouwen
- WhatsApp als snelste kanaal, expliciet vermeld: *"Dakwerken Elewaut is het snelst bereikbaar via WhatsApp of het contactformulier, waar we doorgaans binnen een dag reageren."* — link via shortener `wa.link/28z445` (nummer niet blootgegeven)

### Servicepagina-structuur (voorbeeld: `/epdm-dak-plaatsen/`)
- H1: "Een EPDM-dak laten plaatsen"
- H2's in volgorde: Onze diensten → Een duurzaam EPDM-dak laten plaatsen → Vakkundige service door een gespecialiseerde dakwerker → Neem contact op met Dakwerken Elewaut → Klantenreviews → We komen graag bij je langs in → Bel mij terug
- **Geen FAQ-sectie, geen FAQPage-schema** op deze of andere geteste pagina's
- CTA's verspreid door de hele pagina + groot formulier onderaan
- Related-service links: alleen via het standaardmenu, geen contextuele "gerelateerde diensten"-blok in de content zelf

### Offerteformulier (`/contact/`, ook herhaald op elke servicepagina)
Velden (met label): **Naam\*, Adres\*, Telefoon\* (patroon-gevalideerd), E-mail\*, Onderwerp\* (vrije tekst, geen dropdown), Je bericht\* (textarea)**, **Afbeeldingen en pdf uploaden** (optioneel, `multiple`), GDPR-akkoordvakje\* (checkbox).
**6 verplichte tekstvelden + verplicht akkoordvakje = hoge frictie** voor een "vrijblijvende offerte"-aanvraag. Wel positief: foto-/pdf-upload aanwezig. Aparte lichte "Bel mij terug"-widget met alleen een telefoonveld verlaagt de drempel voor snelle contacten.

### Locatietargeting — 18 stadspagina's
`/locaties/assenede/`, `/belzele/`, `/destelbergen/`, `/doornzele/`, `/eeklo/`, `/ertvelde/`, `/evergem/`, `/gentbrugge/`, `/heusden/`, `/lembeke/`, `/lochristi/`, `/lovendegem/`, `/melle/`, `/oost-eeklo/`, `/oostakker/`, `/sleidinge/`, `/wachtebeke/`, `/zelzate/`.
Steekproef `/locaties/lochristi/`: H1 "Lochristi", H2 "Uw Dakexpert in Lochristi: Kwaliteit en Duurzaamheid" — de body-tekst is bijna 1-op-1 dezelfde tekst als de homepage/andere locatiepagina's met enkel de plaatsnaam verwisseld ("Dakwerken Elewaut BV is dé specialist voor al uw dakprojecten in **Lochristi** en omgeving..."). **Klassiek doorway-page-patroon**: template met woordsubstitutie, geen plaatsgebonden content (geen projecten in die stad, geen lokale referenties, geen straatnamen). Werkt mogelijk nog voor long-tail rankings maar is kwetsbaar voor Google's "doorway pages"-beleid en biedt de bezoeker geen echte meerwaarde.

### Mobile CTA
Sticky header (Elementor Pro `sticky-js`-widget) + WhatsApp-icoon-link in header/footer + "Bel mij terug"-popup. Geen aparte vaste onderbalk (bottom bar) met bel/whatsapp/offerte-knoppen gedetecteerd.

### Title/meta-patroon (2 voorbeelden, letterlijk)
- Home: `<title>Dakwerker in Oost-Vlaanderen - Dakwerken Elewaut BV</title>` — meta: *"Zoekt u een dakwerker in Oost-Vlaanderen voor uw renovatie of nieuwbouw? Vraag vandaag nog een offerte aan en laat uw dakwerken vakkundig uitvoeren."*
- EPDM-pagina: `<title>EPDM-dak plaatsen</title>` (**geen merknaam-suffix — inconsistent met de rest van de site**) — meta: *"Wilt u een EPDM-dak laten plaatsen? Ontdek de voordelen van dit duurzame materiaal en onze expertise. Neem contact met ons op voor een offerte."*

### Schema.org
Enkel generieke `Organization`+`Person` (samengevoegd `@type`), `WebSite`, `WebPage`, `ImageObject`. **Geen `LocalBusiness`/`RoofingContractor`, geen `PostalAddress` in schema, geen `AggregateRating`, geen `FAQPage`, geen `BreadcrumbList`-content ondanks 18 locatiepagina's.** Grote gemiste kans gezien de investering in lokale pagina's — Google krijgt geen gestructureerde NAP/service-area-data.

### Wat werkt goed
- Zeer uitgebreide dienstendekking en duidelijke, herkenbare CTA-taal ("Offerte aanvragen" overal)
- Foto/pdf-upload in het offerteformulier — praktisch voor roofers
- Persoonlijke naamsvermelding (Milan, Jonas) + WhatsApp-shortlink zonder nummer bloot te geven

### Wat is zwak
- Doorway-achtige locatiepagina's zonder echte lokale content of foto's
- Twee overlappende URL-structuren voor dezelfde diensten (cannibalisatie-risico)
- Reviews niet crawlbaar/geen schema; geen enkele trust-badge of certificering zichtbaar
- 6 verplichte velden in het hoofdformulier is hoge frictie

### 3 dingen die Ciya beter moet doen dan Elewaut
1. **Eén consistente URL-boom** voor diensten (geen dubbele/overlappende dienst-slugs).
2. Als er ooit een werkgebied-uitbreiding komt: **geen doorway-pagina's per stad** — zie synthese onderaan voor een veilig alternatief gebaseerd op Ciya's enige bevestigde locatie (Lokeren).
3. **Structured data toevoegen** (`LocalBusiness`/`RoofingContractor` met NAP) vanaf dag één — iets wat Elewaut ondanks 18 pagina's nooit deed.

---

## 2. dural-bouwgroep.be — Dural Bouwgroep

**Toegangsbeperking bij onderzoek**: directe `curl`-requests naar dit domein (ook met browser-User-Agent, correcte headers, met en zonder `www.`) kregen consistent een `403 Forbidden`-pagina terug (HTTP-statuscode 200, maar body = bot-blokpagina met `<meta name="robots" content="noindex">` — typisch een WAF/CDN-botfilter dat op iets anders dan user-agent filtert, bv. TLS-fingerprint of IP-reputatie). De onderstaande data komt daarom via WebFetch (die wél doorkwam), wat betekent dat sommige details (exacte meta-description, JSON-LD-schema) niet 1-op-1 uit ruwe HTML zijn bevestigd — expliciet gemarkeerd waar dat zo is.

### Navigatie & URL-structuur
Hoofdmenu + subnavigatie (via WebFetch achterhaald):
- `/dakwerken`, `/dakrenovatie`, `/dakrenovatie/hellend-dak`, `/dakrenovatie/plat-dak`, `/dakrenovatie/dakisolatie`
- `/duurzame-energie/zonnepanelen`
- `/aanpak`, `/aanpak/wie-zijn-we`, `/aanpak/hoe-we-werken`, `/aanpak/onze-klantenbelofte`
- `/vriendenbonus` (referral-bonusprogramma), `/premieservice`, `/premieservice/premies` (subsidiebegeleiding), `/financiering`
- `/realisaties` + individuele projectpagina's, bv. `/realisaties/een-ecologisch-dak-in-overijse`, `/realisaties/dakrenovatie-hellend-dak-del-carmen-natuurleien-in-melsele`
- `/contact`, `/offerte-aanvragen`, `/huis-gemaakt` (partnerschap), `/brochure`

Dit is de enige van de vier met een **service-first** (niet locatie-first) URL-architectuur — logisch, want Dural is geen lokale eenmanszaak maar een **regionale groep met 6 vestigingen**: Schoten (hoofdzetel), Antwerpen, Brugge, Aalst, Herentals, Leuven (elk met eigen adres/telefoonnummer op de contactpagina). Géén eigen per-vestiging landingspagina's — gemiste kans zelfs voor een speler van dit formaat.

### Homepage sectievolgorde
1. Hero — H1/headline **"Jouw dak, onze specialisatie. Ga voor een zorgeloze renovatie."**, primaire CTA **"Offerte aanvragen"**, subtekst "Maak nu een afspraak voor gratis advies bij je thuis."
2. Partnerschapsbalk: "Dural Bouwgroep als officiële partner van Huis Gemaakt!"
3. **Trust-statistiekenbalk** (3 cijfers naast elkaar): "15 jaar garantie" · "25+ jaar ervaring" · "4,9/5 sterren op Google"
4. Waardepropositie-tekst
5. 3 dienstenkaarten: Dakrenovatie, Dakisolatie, Zonnepanelen
6. Brochure-download-sectie
7. Projectenshowcase (3 uitgelichte realisaties met foto + beschrijving)
8. Merkenbalk: Velux, Wienerberger, REC, Rockpanel, Cedral, Koramic
9. Footer: contact, social, taalkeuze (nl/fr/en)

### Trust signals
- De drievoudige statistiekenbalk (garantiejaren / ervaringsjaren / Google-score) staat **direct onder de hero**, herhaald op servicepagina's als H3-trio ("15 jaar garantie", "25+ jaar ervaring", "4,9/5 sterren op Google")
- Merklogo's van gevestigde fabrikanten (Velux, Wienerberger...) als indirect kwaliteitssignaal
- Officieel partnerschap met "Huis Gemaakt" (bekend Vlaams renovatieplatform/tv-merk) — sterk autoriteitssignaal
- **Geen zichtbare reviewquotes/testimonials-tekst** gevonden — enkel het cijfer 4,9/5

### Servicepagina-structuur (`/dakrenovatie/hellend-dak`)
- H1: "Dakrenovatie bij hellende daken"
- H2-volgorde: Waarom Dural Bouwgroep? → Waarom je hellend dak renoveren? → Je hellend dak aanpakken samen met Dural Bouwgroep → Waarom je dakrenovatie met Dural Bouwgroep → **Veelgestelde vragen rond dakrenovatie van hellende daken** → Offerte aanvragen → Download brochure
- **FAQ: ja**, 4 vragen: "Wanneer moet ik mijn hellend dak renoveren?", "Is een hellend dak beter dan een plat dak?", "Wat kost renovatie van hellend dak?", "Welke materialen bij hellend dak?"
- CTA's op 3 niveaus: top (Offerte aanvragen / Bekijk onze aanpak), midden (Vraag een gratis offerte), onder (formulier + Download brochure)
- Related-links naar Plat Dak, Dakisolatie, Zonnepanelen — cross-sell naar aanpalende diensten, goed voor interne linking

### Offerteformulier (`/offerte-aanvragen`)
Eén pagina, geen multi-step. Velden: honeypot (verborgen anti-spam), **Voornaam, Achternaam, Straat + Nr, Postcode, E-mailadres, Telefoonnummer, Werkzaamheden** (checkboxes: Hellend dak / Plat dak / Hellend + plat dak), **Promocode** (koppelt aan het vriendenbonus-programma). Geen zichtbare verplicht-markering (\*) gedetecteerd, **geen foto-upload**. Geruststellende tekst: *"Benieuwd naar de kostprijs van jouw dakrenovatie? Laat hieronder je gegevens achter en we contacteren je zo snel mogelijk."*

### Locatietargeting
Geen per-stad landingspagina's ondanks 6 fysieke vestigingen — puur service-gebaseerde architectuur. Vestigingen staan alleen als lijst op de contactpagina.

### Mobiele CTA
Niet met zekerheid vast te stellen zonder ruwe HTML (bot-blokkade); WebFetch-samenvattingen tonen geen expliciete sticky-bottom-bar.

### Title/meta-patroon
- Home: `<title>Kwalitatieve dakwerken en dakrenovaties | Dural Bouwgroep</title>` — meta description **niet gevonden/niet leesbaar** via fetch (mogelijk aanwezig maar niet doorgekomen in de gerenderde extractie — niet hard bevestigen als "afwezig").
- Contactpagina: title en meta description evenmin leesbaar via de beschikbare fetch-methode.

### Schema.org
WebFetch trof **geen `<script type="application/ld+json">`-blokken** aan op de gecontroleerde pagina. Gezien de bot-blokkade op directe HTML-fetch is dit **niet 100% hard te bevestigen** — behandel als voorlopig, niet als vaststaand feit.

### Wat werkt goed
- Duidelijkste, meest "premium" visuele hiërarchie van de vier (trust-cijfers direct onder hero, merkenbalk, partnerschap-badge)
- Enige met een **subsidie-/premiebegeleidingsdienst** en een **vriendenbonus/referral-programma** — sterke, unieke conversiehefbomen die geen van de andere drie heeft
- Checkbox-gesegmenteerd offerteformulier (Hellend/Plat/Beide) i.p.v. vrije tekst — makkelijker te verwerken leads
- FAQ + cross-sell-links op servicepagina's

### Wat is zwak
- Zes vestigingen maar geen enkele eigen locatiepagina — gemiste lokale SEO-kans op groepsniveau
- Site technisch moeilijk te auditen door agressieve bot-bescherming — als dat ook echte klanten/crawlers raakt (bv. sommige SEO-tools, oudere browsers) is dat een risico
- Geen zichtbare reviewquotes, enkel een cijfer — minder overtuigend dan Devlin's aanpak met naam + quote

### 3 dingen die Ciya beter moet doen dan Dural
1. Dural bewijst dat een **trust-statistiekenbalk direct onder de hero** (garantie/ervaring/score) sterk werkt — Ciya kan dit toepassen met de wél bevestigde cijfers (meer dan 20 jaar ervaring), zonder ongeverifieerde cijfers erbij te verzinnen.
2. **Segmenteer het offerteformulier** met checkboxes per diensttype in plaats van één vrij tekstveld — sneller in te vullen, betere lead-kwalificatie.
3. Zorg dat de site **geen bot-firewall** heeft die ook legitieme crawlers/tools blokkeert — technische SEO-toegankelijkheid is een basisvereiste die Dural zelf blijkbaar in de weg zit.

---

## 3. dakwerken-kevin.be — Dakwerken Kevin (Gent)

### Navigatie & URL-structuur
Hoofdmenu: Home · Platte Daken · Hellende Daken · Velux Installateur · Contact.
URL's: `/`, `/platte-daken-gent/`, `/hellende-daken-gent/`, `/velux-installateur-gent/`, `/contact/`, `/faq/`, `/privacy-policy/`, `/voorwaarden/`, plus (uit sitemap, niet in menu) `/dank-je/`, `/nieuws/`, `/tevreden-klanten/`, `/projecten/`, `/hero-fixed/` (lijkt een vergeten testpagina).

**Stad in de slug** (`-gent`) op de twee hoofddienstpagina's is op zich een prima lichte local-SEO-tactiek voor een eenstadsbedrijf.

### ⚠️ Belangrijkste bevinding: verkeerde/restanttemplate-content live op de site
- De `<title>` van `/faq/` is letterlijk **`FAQ | JB Uitgewassen Beton`** — een andere bedrijfsnaam (een bedrijf in uitgewassen-betonopritten), niet Dakwerken Kevin.
- De **inhoud** van die FAQ-pagina gaat volledig over betonopritten: *"Welke kleuren en steentjes zijn mogelijk?"*, *"Is uitgewassen beton geschikt voor een hellende oprit?"*, *"Krijg ik snel mos of groene aanslag?"* — **geen enkele vraag over daken.**
- Het `Organization`-schema (JSON-LD) op de homepage heeft `"name": "Bouw template"` en een logo-bestandsnaam `cropped-jb-logo.png`, met een **kapotte URL** (`https://dakwerken-kevin.bewp-content/...` — ontbrekende `/` tussen domein en pad).
- De project-sitemap bevat niet-dakwerken-items: `/projecten/terrassen-in-bulacan/`, `/projecten/oprit-in-uitgewassen-beton-marilao/` (Bulacan/Marilao zijn plaatsen op de Filipijnen).

Dit wijst sterk op een **hergebruikt/nooit volledig aangepast WordPress-sjabloon** van een ander (beton-)klantproject. Dit is een reëel, op dit moment live, publiek zichtbaar merk- en geloofwaardigheidsprobleem — een potentiële klant die op de FAQ-link klikt ziet letterlijk het verkeerde bedrijf.

### Homepage sectievolgorde
1. Topbar: e-mail + telefoon direct zichtbaar (info@dakwerken-kevin.be · 0460 20 15 38)
2. Nav + mobiele "Gratis offerte!"-knop (mobile-cta-wrapper, verschijnt onder de topbar op smalle schermen)
3. **Hero**: H1 is letterlijk **"Gratis offerte"** (de CTA-tekst, niet de merk-/servicenaam — zwak voor SEO, het echte "Dakwerken Kevin Gent" staat als los tekstblok ernaast), met kleine sub-navigatiepillen (Platte Daken / Hellende Daken / Velux) en grote CTA "Gratis offerte!"
4. **Trust-strip direct na hero**: ★★★★★ "Een 4.9 beoordeling uit 49 Reviews"
5. "Over ons" — intro-alinea
6. "Platte Daken"-tekstblok (+ "Meer info")
7. "Hellende Daken"-tekstblok (+ "Meer info")
8. 6 USP/proces-kaarten: Persoonlijk contact, Duidelijke planning, Gratis offerte, Vakkundige uitvoering, Plaatsbezoek, Tevreden klanten
9. "Enkele impressies" — fotogalerij ("Tevreden Klanten")
10. Slot-CTA "Gratis offerte — Start vandaag met uw dakproject"
11. Footer: contact, nav, BTW BE 1003.766.688, juridische links

### Trust signals
- ★★★★★ "4.9 beoordeling uit 49 Reviews" prominent direct onder de hero — maar **geen `AggregateRating`-schema**, dus geen kans op sterren in de Google-zoekresultaten (gemiste rich-snippet).
- Geen "erkend", geen certificeringen, geen garantiejaren vermeld nergens op homepage of servicepagina's.
- Persoonlijke toon op de contactpagina: *"Neem bij voorkeur contact op via mail, aangezien ik vaak op het dak aan het werk ben ;)"* — authentiek en sympathiek.

### Servicepagina-structuur (`/hellende-daken-gent/`, `/platte-daken-gent/`)
- H1 op beide pagina's is ook **"Gratis offerte"** (herbruikt hero-blok) — de eigenlijke onderwerp-heading ("Hellende Daken" / "Platte Daken") staat pas als **H2**. Dit is een herhaalde SEO-zwakte: de primaire zoekterm hoort in de H1, niet een generieke CTA-zin.
- H2's: [Hellende Daken/Platte Daken] → Voordelen → Tevreden Klanten
- Geen FAQ-sectie op de servicepagina's zelf (de enige FAQ-pagina is de kapotte `/faq/`).
- Geen related-service-links in de content, enkel via het hoofdmenu.

### Contactformulier (`/contact/`)
Labels ontbreken in de HTML (enkel `placeholder`-attributen — een toegankelijkheidsprobleem voor schermlezers): **Naam\*, E-Mail\*, GSM\*, Bericht\*** — alle 4 verplicht, kort en simpel, **geen foto-upload**. NAP op de contactpagina: Korenveldstraat 47, 9032 Wondelgem.

### Locatietargeting
Geen aparte stadspagina's (geen `/locaties/`-sitemap-segment). Enkel "-gent" in twee dienst-slugs. Werkgebied wordt nergens expliciet met een steden- of regiolijst benoemd.

### Mobiele CTA
`mobile-cta-wrapper` — een blok dat op schermen ≤1100px onder de topbar verschijnt met een "Gratis offerte!"-knop. Geen vaste (fixed/sticky) onderbalk die blijft staan tijdens scrollen.

### Title/meta-patroon
- Home: `<title>Dakwerken Kevin, Dakwerker Gent</title>` — **geen meta description** (bevestigd afwezig in de ruwe HTML).
- Hellende Daken: `<title>Hellende Daken | Dakwerken Kevin Gent</title>` — **geen meta description**.
- **Op geen enkele geteste pagina (home, 2 servicepagina's, contact, faq) is een `<meta name="description">` aanwezig** — een consistente, site-brede SEO-miskleun.

### Schema.org
`WebPage`, `BreadcrumbList`, `WebSite`, `Organization` — maar de `Organization.name` is **"Bouw template"** (zie hierboven), geen `LocalBusiness`/`RoofingContractor`, geen `PostalAddress`, geen `AggregateRating` ondanks de zichtbare 4,9-score, geen `FAQPage`.

### Wat werkt goed
- Persoonlijke, informele toon (rechtstreeks contact met Kevin, grappige noot over "op het dak")
- "-gent" in de dienst-URL's is een simpele, effectieve local-SEO-zet voor een eenstadsbedrijf
- Zichtbaar Google-cijfer (4,9/49) hoog op de pagina

### Wat is zwak (en dit is stevig)
- **Verkeerd/restant-sjabloon live**: FAQ-pagina en schema-naam horen bij een ander bedrijf (betonopritten) — een reëel vertrouwensrisico voor elke bezoeker die erop klikt
- Geen enkele meta description site-breed
- H1 = generieke CTA-tekst i.p.v. de zoekterm, op zowel home als beide servicepagina's
- Geen `AggregateRating`-schema ondanks zichtbare reviewscore — gemiste rich snippet
- Geen echte locatiestrategie, geen FAQ die klopt, geen garantie-/ervaringscijfers

### 3 dingen die Ciya beter moet doen dan Kevin
1. **Elke pagina volledig op maat** — geen restanten van een ander project/klant, ooit. Controleer bij oplevering letterlijk elke `<title>`, elk schema-veld en elke afbeeldings-URL.
2. **H1 = de zoekterm/dienstnaam**, nooit een generieke CTA-zin; de CTA hoort in een knop, niet in de hoofding.
3. **Meta description op elke pagina, uniek geschreven** — dit is de simpelste, goedkoopste SEO-win die Kevin volledig laat liggen.

---

## 4. dakwerkendevlin.be — Dakwerken Devlin (Lierde/Gavere)

Dit is **de sterkste van de vier op structuur, schema en content-diepte** — de beste referentie voor wat "goed" er in deze niche uitziet.

### Navigatie & URL-structuur
Hoofdmenu: Home · Diensten (dropdown: Platte daken · Hellende daken · Dakisolatie · Bekleding van dakgoten · Zink- en koperwerken · Herstellingen) · Realisaties (dropdown: Realisaties hellende daken · Realisaties platte daken) · Over ons · Contact.
URL's: `/`, `/diensten/`, `/platte-daken/` (let op: er bestaat ook een `/platte-daken-2/` in de sitemap — waarschijnlijk een oude/dubbele pagina, een kleine opruim-kans), `/hellende-daken/`, `/isolatiewerken/`, `/bekleding-van-dakgoten/`, `/zink-en-koperwerken/`, `/herstelling/`, `/realisaties-hellende-daken/`, `/over-ons/`, `/contact-dak-en-zinkwerken/`, `/cookiebeleid/`.
Titelpatroon **dienst+stad**: bv. `Platte daken Gavere | Dakwerken Devlin`, `Hellende daken Gavere | Dakwerken Devlin` — consequent lokaal zoekwoord in elke title.

### Homepage sectievolgorde (de meest uitgebreide van de vier)
1. Topbar met telefoon-icoon-link, merknaam
2. Nav + header-CTA "Vraag uw gratis offerte" + telefoonknop
3. **Hero**: eyebrow "Dakwerker in Lierde & Gavere", H1 **"Een dak dat blijft zitten. 15 jaar garantie op al onze dakwerken."**, subtekst noemt EPDM/hellende daken/dakgoten/zink-en koperwerk/Oost-Vlaanderen, **dubbele CTA**: "Vraag uw gratis offerte" + "Bel 0493 85 98 03"
4. **Trust-strip** (iconenrij): ★★★★★ "5,0 op Google — 30+ reviews" · "15 jaar garantie" · "20+ jaar ervaring" · "Gecertificeerd asbestverwijdering"
5. "De baas staat op uw dak" — 4 USP-kaarten (baas-op-de-werf, garantie, vakkennis, nette werf)
6. "Onze diensten" — 6 dienstenkaarten met beschrijving + "Meer over X"-link + "Bekijk alle diensten"
7. "Ons verhaal" — persoonlijk oprichtersverhaal (eigenaar begon op zijn 16de via Syntra, 5 jaar geleden gestart na 15 jaar in loondienst), met quote: *"Wanneer u bij ons een offerte tekent, weet u wie uw werken opvolgt. Ik werk zelf mee op de werf."* + 3 waardepunten (Vakmanschap, Persoonlijk contact, Vertrouwen)
8. Garantieblok herhaald met uitleg + CTA
9. **"Onze realisaties"** — filterbare projectgalerij (Alles / Platte daken / Hellende daken / Dakgoten & zinkwerk / Isolatie / Herstellingen) met specifiek onderschreven foto's ("Hellend dak · nieuwe pannen", "Plat dak · EPDM met zonnepanelen", "Hellend dak · asbest verwijderd" …)
10. **"Klantenervaringen"** — **6 echte, met naam ondertekende Google-reviews met volledige quote-tekst**, gemiddeld 5,0 op 32 beoordelingen, link "Lees alle reviews op Google" — dit ís crawlbare, geloofwaardige social proof (in tegenstelling tot Elewaut/Kevin's widget-only cijfers)
11. "Onze werkwijze" — 4-stappenproces (Contact & plaatsbezoek → Duidelijke offerte → Uitvoering → Oplevering & garantie)
12. **"Veelgestelde vragen"** — 7 vraag/antwoord-paren, met `FAQPage`-schema (zie onder)
13. Slot-CTA + footer met **expliciete werkgebied-tekst** (zie locatietargeting) en "Erkend door"-badge

### Trust signals
- Drievoudige/viervoudige trust-strip direct onder de hero (score/garantie/ervaring/certificering)
- **"Erkend door" is in werkelijkheid één badge**: een vermelding als "Top 3 dakwerkers regio Oudenaarde 2026 — Keurwijzer.be" (een lokale ranglijst-site), **geen formeel vakdiploma/federatielabel** — nuance die het net iets minder sterk maakt dan de badge-naam ("Erkend door") doet vermoeden.
- Echte, herleidbare klantnamen bij reviews (bv. "Peter Vanhecke", "Annabel Baeten")
- Persoonlijk verhaal + foto/quote van de eigenaar zelf werkzaam op de werf — sterkste "mens achter het bedrijf"-verhaal van de vier

### Servicepagina-structuur (`/platte-daken/` en `/hellende-daken/` — identiek, herhaalbaar sjabloon)
- H1: bv. "Uw plat dak waterdicht, geïsoleerd en netjes afgewerkt"
- H2-volgorde (consistent op beide pagina's): "Wat we doen" (met H3-materiaalopties: EPDM-rubber / Roofing) → procesblok "Van plaatsbezoek tot waterdicht dak" (H3-stappen) → "15 jaar garantie op uw nieuwe [dak]" → **"[Diensttype] die we realiseerden"** (gefilterde projectgalerij) → **"Wat klanten ons vaak vragen"** (FAQ, 5 Q&A op de platte-daken-pagina) → "Eén aanspreekpunt voor uw volledige dak" (cross-sell naar andere diensten) → slot-CTA
- **FAQ: ja, met `FAQPage`-schema op de pagina zelf** (niet alleen op home)
- CTA op 3 plekken: header, na het garantieblok, onderaan
- Related-service-links expliciet in de content (niet enkel het menu)

### Contactformulier
Link "Naar het contactformulier" vanaf de homepage-CTA-blok naar `/contact-dak-en-zinkwerken/` (niet in detail bevraagd binnen de fetch-limiet, maar consistente NAP/telefoon overal: 0493 85 98 03 · info@dakwerkendevlin.be).

### Locatietargeting — de veiligste aanpak van de vier
**Geen enkele per-stad landingspagina.** In plaats daarvan:
- Een platte, eerlijke **tekstlijst in de footer**: *"Werkgebied: Lierde · Sint-Maria-Lierde · Deftinge · Gavere · Zottegem · Brakel · Geraardsbergen · Herzele · Oudenaarde · Zwalm · Horebeke · Sint-Lievens-Houtem · Kruisem · Wortegem-Petegem · Merelbeke · De Pinte · Nazareth · Oosterzele · Gent en omgeving."*
- Dezelfde lijst herhaald als `areaServed`-array (14 City-objecten + 1 AdministrativeArea "Oost-Vlaanderen") in het `LocalBusiness`-schema
- Eén FAQ-vraag ("In welke regio werkt Dakwerken Devlin?") die het werkgebied in lopende tekst herhaalt
- Title-tags van servicepagina's dragen wél één vaste plaatsnaam ("Gavere") als lokaal anker

Dit is precies het **doorway-vrije model**: één set sterke, generieke dienstpagina's + een eerlijke, niet-opdringerige werkgebied-vermelding in tekst én schema — geen 18 bijna-identieke stadspagina's zoals bij Elewaut.

### Mobiele CTA
Sticky/vaste header met telefoon-CTA-knop (`header-phone`, `btn--primary` met `tel:`-link) zichtbaar in topbar, header én hero. Geen WhatsApp (de enige "whatsapp"-vermelding in de HTML is een generieke social-share-plugin-optie, géén contactkanaal). Geen aparte vaste onderbalk gedetecteerd — de aanpak is duidelijk **bel-eerst**, niet chat-eerst.

### Title/meta-patroon (2 voorbeelden, letterlijk)
- Home: `<title>Home| Dakwerken Devlin | Hellende en platte daken | Gavere</title>` — meta: *"Dakwerken Devlin verzorgt hellende en platte daken in regio Gavere: nieuw dak, dakrenovatie, dakisolatie en herstellingen, steeds met 10 jaar garantie."* (let op: **de meta description noemt "10 jaar garantie", maar de rest van de site — hero, trust-strip, FAQ — zegt consequent "15 jaar garantie"**. Kleine maar reële inconsistentie tussen meta en content.)
- Platte daken: `<title>Platte daken Gavere | Dakwerken Devlin</title>` — meta: *"Plat dak laten plaatsen of vernieuwen in Gavere? Dakwerken Devlin werkt met EPDM of roofing voor een waterdichte afwerking met 10 jaar garantie."* (zelfde 10-vs-15-jaar-discrepantie)

### Schema.org — het rijkste van de vier
`@graph` met:
- `["RoofingContractor","LocalBusiness"]`: volledige NAP (straat/postcode/plaats/regio/land), `telephone`, `email`, `priceRange`, `foundingDate: "2021"`, `vatID`, `areaServed` (14 City's + regio), `openingHoursSpecification` (ma–vr 7–18u), `sameAs` (Instagram/Facebook), **`aggregateRating`** (5.0, 32 reviews), **`award`** (Keurwijzer-vermelding), **`hasOfferCatalog`** met elke dienst gelinkt naar zijn eigen service-URL
- `FAQPage` met 7 volledig uitgeschreven Q&A's
- `WebPage`
Dit is qua schema-volledigheid het model om te kopiëren (met Ciya's eigen, bevestigde cijfers).

### Wat werkt goed
- Herhaalbaar, consistent servicepagina-sjabloon (Wat we doen → Proces → Garantie → Projecten → FAQ → Cross-sell) op elke dienstpagina
- Echte, naam-en-quote testimonials i.p.v. enkel een cijfer
- Eerlijke, schema-onderbouwde werkgebiedlijst zonder doorway-pagina's
- Rijkste, meest complete structured data van de vier
- Sterk persoonlijk oprichtersverhaal met foto/quote

### Wat is zwak
- 10-jaar-vs-15-jaar-garantie-inconsistentie tussen meta descriptions en zichtbare content
- Dubbele/verweesde pagina `/platte-daken-2/` in de sitemap
- "Erkend door" oogt sterker dan het is (één ranglijst-vermelding, geen echt vakcertificaat/federatielabel)
- Geen WhatsApp-optie, enkel telefoon — kan drempel verhogen voor wie liever chat dan belt

### 3 dingen die Ciya beter moet doen dan Devlin
1. **Consistentie tussen meta descriptions en zichtbare content** — controleer bij oplevering dat élk cijfer (garantiejaren, ervaringsjaren) overal exact hetzelfde is.
2. Neem Devlin's schema-aanpak over maar **zonder cijfers te verzinnen** die niet bevestigd zijn (Ciya heeft nog geen reviews/aggregateRating — laat dat veld dan gewoon weg i.p.v. quasi-cijfers te tonen).
3. Overweeg **naast telefoon ook een geverifieerd WhatsApp-kanaal** (Devlin laat dat liggen) — mits Ciya's nummer bevestigd WhatsApp-actief is (zie BRIEF.md: nu achter een feature-flag `whatsapp.enabled=false`).

---

## SYNTHESE

### Gemeenschappelijke dienstentaxonomie (Nederlandse benamingen zoals ze die zelf gebruiken)
- **Platte daken / plat dak** — met materiaalkeuze **EPDM** vs **roofing/bitumen** (alle 4 noemen exact dit paar)
- **Hellende daken / hellend dak** — pannen, (natuur)leien, dakopbouw, onderdak
- **Dakisolatie / isolatiewerken**
- **Dakgoten** (bekleding/vervangen) en **zink- en koperwerk** (Devlin, Elewaut)
- **Herstelling(en) / dakherstellingen** (lekken, stormschade, losse pannen)
- **Asbestverwijdering** (Elewaut, Devlin — steeds met "gecertificeerd" erbij)
- **Dakreiniging** (enkel Elewaut)
- **Houtskeletbouw** (enkel Elewaut — duidelijke diversificatie-uitzondering)
- **Velux/dakvenster-plaatsing** (eigen pagina bij Kevin, submarkt bij Devlin binnen "hellende daken")
- **Dakrenovatie** als overkoepelende term (Dural, Devlin)
- **Zonnepanelen / duurzame energie** (enkel Dural — enige met een niet-dak-dienst als kernaanbod)

### Typisch Belgisch-Nederlands registergebruik (echte citaten, ter kennisname — NIET te kopiëren)
CTA-knoppen: *"Offerte aanvragen"*, *"Gratis offerte(!)"*, *"Vraag uw gratis offerte"*, *"Bel [nummer]"*, *"Bel mij terug"*, *"Vrijblijvende offerte"*.
Vertrouwenszinnen: *"Met meer dan 10 jaar ervaring staan wij garant voor kwalitatieve dakoplossingen"* (Elewaut) · *"De baas staat op uw dak"* / *"Wanneer u bij ons een offerte tekent, weet u wie uw werken opvolgt. Ik werk zelf mee op de werf."* (Devlin) · *"Bij Dakwerken Kevin heeft u rechtstreeks contact met Kevin zelf"* (Kevin) · *"Jouw dak, onze specialisatie. Ga voor een zorgeloze renovatie."* (Dural).
Patroon: korte trust-triades (jaar garantie / jaar ervaring / Google-score), directe aanspreekvorm ("u/uw"), persoonlijke eigenaarschap-framing ("de baas op uw dak", "rechtstreeks contact met [voornaam]"), en bijna overal het woord **"vrijblijvend"** naast een offerte-CTA.

### Lokaal-SEO-patroon: stadspagina's vs. eerlijk werkgebied
Twee tegengestelde aanpakken gezien:
1. **Elewaut**: 18 near-identieke stadspagina's, template met woordsubstitutie, geen unieke content per stad — doorway-pageachtig, geen bijbehorend `LocalBusiness`-schema om het te ondersteunen.
2. **Devlin**: **geen enkele stadspagina** — één set sterke dienstpagina's + een simpele, eerlijke werkgebiedlijst in de footer-tekst én in `areaServed`-schema, plus één stadsnaam ("Gavere") consequent in title-tags.
3. Kevin: geen stadspagina's, enkel "-gent" in 2 dienst-slugs. Dural: geen stadspagina's ondanks 6 fysieke vestigingen.

**Aanbeveling voor Ciya** (enige bevestigde locatie: Lokeren, Oost-Vlaanderen — geen stedenlijst, geen straal, geen provincieclaim toegestaan volgens BRIEF.md): volg het **Devlin-model, niet het Elewaut-model**.
- Geen losse stadspagina's fabriceren — dat zou zowel tegen de "geen verzonnen feiten"-regel ingaan als een doorway-risico creëren.
- Wel: "Lokeren" natuurlijk verwerken in title-tags (bv. `Platte daken Lokeren | Ciya Dakwerken`), in de hero/eerste alinea ("Dakwerker in Lokeren en omgeving"), en in `LocalBusiness`-schema (`address` + eventueel een minimale `areaServed` met alleen Lokeren zelf, of gewoon weglaten als er geen bevestigde ruimere regio is).
- Als er ooit wél een bevestigde bredere regio komt, dan Devlin's aanpak overnemen: één tekstzin + schema-array, geen aparte pagina's per plaats.

### Terugkerende FAQ-vragen (verzameld uit de daadwerkelijke FAQ's van Devlin — homepage + 2 servicepagina's — en Dural's servicepagina; Kevin's "FAQ" bevatte geen dak-gerelateerde content en is dus uitgesloten)
1. Welke garantie geeft [bedrijf] op zijn werken?
2. In welke regio/welk gebied werkt [bedrijf]?
3. Doen jullie ook kleine herstellingen of enkel volledige daken?
4. Mogen/kunnen jullie asbest (laten) verwijderen?
5. Hoe snel krijg ik een offerte?
6. Werken jullie met onderaannemers, of voert [bedrijf] alles zelf uit?
7. Met welke dakbedekkingen/materialen werken jullie?
8. Wat is beter voor een plat dak: EPDM of roofing?
9. Hoelang gaat een plat dak (EPDM/roofing) mee?
10. Kan er een dakterras op mijn plat dak?
11. Verwijderen jullie ook de oude dakbedekking?
12. Isoleren jullie het dak mee bij een vernieuwing?
13. Wanneer moet ik mijn (hellend) dak laten renoveren?
14. Is een hellend dak beter dan een plat dak (of omgekeerd)?
15. Wat kost een dakrenovatie / hoe verloopt de prijsopmaak?

### Ranglijst — de 10 belangrijkste dingen die de nieuwe Ciya-site moet hebben om deze vier te verslaan
1. **Foutloze, unieke content op élke pagina** — geen restanten van andere projecten, geen dubbele/verweesde pagina's (leerpunt van Kevin's grootste, meest concrete fout).
2. **Correcte, consistente `RoofingContractor`/`LocalBusiness`-schema** met NAP, `openingHoursSpecification` (indien bevestigd), en — zodra er echte reviews zijn — `aggregateRating`. Nooit cijfers invullen die niet bevestigd zijn (leerpunt: geen van de vier heeft dit voor 100% netjes, Devlin komt het dichtst in de buurt maar is niet perfect).
3. **H1 = dienst/zoekterm, nooit een generieke CTA-zin** (Kevin's fout vermijden).
4. **Herhaalbaar servicepagina-sjabloon**: H1 → korte pitch → "Wat we doen" (met materiaalopties) → proces in stappen → garantie → projectfoto's van díe dienst → FAQ (met `FAQPage`-schema) → cross-sell naar andere diensten → CTA. Dit is exact Devlin's winnende structuur.
5. **Eén offerteformulier-strategie met lage frictie**: naam, telefoon, e-mail, dienst(en) als checkboxes (Dural's aanpak) + optionele foto-upload (Elewaut's sterke punt) — niet Elewaut's 6-verplichte-velden-frictie.
6. **Echte, naam-en-quote testimonials** zodra beschikbaar (niet enkel een cijfer in een widget die niet crawlbaar is) — Devlin's aanpak, niet Elewaut/Kevin's aanpak.
7. **Eerlijke, doorway-vrije locatietekst** gebaseerd op Lokeren + schema, geen gefabriceerde stadspagina's (Devlin-model, niet Elewaut-model) — en sowieso geen stedenlijst verzinnen zolang die niet bevestigd is.
8. **Unieke title + meta description per pagina, altijd ingevuld** (Kevin's grootste structurele SEO-gat, site-breed).
9. **Interne consistentie tussen alle cijfers** overal op de site — hero, trust-strip, meta descriptions, FAQ, schema moeten hetzelfde garantie-/ervaringscijfer tonen (Devlin's 10-vs-15-jaar-slip vermijden).
10. **Mobiel: duidelijke, snelle contactopties boven de vouw** (telefoon-tap-to-call altijd; WhatsApp enkel als het nummer bevestigd WhatsApp-actief is) — geen van de vier heeft een echte vaste (fixed/sticky) onderbalk met bel/whatsapp/offerte-knoppen; dat is een concrete kans om de andere vier op mobiele UX te overtreffen.

// Central site configuration. Only verified facts (see _research/BRIEF.md section 1) live here.

export const site = {
	name: 'Ciya Dakwerken',
	legalName: 'Ciya Ismet BV',
	vatDisplay: 'BE 1014.335.829',
	vatId: 'BE1014335829',
	phoneDisplay: '0484 55 02 52',
	phoneE164: '+32484550252',
	email: 'ciyaismet@hotmail.com',
	address: {
		street: 'Uebergdreef 55',
		postalCode: '9160',
		city: 'Lokeren',
		country: 'BE',
		countryName: 'België',
	},
	facebook: 'https://www.facebook.com/profile.php?id=61567002783249',
	positioning: 'Uw specialist in platte daken',
	positioningAlt: 'Uw betrouwbare dakwerker',
	experience: 'Meer dan 20 jaar ervaring in dakwerken',
	serviceArea: 'heel Oost-Vlaanderen',
	region: 'Oost-Vlaanderen',
	serviceAreaLong: 'heel Oost-Vlaanderen, vanuit Lokeren',
	// Main towns of the province (its six arrondissements) — used as the concrete description of the area.
	serviceCities: ['Gent', 'Aalst', 'Sint-Niklaas', 'Dendermonde', 'Lokeren', 'Oudenaarde', 'Eeklo'],
	trustPoints: [
		'Vakmanschap en hoogwaardige materialen',
		'Persoonlijk advies en maatwerk',
		'Garantie op al onze werkzaamheden',
	],
	whatsapp: {
		enabled: false,
		number: '32484550252',
	},
	// The domain is set ONCE, in astro.config.mjs (`siteUrl`). robots.txt, canonicals, sitemap and schema follow.
	siteUrl: String(import.meta.env.SITE).replace(/\/$/, ''),
	// Google Search Console → "HTML tag" method → paste only the content="…" value here. '' = no tag.
	googleSiteVerification: '',
} as const;

export type Site = typeof site;

export interface FaqItem {
	q: string;
	a: string;
}

// General FAQ shown on the home page (no FAQPage schema there — see BRIEF §4).
export const homeFaq: FaqItem[] = [
	{
		q: 'In welke regio is Ciya Dakwerken actief?',
		a: 'Wij werken in heel Oost-Vlaanderen, vanuit onze thuisbasis in Lokeren: van Gent, Sint-Niklaas en Aalst tot Dendermonde, Oudenaarde en Eeklo.',
	},
	{
		q: 'Werkt Ciya Dakwerken voor nieuwbouw én renovatie?',
		a: 'Ja, wij voeren dakwerken uit bij nieuwbouw, renovatie en onderhoud van platte daken: roofing, EPDM, lichtkoepels en isolatie. Voor hellende daken plaatsen wij onder meer Velux dakramen, dakgoten en zinkwerk.',
	},
	{
		q: 'Hoe vraag ik een offerte aan?',
		a: 'Via het offerteformulier op deze website of telefonisch op 0484 55 02 52. U ontvangt een vrijblijvende offerte, zonder verrassingen achteraf.',
	},
	{
		q: 'Kan ik ook bellen voor een dringend probleem, zoals een lek?',
		a: 'Zeker, bel ons rechtstreeks op 0484 55 02 52. Wij bekijken de situatie en laten u weten wat de vervolgstappen zijn.',
	},
	{
		q: 'Welke materialen gebruikt Ciya Dakwerken?',
		a: 'Wij werken met hoogwaardige materialen, afgestemd op uw dak: onder meer bitumen roofing, EPDM, zink en isolatiemateriaal. Op de dienstenpagina’s leest u meer per type dakwerk.',
	},
];


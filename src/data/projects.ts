// Realisaties — before/after pairs and the single EPDM photo.
// All photos are verified real Ciya Dakwerken work (see _research/BRIEF.md section 1).
// note is factual and minimal: no place, no date, no client name.

import roofingVoor from '../assets/images/plat-dak-roofing-voor.jpg';
import roofingNa from '../assets/images/plat-dak-roofing-na.jpg';
import veluxVoor from '../assets/images/velux-dakraam-voor.jpg';
import veluxNa from '../assets/images/velux-dakraam-na.jpg';
import koepelVoor from '../assets/images/lichtkoepel-voor.jpg';
import koepelNa from '../assets/images/lichtkoepel-na.jpg';
import gootVoor from '../assets/images/zinken-dakgoot-voor.jpg';
import gootNa from '../assets/images/zinken-dakgoot-na.jpg';
import epdmGoot from '../assets/images/epdm-dakrand-pannendak.jpg';
// 2026-09 photo set supplied by the client (1536×2048 originals, resized to 1600px)
import oudDakVoor from '../assets/images/plat-dak-oud-voor-renovatie.jpg';
import isolatiePlaten from '../assets/images/dakisolatie-pir-platen-plat-dak.jpg';
import isolatieDetail from '../assets/images/dakisolatie-pir-platen-detail.jpg';
import isolatiePlaatsing from '../assets/images/dakisolatie-platen-plaatsing.jpg';
import isolatieUitvoering from '../assets/images/dakisolatie-en-roofing-in-uitvoering.jpg';
import roofingDakrand from '../assets/images/plat-dak-nieuwe-roofing-dakrand.jpg';
import roofingZon from '../assets/images/plat-dak-nieuwe-roofing-zon.jpg';
import roofingTussen from '../assets/images/plat-dak-roofing-tussen-gebouwen.jpg';
import roofingTuin from '../assets/images/plat-dak-roofing-tuinzicht.jpg';
import roofingAfwerking from '../assets/images/plat-dak-roofing-afwerking.jpg';
import huisAanbouw from '../assets/images/huis-nieuw-plat-dak-aanbouw-velux.jpg';
import constructie from '../assets/images/dakconstructie-houten-balken.jpg';
import dakterras from '../assets/images/dakterras-houten-vlonders.jpg';
import bestelwagen from '../assets/images/ciya-dakwerken-bestelwagen-werf.jpg';
import opDakconstructie from '../assets/images/ciya-ismet-aan-het-werk-dakconstructie.jpg';

export interface BeforeAfterProject {
	slug: string;
	title: string;
	service: string;
	before: ImageMetadata;
	beforeAlt: string;
	after: ImageMetadata;
	afterAlt: string;
	note: string;
	/** What was done, as visible in the photos — factual, no place/date/client. */
	steps: string[];
}

export interface SingleProject {
	slug: string;
	title: string;
	service: string;
	single: ImageMetadata;
	singleAlt: string;
	note: string;
}

export const beforeAfterProjects: BeforeAfterProject[] = [
	{
		slug: 'renovatie-plat-dak-isolatie',
		title: 'Renovatie plat dak met isolatie',
		service: 'platte-daken',
		before: oudDakVoor,
		beforeAlt: 'Verouderde, verweerde dakbedekking op een plat dak voor de renovatie',
		after: roofingDakrand,
		afterAlt: 'Hetzelfde platte dak na isolatie en nieuwe roofing, met afgewerkte dakrand',
		note: 'Volledige renovatie van een plat dak: oude dakbedekking verwijderd, isolatieplaten geplaatst en nieuwe roofing met afgewerkte dakrand.',
		steps: [
			'Oude, verweerde dakbedekking verwijderd en ondergrond gecontroleerd',
			'Isolatieplaten geplaatst over het volledige dakvlak, tot aan de dakranden',
			'Nieuwe roofing aangebracht',
			'Dakrand en opstanden strak afgewerkt',
		],
	},
	{
		slug: 'roofing-plat-dak',
		title: 'Vernieuwing roofing plat dak',
		service: 'roofing',
		before: roofingVoor,
		beforeAlt: 'Verouderd plat dak met oude bitumen en grind, voor vernieuwing',
		after: roofingNa,
		afterAlt: 'Plat dak na vernieuwing van de roofing',
		note: 'Vernieuwing van de roofing op een plat dak.',
		steps: [
			'Oude roofing en grind verwijderd',
			'Ondergrond gecontroleerd en voorbereid',
			'Nieuwe roofing in meerdere lagen aangebracht',
			'Dakranden en aansluitingen afgewerkt',
		],
	},
	{
		slug: 'velux-dakraam',
		title: 'Plaatsing Velux dakraam',
		service: 'velux-dakramen',
		before: veluxVoor,
		beforeAlt: 'Opening in hellend pannendak voorbereid voor een dakraam',
		after: veluxNa,
		afterAlt: 'Geplaatst Velux dakraam in pannendak',
		note: 'Plaatsing van een Velux dakraam in een hellend dak.',
		steps: [
			'Opening gemaakt in het bestaande pannendak',
			'Dakconstructie rond de opening bijgewerkt',
			'Velux dakraam geplaatst',
			'Aansluiting op de pannen waterdicht afgewerkt',
		],
	},
	{
		slug: 'lichtkoepel',
		title: 'Vervanging lichtkoepel',
		service: 'lichtkoepels',
		before: koepelVoor,
		beforeAlt: 'Oude, verweerde lichtkoepel op een plat dak',
		after: koepelNa,
		afterAlt: 'Nieuwe vlakke lichtkoepel op plat dak',
		note: 'Vervanging van een verouderde lichtkoepel door een nieuwe uitvoering.',
		steps: [
			'Oude, verweerde lichtkoepel verwijderd',
			'Opstand gecontroleerd en voorbereid',
			'Nieuwe vlakke lichtkoepel geplaatst',
			'Aansluiting waterdicht ingewerkt in de dakbedekking',
		],
	},
	{
		slug: 'zinken-dakgoot',
		title: 'Plaatsing zinken dakgoot',
		service: 'dakgoten',
		before: gootVoor,
		beforeAlt: 'Kale houten dakgootrand voor plaatsing van een nieuwe goot',
		after: gootNa,
		afterAlt: 'Nieuw geplaatste zinken dakgoot',
		note: 'Plaatsing van een zinken dakgoot.',
		steps: [
			'Oude goot verwijderd en gootbodem voorbereid',
			'Nieuwe zinken dakgoot op maat geplaatst',
			'Naden en aansluitingen gesoldeerd',
			'Afvoer en aansluiting op het dak afgewerkt',
		],
	},
];

export const singleProjects: SingleProject[] = [
	{
		slug: 'epdm-dakrand',
		title: 'Afwerking dakrand in EPDM',
		service: 'epdm',
		single: epdmGoot,
		singleAlt: 'Dakgoot en dakrand afgewerkt in EPDM op een pannendak',
		note: 'Afwerking van een dakrand en aansluiting in EPDM op een pannendak.',
	},
];

/** Step-by-step story of one project (same roof in every photo). Shown on home and /projecten/. */
export interface StoryStep {
	label: string;
	image: ImageMetadata;
	alt: string;
	text: string;
}

export const projectStory: { title: string; intro: string; service: string; steps: StoryStep[] } = {
	title: 'Van verouderd dak tot afgewerkt plat dak',
	intro:
		'Eén plat dak, drie fases. Zo verloopt een renovatie bij Ciya Dakwerken: eerst de oude dakbedekking eraf, dan isolatie, dan een nieuwe afdichting met nette dakranden.',
	service: 'platte-daken',
	steps: [
		{
			label: 'Voor',
			image: oudDakVoor,
			alt: 'Verouderde, verweerde dakbedekking op een plat dak voor de renovatie',
			text: 'De bestaande dakbedekking is verweerd en aan vernieuwing toe. We controleren de ondergrond en de aansluitingen.',
		},
		{
			label: 'Isolatie',
			image: isolatiePlaten,
			alt: 'Isolatieplaten geplaatst over het volledige platte dak, klaar voor de nieuwe dakbedekking',
			text: 'Isolatieplaten over het volledige dakvlak, strak aangesloten op de dakranden en opstanden.',
		},
		{
			label: 'Na',
			image: roofingDakrand,
			alt: 'Afgewerkt plat dak met nieuwe roofing en strakke dakrand',
			text: 'Nieuwe roofing, netjes afgewerkt aan dakrand en opstand. Dicht, geïsoleerd en klaar voor jaren.',
		},
	],
};

/** Loose gallery of finished and in-progress work — factual captions only. */
export interface GalleryItem {
	image: ImageMetadata;
	alt: string;
	caption: string;
	service: string;
}

export const gallery: GalleryItem[] = [
	{ image: huisAanbouw, alt: 'Woning met nieuw plat dak op de aanbouw en twee dakramen in het hellende dak', caption: 'Nieuw plat dak op een aanbouw', service: 'platte-daken' },
	{ image: roofingZon, alt: 'Nieuwe roofing op een plat dak met afgewerkte dakrand', caption: 'Nieuwe roofing, afgewerkte dakrand', service: 'roofing' },
	{ image: isolatieDetail, alt: 'Isolatieplaten op een plat dak, aangesloten op de opstand', caption: 'Dakisolatie voor de nieuwe dakbedekking', service: 'dakisolatie' },
	{ image: roofingTuin, alt: 'Afgewerkt plat dak met roofing, zicht op de tuin', caption: 'Afgewerkt plat dak in roofing', service: 'roofing' },
	{ image: isolatiePlaatsing, alt: 'Isolatieplaten die geplaatst worden op een plat dak', caption: 'Plaatsing van isolatieplaten', service: 'dakisolatie' },
	{ image: roofingTussen, alt: 'Plat dak met nieuwe roofing tussen twee gebouwen', caption: 'Plat dak tussen twee gebouwen', service: 'roofing' },
	{ image: constructie, alt: 'Houten dakconstructie van een aanbouw tijdens de werken', caption: 'Dakconstructie tijdens de werken', service: 'platte-daken' },
	{ image: isolatieUitvoering, alt: 'Plat dak in uitvoering: isolatieplaten naast al afgewerkte roofing', caption: 'Isolatie en roofing in uitvoering', service: 'dakisolatie' },
	{ image: roofingAfwerking, alt: 'Plat dak met nieuwe roofing en afgewerkte opstand', caption: 'Roofing met afgewerkte opstand', service: 'roofing' },
	{ image: dakterras, alt: 'Dakterras met houten vlonders na afwerking van het dak', caption: 'Dakterras na afwerking', service: 'platte-daken' },
	{ image: opDakconstructie, alt: 'Ciya Ismet op een hellende dakconstructie met onderdak en panlatten, onder een blauwe lucht', caption: 'Aan het werk op een dakconstructie', service: 'dakherstellingen' },
];

export const teamOnSite = {
	image: bestelwagen,
	alt: 'Bestelwagen van Ciya Dakwerken op een werf bij een nieuwe garage',
};

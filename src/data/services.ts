// Services data — single source of truth for /diensten/, home, footer and the [slug].astro template.
// All 11 entries carry full body content (Builder A: epdm, dakherstellingen · Builder B: the other 9).

import roofingVoor from '../assets/images/plat-dak-roofing-voor.jpg';
import roofingNa from '../assets/images/plat-dak-roofing-na.jpg';
import veluxVoor from '../assets/images/velux-dakraam-voor.jpg';
import veluxNa from '../assets/images/velux-dakraam-na.jpg';
import koepelVoor from '../assets/images/lichtkoepel-voor.jpg';
import koepelNa from '../assets/images/lichtkoepel-na.jpg';
import gootVoor from '../assets/images/zinken-dakgoot-voor.jpg';
import gootNa from '../assets/images/zinken-dakgoot-na.jpg';
import epdmGoot from '../assets/images/epdm-dakrand-pannendak.jpg';
import oudDakVoor from '../assets/images/plat-dak-oud-voor-renovatie.jpg';
import roofingDakrand from '../assets/images/plat-dak-nieuwe-roofing-dakrand.jpg';
import roofingZon from '../assets/images/plat-dak-nieuwe-roofing-zon.jpg';
import isolatiePlaten from '../assets/images/dakisolatie-pir-platen-plat-dak.jpg';
import huisAanbouw from '../assets/images/huis-nieuw-plat-dak-aanbouw-velux.jpg';
import roofingTuin from '../assets/images/plat-dak-roofing-tuinzicht.jpg';

export interface FaqItem {
	q: string;
	a: string;
}

export interface BeforeAfterBlock {
	before: ImageMetadata;
	beforeAlt: string;
	after: ImageMetadata;
	afterAlt: string;
	label: string;
}

export interface ServiceImages {
	hero?: ImageMetadata;
	heroAlt?: string;
	beforeAfter?: BeforeAfterBlock;
}

export interface Service {
	slug: string;
	name: string;
	/** Icon name from Icon.astro, used in lists, dropdown and footer. */
	icon: string;
	short: string;
	eyebrow: string;
	h1: string;
	intro: string;
	problems: string[];
	benefits: string[];
	solutions: string[];
	approach: string[];
	body: string[] | null;
	faq: FaqItem[];
	related: string[];
	images: ServiceImages;
	seo: { title: string; description: string };
}

export const defaultApproach = [
	'U neemt contact op via telefoon of het offerteformulier.',
	'Wij bekijken de situatie — ter plaatse of op basis van foto’s en uw beschrijving.',
	'U ontvangt een vrijblijvende offerte met een duidelijke omschrijving van de werken.',
	'Na uw akkoord plannen we de uitvoering in en werken we het dak vakkundig af.',
];

export const services: Service[] = [
	{
		slug: 'platte-daken',
		icon: 'roof',
		name: 'Platte daken',
		short: 'Roofing, EPDM, lichtkoepels en isolatie voor uw platte dak.',
		eyebrow: 'Dakwerken · Platte daken',
		h1: 'PLATTE DAKEN',
		intro:
			'Een plat dak vraagt een andere aanpak dan een hellend dak. Voor nieuwbouw, renovatie of onderhoud van uw platte dak combineren wij afdichting, lichtinval en isolatie tot één sluitend geheel.',
		problems: [
			'Uw platte dak is verouderd of vertoont blaasvorming in de afdichting.',
			'U wilt weten welk materiaal het beste past bij uw dak: roofing of EPDM.',
			'U combineert een dakvernieuwing met extra lichtinval of isolatie.',
			'Er blijft water staan op het dak na regenweer.',
			'U twijfelt of een herstelling volstaat of dat het dak aan vernieuwing toe is.',
		],
		benefits: [
			'Eén aanspreekpunt voor afdichting, lichtkoepels en isolatie',
			'Advies op maat van uw dakopbouw en budget',
			'Afwerking die aansluit op de rest van uw dak',
			'Overzicht over het volledige dakpakket, van ondergrond tot afwatering',
			'Eerlijk advies over wat nodig is en wat nog kan wachten',
		],
		solutions: [
			'Roofing (bitumen) voor een beproefde, stevige afdichting',
			'EPDM voor een flexibel rubberen membraan met weinig naden',
			'Lichtkoepels en dakramen voor extra daglicht op een plat dak',
			'Dakisolatie, los of gecombineerd met de vernieuwing van de afdichting',
		],
		approach: defaultApproach,
		body: [
			'Een plat dak oogt eenvoudig, maar de afwerking bepaalt of het tientallen jaren dicht blijft of binnen een paar jaar weer voor problemen zorgt. Platte daken zijn de kern van waar Ciya Dakwerken voor staat: van de afdichting zelf tot alle details errond.',
			'Of het om nieuwbouw of renovatie gaat, de aanpak start telkens bij dezelfde vraag: wat is de bestaande opbouw, en welk materiaal past daarbij? Bij een nieuw dak is er ruimte om de opbouw van onderisolatie tot afdichting in één keer goed te plannen. Bij een bestaand dak bekijken we eerst de staat van de ondergrond, om te bepalen of er meteen over geplaatst kan worden of dat er voorbereidend werk nodig is.',
			'De keuze van het afdichtingsmateriaal weegt door op hoe het dak zich de komende jaren gedraagt. Bitumen roofing is een beproefde, stevige oplossing die in banen wordt aangebracht en dichtgebrand of gekleefd. EPDM is een rubberen membraan, flexibeler in de verwerking en met minder naden te leggen, wat vooral voordelig is bij een dak met veel hoeken, opstanden of doorvoeren. Geen van beide is standaard de betere keuze — het hangt af van de vorm van uw dak, de ondergrond en uw budget.',
			'Een plat dak hoeft geen donkere kamer eronder te betekenen. Een lichtkoepel of een vlak dakraam brengt daglicht tot diep in de ruimte en wordt waterdicht ingewerkt in de afdichting. Staat er toch een vernieuwing van de roofing of EPDM gepland, dan is dat meteen een geschikt moment om een verweerde lichtkoepel te vervangen of een nieuwe opening te voorzien.',
			'Hetzelfde geldt voor isolatie: wanneer de afdichting van een plat dak vernieuwd wordt, ligt het dakoppervlak toch open. Dat is doorgaans het meest praktische moment om meteen te isoleren, zonder dat u er nadien nog een aparte werf voor hoeft in te plannen.',
			'Wat de kwaliteit van een plat dak op langere termijn het meest bepaalt, zijn de details: de aansluiting rond een schouw of doorvoer, de overgang naar de dakrand, de afwerking bij de dakgoot. Precies op die plekken ontstaan de meeste lekken wanneer werk gehaast gebeurt. Bij Ciya Dakwerken nemen we daar bewust de tijd voor, ook wanneer het maar om een klein onderdeel van een groter project gaat.',
			'Omdat afdichting, lichtinval en isolatie vaak op hetzelfde dak samenkomen, werkt u bij Ciya Dakwerken met één aanspreekpunt voor het volledige project: vooraf een duidelijke offerte, tijdens de uitvoering vakkundig werk, en achteraf garantie op wat we hebben geplaatst.',
		],
		faq: [
			{
				q: 'Wat is het verschil tussen roofing en EPDM voor mijn plat dak?',
				a: 'Roofing wordt in banen aangebracht en dichtgebrand of gekleefd; EPDM is een rubbermembraan dat in grotere stukken wordt gelegd en zich beter voegt naar hoeken en doorvoeren. Bij een dak met veel details is EPDM vaak praktischer; bij een rechttoe-rechtaan dak volstaat roofing net zo goed. We geven advies op basis van uw dak, ter plaatse.',
			},
			{
				q: 'Kan isolatie gecombineerd worden met de vernieuwing van mijn plat dak?',
				a: 'Ja. Wanneer de afdichting van een plat dak toch vernieuwd wordt, is dat vaak een goed moment om meteen te isoleren. Wij bekijken samen met u wat haalbaar is voor uw dak.',
			},
			{
				q: 'Hoe lang gaat een plat dak mee?',
				a: 'De levensduur hangt sterk af van het gekozen materiaal, de plaatsing en het onderhoud. Met correcte plaatsing en regelmatige controle gaat een plat dak doorgaans lang mee.',
			},
			{
				q: 'Kan er een lichtkoepel of dakraam toegevoegd worden bij een dakvernieuwing?',
				a: 'Ja, dat combineren we regelmatig. Een nieuwe of vernieuwde opening wordt mee waterdicht ingewerkt in de afdichting, zodat het geheel één samenhangend geheel vormt.',
			},
			{
				q: 'Wat als er water blijft staan op mijn plat dak?',
				a: 'Een beetje water na een regenbui is normaal, maar blijft het lang staan, dan wijst dat meestal op een gebrekkige afschuiving of een verstopte afvoer. Wij bekijken de oorzaak en het effect op de afdichting op langere termijn.',
			},
			{
				q: 'Moet ik bij één probleem meteen het volledige dak vernieuwen?',
				a: 'Niet noodzakelijk. Een lokaal probleem is vaak apart op te lossen. Is de algemene staat van de afdichting sterk verouderd, dan bespreken we eerlijk of een vernieuwing op termijn de betere investering is.',
			},
		],
		related: ['epdm', 'roofing', 'dakisolatie'],
		images: {
			hero: huisAanbouw,
			heroAlt: 'Woning met nieuw plat dak op de aanbouw en dakramen in het hellende dak',
			beforeAfter: {
				before: oudDakVoor,
				beforeAlt: 'Verouderde, verweerde dakbedekking op een plat dak voor de renovatie',
				after: roofingDakrand,
				afterAlt: 'Hetzelfde platte dak na isolatie en nieuwe roofing, met afgewerkte dakrand',
				label: 'Realisatie · Renovatie plat dak',
			},
		},
		seo: {
			title: 'Platte Daken in Lokeren | Ciya Dakwerken',
			description:
				'Roofing, EPDM, lichtkoepels en isolatie voor uw platte dak in Lokeren en omgeving. Persoonlijk advies en vakwerk. Vraag een vrijblijvende offerte aan.',
		},
	},
	{
		slug: 'epdm',
		icon: 'layers',
		name: 'EPDM',
		short: 'Flexibele, duurzame dakbedekking in rubber voor platte en licht hellende daken.',
		eyebrow: 'Dakwerken · EPDM',
		h1: 'EPDM DAKBEDEKKING',
		intro:
			'EPDM is een rubberen dakmembraan dat zich uitstekend leent voor platte en licht hellende daken. Flexibel in de verwerking, met weinig naden en bestand tegen ons klimaat.',
		problems: [
			'Uw bitumen roofing vertoont scheuren, blaren of lekt.',
			'U bent op zoek naar een afdichting met zo weinig mogelijk naden.',
			'Uw plat dak heeft een complexe vorm met veel hoeken, opstanden of doorvoeren.',
			'U wilt een dakbedekking die weinig onderhoud vraagt.',
		],
		benefits: [
			'Flexibel materiaal, ook geschikt voor complexe daken',
			'Weinig naden dankzij grote baanbreedtes',
			'Bestand tegen zon, regen en temperatuurschommelingen',
			'Weinig onderhoud na correcte plaatsing',
			'Inzetbaar bij nieuwbouw én bij renovatie van een bestaand dak',
		],
		solutions: [
			'EPDM-membraan in banen, gelast of gelijmd op maat van uw dak',
			'Volledig verlijmde of mechanisch bevestigde plaatsing, afhankelijk van de ondergrond',
			'Zorgvuldige afwerking rond schouwen, dakramen, lichtkoepels en doorvoeren',
			'Aansluiting op dakranden en dakgoten in één samenhangend geheel',
			'Toepasbaar op houten, betonnen of bestaande ondergrond na controle',
		],
		approach: [
			'Wij bekijken uw dak: oppervlakte, ondergrond, doorvoeren en aansluitingen.',
			'U krijgt advies over de opbouw en een vrijblijvende offerte.',
			'Na uw akkoord plaatsen wij het EPDM-membraan en werken we alle randen en doorvoeren netjes af.',
			'Bij oplevering overlopen we het resultaat samen met u.',
		],
		body: [
			'EPDM staat voor ethyleen-propyleen-dieenrubber, een synthetisch rubber dat al decennialang wordt gebruikt als dakbedekking voor platte en licht hellende daken. Het materiaal wordt geleverd in grote banen, waardoor een dak vaak met weinig of geen naden kan worden afgewerkt. Minder naden betekent minder potentiële zwakke plekken, en dat is precies waarom EPDM zo geschikt is voor daken met een complexe vorm, veel doorvoeren of moeilijke aansluitingen.',
			'Bij Ciya Dakwerken zetten we EPDM in bij nieuwbouw, maar minstens even vaak bij de vernieuwing van een bestaand plat dak. Is uw huidige roofing versleten, blaast de afdichting op of ziet u scheurvorming, dan is dat een goed moment om over te stappen op EPDM. We bekijken eerst de bestaande opbouw: is de ondergrond nog stabiel en droog genoeg, dan kan er in veel gevallen direct over geplaatst worden. Is dat niet het geval, dan bespreken we samen met u wat wel nodig is voordat we het membraan aanbrengen.',
			'De plaatsing zelf gebeurt op maat van uw dak. Afhankelijk van de ondergrond en de vorm van het dak kiezen we voor een volledig verlijmde bevestiging of een mechanische bevestiging met de juiste afwerkprofielen. Bijzondere aandacht gaat naar de details: de aansluiting rond een schouw, een lichtkoepel of een dakraam, de overgang naar de dakrand en de aansluiting op de dakgoot. Net op die plaatsen ontstaan de meeste lekken wanneer werk niet zorgvuldig gebeurt, en daarom nemen we daar de tijd voor.',
			'EPDM gaat doorgaans meerdere decennia mee, mits correcte plaatsing en een degelijke ondergrond. De levensduur hangt af van factoren zoals de kwaliteit van de plaatsing, de belasting van het dak en het onderhoud dat u eraan besteedt. Belangrijk is dat EPDM nauwelijks gevoelig is voor UV-straling en goed bestand is tegen de wisselende weersomstandigheden die we hier kennen: van felle zon tot vorst en langdurige regen. Regelmatige, eenvoudige controle — bijvoorbeeld na een storm of bij het reinigen van de dakgoot — helpt om eventuele schade tijdig op te merken.',
			'Twijfelt u tussen EPDM en bitumen roofing? Beide zijn beproefde oplossingen, maar ze verschillen in verwerking en flexibiliteit. Roofing wordt in banen dichtgebrand of gekleefd en is een stevige, vertrouwde keuze voor rechttoe-rechtaan daken. EPDM is flexibeler in de verwerking en wint aan waarde naarmate een dak meer hoeken, opstanden of doorvoeren telt. Bij Ciya Dakwerken bekijken we uw dak ter plaatse en geven we eerlijk advies: niet het duurste of het nieuwste materiaal, maar wat het beste past bij uw situatie.',
			'Een beschadiging in een EPDM-dak is in de meeste gevallen te herstellen zonder het hele dak te vervangen. We sporen de oorzaak van het lek op, herstellen de betrokken zone en controleren de omliggende aansluitingen mee. Bij twijfel over de algemene staat van het dak geven we u eerlijk mee of een herstelling volstaat, of dat vernieuwing op termijn een betere investering is.',
			'Of het nu gaat om een volledige plaatsing bij nieuwbouw, de vernieuwing van een verouderd plat dak of de herstelling van een lokaal probleem: bij Ciya Dakwerken combineren we vakmanschap met hoogwaardige materialen, en geven we persoonlijk advies op maat van uw dak. U krijgt een duidelijke offerte, zonder verrassingen achteraf, en garantie op de uitgevoerde werkzaamheden.',
		],
		faq: [
			{
				q: 'Hoe lang gaat EPDM mee?',
				a: 'EPDM gaat doorgaans meerdere decennia mee, mits correcte plaatsing en een geschikte ondergrond. De exacte levensduur hangt af van de kwaliteit van de uitvoering, de belasting van het dak en het onderhoud.',
			},
			{
				q: 'Kan EPDM geplaatst worden op een bestaand dak?',
				a: 'In veel gevallen wel, als de bestaande ondergrond stabiel en droog genoeg is. Is dat niet het geval, dan bekijken we samen met u welke voorbereiding nodig is voordat we het membraan plaatsen.',
			},
			{
				q: 'Is EPDM geschikt voor elk plat dak?',
				a: 'EPDM is inzetbaar op de meeste platte en licht hellende daken, en is door zijn flexibiliteit bijzonder geschikt voor daken met veel hoeken, opstanden of doorvoeren. We bekijken uw dak ter plaatse om te bevestigen of het de juiste keuze is.',
			},
			{
				q: 'Wat is het verschil tussen EPDM en bitumen roofing?',
				a: 'Roofing wordt in banen dichtgebrand of gekleefd en is een stevige, vertrouwde afdichting. EPDM is flexibeler in de verwerking en vraagt minder naden, wat vooral voordelig is bij complexere daken. Welke oplossing het beste past, bespreken we op basis van uw dak.',
			},
			{
				q: 'Kan een lek in een EPDM-dak hersteld worden?',
				a: 'Ja, een lokale beschadiging is meestal te herstellen zonder het volledige dak te vervangen. We sporen de oorzaak op, herstellen de betrokken zone en controleren de aansluitingen in de omgeving mee.',
			},
			{
				q: 'Vraagt EPDM veel onderhoud?',
				a: 'Nee, EPDM vraagt over het algemeen weinig onderhoud. Een regelmatige visuele controle en het vrijhouden van afvoeren en dakgoten volstaan meestal om problemen tijdig op te merken.',
			},
		],
		related: ['platte-daken', 'roofing', 'dakherstellingen'],
		images: {
			hero: epdmGoot,
			heroAlt: 'Dakgoot en dakrand afgewerkt in EPDM op een pannendak',
		},
		seo: {
			title: 'EPDM Dakbedekking Lokeren | Ciya Dakwerken',
			description:
				'EPDM-dakbedekking voor platte daken in Lokeren en omgeving. Flexibel, duurzaam en vakkundig geplaatst. Vraag vandaag een vrijblijvende offerte aan.',
		},
	},
	{
		slug: 'roofing',
		icon: 'roll',
		name: 'Roofing',
		short: 'Bitumen dakbedekking voor platte daken, bij nieuwbouw of vernieuwing.',
		eyebrow: 'Dakwerken · Roofing',
		h1: 'ROOFING',
		intro:
			'Roofing op bitumen is een beproefde, stevige afdichting voor platte daken. Wij plaatsen en vernieuwen roofing bij nieuwbouw, renovatie en onderhoud.',
		problems: [
			'Uw roofing is verouderd, vertoont blaren of begint te lekken.',
			'U bouwt of verbouwt en zoekt een degelijke afdichting voor uw plat dak.',
			'U merkt vochtplekken binnen na regenweer.',
			'Er zitten losse naden of scheuren in de bovenlaag van uw dak.',
			'U wilt een dakbedekking die haar waarde al jaren bewijst.',
		],
		benefits: [
			'Beproefde, stevige afdichting voor platte daken',
			'Geschikt voor nieuwbouw en renovatie',
			'Zorgvuldige afwerking rond dakranden en doorvoeren',
			'Meerlaagse opbouw voor extra zekerheid',
			'Vakkundige plaatsing volgens de regels van het vak',
		],
		solutions: [
			'Bitumen roofing in meerdere lagen, dichtgebrand of gekleefd',
			'Afwerking van dakranden, opstanden en doorvoeren',
			'Aansluiting op dakgoten en aanpalende dakdelen',
			'Herstelling of volledige vernieuwing van een bestaande roofing',
		],
		approach: defaultApproach,
		body: [
			'Roofing is al decennialang de klassieke keuze voor de afdichting van een plat dak, en niet zonder reden: het is een stevig, beproefd systeem dat zich in de praktijk telkens weer bewijst. Bij Ciya Dakwerken plaatsen en vernieuwen we roofing zowel bij nieuwbouw als bij de renovatie van een bestaand dak.',
			'Het materiaal wordt in banen bitumen aangebracht, doorgaans in meerdere lagen die stuk voor stuk dichtgebrand of gekleefd worden. Die opbouw in lagen zorgt voor extra zekerheid: raakt de bovenste laag beschadigd, dan beschermt de onderliggende laag het dak nog altijd. Precies daarom kiezen veel eigenaars van een plat dak nog steeds voor roofing, ook naast nieuwere systemen zoals EPDM.',
			'De uitvoering vraagt vakmanschap. Een baan die niet goed is dichtgebrand, laat op termijn los; een naad die te dun is overlapt, kan gaan lekken. Wij werken de banen zorgvuldig af, met extra aandacht voor de dakrand, opstanden rond schouwen of doorvoeren, en de aansluiting op de dakgoot — net de plekken waar een roofing het meest te verduren krijgt.',
			'Hoe lang een roofing meegaat, hangt af van meerdere factoren: de kwaliteit van de plaatsing, de ondergrond waarop ze ligt, de blootstelling aan zon en weer, en het onderhoud dat het dak krijgt. Met een correcte uitvoering en een stabiele ondergrond gaat bitumen roofing doorgaans lang mee, al blijft periodieke controle aan te raden, zeker na een storm.',
			'Twijfelt u tussen roofing en EPDM? Beide zijn degelijke oplossingen voor een plat dak, maar ze verschillen in verwerking. Roofing wordt laag voor laag dichtgebrand of gekleefd en is een vertrouwde keuze voor een rechttoe-rechtaan dakvlak. EPDM wordt in grotere banen gelegd en is flexibeler bij een dak met veel hoeken of doorvoeren. Wij bekijken uw dak en adviseren zonder omwegen welke oplossing het beste past.',
			'Niet elk probleem aan een roofing vraagt een volledige vernieuwing. Blaarvorming of een scheur op een beperkte oppervlakte is vaak lokaal te herstellen, zonder het hele dakvlak open te leggen. Is de algemene staat van de roofing sterk verouderd of komen problemen op meerdere plaatsen terug, dan is vernieuwing op termijn de logische keuze — en dat zeggen we u eerlijk.',
			'Bij Ciya Dakwerken combineren we die ervaring met persoonlijk advies: u krijgt een duidelijke offerte voor u iets beslist, vakkundige uitvoering tijdens de werken, en garantie op de geplaatste roofing achteraf.',
		],
		faq: [
			{
				q: 'Wat is het verschil tussen roofing en EPDM?',
				a: 'Roofing wordt laag voor laag dichtgebrand of gekleefd; EPDM is een rubbermembraan dat in grotere banen wordt gelegd en zich beter voegt naar een dak met veel hoeken of doorvoeren. Beide zijn degelijke keuzes — welke het beste past, hangt af van de vorm van uw dak.',
			},
			{
				q: 'Hoe lang gaat roofing mee?',
				a: 'De levensduur hangt af van de kwaliteit van de plaatsing, de ondergrond en het onderhoud. Met correcte uitvoering gaat roofing doorgaans lang mee.',
			},
			{
				q: 'Kan roofing hersteld worden zonder volledige vernieuwing?',
				a: 'In veel gevallen wel. Wij bekijken de schade en de algemene staat van het dak en geven u eerlijk advies: herstelling of vernieuwing.',
			},
			{
				q: 'Hoeveel lagen bitumen worden er aangebracht?',
				a: 'Dat hangt af van de bestaande opbouw en de staat van de ondergrond. Doorgaans wordt roofing in meerdere lagen aangebracht voor extra zekerheid; we bespreken de exacte opbouw op basis van uw dak.',
			},
			{
				q: 'Kan roofing geplaatst worden over een bestaande roofing?',
				a: 'Soms wel, als de ondergrond nog droog en stabiel genoeg is. In andere gevallen is het beter om eerst de oude laag te verwijderen. Wij beoordelen dit ter plaatse.',
			},
			{
				q: 'Wat veroorzaakt blaren in een roofing?',
				a: 'Blaren ontstaan meestal doordat vocht of lucht onder de afdichting is ingesloten en uitzet bij opwarming. Kleine blaren zijn vaak onschuldig, maar verdienen wel opvolging — wij controleren dit mee bij een bezoek.',
			},
		],
		related: ['platte-daken', 'epdm', 'dakherstellingen'],
		images: {
			hero: roofingZon,
			heroAlt: 'Nieuwe roofing op een plat dak met afgewerkte dakrand',
			beforeAfter: {
				before: oudDakVoor,
				beforeAlt: 'Verouderde, verweerde dakbedekking op een plat dak voor de renovatie',
				after: roofingDakrand,
				afterAlt: 'Hetzelfde platte dak na isolatie en nieuwe roofing, met afgewerkte dakrand',
				label: 'Realisatie · Renovatie plat dak',
			},
		},
		seo: {
			title: 'Roofing Plat Dak Lokeren | Ciya Dakwerken',
			description:
				'Plaatsing en vernieuwing van roofing op platte daken in Lokeren en omgeving. Degelijk vakwerk en persoonlijk advies. Vraag een vrijblijvende offerte aan.',
		},
	},
	{
		slug: 'lichtkoepels',
		icon: 'dome',
		name: 'Lichtkoepels',
		short: 'Meer daglicht in huis met een nieuwe of vernieuwde lichtkoepel.',
		eyebrow: 'Dakwerken · Lichtkoepels',
		h1: 'LICHTKOEPELS',
		intro:
			'Een lichtkoepel brengt daglicht tot diep in huis en houdt tegelijk uw plat dak dicht. Wij plaatsen en vervangen lichtkoepels op maat van uw dak.',
		problems: [
			'Uw bestaande lichtkoepel is verweerd, vergeeld of lekt.',
			'U wilt meer daglicht in een ruimte zonder ramen.',
			'U vernieuwt uw plat dak en wilt de lichtkoepel meteen mee aanpakken.',
			'Condensvorming aan de binnenzijde van de koepel stoort u.',
			'De koepel is beschadigd na een storm of vallende tak.',
		],
		benefits: [
			'Meer daglicht in de ruimte eronder',
			'Waterdichte aansluiting op uw platte dak',
			'Afwerking op maat van de bestaande opening',
			'Keuze uit vaste of ventilerende uitvoeringen',
			'Directe verbetering van de lichtinval zonder grote verbouwing',
		],
		solutions: [
			'Vervanging van een verouderde koepel door een nieuwe uitvoering',
			'Waterdichte aansluiting op de roofing of EPDM van uw dak',
			'Advies over vaste of ventilerende lichtkoepels',
			'Aanpassing van de opening bij een gewijzigde maatvoering',
		],
		approach: defaultApproach,
		body: [
			'Een lichtkoepel doet twee dingen tegelijk: daglicht binnenbrengen en het dak op die plek dicht houden. Wanneer een van die twee faalt — te weinig licht of een lekkende aansluiting — valt dat snel op. Wij plaatsen en vervangen lichtkoepels op maat van uw dak.',
			'Meestal gaat het om vervanging: een bestaande koepel die door de jaren heen vergeeld, bros of ondicht is geworden. Kunststof koepels verweren onder invloed van zon en temperatuurschommelingen, en op termijn tast dat zowel de lichtdoorlaat als de waterdichtheid aan. Wij verwijderen de oude koepel, controleren de opening en de aansluiting op het dak, en plaatsen een nieuwe uitvoering die aansluit op de bestaande maatvoering.',
			'De aansluiting rond een lichtkoepel is minstens zo belangrijk als de koepel zelf. Waar de opening in het dakvlak overgaat naar de roofing of EPDM, moet de afwerking volledig waterdicht zijn — net zoals bij elke andere doorvoer in een plat dak. Wij werken die overgang zorgvuldig af met de gepaste randprofielen, zodat de koepel geen zwakke plek in de afdichting wordt.',
			'Er bestaan verschillende uitvoeringen van lichtkoepels, met verschillen in isolatiewaarde en al dan niet een ventilerende functie. Een ventilerende koepel kan bijvoorbeeld helpen om een ruimte te verluchten zonder dat u een raam hoeft te openen. Welke uitvoering het beste past, hangt af van de ruimte eronder en uw wensen — daar geven we u graag advies over.',
			'Vernieuwt u de roofing of EPDM van uw plat dak, dan is dat een geschikt moment om een verouderde lichtkoepel meteen mee te vervangen. Zo wordt de aansluiting in één beweging opnieuw en waterdicht afgewerkt, in plaats van een nieuwe koepel later los te moeten inwerken in een pas vernieuwde afdichting.',
			'Een lekkende lichtkoepel wijst niet altijd op een defecte koepel zelf. Vaak zit het probleem bij de aansluiting of een verouderde afdichting eromheen. Wij sporen de oorzaak op voor we een oplossing voorstellen, zodat u niet betaalt voor een vervanging die het probleem niet oplost.',
			'Bij Ciya Dakwerken combineren we deze werken met dezelfde zorg als een volledige dakvernieuwing: persoonlijk advies, een duidelijke offerte en een vakkundige, waterdichte afwerking.',
		],
		faq: [
			{
				q: 'Kan een lichtkoepel vervangen worden zonder het hele dak open te leggen?',
				a: 'In veel gevallen wel, als de omliggende afdichting nog in goede staat is. Wij bekijken dit ter plaatse.',
			},
			{
				q: 'Zijn lichtkoepels goed geïsoleerd?',
				a: 'Er bestaan verschillende uitvoeringen met verschillen in isolatiewaarde. We bespreken graag welke optie past bij uw dak en wensen.',
			},
			{
				q: 'Kan een lichtkoepel gaan lekken?',
				a: 'Zoals elke dakopening vraagt een lichtkoepel een zorgvuldige, waterdichte aansluiting. Bij correcte plaatsing en onderhoud is de kans op lekkage klein.',
			},
			{
				q: 'Wat is het verschil tussen een vaste en een ventilerende lichtkoepel?',
				a: 'Een vaste koepel laat enkel licht binnen; een ventilerende uitvoering kan ook geopend worden om een ruimte te verluchten. Welke optie het beste past, hangt af van de ruimte eronder en uw wensen.',
			},
			{
				q: 'Hoe lang gaat een lichtkoepel mee?',
				a: 'Dat hangt af van het materiaal, de blootstelling aan zon en de kwaliteit van de plaatsing. Kunststof koepels verweren na verloop van tijd; bij tekenen van vergeling of broosheid bekijken we samen of vervanging aangewezen is.',
			},
			{
				q: 'Kan de maat van een bestaande opening aangepast worden bij vervanging?',
				a: 'In veel gevallen kunnen we een nieuwe koepel afstemmen op de bestaande opening. Wilt u meer lichtinval, dan bespreken we of en hoe de opening aangepast kan worden.',
			},
		],
		related: ['velux-dakramen', 'platte-daken', 'dakisolatie'],
		images: {
			hero: koepelNa,
			heroAlt: 'Nieuwe vlakke lichtkoepel op plat dak',
			beforeAfter: {
				before: koepelVoor,
				beforeAlt: 'Oude, verweerde lichtkoepel op een plat dak',
				after: koepelNa,
				afterAlt: 'Nieuwe vlakke lichtkoepel op plat dak',
				label: 'Realisatie · Lichtkoepel',
			},
		},
		seo: {
			title: 'Lichtkoepels Plaatsen Lokeren | Ciya Dakwerken',
			description:
				'Plaatsing en vervanging van lichtkoepels op platte daken in Lokeren en omgeving. Meer daglicht, waterdicht afgewerkt. Vraag een vrijblijvende offerte aan.',
		},
	},
	{
		slug: 'velux-dakramen',
		icon: 'window',
		name: 'Velux & dakramen',
		short: 'Dakramen voor extra lichtinval en verluchting in een hellend dak.',
		eyebrow: 'Dakwerken · Velux en dakramen',
		h1: 'VELUX EN DAKRAMEN',
		intro:
			'Een dakraam brengt licht en lucht tot in de zolderruimte. Wij plaatsen dakramen in een hellend dak, inclusief een waterdichte afwerking rond de opening.',
		problems: [
			'Uw zolder of dakverdieping is donker of slecht verlucht.',
			'U verbouwt de zolder tot leefruimte en wilt daglicht toevoegen.',
			'Een bestaand dakraam lekt of is aan vervanging toe.',
			'Er vormt zich condens rond het dakraam.',
			'U wilt een raam met zonwering of extra bediening toevoegen.',
		],
		benefits: [
			'Meer daglicht en verluchting op zolder',
			'Zorgvuldige, waterdichte inwerking in het pannendak',
			'Advies over plaatsing en type dakraam',
			'Directe meerwaarde voor een zolder- of dakverdieping',
			'Nette afwerking langs binnen- en buitenzijde',
		],
		solutions: [
			'Plaatsing van dakramen in een bestaand of nieuw pannendak',
			'Waterdichte aansluiting rond de opening met de juiste randprofielen',
			'Herstelling of vervanging van bestaande dakramen',
			'Advies over de gepaste positie en grootte voor voldoende lichtinval',
		],
		approach: defaultApproach,
		body: [
			'Een zolder zonder daglicht voelt al snel aan als opslagruimte, ook al is de ruimte groot genoeg om te wonen of te werken. Een dakraam verandert dat: het brengt daglicht en frisse lucht tot in de nok, zonder dat u de dakstructuur ingrijpend hoeft aan te passen.',
			'De plaatsing van een dakraam betekent een opening maken in een bestaand pannendak, en dat vraagt precisie. Wij bepalen samen met u de gepaste positie en grootte, rekening houdend met de indeling van de ruimte eronder en de opbouw van het dak — sporen, panlatten en de bestaande pannen moeten er allemaal correct rond aansluiten.',
			'Rond elke opening in een hellend dak gebruiken we de gepaste randprofielen en een zorgvuldige inwerking in de onderliggende folie of het onderdak, zodat de aansluiting waterdicht blijft bij elke weersomstandigheid. Een dakraam dat niet correct is ingewerkt, is een van de meest voorkomende oorzaken van een lek op zolder — precies daarom nemen we voor die afwerking de tijd.',
			'Verbouwt u de zolder tot een volwaardige leefruimte, dan is dat vaak het moment om meteen na te denken over het aantal ramen, hun positie ten opzichte van de zon, en eventuele opties zoals zonwering. Te veel licht aan de zuidkant kan een ruimte in de zomer snel doen opwarmen; we bespreken dit graag mee in het advies.',
			'Ook een bestaand dakraam kan na verloop van tijd voor problemen zorgen: een lekkende aansluiting, een verouderde afdichting rond het kader, of beschadiging na storm. Ligt de oorzaak bij de randafwerking, dan is een herstelling vaak voldoende. Is het raam zelf beschadigd of sterk verouderd, dan bespreken we een vervanging.',
			'Condensvorming rond een dakraam wijst meestal niet op een lek, maar op vochtige lucht die afkoelt tegen het glas of het kader — vaak een teken dat de ruimte onvoldoende verlucht wordt. Wij bekijken samen met u of de plaatsing, isolatie of verluchting daarbij een rol speelt.',
			'Bij Ciya Dakwerken plaatsen we dakramen met dezelfde zorg als elke andere opening in een dak: vakkundig ingewerkt, waterdicht afgewerkt en met een duidelijke offerte vooraf.',
		],
		faq: [
			{
				q: 'Kan een dakraam in elk hellend dak geplaatst worden?',
				a: 'In de meeste gevallen wel. De haalbaarheid hangt af van de dakconstructie en de bedekking. Wij bekijken dit graag ter plaatse.',
			},
			{
				q: 'Is de plaatsing van een dakraam waterdicht?',
				a: 'Ja, rond elke opening gebruiken we de gepaste randprofielen en afwerking om een waterdichte aansluiting te garanderen op de rest van het dak.',
			},
			{
				q: 'Kan een lekkend dakraam hersteld worden?',
				a: 'Vaak wel, als de oorzaak bij de aansluiting rond het raam ligt. Is het raam zelf beschadigd, dan bespreken we een herstelling of vervanging.',
			},
			{
				q: 'Hoeveel dakramen kan ik plaatsen op mijn zolder?',
				a: 'Dat hangt af van de grootte van de ruimte, de dakconstructie en uw wensen op vlak van lichtinval. We bekijken dit graag samen met u ter plaatse.',
			},
			{
				q: 'Waardoor ontstaat condens rond een dakraam?',
				a: 'Condens ontstaat meestal doordat vochtige binnenlucht afkoelt tegen het glas of kader, vaak bij onvoldoende verluchting. Dit wijst niet noodzakelijk op een lek, maar verdient wel aandacht.',
			},
			{
				q: 'Kan een dakraam voorzien worden van zonwering?',
				a: 'Ja, dat is een optie bij zowel nieuwe plaatsingen als vervangingen. We bespreken graag welke mogelijkheden passen bij uw dakraam en ruimte.',
			},
		],
		related: ['lichtkoepels', 'dakisolatie', 'dakherstellingen'],
		images: {
			hero: huisAanbouw,
			heroAlt: 'Woning met twee dakramen in het hellende dak en een nieuw plat dak op de aanbouw',
			beforeAfter: {
				before: veluxVoor,
				beforeAlt: 'Opening in hellend pannendak voorbereid voor een dakraam',
				after: veluxNa,
				afterAlt: 'Geplaatst Velux dakraam in pannendak',
				label: 'Realisatie · Dakraam',
			},
		},
		seo: {
			title: 'Velux en Dakramen Lokeren | Ciya Dakwerken',
			description:
				'Plaatsing van Velux dakramen in Lokeren en omgeving. Meer daglicht op zolder, waterdicht afgewerkt. Vraag vandaag een vrijblijvende offerte aan.',
		},
	},
	{
		slug: 'zinkwerken',
		icon: 'corner',
		name: 'Zinkwerken',
		short: 'Zinken afwerking van dakranden, goten en aansluitingen.',
		eyebrow: 'Dakwerken · Zinkwerken',
		h1: 'ZINKWERKEN',
		intro:
			'Zink is een duurzaam materiaal voor dakranden, goten en aansluitingen. Wij maken en plaatsen zinkwerk op maat van uw dak.',
		problems: [
			'Uw dakrand of goot is verouderd of beschadigd.',
			'U wilt een degelijke, duurzame afwerking rond schouw of dakrand.',
			'Houten of kunststof onderdelen aan uw dak zijn versleten.',
			'Er zit een naad of verbinding in het zinkwerk die lekt.',
			'U vernieuwt het dak en wilt de randafwerking in één stijl laten aansluiten.',
		],
		benefits: [
			'Duurzaam en weerbestendig materiaal',
			'Afwerking op maat gemaakt voor uw dak',
			'Nette, degelijke aansluitingen',
			'Inzetbaar bij zowel platte als hellende daken',
			'Vakkundig plaatwerk zonder overbodige naden',
		],
		solutions: [
			'Zinken dakgoten en dakranden op maat',
			'Zinkwerk rond schouwen en opstanden',
			'Herstelling van bestaand zinkwerk',
			'Aansluitingen op roofing, EPDM of pannen, netjes in zink afgewerkt',
		],
		approach: defaultApproach,
		body: [
			'Zink is een materiaal dat op een dak niet meteen opvalt, en dat is precies de bedoeling: goed geplaatst zinkwerk doet zijn werk jarenlang zonder op te vallen, tot het moment dat het versleten raakt of beschadigd is. Bij Ciya Dakwerken maken en plaatsen we zinkwerk op maat van uw dak.',
			'We zetten zink vooral in voor dakranden, goten en de afwerking rond schouwen of opstanden — plekken waar water zich verzamelt of waar twee materialen op elkaar aansluiten. Net op die overgangen is een duurzame, precies op maat gemaakte afwerking belangrijk. Zink laat zich goed plooien en solderen, wat toelaat om ook onregelmatige vormen netjes af te werken.',
			'Vergeleken met hout of kunststof heeft zink als voordeel dat het weinig te lijden heeft onder vocht, zon en temperatuurschommelingen. Waar een houten gootrand na verloop van tijd kan rotten of een kunststof profiel bros wordt, blijft zink doorgaans stabieler. Dat maakt het een logische keuze bij de vernieuwing van een dakrand of goot, zeker in combinatie met een nieuwe roofing- of EPDM-afdichting.',
			'De plaatsing gebeurt op maat: we nemen de afmetingen van uw dak op, plooien en solderen het zinkwerk, en werken de aansluitingen op de dakbedekking en de gevel zorgvuldig af. Bij schouwen en opstanden vraagt dat extra aandacht, omdat daar meerdere materialen en hoeken samenkomen.',
			'Ook bestaand zinkwerk is vaak te herstellen zonder volledige vervanging. Een losgekomen naad, een lichte vervorming na storm of een lokale beschadiging kan meestal apart worden aangepakt. Is het zinkwerk over een groter deel van het dak versleten of ondicht, dan bespreken we eerlijk of vernieuwing de betere keuze is.',
			'Zink vraagt relatief weinig onderhoud, al helpt het om goten en aansluitingen vrij te houden van bladeren en vuil — net zoals bij elk ander gootsysteem. Regelmatige controle, zeker na de herfst of een storm, helpt om een beginnend probleem tijdig op te merken.',
			'Met meer dan 20 jaar ervaring in dakwerken kennen we de details waar zinkwerk op staat of valt: de juiste overlap, de correcte afschuiving en een solide bevestiging. Die zorg zit standaard in elk stuk zinkwerk dat we plaatsen.',
		],
		faq: [
			{
				q: 'Waarom kiezen voor zink in plaats van kunststof?',
				a: 'Zink is een duurzaam, weerbestendig materiaal dat lang meegaat mits correcte plaatsing en onderhoud. We bespreken graag wat het beste past bij uw dak.',
			},
			{
				q: 'Kan bestaand zinkwerk hersteld worden?',
				a: 'Vaak wel. We bekijken de schade en de staat van het onderliggende dak om te bepalen of herstelling volstaat.',
			},
			{
				q: 'Is zinkwerk onderhoudsvriendelijk?',
				a: 'Zink vraagt weinig onderhoud. Regelmatig vrijhouden van bladeren en vuil helpt om de levensduur te ondersteunen.',
			},
			{
				q: 'Kan zinkwerk gecombineerd worden met roofing of EPDM?',
				a: 'Ja, zinkwerk wordt vaak ingezet als afwerking van de dakrand naast roofing of EPDM. We stemmen de aansluiting af op de gekozen dakbedekking.',
			},
			{
				q: 'Is zinkwerk geschikt voor zowel platte als hellende daken?',
				a: 'Ja, zink wordt op beide toegepast: als dakgoot en dakrandafwerking op een plat dak, en rond schouwen, opstanden of goten op een hellend dak.',
			},
			{
				q: 'Hoe herken ik dat zinkwerk aan vervanging toe is?',
				a: 'Let op zichtbare vervormingen, losgekomen naden of plekken waar water blijft hangen. Bij twijfel bekijken we de staat van het zinkwerk graag ter plaatse.',
			},
		],
		related: ['dakgoten', 'dakherstellingen', 'dakonderhoud'],
		images: {
			hero: gootNa,
			heroAlt: 'Nieuw geplaatste zinken dakgoot',
			beforeAfter: {
				before: gootVoor,
				beforeAlt: 'Kale houten dakgootrand voor plaatsing van een nieuwe goot',
				after: gootNa,
				afterAlt: 'Nieuw geplaatste zinken dakgoot',
				label: 'Realisatie · Zinkwerk',
			},
		},
		seo: {
			title: 'Zinkwerken Lokeren | Ciya Dakwerken',
			description:
				'Zinken dakgoten, dakranden en aansluitingen op maat in Lokeren en omgeving. Duurzaam materiaal, vakkundig geplaatst. Vraag een vrijblijvende offerte aan.',
		},
	},
	{
		slug: 'dakgoten',
		icon: 'gutter',
		name: 'Dakgoten',
		short: 'Nieuwe of herstelde dakgoten voor een goede waterafvoer.',
		eyebrow: 'Dakwerken · Dakgoten',
		h1: 'DAKGOTEN',
		intro:
			'Een goed werkende dakgoot voert regenwater weg van uw dak en gevel. Wij plaatsen, vervangen en herstellen dakgoten.',
		problems: [
			'Uw dakgoot is verstopt, verzakt of lekt.',
			'Regenwater loopt over de rand van de goot naar beneden.',
			'Uw houten of kunststof goot is aan vervanging toe.',
			'Er staan vochtplekken op de gevel onder de goot.',
			'De goot maakt een ander geluid of trekt los bij hevige regen.',
		],
		benefits: [
			'Correcte afwatering van uw dak',
			'Duurzame materialen op maat geplaatst',
			'Aandacht voor de aansluiting op dak en gevel',
			'Minder risico op vochtschade aan gevel en fundering',
			'Herstelling of vervanging, naargelang wat nodig is',
		],
		solutions: [
			'Plaatsing van nieuwe dakgoten in zink of ander duurzaam materiaal',
			'Herstelling van lekken, verzakkingen of losgekomen delen',
			'Reiniging en controle van de afvoer',
			'Vervanging van beugels of dragers die de goot niet langer voldoende steunen',
		],
		approach: defaultApproach,
		body: [
			'Een dakgoot krijgt zelden aandacht, tot het moment dat ze niet meer goed functioneert. Nochtans doet ze constant belangrijk werk: al het regenwater van uw dak opvangen en gecontroleerd wegleiden, weg van gevel en fundering. Wij plaatsen, vervangen en herstellen dakgoten.',
			'De meest voorkomende problemen zijn een verstopping door bladeren en vuil, een verzakking doordat de dragers of beugels het gewicht niet langer aankunnen, of een lek ter hoogte van een naad of verbinding. Elk van die problemen heeft een andere oorzaak en dus ook een andere oplossing — daarom bekijken we eerst wat er precies aan de hand is voor we iets voorstellen.',
			'Loopt water over de rand van de goot in plaats van erin, dan wijst dat vaak op een verkeerde afschuiving, een verstopping verderop, of een goot die niet langer op maat is van het dakoppervlak — bijvoorbeeld na een dakvernieuwing waarbij de afwatering is gewijzigd. Wij stemmen de goot af op de actuele situatie van uw dak.',
			'Voor nieuwe dakgoten werken wij onder meer met zink, een duurzaam en weerbestendig materiaal dat goed bestand is tegen onze wisselende weersomstandigheden. Een houten of kunststof goot kan op termijn gaan rotten, verkleuren of bros worden; zink blijft doorgaans langer stabiel, mits correct geplaatst en onderhouden.',
			'Niet elk gootprobleem vraagt een volledige vervanging. Een lokale lek of een losgekomen verbinding is vaak te herstellen. Is de goot over een groter deel verzakt, verroest of versleten, dan is vervanging op termijn de meer voordelige oplossing, en dat vertellen we u eerlijk voor we aan het werk gaan.',
			'Een goed werkende dakgoot beschermt niet alleen het dak, maar ook de gevel en de fundering eronder. Water dat over de rand blijft lopen, kan op termijn vochtplekken, mosvorming of zelfs schade aan het voegwerk veroorzaken. Een tijdige controle of reiniging van de goot helpt om dat te voorkomen.',
			'Bij Ciya Dakwerken bekijken we de dakgoot niet los van de rest van het dak: de aansluiting op de dakbedekking, de afvoer en de gevel maken allemaal deel uit van hetzelfde geheel. Zo krijgt u een oplossing die standhoudt, met een duidelijke offerte vooraf en garantie op de uitgevoerde werken.',
		],
		faq: [
			{
				q: 'Hoe vaak moet een dakgoot gereinigd worden?',
				a: 'Dat hangt af van de omgeving, bijvoorbeeld de aanwezigheid van bomen. Regelmatige controle helpt verstoppingen te voorkomen.',
			},
			{
				q: 'Kan een lekkende dakgoot hersteld worden?',
				a: 'Vaak wel. We bekijken de oorzaak en de staat van de goot om te bepalen of een herstelling volstaat of vervanging nodig is.',
			},
			{
				q: 'Welk materiaal wordt gebruikt voor nieuwe dakgoten?',
				a: 'Wij werken onder meer met zink, een duurzaam en weerbestendig materiaal. We bespreken graag wat past bij uw dak en gevel.',
			},
			{
				q: 'Waarom loopt water over de rand van mijn dakgoot?',
				a: 'Dat wijst meestal op een verstopping, een verkeerde afschuiving of een goot die niet langer is afgestemd op het dakoppervlak. Wij zoeken de oorzaak op voor we een oplossing voorstellen.',
			},
			{
				q: 'Kan een houten dakgoot vervangen worden door zink?',
				a: 'Ja, dat is een veelgevraagde ingreep. We nemen de bestaande situatie op en plaatsen een nieuwe zinken goot op maat van uw dak en gevel.',
			},
			{
				q: 'Wat gebeurt er als een verstopte dakgoot niet tijdig gereinigd wordt?',
				a: 'Water kan dan over de rand lopen of blijven staan, met risico op vochtschade aan gevel of dakrand. Regelmatige controle helpt dit te voorkomen.',
			},
		],
		related: ['zinkwerken', 'dakonderhoud', 'dakherstellingen'],
		images: {
			hero: gootNa,
			heroAlt: 'Nieuw geplaatste zinken dakgoot',
			beforeAfter: {
				before: gootVoor,
				beforeAlt: 'Kale houten dakgootrand voor plaatsing van een nieuwe goot',
				after: gootNa,
				afterAlt: 'Nieuw geplaatste zinken dakgoot',
				label: 'Realisatie · Dakgoot',
			},
		},
		seo: {
			title: 'Dakgoten Plaatsen en Herstellen Lokeren | Ciya Dakwerken',
			description:
				'Plaatsing, vervanging en herstelling van dakgoten in Lokeren en omgeving. Voor een correcte waterafvoer. Vraag een vrijblijvende offerte aan.',
		},
	},
	{
		slug: 'dakisolatie',
		icon: 'stack',
		name: 'Dakisolatie',
		short: 'Isolatie van uw dak voor minder energieverlies.',
		eyebrow: 'Dakwerken · Dakisolatie',
		h1: 'DAKISOLATIE',
		intro:
			'Een goed geïsoleerd dak beperkt energieverlies en verhoogt het comfort in huis. Wij isoleren in de eerste plaats platte daken — vaak samen met de vernieuwing van de dakbedekking — en waar het past ook hellende daken.',
		problems: [
			'Uw zolder of bovenverdieping voelt koud aan in de winter.',
			'U vernieuwt de dakbedekking en wilt meteen isoleren.',
			'U wilt energieverlies via het dak beperken.',
			'De ruimte onder het dak warmt in de zomer sterk op.',
			'U merkt condensvorming of vochtplekken tegen het dakvlak.',
		],
		benefits: [
			'Minder energieverlies via het dak',
			'Meer wooncomfort, zomer en winter',
			'Combineerbaar met vernieuwing van de dakbedekking',
			'Advies afgestemd op de opbouw van uw dak',
			'Minder kans op condensvorming bij een correcte uitvoering',
		],
		solutions: [
			'Isolatie bij vernieuwing van een plat dak',
			'Isolatie tussen of onder de dakconstructie bij hellende daken',
			'Advies over het gepaste isolatiemateriaal voor uw dak',
			'Aandacht voor een correcte, luchtdichte afwerking rond de isolatie',
		],
		approach: defaultApproach,
		body: [
			'Van alle plekken waar een huis warmte verliest, weegt het dak vaak het zwaarst door: warme lucht stijgt, en een slecht geïsoleerd dak laat die warmte grotendeels ontsnappen. Een goed geïsoleerd dak keert dat om en maakt meteen voelbaar verschil in comfort, zomer en winter.',
			'Bij een plat dak isoleren we doorgaans als onderdeel van de dakopbouw zelf: de isolatie komt onder de afdichting, tussen de draagconstructie en de roofing of het EPDM-membraan. Is de afdichting van een plat dak toch aan vernieuwing toe, dan ligt het dakvlak al open, en is dat het meest praktische moment om isolatie toe te voegen of te verbeteren.',
			'Bij een hellend dak zit de isolatie doorgaans tussen of onder de dakconstructie, aan de binnenzijde van de sporen. Daar speelt een ander aandachtspunt: een correcte, luchtdichte afwerking rond de isolatie is minstens zo belangrijk als de isolatiewaarde zelf, want een lek in die luchtdichting kan tot vochtproblemen in de dakconstructie leiden.',
			'Welke isolatiewaarde haalbaar is, hangt af van het gekozen materiaal, de beschikbare dikte en de opbouw van uw dak. Bij een plat dak is er vaak meer ruimte om een dikkere isolatielaag te voorzien dan bij een hellend dak, waar de ruimte tussen de sporen een grens stelt. Wij bespreken de mogelijkheden op basis van uw concrete situatie.',
			'Isoleren kan los van een dakvernieuwing, maar in veel gevallen is het efficiënter om beide te combineren. Ligt het dak toch open voor werken aan de afdichting of de dakbedekking, dan is dat de gelegenheid om isolatie toe te voegen zonder een aparte werf te moeten plannen.',
			'Een correct geïsoleerd dak vermindert ook de kans op condensvorming, omdat het temperatuurverschil tussen binnen- en buitenzijde van het dak kleiner wordt. Zit er al condens of vocht tegen het dakvlak, dan bekijken we eerst de oorzaak — die kan bij de isolatie liggen, maar evengoed bij de verluchting van de ruimte.',
			'Bij Ciya Dakwerken geven we advies dat past bij uw dak en uw budget. U krijgt een duidelijke offerte, een vakkundige uitvoering en garantie op de geplaatste isolatie.',
		],
		faq: [
			{
				q: 'Kan isolatie los van een dakvernieuwing uitgevoerd worden?',
				a: 'Dat hangt af van de situatie van uw dak. In sommige gevallen kan dit apart, in andere gevallen is het efficiënter om dit te combineren met werken aan de dakbedekking. Wij adviseren op basis van uw dak.',
			},
			{
				q: 'Welke isolatiewaarde kan ik verwachten?',
				a: 'Dat hangt af van het gekozen materiaal en de dikte. We bespreken graag de mogelijkheden voor uw dak en situatie.',
			},
			{
				q: 'Is dakisolatie ook zinvol bij een ouder dak?',
				a: 'Zeker, ook bij een bestaand dak kan isolatie het energieverlies beperken. We bekijken samen met u wat haalbaar is.',
			},
			{
				q: 'Wat is het verschil tussen isoleren van een plat en een hellend dak?',
				a: 'Bij een plat dak zit de isolatie doorgaans onder de afdichting, als onderdeel van de dakopbouw. Bij een hellend dak zit ze meestal tussen of onder de sporen, met extra aandacht voor een luchtdichte afwerking.',
			},
			{
				q: 'Kan condensvorming een gevolg zijn van onvoldoende isolatie?',
				a: 'Dat kan meespelen, maar ook onvoldoende verluchting is een veelvoorkomende oorzaak. Wij bekijken de situatie ter plaatse om de oorzaak vast te stellen.',
			},
			{
				q: 'Wordt de isolatie mee gecontroleerd bij een dakherstelling?',
				a: 'Waar relevant bekijken we de staat van de isolatie mee, zeker bij een herstelling ter hoogte van een lek. Vochtige isolatie verliest immers een deel van haar werking.',
			},
		],
		related: ['platte-daken', 'epdm', 'velux-dakramen'],
		images: {
			hero: isolatiePlaten,
			heroAlt: 'Isolatieplaten geplaatst over een volledig plat dak, klaar voor de nieuwe dakbedekking',
			beforeAfter: {
				before: oudDakVoor,
				beforeAlt: 'Verouderde, verweerde dakbedekking op een plat dak voor de renovatie',
				after: roofingDakrand,
				afterAlt: 'Hetzelfde platte dak na isolatie en nieuwe roofing, met afgewerkte dakrand',
				label: 'Realisatie · Renovatie plat dak',
			},
		},
		seo: {
			title: 'Dakisolatie Lokeren | Ciya Dakwerken',
			description:
				'Dakisolatie in Lokeren en omgeving, vooral voor platte daken en vaak samen met een vernieuwing van de dakbedekking. Vraag een vrijblijvende offerte aan.',
		},
	},
	{
		slug: 'vloeibare-dakbedekking',
		icon: 'drop',
		name: 'Vloeibare dakbedekking',
		short: 'Naadloze, vloeibaar aangebrachte afdichting voor moeilijke details.',
		eyebrow: 'Dakwerken · Vloeibare dakbedekking',
		h1: 'VLOEIBARE DAKBEDEKKING',
		intro:
			'Voor kleine oppervlaktes, moeilijke aansluitingen en details is vloeibare dakbedekking een praktische oplossing die zich naar elke vorm voegt.',
		problems: [
			'Uw dak heeft moeilijke details of aansluitingen die lastig af te dichten zijn.',
			'U zoekt een oplossing voor een klein of onregelmatig dakoppervlak.',
			'Rond een doorvoer of aansluiting blijft het steeds terugkomen van vocht.',
			'Een baanmateriaal zoals roofing of EPDM is voor de vorm van de zone niet praktisch.',
			'U wilt een bestaande probleemzone laten herstellen zonder het volledige dak aan te pakken.',
		],
		benefits: [
			'Voegt zich naar elke vorm of detail',
			'Geschikt voor kleine oppervlaktes en lastige aansluitingen',
			'Naadloze afwerking zonder overlappingen',
			'Inzetbaar als gerichte oplossing naast andere dakbedekkingen',
			'Snel aan te brengen op beperkte oppervlaktes',
		],
		solutions: [
			'Vloeibare afdichting rond doorvoeren, aansluitingen en details',
			'Herstelling van kleinere probleemzones op een dak',
			'Combinatie met andere dakbedekkingen waar nodig',
			'Afdichting van kleine platte oppervlaktes zoals een erker of aanbouw',
		],
		approach: defaultApproach,
		body: [
			'Niet elk dakprobleem zit op een groot, vlak oppervlak. Soms gaat het om een klein stukje dak boven een erker, een lastige hoek rond een doorvoer, of een aansluiting waar een baanmateriaal simpelweg niet praktisch is. Voor die situaties is vloeibare dakbedekking een geschikte oplossing.',
			'Het principe is eenvoudig: een vloeibaar product wordt aangebracht en hardt vervolgens uit tot een naadloze, waterdichte laag die zich naar elke vorm voegt. Waar roofing of EPDM in banen wordt gelegd, met alle aandacht voor overlappingen die dat vraagt, is een vloeibare afdichting overlapvrij — net op kleine of onregelmatige oppervlaktes een voordeel.',
			'Vloeibare dakbedekking wordt bij Ciya Dakwerken vooral ingezet op twee manieren: als afdichting van een beperkt oppervlak, zoals een klein plat dakje boven een aanbouw, of als gerichte oplossing rond een detail dat met een ander materiaal moeilijk waterdicht te krijgen is. Denk aan de overgang rond een schouw, een afvoerbuis, of een hoek waar meerdere dakvlakken samenkomen.',
			'Voor een groot dakoppervlak is een vloeibare afdichting doorgaans niet de eerste keuze — daar blijven roofing en EPDM de meest praktische opties. Wel wordt vloeibare dakbedekking regelmatig gecombineerd met die materialen: het grootste deel van het dak in roofing of EPDM, en de moeilijke details afgewerkt met een vloeibaar product.',
			'De levensduur van een vloeibare afdichting hangt sterk af van de toepassing, de ondergrond en de belasting die de zone te verduren krijgt. Een correcte voorbereiding van de ondergrond is daarbij minstens zo bepalend als het product zelf — een vloeibare afdichting die op een vochtige of vuile ondergrond wordt aangebracht, hecht onvoldoende en houdt minder lang stand.',
			'Ook voor herstellingen kan vloeibare dakbedekking een uitkomst zijn: een lokale probleemzone waar telkens opnieuw vocht terugkomt, kan hiermee vaak gericht worden aangepakt zonder een groter deel van het dak open te leggen.',
			'Bij Ciya Dakwerken bekijken we eerst of vloeibare dakbedekking effectief de beste oplossing is voor uw situatie, of dat een ander materiaal beter past. Dat eerlijke advies staat voorop, gevolgd door een duidelijke offerte en een vakkundige uitvoering.',
		],
		faq: [
			{
				q: 'Voor welke daken is vloeibare dakbedekking geschikt?',
				a: 'Vooral voor kleinere oppervlaktes, moeilijke details en aansluitingen waar een baanmateriaal minder praktisch is. We bekijken samen met u of het past bij uw situatie.',
			},
			{
				q: 'Hoe lang gaat vloeibare dakbedekking mee?',
				a: 'Dit hangt af van de toepassing, de ondergrond en de belasting. We geven u eerlijk advies op basis van uw dak.',
			},
			{
				q: 'Kan dit gecombineerd worden met roofing of EPDM?',
				a: 'Ja, vloeibare dakbedekking wordt vaak ingezet als aanvulling bij lastige details op een dak dat verder in roofing of EPDM is afgewerkt.',
			},
			{
				q: 'Is vloeibare dakbedekking geschikt voor een volledig dakoppervlak?',
				a: 'Voor grotere oppervlaktes blijven roofing en EPDM doorgaans de meest praktische keuze. Vloeibare dakbedekking wordt vooral ingezet voor kleinere zones en lastige details.',
			},
			{
				q: 'Hoe wordt vloeibare dakbedekking aangebracht?',
				a: 'Het product wordt vloeibaar aangebracht op een voorbereide, droge ondergrond en hardt vervolgens uit tot een naadloze, waterdichte laag. De voorbereiding van de ondergrond is daarbij minstens zo belangrijk als het product zelf.',
			},
			{
				q: 'Kan vloeibare dakbedekking een terugkerend lek oplossen?',
				a: 'Bij een lokale probleemzone waar vocht steeds terugkeert, kan een vloeibare afdichting vaak een gerichte oplossing bieden. We bekijken eerst de oorzaak voor we deze aanpak voorstellen.',
			},
		],
		related: ['epdm', 'roofing', 'dakherstellingen'],
		images: {},
		seo: {
			title: 'Vloeibare Dakbedekking Lokeren | Ciya Dakwerken',
			description:
				'Vloeibare dakbedekking voor moeilijke details en kleine oppervlaktes in Lokeren en omgeving. Naadloos afgewerkt. Vraag een vrijblijvende offerte aan.',
		},
	},
	{
		slug: 'dakherstellingen',
		icon: 'wrench',
		name: 'Dakherstellingen',
		short: 'Snel en eerlijk advies bij lekken, schade en andere dakproblemen.',
		eyebrow: 'Dakwerken · Herstellingen',
		h1: 'DAKHERSTELLINGEN',
		intro:
			'Een lek of beschadiging aan uw dak vraagt om een duidelijke diagnose en een herstelling die de oorzaak wegneemt. Wij herstellen in de eerste plaats platte daken; op hellende daken herstellen we lekken rond dakramen, dakgoten en zinkwerk. Van kleine ingrepen tot grotere herstellingen.',
		problems: [
			'Er is een lek in uw dak of u ziet vochtplekken op het plafond.',
			'Pannen liggen los, zijn gebroken of verschoven na storm.',
			'De afdichting rond een schouw, dakraam of lichtkoepel laat los.',
			'Uw dakgoot of zinkwerk vertoont schade.',
			'U weet niet zeker of herstellen volstaat of vernieuwing nodig is.',
		],
		benefits: [
			'Eerlijk advies: herstellen waar het kan, vernieuwen waar het moet',
			'Aandacht voor de oorzaak, niet enkel het zichtbare gevolg',
			'Herstellingen op alle onderdelen van het dak',
			'Degelijke materialen, ook bij kleinere ingrepen',
		],
		solutions: [
			'Herstelling van bitumen roofing: scheuren, blaren en losgekomen naden',
			'Herstelling van lekken in EPDM-membraan',
			'Vervanging van losliggende of gebroken pannen en leien',
			'Herstelling van afdichting rond schouwen, dakramen en lichtkoepels',
			'Herstelling van zinkwerk en dakgoten',
		],
		approach: [
			'U beschrijft het probleem telefonisch of via het offerteformulier, eventueel met foto’s.',
			'Wij sporen de oorzaak op — ter plaatse of op basis van uw beschrijving en beeldmateriaal.',
			'U krijgt een vrijblijvende offerte met een duidelijke omschrijving van de herstelling.',
			'Na uw akkoord voeren wij de herstelling uit en controleren we de omliggende zones mee.',
		],
		body: [
			'Een lek in het dak begint vaak klein: een vochtplek op het plafond, een druppel na een stevige regenbui, een paar losliggende pannen na storm. Klein of groot, de aanpak begint bij hetzelfde: eerst weten wat er precies aan de hand is. Bij Ciya Dakwerken nemen we de tijd om de oorzaak van een probleem op te sporen voor we een herstelling voorstellen. Een vochtplek op een plafond zit immers niet altijd recht onder het lek zelf — water zoekt zijn weg langs balken en isolatie voor het zichtbaar wordt.',
			'Dakherstellingen komen in vele vormen. Op een plat dak gaat het vaak om scheuren of blaarvorming in bitumen roofing, of om een beschadiging in een EPDM-membraan. Op een hellend dak zien we voornamelijk losliggende, verschoven of gebroken pannen en leien, vaak na een storm, maar evengoed door normale veroudering. Daarnaast komen we regelmatig tussen bij problemen rond details: de aansluiting van een schouw, een dakraam of een lichtkoepel is een plek waar afdichting na verloop van tijd kan loskomen, net als de overgang naar een dakgoot of zinkwerk.',
			'Niet elk probleem vraagt om dezelfde oplossing. Een geïsoleerde scheur in een roofing kan vaak lokaal hersteld worden zonder het hele dakvlak aan te pakken. Is de algemene staat van de afdichting echter dermate versleten dat er op meerdere plaatsen problemen opduiken, dan is een herstelling soms een kortetermijnoplossing en ligt een vernieuwing meer voor de hand. Wij zeggen u dat eerlijk: een kleine herstelling of een volledige vernieuwing, u krijgt een duidelijke offerte, zonder verrassingen achteraf.',
			'Bij een actieve lekkage speelt tijd uiteraard een rol. Wij plannen dakherstellingen zo snel als onze planning het toelaat, maar een exacte termijn kunnen we pas geven nadat we de situatie hebben ingeschat — elke herstelling is anders, en we willen u geen loze beloftes doen. Wat u intussen wel kan doen bij een acute lekkage: emmers plaatsen om waterschade binnen te beperken en, waar mogelijk, de betrokken ruimte vrijhouden.',
			'Ook na een herstelling raden we aan om het dak regelmatig te laten controleren, zeker na een periode met stormweer. Een tijdig opgemerkt probleem is doorgaans eenvoudiger en voordeliger op te lossen dan een lek dat al maanden binnendringt en vocht heeft opgestapeld in de dakconstructie. Twijfelt u of iets een herstelling vraagt of nog even kan wachten? Neem gerust contact op — we geven u eerlijk mee wat volgens ons de beste aanpak is.',
			'Met meer dan 20 jaar ervaring in dakwerken herkennen we de meest voorkomende oorzaken van lekken en schade snel, en weten we ook wanneer een probleem net iets grondiger onderzoek vraagt. Vakmanschap, hoogwaardige materialen en persoonlijk advies staan bij elke herstelling voorop — hoe klein of groot de klus ook is.',
		],
		faq: [
			{
				q: 'Hoe snel kan een lek hersteld worden?',
				a: 'Dat hangt af van onze planning en de aard van het probleem. Bij een actieve lekkage proberen we zo snel mogelijk te schakelen, maar een exacte termijn geven we pas na een inschatting van de situatie.',
			},
			{
				q: 'Is elke lekkage te herstellen, of is vernieuwing soms beter?',
				a: 'Een lokale beschadiging is meestal te herstellen. Is de algemene staat van de dakbedekking sterk verouderd, dan kan vernieuwing op termijn een betere investering zijn. Wij geven u hierover eerlijk advies.',
			},
			{
				q: 'Hoe herken ik een lek in een vroeg stadium?',
				a: 'Let op vochtplekken of verkleuringen op het plafond, een muffe geur op zolder, of losliggende pannen na stormweer. Regelmatige controle, zeker na slecht weer, helpt om problemen tijdig op te merken.',
			},
			{
				q: 'Wat als de oorzaak van het lek niet meteen duidelijk is?',
				a: 'Water kan zich langs balken en isolatie verplaatsen voor het zichtbaar wordt, waardoor de bron niet altijd recht boven de vochtplek ligt. Wij sporen de oorzaak stap voor stap op voordat we een herstelling uitvoeren.',
			},
			{
				q: 'Moet bij één lek meteen het hele dak vervangen worden?',
				a: 'Niet noodzakelijk. Een geïsoleerd probleem is vaak lokaal te herstellen. Pas als de algemene staat van het dak dat rechtvaardigt, bespreken we een verdergaande aanpak.',
			},
			{
				q: 'Wat kan ik doen bij een acute lekkage, in afwachting van herstelling?',
				a: 'Plaats emmers om waterschade te beperken en houd de betrokken ruimte zoveel mogelijk vrij. Neem contact met ons op zodat we de herstelling kunnen inplannen.',
			},
		],
		related: ['roofing', 'epdm', 'dakonderhoud'],
		images: {
			hero: oudDakVoor,
			heroAlt: 'Verouderde dakbedekking met slijtage op een plat dak',
		},
		seo: {
			title: 'Dakherstellingen Lokeren | Ciya Dakwerken',
			description:
				'Herstelling van lekken, losliggende pannen en dakschade in Lokeren en omgeving. Eerlijk advies, vakkundig hersteld. Vraag een vrijblijvende offerte aan.',
		},
	},
	{
		slug: 'dakonderhoud',
		icon: 'brush',
		name: 'Dakonderhoud & reiniging',
		short: 'Regelmatig onderhoud en reiniging houden uw dak in goede staat.',
		eyebrow: 'Dakwerken · Onderhoud',
		h1: 'DAKONDERHOUD EN REINIGING',
		intro:
			'Regelmatig onderhoud helpt problemen aan uw dak vroegtijdig op te sporen. Wij reinigen en controleren daken en dakgoten.',
		problems: [
			'Uw dakgoot is verstopt door bladeren of mos.',
			'U wilt uw dak laten controleren voor of na de winter.',
			'Mos of vuil hoopt zich op, op een plat of hellend dak.',
			'U verkoopt of koopt een woning en wilt de staat van het dak laten inschatten.',
			'Na een storm wilt u zeker weten dat er geen schade is.',
		],
		benefits: [
			'Tijdig zicht op kleine problemen voor ze groter worden',
			'Vrije waterafvoer via een gereinigde dakgoot',
			'Rustig gevoel na controle door een vakman',
			'Onderhoud afgestemd op de staat en omgeving van uw dak',
			'Vroege opvolging kan een dure herstelling voorkomen',
		],
		solutions: [
			'Reiniging van dakgoten en afvoeren',
			'Verwijderen van mos en aanslag op het dakoppervlak',
			'Visuele controle van de dakbedekking en aansluitingen',
			'Kort overzicht van vastgestelde aandachtspunten na controle',
		],
		approach: [
			'U neemt contact op om een controle, reiniging of onderhoud aan te vragen.',
			'Wij bekijken uw dak: de dakbedekking, de dakgoten en de belangrijkste aansluitingen.',
			'U krijgt een duidelijk beeld van de staat van uw dak, met eventuele aandachtspunten.',
			'Is er werk nodig, dan bespreken we dat en plannen we de uitvoering in overleg met u in.',
		],
		body: [
			'Een dak dat er op het eerste gezicht goed bijligt, kan toch aandachtspunten hebben die pas opvallen bij een gerichte controle: een beginnende verstopping, wat losliggend mos, een aansluiting die begint te verouderen. Regelmatig onderhoud is de eenvoudigste manier om dat soort signalen op tijd op te merken.',
			'De dakgoot is daarbij vaak het eerste aandachtspunt. Bladeren, mos en vuil hopen zich op, vooral in de herfst of bij bomen in de buurt, en een verstopte goot kan water laten overlopen in plaats van afvoeren. Een reiniging van de goten en afvoeren is dan ook een van de meest gevraagde onderhoudswerken.',
			'Ook op het dakoppervlak zelf kan mos of aanslag zich opstapelen, zeker op plekken die weinig zon krijgen. Dat is niet alleen een kwestie van uitzicht: mos houdt vocht vast en kan op termijn de dakbedekking aantasten. Wij verwijderen mos en aanslag op een manier die de onderliggende afdichting of pannen niet beschadigt.',
			'Naast reiniging maakt een visuele controle deel uit van onderhoud: we bekijken de staat van de dakbedekking, de aansluitingen rond schouwen, doorvoeren, lichtkoepels en dakramen, en de goten. Valt er iets op, dan melden we dat, met een eerlijke inschatting of het dringend is of nog kan wachten.',
			'Hoe vaak een dak onderhoud nodig heeft, verschilt van woning tot woning. Een dak omringd door hoge bomen vraagt doorgaans vaker aandacht voor de dakgoot dan een vrijstaand dak zonder begroeiing in de buurt. Ook de leeftijd en het type dakbedekking spelen mee. Wij geven u graag advies op maat van uw situatie, in plaats van een vast schema dat niet bij elk dak past.',
			'Een controle na stormweer is altijd een goed moment: losliggende pannen, verschoven zinkwerk of beschadigde randafwerking zijn niet altijd zichtbaar vanaf de grond, maar kunnen wel tot een lek leiden als ze onopgemerkt blijven.',
			'Onderhoud is misschien het minst zichtbare werk dat we doen, maar wel het werk dat het meeste voorkomt. Een tijdig opgemerkt probleem is doorgaans eenvoudiger en voordeliger op te lossen dan een lek dat al maanden binnendringt.',
		],
		faq: [
			{
				q: 'Hoe vaak is onderhoud van een dak aan te raden?',
				a: 'Dat hangt af van de omgeving, bijvoorbeeld bomen in de buurt. Wij geven graag advies op basis van uw situatie.',
			},
			{
				q: 'Wat houdt een controle van het dak in?',
				a: 'We bekijken de dakbedekking, de aansluitingen rond doorvoeren en de staat van de dakgoot, en melden u eventuele aandachtspunten.',
			},
			{
				q: 'Kan onderhoud problemen voorkomen?',
				a: 'Regelmatige controle helpt om kleine problemen op te merken voor ze uitgroeien tot een lek of grotere schade.',
			},
			{
				q: 'Is mos op het dak schadelijk?',
				a: 'Mos houdt vocht vast en kan op termijn de onderliggende dakbedekking aantasten. Regelmatige verwijdering helpt dat te beperken.',
			},
			{
				q: 'Wanneer is een controle na een storm aan te raden?',
				a: 'Na hevige wind of noodweer is een controle een goed idee, ook als er van op de grond niets opvalt. Losliggende pannen of verschoven zinkwerk zijn niet altijd meteen zichtbaar.',
			},
			{
				q: 'Kan onderhoud gecombineerd worden met een controle van de dakgoot?',
				a: 'Ja, dakgootreiniging en een algemene controle van het dak worden vaak samen uitgevoerd, omdat beide dezelfde toegang tot het dak vragen.',
			},
		],
		related: ['dakherstellingen', 'dakgoten', 'zinkwerken'],
		images: {
			hero: roofingTuin,
			heroAlt: 'Afgewerkt plat dak met roofing, zicht op de tuin',
		},
		seo: {
			title: 'Dakonderhoud en Reiniging Lokeren | Ciya Dakwerken',
			description:
				'Onderhoud en reiniging van daken en dakgoten in Lokeren en omgeving. Tijdig problemen opsporen en voorkomen. Vraag een vrijblijvende offerte aan.',
		},
	},
];

export function getService(slug: string): Service | undefined {
	return services.find((s) => s.slug === slug);
}

export function getRelatedServices(service: Service): Service[] {
	return service.related
		.map((slug) => getService(slug))
		.filter((s): s is Service => Boolean(s));
}

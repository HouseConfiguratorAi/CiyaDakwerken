// SEO / structured data helpers. No aggregateRating, no review, no openingHours, no priceRange — ever.
import { site } from '../data/site';
import type { Service } from '../data/services';
import type { FaqItem } from '../data/site';

export function buildTitle(pageTitle: string): string {
	return pageTitle;
}

export interface BreadcrumbItem {
	name: string;
	url: string;
}

/** RoofingContractor (LocalBusiness subtype). One @id shared across the site. */
export function localBusinessJsonLd() {
	return {
		'@context': 'https://schema.org',
		'@type': 'RoofingContractor',
		'@id': `${site.siteUrl}/#business`,
		name: site.name,
		legalName: site.legalName,
		vatID: site.vatId,
		telephone: site.phoneE164,
		email: site.email,
		url: site.siteUrl,
		logo: `${site.siteUrl}/brand/mark.svg`,
		image: `${site.siteUrl}/brand/og-default.jpg`,
		address: {
			'@type': 'PostalAddress',
			streetAddress: site.address.street,
			postalCode: site.address.postalCode,
			addressLocality: site.address.city,
			addressCountry: site.address.country,
		},
		areaServed: [{ '@type': 'City', name: site.address.city }],
		sameAs: [site.facebook],
		knowsAbout: [
			'Roofing (bitumen)',
			'EPDM dakbedekking',
			'Lichtkoepels',
			'Velux en dakramen',
			'Zinkwerken',
			'Dakisolatie',
			'Vloeibare dakbedekking',
			'Dakgoten',
			'Dakherstellingen',
			'Dakonderhoud en reiniging',
		],
	};
}

export function serviceJsonLd(service: Service) {
	return {
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: service.name,
		serviceType: service.name,
		provider: { '@id': `${site.siteUrl}/#business` },
		areaServed: [{ '@type': 'City', name: site.address.city }],
		url: `${site.siteUrl}/diensten/${service.slug}/`,
	};
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, i) => ({
			'@type': 'ListItem',
			position: i + 1,
			name: item.name,
			item: item.url,
		})),
	};
}

export function faqJsonLd(faq: FaqItem[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faq.map((item) => ({
			'@type': 'Question',
			name: item.q,
			acceptedAnswer: {
				'@type': 'Answer',
				text: item.a,
			},
		})),
	};
}

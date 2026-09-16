#!/usr/bin/env node
// Generates brand assets from the client logo + a small SVG mark (BRIEF §2).
// Run once with `npm run brand`; outputs are committed to public/.
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const RED = '#C51F2A';
const BLACK = '#0A0A0A';
const WHITE = '#FFFFFF';
const CHARCOAL = '#1C1C1C';

// --- The small mark: echoes the client logo's C-roof concept (BRIEF §2). ---
// viewBox 0 0 64 64. Gable stroke is always red; the "C" stroke swaps colour per variant.
function markSvg({ cColor, padding = 0 }) {
	const size = 64 + padding * 2;
	const offset = -padding;
	return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${offset} ${offset} ${size} ${size}">
	<path d="M55 27 L33 8 L11 27" fill="none" stroke="${RED}" stroke-width="10" stroke-linejoin="miter" stroke-miterlimit="6"/>
	<path d="M16 24 V56 H52" fill="none" stroke="${cColor}" stroke-width="10" stroke-linejoin="miter"/>
</svg>`;
}

async function writeSvg(file, svg) {
	await writeFile(file, svg, 'utf8');
	console.log('wrote', path.relative(root, file));
}

async function svgToPng(svg, size, outFile, { background = { r: 0, g: 0, b: 0, alpha: 0 } } = {}) {
	const buf = await sharp(Buffer.from(svg), { density: 384 })
		.resize(size, size, { fit: 'contain', background })
		.png()
		.toBuffer();
	if (outFile) {
		await writeFile(outFile, buf);
		console.log('wrote', path.relative(root, outFile));
	}
	return buf;
}

// Minimal ICO container wrapping a single PNG image (valid since Windows Vista).
function pngToIco(pngBuffer, size) {
	const headerSize = 6;
	const dirEntrySize = 16;
	const header = Buffer.alloc(headerSize);
	header.writeUInt16LE(0, 0); // reserved
	header.writeUInt16LE(1, 2); // type: 1 = icon
	header.writeUInt16LE(1, 4); // 1 image

	const dirEntry = Buffer.alloc(dirEntrySize);
	dirEntry.writeUInt8(size >= 256 ? 0 : size, 0); // width (0 = 256)
	dirEntry.writeUInt8(size >= 256 ? 0 : size, 1); // height
	dirEntry.writeUInt8(0, 2); // palette
	dirEntry.writeUInt8(0, 3); // reserved
	dirEntry.writeUInt16LE(1, 4); // colour planes
	dirEntry.writeUInt16LE(32, 6); // bits per pixel
	dirEntry.writeUInt32LE(pngBuffer.length, 8); // image data size
	dirEntry.writeUInt32LE(headerSize + dirEntrySize, 12); // offset

	return Buffer.concat([header, dirEntry, pngBuffer]);
}

// Per-service share images: hero photo + logo + service name. Map kept in sync with data/services.ts.
const SERVICE_OG = {
	'platte-daken': ['huis-nieuw-plat-dak-aanbouw-velux.jpg', 'Platte daken'],
	roofing: ['plat-dak-nieuwe-roofing-zon.jpg', 'Roofing'],
	epdm: ['epdm-dakrand-pannendak.jpg', 'EPDM'],
	dakisolatie: ['dakisolatie-pir-platen-plat-dak.jpg', 'Dakisolatie'],
	dakherstellingen: ['plat-dak-oud-voor-renovatie.jpg', 'Dakherstellingen'],
	dakonderhoud: ['plat-dak-roofing-tuinzicht.jpg', 'Dakonderhoud'],
	lichtkoepels: ['lichtkoepel-na.jpg', 'Lichtkoepels'],
	'velux-dakramen': ['velux-dakraam-na.jpg', 'Velux & dakramen'],
	zinkwerken: ['zinken-dakgoot-na.jpg', 'Zinkwerken'],
	dakgoten: ['zinken-dakgoot-na.jpg', 'Dakgoten'],
	'vloeibare-dakbedekking': ['plat-dak-roofing-afwerking.jpg', 'Vloeibare dakbedekking'],
	projecten: ['plat-dak-nieuwe-roofing-dakrand.jpg', 'Realisaties'],
	dakcheck: ['huis-nieuw-plat-dak-aanbouw-velux.jpg', 'Dakcheck'],
};

async function buildServiceOgImages() {
	const width = 1200;
	const height = 630;
	const logoPath = path.join(root, 'src/assets/brand/ciya-logo-white.png');
	const logoWidth = 340;
	const logoHeight = Math.round(logoWidth * (634 / 1598));
	const logoBuf = await sharp(logoPath).resize(logoWidth, logoHeight).png().toBuffer();
	const outDir = path.join(root, 'public/brand');
	await mkdir(outDir, { recursive: true });
	for (const [slug, [file, label]] of Object.entries(SERVICE_OG)) {
		const photo = await sharp(path.join(root, 'src/assets/images', file))
			.resize(width, height, { fit: 'cover', position: 'attention' })
			.modulate({ brightness: 0.6, saturation: 0.85 })
			.toBuffer();
		const esc = label.toUpperCase().replace(/&/g, '&amp;');
		const overlay = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
			<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="rgba(10,10,10,0.9)"/><stop offset="0.7" stop-color="rgba(10,10,10,0.35)"/><stop offset="1" stop-color="rgba(10,10,10,0.15)"/></linearGradient></defs>
			<rect width="${width}" height="${height}" fill="url(#g)"/>
			<rect x="72" y="300" width="60" height="6" fill="#C51F2A"/>
			<text x="72" y="380" font-family="Arial Narrow, Arial, Helvetica, sans-serif" font-weight="700" font-size="72" fill="#FFFFFF" letter-spacing="1">${esc}</text>
			<text x="72" y="430" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="26" fill="rgba(255,255,255,0.85)">Lokeren en omgeving · 0484 55 02 52</text>
			<rect x="0" y="${height - 8}" width="${width}" height="8" fill="#C51F2A"/>
		</svg>`;
		const out = await sharp(photo)
			.composite([{ input: Buffer.from(overlay), top: 0, left: 0 }, { input: logoBuf, top: 72, left: 72 }])
			.jpeg({ quality: 84 })
			.toBuffer();
		await writeFile(path.join(outDir, `og-${slug}.jpg`), out);
	}
	console.log('wrote', Object.keys(SERVICE_OG).length, 'service OG images');
}

async function buildOgImage() {
	const width = 1200;
	const height = 630;

	const hatchPattern = `
		<pattern id="hatch" width="9" height="9" patternTransform="rotate(135)" patternUnits="userSpaceOnUse">
			<line x1="0" y1="0" x2="0" y2="9" stroke="rgba(255,255,255,0.05)" stroke-width="1" />
		</pattern>`;

	const textSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
		<defs>${hatchPattern}</defs>
		<rect width="${width}" height="${height}" fill="${CHARCOAL}" />
		<rect width="${width}" height="${height}" fill="url(#hatch)" />
		<text x="${width / 2}" y="520" text-anchor="middle"
			font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="34"
			letter-spacing="0.5" fill="${WHITE}">Uw specialist in platte daken · 0484 55 02 52</text>
	</svg>`;

	// Photo background (real project photo, darkened), then hatch/text SVG on top.
	const photoPath = path.join(root, 'src/assets/images/huis-nieuw-plat-dak-aanbouw-velux.jpg');
	const photoBuf = await sharp(photoPath)
		.resize(width, height, { fit: 'cover', position: 'attention' })
		.modulate({ brightness: 0.55, saturation: 0.85 })
		.toBuffer();
	const overlaySvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
		<defs>
			${hatchPattern}
			<linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
				<stop offset="0" stop-color="rgba(10,10,10,0.35)"/>
				<stop offset="1" stop-color="rgba(10,10,10,0.85)"/>
			</linearGradient>
		</defs>
		<rect width="${width}" height="${height}" fill="url(#g)" />
		<rect width="${width}" height="${height}" fill="url(#hatch)" />
		<rect x="0" y="${height - 8}" width="${width}" height="8" fill="#C51F2A" />
		<text x="${width / 2}" y="520" text-anchor="middle"
			font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="34"
			letter-spacing="0.5" fill="${WHITE}">Uw specialist in platte daken · 0484 55 02 52</text>
	</svg>`;
	const base = sharp(photoBuf).composite([{ input: Buffer.from(overlaySvg), top: 0, left: 0 }]);
	const withBg = sharp(await base.png().toBuffer());

	const logoPath = path.join(root, 'src/assets/brand/ciya-logo-white.png');
	const logoWidth = 700;
	const logoHeight = Math.round(logoWidth * (634 / 1598));
	const logoBuf = await sharp(logoPath).resize(logoWidth, logoHeight).png().toBuffer();

	const logoTop = 190;
	const logoLeft = Math.round((width - logoWidth) / 2);

	const composed = await withBg
		.composite([{ input: logoBuf, top: logoTop, left: logoLeft }])
		.jpeg({ quality: 86 })
		.toBuffer();

	const outDir = path.join(root, 'public/brand');
	await mkdir(outDir, { recursive: true });
	const outFile = path.join(outDir, 'og-default.jpg');
	await writeFile(outFile, composed);
	console.log('wrote', path.relative(root, outFile));
}

async function main() {
	const brandDir = path.join(root, 'public/brand');
	await mkdir(brandDir, { recursive: true });

	// 1. public/brand/mark.svg + mark-white.svg
	const markDark = markSvg({ cColor: BLACK });
	const markLight = markSvg({ cColor: WHITE });
	await writeSvg(path.join(brandDir, 'mark.svg'), markDark);
	await writeSvg(path.join(brandDir, 'mark-white.svg'), markLight);

	// 2. public/favicon.svg — mark with 6px padding, colour-scheme aware via CSS.
	const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -6 76 76">
	<path d="M55 27 L33 8 L11 27" fill="none" stroke="${RED}" stroke-width="10" stroke-linejoin="miter" stroke-miterlimit="6"/>
	<path d="M16 24 V56 H52" fill="none" stroke="${BLACK}" stroke-width="10" stroke-linejoin="miter" class="favicon-c"/>
	<style>
		@media (prefers-color-scheme: dark) {
			.favicon-c { stroke: ${WHITE}; }
		}
	</style>
</svg>`;
	await writeFile(path.join(root, 'public/favicon.svg'), faviconSvg, 'utf8');
	console.log('wrote', path.relative(root, path.join(root, 'public/favicon.svg')));

	// 3. public/favicon.ico — 32px PNG (transparent) wrapped in a minimal ICO container.
	const faviconPng = await svgToPng(markSvg({ cColor: BLACK, padding: 6 }), 32, null);
	const ico = pngToIco(faviconPng, 32);
	await writeFile(path.join(root, 'public/favicon.ico'), ico);
	console.log('wrote', path.relative(root, path.join(root, 'public/favicon.ico')));

	// 4. public/apple-touch-icon.png — 180px, mark on white, ~24px padding.
	const appleIconSize = 180;
	const applePadding = 24;
	const markInner = appleIconSize - applePadding * 2;
	const markBuf = await svgToPng(markSvg({ cColor: BLACK }), markInner, null, {
		background: { r: 255, g: 255, b: 255, alpha: 1 },
	});
	const appleIcon = await sharp({
		create: {
			width: appleIconSize,
			height: appleIconSize,
			channels: 4,
			background: { r: 255, g: 255, b: 255, alpha: 1 },
		},
	})
		.composite([{ input: markBuf, top: applePadding, left: applePadding }])
		.png()
		.toBuffer();
	await writeFile(path.join(root, 'public/apple-touch-icon.png'), appleIcon);
	console.log('wrote', path.relative(root, path.join(root, 'public/apple-touch-icon.png')));

	// 5. public/brand/og-default.jpg — 1200x630 charcoal + hatch + white logo + tagline.
	await buildOgImage();

	// 6. public/brand/og-<slug>.jpg — per-service share images.
	await buildServiceOgImages();

	console.log('\nBrand assets generated.');
}

main().catch((err) => {
	console.error(err);
	process.exitCode = 1;
});

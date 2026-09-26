#!/usr/bin/env node
// Generates brand assets from the client logo: favicons/app icons (logo's C + roof) and share images.
// Run once with `npm run brand`; outputs are committed to public/.
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const WHITE = '#FFFFFF';
const CHARCOAL = '#1C1C1C';

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


// The icon = the logo's own "C + roof + chimney" (full wordmark is unreadable at 16–32px). Two crops of the
// source logo (1598×634): the C under the roof, plus the roof tail above the "I" — letters left out.
async function logoMark() {
	const src = path.join(root, 'src/assets/brand/ciya-logo.png');
	const left = await sharp(src).extract({ left: 100, top: 0, width: 540, height: 515 }).png().toBuffer();
	const tail = await sharp(src).extract({ left: 640, top: 0, width: 105, height: 238 }).png().toBuffer();
	const joined = await sharp({ create: { width: 645, height: 515, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
		.composite([
			{ input: left, left: 0, top: 0 },
			{ input: tail, left: 540, top: 0 },
		])
		.png()
		.toBuffer();
	return sharp(joined).trim({ threshold: 1 }).png().toBuffer();
}

async function iconTile(mark, size, { pad = 0.06, radius = 0.2, rounded = true } = {}) {
	const inner = Math.round(size * (1 - 2 * pad));
	const resized = await sharp(mark).resize(inner, inner, { fit: 'inside', kernel: 'lanczos3' }).png().toBuffer();
	const meta = await sharp(resized).metadata();
	const r = rounded ? Math.round(size * radius) : 0;
	const bg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${r}" fill="#FFFFFF"/></svg>`);
	return sharp(bg)
		.composite([{ input: resized, left: Math.round((size - meta.width) / 2), top: Math.round((size - meta.height) / 2) }])
		.png()
		.toBuffer();
}

// ICO container holding several PNG images (valid since Windows Vista).
function pngsToIco(images) {
	const header = Buffer.alloc(6);
	header.writeUInt16LE(0, 0);
	header.writeUInt16LE(1, 2);
	header.writeUInt16LE(images.length, 4);
	let offset = 6 + 16 * images.length;
	const dirs = images.map(({ size, buf }) => {
		const d = Buffer.alloc(16);
		d.writeUInt8(size >= 256 ? 0 : size, 0);
		d.writeUInt8(size >= 256 ? 0 : size, 1);
		d.writeUInt16LE(1, 4);
		d.writeUInt16LE(32, 6);
		d.writeUInt32LE(buf.length, 8);
		d.writeUInt32LE(offset, 12);
		offset += buf.length;
		return d;
	});
	return Buffer.concat([header, ...dirs, ...images.map((i) => i.buf)]);
}

async function buildLogoIcons() {
	const mark = await logoMark();
	const out = async (rel, buf) => {
		await writeFile(path.join(root, rel), buf);
		console.log('wrote', rel);
	};
	const ico = [];
	for (const size of [16, 32, 48]) ico.push({ size, buf: await iconTile(mark, size, { pad: 0.04 }) });
	await out('public/favicon.ico', pngsToIco(ico));
	await out('public/favicon-96x96.png', await iconTile(mark, 96));
	// Apple adds its own rounding; square tile with a bit more padding.
	await out('public/apple-touch-icon.png', await iconTile(mark, 180, { pad: 0.1, rounded: false }));
	await out('public/icon-192.png', await iconTile(mark, 192, { pad: 0.1, rounded: false }));
	await out('public/icon-512.png', await iconTile(mark, 512, { pad: 0.1, rounded: false }));
	// Full logo for LocalBusiness schema / Google (raster, on white, crawlable).
	const logo = await sharp(path.join(root, 'src/assets/brand/ciya-logo.png')).resize(800).flatten({ background: '#FFFFFF' }).png().toBuffer();
	await out('public/brand/logo.png', logo);
}

async function main() {
	const brandDir = path.join(root, 'public/brand');
	await mkdir(brandDir, { recursive: true });

	// 1–4. Favicons + app icons from the client's real logo (the "C + roof" part), on a white tile.
	await buildLogoIcons();

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

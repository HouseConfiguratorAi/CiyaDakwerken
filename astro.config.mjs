// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Live deploy (Vercel). Swap for the client's own domain when available (also in src/data/site.ts).
const siteUrl = 'https://cya-dakwerken-1.vercel.app';

// https://astro.build/config
export default defineConfig({
	site: siteUrl,
	trailingSlash: 'always',
	build: {
		format: 'directory',
		inlineStylesheets: 'auto',
	},
	integrations: [sitemap()],
	image: {
		responsiveStyles: true,
		layout: 'constrained',
	},
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Big Shoulders',
			cssVariable: '--font-display',
			weights: [600, 700, 800],
			fallbacks: ['Impact', 'Arial Narrow Bold', 'sans-serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'IBM Plex Sans',
			cssVariable: '--font-body',
			weights: [400, 500, 600],
			fallbacks: ['Helvetica Neue', 'Arial', 'sans-serif'],
		},
	],
});

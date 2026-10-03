import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Kennisbank: advice articles in Belgian Dutch. General roofing knowledge, hedged where variable;
// never prices, never guarantees in years, never claims about a specific client project.
const kennisbank = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/kennisbank' }),
	schema: z.object({
		title: z.string(),
		description: z.string().min(120).max(160),
		/** Related service slug (see data/services.ts). */
		service: z.string(),
		/** Other service slugs this article is relevant to (feeds the advice block on those service pages). */
		related: z.array(z.string()).default([]),
		/** Short question the article answers — used as card teaser. */
		question: z.string(),
		updated: z.string(), // YYYY-MM
		order: z.number().default(99),
	}),
});

export const collections = { kennisbank };

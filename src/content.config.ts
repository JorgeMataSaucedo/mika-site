import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    cert: z.enum(['AI-102', 'AZ-204', 'AZ-500', 'thesis']).optional(),
    seriesNumber: z.number().optional(),
    publishDate: z.coerce.date(),
    status: z.enum(['draft', 'published']).default('draft'),
    summary: z.string(),
    readingMinutes: z.number().optional(),
  }),
});

const docs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number().default(99),
    updatedAt: z.coerce.date().optional(),
  }),
});

export const collections = { posts, docs };

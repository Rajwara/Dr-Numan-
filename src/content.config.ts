import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * All long-form writing lives as Markdown/MDX in /content (see Read Me, rule 2).
 * Listing pages are generated from these folders automatically.
 */

const insights = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './content/insights' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
    category: z.enum(['Cricket', 'History', 'Medicine', 'Guest']),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    pinned: z.boolean().default(false),
    // Guest author (leave empty for Dr. Niaz)
    author: z.string().default('Dr. Nauman Niaz'),
    authorPhoto: z.string().optional(),
    authorRole: z.string().optional(),
    // SEO
    metaDescription: z.string().optional(),
    ogImage: z.string().optional(),
  }),
});

const conversations = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './content/conversations' }),
  schema: z.object({
    title: z.string(),
    guest: z.string(),
    guestRole: z.string(),
    guestPhoto: z.string().optional(),
    guestBio: z.string(),
    guestLinks: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
    date: z.coerce.date(),
    duration: z.string(), // e.g. "48 min"
    series: z.string().default('Main series'),
    format: z.enum(['Video', 'Audio']),
    youtubeId: z.string().optional(), // Video episodes
    audioUrl: z.string().optional(), // Audio episodes
    thumbnail: z.string().optional(),
    showNotes: z
      .array(z.object({ time: z.string(), topic: z.string() }))
      .default([]),
    links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
    transcript: z.string().optional(),
    metaDescription: z.string().optional(),
    ogImage: z.string().optional(),
  }),
});

export const collections = { insights, conversations };

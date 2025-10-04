import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        pubDate: z.coerce.date(),
        description: z.string().optional(),
        slug: z.string().optional(),
        author: z.string().optional(),
        draft: z.boolean().default(false),
    }),
});

export const collections = { posts };
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const factsCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/facts" }),
  schema: z.object({
    id: z.number(),
    category: z.string(),
    categoryEs: z.string(),
    categoryEn: z.string(),
    es: z.string(),
    en: z.string(),
    tags: z.array(z.string()).optional()
  })
});

export const collections = {
  facts: factsCollection
};

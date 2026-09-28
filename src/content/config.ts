import { defineCollection, z } from 'astro:content';

// Use cases: blijvende productpagina's (tekst + beeld + straks video) per toepassing van GRiDS.
// Bron: LejaUseCase-nodes in neo4j-leja; publicatie via route-marketing-publish (git-adapter).
const usecases = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    klant: z.string(),
    sector: z.string().optional(),
    persona: z.array(z.string()).default([]),
    stappen: z.array(z.string()).default([]),
    resultaat: z.string().optional(),
    image: z.string().optional(),
    video: z.string().optional(),
    order: z.number().default(99),
    draft: z.boolean().default(false),
    updated: z.coerce.date().optional(),
  }),
});

export const collections = { usecases };

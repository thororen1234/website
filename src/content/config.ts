import { defineCollection, z } from 'astro:content'

// TODO
const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
    }),
})

export const collections = { blog }

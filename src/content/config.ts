import { defineCollection, reference, z} from 'astro:content';
// 2. Define your collection(s)
const columna = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      edition: z.string(),
      date: z.string(),
      picture: z.string(),
      pictureAnchor: z.string(),
      relatedPosts: z.array(reference('columna')),
    })
  });

  export const collections = { columna };

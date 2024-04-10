import { defineCollection, reference, z} from 'astro:content';
// 2. Define your collection(s)
const columna = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      edition: z.string(),
      date: z.string(),
      picture: z.string(),
    })
  });

  const documentos = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      category: z.string(),
      org: z.string(),
      date: z.string(),
    })
  });

  export const collections = {documentos, columna };

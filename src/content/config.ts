import { defineCollection, reference, z} from 'astro:content';
// 2. Define your collection(s)
const columna = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      edition: z.string(),
      picture: z.string(),
      tags: z.string().optional(),
      publishDate: z.date()
    })
  });

  const documentos = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      category: z.string(),
      org: z.string(),
      publishDate: z.date(),
      picture: z.string().optional()
    })
  });

  export const collections = {documentos, columna };

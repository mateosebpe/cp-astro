import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('columna');
  return rss({
    title: 'La Columna del Pueblo',
    description: 'Todas las ediciones de La Columna del Pueblo',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.edition,
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/blog/[slug]` routes
      link: `/columna/${post.slug}/`,
    })),
  });
}
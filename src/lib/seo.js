import { siteUrl } from '@/site-config';

/**
 * Build meta tags for a blog post.
 * Used inside `generateMetadata`.
 */
export function buildPostMeta({ title, description, slug, date, tags }) {
  const url = `${siteUrl}/blog/${slug}`;
  // Note: /api/og is assumed to exist if used. For now, we'll just provide the metadata.
  const ogImage = `${siteUrl}/api/og?title=${encodeURIComponent(
    title
  )}&tags=${encodeURIComponent(tags.join(','))}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      article: {
        publishedTime: date instanceof Date ? date.toISOString() : date,
        tags
      },
      images: [{ url: ogImage, alt: title }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage]
    }
  };
}

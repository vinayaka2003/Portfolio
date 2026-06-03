import { siteUrl, author } from '@/site-config';

/**
 * Build meta tags for a blog post.
 * Used inside `generateMetadata`.
 */
export function buildPostMeta({ title, description, slug, date, tags, keywords = [] }) {
  const url = `${siteUrl}/blog/${slug}`;
  // Note: /api/og is assumed to exist if used. For now, we'll just provide the metadata.
  const ogImage = `${siteUrl}/api/og?title=${encodeURIComponent(
    title
  )}&tags=${encodeURIComponent(tags.join(','))}`;

  return {
    title,
    description,
    keywords: [...tags, ...keywords],
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      article: {
        publishedTime: date instanceof Date ? date.toISOString() : date,
        tags,
        author: author.name
      },
      images: [{ url: ogImage, alt: title }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage]
    },
    alternates: {
      canonical: url
    }
  };
}

/**
 * Build JSON-LD structured data for an article.
 */
export function buildArticleJsonLd({ title, description, slug, date, tags, content }) {
  const url = `${siteUrl}/blog/${slug}`;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    image: `${siteUrl}/og-image.png`,
    datePublished: date instanceof Date ? date.toISOString() : date,
    author: {
      '@type': 'Person',
      name: author.name,
      url: author.url
    },
    publisher: {
      '@type': 'Organization',
      name: 'Vinayaka',
      url: siteUrl
    },
    keywords: tags.join(', '),
    url: url
  };
}

/**
 * Build JSON-LD structured data for the organization.
 */
export function buildOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author.name,
    url: siteUrl,
    email: author.email,
    jobTitle: 'Full-Stack Developer',
    knowsAbout: ['Python', 'JavaScript', 'React', 'Next.js', 'FastAPI', 'Machine Learning', 'AI'],
    sameAs: [
      'https://github.com/vinayaka2003',
      'https://linkedin.com/in/vinayaka2003',
      'https://twitter.com/vinayaka_s_y'
    ],
    image: `${siteUrl}/og-image.png`
  };
}

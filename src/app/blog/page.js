// file: src/app/blog/page.js
import { getAllPosts } from '@/lib/blog';
import BlogListItem from '@/components/BlogListItem';
import Layout from '@/components/Layout';

export const metadata = {
  title: 'Blog — Vinayaka | Articles on AI, SaaS & Development',
  description: 'Read insightful articles about AI, SaaS development, FastAPI, React, automation, and modern web technologies. Learn from real-world projects and technical insights.',
  keywords: ['Blog', 'AI', 'SaaS', 'FastAPI', 'React', 'Web Development', 'Automation', 'Machine Learning', 'Python', 'Tech Articles', 'Development'],
  openGraph: {
    title: 'Blog — Vinayaka | Articles on AI, SaaS & Development',
    description: 'Read insightful articles about AI, SaaS development, FastAPI, React, automation, and modern web technologies.',
    url: 'https://vinayaka.dev/blog',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Vinayaka Blog' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — Vinayaka | Articles on AI, SaaS & Development',
    description: 'Read insightful articles about AI, SaaS development, FastAPI, React, automation, and modern web technologies.',
    images: ['/og-image.png']
  },
  alternates: {
    canonical: 'https://vinayaka.dev/blog'
  }
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <Layout>
      <section className="max-w-3xl mx-auto py-24 px-6">
        
        {posts.length > 0 ? (
          <div className="flex flex-col">
            {posts.map(post => (
              <BlogListItem key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-lg text-gray-500 dark:text-muted">No posts found yet. Check back soon!</p>
          </div>
        )}
      </section>
    </Layout>
  );
}
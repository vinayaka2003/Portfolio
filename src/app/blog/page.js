// file: src/app/blog/page.js
import { getAllPosts } from '@/lib/blog';
import BlogListItem from '@/components/BlogListItem';
import Layout from '@/components/Layout';

export const metadata = {
  title: 'Blog | Vinay Portfolio',
  description: 'Insights on AI, SaaS, automation and more.'
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
            <p className="text-lg text-muted-light dark:text-muted-dark">No posts found yet. Check back soon!</p>
          </div>
        )}
      </section>
    </Layout>
  );
}
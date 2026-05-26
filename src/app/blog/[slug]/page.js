// file: src/app/blog/[slug]/page.js
import { getAllPosts, getPostBySlug, formatDate } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import Layout from '@/components/Layout';
import ProgressBar from '@/components/ProgressBar';
import { buildPostMeta } from '@/lib/seo';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import readingTime from 'reading-time';

// Generate static params for SSG
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(p => ({ slug: p.slug }));
}

// SEO metadata per post
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return buildPostMeta({
    title: post.frontMatter.title,
    description: post.frontMatter.description,
    slug,
    date: post.frontMatter.date,
    tags: post.frontMatter.tags
  });
}

// Main component
export default async function PostPage({ params }) {
  const { slug } = await params;
  const { frontMatter, content } = getPostBySlug(slug);

  return (
    <Layout>
      <ProgressBar />
      <article className="max-w-4xl mx-auto py-24 px-6">
        <div className="mb-16">
          <Link href="/blog" className="text-sm font-bold uppercase tracking-[0.2em] text-muted hover:text-accent transition-colors inline-flex items-center gap-2 mb-12">
            ← Back to Journal
          </Link>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-accent leading-[0.9]">
            {frontMatter.title}
          </h1>

          <div className="flex items-center text-sm font-medium text-muted uppercase tracking-widest border-b border-border pb-10">
            <time>{formatDate(frontMatter.date)}</time>
            <span className="mx-3">·</span>
            <span>{readingTime(content).text}</span>
          </div>
        </div>

        <div className="prose dark:prose-invert max-w-none prose-headings:tracking-tighter prose-p:leading-relaxed prose-p:text-lg">
          <MDXRemote 
            source={content} 
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  rehypeSlug,
                  [rehypeAutolinkHeadings, { behavior: 'wrap' }],
                  [rehypePrettyCode, { theme: 'nord' }]
                ]
              }
            }}
          />
        </div>
      </article>
    </Layout>
  );
}

<div>
</div>

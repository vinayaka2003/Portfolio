// file: src/components/BlogCard.js
import Link from 'next/link';
import TagBadge from './TagBadge';
import { formatDate } from '@/lib/blog';

export default function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <article className="p-6 bg-surface-light dark:bg-surface rounded-lg shadow-sm hover:shadow-lg transition h-full flex flex-col border border-transparent dark:border-border hover:border-primary-light dark:hover:border-white/35">
        <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary-light dark:group-hover:text-foreground">
          {post.title}
        </h2>
        <p className="text-muted-light dark:text-muted-dark flex-grow">{post.description || post.excerpt}</p>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-light dark:text-muted-dark">
          <span>{formatDate(post.date)}</span>
          <span className="text-primary-light dark:text-primary-dark">·</span>
          <span>{post.readingTime}</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {post.tags.map(tag => (
            <TagBadge key={tag} tag={tag} />
          ))}
        </div>
      </article>
    </Link>
  );
}

import Link from 'next/link';
import { formatDate } from '@/lib/blog';

export default function BlogListItem({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block mb-4 p-4 bg-white dark:bg-surface/40 backdrop-blur-sm rounded-xl border border-gray-200/60 dark:border-white/5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 dark:hover:border-white/15 dark:hover:bg-surface/75 dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
      <article className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl md:text-2xl font-medium tracking-tight text-foreground group-hover:opacity-70 transition-opacity duration-300">
            {post.title}
          </h2>
          <p className="text-sm text-gray-500 dark:text-muted mt-1">{formatDate(post.date)}</p>
        </div>

        <span className="inline-flex w-fit items-center justify-center rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition duration-300 group-hover:border-gray-400 group-hover:bg-gray-50 dark:border-border dark:text-foreground dark:group-hover:border-white/20 dark:group-hover:bg-surface-hover">
          Read article
        </span>
      </article>
    </Link>
  );
}

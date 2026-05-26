import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { format } from 'date-fns';

const POSTS_DIR = path.join(process.cwd(), 'src', 'app', 'blog', 'posts');

/**
 * Read all MDX files, parse front‑matter and calculate reading time.
 * Returns an array sorted newest → oldest.
 */
export function getAllPosts() {
  if (!fs.existsSync(POSTS_DIR)) {
    return [];
  }

  const filenames = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.mdx'));

  const posts = filenames.map(filename => {
    const filePath = path.join(POSTS_DIR, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');

    const { data, content } = matter(fileContents);
    const slug = filename.replace(/\.mdx?$/, '');

    const excerptText = content.slice(0, 200).replace(/\s+$/g, '');
    return {
      slug,
      title: data.title ?? slug,
      description: data.description ?? excerptText + '…',
      date: data.date ? new Date(data.date) : new Date(),
      tags: data.tags ?? [],
      readingTime: readingTime(content).text,
      excerpt: excerptText + '…'
    };
  });

  // Newest first
  return posts.sort((a, b) => b.date - a.date);
}

/**
 * Get a single post by slug, returning front‑matter + raw MDX content.
 */
export function getPostBySlug(slug) {
  const fullPath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found: ${slug}`);
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    frontMatter: {
      title: data.title ?? slug,
      description: data.description ?? '',
      date: data.date ? new Date(data.date) : new Date(),
      tags: data.tags ?? []
    },
    content
  };
}

/**
 * Format a Date instance to a friendly string.
 */
export function formatDate(dateObj) {
  return format(dateObj, 'PPP'); // e.g., Jan 1, 2024
}

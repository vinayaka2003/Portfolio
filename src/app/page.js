import Link from "next/link";
import Image from "next/image";
import HeroClient from "./components/HomeClient";
import BlogCard from "@/components/BlogCard";
import { projects } from '@/lib/projects';
import { getAllPosts } from '@/lib/blog';

export const revalidate = 86400;

export default function Home() {
  const days = Math.floor(Date.now() / (1000 * 60 * 60 * 24));

  const featuredCandidates = projects.filter((p) => p.featured);
  const featuredProject = featuredCandidates.length
    ? featuredCandidates[days % featuredCandidates.length]
    : projects[days % projects.length];

  const projectTags = featuredProject?.stack ? featuredProject.stack.split(' · ').slice(0, 4) : [];

  const postsRaw = getAllPosts();
  const postsToShow = [];
  if (postsRaw.length > 0) {
    const start = (days * 2) % postsRaw.length;
    postsToShow.push(postsRaw[start]);
    if (postsRaw.length > 1) postsToShow.push(postsRaw[(start + 1) % postsRaw.length]);
  }

  return (
    <div className="min-h-screen bg-white dark:bg-transparent text-black dark:text-foreground overflow-x-hidden">
      <HeroClient />

      <section className="border-b border-gray-100 dark:border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-28">
          <div className="flex flex-col lg:flex-row lg:items-center gap-10">
            <div className="flex-1">
              <p className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-4">
                Featured Project
              </p>
              <div className="rounded-3xl border border-gray-200/60 bg-white/80 p-5 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 dark:border-white/5 dark:bg-surface/40 backdrop-blur-sm dark:hover:border-white/15 dark:hover:bg-surface/75 dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gray-500 dark:text-muted">Today’s pick</span>
                    <span className="inline-flex items-center rounded-full bg-black text-white text-[9px] sm:text-[10px] font-semibold uppercase px-2.5 py-1 sm:px-3 sm:py-1.5">
                      Featured
                    </span>
                  </div>

                  <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-3 sm:mb-5 text-slate-900 dark:text-white">
                      {featuredProject?.title ?? 'Featured Project'}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      {featuredProject?.desc ?? 'A selected project from the portfolio.'}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {projectTags.map((item) => (
                      <span key={item} className="inline-flex items-center rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs text-gray-600 dark:text-gray-300">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-row gap-3 sm:gap-4 w-full sm:w-auto mt-4">
                    <Link href="/projects" className="flex-1 sm:flex-none inline-flex items-center justify-center rounded-full bg-black px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-white hover:opacity-90 transition whitespace-nowrap">
                      View Project
                    </Link>
                    <a href={featuredProject?.github ?? '#'} target="_blank" rel="noreferrer" className="flex-1 sm:flex-none inline-flex items-center justify-center rounded-full border border-gray-200 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm text-gray-700 hover:bg-gray-50 dark:border-white/10 dark:text-gray-200 dark:hover:bg-white/5 transition whitespace-nowrap">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-100 dark:border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-3">Writing</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white">Latest articles</h2>
            </div>
            <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition">
              More posts →
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {postsToShow.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-3">Let’s connect.</h2>
              <p className="text-gray-500 dark:text-muted max-w-lg leading-relaxed">
                Interested in AI, automation, and building useful software.
              </p>
            </div>
            <Link href="/contact" className="px-6 py-3 border border-gray-200 dark:border-border rounded-xl text-sm hover:bg-gray-50 dark:hover:bg-surface-hover dark:hover:text-foreground transition w-fit">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

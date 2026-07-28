export const metadata = {
  title: "Projects — Vinayaka | AI & SaaS Portfolio",
  description: "Explore AI/ML projects, SaaS platforms, and full-stack applications. AutoFlow, AI Resume Analyzer, and more built with Python, React, and FastAPI.",
  keywords: ['Projects', 'Portfolio', 'AI Resume Analyzer', 'AutoFlow', 'SaaS', 'Full-Stack', 'Python', 'React', 'Machine Learning', 'Open Source', 'GitHub'],
  openGraph: {
    title: 'Projects — Vinayaka | AI & SaaS Portfolio',
    description: 'Explore AI/ML projects, SaaS platforms, and full-stack applications built with Python, React, and FastAPI.',
    url: 'https://vinayaka.dev/projects',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Vinayaka Projects' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects — Vinayaka | AI & SaaS Portfolio',
    description: 'Explore AI/ML projects, SaaS platforms, and full-stack applications built with Python, React, and FastAPI.',
    images: ['/og-image.png']
  },
  alternates: {
    canonical: 'https://vinayaka.dev/projects'
  }
};

import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/lib/projects';

export default function Projects() {
  return (
    <section className="px-6 md:px-10 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">Projects</p>
          <h1 className="mb-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-foreground md:text-4xl">
            Selected work
          </h1>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-muted md:text-base">
            A collection of projects spanning web, AI, and data.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-2xl border border-gray-200/60 bg-white/50 p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 dark:border-white/5 dark:bg-surface/40 backdrop-blur-sm dark:hover:border-white/15 dark:hover:bg-surface/75 dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
            >
              <div className="mb-3 sm:mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-foreground">{project.title}</h3>
                  <p className="text-[11px] sm:text-xs text-gray-500 dark:text-muted">{project.category} • {project.year}</p>
                </div>
              </div>

              <p className="mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed text-gray-600 dark:text-muted">{project.desc}</p>

              <div className="mb-3 sm:mb-4 flex flex-wrap gap-1.5">
                {project.stack.split(' · ').map((tech) => (
                  <span key={tech} className="rounded text-[10px] sm:text-xs px-2 py-0.5 sm:py-1 bg-gray-100 text-gray-700 dark:bg-white/10 dark:text-muted">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2.5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs sm:text-sm text-gray-700 transition hover:text-black dark:text-muted dark:hover:text-foreground"
                >
                  GitHub <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs sm:text-sm text-gray-700 transition hover:text-black dark:text-muted dark:hover:text-foreground"
                  >
                    Demo <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

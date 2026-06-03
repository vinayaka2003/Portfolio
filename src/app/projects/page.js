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

import { projects } from '@/lib/projects';

export default function Projects() {
  return (
    <>
      <section className="px-6 md:px-10 py-20">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-10">Projects</p>
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map(({ title, stack, desc, github, demo, featured }) => (
            <div
              key={title}
              className="border border-gray-200 dark:border-border rounded-2xl p-6 hover:border-gray-400 dark:hover:border-white/35 transition duration-200 bg-white dark:bg-surface/80"
            >
              {featured && (
                <span className="inline-block text-xs px-2 py-0.5 bg-gray-100 dark:bg-white/8 text-gray-700 dark:text-foreground border border-gray-200 dark:border-white/10 rounded-md mb-3">
                  Featured
                </span>
              )}
              <div className="flex flex-wrap gap-2 mb-3">
                {stack.split(' · ').map((tech) => (
                  <span key={tech} className="text-[10px] font-medium px-2.5 py-1 bg-gray-100 dark:bg-surface-hover text-gray-700 dark:text-muted rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-medium mb-2 dark:text-foreground">{title}</h3>
              <p className="text-sm text-gray-500 dark:text-muted leading-relaxed mb-5">{desc}</p>
              <div className="flex gap-5 mt-auto">
                <a href={github} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-500 dark:text-muted hover:text-black dark:hover:text-foreground transition-colors">GitHub ↗</a>
                <a href={demo} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-500 dark:text-muted hover:text-black dark:hover:text-foreground transition-colors">Live demo ↗</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

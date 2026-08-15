"use client";

import { useState, useEffect } from "react";
import { projects } from "@/lib/projects";
import { ProjectMockupSelector } from "@/app/components/ProjectMockups";

const FEATURED_TITLES = [
  "habee craft",
  "goldstone fitness website",
  "ai resume analyzer"
];

// Reusable Featured Project Presentation Component
function FeaturedProject({ project }) {
  return (
    <article className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-8 border-b border-border/40 last:border-b-0 items-start">
      {/* Visual Preview Column */}
      <div className="md:col-span-5 w-full">
        <ProjectMockupSelector title={project.title} />
      </div>

      {/* Details Column */}
      <div className="md:col-span-7 flex flex-col justify-between h-full space-y-4">
        <div>
          {/* Category & Year Row */}
          <div className="flex items-center gap-3 text-xs font-mono text-muted/65 uppercase tracking-wider mb-2 select-none">
            <span>{project.category}</span>
            <span className="w-1 h-1 rounded-full bg-border" aria-hidden="true"></span>
            <span>{project.year}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-foreground font-serif leading-tight mb-3">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-[15px] sm:text-base leading-relaxed text-muted/80 font-serif mb-4">
            {project.desc}
          </p>

          {/* Highlights List */}
          {project.highlights && (
            <ul className="list-disc pl-4 space-y-1 text-xs text-muted/75 font-serif mb-4 leading-relaxed">
              {project.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          )}

          {/* Tech Stack List */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.stack.split("·").map((tech) => (
              <span key={tech} className="px-2.5 py-0.5 text-[10.5px] font-sans font-medium bg-border/40 text-muted/90 rounded-md select-none">
                {tech.trim()}
              </span>
            ))}
          </div>
        </div>

        {/* Project Links/Actions */}
        <div className="flex items-center gap-6 pt-1 select-none font-sans text-xs sm:text-[13px] text-muted">
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-accent font-semibold transition-colors duration-205 inline-flex items-center gap-0.5 group/link"
            >
              Live Demo <span className="text-[10px] ml-0.5 font-sans inline-block transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">↗</span>
            </a>
          )}
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-accent font-semibold transition-colors duration-205 inline-flex items-center gap-0.5 group/link"
          >
            GitHub <span className="text-[10px] ml-0.5 font-sans inline-block transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}

// Reusable Supporting Project Presentation Component
function SupportingProject({ project }) {
  return (
    <div className="py-5 border-b border-border/50 hover:border-accent/40 flex flex-col justify-between space-y-3 transition-colors duration-300 group">
      <div>
        {/* Title & Year Row */}
        <div className="flex justify-between items-baseline gap-2">
          <h4 className="text-base sm:text-[17px] font-bold text-foreground group-hover:text-accent transition-colors duration-200 font-serif leading-snug">
            {project.title}
          </h4>
          <span className="font-mono text-xs text-muted/65 tracking-wider select-none">
            {project.year}
          </span>
        </div>

        {/* Stack */}
        <div className="text-[11px] font-sans text-muted/70 uppercase tracking-wider mb-2 mt-0.5">
          {project.stack}
        </div>

        {/* Description */}
        <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-muted/80 font-serif">
          {project.desc}
        </p>
      </div>

      {/* Links Row */}
      <div className="flex items-center gap-4 text-xs font-sans text-muted/80 pt-1 select-none">
        {project.demo && (
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-accent font-medium transition-colors duration-200 inline-flex items-center gap-0.5 group/link"
          >
            Live <span className="text-[9px] ml-0.5 font-sans inline-block transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">↗</span>
          </a>
        )}
        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-accent font-medium transition-colors duration-200 inline-flex items-center gap-0.5 group/link"
        >
          GitHub <span className="text-[9px] ml-0.5 font-sans inline-block transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">↗</span>
        </a>
      </div>
    </div>
  );
}

export default function ProjectsClient() {
  const [activeFilter, setActiveFilter] = useState(null);

  // Listen to filter events from CMD+K Search Modal
  useEffect(() => {
    const handleFilter = (e) => {
      setActiveFilter(e.detail);
    };
    window.addEventListener("filter-project", handleFilter);
    return () => window.removeEventListener("filter-project", handleFilter);
  }, []);

  // Filter projects based on active selection (from Search Modal)
  const filteredProjects = activeFilter
    ? projects.filter(p => p.stack.toLowerCase().includes(activeFilter.toLowerCase()) || p.title.toLowerCase().includes(activeFilter.toLowerCase()))
    : projects;

  // Separate into Featured and Supporting lists
  const featuredProjects = filteredProjects.filter(p =>
    FEATURED_TITLES.includes(p.title.toLowerCase())
  );
  const supportingProjects = filteredProjects.filter(p =>
    !FEATURED_TITLES.includes(p.title.toLowerCase())
  );

  return (
    <div className="pt-6 md:pt-0 pb-2 font-serif antialiased">
      
      {/* Introduction */}
      <header className="mb-10 sm:mb-12">
        <h1 className="text-[clamp(2.1rem,3.2vw,3.2rem)] font-bold tracking-[-0.02em] leading-[1.02] text-foreground mb-3 font-serif">
          Projects
        </h1>
        <p className="text-[17px] sm:text-[18px] leading-[1.68] text-muted/80 font-serif max-w-[720px]">
          A collection of things I&apos;ve built, experimented with, and learned from.
        </p>
        
        {/* Active Filter Banner */}
        {activeFilter && (
          <div className="mt-4 flex items-center gap-2 select-none">
            <span className="text-xs font-sans text-muted">
              Filtering by: <strong className="text-foreground font-semibold">{activeFilter}</strong>
            </span>
            <button 
              onClick={() => setActiveFilter(null)}
              className="text-[10px] font-sans font-bold uppercase tracking-wider text-accent hover:text-foreground border border-accent/25 hover:border-foreground/30 px-2 py-0.5 rounded transition-colors cursor-pointer"
            >
              Clear Filter
            </button>
          </div>
        )}
      </header>

      {/* Featured Projects Showcase */}
      {featuredProjects.length > 0 && (
        <section className="space-y-12 mb-16 sm:mb-20">
          <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-muted/75 border-b border-border/50 pb-2.5 mb-6 select-none">
            Featured Projects
          </h2>
          <div className="flex flex-col space-y-6">
            {featuredProjects.map((project) => (
              <FeaturedProject key={project.title} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* Supporting Projects Archive Grid */}
      {supportingProjects.length > 0 && (
        <section>
          <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-muted/75 border-b border-border/50 pb-2.5 mb-6 select-none">
            Other Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2">
            {supportingProjects.map((project) => (
              <SupportingProject key={project.title} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* Empty State */}
      {featuredProjects.length === 0 && supportingProjects.length === 0 && (
        <div className="py-12 text-center text-[15px] sm:text-base text-muted/65 font-serif border border-dashed border-border/80 rounded-2xl">
          No projects matching your filter.
        </div>
      )}
    </div>
  );
}

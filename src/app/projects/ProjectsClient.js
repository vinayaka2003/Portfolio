import { projects } from "@/lib/projects";

// Requested priority ordering array
const priorityOrder = [
  "habee craft",
  "goldstone fitness website",
  "digital product store",
  "roadassist",
  "ai resume analyzer",
  "ai order system",
  "world atlas",
  "weather application",
  "uidai data analysis system"
];

export default function ProjectsClient() {
  // Sort projects according to priority order
  const sortedProjects = [...projects].sort((a, b) => {
    const aIndex = priorityOrder.indexOf(a.title.toLowerCase());
    const bIndex = priorityOrder.indexOf(b.title.toLowerCase());
    return (aIndex > -1 ? aIndex : 99) - (bIndex > -1 ? bIndex : 99);
  });

  return (
    <div className="py-8 sm:py-12 font-serif antialiased">
      
      {/* Introduction */}
      <h1 className="text-[34px] sm:text-[44px] font-bold tracking-tight text-foreground mb-3 font-serif leading-tight">
        Projects
      </h1>
      <p className="text-[17px] sm:text-[18px] leading-[1.65] text-muted font-serif mb-10 sm:mb-12">
        A collection of things I&apos;ve built, experimented with, and learned from.
      </p>

      {/* Project Archive List */}
      <div className="border-t border-border">
        {sortedProjects.map((project) => (
          <div 
            key={project.title} 
            className="py-5 border-b border-border/60 flex flex-col space-y-1.5 group"
          >
            {/* Title & Year Row */}
            <div className="flex justify-between items-baseline">
              <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-200 font-serif leading-snug">
                {project.title}
              </h3>
              <span className="text-xs sm:text-sm font-sans text-muted select-none">
                {project.year}
              </span>
            </div>
            
            {/* Description Row */}
            <p className="text-sm sm:text-[15px] leading-relaxed text-muted font-serif">
              {project.desc}
            </p>

            {/* Stack & Links Row */}
            <div className="flex justify-between items-center text-xs sm:text-[13px] font-sans text-muted">
              <span>{project.stack}</span>
              <div className="flex gap-4 select-none">
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-accent transition-colors duration-200 inline-flex items-center gap-0.5 group/link"
                  >
                    Live <span className="inline-block transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">↗</span>
                  </a>
                )}
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-accent transition-colors duration-200 inline-flex items-center gap-0.5 group/link"
                >
                  GitHub <span className="inline-block transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">↗</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

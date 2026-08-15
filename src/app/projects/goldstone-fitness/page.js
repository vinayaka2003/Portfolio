import Link from "next/link";
import { GymMock } from "@/app/components/ProjectMockups";

export const metadata = {
  title: "Goldstone Fitness Case Study — Vinayaka S",
  description: "A detailed case study of the Goldstone Fitness website, a modern static marketing portal showcasing membership tiers, trainer details, and gym facilities.",
};

export default function GoldstoneFitnessCaseStudy() {
  const techStack = [
    "Next.js",
    "React",
    "JavaScript",
    "CSS Modules",
    "Vercel"
  ];

  const components = [
    { name: "Navbar", desc: "Mobile-friendly navigation header." },
    { name: "Hero", desc: "Value statement and primary WhatsApp action." },
    { name: "About & Stats", desc: "Gym mission statement and milestones list." },
    { name: "Facilities & Gallery", desc: "Visual highlights of training zones." },
    { name: "Trainers & Testimonials", desc: "Certified coaching staff and member reviews." },
    { name: "Pricing & FAQ", desc: "Membership packages and common onboarding queries." },
    { name: "Contact & Footer", desc: "Enquiry links and page navigation loops." }
  ];

  return (
    <div className="pt-6 sm:pt-8 lg:pt-10 pb-16 font-serif antialiased max-w-[720px] lg:max-w-[760px] mx-auto">
      
      {/* CASE STUDY HEADER */}
      <header className="mb-10 sm:mb-12">
        {/* Category & Metadata */}
        <div className="flex items-center gap-3 text-xs font-mono text-muted/90 uppercase tracking-wider mb-4 select-none">
          <span>Project / 02</span>
          <span className="w-1.5 h-1.5 rounded-full bg-border" aria-hidden="true"></span>
          <span>2026</span>
          <span className="w-1.5 h-1.5 rounded-full bg-border" aria-hidden="true"></span>
          <span>Web Development</span>
        </div>

        {/* Title */}
        <h1 className="text-[clamp(2.25rem,4vw,3.75rem)] font-bold tracking-[-0.03em] leading-[0.98] text-foreground mb-4">
          Goldstone Fitness
        </h1>

        {/* Subtitle */}
        <p className="text-[18.5px] sm:text-[20px] lg:text-[21px] leading-[1.4] text-muted font-serif mb-6">
          A modern fitness website designed to present the gym, its facilities, programs, and membership information.
        </p>

        {/* Primary Links */}
        <div className="flex items-center gap-6 select-none font-sans text-xs sm:text-[13px]">
          <a 
            href="https://goldstone-fitness.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-foreground hover:text-accent font-semibold transition-colors duration-205 inline-flex items-center gap-0.5 group/link"
          >
            Live Website <span className="text-[10px] ml-0.5 font-sans inline-block transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">↗</span>
          </a>
          <a 
            href="https://github.com/vinayaka2003/gym-website" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-foreground hover:text-accent font-semibold transition-colors duration-205 inline-flex items-center gap-0.5 group/link"
          >
            GitHub <span className="text-[10px] ml-0.5 font-sans inline-block transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">↗</span>
          </a>
        </div>
      </header>

      {/* HERO VISUAL */}
      <section className="mb-12 sm:mb-16 select-none">
        <div className="border border-border/50 rounded-2xl overflow-hidden p-1.5 bg-zinc-50/50 dark:bg-zinc-900/10">
          <GymMock />
        </div>
      </section>

      {/* PROJECT OVERVIEW */}
      <section className="mb-10 sm:mb-12 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-muted border-b border-border/50 pb-2 mb-4 select-none">
          Project Overview
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-[13px] leading-relaxed text-muted bg-zinc-50/50 dark:bg-zinc-900/10 p-5 rounded-2xl border border-border/60">
          <div>
            <span className="block font-bold text-foreground uppercase tracking-wider text-[10px] mb-1">Role</span>
            <span>Developer</span>
          </div>
          <div>
            <span className="block font-bold text-foreground uppercase tracking-wider text-[10px] mb-1">Project Type</span>
            <span>Gym / Fitness Website</span>
          </div>
          <div>
            <span className="block font-bold text-foreground uppercase tracking-wider text-[10px] mb-1">Year</span>
            <span>2026</span>
          </div>
          <div>
            <span className="block font-bold text-foreground uppercase tracking-wider text-[10px] mb-1">Status</span>
            <span>Completed</span>
          </div>
        </div>
      </section>

      {/* THE CONTEXT */}
      <section className="mb-10 sm:mb-12 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-muted border-b border-border/50 pb-2 mb-4 select-none">
          The Context
        </h2>
        <div className="text-[17px] sm:text-[18px] leading-[1.68] text-muted">
          <p>
            Goldstone Fitness is a static web application built to represent a local fitness centre. The website gives potential members a clear way to understand the gym, explore facilities, see trainers, view membership information, read testimonials, check FAQs, and get in touch.
          </p>
        </div>
      </section>

      {/* THE APPROACH */}
      <section className="mb-10 sm:mb-12 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-muted border-b border-border/50 pb-2 mb-4 select-none">
          The Approach
        </h2>
        <div className="space-y-4 text-[17px] sm:text-[18px] leading-[1.68] text-muted">
          <p>
            Rather than designing a single list of information, the project is structured as a logical journey:
          </p>
          <ul className="space-y-3 list-none pl-0 text-[15.5px] sm:text-[16.5px]">
            <li className="border-l-2 border-accent/30 pl-4">
              <strong className="text-foreground font-semibold">Hero Introduction:</strong> Clear value branding paired with direct membership CTAs.
            </li>
            <li className="border-l-2 border-accent/30 pl-4">
              <strong className="text-foreground font-semibold">About &amp; Stats:</strong> A brief overview of the gym mission alongside physical gym metrics.
            </li>
            <li className="border-l-2 border-accent/30 pl-4">
              <strong className="text-foreground font-semibold">Facilities &amp; Gallery:</strong> Media grids showcasing equipment quality and space.
            </li>
            <li className="border-l-2 border-accent/30 pl-4">
              <strong className="text-foreground font-semibold">Trainers &amp; Testimonials:</strong> Displaying coaching credentials and member social proof.
            </li>
            <li className="border-l-2 border-accent/30 pl-4">
              <strong className="text-foreground font-semibold">Pricing, FAQ &amp; Contact:</strong> Pricing details and WhatsApp enquiries options.
            </li>
          </ul>
        </div>
      </section>

      {/* DESIGN DECISIONS */}
      <section className="mb-10 sm:mb-12 space-y-6">
        <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-muted border-b border-border/50 pb-2 mb-4 select-none">
          Design Decisions
        </h2>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-base font-bold text-foreground">Clear CTA Hierarchy</h3>
            <p className="text-[15.5px] sm:text-[16.5px] leading-relaxed text-muted">
              <strong className="text-foreground font-semibold">Why:</strong> Help users take action immediately by presenting clean contact routes.
            </p>
            <p className="text-[15.5px] sm:text-[16.5px] leading-relaxed text-muted">
              <strong className="text-foreground font-semibold">Result:</strong> Direct access to gym lines reduces enquiry drop-off.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-base font-bold text-foreground">Membership &amp; Pricing Presentation</h3>
            <p className="text-[15.5px] sm:text-[16.5px] leading-relaxed text-muted">
              <strong className="text-foreground font-semibold">Why:</strong> Gym pricing is often kept hidden, causing friction. Displaying tiers openly builds trust.
            </p>
            <p className="text-[15.5px] sm:text-[16.5px] leading-relaxed text-muted">
              <strong className="text-foreground font-semibold">Result:</strong> Potential members evaluate pricing plans quickly and easily.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-base font-bold text-foreground">Mobile-First Layout Grid</h3>
            <p className="text-[15.5px] sm:text-[16.5px] leading-relaxed text-muted">
              <strong className="text-foreground font-semibold">Why:</strong> The majority of gym queries are made from mobile devices.
            </p>
            <p className="text-[15.5px] sm:text-[16.5px] leading-relaxed text-muted">
              <strong className="text-foreground font-semibold">Result:</strong> Elements like facilities, gallery, and trainers adapt to single-column views on mobile.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT I BUILT */}
      <section className="mb-10 sm:mb-12 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-muted border-b border-border/50 pb-2 mb-4 select-none">
          What I Built
        </h2>
        <ul className="space-y-3 list-none pl-0 text-[17px] sm:text-[18px] leading-[1.68] text-muted">
          <li className="border-l-2 border-accent/30 pl-4">
            <strong className="text-foreground font-semibold">Hero Intro Header:</strong> Primary entrance showing titles and gym tags.
          </li>
          <li className="border-l-2 border-accent/30 pl-4">
            <strong className="text-foreground font-semibold">Facilities Showcase:</strong> Highlighting equipment and training zones.
          </li>
          <li className="border-l-2 border-accent/30 pl-4">
            <strong className="text-foreground font-semibold">Gallery &amp; Trainer grids:</strong> Grid layouts displaying training locations and coaches.
          </li>
          <li className="border-l-2 border-accent/30 pl-4">
            <strong className="text-foreground font-semibold">Membership Plans &amp; FAQ:</strong> Structuring tiers and onboarding questions.
          </li>
          <li className="border-l-2 border-accent/30 pl-4">
            <strong className="text-foreground font-semibold">WhatsApp Enquiry Route:</strong> Call-to-action link letting users message direct.
          </li>
        </ul>
      </section>

      {/* COMPONENT SYSTEM */}
      <section className="mb-10 sm:mb-12 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-muted border-b border-border/50 pb-2 mb-4 select-none">
          Component System
        </h2>
        <div className="space-y-4 text-[17px] sm:text-[18px] leading-[1.68] text-muted">
          <p>
            The page is structured as a series of modular, reusable React UI components:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            {components.map((comp) => (
              <div key={comp.name} className="border border-border/60 p-4 rounded-xl bg-zinc-50/50 dark:bg-zinc-900/10">
                <span className="font-mono text-xs text-foreground font-bold uppercase tracking-wider block mb-1">
                  {comp.name}
                </span>
                <p className="text-xs text-muted font-serif leading-relaxed">
                  {comp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL IMPLEMENTATION */}
      <section className="mb-10 sm:mb-12 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-muted border-b border-border/50 pb-2 mb-4 select-none">
          Technical Implementation
        </h2>
        <div className="space-y-4 text-[17px] sm:text-[18px] leading-[1.68] text-muted">
          <p>
            The project leverages the Next.js framework for fast load performance, utilizing CSS Modules for scoped styles and Vercel for continuous deployment integration.
          </p>
          <div className="py-4">
            <div className="font-mono text-xs border border-border/60 rounded-xl p-6 bg-zinc-50 dark:bg-zinc-900/30 max-w-sm mx-auto select-none space-y-4">
              <div className="text-center p-2.5 border border-border/80 rounded bg-white dark:bg-zinc-800 font-semibold text-foreground">
                Next.js Frontend
              </div>
              <div className="text-center text-muted">↓</div>
              <div className="text-center p-2.5 border border-border/80 rounded bg-white dark:bg-zinc-800 font-semibold text-foreground">
                React Components
              </div>
              <div className="text-center text-muted">↓</div>
              <div className="text-center p-2.5 border border-border/80 rounded bg-white dark:bg-zinc-800 font-semibold text-foreground">
                CSS Modules Styling
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESPONSIVE DESIGN */}
      <section className="mb-10 sm:mb-12 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-muted border-b border-border/50 pb-2 mb-4 select-none">
          Responsive Design
        </h2>
        <div className="text-[17px] sm:text-[18px] leading-[1.68] text-muted">
          <p>
            The site utilizes mobile-first CSS flexbox and grid layouts, scaling dynamically from 320px mobile screens, to tablets, laptops, and large desktop screens without horizontal overflow or text clipping.
          </p>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="mb-10 sm:mb-12 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-muted border-b border-border/50 pb-2 mb-4 select-none">
          Challenges
        </h2>
        <div className="text-[17px] sm:text-[18px] leading-[1.68] text-muted">
          <p>
            The primary challenge lay in maintaining consistent spacings and proportions across mobile screens and large desktop viewports, which was resolved by implementing responsive spacing classes.
          </p>
        </div>
      </section>

      {/* RESULT */}
      <section className="mb-10 sm:mb-12 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-muted border-b border-border/50 pb-2 mb-4 select-none">
          Result
        </h2>
        <div className="text-[17px] sm:text-[18px] leading-[1.68] text-muted">
          <p>
            A complete responsive fitness website with dedicated sections for facilities, trainers, testimonials, pricing, FAQs, and contact. The layout makes it easy for potential gym members to locate key details.
          </p>
        </div>
      </section>

      {/* WHAT I LEARNED */}
      <section className="mb-10 sm:mb-12 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-muted border-b border-border/50 pb-2 mb-4 select-none">
          What I Learned
        </h2>
        <div className="text-[17px] sm:text-[18px] leading-[1.68] text-muted">
          <p>
            Building this project helped me understand how to structure a multi-section marketing site for a real-world business context, organize code into modular components, and build responsive layouts.
          </p>
        </div>
      </section>

      {/* WHAT I'D IMPROVE */}
      <section className="mb-10 sm:mb-12 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-muted border-b border-border/50 pb-2 mb-4 select-none">
          What I&apos;d Improve
        </h2>
        <div className="space-y-4 text-[17px] sm:text-[18px] leading-[1.68] text-muted font-serif">
          <p>
            For future updates, I plan to integrate a headless CMS (Content Management System) to let gym managers modify class descriptions, pricing, trainers, and gallery images without editing code.
          </p>
          <p>
            I would also explore adding an online booking portal letting users reserve class spots or coordinate training times directly from the web client.
          </p>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="mb-12 sm:mb-16">
        <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-muted/75 border-b border-border/50 pb-2 mb-6 select-none">
          Technologies Used
        </h2>
        <div className="flex flex-wrap gap-2 select-none">
          {techStack.map((tech) => (
            <span key={tech} className="px-3 py-1 text-xs font-sans font-medium bg-border/40 text-muted/95 rounded-md">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* NEXT PROJECT & BACK JOURNEY */}
      <footer className="border-t border-border/50 pt-10 mt-16 sm:mt-20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 select-none font-sans text-xs font-bold uppercase tracking-wider">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <Link href="/projects" className="text-muted hover:text-foreground transition-colors inline-flex items-center gap-1">
            ← Back to all projects
          </Link>
          <Link href="/projects/habee-craft" className="text-muted hover:text-foreground transition-colors inline-flex items-center gap-1">
            ← Previous: Habee Craft
          </Link>
        </div>
        <Link href="/projects/ai-resume-analyzer" className="text-accent hover:text-foreground transition-colors inline-flex items-center gap-1">
          Next Project: AI Resume Analyzer →
        </Link>
      </footer>

    </div>
  );
}

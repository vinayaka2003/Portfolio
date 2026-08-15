import Link from "next/link";
import { HabeeCraftMock } from "@/app/components/ProjectMockups";

export const metadata = {
  title: "Habee Craft Case Study — Vinayaka S",
  description: "A detailed case study of Habee Craft, a full-stack e-commerce platform for handmade gifts, custom crafts, and bouquets built with Next.js and FastAPI.",
};

export default function HabeeCraftCaseStudy() {
  const techStack = [
    "Next.js",
    "JavaScript",
    "CSS Modules",
    "FastAPI",
    "SQLAlchemy",
    "PostgreSQL",
    "JWT Authentication"
  ];

  return (
    <div className="pt-6 md:pt-0 pb-16 font-serif antialiased max-w-[720px] lg:max-w-[760px] mx-auto">
      
      {/* CASE STUDY HEADER */}
      <header className="mb-10 sm:mb-12">
        {/* Category & Metadata */}
        <div className="flex items-center gap-3 text-xs font-mono text-muted/90 uppercase tracking-wider mb-4 select-none">
          <span>Project / 01</span>
          <span className="w-1.5 h-1.5 rounded-full bg-border" aria-hidden="true"></span>
          <span>2026</span>
          <span className="w-1.5 h-1.5 rounded-full bg-border" aria-hidden="true"></span>
          <span>Full-Stack E-commerce</span>
        </div>

        {/* Title */}
        <h1 className="text-[clamp(2.25rem,4vw,3.75rem)] font-bold tracking-[-0.03em] leading-[0.98] text-foreground mb-4">
          Habee Craft
        </h1>

        {/* Subtitle */}
        <p className="text-[18.5px] sm:text-[20px] lg:text-[21px] leading-[1.4] text-muted font-serif mb-6">
          A full-stack e-commerce platform for handmade art, bouquets, and custom gift boxes.
        </p>

        {/* Primary Links */}
        <div className="flex items-center gap-6 select-none font-sans text-xs sm:text-[13px]">
          <a 
            href="https://habeecraft.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-foreground hover:text-accent font-semibold transition-colors duration-205 inline-flex items-center gap-0.5 group/link"
          >
            Live Demo <span className="text-[10px] ml-0.5 font-sans inline-block transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">↗</span>
          </a>
          <a 
            href="https://github.com/vinayaka2003/habee-craft" 
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
          <HabeeCraftMock />
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="mb-10 sm:mb-12 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-muted border-b border-border/50 pb-2 mb-4 select-none">
          Overview
        </h2>
        <div className="space-y-4 text-[17px] sm:text-[18px] leading-[1.68] text-muted">
          <p>
            Habee Craft is a full-stack e-commerce system built specifically to showcase and retail bespoke crafts, customized gifts, and handmade bouquets.
          </p>
          <p>
            The project was designed to solve a core problem for independent creators: establishing a direct, fast, and professional web storefront without relying on restrictive third-party platforms.
          </p>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="mb-10 sm:mb-12 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-muted border-b border-border/50 pb-2 mb-4 select-none">
          The Problem
        </h2>
        <div className="space-y-4 text-[17px] sm:text-[18px] leading-[1.68] text-muted">
          <p>
            Many independent artisans and craft creators list products on generic online boards or rely on basic messaging services to manage client orders. This workflow lacks professional branding, fails to present a structured inventory catalog, and introduces significant friction when communicating catalog updates or managing customer transactions.
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
            To address these limitations, I chose to build a dedicated custom storefront. The frontend is powered by Next.js to provide a fast, SEO-friendly user experience. The backend API is constructed using FastAPI in Python to support clean routing and high-concurrency requests, backed by SQLAlchemy to interact with a persistent PostgreSQL database.
          </p>
        </div>
      </section>

      {/* WHAT I BUILT */}
      <section className="mb-10 sm:mb-12 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-muted border-b border-border/50 pb-2 mb-4 select-none">
          What I Built
        </h2>
        <ul className="space-y-3 list-none pl-0 text-[17px] sm:text-[18px] leading-[1.68] text-muted">
          <li className="border-l-2 border-accent/30 pl-4">
            <strong className="text-foreground font-semibold">Product Catalog:</strong> A structured inventory interface grouping items by specific craft categories.
          </li>
          <li className="border-l-2 border-accent/30 pl-4">
            <strong className="text-foreground font-semibold">User Authentication:</strong> Secure user register and login functionality using JWT (JSON Web Tokens).
          </li>
          <li className="border-l-2 border-accent/30 pl-4">
            <strong className="text-foreground font-semibold">Backend Integration:</strong> A fast Python REST API managing data updates and database interactions.
          </li>
          <li className="border-l-2 border-accent/30 pl-4">
            <strong className="text-foreground font-semibold">Responsive Interface:</strong> A clean layout optimized for browsing on mobile screens and desktop viewports.
          </li>
        </ul>
      </section>

      {/* ARCHITECTURE */}
      <section className="mb-10 sm:mb-12 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-muted border-b border-border/50 pb-2 mb-4 select-none">
          Architecture
        </h2>
        <div className="py-4">
          <div className="font-mono text-xs border border-border/60 rounded-xl p-6 bg-zinc-50 dark:bg-zinc-900/30 max-w-sm mx-auto select-none space-y-4">
            <div className="text-center p-2.5 border border-border/80 rounded bg-white dark:bg-zinc-800 font-semibold text-foreground">
              Frontend: Next.js
            </div>
            <div className="text-center text-muted">↓</div>
            <div className="text-center p-2.5 border border-border/80 rounded bg-white dark:bg-zinc-800 font-semibold text-foreground">
              Backend API: FastAPI
            </div>
            <div className="text-center text-muted">↓</div>
            <div className="text-center p-2.5 border border-border/80 rounded bg-white dark:bg-zinc-855/50 font-semibold text-foreground">
              Database: PostgreSQL + SQLAlchemy
            </div>
          </div>
        </div>
      </section>

      {/* KEY TECHNICAL DECISIONS */}
      <section className="mb-10 sm:mb-12 space-y-6">
        <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-muted border-b border-border/50 pb-2 mb-4 select-none">
          Key Technical Decisions
        </h2>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-base font-bold text-foreground">FastAPI for Backend API</h3>
            <p className="text-[15.5px] sm:text-[16.5px] leading-relaxed text-muted">
              <strong className="text-foreground font-semibold">Why:</strong> FastAPI provides automatic OpenAPI interactive docs, async native request loops, and rapid response execution, which keeps frontend queries fast.
            </p>
            <p className="text-[15.5px] sm:text-[16.5px] leading-relaxed text-muted">
              <strong className="text-foreground font-semibold">Trade-off:</strong> The ecosystem is smaller compared to Node.js/Express, requiring more custom backend script architecture.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-base font-bold text-foreground">PostgreSQL &amp; SQLAlchemy</h3>
            <p className="text-[15.5px] sm:text-[16.5px] leading-relaxed text-muted">
              <strong className="text-foreground font-semibold">Why:</strong> A relational SQL schema is essential to structure items, categories, and account relational models securely with ACID transaction compliance.
            </p>
            <p className="text-[15.5px] sm:text-[16.5px] leading-relaxed text-muted">
              <strong className="text-foreground font-semibold">Trade-off:</strong> Requires active server database management compared to serverless document store services.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-base font-bold text-foreground">JWT Token Authentication</h3>
            <p className="text-[15.5px] sm:text-[16.5px] leading-relaxed text-muted">
              <strong className="text-foreground font-semibold">Why:</strong> Provides a secure, stateless session pattern that avoids database reads on every API call.
            </p>
            <p className="text-[15.5px] sm:text-[16.5px] leading-relaxed text-muted">
              <strong className="text-foreground font-semibold">Trade-off:</strong> Implementing instant token logouts requires explicit blocklists or client-side expiry logic.
            </p>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="mb-10 sm:mb-12 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-muted border-b border-border/50 pb-2 mb-4 select-none">
          Challenges
        </h2>
        <div className="text-[17px] sm:text-[18px] leading-[1.68] text-muted">
          <p>
            A core challenge lay in structuring cross-origin authentication safely. Coordinating FastAPI JWT login sessions with Next.js frontend pages required secure cookie headers and configuration rules to ensure persistent sessions.
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
            Habee Craft successfully delivers a fast, fully operational online storefront. The system enables users to register, log in, browse custom gifts, and filter handmade items by category, supported by a scalable Python API and a PostgreSQL database.
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
            In the future, I plan to integrate a secure online gateway (such as Razorpay or Stripe) directly into the storefront to support fully autonomous credit card or UPI purchases.
          </p>
          <p>
            I also intend to develop an administrative dashboard interface to let shop managers upload new craft items, adjust categories, and track orders directly from the web client.
          </p>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="mb-12 sm:mb-16">
        <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-muted border-b border-border/50 pb-2 mb-6 select-none">
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
        <Link href="/projects" className="text-muted hover:text-foreground transition-colors inline-flex items-center gap-1">
          ← Back to work
        </Link>
        <Link href="/projects/goldstone-fitness" className="text-accent hover:text-foreground transition-colors inline-flex items-center gap-1">
          Next Project: Goldstone Fitness →
        </Link>
      </footer>

    </div>
  );
}

import Link from "next/link";

export default function About() {
  return (
    <div className="pt-6 md:pt-0 pb-2 font-serif antialiased space-y-12 sm:space-y-16">
      <header className="mb-10 sm:mb-12">
        <h1 className="text-[clamp(2.1rem,3.2vw,3.2rem)] font-bold tracking-[-0.02em] leading-[1.02] text-foreground font-serif uppercase">
          WHO I AM<span className="text-red-600 dark:text-red-500">.</span>
        </h1>
      </header>

      {/* SECTION 1 — ABOUT */}
      <section className="space-y-6">
        <div className="space-y-6 text-[17px] sm:text-[18px] leading-[1.68] text-muted font-serif max-w-[640px]">
          <p className="text-[18.5px] sm:text-[20px] lg:text-[21px] leading-[1.65] text-foreground/90 font-medium tracking-tight">
            I&apos;m Vinayaka S, a software developer and builder currently pursuing my MCA.
          </p>
          <p>
            My journey into technology started with curiosity about how software actually works. That curiosity gradually took me from learning the fundamentals to building web applications, experimenting with AI, and exploring automation.
          </p>
          <p>
            I learn best by building. I like taking a problem, figuring out how software can solve it, building the first version, seeing what breaks, and improving it. Along the way, I&apos;ve realized that I enjoy the product side of development just as much as the code itself.
          </p>
          <p>
            I&apos;m particularly interested in AI, automation, web products, and SaaS. My long-term goal is to build software products that solve real problems and create genuine value.
          </p>
        </div>
      </section>

      {/* SECTION 2 — WHAT I CARE ABOUT */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-[26px] font-bold tracking-tight text-foreground font-serif leading-tight">
          What I care about
        </h2>
        
        <div className="space-y-6 text-[17px] sm:text-[18px] leading-[1.68] text-muted font-serif max-w-[640px]">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-bold text-foreground font-serif">Building useful things</h3>
            <p className="text-muted">
              Building for a real problem instead of building something just for the sake of using a technology.
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-bold text-foreground font-serif">Learning deeply</h3>
            <p className="text-muted">
              Understanding how things work instead of only following abstractions or tutorials.
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-bold text-foreground font-serif">Continuous learning</h3>
            <p className="text-muted">
              Turning what I learn into something real and improving through experimentation.
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-bold text-foreground font-serif">Product thinking</h3>
            <p className="text-muted">
              Thinking about users, problems, and value — not just code.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — CURRENTLY */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-[26px] font-bold tracking-tight text-foreground font-serif leading-tight">
          Currently
        </h2>
        
        <div className="space-y-4 text-[17px] sm:text-[18px] leading-[1.68] text-muted font-serif max-w-[640px]">
          <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-1 sm:gap-4 pb-3.5 border-b border-border/60">
            <span className="font-bold text-foreground">Learning</span>
            <span>AI engineering and system design.</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-1 sm:gap-4 pb-3.5 border-b border-border/60">
            <span className="font-bold text-foreground">Building</span>
            <span>Web and AI products.</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-1 sm:gap-4 pb-3.5 border-b border-border/60">
            <span className="font-bold text-foreground">Exploring</span>
            <span>Automation and SaaS ideas.</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-1 sm:gap-4">
            <span className="font-bold text-foreground">Open to</span>
            <span>Interesting internships, projects, and collaborations.</span>
          </div>
        </div>
      </section>

      {/* SECTION 4 — CONNECT */}
      <section className="text-[17px] sm:text-[18px] leading-[1.68] text-muted font-serif pt-2 max-w-[640px]">
        <p>
          If you&apos;re building something interesting, have a problem worth solving, or simply want to talk about technology,{" "}
          <Link href="/contact" className="text-foreground underline decoration-muted/40 hover:decoration-accent hover:text-accent underline-offset-4 transition-colors">
            get in touch
          </Link>
          .
        </p>
      </section>

    </div>
  );
}
import Link from "next/link";

export default function About() {
  return (
    <div className="py-8 sm:py-12 font-serif antialiased space-y-12 sm:space-y-16">
      
      {/* SECTION 1 — ABOUT */}
      <section className="space-y-6">
        <h1 className="text-[34px] sm:text-[44px] font-bold tracking-tight text-foreground mb-6 font-serif leading-tight">
          About
        </h1>
        
        <div className="space-y-6 text-[17px] sm:text-[18px] leading-[1.65] text-muted font-serif">
          <p>
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
        
        <div className="space-y-6 text-[17px] sm:text-[18px] leading-[1.65] text-muted font-serif">
          <div className="space-y-1.5">
            <h3 className="text-lg font-bold text-foreground font-serif">Building useful things</h3>
            <p className="text-muted">
              Building for a real problem instead of building something just for the sake of using a technology.
            </p>
          </div>

          <div className="space-y-1.5">
            <h3 className="text-lg font-bold text-foreground font-serif">Learning deeply</h3>
            <p className="text-muted">
              Understanding how things work instead of only following abstractions or tutorials.
            </p>
          </div>

          <div className="space-y-1.5">
            <h3 className="text-lg font-bold text-foreground font-serif">Continuous learning</h3>
            <p className="text-muted">
              Turning what I learn into something real and improving through experimentation.
            </p>
          </div>

          <div className="space-y-1.5">
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
        
        <div className="space-y-4 text-[17px] sm:text-[18px] leading-[1.65] text-muted font-serif">
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
      <section className="text-[17px] sm:text-[18px] leading-[1.65] text-muted font-serif pt-2">
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
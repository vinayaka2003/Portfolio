import Link from "next/link";

export const metadata = {
  title: "Vinayaka S — Software Developer & Builder",
  description: "Vinayaka S is a software developer and builder interested in AI, automation, web applications, and software products.",
  openGraph: {
    title: "Vinayaka S — Software Developer & Builder",
    description: "Vinayaka S is a software developer and builder interested in AI, automation, web applications, and software products.",
    url: "https://vinayaka.dev",
    type: "website",
  },
  twitter: {
    title: "Vinayaka S — Software Developer & Builder",
    description: "Vinayaka S is a software developer and builder interested in AI, automation, web applications, and software products.",
  },
  alternates: { canonical: "https://vinayaka.dev" },
};

export default function Home() {
  return (
    <div className="py-8 sm:py-12 font-serif antialiased">
      <h1 className="text-[34px] sm:text-[44px] font-bold tracking-tight text-foreground mb-8 font-serif leading-tight">
        Vinayaka S
      </h1>

      <div className="space-y-5 text-[17px] sm:text-[18px] leading-[1.7] text-muted font-serif">
        <p>
          I&apos;m a software developer and builder, currently pursuing my MCA. I spend most of my time building web applications, AI-powered tools, and automation systems.
        </p>

        <p>
          I like taking vague problems and turning them into working software. I care more about whether something solves a real problem than whether it uses the latest technology.
        </p>

        <p>
          I&apos;m interested in AI, automation, and software products. My long-term goal is to build SaaS products that create genuine value.
        </p>

        <p>
          You can see what I&apos;ve{" "}
          <Link href="/projects" className="text-foreground underline decoration-muted/40 hover:decoration-accent hover:text-accent underline-offset-4 transition-colors">
            built
          </Link>
          , read a bit more{" "}
          <Link href="/about" className="text-foreground underline decoration-muted/40 hover:decoration-accent hover:text-accent underline-offset-4 transition-colors">
            about me
          </Link>
          , or{" "}
          <Link href="/contact" className="text-foreground underline decoration-muted/40 hover:decoration-accent hover:text-accent underline-offset-4 transition-colors">
            get in touch
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

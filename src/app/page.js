import Link from "next/link";

export const metadata = {
  title: "Vinayaka S — Accidental Software Developer",
  description: "Accidental Software Developer. The story of how one random decision started my journey into software.",
  openGraph: {
    title: "Vinayaka S — Accidental Software Developer",
    description: "Accidental Software Developer. The story of how one random decision started my journey into software.",
    url: "https://vinayaka.dev",
    type: "website",
  },
  twitter: {
    title: "Vinayaka S — Accidental Software Developer",
    description: "Accidental Software Developer. The story of how one random decision started my journey into software.",
  },
  alternates: { canonical: "https://vinayaka.dev" },
};

export default function Home() {
  const heroLinks = [
    { label: "More about me", href: "/about" },
    { label: "See my work", href: "/projects" },
    { label: "Things I've done", href: "/achievements" },
    { label: "View my resume", href: "/resume" },
    { label: "Get in touch", href: "/contact" },
  ];

  return (
    <div className="pt-0.5 pb-2 font-serif antialiased">
      {/* Hero Heading - Fluid scale capping at 44px to guarantee single line on desktop */}
      <h1 className="text-[clamp(1.85rem,2.8vw,2.75rem)] font-bold tracking-tight text-foreground mb-8 font-serif leading-[1.08] md:whitespace-nowrap">
        Accidental Software Developer.
      </h1>

      {/* Story Paragraphs */}
      <div className="space-y-6 text-[17px] sm:text-[18px] lg:text-[19px] leading-[1.68] text-muted/80 font-serif max-w-[660px] lg:max-w-[700px]">
        <p>
          After 12th, I wrote the KCET exam but didn&apos;t get the marks I wanted. I got Civil Engineering, but I didn&apos;t want to join it.
        </p>

        <p>
          While waiting for the next KCET round, my father&apos;s friend told him that his son had joined BCA.
        </p>

        <p className="font-medium text-foreground tracking-tight leading-[1.65]">
          That was the first time I had ever heard of BCA.
        </p>

        <p className="font-medium text-foreground tracking-tight leading-[1.65]">
          The next day, my father told me, &ldquo;Join BCA.&rdquo;
        </p>

        <p className="font-medium text-foreground tracking-tight leading-[1.65]">
          I didn&apos;t think twice.<br />
          I just joined.
        </p>

        <p className="font-medium text-foreground tracking-tight leading-[1.65] pt-2">
          And somehow, that one random decision started my journey into software.
        </p>
      </div>

      {/* Visual Separation + Vertical Editorial Navigation Stack */}
      <div className="mt-16 sm:mt-20 pt-8 sm:pt-10 border-t border-border/50 max-w-[660px] lg:max-w-[700px]">
        <div className="flex flex-col items-start gap-y-4 font-serif">
          {heroLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group py-1 inline-flex items-center gap-2 text-[16px] sm:text-[17px] font-medium text-foreground hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-accent after:transition-transform after:duration-300 after:ease-out after:origin-left after:scale-x-0 hover:after:scale-x-100"
            >
              <span>{link.label}</span>
              <span className="text-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-200">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

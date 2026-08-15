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
    <div className="pt-1 sm:pt-1.5 lg:pt-2 pb-2 font-serif antialiased">
      {/* Hero Heading - Dynamic scale with optical line breaks */}
      <h1 className="max-w-[850px] text-[clamp(2.15rem,5.5vw,3.75rem)] font-bold tracking-[-0.03em] leading-[0.98] mb-10 font-serif text-foreground">
        <span className="text-red-600 dark:text-red-500">Accidental</span> Software Developer<span className="text-red-600 dark:text-red-500">.</span>
      </h1>

      {/* Story Paragraphs */}
      <div className="space-y-6 text-[17px] sm:text-[18px] lg:text-[19px] leading-[1.75] text-muted/85 font-serif max-w-[720px] lg:max-w-[760px]">
        {/* Normal with drop cap */}
        <p className="first-letter:text-[52px] first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1.5 first-letter:leading-[0.8] first-letter:text-accent select-none">
          After 12th, I wrote the KCET exam but didn&apos;t get the marks I wanted. I got Civil Engineering, but I didn&apos;t want to join it.
        </p>

        {/* Normal */}
        <p>
          While waiting for the next KCET round, my father&apos;s friend told him that his son had joined BCA.
        </p>

        {/* Pull-quote style emphasis */}
        <p className="text-[19px] sm:text-[20px] lg:text-[21px] font-medium text-foreground tracking-tight leading-[1.5] pl-5 border-l-2 border-accent/60 py-1.5 my-8 italic">
          That was the first time I had ever heard of BCA.
        </p>

        {/* Normal */}
        <p>
          The next day, my father told me, &ldquo;Join BCA.&rdquo;
        </p>

        {/* Strongest */}
        <p className="text-[20px] sm:text-[21px] lg:text-[22px] font-extrabold text-foreground tracking-tighter leading-[1.4] py-3.5 border-t border-b border-border/40 my-8 pl-1">
          I didn&apos;t think twice.<br />
          I just joined.
        </p>

        {/* Normal/Medium Conclusion */}
        <p className="font-semibold text-foreground/95 tracking-tight leading-[1.68] pt-1">
          And somehow, that one random decision started my journey into software.
        </p>
      </div>

      {/* Visual Separation + Vertical Editorial Navigation Stack */}
      <div className="mt-12 sm:mt-16 pt-7 sm:pt-8 border-t border-border/50 max-w-[720px] lg:max-w-[760px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5 font-serif select-none">
          {heroLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group py-1 inline-flex items-center gap-2 text-[15px] sm:text-[16px] font-medium text-foreground hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-accent after:transition-transform after:duration-300 after:ease-out after:origin-left after:scale-x-0 hover:after:scale-x-100 w-fit"
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

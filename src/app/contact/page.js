import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact — Vinayaka S",
  description: "Get in touch with Vinayaka S about software development, internships, freelance projects, collaborations, and interesting opportunities.",
  openGraph: {
    title: "Contact — Vinayaka S",
    description: "Get in touch with Vinayaka S about software development, internships, freelance projects, collaborations, and interesting opportunities.",
    url: "https://vinayaka.dev/contact",
    type: "website",
  },
  twitter: {
    title: "Contact — Vinayaka S",
    description: "Get in touch with Vinayaka S about software development, internships, freelance projects, collaborations, and interesting opportunities.",
  },
  alternates: { canonical: "https://vinayaka.dev/contact" },
};

export default function Contact() {
  return (
    <div className="pt-6 sm:pt-8 lg:pt-10 pb-2 font-serif antialiased space-y-10 sm:space-y-12">
      <header className="mb-10 sm:mb-12">
        <h1 className="text-[clamp(2.1rem,3.2vw,3.2rem)] font-bold tracking-[-0.02em] leading-[1.02] text-foreground font-serif">
          Contact
        </h1>
      </header>

      {/* Header/Intro */}
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-[26px] font-bold text-foreground font-serif leading-snug">
          Let&apos;s talk.
        </h2>
        <div className="space-y-4 text-[17px] sm:text-[18px] leading-[1.68] text-muted/80 font-serif">
          <p>
            I&apos;m open to internships, freelance projects, collaborations, and interesting opportunities.
          </p>
          <p>
            If you&apos;re working on something interesting, have a problem worth solving, or simply want to say hello, I&apos;d love to hear from you.
          </p>
        </div>
      </section>
 
      {/* Direct Contact List */}
      <section className="space-y-4 text-[17px] sm:text-[18px] leading-[1.68] text-muted/80 font-serif border-t border-border/60 pt-6">
        <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-1 sm:gap-4 pb-3 border-b border-border/60">
          <span className="font-bold text-foreground font-serif">Email</span>
          <a href="mailto:vinayakayattinamane@gmail.com" className="text-muted/80 hover:text-accent underline decoration-muted/40 hover:decoration-accent underline-offset-4 transition-colors">
            vinayakayattinamane@gmail.com
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-1 sm:gap-4 pb-3 border-b border-border/60">
          <span className="font-bold text-foreground font-serif">GitHub</span>
          <a href="https://github.com/vinayaka2003" target="_blank" rel="noopener noreferrer" className="text-muted/80 hover:text-accent underline decoration-muted/40 hover:decoration-accent underline-offset-4 transition-colors">
            github.com/vinayaka2003
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-1 sm:gap-4 pb-3 border-b border-border/60">
          <span className="font-bold text-foreground font-serif">LinkedIn</span>
          <a href="https://linkedin.com/in/vinayaka2003" target="_blank" rel="noopener noreferrer" className="text-muted/80 hover:text-accent underline decoration-muted/40 hover:decoration-accent underline-offset-4 transition-colors">
            linkedin.com/in/vinayaka2003
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-1 sm:gap-4">
          <span className="font-bold text-foreground font-serif">Twitter</span>
          <a href="https://twitter.com/vinayaka_s_y" target="_blank" rel="noopener noreferrer" className="text-muted/80 hover:text-accent underline decoration-muted/40 hover:decoration-accent underline-offset-4 transition-colors">
            @vinayaka_s_y
          </a>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="space-y-6 border-t border-border/60 pt-6">
        <h2 className="text-2xl sm:text-[26px] font-bold text-foreground font-serif leading-snug">
          Send a message
        </h2>
        <ContactForm />
      </section>

    </div>
  );
}

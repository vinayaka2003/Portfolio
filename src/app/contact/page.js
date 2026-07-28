export const metadata = {
  title: "Contact — Vinayaka | Get in Touch",
  description: "Ready to collaborate? Contact Vinayaka for freelance projects, partnerships, and discussions about AI, SaaS, and full-stack development.",
  keywords: ['Contact', 'Collaboration', 'Freelance', 'Hire Developer', 'AI Projects', 'SaaS Development', 'Full-Stack Development', 'Partnership', 'Consulting'],
  openGraph: {
    title: 'Contact — Vinayaka | Get in Touch',
    description: 'Ready to collaborate? Contact Vinayaka for freelance projects, partnerships, and discussions about AI and SaaS development.',
    url: 'https://vinayaka.dev/contact',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Contact Vinayaka' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact — Vinayaka | Get in Touch',
    description: 'Ready to collaborate? Contact Vinayaka for freelance projects, partnerships, and discussions about AI and SaaS development.',
    images: ['/og-image.png']
  },
  alternates: {
    canonical: 'https://vinayaka.dev/contact'
  }
};

const socials = [
  {
    icon: "✉",
    label: "Email",
    value: "vinayakayattinamane@gmail.com",
    href: "mailto:vinayakayattinamane@gmail.com",
  },
  {
    icon: "⌘",
    label: "GitHub",
    value: "github.com/vinayaka2003",
    href: "https://github.com/vinayaka2003",
  },
  {
    icon: "in",
    label: "LinkedIn",
    value: "linkedin.com/in/vinayaka",
    href: "https://linkedin.com/in/vinayaka2003",
  },
  {
    icon: "X",
    label: "Twitter",
    value: "@vinayaka_s_y",
    href: "https://twitter.com/vinayaka_s_y",
  },
];

export default function Contact() {
  return (
    <>
      <section className="px-6 md:px-10 py-20 border-b border-gray-100 dark:border-border">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-8">
          Get in touch
        </p>

        <p className="text-lg text-gray-600 dark:text-muted max-w-md leading-relaxed mb-8">
          Open to freelance projects, collaborations,
          and conversations about AI.
          Usually reply within 24 hours.
        </p>

        <div className="grid sm:grid-cols-2 gap-3">
          {socials.map(({ icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-4 py-4 border border-gray-200/60 dark:border-white/5 rounded-xl hover:border-gray-400 dark:hover:border-white/15 transition-all duration-300 hover:-translate-y-0.5 bg-white dark:bg-surface/40 backdrop-blur-sm dark:hover:bg-surface/75 dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
            >
              <div className="flex h-8 w-8 items-center justify-center text-xl text-black dark:text-foreground">
                {icon}
              </div>

              <div>
                <p className="text-xs text-gray-400 mb-0.5">
                  {label}
                </p>

                <p className="text-sm text-gray-700 dark:text-foreground">
                  {value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 py-20">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-8">
          Send a message
        </p>

        <form
          className="max-w-lg space-y-4"
          action="https://formspree.io/f/xqejrlvn"
          method="POST"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-500 dark:text-muted mb-1.5">
                Name
              </label>

              <input
                required
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2.5 border border-gray-200/80 dark:border-white/5 rounded-lg text-sm focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-black/10 dark:focus:border-white/20 dark:focus:ring-white/5 bg-white/50 dark:bg-surface/40 text-black dark:text-foreground placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-500 dark:text-muted mb-1.5">
                Email
              </label>

              <input
                required
                name="email"
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2.5 border border-gray-200/80 dark:border-white/5 rounded-lg text-sm focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-black/10 dark:focus:border-white/20 dark:focus:ring-white/5 bg-white/50 dark:bg-surface/40 text-black dark:text-foreground placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-500 dark:text-muted mb-1.5">
              Message
            </label>

            <textarea
              required
              name="message"
              rows={5}
              placeholder="What's on your mind?"
              className="w-full px-4 py-2.5 border border-gray-200/80 dark:border-white/5 rounded-lg text-sm focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-black/10 dark:focus:border-white/20 dark:focus:ring-white/5 resize-none bg-white/50 dark:bg-surface/40 text-black dark:text-foreground placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200"
            />
          </div>

          <button
            type="submit"
            className="px-5 py-2.5 bg-black dark:bg-accent text-white dark:text-black rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:opacity-90 transition"
          >
            Send message
          </button>
        </form>
      </section>
    </>
  );
}

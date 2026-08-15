export default function AchievementsClient() {
  const credentials = [
    {
      title: "Google Advanced Data Analytics Professional Certificate",
      issuer: "Google · Coursera",
      year: "2024",
      link: "https://coursera.org"
    },
    {
      title: "Machine Learning Specialization",
      issuer: "DeepLearning.AI · Coursera",
      year: "2024",
      link: "https://coursera.org"
    },
    {
      title: "The Complete Full-Stack Web Development Bootcamp",
      issuer: "Udemy · Dr. Angela Yu",
      year: "2024",
      link: "https://www.udemy.com/certificate/UC-406bbacb-5f05-4f7f-adea-b0df5d610fa7/"
    },
    {
      title: "Python for Data Science",
      issuer: "IBM · Coursera",
      year: "2023",
      link: "https://coursera.org"
    },
    {
      title: "The Complete SQL Bootcamp: Go from Zero to Hero",
      issuer: "Udemy · Jose Portilla",
      year: "2023",
      link: "https://www.udemy.com/certificate/UC-e0d0deac-8d1e-4cb8-8cce-b48ffea6a5d4/"
    },
    {
      title: "AWS Builders Online Series",
      issuer: "Amazon Web Services",
      year: "2022",
      link: "https://aws.amazon.com/events/builders-online-series/"
    }
  ];

  return (
    <div className="pt-6 md:pt-0 pb-2 font-serif antialiased">
      
      <header className="mb-10 sm:mb-12">
        <h1 className="text-[clamp(2.1rem,3.2vw,3.2rem)] font-bold tracking-[-0.02em] leading-[1.02] text-foreground mb-3 font-serif uppercase">
          ACHIEVEMENTS<span className="text-red-600 dark:text-red-500">.</span>
        </h1>
        <p className="text-[17px] sm:text-[18px] leading-[1.68] text-muted/80 font-serif max-w-[720px]">
          A record of certifications, milestones, and things I&apos;ve completed along the way.
        </p>
      </header>

      {/* Credentials Section */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-[26px] font-bold text-foreground mb-4 font-serif">
          Credentials
        </h2>

        <div className="border-t border-border">
          {credentials.map((cred) => (
            <div 
              key={cred.title}
              className="py-5 border-b border-border/50 hover:border-accent/40 flex flex-col space-y-1.5 group transition-colors duration-300"
            >
              {/* Title & Year Row */}
              <div className="flex justify-between items-baseline">
                <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-200 font-serif leading-snug">
                  {cred.title}
                </h3>
                <span className="font-mono text-xs text-muted/65 tracking-wider select-none">
                  {cred.year}
                </span>
              </div>

              {/* Issuer & Link Row */}
              <div className="flex justify-between items-center text-sm sm:text-[15px] text-muted/80 font-serif">
                <span>{cred.issuer}</span>
                <a 
                  href={cred.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-foreground underline decoration-muted/40 hover:decoration-accent hover:text-accent underline-offset-4 transition-colors inline-flex items-center gap-0.5 group/link"
                >
                  Verify <span className="text-[10px] ml-0.5 font-sans inline-block transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ending Text */}
      <p className="text-sm text-muted/65 font-serif mt-10 italic">
        More milestones will be added as I keep building, learning, and shipping.
      </p>
    </div>
  );
}

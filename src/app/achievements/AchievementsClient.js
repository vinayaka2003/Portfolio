export default function AchievementsClient() {
  const credentials = [
    {
      title: "The Complete Full-Stack Web Development Bootcamp",
      issuer: "Udemy · Dr. Angela Yu",
      year: "2024",
      link: "https://www.udemy.com/certificate/UC-406bbacb-5f05-4f7f-adea-b0df5d610fa7/"
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
    <div className="py-8 sm:py-12 font-serif antialiased">
      
      {/* Main Content */}
      <h1 className="text-[34px] sm:text-[44px] font-bold tracking-tight text-foreground mb-3 font-serif leading-tight">
        Achievements
      </h1>
      <p className="text-[17px] sm:text-[18px] leading-[1.65] text-muted font-serif mb-10 sm:mb-12">
        A record of certifications, milestones, and things I&apos;ve completed along the way.
      </p>

      {/* Credentials Section */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-[26px] font-bold text-foreground mb-4 font-serif">
          Credentials
        </h2>

        <div className="border-t border-border">
          {credentials.map((cred) => (
            <div 
              key={cred.title}
              className="py-5 border-b border-border/60 flex flex-col space-y-1.5 group"
            >
              {/* Title & Year Row */}
              <div className="flex justify-between items-baseline">
                <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-200 font-serif leading-snug">
                  {cred.title}
                </h3>
                <span className="text-xs sm:text-sm font-sans text-muted select-none">
                  {cred.year}
                </span>
              </div>

              {/* Issuer & Link Row */}
              <div className="flex justify-between items-center text-sm sm:text-[15px] text-muted font-serif">
                <span>{cred.issuer}</span>
                <a 
                  href={cred.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-foreground underline decoration-muted/40 hover:decoration-accent hover:text-accent underline-offset-4 transition-colors inline-flex items-center gap-0.5 group/link"
                >
                  Verify <span className="inline-block transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">↗</span>
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

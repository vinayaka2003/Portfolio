import { Mail, MapPin } from "lucide-react";
import PrintButton from "./PrintButton";

const GithubIcon = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

export const metadata = {
  title: "Resume — Vinayaka S",
  description: "View and print Vinayaka S's resume. Software developer specialising in Python, React, FastAPI, and AI.",
  openGraph: {
    title: "Resume — Vinayaka S",
    description: "View and print Vinayaka S's resume. Software developer specialising in Python, React, FastAPI, and AI.",
    url: "https://vinayaka.dev/resume",
    type: "website",
  },
  twitter: {
    title: "Resume — Vinayaka S",
    description: "View and print Vinayaka S's resume. Software developer specialising in Python, React, FastAPI, and AI.",
  },
  alternates: { canonical: "https://vinayaka.dev/resume" },
};

export default function ResumePage() {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Bangalore University",
      date: "Expected 2027",
      details: "Pursuing advanced training in algorithms, artificial intelligence, and software engineering methodologies."
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Bangalore University",
      date: "Graduated 2024",
      details: "Focused on database structures, software paradigms, systems architecture, and scripting languages."
    }
  ];

  const projects = [
    {
      title: "Habee Craft",
      role: "Full-Stack Developer",
      stack: "Next.js · FastAPI · PostgreSQL · SQLAlchemy",
      desc: "Architected a handmade craft store with user JWT authentication, custom category listings, and shopping cart flows.",
    },
    {
      title: "Goldstone Fitness Website",
      role: "Frontend Developer",
      stack: "Next.js · React · CSS Modules · WhatsApp Integration",
      desc: "Designed and deployed a high-performance, mobile-first business showcase landing page for a premium local fitness centre.",
    },
    {
      title: "AI Order System",
      role: "Workflow Engineer",
      stack: "React · Flask · SQLite · OpenAI API",
      desc: "Developed a conversational order management portal enabling interactive, natural-language workflow controls.",
    },
    {
      title: "World Atlas",
      role: "Interactive Developer",
      stack: "React.js · JavaScript · REST APIs",
      desc: "Built a geographic search atlas with real-time country statistics, search parsing, and localized queries.",
    }
  ];

  const certificates = [
    "Google Advanced Data Analytics Professional Certificate (Coursera · 2024)",
    "Machine Learning Specialization (DeepLearning.AI · Coursera · 2024)",
    "Python for Data Science (IBM · Coursera · 2023)",
    "The Complete Full-Stack Web Development Bootcamp (Udemy · Dr. Angela Yu · 2024)"
  ];

  return (
    <div className="w-full bg-background text-foreground print:bg-white print:text-black selection:bg-teal-500/30">
      
      {/* Dynamic Screen Controls Header */}
      <div className="flex justify-end mb-6 print:hidden">
        <PrintButton />
      </div>

      {/* Main Resume Sheet */}
      <article className="w-full bg-white dark:bg-zinc-900 border border-border/80 dark:border-white/5 rounded-3xl p-8 sm:p-12 shadow-md dark:shadow-2xl print:border-none print:shadow-none print:bg-white print:p-0 print:rounded-none">
        
        {/* Profile Header */}
        <header className="border-b border-border/60 dark:border-white/5 pb-8 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-6 print:border-gray-200">
          <div>
            <h1 className="text-4xl font-extrabold text-foreground dark:text-white tracking-tight print:text-black">
              Vinayaka S.
            </h1>
            <p className="text-lg font-semibold text-accent mt-1 print:text-emerald-700">
              Software Developer
            </p>
            <p className="text-sm text-muted mt-3 max-w-lg leading-relaxed print:text-zinc-600">
              MCA student bridging software paradigms, backend service layers, automation, and AI. Passionate about building performant web applications and clean code.
            </p>
          </div>

          {/* Contact Details Grid */}
          <div className="flex flex-col gap-2.5 text-xs font-mono text-muted shrink-0 print:text-zinc-700">
            <a href="mailto:vinayakayattinamane@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" /> vinayakayattinamane@gmail.com
            </a>
            <a href="https://linkedin.com/in/vinayaka2003" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
              <LinkedinIcon className="w-4 h-4" /> linkedin.com/in/vinayaka2003
            </a>
            <a href="https://github.com/vinayaka2003" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
              <GithubIcon className="w-4 h-4" /> github.com/vinayaka2003
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Bangalore, India
            </div>
          </div>
        </header>

        {/* Resume Content Body */}
        <div className="grid md:grid-cols-12 gap-10 mt-8">
          
          {/* Left Column: Education & Experience */}
          <div className="md:col-span-8 space-y-10">
            
            {/* Section: Education */}
            <section className="space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-foreground dark:text-white border-b border-border/60 dark:border-white/5 pb-2 print:text-black print:border-gray-200">
                Education
              </h2>
              <div className="space-y-6">
                {education.map((edu, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-sm font-bold text-foreground dark:text-white print:text-black">
                        {edu.degree}
                      </h3>
                      <span className="text-[10px] font-mono text-muted/70 shrink-0 uppercase tracking-wider">
                        {edu.date}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-accent print:text-emerald-700">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-muted leading-relaxed mt-1.5 print:text-zinc-600">
                      {edu.details}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section: Selected Projects */}
            <section className="space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-foreground dark:text-white border-b border-border/60 dark:border-white/5 pb-2 print:text-black print:border-gray-200">
                Selected Projects
              </h2>
              <div className="space-y-6">
                {projects.map((proj, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between items-center gap-4">
                      <h3 className="text-sm font-bold text-foreground dark:text-white print:text-black">
                        {proj.title}
                      </h3>
                      <span className="text-[9px] font-mono text-muted uppercase tracking-wider">
                        {proj.role}
                      </span>
                    </div>
                    <p className="text-[10px] font-mono text-muted dark:text-accent font-bold print:text-emerald-700">
                      Stack: {proj.stack}
                    </p>
                    <p className="text-xs text-muted leading-relaxed print:text-zinc-600">
                      {proj.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Skills & Certifications */}
          <div className="md:col-span-4 space-y-10">
            
            {/* Section: Technical Skills */}
            <section className="space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-foreground dark:text-white border-b border-border/60 dark:border-white/5 pb-2 print:text-black print:border-gray-200">
                Skills
              </h2>
              <div className="space-y-4">
                {[
                  { category: "Languages", list: "Python, JavaScript, TypeScript, SQL" },
                  { category: "Frameworks", list: "FastAPI, React, Next.js, Flask, Node.js" },
                  { category: "Databases", list: "PostgreSQL, SQLite, SQL Server" },
                  { category: "AI & Tools", list: "PyTorch, OpenAI, Git, Docker, Pandas, NumPy" }
                ].map((skill, idx) => (
                  <div key={idx} className="space-y-1">
                    <h3 className="text-[10px] font-mono font-bold text-muted uppercase tracking-wider">
                      {skill.category}
                    </h3>
                    <p className="text-xs text-muted dark:text-foreground font-semibold print:text-black">
                      {skill.list}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section: Certifications */}
            <section className="space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-foreground dark:text-white border-b border-border/60 dark:border-white/5 pb-2 print:text-black print:border-gray-200">
                Certifications
              </h2>
              <ul className="space-y-3.5 list-none pl-0">
                {certificates.map((cert, idx) => (
                  <li key={idx} className="text-xs text-muted leading-relaxed border-l-2 border-accent/30 pl-3 print:text-zinc-700">
                    {cert}
                  </li>
                ))}
              </ul>
            </section>
          </div>

        </div>
      </article>
    </div>
  );
}

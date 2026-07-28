"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const stack = [
  {
    category: "Languages",
    items: [
      { name: "Python", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
      { name: "JavaScript", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
      { name: "SQL", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
      { name: "Next.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" },
      { name: "Tailwind CSS", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "FastAPI", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg" },
      { name: "Node.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
      { name: "PostgreSQL", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" },
    ],
  },
  {
    category: "AI & Tools",
    items: [
      { name: "PyTorch", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg" },
      { name: "OpenAI", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
      { name: "Docker", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" },
      { name: "Git", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
    ],
  },
];

// Animation Configurations
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

function TechCard({ name, logo }) {
  return (
    <motion.div
      variants={fadeUp}
      className="
        relative group flex items-center gap-3 p-3 rounded-xl 
        bg-white/50 dark:bg-surface/30 border border-gray-200/40 dark:border-white/5 
        hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-300
        overflow-hidden backdrop-blur-md cursor-default
      "
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
      <div className="w-8 h-8 flex shrink-0 items-center justify-center bg-black/5 dark:bg-white/5 rounded-lg">
        <img src={logo} alt={name} className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
      </div>
      <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-black dark:group-hover:text-white transition-colors">
        {name}
      </span>
    </motion.div>
  );
}

function StackCategory({ category, items }) {
  return (
    <motion.div variants={fadeUp} className="space-y-4">
      <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500 dark:text-zinc-400">
        {category}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {items.map((item) => (
          <TechCard key={item.name} {...item} />
        ))}
      </div>
    </motion.div>
  );
}

function ExpertiseCard({ title, desc, icon }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group p-6 rounded-2xl bg-white/50 dark:bg-surface/40 border border-gray-200/60 dark:border-white/5 hover:bg-white dark:hover:bg-surface/75 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">{title}</h4>
      <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{desc}</p>
    </motion.div>
  );
}

export default function AboutClient() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-emerald-500/30">

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 dark:bg-blue-500/5 blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:opacity-[0.05] mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:px-12 md:py-24 flex flex-col lg:flex-row gap-16 lg:gap-24">

        {/* LEFT COLUMN: Sticky Profile */}
        <motion.header
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="lg:w-5/12 lg:sticky lg:top-24 h-fit flex flex-col space-y-8"
        >
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-white/5 backdrop-blur-md shadow-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                Available for work
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
              Vinayaka S.
            </h1>
            <h2 className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-medium">
              Software Developer
            </h2>
          </motion.div>

          <motion.p variants={fadeUp} className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-md">
            MCA student in Bangalore bridging the gap between web applications, artificial intelligence, and digital content creation.
          </motion.p>
        </motion.header>

        {/* RIGHT COLUMN: Scrolling Content */}
        <div className="lg:w-7/12 flex flex-col space-y-32">

          {/* ABOUT SECTION */}
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.h3 variants={fadeUp} className="text-xl font-semibold text-zinc-900 dark:text-white">
              About
            </motion.h3>
            <motion.div variants={fadeUp} className="space-y-4 text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <p>
                My journey into tech started with a simple question: <span className="text-zinc-900 dark:text-zinc-200 font-medium">how does software actually work?</span> That curiosity drove me from my early coding days to pursuing my Master of Computer Applications.
              </p>
              <p>
                I don&apos;t just collect tutorials—I build. Whether I&apos;m developing a React frontend, architecting a FastAPI backend, or experimenting with new AI tools, I learn by shipping products, finding out what breaks, and improving the system.
              </p>
            </motion.div>
          </motion.section>

          {/* EXPERTISE SECTION */}
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.h3 variants={fadeUp} className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
              What I Do
            </motion.h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <ExpertiseCard
                title="Full-Stack Dev"
                desc="Building scalable web applications using React, Next.js, and Python-based backends like FastAPI and Django."
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>}
              />
              <ExpertiseCard
                title="AI & Automation"
                desc="Prototyping with advanced tools like Claude, ElevenLabs, and D-ID. Currently exploring NLP models tailored for Kannada."
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>}
              />
              <ExpertiseCard
                title="Video Content"
                desc="Editing and managing tech tutorial content for YouTube audiences, optimizing for pacing and viewer retention."
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>}
              />
            </div>
          </motion.section>

          {/* STACK SECTION */}
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.h3 variants={fadeUp} className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
              Tech Arsenal
            </motion.h3>
            <motion.div variants={fadeUp} className="flex flex-col space-y-8 p-6 rounded-3xl bg-white/40 dark:bg-surface/30 border border-gray-200/40 dark:border-white/5 backdrop-blur-sm">
              {stack.map((group) => (
                <StackCategory key={group.category} {...group} />
              ))}
            </motion.div>
          </motion.section>

          {/* CONTACT CTA - Placed at the very end */}
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="pt-10 pb-20"
          >
            <motion.div
              variants={fadeUp}
              className="relative overflow-hidden rounded-3xl p-8 md:p-12 bg-zinc-900 dark:bg-surface/40 border border-transparent dark:border-white/5 text-white dark:text-foreground shadow-2xl backdrop-blur-sm"
            >
              {/* Card Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div className="space-y-3">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Let&apos;s build something.
                  </h2>
                  <p className="text-zinc-400 dark:text-zinc-400 text-lg max-w-md">
                    I&apos;m currently open for freelance projects, internships, and exciting collaborations.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="
                    group relative inline-flex shrink-0 items-center justify-center gap-2 px-8 py-4 rounded-xl 
                    bg-white text-zinc-900 font-semibold shadow-lg 
                    hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 overflow-hidden
                  "
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get in touch
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 transition-transform group-hover:translate-x-1"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </span>
                </Link>
              </div>
            </motion.div>
          </motion.section>

        </div>
      </div>
    </div>
  );
}
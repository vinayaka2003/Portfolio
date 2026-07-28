"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function HomeClient() {
  return (
    <section className="border-b border-gray-100 dark:border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-40">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-8"
        >
          Software Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl sm:text-6xl md:text-8xl font-medium tracking-tight leading-[0.95] mb-8 max-w-5xl text-neutral-900 dark:text-white"
        >
          Hi, I’m <span className="bg-gradient-to-r from-neutral-950 via-neutral-800 to-neutral-500 dark:from-white dark:via-zinc-200 dark:to-zinc-500 bg-clip-text text-transparent">Vinayaka S</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl md:text-3xl text-gray-600 dark:text-foreground mb-8 h-[40px]"
        >
          <TypeAnimation
            sequence={[
              "Python",
              2000,
              "Machine Learning",
              2000,
              "Automation",
              2000,
              "Web Development",
              2000,
            ]}
            wrapper="span"
            speed={60}
            repeat={Infinity}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-lg md:text-xl text-gray-500 dark:text-muted leading-relaxed max-w-2xl mb-12"
        >
          I’m an MCA student interested in AI, automation,
          and modern web technologies. I enjoy building
          useful software and learning through real projects.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-row gap-3 sm:gap-4 w-full sm:w-auto"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none text-center px-4 sm:px-6 py-3 bg-black dark:bg-accent text-white dark:text-black rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow-md dark:hover:shadow-[0_4px_20px_rgba(255,255,255,0.05)] whitespace-nowrap"
          >
            View Resume
          </a>
          <a
            href="/resume.pdf"
            download
            className="flex-1 sm:flex-none text-center px-4 sm:px-6 py-3 border border-gray-200 dark:border-white/5 rounded-xl text-xs sm:text-sm text-gray-600 dark:text-muted bg-white/50 dark:bg-surface/40 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-surface/80 hover:-translate-y-0.5 transition-all duration-300 shadow-sm whitespace-nowrap"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}

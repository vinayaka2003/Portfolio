"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { HabeeCraftMock, RoadAssistMock, GymMock, ResumeMock } from "./ProjectMockups";

export default function HomeClient() {
  return (
    <section className="relative border-b border-gray-100 dark:border-border overflow-hidden bg-white dark:bg-transparent">
      {/* Subtle Dot Grid Background (no colorful glows) */}
      <div className="absolute inset-0 -z-10 bg-dot-grid text-neutral-950/[0.03] dark:text-white/[0.015] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_40%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6">
            
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 backdrop-blur-md shadow-sm"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-450 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-zinc-650 dark:text-zinc-400">
                Available for Opportunities
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-neutral-900 dark:text-white"
            >
              I build AI-powered products, web apps &amp; automation.
            </motion.h1>

            {/* Intro Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xl"
            >
              I&apos;m <span className="font-semibold text-neutral-900 dark:text-white">Vinayaka</span>. I am an MCA student interested in AI, automation, and modern web technologies. I enjoy building useful software and learning through real projects.
            </motion.p>

            {/* Shell-style Specialization Prompt */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex items-center gap-2 text-sm font-mono text-zinc-500 dark:text-zinc-400 h-8"
            >
              <span className="text-zinc-400 dark:text-zinc-600 font-bold">&gt;</span>
              <span>specializing_in:</span>
              <TypeAnimation
                sequence={[
                  "Python Development",
                  2000,
                  "Machine Learning",
                  2000,
                  "Automation scripting",
                  2000,
                  "Web Applications",
                  2000,
                ]}
                wrapper="span"
                speed={60}
                className="font-bold text-zinc-800 dark:text-zinc-200"
                repeat={Infinity}
              />
            </motion.div>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 w-full sm:w-auto pt-2"
            >
              <Link
                href="/projects"
                className="flex-1 sm:flex-none text-center px-8 py-3.5 bg-neutral-900 dark:bg-white hover:bg-black dark:hover:bg-zinc-100 text-white dark:text-neutral-950 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-sm border border-transparent"
              >
                View Work
              </Link>
              <Link
                href="/resume"
                className="flex-1 sm:flex-none text-center px-8 py-3.5 border border-zinc-200 dark:border-zinc-800 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase text-zinc-700 dark:text-zinc-300 bg-white/40 dark:bg-zinc-900/30 backdrop-blur-sm hover:bg-zinc-50 dark:hover:bg-zinc-850/50 transition-all duration-300 shadow-sm"
              >
                Resume
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Layered Project Collage */}
          <div className="lg:col-span-6 w-full relative mt-12 lg:mt-0 select-none">

            {/* Mobile / Tablet: Simple Responsive Grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden w-full">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <HabeeCraftMock />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <RoadAssistMock />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <GymMock />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <ResumeMock />
              </motion.div>
            </div>

            {/* Desktop: Flat layered overlapping collage (Minimal + Editorial) */}
            <div className="hidden lg:block relative w-full h-[400px]">
              
              {/* Card 1: Habee Craft (Top Left, Flat) */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                whileHover={{ y: -8, zIndex: 50 }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                className="absolute top-2 left-2 w-[285px] z-10 cursor-pointer origin-center"
              >
                <HabeeCraftMock />
              </motion.div>

              {/* Card 2: RoadAssist (Top Right, Flat) */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                whileHover={{ y: -8, zIndex: 50 }}
                transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.05 }}
                className="absolute top-8 right-2 w-[285px] z-20 cursor-pointer origin-center"
              >
                <RoadAssistMock />
              </motion.div>

              {/* Card 3: Gym Website (Bottom Left, Flat) */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                whileHover={{ y: -8, zIndex: 50 }}
                transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.1 }}
                className="absolute bottom-6 left-6 w-[285px] z-30 cursor-pointer origin-center"
              >
                <GymMock />
              </motion.div>

              {/* Card 4: AI Resume Analyzer (Bottom Right, Flat) */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 30 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                whileHover={{ y: -8, zIndex: 50 }}
                transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.15 }}
                className="absolute bottom-2 right-4 w-[285px] z-40 cursor-pointer origin-center"
              >
                <ResumeMock />
              </motion.div>

            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}


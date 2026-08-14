"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search } from "lucide-react";
import AnimatedThemeToggler from "@/components/ui/animated-theme-toggler";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/achievements", label: "Achievements" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (pathname === "/" || pathname === "/about" || pathname === "/projects" || pathname === "/achievements" || pathname === "/contact" || pathname === "/resume") return null;

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 w-full pointer-events-none">
      <div className="flex items-center gap-3 w-full max-w-5xl justify-between md:justify-center pointer-events-auto">

        {/* Left Segment: Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white/95 dark:bg-surface/95 backdrop-blur-md border border-gray-300/80 dark:border-white/10 rounded-2xl px-6 py-3 flex items-center shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1),_0_1px_3px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7),_0_0_1px_rgba(255,255,255,0.15)] transition-all duration-300 h-12"
        >
          <Link href="/" className="text-lg font-bold tracking-tighter text-black dark:text-foreground hover:opacity-70 transition">
            Vinayaka S
          </Link>
        </motion.div>

        {/* Center Segment: Navigation Links (hidden on mobile) */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="hidden md:flex bg-white/95 dark:bg-surface/95 backdrop-blur-md border border-gray-300/80 dark:border-white/10 rounded-2xl px-2.5 py-1.5 items-center gap-1 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1),_0_1px_3px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7),_0_0_1px_rgba(255,255,255,0.15)] transition-all duration-300 h-12"
        >
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-1.5 ${isActive
                  ? "text-black dark:text-foreground"
                  : "text-gray-400 hover:text-black dark:text-muted dark:hover:text-foreground"
                  }`}
              >
                {/* Smooth sliding active background indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-gray-100 dark:bg-surface-hover rounded-xl -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span>{label}</span>
              </Link>
            );
          })}
        </motion.div>

        {/* Right Segment: Theme Toggler & Mobile Menu Trigger */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="bg-white/95 dark:bg-surface/95 backdrop-blur-md border border-gray-300/80 dark:border-white/10 rounded-2xl px-3 py-1.5 flex items-center gap-2 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1),_0_1px_3px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7),_0_0_1px_rgba(255,255,255,0.15)] transition-all duration-300 h-12"
        >
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-search"))}
            className="p-2 rounded-xl text-gray-400 dark:text-muted hover:text-black dark:hover:text-foreground hover:bg-gray-100 dark:hover:bg-surface-hover transition-colors flex items-center gap-1.5"
            aria-label="Open Search"
          >
            <Search size={18} />
          </button>

          <AnimatedThemeToggler />

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl text-gray-400 dark:text-muted hover:text-black dark:hover:text-foreground hover:bg-gray-100 dark:hover:bg-surface-hover transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </motion.div>
      </div>

      {/* Floating Mobile Drawer Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-4 right-4 bg-white dark:bg-surface backdrop-blur-lg border border-gray-300/80 dark:border-white/10 rounded-3xl p-5 shadow-2xl z-40 md:hidden pointer-events-auto"
          >
            <div className="flex flex-col gap-2">
              {links.map(({ href, label }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    onClick={() => setIsMenuOpen(false)}
                    href={href}
                    className={`px-5 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all ${isActive
                      ? "bg-gray-100 dark:bg-surface-hover text-black dark:text-foreground"
                      : "text-gray-400 dark:text-muted hover:text-black dark:hover:text-foreground hover:bg-gray-50 dark:hover:bg-surface-hover"
                      }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

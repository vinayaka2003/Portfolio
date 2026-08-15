"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import SearchClient from "./SearchClient";
import { Search } from "lucide-react";
const AnimatedThemeToggler = dynamic(() => import("@/components/ui/animated-theme-toggler"), { ssr: false });

const links = [
  { href: "/", label: "START", num: "01" },
  { href: "/about", label: "WHO I AM", num: "02" },
  { href: "/projects", label: "THINGS I BUILD", num: "03" },
  { href: "/achievements", label: "ACHIEVEMENTS", num: "04" },
  { href: "/resume", label: "RESUME", num: "05" },
  { href: "/contact", label: "LET'S TALK", num: "06" },
];

export default function EditorialNavbar() {
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const menuRef = useRef(null);
  const triggerRef = useRef(null);

  // Avoid hydration mismatch
  useEffect(() => {
    const handle = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(handle);
  }, []);

  // Close on Escape key
  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  // Close on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !triggerRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <header className="font-sans w-full select-none relative z-40">
      {/* Desktop Left Sidebar Navigation (≥ md) */}
      <div className="hidden md:flex flex-col gap-5 w-full">
        {/* Branding Header */}
        <div className="pb-4 border-b border-border/40">
          <Link
            href="/"
            className="flex flex-col select-none group w-fit"
          >
            <span className="font-sans text-[17px] md:text-[18px] lg:text-[19px] font-black uppercase tracking-tighter text-foreground group-hover:text-accent transition-colors leading-none whitespace-nowrap mb-1">
              Vinayaka S
            </span>
            <span className="text-[7.5px] md:text-[8px] font-sans font-black uppercase tracking-[0.18em] text-muted/90 select-none">
              SOFTWARE <span className="text-red-600 dark:text-red-500 font-black">/</span> DEVELOPER
            </span>
          </Link>
        </div>

        {/* Search & Theme Controls Group */}
        <div className="flex items-center gap-3 pb-4 border-b border-border/40 select-none">
          <SearchClient />

          {/* Premium Animated Theme Toggle */}
          <div className="flex items-center shrink-0" title="Toggle theme">
            <AnimatedThemeToggler />
          </div>
        </div>

        {/* Navigation Items - Single Flat List */}
        <nav className="flex flex-col gap-3.5 text-[12.5px] md:text-[13px] text-muted font-semibold uppercase tracking-[0.08em] pt-1" aria-label="Primary navigation">
          {links.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname?.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative py-1.5 flex items-center gap-2 w-fit transition-colors duration-300 ease-out
                  after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-accent after:transition-transform after:duration-300 after:ease-out after:origin-left
                  ${
                    isActive
                      ? "text-accent font-bold after:scale-x-100"
                      : "text-muted hover:text-foreground after:scale-x-0 hover:after:scale-x-100"
                  }
                `}
              >
                <span className={`text-[10px] font-mono tracking-normal transition-colors
                  ${isActive ? "text-red-600 dark:text-red-500 font-bold" : "text-muted/50 group-hover:text-foreground/80"}
                `}>
                  {link.num}
                </span>
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Status Indicator */}
        <div className="mt-6 pt-5 border-t border-border/40 text-[9.5px] font-sans font-bold uppercase tracking-[0.14em] text-muted/80 flex items-center gap-1.5 select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-red-600 dark:bg-red-500 animate-pulse shrink-0" />
          <span>Available for work</span>
        </div>
      </div>

      {/* Mobile Top Header (< md) */}
      <div className="flex md:hidden justify-between items-center py-2 w-full border-b border-border/60">
        {showMobileSearch ? (
          <div className="flex items-center gap-3 w-full animate-[fadeIn_0.15s_ease_out_forwards]">
            <SearchClient />
            <button
              onClick={() => setShowMobileSearch(false)}
              className="text-[11px] font-sans font-bold uppercase tracking-wider text-muted hover:text-foreground focus:outline-none cursor-pointer whitespace-nowrap px-2 py-1 bg-border/20 rounded-md"
            >
              Cancel
            </button>
          </div>
        ) : (
          <>
            <Link
              href="/"
              className="flex flex-col select-none shrink-0 group"
            >
              <span className="font-sans text-[14.5px] sm:text-[15.5px] font-black uppercase tracking-tighter text-foreground group-hover:text-accent transition-colors leading-none whitespace-nowrap mb-0.5">
                Vinayaka S
              </span>
              <span className="text-[7px] sm:text-[7.5px] font-sans font-black uppercase tracking-[0.16em] text-muted/90 select-none">
                SOFTWARE <span className="text-red-600 dark:text-red-500 font-black">/</span> DEVELOPER
              </span>
            </Link>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setShowMobileSearch(true)}
                className="p-1 text-muted hover:text-foreground transition-colors focus:outline-none cursor-pointer"
                aria-label="Search"
                title="Search"
              >
                <Search className="w-[17px] h-[17px]" />
              </button>
              <AnimatedThemeToggler />

              {/* Hamburger button */}
              <button
                ref={triggerRef}
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label={menuOpen ? "Close navigation" : "Open navigation"}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                className="p-1 text-muted hover:text-foreground transition-colors focus:outline-none"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  aria-hidden="true"
                  className="motion-safe:transition-transform motion-safe:duration-200"
                >
                  {menuOpen ? (
                    <>
                      <line x1="3" y1="3" x2="15" y2="15" />
                      <line x1="15" y1="3" x2="3" y2="15" />
                    </>
                  ) : (
                    <>
                      <line x1="2" y1="5" x2="16" y2="5" />
                      <line x1="2" y1="9" x2="16" y2="9" />
                      <line x1="2" y1="13" x2="16" y2="13" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </>
        )}
      </div>

      {/* Mobile Menu Drawer (< md) */}
      {menuOpen && (
        <>
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/40 dark:bg-black/60 backdrop-blur-[3px] md:hidden animate-[fadeIn_0.2s_ease_out_forwards]"
            onClick={() => setMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <nav
            id="mobile-menu"
            ref={menuRef}
            aria-label="Mobile navigation"
            className="
              fixed top-0 right-0 bottom-0 z-50
              w-[260px] sm:w-[280px]
              bg-background dark:bg-zinc-950 backdrop-blur-md border-l border-border/80 dark:border-white/10
              py-6 px-6
              shadow-2xl
              flex flex-col gap-5
              md:hidden
              animate-[slideIn_0.25s_cubic-bezier(0.16,1,0.3,1)_forwards]
            "
          >
            {/* Drawer Header (Logo + Close Button) */}
            <div className="flex items-center justify-between pb-4 border-b border-border/40 mb-2 select-none">
              <span className="font-sans text-[15px] font-black uppercase tracking-tighter text-foreground">
                Vinayaka S
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-1 text-muted hover:text-foreground transition-colors focus:outline-none cursor-pointer"
                aria-label="Close menu"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <line x1="3" y1="3" x2="15" y2="15" />
                  <line x1="15" y1="3" x2="3" y2="15" />
                </svg>
              </button>
            </div>

            {/* Links list */}
            <div className="flex flex-col gap-1 pt-1">
              {links.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname?.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all duration-200 ease-out focus:outline-none
                      ${
                        isActive
                          ? "bg-accent/10 dark:bg-accent/15 text-accent font-bold"
                          : "text-muted hover:text-foreground hover:bg-border/30 dark:hover:bg-white/5"
                      }
                    `}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`text-[10px] font-mono tracking-normal
                        ${isActive ? "text-red-600 dark:text-red-500 font-bold" : "text-muted/40"}
                      `}>
                        {link.num}
                      </span>
                      <span>{link.label}</span>
                    </div>
                    {isActive && (
                      <span className="text-[10px] text-accent">●</span>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Status Indicator */}
            <div className="mt-4 pt-4 border-t border-border/40 text-[9px] font-sans font-bold uppercase tracking-[0.14em] text-muted/80 flex items-center justify-center gap-1.5 select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 dark:bg-red-500 animate-pulse shrink-0" />
              <span>Available for work</span>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}

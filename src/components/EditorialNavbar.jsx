"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import SearchClient from "./SearchClient";
const AnimatedThemeToggler = dynamic(() => import("@/components/ui/animated-theme-toggler"), { ssr: false });

const links = [
  { href: "/", label: "START" },
  { href: "/about", label: "WHO I AM" },
  { href: "/projects", label: "THINGS I BUILD" },
  { href: "/achievements", label: "ACHIEVEMENTS" },
  { href: "/resume", label: "RESUME" },
  { href: "/contact", label: "LET'S TALK" },
];

export default function EditorialNavbar() {
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
    <header className="font-sans w-full select-none relative md:sticky md:top-14 z-40">
      {/* Desktop Left Sidebar Navigation (≥ md) */}
      <div className="hidden md:flex flex-col gap-8 w-full">
        {/* Branding Header */}
        <div className="pb-5 border-b border-border/40">
          <Link
            href="/"
            className="flex items-center gap-2 select-none w-fit group"
          >
            <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] font-black uppercase tracking-tighter text-foreground group-hover:text-accent transition-colors leading-none whitespace-nowrap">
              Vinayaka S
            </span>
            <div className="flex flex-col text-[7.5px] md:text-[8px] font-sans font-bold uppercase tracking-wider text-muted/90 leading-[1.1] border-l border-border/60 pl-2.5 select-none shrink-0">
              <span>Software</span>
              <span>Developer</span>
            </div>
          </Link>
        </div>

        {/* Search & Theme Controls Group */}
        <div className="flex items-center gap-3 pb-5 border-b border-border/40 select-none">
          <SearchClient />

          {/* Premium Animated Theme Toggle */}
          <div className="flex items-center shrink-0" title="Toggle theme">
            <AnimatedThemeToggler />
          </div>
        </div>

        {/* Navigation Items - Single Flat List */}
        <nav className="flex flex-col gap-5 text-[13px] md:text-[13.5px] text-muted font-semibold uppercase tracking-[0.1em] pt-1" aria-label="Primary navigation">
          {links.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname?.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1.5 w-fit transition-colors duration-300 ease-out
                  after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-accent after:transition-transform after:duration-300 after:ease-out after:origin-left
                  ${
                    isActive
                      ? "text-foreground font-semibold after:scale-x-100"
                      : "text-muted/95 hover:text-foreground after:scale-x-0 hover:after:scale-x-100"
                  }
                `}
              >
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile Top Header (< md) */}
      <div className="flex md:hidden justify-between items-center py-4 w-full border-b border-border/60">
        <Link
          href="/"
          className="flex items-center gap-2 select-none shrink-0 group"
        >
          <span className="font-sans text-[15px] sm:text-[16px] font-black uppercase tracking-tighter text-foreground group-hover:text-accent transition-colors leading-none whitespace-nowrap">
            Vinayaka S
          </span>
          <div className="flex flex-col text-[7px] sm:text-[7.5px] font-sans font-bold uppercase tracking-wider text-muted/90 leading-[1.1] border-l border-border/60 pl-2 select-none shrink-0">
            <span>Software</span>
            <span>Developer</span>
          </div>
        </Link>

        <div className="flex items-center gap-1.5">
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
      </div>

      {/* Mobile Menu Dropdown (< md) */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          ref={menuRef}
          aria-label="Mobile navigation"
          className="
            absolute top-full right-0 z-50
            min-w-[160px]
            bg-background/95 dark:bg-background/95 backdrop-blur-md border border-border/80
            rounded-2xl py-4 px-5 mt-2
            shadow-lg
            flex flex-col gap-3.5
            text-[13.5px] font-semibold uppercase tracking-[0.08em] text-muted
            motion-safe:animate-[fadeDown_0.15s_ease_forwards]
            md:hidden
          "
        >
          {links.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname?.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`relative py-1 w-fit transition-colors duration-200 ease-out
                  after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-accent after:transition-transform after:duration-300 after:ease-out after:origin-left
                  ${
                    isActive
                      ? "text-foreground font-semibold after:scale-x-100"
                      : "text-muted/80 hover:text-foreground after:scale-x-0 hover:after:scale-x-100"
                  }
                `}
              >
                <span>{link.label}</span>
              </Link>
            );
          })}
          <button
            onClick={() => {
              setMenuOpen(false);
              setTimeout(() => {
                window.dispatchEvent(new CustomEvent("open-search"));
              }, 100);
            }}
            className="w-full text-left py-2 text-muted hover:text-foreground border-t border-border/40 mt-2 select-none focus:outline-none cursor-pointer"
          >
            <span>Search</span>
          </button>
        </nav>
      )}
    </header>
  );
}

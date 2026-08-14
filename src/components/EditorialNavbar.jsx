"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/achievements", label: "Achievements" },
  { href: "/resume", label: "Resume" },
];

export default function EditorialNavbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const triggerRef = useRef(null);

  // Close on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

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

  return (
    <header className="flex justify-between items-center py-8 font-sans w-full select-none relative">
      {/* Logo */}
      <Link
        href="/"
        className="font-semibold text-foreground hover:text-accent transition-colors text-xs sm:text-sm uppercase tracking-wider whitespace-nowrap shrink-0"
      >
        Vinayaka S
      </Link>

      {/* Desktop nav — hidden below md */}
      <nav
        className="hidden md:flex items-center gap-6 text-xs text-muted font-medium uppercase tracking-wider"
        aria-label="Primary navigation"
      >
        {links.map((link) => {
          const isActive =
            pathname === link.href ||
            (link.href !== "/" && pathname?.startsWith(link.href));
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                isActive ? "text-foreground" : "hover:text-foreground"
              } transition-colors`}
            >
              {link.label}
            </Link>
          );
        })}
        <ThemeToggle />
      </nav>

      {/* Mobile controls — visible below md */}
      <div className="flex md:hidden items-center gap-3">
        <ThemeToggle />

        {/* Hamburger button */}
        <button
          ref={triggerRef}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="p-1 text-muted hover:text-foreground transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-accent/50 rounded"
        >
          {/* Animated hamburger / X */}
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

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          ref={menuRef}
          aria-label="Mobile navigation"
          className="
            absolute top-full right-0 z-50
            min-w-[160px]
            bg-background border border-border
            py-2
            flex flex-col
            text-xs font-medium uppercase tracking-wider text-muted
            motion-safe:animate-[fadeDown_0.15s_ease_forwards]
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
                className={`px-5 py-3 ${
                  isActive
                    ? "text-foreground"
                    : "hover:text-foreground"
                } transition-colors`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}

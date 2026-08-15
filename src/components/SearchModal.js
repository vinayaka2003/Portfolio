"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { projects } from "@/lib/projects";

export default function SearchModal() {
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const inputRef = useRef(null);
  const listRef = useRef(null);

  // Define searchable elements in a flat list
  const searchItems = [
    // --- PAGES ---
    {
      category: "Pages",
      title: "Home Page",
      desc: "Go to homepage, hero fold, and featured project picker.",
      action: () => router.push("/"),
      type: "route",
      keywords: "home start main index",
    },
    {
      category: "Pages",
      title: "About Me",
      desc: "MCA student profile, skills list, and shipping changelog.",
      action: () => router.push("/about"),
      type: "route",
      keywords: "about me profile bio skill arsenal timeline changelog",
    },
    {
      category: "Pages",
      title: "Selected Projects",
      desc: "Showcase of AI, FastAPI backends, and full-stack websites.",
      action: () => router.push("/projects"),
      type: "route",
      keywords: "projects selected work portfolio demo showcase coding",
    },
    {
      category: "Pages",
      title: "Achievements & Certificates",
      desc: "Udemy certifications, AWS credentials, and GitHub contribution graphs.",
      action: () => router.push("/achievements"),
      type: "route",
      keywords: "achievements certificates credentials certifications github commits contributions chart graphs",
    },
    {
      category: "Pages",
      title: "Contact & Socials",
      desc: "Get in touch, copy social links, or submit a message.",
      action: () => router.push("/contact"),
      type: "route",
      keywords: "contact hire email form message phone details",
    },
    {
      category: "Credentials & Stats",
      title: "Certificates & Certifications",
      desc: "Google Analytics, Machine Learning, and IBM credentials.",
      action: () => {
        router.push("/about");
        setTimeout(() => {
          document.getElementById("certificates-section")?.scrollIntoView({ behavior: "smooth" });
        }, 150);
      },
      type: "route",
      keywords: "certificates certifications credentials diplomas google deeplearning ibm study proof degrees validation verified",
    },
    {
      category: "Credentials & Stats",
      title: "GitHub Activity & Streak Stats",
      desc: "Showcase of live commit streaks, repositories, and activity metrics.",
      action: () => {
        router.push("/about");
        setTimeout(() => {
          document.getElementById("github-stats-section")?.scrollIntoView({ behavior: "smooth" });
        }, 150);
      },
      type: "route",
      keywords: "github streaks stats activity contributions git commits code repo dashboard stats commits graph live",
    },

    // --- UTILITIES ---
    {
      category: "Utilities",
      title: "Toggle Light/Dark Theme",
      desc: `Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode.`,
      action: () => setTheme(resolvedTheme === "dark" ? "light" : "dark"),
      type: "util",
      keywords: "toggle switch dark light mode theme styling color background",
    },

    // --- CONTACTS & COPIABLES ---
    {
      category: "Contact Details",
      title: "Email: vinayakayattinamane@gmail.com",
      desc: "Click to copy email address directly to your clipboard.",
      action: () => {
        navigator.clipboard.writeText("vinayakayattinamane@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
      type: "copy",
      keywords: "email contact mail address gmail letter",
    },
    {
      category: "Contact Details",
      title: "GitHub Profile",
      desc: "Open github.com/vinayaka2003 in a new tab.",
      action: () => window.open("https://github.com/vinayaka2003", "_blank"),
      type: "link",
      keywords: "github code repositories profile git open source",
    },
    {
      category: "Contact Details",
      title: "LinkedIn Profile",
      desc: "Open linkedin.com/in/vinayaka2003 in a new tab.",
      action: () => window.open("https://linkedin.com/in/vinayaka2003", "_blank"),
      type: "link",
      keywords: "linkedin profile professional career job hire network",
    },
    {
      category: "Contact Details",
      title: "Twitter / X Profile",
      desc: "Open twitter.com/vinayaka_s_y in a new tab.",
      action: () => window.open("https://twitter.com/vinayaka_s_y", "_blank"),
      type: "link",
      keywords: "twitter x social news feed platform handle tweet",
    },

    // --- SKILLS ---
    ...[
      { name: "Python", tags: "backend machine learning automation backend data script" },
      { name: "FastAPI", tags: "backend python server framework api rest routes" },
      { name: "React", tags: "frontend javascript ui component framework SPA" },
      { name: "Next.js", tags: "frontend react framework ssg app router server" },
      { name: "JavaScript", tags: "frontend scripting language react programming" },
      { name: "TypeScript", tags: "frontend javascript static types interface checks" },
      { name: "SQL / PostgreSQL", tags: "database backend queries tables query relational" },
      { name: "PyTorch", tags: "ai machine learning neural network models deep learn" },
      { name: "OpenAI API", tags: "ai prompt completion agents workflow model llm" },
      { name: "Docker", tags: "devops containers build shipping deployment local server" },
      { name: "Tailwind CSS", tags: "frontend styling layout classes design variables" },
    ].map((skill) => ({
      category: "Skills & Technologies",
      title: skill.name,
      desc: `Filter projects by ${skill.name} or view skill details.`,
      action: () => {
        router.push("/projects");
        // Delay search filter trigger for clean navigation
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent("filter-project", { detail: skill.name }));
        }, 150);
      },
      type: "skill",
      keywords: `${skill.name.toLowerCase()} ${skill.tags} tools stack arsenal experience`,
    })),

    // --- PROJECTS ---
    ...projects.map((p) => ({
      category: "Projects Portfolio",
      title: p.title,
      desc: `[${p.category}] ${p.desc}`,
      action: () => {
        router.push("/projects");
      },
      type: "project",
      keywords: `${p.title.toLowerCase()} ${p.desc.toLowerCase()} ${p.stack.toLowerCase()} ${p.category.toLowerCase()}`,
    })),
  ];

  // Filter items based on search query
  const filteredItems = searchItems.filter((item) => {
    if (!query) return item.category !== "Skills & Technologies" && item.category !== "Projects Portfolio"; // Default list
    const q = query.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.keywords.includes(q)
    );
  });

  // Listen to trigger events and keyboard shortcuts (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleOpenSearch = () => {
      setIsOpen(true);
      setSelectedIndex(0);
      setQuery("");
    };

    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        setSelectedIndex(0);
        setQuery("");
      }
    };

    window.addEventListener("open-search", handleOpenSearch);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("open-search", handleOpenSearch);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Autofocus input when modal opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  // Handle keys while search palette is open
  useEffect(() => {
    if (!isOpen) return;

    const handleModalKeys = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setIsOpen(false);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
          setIsOpen(false);
        }
      }
    };

    window.addEventListener("keydown", handleModalKeys);
    return () => window.removeEventListener("keydown", handleModalKeys);
  }, [isOpen, filteredItems, selectedIndex]);

  // Adjust scroll position inside results list on keyboard navigation
  useEffect(() => {
    if (listRef.current) {
      const activeEl = listRef.current.children[selectedIndex];
      if (activeEl) {
        activeEl.scrollIntoView({ block: "nearest" });
      }
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4">
      {/* Glassmorphic Backdrop */}
      <div
        className="fixed inset-0 bg-black/45 dark:bg-black/70 backdrop-blur-[6px]"
        onClick={() => setIsOpen(false)}
      />

      {/* Main Search Panel */}
      <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-gray-200/80 dark:border-white/10 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl shadow-2xl flex flex-col max-h-[60vh] transition-all duration-300">
        
        {/* Search Input Area */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-100 dark:border-white/5">
          <svg className="w-5 h-5 text-gray-400 dark:text-zinc-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search anything (pages, projects, skills, contact...)"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="w-full bg-transparent text-sm focus:outline-none text-black dark:text-foreground placeholder-gray-400 dark:placeholder-zinc-500"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 hover:text-black dark:text-zinc-500 dark:hover:text-foreground px-2 py-1 rounded bg-gray-100 dark:bg-zinc-800"
          >
            esc
          </button>
        </div>

        {/* Results List */}
        <div ref={listRef} className="flex-1 overflow-y-auto px-2 py-3 space-y-1 scroll-smooth">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={idx}
                  onClick={() => {
                    item.action();
                    // Keep modal open briefly to show Toast if copying email
                    if (item.type !== "copy") setIsOpen(false);
                  }}
                  className={`
                    group flex items-center justify-between gap-4 px-4 py-3 rounded-2xl cursor-pointer transition-all duration-150
                    ${isSelected 
                      ? "bg-gray-100 dark:bg-zinc-800/60 border-transparent" 
                      : "hover:bg-gray-50/50 dark:hover:bg-white/5"
                    }
                  `}
                >
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[9px] font-mono uppercase tracking-[0.15em] text-gray-400 dark:text-zinc-500">
                      {item.category}
                    </span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-foreground">
                      {item.title}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-muted line-clamp-1">
                      {item.desc}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    {/* Action types indicators */}
                    {item.type === "route" && (
                      <span className="text-[10px] font-mono text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded">
                        Go
                      </span>
                    )}
                    {item.type === "util" && (
                      <span className="text-[10px] font-mono text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded">
                        Run
                      </span>
                    )}
                    {item.type === "copy" && (
                      <span className="text-[10px] font-mono text-emerald-600 bg-emerald-100/50 dark:text-emerald-400 dark:bg-emerald-950/30 px-2 py-0.5 rounded">
                        Copy
                      </span>
                    )}
                    {item.type === "link" && (
                      <span className="text-[10px] font-mono text-blue-600 bg-blue-100/50 dark:text-blue-400 dark:bg-blue-950/30 px-2 py-0.5 rounded">
                        Link
                      </span>
                    )}
                    
                    {/* Selection cursor arrow */}
                    {isSelected && (
                      <span className="text-xs font-mono font-bold text-gray-400 dark:text-zinc-500">
                        ⏎
                      </span>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="px-6 py-12 text-center text-sm text-gray-400 dark:text-zinc-500">
              No results found for &ldquo;<span className="font-mono text-red-500">{query}</span>&rdquo;
            </div>
          )}
        </div>

        {/* Action toast for copiable items */}
        {copied && (
          <div className="absolute bottom-4 right-4 px-4 py-2 border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl text-xs font-mono font-bold animate-bounce">
            ✓ Copied to clipboard!
          </div>
        )}

        {/* Footer shortcuts helper */}
        <div className="px-6 py-3 bg-gray-50/50 dark:bg-zinc-900/30 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-400 dark:text-zinc-500">
          <div className="flex gap-4">
            <span>↑↓ Navigate</span>
            <span>⏎ Select</span>
          </div>
          <span>Esc Close</span>
        </div>

      </div>
    </div>
  );
}

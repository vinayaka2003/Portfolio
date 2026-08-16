"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { Search } from "lucide-react";
import { projects } from "@/lib/projects";

export default function SearchClient() {
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  // Search items list
  const searchItems = [
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
    {
      category: "Utilities",
      title: "Toggle Light/Dark Theme",
      desc: `Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode.`,
      action: () => setTheme(resolvedTheme === "dark" ? "light" : "dark"),
      type: "util",
      keywords: "toggle switch dark light mode theme styling color background",
    },
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
      title: "X Profile",
      desc: "Open x.com/vinayaka_s_y in a new tab.",
      action: () => window.open("https://x.com/vinayaka_s_y", "_blank"),
      type: "link",
      keywords: "twitter x social news feed platform handle tweet",
    },
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
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent("filter-project", { detail: skill.name }));
        }, 150);
      },
      type: "skill",
      keywords: `${skill.name.toLowerCase()} ${skill.tags} tools stack arsenal experience`,
    })),
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

  const filteredItems = searchItems.filter((item) => {
    if (!query) return false;
    const q = query.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.keywords.includes(q)
    );
  });

  // Toggle dropdown state on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard listeners (Cmd+K / Ctrl+K and Escape)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
        setIsOpen(true);
      } else if (e.key === "Escape") {
        setIsOpen(false);
        inputRef.current?.blur();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div ref={containerRef} className="relative flex-grow">
      {/* Search Input Box */}
      <div className="flex items-center gap-1.5 px-2 py-1 rounded-md border border-border/50 bg-border/5 focus-within:border-accent transition-colors duration-200">
        <Search className="w-3.5 h-3.5 text-muted shrink-0" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="w-full bg-transparent text-[11px] focus:outline-none text-foreground placeholder-muted font-sans font-medium"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setIsOpen(false);
            }}
            className="text-muted hover:text-foreground text-[10px] transition-colors focus:outline-none cursor-pointer px-0.5"
          >
            ✕
          </button>
        )}
      </div>

      {/* Inline Floating Search Results Dropdown */}
      {isOpen && query.trim() !== "" && (
        <div className="absolute top-full left-0 z-50 mt-1.5 w-[240px] md:w-[250px] bg-background/95 dark:bg-background/95 backdrop-blur-md border border-border/80 rounded-xl shadow-xl flex flex-col max-h-[260px] overflow-y-auto px-1.5 py-2 scrollbar-none motion-safe:animate-[fadeDown_0.15s_ease_forwards]">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => {
                  item.action();
                  if (item.type !== "copy") {
                    setIsOpen(false);
                    setQuery("");
                  }
                }}
                className="group flex flex-col gap-0.5 px-3 py-1.5 rounded-lg cursor-pointer hover:bg-border/30 transition-all duration-150"
              >
                <span className="text-[7.5px] font-mono uppercase tracking-[0.1em] text-muted group-hover:text-accent transition-colors">
                  {item.category}
                </span>
                <span className="font-semibold text-foreground text-[11px] leading-tight">
                  {item.title}
                </span>
                <span className="text-[9.5px] text-muted leading-tight line-clamp-1">
                  {item.desc}
                </span>
              </div>
            ))
          ) : (
            <div className="px-3 py-4 text-center text-[10px] text-muted">
              No results for &ldquo;<span className="font-mono text-accent">{query}</span>&rdquo;
            </div>
          )}
        </div>
      )}

      {/* Copy Toast popup */}
      {copied && (
        <div className="fixed bottom-4 right-4 z-50 px-3.5 py-2 border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl text-[10.5px] font-mono font-bold animate-bounce shadow-md">
          ✓ Copied to clipboard!
        </div>
      )}
    </div>
  );
}

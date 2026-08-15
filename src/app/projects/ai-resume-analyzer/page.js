import Link from "next/link";
import { ResumeMock } from "@/app/components/ProjectMockups";

export const metadata = {
  title: "AI Resume Analyzer Case Study — Vinayaka S",
  description: "A detailed case study of the AI Resume Analyzer, an ATS-style document parsing and evaluation tool built with Python, Flask, and React.",
};

export default function AIResumeAnalyzerCaseStudy() {
  const techStack = [
    "Python",
    "OpenAI API",
    "Flask",
    "PDFMiner",
    "React"
  ];

  return (
    <div className="pt-6 sm:pt-8 lg:pt-10 pb-16 font-serif antialiased max-w-[720px] lg:max-w-[760px] mx-auto">
      
      {/* CASE STUDY HEADER */}
      <header className="mb-10 sm:mb-12">
        {/* Category & Metadata */}
        <div className="flex items-center gap-3 text-xs font-mono text-muted/90 uppercase tracking-wider mb-4 select-none">
          <span>Project / 03</span>
          <span className="w-1.5 h-1.5 rounded-full bg-border" aria-hidden="true"></span>
          <span>2025</span>
          <span className="w-1.5 h-1.5 rounded-full bg-border" aria-hidden="true"></span>
          <span>AI Workflow</span>
        </div>

        {/* Title */}
        <h1 className="text-[clamp(2.25rem,4vw,3.75rem)] font-bold tracking-[-0.03em] leading-[0.98] text-foreground mb-4">
          AI Resume Analyzer
        </h1>

        {/* Subtitle */}
        <p className="text-[18.5px] sm:text-[20px] lg:text-[21px] leading-[1.4] text-muted font-serif mb-6">
          An intelligent resume evaluation system that parses resumes, assesses matching scores against job descriptions, and provides ATS optimization suggestions.
        </p>

        {/* Primary Links */}
        <div className="flex items-center gap-6 select-none font-sans text-xs sm:text-[13px]">
          <a 
            href="https://github.com/vinayaka2003/ai-resume-analyzer" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-foreground hover:text-accent font-semibold transition-colors duration-205 inline-flex items-center gap-0.5 group/link"
          >
            GitHub <span className="text-[10px] ml-0.5 font-sans inline-block transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">↗</span>
          </a>
        </div>
      </header>

      {/* HERO VISUAL */}
      <section className="mb-12 sm:mb-16 select-none">
        <div className="border border-border/50 rounded-2xl overflow-hidden p-1.5 bg-zinc-50/50 dark:bg-zinc-900/10">
          <ResumeMock />
        </div>
      </section>

      {/* TL;DR */}
      <section className="mb-10 sm:mb-12 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-muted border-b border-border/50 pb-2 mb-4 select-none">
          TL;DR
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-[13px] leading-relaxed text-muted bg-zinc-50/50 dark:bg-zinc-900/10 p-5 rounded-2xl border border-border/60">
          <div>
            <span className="block font-bold text-foreground uppercase tracking-wider text-[10px] mb-1">Role</span>
            <span>Developer</span>
          </div>
          <div>
            <span className="block font-bold text-foreground uppercase tracking-wider text-[10px] mb-1">Status</span>
            <span>Functional Prototype</span>
          </div>
          <div className="sm:col-span-2">
            <span className="block font-bold text-foreground uppercase tracking-wider text-[10px] mb-1">Purpose</span>
            <span className="font-serif text-sm">
              Extracts text from PDF resumes, performs structural checks, and provides semantic keyword gap analysis using OpenAI.
            </span>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="mb-10 sm:mb-12 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-muted border-b border-border/50 pb-2 mb-4 select-none">
          The Problem
        </h2>
        <div className="text-[17px] sm:text-[18px] leading-[1.68] text-muted">
          <p>
            Job seekers often submit resumes in layouts that screening systems (ATS) cannot easily process. Without direct feedback, candidates struggle to identify missing key terms, structure headers correctly, or determine if their profile matches targeted positions.
          </p>
        </div>
      </section>

      {/* THE APPROACH */}
      <section className="mb-10 sm:mb-12 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-muted border-b border-border/50 pb-2 mb-4 select-none">
          The Approach
        </h2>
        <div className="space-y-4 text-[17px] sm:text-[18px] leading-[1.68] text-muted">
          <p>
            I structured this application around a two-phase check pipeline: deterministic rules (checking layout coordinates, section headings, and links) and semantic AI checks (using OpenAI to analyze description fit). By isolating document parsing from external API calls, the system reduces API expenses and delivers near-instant core results.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mb-10 sm:mb-12 space-y-6">
        <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-muted border-b border-border/50 pb-2 mb-4 select-none">
          How It Works
        </h2>
        
        <div className="space-y-5">
          <div className="border-l-2 border-accent/30 pl-4 space-y-1">
            <span className="font-mono text-xs text-accent font-bold uppercase tracking-wider block">01 — Upload</span>
            <p className="text-[15.5px] sm:text-[16.5px] leading-relaxed text-muted">
              The user uploads a resume in PDF format to the React interface.
            </p>
          </div>

          <div className="border-l-2 border-accent/30 pl-4 space-y-1">
            <span className="font-mono text-xs text-accent font-bold uppercase tracking-wider block">02 — Text Extraction</span>
            <p className="text-[15.5px] sm:text-[16.5px] leading-relaxed text-muted">
              PDFMiner parses layout blocks and extracts raw text streams on the Flask backend.
            </p>
          </div>

          <div className="border-l-2 border-accent/30 pl-4 space-y-1">
            <span className="font-mono text-xs text-accent font-bold uppercase tracking-wider block">03 — Rule-Based Analysis</span>
            <p className="text-[15.5px] sm:text-[16.5px] leading-relaxed text-muted">
              The system evaluates formatting structure, checking contact listings and section names.
            </p>
          </div>

          <div className="border-l-2 border-accent/30 pl-4 space-y-1">
            <span className="font-mono text-xs text-accent font-bold uppercase tracking-wider block">04 — Optional AI Feedback</span>
            <p className="text-[15.5px] sm:text-[16.5px] leading-relaxed text-muted">
              OpenAI GPT processes semantic keyword gaps relative to targeted job descriptions.
            </p>
          </div>

          <div className="border-l-2 border-accent/30 pl-4 space-y-1">
            <span className="font-mono text-xs text-accent font-bold uppercase tracking-wider block">05 — Dashboard Results</span>
            <p className="text-[15.5px] sm:text-[16.5px] leading-relaxed text-muted">
              Outputs overall score percentages, checklist validations, and suggestions.
            </p>
          </div>
        </div>
      </section>

      {/* TECHNICAL DECISIONS */}
      <section className="mb-10 sm:mb-12 space-y-6">
        <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-muted border-b border-border/50 pb-2 mb-4 select-none">
          Technical Decisions
        </h2>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-base font-bold text-foreground font-serif">PDFMiner for Text Extraction</h3>
            <p className="text-[15.5px] sm:text-[16.5px] leading-relaxed text-muted">
              <strong className="text-foreground font-semibold">Why:</strong> Unlike simple string-strip tools, PDFMiner extracts coordinates and handles multi-column reading flows accurately.
            </p>
            <p className="text-[15.5px] sm:text-[16.5px] leading-relaxed text-muted">
              <strong className="text-foreground font-semibold">Trade-off:</strong> Higher processing times than light text extractors, but prevents scrambled strings.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-base font-bold text-foreground font-serif">Deterministic &amp; AI Split</h3>
            <p className="text-[15.5px] sm:text-[16.5px] leading-relaxed text-muted">
              <strong className="text-foreground font-semibold">Why:</strong> Structural checks (checking emails or headings) are deterministic. Offloading them to rule checks avoids OpenAI API costs and latency.
            </p>
            <p className="text-[15.5px] sm:text-[16.5px] leading-relaxed text-muted">
              <strong className="text-foreground font-semibold">Trade-off:</strong> Separating checks requires writing two processing systems, but ensures low cost.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-base font-bold text-foreground font-serif">Flask API Backend</h3>
            <p className="text-[15.5px] sm:text-[16.5px] leading-relaxed text-muted">
              <strong className="text-foreground font-semibold">Why:</strong> Integrates directly with Python text processing packages and OpenAI libraries.
            </p>
            <p className="text-[15.5px] sm:text-[16.5px] leading-relaxed text-muted">
              <strong className="text-foreground font-semibold">Trade-off:</strong> Relies on synchronous API responses, but provides sufficient performance for single-user uploads.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT I BUILT */}
      <section className="mb-10 sm:mb-12 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-muted border-b border-border/50 pb-2 mb-4 select-none">
          What I Built
        </h2>
        <ul className="space-y-3 list-none pl-0 text-[17px] sm:text-[18px] leading-[1.68] text-muted">
          <li className="border-l-2 border-accent/30 pl-4">
            <strong className="text-foreground font-semibold">PDF Text Parsing Pipeline:</strong> Accurate coordinate-aware text extraction using PDFMiner.
          </li>
          <li className="border-l-2 border-accent/30 pl-4">
            <strong className="text-foreground font-semibold">Deterministic ATS Checks:</strong> Immediate checks verifying formatting constraints.
          </li>
          <li className="border-l-2 border-accent/30 pl-4">
            <strong className="text-foreground font-semibold">OpenAI Query Layer:</strong> Python wrapper invoking OpenAI API checks securely.
          </li>
          <li className="border-l-2 border-accent/30 pl-4">
            <strong className="text-foreground font-semibold">Results Dashboard:</strong> A clean React interface grouping scoring, details, and suggestions.
          </li>
        </ul>
      </section>

      {/* TECHNICAL IMPLEMENTATION */}
      <section className="mb-10 sm:mb-12 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-muted border-b border-border/50 pb-2 mb-4 select-none">
          Technical Implementation
        </h2>
        <div className="space-y-4 text-[17px] sm:text-[18px] leading-[1.68] text-muted">
          <p>
            The backend Flask API handles secure file uploads and coordinates document processing. The extracted text is then passed through direct validation rules or sent to OpenAI GPT. The React dashboard visualizes the findings:
          </p>
          <div className="py-4">
            <div className="font-mono text-xs border border-border/60 rounded-xl p-6 bg-zinc-50 dark:bg-zinc-900/30 max-w-sm mx-auto select-none space-y-4">
              <div className="text-center p-2.5 border border-border/80 rounded bg-white dark:bg-zinc-800 font-semibold text-foreground">
                Frontend: React
              </div>
              <div className="text-center text-muted">↓</div>
              <div className="text-center p-2.5 border border-border/80 rounded bg-white dark:bg-zinc-800 font-semibold text-foreground">
                Backend API: Flask
              </div>
              <div className="text-center text-muted">↓</div>
              <div className="text-center p-2.5 border border-border/80 rounded bg-white dark:bg-zinc-855/50 font-semibold text-foreground">
                Processing: PDFMiner + OpenAI API
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI VS RULE-BASED ANALYSIS */}
      <section className="mb-10 sm:mb-12 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-muted border-b border-border/50 pb-2 mb-4 select-none">
          AI vs Rule-Based Analysis
        </h2>
        <div className="space-y-4 text-[17px] sm:text-[18px] leading-[1.68] text-muted">
          <p>
            By design, the application separates evaluation paths:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2 pt-2">
            <div className="space-y-2">
              <span className="font-mono text-xs text-foreground font-bold uppercase tracking-wider block">Rule-Based Path</span>
              <p className="text-[14.5px] sm:text-[15px] leading-relaxed text-muted">
                Runs instant, zero-cost checks looking for contact emails, telephone details, section counts, and structured links.
              </p>
            </div>
            <div className="space-y-2">
              <span className="font-mono text-xs text-foreground font-bold uppercase tracking-wider block">AI-Powered Path</span>
              <p className="text-[14.5px] sm:text-[15px] leading-relaxed text-muted">
                Performs OpenAI GPT queries to evaluate experience alignment, match keywords, and suggest better phrasing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="mb-10 sm:mb-12 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-muted border-b border-border/50 pb-2 mb-4 select-none">
          Challenges
        </h2>
        <div className="text-[17px] sm:text-[18px] leading-[1.68] text-muted">
          <p>
            The major challenge lay in extracting text reliably from varied, multi-column PDF layouts. Coordinating coordinate layouts to avoid mapping paragraphs out-of-order required careful configuration of PDFMiner layout parameters.
          </p>
        </div>
      </section>

      {/* RESULT */}
      <section className="mb-10 sm:mb-12 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-muted border-b border-border/50 pb-2 mb-4 select-none">
          Result
        </h2>
        <div className="text-[17px] sm:text-[18px] leading-[1.68] text-muted">
          <p>
            The result is a working resume-analysis application that turns an uploaded resume into structured feedback. The tool provides job seekers with a quick, factual way to audit their resume text layout and identify formatting gaps.
          </p>
        </div>
      </section>

      {/* WHAT I LEARNED */}
      <section className="mb-10 sm:mb-12 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-muted border-b border-border/50 pb-2 mb-4 select-none">
          What I Learned
        </h2>
        <div className="text-[17px] sm:text-[18px] leading-[1.68] text-muted">
          <p>
            Building this project helped me understand pythonic document processing streams, design deterministic check systems, and learn how to split deterministic rules from subjective LLM evaluations to keep API operations fast and low-cost.
          </p>
        </div>
      </section>

      {/* WHAT I'D IMPROVE */}
      <section className="mb-10 sm:mb-12 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-muted border-b border-border/50 pb-2 mb-4 select-none">
          What I&apos;d Improve
        </h2>
        <div className="space-y-4 text-[17px] sm:text-[18px] leading-[1.68] text-muted font-serif">
          <p>
            In future updates, I plan to expand document support to include Microsoft Word (.docx) formats using dedicated parsing packages.
          </p>
          <p>
            I also intend to develop a matching algorithm that compares the parsed resume text directly to user-pasted job descriptions to identify specific missing keywords.
          </p>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="mb-12 sm:mb-16">
        <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-muted border-b border-border/50 pb-2 mb-6 select-none">
          Technologies Used
        </h2>
        <div className="flex flex-wrap gap-2 select-none">
          {techStack.map((tech) => (
            <span key={tech} className="px-3 py-1 text-xs font-sans font-medium bg-border/40 text-muted/95 rounded-md">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* NEXT PROJECT & BACK JOURNEY */}
      <footer className="border-t border-border/50 pt-10 mt-16 sm:mt-20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 select-none font-sans text-xs font-bold uppercase tracking-wider">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <Link href="/projects" className="text-muted hover:text-foreground transition-colors inline-flex items-center gap-1">
            ← Back to all projects
          </Link>
          <Link href="/projects/goldstone-fitness" className="text-muted hover:text-foreground transition-colors inline-flex items-center gap-1">
            ← Previous: Goldstone Fitness
          </Link>
        </div>
      </footer>

    </div>
  );
}

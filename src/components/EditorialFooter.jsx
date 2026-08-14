import Link from "next/link";

export default function EditorialFooter() {
  return (
    <footer className="mt-24 sm:mt-36 pt-6 border-t border-border flex flex-col sm:flex-row gap-4 justify-between items-center text-xs text-muted w-full font-sans uppercase tracking-wider">
      <span>&copy; 2026 Vinayaka S.</span>
      <div className="flex gap-3 sm:gap-4 items-center">
        <a href="https://github.com/vinayaka2003" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
          GitHub
        </a>
        <span className="text-border font-normal select-none">·</span>
        <a href="https://linkedin.com/in/vinayaka2003" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
          LinkedIn
        </a>
        <span className="text-border font-normal select-none">·</span>
        <Link href="/contact" className="hover:text-foreground transition-colors">
          Email
        </Link>
      </div>
    </footer>
  );
}

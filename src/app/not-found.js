import Link from "next/link";

export const metadata = {
  title: "404 — Page Not Found | Vinayaka S",
  description: "This page doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="py-8 sm:py-12 font-serif antialiased">
      <p className="text-xs font-sans text-muted uppercase tracking-wider mb-6">404</p>
      <h1 className="text-[34px] sm:text-[44px] font-bold tracking-tight text-foreground mb-4 font-serif leading-tight">
        Page not found.
      </h1>
      <p className="text-[17px] sm:text-[18px] leading-[1.7] text-muted font-serif mb-8">
        This page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="text-[17px] sm:text-[18px] text-foreground underline decoration-muted/40 hover:decoration-accent hover:text-accent underline-offset-4 transition-colors font-serif"
      >
        ← Back home
      </Link>
    </div>
  );
}

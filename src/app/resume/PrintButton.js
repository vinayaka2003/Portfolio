"use client";

import { Printer } from "lucide-react";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background hover:bg-accent hover:text-background text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm print:hidden cursor-pointer"
    >
      <Printer className="w-4 h-4" /> Print / Save PDF
    </button>
  );
}

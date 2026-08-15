"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import EditorialNavbar from "./EditorialNavbar";
import EditorialFooter from "./EditorialFooter";


export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  // Register PWA service worker client-side
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      const handleRegister = () => {
        navigator.serviceWorker.register("/sw.js").catch(() => {});
      };
      if (document.readyState === "complete") {
        handleRegister();
      } else {
        window.addEventListener("load", handleRegister);
        return () => window.removeEventListener("load", handleRegister);
      }
    }
  }, []);

  return (
    <div className="max-w-[1100px] mx-auto px-6 sm:px-8 w-full min-h-screen print:px-0">
      <div className="flex flex-col md:flex-row pt-0 md:pt-6 pb-6 print:pt-0 print:pb-0">
        {/* Left Sidebar Navigation Column (220px-240px) */}
        <aside className="md:w-[220px] lg:w-[240px] shrink-0 md:sticky md:top-6 md:self-start md:pr-8 lg:pr-10 pb-6 md:pb-0 print:hidden">
          <EditorialNavbar />
        </aside>

        {/* Right Main Content Column (780px-820px) */}
        <div className="flex-1 md:border-l md:border-border/60 md:pl-8 lg:pl-10 flex flex-col min-h-[calc(100vh-140px)] pt-0 print:border-none print:pl-0">
          <main key={pathname} className="flex-grow animate-page-fade">
            {children}
          </main>
          <div className="mt-auto pt-6 sm:pt-8 print:hidden">
            <EditorialFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

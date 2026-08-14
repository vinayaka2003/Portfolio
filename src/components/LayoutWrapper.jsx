"use client";

import { usePathname } from "next/navigation";
import EditorialNavbar from "./EditorialNavbar";
import EditorialFooter from "./EditorialFooter";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isResume = pathname === "/resume";

  if (isResume) {
    return <>{children}</>;
  }

  return (
    <div className="max-w-[1100px] mx-auto px-6 sm:px-8 w-full min-h-screen">
      <div className="flex flex-col md:flex-row pt-8 md:pt-14 pb-16">
        {/* Left Sidebar Navigation Column (220px-240px) */}
        <aside className="md:w-[220px] lg:w-[240px] shrink-0 md:sticky md:top-14 md:self-start md:pr-8 lg:pr-10 pb-8 md:pb-0">
          <EditorialNavbar />
        </aside>

        {/* Right Main Content Column (780px-820px) */}
        <div className="flex-1 md:border-l md:border-border/60 md:pl-8 lg:pl-10 flex flex-col justify-between min-h-[calc(100vh-140px)] pt-8 md:pt-0">
          <main className="flex-grow">{children}</main>
          <EditorialFooter />
        </div>
      </div>
    </div>
  );
}

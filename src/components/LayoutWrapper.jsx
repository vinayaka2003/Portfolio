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
    <div className="max-w-[700px] mx-auto px-6 w-full flex flex-col min-h-screen">
      <EditorialNavbar />
      <main className="flex-grow">{children}</main>
      <EditorialFooter />
    </div>
  );
}

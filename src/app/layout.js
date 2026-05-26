import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/ThemeProvider";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const viewport = { width: "device-width", initialScale: 1 };

export const metadata = {
  metadataBase: new URL("https://vinayaka.dev"),
  title: { default: "Vinayaka", template: "%s | Vinayaka" },
  description: "Software developer interested in AI, automation, and modern web technologies.",
  keywords: ["Vinayaka", "Software Developer", "Python", "AI", "Machine Learning", "FastAPI", "React", "Automation", "Portfolio"],
  authors: [{ name: "Vinayaka" }],
  creator: "Vinayaka",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vinayaka.dev",
    siteName: "Vinayaka",
    title: "Vinayaka",
    description: "Software developer interested in AI, automation, and modern web technologies.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Vinayaka — Software Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinayaka",
    description: "Software developer interested in AI, automation, and modern web technologies.",
    creator: "@vinayaka_dev",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://vinayaka.dev" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body suppressHydrationWarning className="min-h-screen bg-background text-foreground font-sans antialiased">
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

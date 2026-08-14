import "./globals.css";
import Providers from "@/components/ThemeProvider";
import LayoutWrapper from "@/components/LayoutWrapper";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const viewport = { width: "device-width", initialScale: 1 };

export const metadata = {
  metadataBase: new URL("https://vinayaka.dev"),
  title: { default: "Vinayaka S", template: "%s | Vinayaka S" },
  description: "Software developer interested in AI, automation, and modern web technologies.",
  keywords: ["Vinayaka S", "Software Developer", "Python", "AI", "Machine Learning", "FastAPI", "React", "Automation", "Portfolio"],
  authors: [{ name: "Vinayaka S" }],
  creator: "Vinayaka S",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vinayaka.dev",
    siteName: "Vinayaka S",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@vinayaka_s_y",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Vinayaka S",
    "url": "https://vinayaka.dev",
    "jobTitle": "Software Developer",
    "knowsAbout": [
      "Python",
      "Machine Learning",
      "Automation",
      "Web Development",
      "FastAPI",
      "React",
      "Next.js"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bangalore",
      "addressCountry": "India"
    },
    "sameAs": [
      "https://github.com/vinayaka2003",
      "https://linkedin.com/in/vinayaka2003",
      "https://twitter.com/vinayaka_s_y"
    ]
  };

  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-screen bg-background text-foreground font-sans antialiased">
        <Providers>
          <LayoutWrapper>{children}</LayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}

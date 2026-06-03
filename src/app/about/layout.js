export const metadata = {
  title: "About — Vinayaka | Full-Stack Developer & AI Enthusiast",
  description: "Learn about Vinayaka's journey in software development, expertise in Python, React, FastAPI, and AI/ML. Full-stack developer passionate about building scalable applications.",
  keywords: ["Vinayaka", "About", "Full-Stack Developer", "Python", "React", "FastAPI", "AI", "Machine Learning", "Software Engineer", "Portfolio", "Expertise"],
  openGraph: {
    title: "About — Vinayaka | Full-Stack Developer & AI Enthusiast",
    description: "Learn about Vinayaka's journey in software development with expertise in Python, React, FastAPI, and AI/ML.",
    url: "https://vinayaka.dev/about",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "About Vinayaka" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Vinayaka | Full-Stack Developer & AI Enthusiast",
    description: "Learn about Vinayaka's journey in software development with expertise in Python, React, FastAPI, and AI/ML.",
    images: ["/og-image.png"]
  },
  alternates: {
    canonical: "https://vinayaka.dev/about"
  }
};

export default function AboutLayout({ children }) {
  return children;
}

export const metadata = {
  title: "Projects — Vinayaka S | Software Developer",
  description: "A curated collection of projects built by Vinayaka S, focusing on AI, web development, and automation.",
  openGraph: {
    title: "Projects — Vinayaka S | Software Developer",
    description: "A curated collection of projects built by Vinayaka S, focusing on AI, web development, and automation.",
    url: "https://vinayaka.dev/projects",
    type: "website",
  },
  twitter: {
    title: "Projects — Vinayaka S | Software Developer",
    description: "A curated collection of projects built by Vinayaka S, focusing on AI, web development, and automation.",
  },
  alternates: { canonical: "https://vinayaka.dev/projects" },
};
import ProjectsClient from './ProjectsClient';

export default function Projects() {
  return <ProjectsClient />;
}

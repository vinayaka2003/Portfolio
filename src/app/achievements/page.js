export const metadata = {
  title: "Achievements — Vinayaka S",
  description: "A record of Vinayaka S's certifications, credentials, and professional milestones.",
  openGraph: {
    title: "Achievements — Vinayaka S",
    description: "A record of Vinayaka S's certifications, credentials, and professional milestones.",
    url: "https://vinayaka.dev/achievements",
    type: "website",
  },
  twitter: {
    title: "Achievements — Vinayaka S",
    description: "A record of Vinayaka S's certifications, credentials, and professional milestones.",
  },
  alternates: { canonical: "https://vinayaka.dev/achievements" },
};

import AchievementsClient from "./AchievementsClient";

export default function Achievements() {
  return <AchievementsClient />;
}

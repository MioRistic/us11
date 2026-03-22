// app/blog/usmnt-roster-march-2026/layout.js

import React from "react";

export const metadata = {
  title: "USMNT March 2026 Roster: Pochettino's Call-Ups for Belgium & Portugal | US11",
  description:
    "Full breakdown of Mauricio Pochettino's 27-player USMNT roster for March 2026 friendlies against Belgium and Portugal. Player list, key storylines, returns, and absences ahead of the 2026 World Cup.",
  openGraph: {
    title: "USMNT March 2026 Roster | US11",
    description:
      "Pochettino names squad for final camp before World Cup 2026. Includes Pulisic, Reyna return, MLS call-ups, and injuries to Adams & Dest.",
    url: "https://us11fc.com/news/usmnt-roster-march-2026",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2237710051/crop/MM5DEMBRGQ5DCMJTGM5G433XMU5DKMBTHIZTE===/GettyImages-2237710051.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        width: 1200,
        height: 630,
        alt: "USMNT players in training camp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "USMNT March 2026 Roster | US11",
    description:
      "Complete USMNT roster for Belgium & Portugal friendlies – Pulisic leads, Reyna returns, 9 MLS players called up.",
    url: "https://us11fc.com/news/usmnt-roster-march-2026",
    images: [
      "https://assets.goal.com/images/v3/getty-2237710051/crop/MM5DEMBRGQ5DCMJTGM5G433XMU5DKMBTHIZTE===/GettyImages-2237710051.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    ],
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
// app/news/neymar-fc-cincinnati/layout.js

import React from 'react';

export const metadata = {
  title: "What If Neymar Jr. Joined FC Cincinnati? The Reality, The Hype & What It Would Mean",
  description: "FC Cincinnati has opened preliminary talks with Neymar Jr. Could the Brazilian superstar really move to MLS? Full analysis of chances, on-pitch impact, risks and what it would mean for the club and league.",
  keywords: [
    "Neymar FC Cincinnati",
    "Neymar to Cincinnati",
    "Neymar MLS 2026",
    "FC Cincinnati transfer news",
    "Neymar Santos",
    "Neymar rumor MLS",
    "FC Cincinnati Neymar",
    "MLS big signing"
  ],
  openGraph: {
    title: "What If Neymar Jr. Joined FC Cincinnati? Reality Check & Full Breakdown",
    description: "Preliminary talks underway between FC Cincinnati and Neymar’s camp. Here’s what a potential move would mean for MLS.",
    url: "https://www.us11fc.com/news/neymar-fc-cincinnati",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2202920638/crop/MM5DGMJSGA5DCNZVGU5G433XMU5DEMRUHIYTENY=/GettyImages-2202920638.jpg?auto=webp&format=pjpg&width=1200&quality=80",
        width: 1200,
        height: 675,
        alt: "Neymar Jr. potential move to FC Cincinnati"
      }
    ],
    locale: "en_US",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "Could Neymar Jr. Really Join FC Cincinnati?",
    description: "Preliminary talks started – full breakdown of the Neymar to MLS rumor",
    images: [
      "https://assets.goal.com/images/v3/getty-2202920638/crop/MM5DGMJSGA5DCNZVGU5G433XMU5DEMRUHIYTENY=/GettyImages-2202920638.jpg?auto=webp&format=pjpg&width=1200&quality=80"
    ],
    creator: "@US11FC"
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/neymar-fc-cincinnati"
  }
};

export default function NeymarCincinnatiLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-[#020617]">
      {children}
    </div>
  );
}
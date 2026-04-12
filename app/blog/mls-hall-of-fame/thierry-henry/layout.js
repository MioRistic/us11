// app/news/mls-hall-of-fame/thierry-henry/layout.js

import React from "react";

export const metadata = {
  title: "MLS Hall of Fame: Thierry Henry — The King Who Brought Class to New York | US11",
  description:
    "Thierry Henry’s legendary years at New York Red Bulls (2010–2014), his elegance, leadership, and lasting impact on MLS and the club.",
  openGraph: {
    title: "MLS Hall of Fame: Thierry Henry — The King Who Brought Class to New York",
    description:
      "How Thierry Henry elevated the New York Red Bulls and helped change the perception of MLS with his world-class performances.",
    url: "https://www.us11fc.com/news/mls-hall-of-fame/thierry-henry",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-459466526/crop/MM5DCNZWGA5DSOJQHJXG653FHIZDGNR2GE3TM===/GettyImages-459466526.jpg?auto=webp&format=pjpg&width=1200&quality=80",
        width: 1200,
        height: 675,
        alt: "Thierry Henry New York Red Bulls",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MLS Hall of Fame: Thierry Henry — The King Who Brought Class to New York",
    description:
      "A deep dive into Thierry Henry’s influential years with New York Red Bulls and his legacy in MLS.",
    url: "https://www.us11fc.com/news/mls-hall-of-fame/thierry-henry",
    images: [
      "https://assets.goal.com/images/v3/getty-459466526/crop/MM5DCNZWGA5DSOJQHJXG653FHIZDGNR2GE3TM===/GettyImages-459466526.jpg?auto=webp&format=pjpg&width=1200&quality=80",
    ],
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/mls-hall-of-fame/thierry-henry"
  }
};

export default function ThierryHenryLayout({ children }) {
  return (
    <div className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">
        {children}
      </div>
    </div>
  );
}
// ./app/news/griezmann-orlando-city-jersey/layout.js   (ili kako god nazoveš folder)

import React from 'react';

export const metadata = {
  title: "Griezmann #7 Orlando City Jersey – Fastest Selling Kit in Club History",
  description: "Antoine Griezmann No.7 Orlando City 2026 home and away jerseys are already flying off the shelves. Shop the official Griezmann MLS jersey collection now.",
  keywords: [
    "Griezmann Orlando City jersey",
    "Griezmann #7 Orlando",
    "Antoine Griezmann MLS",
    "Orlando City 2026 home jersey",
    "Sunken Treasure kit Griezmann",
    "Griezmann Orlando City buy",
    "MLS jersey sales 2026",
    "US11 Griezmann"
  ],
  openGraph: {
    title: "How Griezmann’s No. 7 Jersey Became Orlando City’s Fastest-Selling Kit",
    description: "Griezmann jerseys with No.7 are already one of the biggest sellers in Orlando City history. Shop home and Sunken Treasure away kits now.",
    url: "https://www.us11fc.com/news/griezmann-orlando-city-jersey", // promeni putanju ako je drugačija
    siteName: "US11",
    images: [
      {
        url: "https://i.ibb.co/nNsnK2BN/salario-antoine-griezmann-orlando-city-mls-principal.jpg",
        width: 1200,
        height: 800,
        alt: "Antoine Griezmann Orlando City MLS jersey No.7"
      }
    ],
    locale: "en_US",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "Griezmann #7 Orlando City Jersey – Fastest Selling in Club History",
    description: "Shop Antoine Griezmann Orlando City 2026 jerseys. The No.7 is already a massive hit.",
    images: [
      "https://i.ibb.co/nNsnK2BN/salario-antoine-griezmann-orlando-city-mls-principal.jpg"
    ],
    creator: "@US11FC"
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/griezmann-orlando-city-jersey"
  }
};

export default function GriezmannLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      {children}
    </div>
  );
}
import React from "react";

export const metadata = {
  title: "MLS Cities That Almost Made It: Sacramento, Detroit, Las Vegas, Phoenix & More | US11",
  description:
    "Explore the MLS cities that came closest to joining the league but never did: failed bids from Sacramento Republic, Detroit, Las Vegas, Phoenix, and others. Why they missed out and what's next for expansion beyond 30 teams in 2026.",
  openGraph: {
    title: "MLS Cities That Almost Made It: Sacramento, Detroit, Las Vegas, Phoenix & More | US11",
    description:
      "Failed MLS expansion bids explored: Sacramento, Detroit, Las Vegas, Phoenix, and other cities that narrowly missed joining the league.",
    url: "https://www.us11fc.com/blog/mls-expansion-cities-2026",
    images: [
      {
        url: "https://www.sacrepublicfc.com/wp-content/uploads/sites/33/2024/03/03232024_INDvSAC_t6105.jpg",
        width: 1200,
        height: 630,
        alt: "Sacramento Republic FC MLS expansion failure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MLS Cities That Almost Made It: Sacramento, Detroit, Las Vegas, Phoenix & More | US11",
    description:
      "Failed MLS expansion bids: Sacramento, Detroit, Las Vegas, Phoenix, and other cities that never made it.",
    url: "https://www.us11fc.com/blog/mls-expansion-cities-2026",
    images: [
      "https://www.sacrepublicfc.com/wp-content/uploads/sites/33/2024/03/03232024_INDvSAC_t6105.jpg",
    ],
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
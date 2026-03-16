// ./app/news/adidas-usa-1994-denim-collection/layout.js
import React from 'react';

// 🟢 Server component – metadata eksportovana
export const metadata = {
  title:
    "Adidas USA 1994 Denim Graphic Jersey $89.99 – Iconic USMNT Throwback Collection 2026",
  description:
    "Shop the adidas USA 1994 Denim Graphic Collection: Blue jersey ($89.99), track jacket ($119.99), shorts ($59.99), hat ($39.99) & youth sizes. Retro USMNT 1994 kit revived for World Cup 2026 – buy now on Fanatics.",
  keywords: [
    "adidas USA 1994 Denim Graphic Jersey",
    "USMNT 1994 retro jersey 2026",
    "adidas denim collection buy",
    "1994 World Cup throwback kit",
    "Alexi Lalas 1994 jersey",
    "USA soccer retro gear",
    "World Cup 2026 adidas collection",
    "US11 affiliate shop"
  ],
  openGraph: {
    title:
      "Adidas USA 1994 Denim Graphic Collection – Shop the Iconic USMNT Throwback",
    description:
      "Revived 1994 away jersey with denim stars – jersey $89.99, jacket $119.99, shorts $59.99. Perfect for World Cup 2026 nostalgia. Shop now!",
    url: "https://www.us11fc.com/news/adidas-usa-1994-denim-collection",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/bltf53f7a9a05821020/crop/MM5DIMBYGU5DEMRZHA5G433XMU5DAORYHE2Q====/U.S%20Denim%20Kit%20Collection%2024.jpg?auto=webp&format=pjpg&width=1200&quality=80",
        width: 1200,
        height: 800,
        alt: "Adidas USA 1994 Denim Graphic Jersey blue stars retro USMNT 2026"
      }
    ],
    locale: "en_US",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "Adidas USA 1994 Denim Jersey $89.99 – USMNT Retro Drop 2026",
    description:
      "Shop the full adidas 1994 Denim Graphic Collection: jersey, jacket, shorts, hat. Nostalgia meets World Cup 2026 hype. Affiliate links via Fanatics.",
    images: [
      "https://assets.goal.com/images/v3/bltf53f7a9a05821020/crop/MM5DIMBYGU5DEMRZHA5G433XMU5DAORYHE2Q====/U.S%20Denim%20Kit%20Collection%2024.jpg?auto=webp&format=pjpg&width=1200&quality=80"
    ],
    creator: "@US11FC"
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/adidas-usa-1994-denim-collection"
  }
};

export default function Layout({ children }) {
  return <div className="min-h-screen bg-white text-[#020617]">{children}</div>;
}
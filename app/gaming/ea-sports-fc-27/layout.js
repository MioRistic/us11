// app/gaming/ea-sports-fc-27/layout.js

export const metadata = {
  title: "EA Sports FC 27: Everything New – The Grounds, Manual Defending, Dynamic Corners & More",
  description:
    "Full breakdown of EA Sports FC 27: new social mode The Grounds, major gameplay changes including manual defending and redesigned corners, Career Mode overhaul and Ultimate Team updates. Releases September 25, 2026.",
  openGraph: {
    title: "EA Sports FC 27: Everything New",
    description:
      "The Grounds, manual defending, dynamic corners, Career Mode rebuild and FUT Gallery – everything coming in EA Sports FC 27.",
    url: "https://www.us11fc.com/gaming/ea-sports-fc-27",
    siteName: "US11",
    images: [
      {
        url: "https://i.ibb.co/7NXp1FqH/fc-27-ultimate-plus.avif",
        width: 1200,
        height: 675,
        alt: "EA Sports FC 27 Ultimate Plus Edition",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EA Sports FC 27: Everything New",
    description: "The Grounds, manual defending, dynamic corners and more – full FC 27 breakdown.",
    images: [
      "https://i.ibb.co/7NXp1FqH/fc-27-ultimate-plus.avif",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/gaming/ea-sports-fc-27",
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
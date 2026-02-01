// app/mls-winter-transfers/layout.js

export const metadata = {
  title: "MLS Winter 2026 Transfer Roundup",
  description:
    "A detailed look at all the moves during the MLS Winter 2026 transfer window: signings, loans, and departures across the league.",
  openGraph: {
    title: "MLS Winter 2026 Transfer Roundup",
    description:
      "From Atlanta United to Inter Miami, see all the MLS clubs' winter 2026 transfers, including key signings and departures impacting the season.",
    url: "https://www.us11fc.com/news/mls-winter-2026-transfers",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/blt81f8e9ce07a146c0/crop/MM5DGMBQGA5DCNRYHA5G433XMU5DAORRGU3Q====/IMG_8044.jpeg?auto=webp&format=pjpg&width=1920&quality=60",
        width: 1200,
        height: 800,
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MLS Winter 2026 Transfer Roundup",
    description:
      "Check out all the MLS Winter 2026 transfer activity, including major signings, trades, and departures across the league.",
    images: [
      "https://assets.goal.com/images/v3/blt81f8e9ce07a146c0/crop/MM5DGMBQGA5DCNRYHA5G433XMU5DAORRGU3Q====/IMG_8044.jpeg?auto=webp&format=pjpg&width=1920&quality=60",
    ],
    creator: "@mioristic",
  },
};

export default function MLSWinterTransfersLayout({ children }) {
  return (
    <div className="bg-white text-[#020617] min-h-screen">
      <main className="max-w-5xl mx-auto px-4 md:px-0 py-12">
        {children}
      </main>
    </div>
  );
}

// app/mls-transfers-january/layout.js

export const metadata = {
  title: "January 2026 MLS Transfers: Complete List",
  description:
    "All moves during the January 2026 MLS transfer window: signings, loans, and departures across the league.",
  openGraph: {
    title: "January 2026 MLS Transfers: Complete List",
    description:
      "From Atlanta United to San Jose Earthquakes, see all the January 2026 MLS transfers, including key signings and departures impacting the season.",
    url: "https://www.us11fc.com/news/mls-transfers-january",
    siteName: "US11",
    images: [
      {
        url: "https://images.mlssoccer.com/image/private/t_editorial_landscape_8_desktop_mobile/mls/nueftpykp5147ajenan0.jpg",
        width: 1200,
        height: 500,
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "January 2026 MLS Transfers: Complete List",
    description:
      "Check out all the January 2026 MLS transfer activity, including major signings, trades, and departures across the league.",
    images: [
      "https://images.mlssoccer.com/image/private/t_editorial_landscape_8_desktop_mobile/mls/nueftpykp5147ajenan0.jpg",
    ],
    creator: "@mioristic",
  },
};

export default function MLSTransfersJanuaryLayout({ children }) {
  return (
    <div className="bg-white text-[#020617] min-h-screen">
      <main className="max-w-5xl mx-auto px-4 md:px-0 py-12">
        {children}
      </main>
    </div>
  );
}

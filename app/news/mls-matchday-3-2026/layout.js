// app/mls-transfers-2026/layout.js

export const metadata = {
  title: "MLS Transfers 2026: Toronto FC’s Record-Breaking Josh Sargent Gamble",
  description: "MLS primary transfer window updates with Toronto FC’s record transfer of Josh Sargent, data-driven signings, and final moves before March 26.",
  openGraph: {
    title: "MLS Transfers 2026: Toronto FC’s Record-Breaking Josh Sargent Gamble",
    description: "Toronto FC makes a franchise-changing investment in Josh Sargent, while other MLS clubs strengthen their squads ahead of the March 26 transfer deadline.",
    url: "https://www.us11fc.com/news/mls-transfers-2026-mart",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2175991224/crop/MM5DINBUGI5DENBZHE5G433XMU5DAORSGMYQ====/GettyImages-2175991224.jpg?auto=webp&format=pjpg&width=1920&quality=60",
        width: 1200,
        height: 800
      }
    ],
    locale: "en_US",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "MLS Transfers 2026: Toronto FC’s Record-Breaking Josh Sargent Gamble",
    description: "MLS primary transfer window updates, including Toronto FC’s record investment in Josh Sargent and other notable signings.",
    images: ["https://assets.goal.com/images/v3/getty-2175991224/crop/MM5DINBUGI5DENBZHE5G433XMU5DAORSGMYQ====/GettyImages-2175991224.jpg?auto=webp&format=pjpg&width=1920&quality=60"],
    creator: "@US11Analysis"
  }
};

export default function MLSTransfers2026Layout({ children }) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-5xl mx-auto px-4 md:px-0 py-10">
        {children}
      </main>
    </div>
  );
}
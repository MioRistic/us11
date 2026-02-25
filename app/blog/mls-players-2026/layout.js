// app/mls-players-2026/layout.js

export const metadata = {
  title: "Top 10 MLS Players to Watch in 2026",
  description:
    "Discover the top MLS players set to dominate the 2026 season, from Messi to rising stars, with key stats, expectations, and storylines.",
  openGraph: {
    title: "Top 10 MLS Players to Watch in 2026",
    description:
      "MLS 2026 kicks off with record crowds and high expectations. Check out the players who will define the season.",
    url: "https://www.us11fc.com/news/mls-players-2026",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2227792192/crop/MM5DCOBUGA5DCMBTGU5G433XMU5DCMRRGU5DENBX/GettyImages-2227792192.jpg?auto=webp&format=pjpg&width=1920&quality=60",
        width: 1200,
        height: 800,
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top 10 MLS Players to Watch in 2026",
    description:
      "Check out the MLS stars who will dominate headlines in 2026, from veterans to rising talents.",
    images: [
      "https://assets.goal.com/images/v3/getty-2227792192/crop/MM5DCOBUGA5DCMBTGU5G433XMU5DCMRRGU5DENBX/GettyImages-2227792192.jpg?auto=webp&format=pjpg&width=1920&quality=60",
    ],
    creator: "@mioristic",
  },
};

export default function MLSPlayersLayout({ children }) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-5xl mx-auto px-4 md:px-0 py-10">
        {children}
      </main>
    </div>
  );
}
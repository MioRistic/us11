export const metadata = {
  title: "Top 10 MLS Prospects to Watch in 2026",
  description: "Discover the top 10 MLS prospects set to shine in 2026: Zavier Gozo (born March 22, 2007), Peyton Miller (born November 8, 2007), and more rising talents with breakout potential, European transfer buzz, and USMNT upside. Track the next big MLS stars now!",
  openGraph: {
    title: "Top 10 MLS Prospects to Watch in 2026",
    description: "Discover the top 10 MLS prospects set to shine in 2026: Zavier Gozo (born March 22, 2007), Peyton Miller (born November 8, 2007), and more rising talents with breakout potential, European transfer buzz, and USMNT upside. Track the next big MLS stars now!",
    url: "https://www.us11fc.com/news/mls-prospects-2026",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2202625521/crop/MM5DGOBXGQ5DEMJXHE5G433XMU5DQNBSHIYA====/GettyImages-2202625521.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        width: 1200,
        height: 800,
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top 10 MLS Prospects to Watch in 2026",
    description: "Discover the top 10 MLS prospects set to shine in 2026: Zavier Gozo (born March 22, 2007), Peyton Miller (born November 8, 2007), and more rising talents with breakout potential, European transfer buzz, and USMNT upside. Track the next big MLS stars now!",
    images: [
      "https://assets.goal.com/images/v3/getty-2202625521/crop/MM5DGOBXGQ5DEMJXHE5G433XMU5DQNBSHIYA====/GettyImages-2202625521.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    ],
    creator: "@mioristic",
  },
};

export default function MLSProspectsLayout({ children }) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-5xl mx-auto px-4 md:px-0 py-10">
        {children}
      </main>
    </div>
  );
}
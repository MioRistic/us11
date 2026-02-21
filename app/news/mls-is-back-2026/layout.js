// app/mls-is-back/layout.js

export const metadata = {
  title: "MLS is Back: A New Season Begins",
  description:
    "Major League Soccer returns for the 2026 season with growing global momentum, new star arrivals, and the traditional parity that defines MLS.",
  openGraph: {
    title: "MLS is Back: A New Season Begins",
    description:
      "MLS kicks off a new season with rising global attention, continued star power, and another unpredictable campaign ahead.",
    url: "https://www.us11fc.com/news/mls-is-back-2026",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-1247752079/crop/MM5DGMBQGA5DCNRYHA5G433XMU5DAORRGU3A====/GettyImages-1247752079.jpg?auto=webp&format=pjpg&width=1920&quality=60",
        width: 1200,
        height: 800,
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MLS is Back: A New Season Begins",
    description:
      "Major League Soccer opens a new season with growing global momentum and fresh expectations across the league.",
    images: [
      "https://assets.goal.com/images/v3/getty-1247752079/crop/MM5DGMBQGA5DCNRYHA5G433XMU5DAORRGU3A====/GettyImages-1247752079.jpg?auto=webp&format=pjpg&width=1920&quality=60",
    ],
    creator: "@mioristic",
  },
};

export default function MLSLayout({ children }) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-5xl mx-auto px-4 md:px-0 py-10">
        {children}
      </main>
    </div>
  );
}
// app/mijatovic/layout.js

export const metadata = {
  title: "What’s Happening with Jovan Mijatović?",
  description:
    "Jovan Mijatović, the 20-year-old Serbian striker, moves from NYCFC and a loan in Belgium to Germany’s Eintracht Braunschweig — a pivotal step for his career.",
  openGraph: {
    title: "What’s Happening with Jovan Mijatović?",
    description:
      "After struggling for minutes at NYCFC and a loan spell in Belgium, Jovan Mijatović takes on a new challenge in Germany with Eintracht Braunschweig. Full story and analysis.",
    url: "https://www.us11fc.com/jovan-mijatovic-new-club",
    siteName: "US11",
    images: [
      {
        url: "https://i.ibb.co/zhFtcJwh/1769286421690.png",
        width: 1200,
        height: 800,
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "What’s Happening with Jovan Mijatović?",
    description:
      "Jovan Mijatović takes a crucial step in his career by joining Eintracht Braunschweig after NYCFC and Belgium. Read full analysis.",
    images: ["https://i.ibb.co/zhFtcJwh/1769286421690.png"],
    creator: "@mioristic", // replace with US11's Twitter
  },
};

export default function MijatovicLayout({ children }) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-5xl mx-auto px-4 md:px-0 py-10">
        {children}
      </main>
    </div>
  );
}

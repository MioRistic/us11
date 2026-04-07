// app/academy-insider/player-pathways/route88-interview/layout.js

export const metadata = {
  title: "Route 88: From Pro Players to Guiding the Next Generation | Exclusive Interview",
  description:
    "Exclusive interview with Kirill & Carlota from Route 88 – two pro athletes helping European talents navigate the U.S. college soccer system with honesty and real experience.",
  openGraph: {
    title: "Route 88 Interview: Real Talk About U.S. College Soccer from Pro Players",
    description:
      "Kirill and Carlota share their journey and insights on scholarships, common mistakes, D1 vs D2, and building long-term success in the American college system.",
    url: "https://www.us11fc.com/academy-insider/player-pathways/route88-interview",
    siteName: "US11",
    images: [
      {
        url: "https://i.ibb.co/s9hjNbJL/Profile-Pic.jpg",
        width: 1018,
        height: 420,
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Route 88: Pro Players Helping Talents Go to U.S. College Soccer",
    description:
      "Honest interview with Kirill & Carlota – former college players now guiding Europeans through the U.S. scholarship pathway.",
    images: ["https://i.ibb.co/s9hjNbJL/Profile-Pic.jpg"],
    creator: "@mioristic",
  },
};

// OVO JE NAJVAŽNIJE – default export mora biti React komponenta
export default function Route88InterviewLayout({ children }) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-5xl mx-auto px-4 md:px-0 py-10">
        {children}
      </main>
    </div>
  );
}
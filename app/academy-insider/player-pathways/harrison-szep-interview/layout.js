// app/academy-insider/player-pathways/harrison-szep-interview/layout.js

export const metadata = {
  title: "What No One Tells Young American Soccer Players – Harrison Szep Interview",
  description:
    "Harrison Szep, founder of StudentAthlete.ai, shares real insights on U.S. youth soccer pathways, recruitment, and how young players can succeed academically and athletically.",
  openGraph: {
    title: "Harrison Szep Exclusive: Real Insights on U.S. Soccer Pathways",
    description:
      "From recruitment myths to proper development, Harrison Szep explains what young American players need to know to succeed in soccer and academics. Full interview and guidance.",
    url: "https://www.us11fc.com/academy-insider/player-pathways/harrison-szep-interview",
    siteName: "US11",
    images: [
      {
        url: "https://i.ibb.co/27025ZWc/harrison1.png", // feature image
        width: 1018,
        height: 420,
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "What No One Tells Young American Soccer Players – Harrison Szep Interview",
    description:
      "Harrison Szep, founder of StudentAthlete.ai, shares real insights on U.S. youth soccer and recruitment pathways. Read the full interview.",
    images: ["https://i.ibb.co/27025ZWc/harrison1.png"],
    creator: "@mioristic", // replace with US11's official Twitter if needed
  },
};

export default function HarrisonSzepLayout({ children }) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-5xl mx-auto px-4 md:px-0 py-10">
        {children}
      </main>
    </div>
  );
}

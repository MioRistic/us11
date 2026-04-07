// app/news/mls/mls-matchday-6-2026/layout.js

export const metadata = {
  title: "MLS Matchday 6 2026: Bouanga’s Rampage, Miami’s New Stadium & Orlando Nightmare",
  description:
    "Recap of MLS Matchday 6 2026: Denis Bouanga hat-trick, Inter Miami new stadium opening, Philadelphia sixth straight loss.",
  openGraph: {
    title: "MLS Matchday 6 2026: Bouanga Hat-Trick & Miami Stadium Debut",
    description: "Full recap and analysis from Matchday 6 of the 2026 MLS season.",
    url: "https://www.us11fc.com/news/mls-matchday-6-2026",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/blt8209e4c975d96a14/GettyImages-2250417409.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MLS Matchday 6 2026 Recap",
    description: "Bouanga scores hat-trick, Miami opens new stadium – full Matchday 6 recap.",
    images: ["https://assets.goal.com/images/v3/blt8209e4c975d96a14/GettyImages-2250417409.jpg"],
    creator: "@mioristic",
  },
};

export default function MLSMatchday6Layout({ children }) {
  return (
    <div className="bg-white min-h-screen">   {/* ← Promenjeno iz bg-gray-50 u bg-white */}
      <main className="max-w-4xl mx-auto px-4 md:px-0 py-10">   {/* ← max-w-4xl da se slaže sa page-om */}
        {children}
      </main>
    </div>
  );
}
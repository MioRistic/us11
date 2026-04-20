// app/news/mls-matchday-8-2026/layout.js

export const metadata = {
  title: "MLS Matchday 8 2026: Messi Magic in Denver, San Jose Shocks LAFC 4-1 and 56 Goals Across the League",
  description:
    "Full recap from MLS Matchday 8 2026: Messi scores twice as Inter Miami win 3-2 in Denver, San Jose humiliates LAFC 4-1, 56 goals scored across the weekend and more key results.",
  openGraph: {
    title: "MLS Matchday 8 2026: Messi Delivers in Denver, San Jose Stuns LAFC 4-1",
    description: "Messi's brace secures comeback win for Inter Miami, San Jose Earthquakes produce one of the biggest upsets of the season with 4-1 win over LAFC – full Matchday 8 recap.",
    url: "https://www.us11fc.com/news/mls-matchday-8-2026",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2271966216/crop/MM5DEMBQGA5DCMJSGU5G433XMU5DAORWHE3A====/GettyImages-2271966216.jpg?auto=webp&format=pjpg&width=1920&quality=80",
        width: 1920,
        height: 1080,
        alt: "Lionel Messi celebrating during MLS Matchday 8 2026",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MLS Matchday 8 2026: Messi Magic & San Jose Shock LAFC",
    description: "Messi scores twice in Denver, San Jose wins 4-1 at LAFC, 56 goals across the league – full Matchday 8 recap.",
    images: ["https://assets.goal.com/images/v3/getty-2271966216/crop/MM5DEMBQGA5DCMJSGU5G433XMU5DAORWHE3A====/GettyImages-2271966216.jpg?auto=webp&format=pjpg&width=1920&quality=80"],
    creator: "@US11FC",
  },
};

export default function MLSMatchday8Layout({ children }) {
  return (
    <div className="bg-white min-h-screen">
      <main className="max-w-4xl mx-auto px-4 md:px-0 py-10">
        {children}
      </main>
    </div>
  );
}
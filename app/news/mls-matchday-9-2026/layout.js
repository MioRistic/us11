// app/news/mls-matchday-9-2026/layout.js

export const metadata = {
  title: "Midweek Madness: Goalkeeper Goals, De Paul & Suárez Magic, and San Jose’s Unstoppable Rise – MLS Matchday 9",
  description:
    "Full recap from MLS Matchday 9: Luka Gavran's goalkeeper goal, De Paul and Suárez shine for Inter Miami, two 4-4 thrillers, San Jose win 5-1 and more.",
  openGraph: {
    title: "Midweek Madness in MLS: Goalkeeper Scores Header & Two 4-4 Thrillers",
    description: "43 goals, a goalkeeper hero, De Paul & Suárez magic, San Jose on top – full Matchday 9 recap.",
    url: "https://www.us11fc.com/news/mls-matchday-9-2026",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2270923706/crop/MM5DGOBSGI5DEMJVGA5G433XMU5DAORTGEYA====/GettyImages-2270923706.jpg?auto=webp&format=pjpg&width=1920&quality=80",
        width: 1920,
        height: 1080,
        alt: "MLS Matchday 9 2026 Midweek Madness",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Midweek Madness: Goalkeeper Goal & Two 4-4 Thrillers | MLS Matchday 9",
    description: "43 goals, Luka Gavran header, De Paul & Suárez magic, San Jose continue dream run.",
    images: ["https://assets.goal.com/images/v3/getty-2270923706/crop/MM5DGOBSGI5DEMJVGA5G433XMU5DAORTGEYA====/GettyImages-2270923706.jpg?auto=webp&format=pjpg&width=1920&quality=80"],
    creator: "@US11FC",
  },
};

export default function MLSMatchday9Layout({ children }) {
  return (
    <div className="bg-white min-h-screen">
      <main className="max-w-4xl mx-auto px-4 md:px-0 py-10">
        {children}
      </main>
    </div>
  );
}
// app/news/johnny-cardoso-champions-league-semifinal-2026/layout.js

export const metadata = {
  title: "Johnny Cardoso Writes His Name Into American Soccer History with Composed Champions League Semifinal Debut",
  description:
    "24-year-old American midfielder Johnny Cardoso started and impressed in Atlético Madrid's 1-1 draw against Arsenal in the Champions League semifinals.",
  openGraph: {
    title: "Johnny Cardoso Shines in Champions League Semifinal Debut",
    description: "The New Jersey-born midfielder becomes only the third American to start a Champions League semifinal.",
    url: "https://www.us11fc.com/news/johnny-cardoso-champions-league-semifinal-2026",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2249616690/crop/MM5DENJTGQ5DCNBSGU5G433XMU5DAORRGMZA====/GettyImages-2249616690.jpg?auto=webp&format=pjpg&width=1920&quality=80",
        width: 1920,
        height: 1080,
        alt: "Johnny Cardoso Atlético Madrid vs Arsenal Champions League Semifinal 2026",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Johnny Cardoso Makes History in Champions League Semifinal",
    description: "American midfielder delivers composed performance on biggest stage.",
    images: ["https://assets.goal.com/images/v3/getty-2249616690/crop/MM5DENJTGQ5DCNBSGU5G433XMU5DAORRGMZA====/GettyImages-2249616690.jpg?auto=webp&format=pjpg&width=1920&quality=80"],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/johnny-cardoso-champions-league-semifinal-2026"
  }
};

export default function JohnnyCardosoSemifinalLayout({ children }) {
  return (
    <div className="bg-white min-h-screen">
      <main className="max-w-4xl mx-auto px-4 md:px-0 py-10">
        {children}
      </main>
    </div>
  );
}
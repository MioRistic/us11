// app/news/timo-werner-player-of-the-month-2026/layout.js

export const metadata = {
  title: "Timo Werner, Player of the Month: The Signing That Changed Everything for San Jose",
  description:
    "Timo Werner named MLS Player of the Month for April 2026 after an outstanding month with 4 goals and 3 assists, leading San Jose Earthquakes to a historic start.",
  openGraph: {
    title: "Timo Werner Named MLS Player of the Month for April 2026",
    description: "The German forward has transformed San Jose Earthquakes with his incredible form – full story and analysis.",
    url: "https://www.us11fc.com/news/timo-werner-player-of-the-month-2026",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/blte8f463fafee800c1/1600.jpg?auto=webp&format=pjpg&width=1920&quality=80",
        width: 1920,
        height: 1080,
        alt: "Timo Werner San Jose Earthquakes Player of the Month",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Timo Werner Player of the Month April 2026",
    description: "Werner leads San Jose with 7 goal contributions in April and wins MLS Player of the Month.",
    images: ["https://assets.goal.com/images/v3/blte8f463fafee800c1/1600.jpg?auto=webp&format=pjpg&width=1920&quality=80"],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/timo-werner-player-of-the-month-2026"
  }
};

export default function TimoWernerPlayerOfTheMonthLayout({ children }) {
  return (
    <div className="bg-white min-h-screen">
      <main className="max-w-4xl mx-auto px-4 md:px-0 py-10">
        {children}
      </main>
    </div>
  );
}
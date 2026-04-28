// app/news/mls-matchday-10-2026/layout.js

export const metadata = {
  title: "MLS Matchday 10 2026: Vancouver’s Ruthless Recruitment, Turner’s Second Coming and the League’s Emerging Truths",
  description:
    "From Vancouver’s elite recruitment to Matt Turner’s resurgence and several emerging storylines — what Matchday 10 revealed about the 2026 MLS season.",
  openGraph: {
    title: "MLS Matchday 10 2026: Vancouver’s Ruthless Recruitment & Turner’s Revival",
    description: "Deep analysis from Matchday 10: Vancouver’s smart signings, Matt Turner’s return to form, and key emerging narratives.",
    url: "https://www.us11fc.com/news/mls-matchday-10-2026",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2273145374/crop/MM5DIMJXHE5DEMZVGE5G433XMU5DAORSGE4A====/GettyImages-2273145374.jpg?auto=webp&format=pjpg&width=1920&quality=80",
        width: 1920,
        height: 1080,
        alt: "MLS Matchday 10",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MLS Matchday 10 2026: Vancouver & Turner Steal the Show",
    description: "Vancouver’s recruitment masterclass, Matt Turner’s resurgence, and more from a revealing Matchday 10.",
    images: ["https://assets.goal.com/images/v3/getty-2273145374/crop/MM5DIMJXHE5DEMZVGE5G433XMU5DAORSGE4A====/GettyImages-2273145374.jpg?auto=webp&format=pjpg&width=1920&quality=80"],
    creator: "@US11FC",
  },
};

export default function MlsMatchday10Layout({ children }) {
  return (
    <div className="bg-white min-h-screen">
      <main className="max-w-4xl mx-auto px-4 md:px-0 py-10">
        {children}
      </main>
    </div>
  );
}
// app/mls-2026-kicks-off/layout.js

export const metadata = {
  title:
    "MLS 2026 Kicks Off in Spectacular Fashion: Record Crowds and Youth Revolution",
  description:
    "The 2026 MLS season begins with record-breaking attendance, standout young talents, and early statements from LAFC, Red Bull New York, and Nashville SC.",
  openGraph: {
    title:
      "MLS 2026 Kicks Off in Spectacular Fashion: Record Crowds and Youth Revolution",
    description:
      "MLS opens the 2026 season with historic crowds, emerging teenage stars, and strong early contenders across the league.",
    url: "https://www.us11fc.com/news/mls-2026-kicks-off",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/blt13a6a3cd66e0c26a/GettyImages-2262888870.jpg?auto=webp&format=pjpg&width=1920&quality=60",
        width: 1200,
        height: 800,
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "MLS 2026 Kicks Off in Spectacular Fashion: Record Crowds and Youth Revolution",
    description:
      "Historic attendance, teenage breakthroughs, and strong early statements headline MLS Matchday 1.",
    images: [
      "https://assets.goal.com/images/v3/blt13a6a3cd66e0c26a/GettyImages-2262888870.jpg?auto=webp&format=pjpg&width=1920&quality=60",
    ],
    creator: "@mioristic",
  },
};

export default function MLS2026Layout({ children }) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-5xl mx-auto px-4 md:px-0 py-10">
        {children}
      </main>
    </div>
  );
}
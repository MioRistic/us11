// app/academy-insider/player-pathways/joao-pereira-interview/layout.js

export const metadata = {
  title: "From Portugal to the U.S. – Learning the Hard Way | João Pereira Interview",
  description:
    "Exclusive interview with João Pereira on adapting from Portugal to U.S. college soccer, mental resilience, and building a football identity in the American system.",
  openGraph: {
    title: "João Pereira: From Portugal to the U.S. — Learning the Hard Way",
    description:
      "An in-depth interview on João Pereira’s journey from Portugal to the U.S. college and USL2 system.",
    url: "https://www.us11fc.com/academy-insider/player-pathways/joao-pereira-interview",
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
    title: "From Portugal to the U.S. – Learning the Hard Way | João Pereira Interview",
    description:
      "João Pereira shares real insights on adapting from Europe to the U.S. college soccer and USL2 pathway.",
    images: ["https://i.ibb.co/s9hjNbJL/Profile-Pic.jpg"],
    creator: "@mioristic",
  },
};

export default function JoaoPereiraLayout({ children }) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-5xl mx-auto px-4 md:px-0 py-10">
        {children}
      </main>
    </div>
  );
}

export const metadata = {
  title: "Benjamin Cremaschi’s Move to Parma Made Permanent: The Full Story of the American Midfielder’s European Journey",
  description: "Parma have triggered the €4 million buy option to make Benjamin Cremaschi’s move from Inter Miami permanent.",
  openGraph: {
    title: "Benjamin Cremaschi’s Move to Parma Made Permanent",
    description: "The 20-year-old American midfielder leaves Inter Miami for a permanent stay in Serie A with Parma.",
    url: "https://www.us11fc.com/blog/cremaschi-parma-permanent",
    siteName: "US11",
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx-OyYFOezlJ99SwImyDlE2hrcELC06dVliqAIp20QYleTdBhmwUWhCH51&s=10",
        width: 1200,
        height: 675,
        alt: "Benjamin Cremaschi Parma 2026",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cremaschi Joins Parma Permanently",
    description: "The young American midfielder makes his move to Serie A permanent.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx-OyYFOezlJ99SwImyDlE2hrcELC06dVliqAIp20QYleTdBhmwUWhCH51&s=10"
    ],
    creator: "@us11",
  },
};

export default function CremaschiParmaPermanentLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-[#020617]">
      <main className="max-w-5xl mx-auto px-4 md:px-6 py-10">
        {children}
      </main>

      {/* Structured Data (Schema.org) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": "Benjamin Cremaschi’s Move to Parma Made Permanent: The Full Story of the American Midfielder’s European Journey",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx-OyYFOezlJ99SwImyDlE2hrcELC06dVliqAIp20QYleTdBhmwUWhCH51&s=10",
            "datePublished": "2026-07-13T18:00:00Z",
            "dateModified": "2026-07-13T20:00:00Z",
            "author": {
              "@type": "Person",
              "name": "Mio Ristić"
            },
            "publisher": {
              "@type": "Organization",
              "name": "US11",
              "logo": {
                "@type": "ImageObject",
                "url": "https://us11fc.com/logo.png"
              }
            },
            "description": "Parma have triggered the €4 million buy option to make Benjamin Cremaschi’s move from Inter Miami permanent.",
            "keywords": ["Benjamin Cremaschi", "Parma", "Inter Miami", "Serie A", "MLS"]
          })
        }}
      />
    </div>
  );
}
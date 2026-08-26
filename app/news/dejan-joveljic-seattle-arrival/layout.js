// app/news/dejan-joveljic-seattle-arrival/layout.js

export const metadata = {
  title: "Seattle Sounders Acquire Dejan Joveljić in $6 Million Cash Trade — Proven Goalscorer Arrives as Designated Player",
  description:
    "The Seattle Sounders have acquired striker Dejan Joveljić from Sporting Kansas City in a $6 million cash-for-player trade. The Serbian international becomes a DP and signs through 2030.",
  openGraph: {
    title: "Seattle Sounders Acquire Dejan Joveljić in $6 Million Cash Trade",
    description:
      "Proven MLS goalscorer Dejan Joveljić arrives in Seattle as a Designated Player on a four-year deal.",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/blt1f59038c75fb0191/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202024-11-30T215714.252.jpg?auto=webp&format=pjpg&width=2048&quality=60",
        width: 1200,
        height: 675,
        alt: "Dejan Joveljić Seattle Sounders",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sounders Acquire Dejan Joveljić for $6M",
    description: "Proven goalscorer arrives in Seattle as Designated Player.",
    images: [
      "https://assets.goal.com/images/v3/blt1f59038c75fb0191/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202024-11-30T215714.252.jpg?auto=webp&format=pjpg&width=2048&quality=60"
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/dejan-joveljic-seattle-arrival",
  },
};

export default function DejanJoveljicSeattleLayout({ children }) {
  return (
    <div className="bg-white min-h-screen">
      <main className="max-w-4xl mx-auto px-4 md:px-0 py-10">
        {children}
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline:
              "Seattle Sounders Acquire Dejan Joveljić in $6 Million Cash Trade — Proven Goalscorer Arrives as Designated Player",
            image:
              "https://assets.goal.com/images/v3/getty-2264578389/crop/MM5DGNJQGA5DCOJWHE5G433XMU5DAORSHA3A====/GettyImages-2264578389.jpg?auto=webp&format=pjpg&width=3840&quality=60",
            datePublished: "2026-08-25T18:00:00Z",
            dateModified: "2026-08-25T20:00:00Z",
            author: {
              "@type": "Person",
              name: "Mio Ristić",
            },
            publisher: {
              "@type": "Organization",
              name: "US11",
              logo: {
                "@type": "ImageObject",
                url: "https://us11fc.com/logo.png",
              },
            },
            keywords: [
              "Dejan Joveljić",
              "Seattle Sounders",
              "Sporting Kansas City",
              "MLS Transfer",
              "Designated Player",
              "David Lee",
              "Andre Luiz",
              "2026 MLS season"
            ],
            articleSection: "MLS"
          }),
        }}
      />
    </div>
  );
}
// app/news/brenden-aaronson-leeds-deal/layout.js

export const metadata = {
  title:
    "Brenden Aaronson Signs New Leeds Deal Until 2029 as American Midfielder Commits to Elland Road Project",
  description:
    "USMNT midfielder Brenden Aaronson has signed a new three-year contract with Leeds United, keeping him at Elland Road until the summer of 2029.",
  openGraph: {
    title: "Brenden Aaronson Signs New Three-Year Deal with Leeds United",
    description:
      "The American midfielder commits his future to Elland Road until 2029 after rebuilding his standing under Daniel Farke.",
    url: "https://www.us11fc.com/news/brenden-aaronson-leeds-deal",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2237710051/crop/MM5DEMBRGQ5DCMJTGM5G433XMU5DKMBTHIZTE===/GettyImages-2237710051.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        width: 1200,
        height: 675,
        alt: "Brenden Aaronson Leeds United contract extension",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brenden Aaronson Extends Leeds Contract Until 2029",
    description:
      "USMNT midfielder signs new three-year deal with the Whites after a strong Premier League campaign.",
    images: [
      "https://assets.goal.com/images/v3/getty-2237710051/crop/MM5DEMBRGQ5DCMJTGM5G433XMU5DKMBTHIZTE===/GettyImages-2237710051.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/brenden-aaronson-leeds-deal",
  },
};

export default function BrendenAaronsonLeedsDealLayout({ children }) {
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
              "Brenden Aaronson Signs New Leeds Deal Until 2029 as American Midfielder Commits to Elland Road Project",
            image:
              "https://assets.goal.com/images/v3/getty-2237710051/crop/MM5DEMBRGQ5DCMJTGM5G433XMU5DKMBTHIZTE===/GettyImages-2237710051.jpg?auto=webp&format=pjpg&width=3840&quality=60",
            datePublished: "2026-08-20T22:00:00Z",
            dateModified: "2026-08-20T22:00:00Z",
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
              "Brenden Aaronson",
              "Leeds United",
              "USMNT",
              "contract extension",
              "Daniel Farke",
              "Premier League",
              "Elland Road",
            ],
            articleSection: "USMNT",
          }),
        }}
      />
    </div>
  );
}
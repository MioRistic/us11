// app/news/messi-leagues-cup-record/layout.js

export const metadata = {
  title: "Messi Sets Leagues Cup Scoring Record as Inter Miami Open Tournament with 4-2 Win",
  description:
    "Lionel Messi scored twice and became the all-time leading goalscorer in Leagues Cup history as Inter Miami defeated Atlético San Luis 4-2 in their tournament opener.",
  openGraph: {
    title: "Messi Sets Leagues Cup Scoring Record as Inter Miami Open with 4-2 Win",
    description:
      "Lionel Messi scored twice to become the all-time Leagues Cup top scorer as Inter Miami beat Atlético San Luis 4-2.",
    url: "https://www.us11fc.com/news/messi-leagues-cup-record",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2289259073/crop/MM5DGMJYGQ5DCNZZGE5G433XMU5DGOJRHI2DK===/GettyImages-2289259073.jpg?auto=webp&format=pjpg&width=2048&quality=60",
        width: 2048,
        height: 1152,
        alt: "Lionel Messi Inter Miami Leagues Cup 2026",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Messi Sets Leagues Cup Scoring Record in Inter Miami’s 4-2 Win",
    description:
      "Lionel Messi becomes the all-time leading goalscorer in Leagues Cup history with a brace against Atlético San Luis.",
    images: [
      "https://assets.goal.com/images/v3/getty-2289259073/crop/MM5DGMJYGQ5DCNZZGE5G433XMU5DGOJRHI2DK===/GettyImages-2289259073.jpg?auto=webp&format=pjpg&width=2048&quality=60",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/messi-leagues-cup-record",
  },
};

export default function MessiLeaguesCupRecordLayout({ children }) {
  return (
    <div className="bg-white min-h-screen">
      <main className="max-w-4xl mx-auto px-4 md:px-0 py-10">
        {children}
      </main>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline:
              "Messi Sets Leagues Cup Scoring Record as Inter Miami Open Tournament with 4-2 Win",
            image:
              "https://assets.goal.com/images/v3/getty-2289259073/crop/MM5DGMJYGQ5DCNZZGE5G433XMU5DGOJRHI2DK===/GettyImages-2289259073.jpg?auto=webp&format=pjpg&width=2048&quality=60",
            datePublished: "2026-08-06T10:00:00Z",
            dateModified: "2026-08-06T12:00:00Z",
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
              "Lionel Messi",
              "Inter Miami",
              "Leagues Cup",
              "Leagues Cup 2026",
              "Messi record",
              "Atlético San Luis",
              "MLS",
              "CONCACAF",
            ],
            articleSection: "MLS",
            description:
              "Lionel Messi scored twice and became the all-time leading goalscorer in Leagues Cup history as Inter Miami defeated Atlético San Luis 4-2.",
          }),
        }}
      />
    </div>
  );
}
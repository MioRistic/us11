// app/news/sergi-roberto-la-galaxy/layout.js

export const metadata = {
  title: "LA Galaxy Sign Former Barcelona Captain Sergi Roberto: Leadership, Versatility and Winning DNA Arrive in Carson",
  description:
    "LA Galaxy have signed former Barcelona captain Sergi Roberto as a free agent through 2028. The 34-year-old brings leadership, versatility and Champions League experience to Carson.",
  openGraph: {
    title: "LA Galaxy Sign Former Barcelona Captain Sergi Roberto",
    description:
      "Former Barcelona captain Sergi Roberto joins LA Galaxy as a free agent through 2028 with an option for 2029.",
    url: "https://www.us11fc.com/news/sergi-roberto-la-galaxy",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2208662373/crop/MM5DINJSHA5DENJUG45G433XMU5DAORQ/GettyImages-2208662373.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        width: 1200,
        height: 675,
        alt: "Sergi Roberto LA Galaxy signing",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "LA Galaxy Sign Former Barcelona Captain Sergi Roberto",
    description: "Former Barça captain Sergi Roberto joins the Galaxy as a free agent through 2028",
    images: [
      "https://assets.goal.com/images/v3/getty-2208662373/crop/MM5DINJSHA5DENJUG45G433XMU5DAORQ/GettyImages-2208662373.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/sergi-roberto-la-galaxy",
  },
};

export default function SergiRobertoGalaxyLayout({ children }) {
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
              "LA Galaxy Sign Former Barcelona Captain Sergi Roberto: Leadership, Versatility and Winning DNA Arrive in Carson",
            image:
              "https://assets.goal.com/images/v3/getty-2208662373/crop/MM5DINJSHA5DENJUG45G433XMU5DAORQ/GettyImages-2208662373.jpg?auto=webp&format=pjpg&width=3840&quality=60",
            datePublished: "2026-08-09T00:00:00Z",
            dateModified: "2026-08-09T00:00:00Z",
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
              "Sergi Roberto",
              "LA Galaxy",
              "Barcelona",
              "MLS transfer",
              "free agent",
              "Riqui Puig",
              "MLS 2026",
            ],
            articleSection: "MLS",
          }),
        }}
      />
    </div>
  );
}
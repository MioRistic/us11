// app/news/mls-leagues-cup-results-sullivan/layout.js

export const metadata = {
  title: "MLS Clubs Tighten Their Grip on Leagues Cup Progression as Sullivan Continues to Shine",
  description:
    "Six MLS teams won on Sunday in Leagues Cup. Cavan Sullivan scored and assisted as Philadelphia Union beat Necaxa 3-1. Full results and analysis.",
  openGraph: {
    title: "MLS Clubs Tighten Grip on Leagues Cup as Sullivan Shines",
    description:
      "Cavan Sullivan scores and assists as six MLS sides win in Leagues Cup group stage.",
    url: "https://www.us11fc.com/news/mls-leagues-cup-results-sullivan",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2289653969/crop/MM5DIMJUHA5DEMZTGM5G433XMU5DAORSGE3A====/GettyImages-2289653969.jpg?auto=webp&format=pjpg&width=2048&quality=60",
        width: 1200,
        height: 675,
        alt: "MLS Leagues Cup results Cavan Sullivan",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MLS Clubs Tighten Grip on Leagues Cup as Sullivan Shines",
    description: "Six MLS wins on Sunday as 16-year-old Cavan Sullivan scores and assists",
    images: [
      "https://assets.goal.com/images/v3/getty-2289653969/crop/MM5DIMJUHA5DEMZTGM5G433XMU5DAORSGE3A====/GettyImages-2289653969.jpg?auto=webp&format=pjpg&width=2048&quality=60",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/mls-leagues-cup-results-sullivan",
  },
};

export default function LeaguesCupMLSResultsLayout({ children }) {
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
              "MLS Clubs Tighten Their Grip on Leagues Cup Progression as Sullivan Continues to Shine",
            image:
              "https://assets.goal.com/images/v3/getty-2289653969/crop/MM5DIMJUHA5DEMZTGM5G433XMU5DAORSGE3A====/GettyImages-2289653969.jpg?auto=webp&format=pjpg&width=2048&quality=60",
            datePublished: "2026-08-10T12:00:00Z",
            dateModified: "2026-08-10T12:00:00Z",
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
              "Leagues Cup",
              "Cavan Sullivan",
              "Philadelphia Union",
              "MLS",
              "Liga MX",
              "MLS results",
              "Leagues Cup 2026",
            ],
            articleSection: "MLS",
          }),
        }}
      />
    </div>
  );
}
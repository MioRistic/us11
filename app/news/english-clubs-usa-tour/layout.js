export const metadata = {
  title: "English Clubs Keep the Party Going: Why Football in America Isn’t Slowing Down After the World Cup",
  description: "Leeds, Liverpool, Sunderland and Wrexham are touring the US just days after the World Cup final, proving football in America is only getting stronger.",
  openGraph: {
    title: "English Clubs Keep the Party Going in America After the World Cup",
    description: "Four English clubs are filling stadiums across the US as football fever continues after the 2026 World Cup.",
    url: "https://www.us11fc.com/news/english-clubs-usa-tour",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2254270434/crop/MM5DGMRZHE5DCOBVGY5G433XMU5DAORWHA======/GettyImages-2254270434.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        width: 1920,
        height: 1080,
        alt: "English clubs USA Summer Tour 2026",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "English Clubs Keep the Party Going After the World Cup",
    description: "Liverpool, Leeds, Sunderland and Wrexham are touring America as football interest continues to rise.",
    images: [
      "https://assets.goal.com/images/v3/getty-2254270434/crop/MM5DGMRZHE5DCOBVGY5G433XMU5DAORWHA======/GettyImages-2254270434.jpg?auto=webp&format=pjpg&width=3840&quality=60"
    ],
    creator: "@us11",
  },
};

export default function EnglishClubsTourLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-[#020617]">
      <main className="max-w-5xl mx-auto px-4 md:px-6 py-10">
        {children}
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": "English Clubs Keep the Party Going: Why Football in America Isn’t Slowing Down After the World Cup",
            "image": "https://assets.goal.com/images/v3/getty-2254270434/crop/MM5DGMRZHE5DCOBVGY5G433XMU5DAORWHA======/GettyImages-2254270434.jpg?auto=webp&format=pjpg&width=3840&quality=60",
            "datePublished": "2026-07-26T01:00:00Z",
            "dateModified": "2026-07-26T01:00:00Z",
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
            "description": "Leeds, Liverpool, Sunderland and Wrexham are touring the US just days after the World Cup final.",
            "keywords": ["Premier League", "USA Tour", "Liverpool", "Leeds United", "Wrexham", "MLS", "World Cup 2026"]
          })
        }}
      />
    </div>
  );
}
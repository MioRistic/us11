export const metadata = {
  title: "Suárez Spoils Lewandowski’s MLS Debut as Inter Miami Edge Chicago 3-2",
  description: "Luis Suárez scored twice and Preston Plambeck netted a late winner as Inter Miami beat Chicago Fire 3-2, spoiling Robert Lewandowski’s MLS debut.",
  openGraph: {
    title: "Suárez Spoils Lewandowski’s MLS Debut | Inter Miami 3-2 Chicago",
    description: "El Pistolero scored a brace and set up the winner as short-handed Inter Miami edged Chicago Fire on Lewandowski’s debut night.",
    url: "https://www.us11fc.com/news/suarez-lewandowski-debut",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2270923706/crop/MM5DGOBSGI5DEMJVGA5G433XMU5DAORTGEYA====/GettyImages-2270923706.jpg?auto=webp&format=pjpg&width=1920&quality=60",
        width: 1920,
        height: 1080,
        alt: "Luis Suárez Inter Miami",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suárez Spoils Lewandowski’s MLS Debut",
    description: "Inter Miami 3-2 Chicago Fire — Suárez brace + Plambeck winner on Lewandowski’s first MLS night.",
    images: [
      "https://assets.goal.com/images/v3/getty-2270923706/crop/MM5DGOBSGI5DEMJVGA5G433XMU5DAORTGEYA====/GettyImages-2270923706.jpg?auto=webp&format=pjpg&width=1920&quality=60"
    ],
    creator: "@us11",
  },
};

export default function SuarezLewandowskiLayout({ children }) {
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
            "headline": "Suárez Spoils Lewandowski’s MLS Debut as Inter Miami Edge Chicago 3-2",
            "image": "https://assets.goal.com/images/v3/getty-2270923706/crop/MM5DGOBSGI5DEMJVGA5G433XMU5DAORTGEYA====/GettyImages-2270923706.jpg?auto=webp&format=pjpg&width=1920&quality=60",
            "datePublished": "2026-07-24T23:00:00Z",
            "dateModified": "2026-07-24T23:00:00Z",
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
            "description": "Luis Suárez scored twice and Preston Plambeck netted a late winner as Inter Miami beat Chicago Fire 3-2, spoiling Robert Lewandowski’s MLS debut.",
            "keywords": ["Luis Suárez", "Robert Lewandowski", "Inter Miami", "Chicago Fire", "MLS", "Preston Plambeck", "Casemiro"]
          })
        }}
      />
    </div>
  );
}
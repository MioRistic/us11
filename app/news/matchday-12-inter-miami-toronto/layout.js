export const metadata = {
  title: "Matchday 12 Opens With a Statement: Messi Produces Goal + Two Assists as Inter Miami Cruises Past Toronto 4-2",
  description:
    "Lionel Messi delivered a goal and two assists as Inter Miami opened Matchday 12 with a dominant 4-2 victory over Toronto FC. We break down the key moments and what it means for both teams.",
  
  openGraph: {
    title: "Messi Goal + 2 Assists | Inter Miami 4-2 Toronto FC",
    description: "Inter Miami starts Matchday 12 with a statement win as Messi shines again.",
    url: "https://www.us11fc.com/news/matchday-12-inter-miami-toronto",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2275337445/crop/MM5DKMBQGQ5DEOBRGU5G433XMU5DAORSGYYQ====/GettyImages-2275337445.jpg?auto=webp&format=pjpg&width=1920&quality=80",
        width: 1920,
        height: 1080,
        alt: "Lionel Messi celebrates vs Toronto FC",
      },
    ],
    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Messi Goal + 2 Assists | Inter Miami 4-2 Toronto",
    description: "Inter Miami opens Matchday 12 with a convincing victory over Toronto FC.",
    images: ["https://assets.goal.com/images/v3/getty-2275337445/crop/MM5DKMBQGQ5DEOBRGU5G433XMU5DAORSGYYQ====/GettyImages-2275337445.jpg?auto=webp&format=pjpg&width=1920&quality=80"],
    creator: "@US11FC",
  },

  alternates: {
    canonical: "https://www.us11fc.com/news/matchday-12-inter-miami-toronto"
  }
};

export default function Matchday12InterMiamiTorontoLayout({ children }) {
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
            "headline": "Matchday 12 Opens With a Statement: Messi Produces Goal + Two Assists as Inter Miami Cruises Past Toronto 4-2",
            "image": "https://assets.goal.com/images/v3/getty-2275337445/crop/MM5DKMBQGQ5DEOBRGU5G433XMU5DAORSGYYQ====/GettyImages-2275337445.jpg?auto=webp&format=pjpg&width=1920&quality=80",
            "datePublished": "2026-05-10T09:00:00Z",
            "dateModified": "2026-05-10T12:30:00Z",
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
            "keywords": [
              "Inter Miami", 
              "Toronto FC", 
              "Lionel Messi", 
              "Matchday 12", 
              "MLS 2026", 
              "Rodrigo De Paul", 
              "Luis Suárez"
            ],
            "articleSection": "MLS"
          })
        }}
      />
    </div>
  );
}
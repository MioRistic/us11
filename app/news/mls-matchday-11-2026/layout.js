// app/news/matchday-11-takeaways/layout.js

export const metadata = {
  title: "Orlando’s Miracle, Cincinnati’s Chaos and the Loons’ Aerial Assault: What We Learned from MLS Matchday 11",
  description:
    "From Ojeda’s historic hat-trick comeback to Evander’s heroics with 10 men and Minnesota’s set-piece masterclass — the biggest takeaways from a chaotic Matchday 11 in MLS.",
  openGraph: {
    title: "Orlando’s Miracle & Cincinnati’s Chaos | MLS Matchday 11 Takeaways",
    description: "Ojeda’s hat-trick, Evander’s heroics with 10 men, and more from a wild weekend in Major League Soccer.",
    url: "https://www.us11fc.com/news/matchday-11-takeaways",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2274230605/crop/MM5DIMRUGY5DEMZYHE5G433XMU5DAORUGI3A====/GettyImages-2274230605.jpg?auto=webp&format=pjpg&width=1920&quality=80",
        width: 1920,
        height: 1080,
        alt: "Martín Ojeda celebrates hat-trick vs Inter Miami",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orlando 4-3 Miami, Cincinnati win with 10 men | Matchday 11 Takeaways",
    description: "The biggest stories and talking points from Matchday 11 in MLS.",
    images: ["https://assets.goal.com/images/v3/getty-2274230605/crop/MM5DIMRUGY5DEMZYHE5G433XMU5DAORUGI3A====/GettyImages-2274230605.jpg?auto=webp&format=pjpg&width=1920&quality=80"],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/matchday-11-takeaways"
  }
};

export default function Matchday11TakeawaysLayout({ children }) {
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
            "headline": "Orlando’s Miracle, Cincinnati’s Chaos and the Loons’ Aerial Assault: What We Learned from MLS Matchday 11",
            "image": "https://assets.goal.com/images/v3/getty-2274230605/crop/MM5DIMRUGY5DEMZYHE5G433XMU5DAORUGI3A====/GettyImages-2274230605.jpg?auto=webp&format=pjpg&width=1920&quality=80",
            "datePublished": "2026-05-04T09:00:00Z",
            "dateModified": "2026-05-04T12:30:00Z",
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
              "MLS Matchday 11", 
              "Inter Miami vs Orlando City", 
              "Martín Ojeda", 
              "FC Cincinnati", 
              "Minnesota United", 
              "Evander", 
              "Florida Derby"
            ],
            "articleSection": "MLS"
          })
        }}
      />
    </div>
  );
}
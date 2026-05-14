// app/news/mcdonalds-park-chicago-fire/layout.js

export const metadata = {
  title: "McDonald’s Park: A New Chapter for Chicago Fire and a Defining Moment for a City",
  description: "McDonald’s and Chicago Fire FC announce landmark naming rights deal for the club’s new $750M stadium opening in 2028. A major boost for youth soccer and community impact in Chicago.",
  openGraph: {
    title: "McDonald’s Park: Chicago Fire’s New Home from 2028",
    description: "Historic naming rights partnership between McDonald’s and Chicago Fire FC creates a year-round destination on the Chicago River.",
    url: "https://www.us11fc.com/news/mcdonalds-park-chicago-fire",
    siteName: "US11",
    images: [
      {
        url: "https://i.ibb.co/7xZxRhLp/hero-rendering-5-Ce-Ln-RX9s.jpg",
        width: 1200,
        height: 700,
        alt: "McDonald’s Park Chicago Fire FC stadium rendering",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "McDonald’s Park: Chicago Fire’s New Stadium from 2028",
    description: "First-ever McDonald’s naming rights deal for a major U.S. sports stadium + huge youth soccer investment.",
    images: ["https://i.ibb.co/7xZxRhLp/hero-rendering-5-Ce-Ln-RX9s.jpg"],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/mcdonalds-park-chicago-fire"
  }
};

export default function McDonaldsParkChicagoFireLayout({ children }) {
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
            "headline": "McDonald’s Park: A New Chapter for Chicago Fire and a Defining Moment for a City",
            "image": "https://i.ibb.co/7xZxRhLp/hero-rendering-5-Ce-Ln-RX9s.jpg",
            "datePublished": "2026-05-13T12:30:00Z",
            "dateModified": "2026-05-13T12:30:00Z",
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
              "McDonald’s Park",
              "Chicago Fire FC",
              "McDonald’s Stadium",
              "Chicago Fire new stadium",
              "The 78 Chicago",
              "MLS stadium",
              "P.L.A.Y.S. program"
            ],
            "articleSection": "MLS"
          })
        }}
      />
    </div>
  );
}
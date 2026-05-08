export const metadata = {
  title: "James. Netflix’s Intimate Portrait of Colombia’s Last True No. 10",
  description: "Netflix is releasing 'James.', a raw and deeply personal three-part documentary about James Rodríguez ahead of the 2026 World Cup. The Colombian superstar opens up like never before.",
  
  openGraph: {
    title: "James. Netflix’s Intimate Portrait of Colombia’s Last True No. 10",
    description: "A powerful and honest documentary about James Rodríguez as he prepares for his final World Cup.",
    url: "https://www.us11fc.com/blog/james-netflix-documentary",
    siteName: "US11",
    images: [
      {
        url: "https://i.ibb.co/jZk4DKwK/M5-HDXY3-HJ5-HAFMM6-DCSGAK33-KU.avif",
        width: 1200,
        height: 675,
        alt: "James Rodríguez Netflix Documentary",
      },
    ],
    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "James. Netflix’s Intimate Portrait of Colombia’s Last True No. 10",
    description: "Netflix drops a raw, intimate documentary about James Rodríguez ahead of the 2026 World Cup.",
    images: ["https://i.ibb.co/jZk4DKwK/M5-HDXY3-HJ5-HAFMM6-DCSGAK33-KU.avif"],
    creator: "@US11FC",
  },

  alternates: {
    canonical: "https://www.us11fc.com/blog/james-netflix-documentary"
  }
};

export default function JamesNetflixDocumentaryLayout({ children }) {
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
            "headline": "James. Netflix’s Intimate Portrait of Colombia’s Last True No. 10",
            "image": "https://i.ibb.co/jZk4DKwK/M5-HDXY3-HJ5-HAFMM6-DCSGAK33-KU.avif",
            "datePublished": "2026-05-08T10:00:00Z",
            "dateModified": "2026-05-08T12:00:00Z",
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
            "keywords": ["James Rodríguez", "James. Netflix", "James Rodríguez documentary", "2026 World Cup", "Colombian football", "Netflix documentary"],
            "articleSection": "Soccer"
          })
        }}
      />
    </div>
  );
}
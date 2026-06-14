// app/news/usmnt-world-cup-brief/layout.js

export const metadata = {
  title: "USMNT World Cup Brief",
  description:
    "Daily updates and key moments from the United States men's national team during the 2026 FIFA World Cup. Short recaps after every match.",

  openGraph: {
    title: "USMNT World Cup Brief",
    description:
      "Daily updates from the USMNT at the 2026 World Cup. Quick recaps, key moments, and important news after every match.",
    url: "https://www.us11fc.com/news/usmnt-world-cup-brief",
    siteName: "US11",
    images: [
      {
        url: "https://i.ibb.co/7N0zcfsC/usmntlogo.png",
        width: 1200,
        height: 675,
        alt: "USMNT World Cup Brief",
      },
    ],
    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "USMNT World Cup Brief",
    description:
            "Daily updates from the United States at the 2026 FIFA World Cup.",
            images: ["https://i.ibb.co/7N0zcfsC/usmntlogo.png"],
    creator: "@mioristic",
  },

  alternates: {
    canonical: "https://www.us11fc.com/news/usmnt-world-cup-brief",
  },
};

export default function USMNTWorldCupBriefLayout({ children }) {
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
            "@type": "WebPage",
            "name": "USMNT World Cup Brief",
            "description": "Daily updates and key moments from the United States men's national team during the 2026 FIFA World Cup.",
            "url": "https://www.us11fc.com/news/usmnt-world-cup-brief",
            "image": "https://i.ibb.co/7N0zcfsC/usmntlogo.png",
            "datePublished": "2026-06-13T08:00:00Z",
            "dateModified": "2026-06-13T12:00:00Z",
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
              "USMNT", "2026 World Cup", "United States National Team",
              "World Cup Updates", "USMNT Daily Brief", "FIFA World Cup 2026"
            ]
          })
        }}
      />
    </div>
  );
}
// app/news/messi-2026-world-cup-decision/layout.js   (ili kako god hoćeš da ti bude putanja)

export const metadata = {
  title: "The Messi Question: Why Argentina’s Greatest Still Hasn’t Decided on the 2026 World Cup",
  description:
    "With the 2026 World Cup just months away, Lionel Messi has still not confirmed whether he will play. Scaloni gives him full freedom as the biggest question looms over Argentina.",
  openGraph: {
    title: "The Messi Question: Will Lionel Messi Play at the 2026 World Cup?",
    description: "At 38 years old, Messi has yet to decide on his participation in the 2026 World Cup. Scaloni: 'The decision is entirely his.'",
    url: "https://www.us11fc.com/news/messi-2026-world-cup-decision",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2268176070/crop/MM5DGNBSGQ5DCOJSGY5G433XMU5DGORQ/GettyImages-2268176070.jpg?auto=webp&format=pjpg&width=1920&quality=80",
        width: 1920,
        height: 1080,
        alt: "Lionel Messi with Argentina national team",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Will Messi Play the 2026 World Cup? The Decision Is Still His",
    description: "Scaloni says the choice belongs entirely to Messi as the 2026 World Cup approaches.",
    images: ["https://assets.goal.com/images/v3/getty-2268176070/crop/MM5DGNBSGQ5DCOJSGY5G433XMU5DGORQ/GettyImages-2268176070.jpg?auto=webp&format=pjpg&width=1920&quality=80"],
    creator: "@US11FC",
  },
};

export default function MessiWorldCupLayout({ children }) {
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
            "headline": "The Messi Question: Why Argentina's Greatest Still Hasn't Decided on the 2026 World Cup",
            "image": "https://assets.goal.com/images/v3/getty-2268176070/crop/MM5DGNBSGQ5DCOJSGY5G433XMU5DGORQ/GettyImages-2268176070.jpg?auto=webp&format=pjpg&width=1920&quality=80",
            "datePublished": "2026-05-02T12:00:00Z",
            "dateModified": "2026-05-02T12:00:00Z",
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
            }
          })
        }}
      />
    </div>
  );
}
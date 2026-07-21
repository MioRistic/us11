export const metadata = {
  title: "NYCFC CEO Brad Sims Sends Clear Message: “We Want Christian Pulisic”",
  description: "NYCFC CEO Brad Sims has publicly stated his strong desire to sign Christian Pulisic, despite AC Milan’s refusal to sell.",
  openGraph: {
    title: "NYCFC CEO: “We Want Christian Pulisic”",
    description: "New York City FC’s CEO Brad Sims makes his ambitions clear regarding the USMNT star.",
    url: "https://www.us11fc.com/news/nycfc-pulisic",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2281625986/crop/MM5DEMJXGA5DCMRSGE5G433XMU5DAORRGAZQ====/GettyImages-2281625986.jpg?auto=webp&format=pjpg&width=1920&quality=60",
        width: 1920,
        height: 1080,
        alt: "Christian Pulisic NYCFC",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "NYCFC CEO Wants Christian Pulisic",
    description: "Brad Sims publicly expresses interest in signing Pulisic for NYCFC.",
    images: [
      "https://assets.goal.com/images/v3/getty-2281625986/crop/MM5DEMJXGA5DCMRSGE5G433XMU5DAORRGAZQ====/GettyImages-2281625986.jpg?auto=webp&format=pjpg&width=1920&quality=60"
    ],
    creator: "@us11",
  },
};

export default function NycfcPulisicLayout({ children }) {
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
            "headline": "NYCFC CEO Brad Sims Sends Clear Message: “We Want Christian Pulisic”",
            "image": "https://assets.goal.com/images/v3/getty-2281625986/crop/MM5DEMJXGA5DCMRSGE5G433XMU5DAORRGAZQ====/GettyImages-2281625986.jpg?auto=webp&format=pjpg&width=1920&quality=60",
            "datePublished": "2026-07-21T20:00:00Z",
            "dateModified": "2026-07-21T20:00:00Z",
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
            "description": "NYCFC CEO Brad Sims has publicly stated his strong desire to sign Christian Pulisic.",
            "keywords": ["Christian Pulisic", "NYCFC", "MLS", "Brad Sims", "Transfer News"]
          })
        }}
      />
    </div>
  );
}
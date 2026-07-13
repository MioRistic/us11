export const metadata = {
  title: "Antoine Griezmann Officially Arrives in Orlando: Goal and Assist in Debut as Lions Crush Tampa Bay 6-0",
  description: "Antoine Griezmann scores and assists in his Orlando City debut as the Lions thrash Tampa Bay Rowdies 6-0 in a friendly at Inter&Co Stadium.",
  openGraph: {
    title: "Antoine Griezmann Officially Arrives in Orlando: Goal and Assist in Debut",
    description: "Griezmann delivers dream debut with goal and assist as Orlando City dominate Tampa Bay 6-0.",
    url: "https://www.us11fc.com/blog/griezmann-orlando-debut",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2284675878/crop/MM5DGNRQGA5DEMBSGU5G433XMU5DAORYGU======/GettyImages-2284675878.jpg",
        width: 1200,
        height: 675,
        alt: "Antoine Griezmann Orlando City Debut 2026",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Griezmann Scores & Assists in Orlando City Debut",
    description: "The French star shines in his first match for the Lions.",
    images: [
      "https://assets.goal.com/images/v3/getty-2284675878/crop/MM5DGNRQGA5DEMBSGU5G433XMU5DAORYGU======/GettyImages-2284675878.jpg"
    ],
    creator: "@us11",
  },
};

export default function GriezmannOrlandoDebutLayout({ children }) {
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
            "headline": "Antoine Griezmann Officially Arrives in Orlando: Goal and Assist in Debut as Lions Crush Tampa Bay 6-0",
            "image": "https://assets.goal.com/images/v3/getty-2284675878/crop/MM5DGNRQGA5DEMBSGU5G433XMU5DAORYGU======/GettyImages-2284675878.jpg",
            "datePublished": "2026-07-09T20:00:00Z",
            "dateModified": "2026-07-09T22:30:00Z",
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
            "description": "Antoine Griezmann scores and assists in his Orlando City debut as the Lions thrash Tampa Bay Rowdies 6-0.",
            "keywords": ["Griezmann", "Orlando City", "MLS", "Tampa Bay Rowdies", "Inter&Co Stadium"]
          })
        }}
      />
    </div>
  );
}
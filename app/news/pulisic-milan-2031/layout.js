export const metadata = {
  title: "Milan Want Christian Pulisic Through 2031. The Harder Part Is Getting There",
  description:
    "AC Milan want Christian Pulisic tied down until June 2031 at around €5 million net. He says he wants to stay. No one has signed.",
  openGraph: {
    title: "Milan Want Christian Pulisic Through 2031. The Harder Part Is Getting There",
    description:
      "Gazzetta says Cardinale wants 2031. Pulisic says he is happy at San Siro. The signature is still missing.",
    url: "https://www.us11fc.com/news/pulisic-milan-2031",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2296411105/crop/MM5DCNRZGI5DSNJSHJXG653FHI2DGNR2GEZDC===/GettyImages-2296411105.jpg?auto=webp&format=pjpg&width=2048&quality=60",
        width: 1200,
        height: 675,
        alt: "Christian Pulisic in action for AC Milan",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Milan Want Pulisic Through 2031. Nobody Has Signed.",
    description:
      "A reported €5 million net framework, a 2028 option, and a player who says he wants to stay.",
    images: [
      "https://assets.goal.com/images/v3/getty-2296411105/crop/MM5DCNRZGI5DSNJSHJXG653FHI2DGNR2GEZDC===/GettyImages-2296411105.jpg?auto=webp&format=pjpg&width=2048&quality=60",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/pulisic-milan-2031",
  },
};

export default function PulisicMilan2031Layout({ children }) {
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
            headline:
              "Milan Want Christian Pulisic Through 2031. The Harder Part Is Getting There",
            image:
              "https://assets.goal.com/images/v3/getty-2296411105/crop/MM5DCNRZGI5DSNJSHJXG653FHI2DGNR2GEZDC===/GettyImages-2296411105.jpg?auto=webp&format=pjpg&width=2048&quality=60",
            datePublished: "2026-10-01T23:46:00Z",
            dateModified: "2026-10-01T23:46:00Z",
            author: {
              "@type": "Person",
              name: "Mio Ristic",
            },
            publisher: {
              "@type": "Organization",
              name: "US11",
              logo: {
                "@type": "ImageObject",
                url: "https://us11fc.com/logo.png",
              },
            },
            keywords: [
              "Christian Pulisic",
              "AC Milan",
              "USMNT",
              "contract",
              "Gerry Cardinale",
              "Serie A",
            ],
            articleSection: "USMNT",
            description:
              "AC Milan want Christian Pulisic until 2031. He says he wants to stay. The contract is not signed.",
          }),
        }}
      />
    </div>
  );
}

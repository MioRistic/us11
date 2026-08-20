// app/news/messi-union-miami-subaru-park/layout.js

export const metadata = {
  title:
    "Battle Lines Drawn Again: Messi’s Emotional Goal and Stoppage-Time Chaos as Union Refuse to Yield to Inter Miami",
  description:
    "Lionel Messi scored his first goal since his father’s death as Philadelphia Union and Inter Miami played out a tense 2-2 draw at Subaru Park, ending in red cards and a disciplinary investigation.",
  openGraph: {
    title: "Messi’s Emotional Goal and Chaos as Union Battle Inter Miami to 2-2 Draw",
    description:
      "Messi scores, Cavan Sullivan impresses then sees red, and stoppage-time chaos erupts as Philadelphia refuse to yield to Inter Miami.",
    url: "https://www.us11fc.com/news/messi-union-miami-subaru-park",
    siteName: "US11",
    images: [
      {
        url: "https://i.ibb.co/15qZsXB/images-6.jpg",
        width: 1200,
        height: 675,
        alt: "Lionel Messi Inter Miami vs Philadelphia Union at Subaru Park",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Messi Scores, Chaos Erupts in Union 2-2 Draw with Inter Miami",
    description:
      "Emotional Messi goal, Cavan Sullivan red card, and a late brawl as Philadelphia battle Inter Miami at Subaru Park.",
    images: ["https://i.ibb.co/15qZsXB/images-6.jpg"],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/messi-union-miami-subaru-park",
  },
};

export default function MessiUnionMiamiLayout({ children }) {
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
              "Battle Lines Drawn Again: Messi’s Emotional Goal and Stoppage-Time Chaos as Union Refuse to Yield to Inter Miami",
            image: "https://i.ibb.co/15qZsXB/images-6.jpg",
            datePublished: "2026-08-20T17:00:00Z",
            dateModified: "2026-08-20T17:00:00Z",
            author: {
              "@type": "Person",
              name: "Mio Ristić",
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
              "Lionel Messi",
              "Philadelphia Union",
              "Inter Miami",
              "Cavan Sullivan",
              "Milan Iloski",
              "Subaru Park",
              "MLS",
              "Yannick Bright",
            ],
            articleSection: "MLS",
          }),
        }}
      />
    </div>
  );
}
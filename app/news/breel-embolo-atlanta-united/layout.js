// app/news/breel-embolo-atlanta-united/layout.js

export const metadata = {
  title: "Atlanta United Finalizing $18m Deal for Switzerland Forward Breel Embolo",
  description:
    "Atlanta United are finalizing a deal worth around $18 million to sign Switzerland international Breel Embolo from Stade Rennes. One of the top five most expensive transfers in MLS history.",
  openGraph: {
    title: "Atlanta United Finalizing $18m Deal for Breel Embolo",
    description:
      "Switzerland forward Breel Embolo set to join Atlanta United from Rennes in a deal worth around $18 million.",
    url: "https://www.us11fc.com/news/breel-embolo-atlanta-united",
    siteName: "US11",
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbwzV8zjhlrGysUyoFj63vuCBg-DpmwygmARa2ASDwTA&s=10",
        width: 1200,
        height: 675,
        alt: "Breel Embolo Atlanta United transfer",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlanta United Finalizing $18m Deal for Breel Embolo",
    description: "Swiss international forward set to join Atlanta from Rennes.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbwzV8zjhlrGysUyoFj63vuCBg-DpmwygmARa2ASDwTA&s=10",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/breel-embolo-atlanta-united",
  },
};

export default function Layout({ children }) {
  return (
    <div className="bg-white min-h-screen">
      <main className="max-w-4xl mx-auto px-4 md:px-0 py-10">
        {children}
      </main>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline:
              "Atlanta United Finalizing $18m Deal for Switzerland Forward Breel Embolo",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbwzV8zjhlrGysUyoFj63vuCBg-DpmwygmARa2ASDwTA&s=10",
            datePublished: "2026-08-14T13:00:00Z",
            dateModified: "2026-08-14T13:00:00Z",
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
              "Breel Embolo",
              "Atlanta United",
              "Rennes",
              "MLS transfer",
              "Switzerland",
              "Designated Player",
              "MLS",
            ],
            articleSection: "MLS",
          }),
        }}
      />
    </div>
  );
}
// app/news/middlesbrough-usmnt-trio/layout.js

export const metadata = {
  title: "USMNT Trio Living Together at Middlesbrough as Premier League Dream Takes Shape",
  description:
    "Aidan Morris, Sebastian Berhalter and Max Arfsten are sharing a house in Middlesbrough and chasing Premier League promotion together. The full story of the American colony at the Riverside.",
  openGraph: {
    title: "USMNT Trio Living Together at Middlesbrough",
    description:
      "Three USMNT players sharing a house and a Premier League dream at Middlesbrough.",
    url: "https://www.us11fc.com/news/middlesbrough-usmnt-trio",
    siteName: "US11",
    images: [
      {
        url: "https://i.ibb.co/G4WV0yhL/images.jpg",
        width: 1200,
        height: 675,
        alt: "USMNT players at Middlesbrough - Aidan Morris, Sebastian Berhalter and Max Arfsten",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "USMNT Trio Living Together at Middlesbrough",
    description: "Morris, Berhalter and Arfsten share a house and a Premier League dream.",
    images: [
      "https://i.ibb.co/G4WV0yhL/images.jpg",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/middlesbrough-usmnt-trio",
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
              "USMNT Trio Living Together at Middlesbrough as Premier League Dream Takes Shape",
            image: "https://i.ibb.co/G4WV0yhL/images.jpg",
            datePublished: "2026-08-10T12:00:00Z",
            dateModified: "2026-08-10T12:00:00Z",
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
              "USMNT",
              "Middlesbrough",
              "Aidan Morris",
              "Sebastian Berhalter",
              "Max Arfsten",
              "Premier League",
              "Championship",
              "MLS",
            ],
            articleSection: "USMNT",
          }),
        }}
      />
    </div>
  );
}
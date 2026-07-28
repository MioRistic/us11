// app/news/vincent-janssen-portland-timbers/layout.js

export const metadata = {
  title: "Portland Timbers Set to Sign Dutch Striker Vincent Janssen",
  description:
    "The Portland Timbers have agreed to sign former Tottenham and Royal Antwerp forward Vincent Janssen as a free agent. The 32-year-old will not be a Designated Player.",
  openGraph: {
    title: "Portland Timbers Set to Sign Dutch Striker Vincent Janssen",
    description:
      "Vincent Janssen is set to join the Portland Timbers as a free agent after leaving Royal Antwerp. The experienced Dutch forward arrives as a non-DP signing.",
    url: "https://www.us11fc.com/news/vincent-janssen-portland-timbers",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/imago-sport-1077788800/crop/MM5DGNJVGE5DCOJZG45G433XMU5DAORRHA2Q====/imago-image.jpeg;%20charset=utf-8?auto=webp&format=pjpg&width=3840&quality=60",
        width: 1200,
        height: 675,
        alt: "Vincent Janssen Portland Timbers",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portland Timbers Set to Sign Dutch Striker Vincent Janssen",
    description: "Former Tottenham striker Vincent Janssen agrees to join Portland Timbers as a free agent.",
    images: [
      "https://assets.goal.com/images/v3/imago-sport-1077788800/crop/MM5DGNJVGE5DCOJZG45G433XMU5DAORRHA2Q====/imago-image.jpeg;%20charset=utf-8?auto=webp&format=pjpg&width=3840&quality=60",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/vincent-janssen-portland-timbers",
  },
};

export default function VincentJanssenPortlandLayout({ children }) {
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
            headline: "Portland Timbers Set to Sign Dutch Striker Vincent Janssen",
            image: "https://assets.goal.com/images/v3/imago-sport-1077788800/crop/MM5DGNJVGE5DCOJZG45G433XMU5DAORRHA2Q====/imago-image.jpeg;%20charset=utf-8?auto=webp&format=pjpg&width=3840&quality=60",
            datePublished: "2026-07-28T00:00:00Z",
            dateModified: "2026-07-28T00:30:00Z",
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
              "Vincent Janssen",
              "Portland Timbers",
              "MLS transfer",
              "Royal Antwerp",
              "Tottenham",
              "Dutch striker",
              "MLS 2026",
            ],
            articleSection: "MLS",
          }),
        }}
      />
    </div>
  );
}
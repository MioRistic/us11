// app/news/chicharito-atletico-dallas/layout.js

export const metadata = {
  title: "Chicharito Signs with Atlético Dallas: Mexico Legend Becomes First Player in Club History",
  description:
    "Javier “Chicharito” Hernández has signed with Atlético Dallas as the first player in the new USL Championship expansion club’s history. He will begin playing in 2027.",
  openGraph: {
    title: "Chicharito Signs with Atlético Dallas: Mexico Legend Becomes First Player in Club History",
    description:
      "Mexico’s all-time leading scorer joins brand-new Atlético Dallas as the club’s first-ever signing. Full details on the deal.",
    url: "https://www.us11fc.com/news/chicharito-atletico-dallas",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2202158444/crop/MM5DGOBSGA5DEMJUHE5G433XMU5DAORRHE4Q====/GettyImages-2202158444.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        width: 1200,
        height: 675,
        alt: "Chicharito Javier Hernández Atlético Dallas",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chicharito Signs with Atlético Dallas as First-Ever Player",
    description: "Mexico legend Javier Hernández joins new USL Championship side Atlético Dallas.",
    images: [
      "https://assets.goal.com/images/v3/getty-2202158444/crop/MM5DGOBSGA5DEMJUHE5G433XMU5DAORRHE4Q====/GettyImages-2202158444.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/chicharito-atletico-dallas",
  },
};

export default function ChicharitoAtleticoDallasLayout({ children }) {
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
            headline: "Chicharito Signs with Atlético Dallas: Mexico Legend Becomes First Player in Club History",
            image: "https://assets.goal.com/images/v3/getty-2202158444/crop/MM5DGOBSGA5DEMJUHE5G433XMU5DAORRHE4Q====/GettyImages-2202158444.jpg?auto=webp&format=pjpg&width=3840&quality=60",
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
              "Chicharito",
              "Javier Hernández",
              "Atlético Dallas",
              "USL Championship",
              "Mexico",
              "Dallas soccer",
              "transfer",
            ],
            articleSection: "MLS / USL",
          }),
        }}
      />
    </div>
  );
}
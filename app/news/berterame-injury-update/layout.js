// app/news/berterame-injury-update/layout.js

export const metadata = {
  title: "Inter Miami’s Germán Berterame Discharged After Scary Head Collision",
  description:
    "Germán Berterame has been discharged from hospital after a frightening head collision in Inter Miami’s 1-0 win over CF Montréal. The forward sustained injuries to his left shoulder and nose.",
  openGraph: {
    title: "Inter Miami’s Germán Berterame Discharged After Scary Head Collision",
    description:
      "Berterame collapsed after an aerial challenge with Efraín Morales and was taken to hospital by ambulance. He has now been discharged and is recovering.",
    url: "https://www.us11fc.com/news/berterame-injury-update",
    siteName: "US11",
    images: [
      {
        url: "https://s.yimg.com/os/en/onefootball_articles_802/ffb59a1e4e5923f3f5a1b54f960062a7",
        width: 1200,
        height: 675,
        alt: "Germán Berterame Inter Miami injury",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inter Miami’s Germán Berterame Discharged After Scary Head Collision",
    description: "Berterame discharged after head collision vs Montréal. Injuries to shoulder and nose.",
    images: [
      "https://s.yimg.com/os/en/onefootball_articles_802/ffb59a1e4e5923f3f5a1b54f960062a7",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/berterame-injury-update",
  },
};

export default function BerterameInjuryUpdateLayout({ children }) {
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
            headline: "Inter Miami’s Germán Berterame Discharged After Scary Head Collision",
            image: "https://s.yimg.com/os/en/onefootball_articles_802/ffb59a1e4e5923f3f5a1b54f960062a7",
            datePublished: "2026-07-27T22:00:00Z",
            dateModified: "2026-07-27T23:00:00Z",
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
              "Germán Berterame",
              "Inter Miami",
              "Berterame injury",
              "head collision",
              "CF Montréal",
              "MLS",
              "Guillermo Hoyos",
              "Luis Suárez",
            ],
            articleSection: "MLS",
          }),
        }}
      />
    </div>
  );
}
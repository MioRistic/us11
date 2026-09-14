export const metadata = {
  title:
    "Cavan Sullivan Stays Hot With Two Goals as a USMNT Call Beckons",
  description:
    "Philadelphia Union teenager Cavan Sullivan scored twice in a 5-0 win at San Diego. His first MLS brace arrives as Mauricio Pochettino prepares a USMNT roster.",
  openGraph: {
    title:
      "Cavan Sullivan Stays Hot With Two Goals as a USMNT Call Beckons",
    description:
      "A back-heel, a second goal and an assist in San Diego. Sullivan is 16. Pochettino names a roster this week.",
    url: "https://www.us11fc.com/news/cavan-sullivan-usmnt-call",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2295138136/crop/MM5DGOJYGQ5DEMRUGE5G433XMU5DGNZRHIZDONI=/GettyImages-2295138136.jpg?quality=60&auto=webp&format=pjpg&width=1280",
        width: 1200,
        height: 675,
        alt: "Cavan Sullivan celebrates after scoring for the Philadelphia Union",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cavan Sullivan Scores Twice as USMNT Call Beckons",
    description:
      "The 16-year-old Union attacker posted his first MLS brace in a 5-0 win at San Diego with Pochettino's roster due this week.",
    images: [
      "https://assets.goal.com/images/v3/getty-2295138136/crop/MM5DGOJYGQ5DEMRUGE5G433XMU5DGNZRHIZDONI=/GettyImages-2295138136.jpg?quality=60&auto=webp&format=pjpg&width=1280",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/cavan-sullivan-usmnt-call",
  },
};

export default function CavanSullivanUsmntCallLayout({ children }) {
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
              "Cavan Sullivan Stays Hot With Two Goals as a USMNT Call Beckons",
            image:
              "https://assets.goal.com/images/v3/getty-2295138136/crop/MM5DGOJYGQ5DEMRUGE5G433XMU5DGNZRHIZDONI=/GettyImages-2295138136.jpg?quality=60&auto=webp&format=pjpg&width=1280",
            datePublished: "2026-09-14T18:20:00Z",
            dateModified: "2026-09-14T18:20:00Z",
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
              "Cavan Sullivan",
              "Philadelphia Union",
              "USMNT",
              "Mauricio Pochettino",
              "San Diego FC",
              "MLS",
            ],
            articleSection: "MLS",
            description:
              "Cavan Sullivan scored twice and added an assist in Philadelphia's 5-0 win at San Diego as a first senior USMNT call-up looms.",
          }),
        }}
      />
    </div>
  );
}
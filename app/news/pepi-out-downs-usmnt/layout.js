export const metadata = {
  title: "Pepi Lasted Nine Minutes. Downs Gets the Window.",
  description:
    "Ricardo Pepi withdrew from the USMNT camp after a muscle injury against Twente. Damion Downs replaces him for friendlies against Peru, Chile, Mexico and Canada.",
  openGraph: {
    title: "Pepi Lasted Nine Minutes. Downs Gets the Window.",
    description:
      "PSV’s striker lasted nine minutes in Enschede. St. Louis CITY’s Damion Downs takes his place on Pochettino’s first post-World Cup roster.",
    url: "https://www.us11fc.com/news/pepi-out-downs-usmnt",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2187949160/crop/MM5DINJRGI5DENJTHA5G433XMU5DIMJXHIZDOMI=/GettyImages-2187949160.jpg?auto=webp&format=pjpg&width=2048&quality=60",
        width: 1200,
        height: 675,
        alt: "Ricardo Pepi in action for PSV Eindhoven",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pepi Out, Downs In for USMNT Window",
    description:
      "A muscle injury at Twente removes Ricardo Pepi. Damion Downs joins camp with 35 MLS minutes and six senior caps.",
    images: [
      "https://assets.goal.com/images/v3/getty-2187949160/crop/MM5DINJRGI5DENJTHA5G433XMU5DIMJXHIZDOMI=/GettyImages-2187949160.jpg?auto=webp&format=pjpg&width=2048&quality=60",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/pepi-out-downs-usmnt",
  },
};

export default function PepiOutDownsUsmntLayout({ children }) {
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
            headline: "Pepi Lasted Nine Minutes. Downs Gets the Window.",
            image:
              "https://assets.goal.com/images/v3/getty-2187949160/crop/MM5DINJRGI5DENJTHA5G433XMU5DIMJXHIZDOMI=/GettyImages-2187949160.jpg?auto=webp&format=pjpg&width=2048&quality=60",
            datePublished: "2026-09-22T13:28:00Z",
            dateModified: "2026-09-22T13:28:00Z",
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
              "Ricardo Pepi",
              "Damion Downs",
              "USMNT",
              "Mauricio Pochettino",
              "PSV",
              "St. Louis CITY",
            ],
            articleSection: "USMNT",
            description:
              "Ricardo Pepi is out of the USMNT window with a muscle injury. Damion Downs replaces him for four fall friendlies.",
          }),
        }}
      />
    </div>
  );
}
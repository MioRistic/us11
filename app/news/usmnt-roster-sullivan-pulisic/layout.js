export const metadata = {
  title: "Pochettino Called the Kids. He Left Pulisic Off.",
  description:
    "Cavan Sullivan headlines Mauricio Pochettino’s first post-World Cup USMNT roster. Christian Pulisic and Folarin Balogun were omitted for friendlies against Peru, Chile, Canada and Mexico.",
  openGraph: {
    title: "Pochettino Called the Kids. He Left Pulisic Off.",
    description:
      "Sullivan, 16, is in. Pulisic is out. Thirteen uncapped players join a camp that starts the 2030 cycle.",
    url: "https://www.us11fc.com/news/usmnt-roster-sullivan-pulisic",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/imago-sport-1079257579/crop/MM5DGMBQGA5DCNRYHA5G433XMU5DAORRGU4Q====/imago-image.jpeg?auto=webp&format=pjpg&width=2048&quality=60",
        width: 1200,
        height: 675,
        alt: "Cavan Sullivan and the first USMNT roster of the 2030 cycle",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sullivan In, Pulisic Out: Pochettino’s First Post-World Cup Roster",
    description:
      "The 16-year-old Union attacker headlines a youth-heavy USMNT camp. Pulisic, Balogun, McKennie and Luna were left off.",
    images: [
      "https://assets.goal.com/images/v3/imago-sport-1079257579/crop/MM5DGMBQGA5DCNRYHA5G433XMU5DAORRGU4Q====/imago-image.jpeg?auto=webp&format=pjpg&width=2048&quality=60",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/usmnt-roster-sullivan-pulisic",
  },
};

export default function UsmntRosterSullivanPulisicLayout({ children }) {
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
            headline: "Pochettino Called the Kids. He Left Pulisic Off.",
            image:
              "https://assets.goal.com/images/v3/imago-sport-1079257579/crop/MM5DGMBQGA5DCNRYHA5G433XMU5DAORRGU4Q====/imago-image.jpeg?auto=webp&format=pjpg&width=2048&quality=60",
            datePublished: "2026-09-17T15:28:00Z",
            dateModified: "2026-09-17T15:28:00Z",
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
              "USMNT",
              "Cavan Sullivan",
              "Christian Pulisic",
              "Mauricio Pochettino",
              "Folarin Balogun",
              "Adri Mehmeti",
            ],
            articleSection: "USMNT",
            description:
              "Cavan Sullivan is on Mauricio Pochettino’s first post-World Cup roster. Christian Pulisic and Folarin Balogun are not.",
          }),
        }}
      />
    </div>
  );
}
// app/news/larry-berg-mls-commissioner/layout.js

export const metadata = {
  title: "Larry Berg and the One Opportunity MLS Cannot Afford to Miss",
  description:
    "New MLS commissioner Larry Berg takes over at the most pivotal moment in league history. The roster rules, CBA, and 2027 relaunch will define his tenure.",
  openGraph: {
    title: "Larry Berg and the One Opportunity MLS Cannot Afford to Miss",
    description:
      "Larry Berg becomes the third commissioner in MLS history. The league’s biggest structural decisions now sit on his desk.",
    url: "https://www.us11fc.com/news/larry-berg-mls-commissioner",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/bltc33c70b1ae46424b/crop/MM5DKMBQGU5DEOBRGU5G433XMU5DAORSGYYA====/Garber_Berg_Rosenthal%20at%20Press%20Conference.jpg?auto=webp&format=pjpg&width=2048&quality=60",
        width: 2048,
        height: 1152,
        alt: "Larry Berg MLS Commissioner Press Conference",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Larry Berg and the One Opportunity MLS Cannot Afford to Miss",
    description:
      "New MLS commissioner faces the league’s most important structural window in 2027.",
    images: [
      "https://assets.goal.com/images/v3/bltc33c70b1ae46424b/crop/MM5DKMBQGU5DEOBRGU5G433XMU5DAORSGYYA====/Garber_Berg_Rosenthal%20at%20Press%20Conference.jpg?auto=webp&format=pjpg&width=2048&quality=60",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/larry-berg-mls-commissioner",
  },
};

export default function LarryBergMLSCommissionerLayout({ children }) {
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
            headline: "Larry Berg and the One Opportunity MLS Cannot Afford to Miss",
            image:
              "https://assets.goal.com/images/v3/bltc33c70b1ae46424b/crop/MM5DKMBQGU5DEOBRGU5G433XMU5DAORSGYYA====/Garber_Berg_Rosenthal%20at%20Press%20Conference.jpg?auto=webp&format=pjpg&width=2048&quality=60",
            datePublished: "2026-08-06T10:00:00Z",
            dateModified: "2026-08-06T12:00:00Z",
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
              "Larry Berg",
              "MLS Commissioner",
              "Don Garber",
              "MLS 2027",
              "Roster Rules",
              "CBA",
              "Major League Soccer",
              "LAFC",
            ],
            articleSection: "MLS",
            description:
              "New MLS commissioner Larry Berg takes over at the most pivotal moment in league history. The roster rules, CBA, and 2027 relaunch will define his tenure.",
          }),
        }}
      />
    </div>
  );
}
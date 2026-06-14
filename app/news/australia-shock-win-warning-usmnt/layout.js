// app/news/australia-shock-win-warning-usmnt/layout.js

export const metadata = {
  title: "Australia’s Shock Win Sends a Clear Warning to the USMNT",
  description:
    "Australia’s 2-0 win over Turkey has changed the dynamics of Group D. A tactical analysis of what the result means for the USMNT ahead of their crucial clash on June 19.",

  openGraph: {
    title: "Australia’s Shock Win Sends a Clear Warning to the USMNT",
    description:
      "Australia’s surprise victory over Turkey has made Group D much more complicated. What the USMNT must learn before facing the Socceroos.",
    url: "https://www.us11fc.com/news/australia-shock-win-warning-usmnt",
    siteName: "US11",
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITnpzO9KfF_PkVXTCN0YiJJwGUpuLPV2mV7yMWvSBWSEWgHKz3d-n6sM&s=10",
        width: 1200,
        height: 675,
        alt: "Australia vs Turkey 2026 World Cup",
      },
    ],
    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Australia’s Shock Win Sends a Clear Warning to the USMNT",
    description:
      "Australia’s 2-0 win over Turkey has changed Group D. Tactical analysis and what it means for the USMNT.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITnpzO9KfF_PkVXTCN0YiJJwGUpuLPV2mV7yMWvSBWSEWgHKz3d-n6sM&s=10",
    ],
    creator: "@mioristic",
  },

  alternates: {
    canonical: "https://www.us11fc.com/news/australia-shock-win-warning-usmnt",
  },
};

export default function AustraliaWarningUSMNTLayout({ children }) {
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
            "headline": "Australia’s Shock Win Sends a Clear Warning to the USMNT",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITnpzO9KfF_PkVXTCN0YiJJwGUpuLPV2mV7yMWvSBWSEWgHKz3d-n6sM&s=10",
            "datePublished": "2026-06-14T08:00:00Z",
            "dateModified": "2026-06-14T12:00:00Z",
            "author": {
              "@type": "Person",
              "name": "Mio Ristić"
            },
            "publisher": {
              "@type": "Organization",
              "name": "US11",
              "logo": {
                "@type": "ImageObject",
                "url": "https://us11fc.com/logo.png"
              }
            },
            "keywords": [
              "USMNT", "Australia", "2026 World Cup", "Group D",
              "Australia vs Turkey", "USMNT vs Australia", "Tony Popovic",
              "Nestory Irankunda", "World Cup 2026"
            ],
            "articleSection": "USMNT"
          })
        }}
      />
    </div>
  );
}
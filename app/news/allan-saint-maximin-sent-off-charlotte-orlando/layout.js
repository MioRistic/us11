
// layout.js

const articleTitle =
  "Allan Saint-Maximin Sent Off After VAR Review in Charlotte FC’s 4-0 Win";

const articleDescription =
  "Allan Saint-Maximin scored before being sent off following a VAR review as Charlotte FC defeated Orlando City 4-0 in MLS.";

const articleImage =
  "https://assets.goal.com/images/v3/getty-2299592124/crop/MM5DINBRGE5DENBYGE5G433XMU5DAORSGMYA====/GettyImages-2299592124.jpg?auto=webp&format=pjpg&width=2048&quality=60";

const articleUrl =
  "https://www.us11fc.com/news/allan-saint-maximin-sent-off-charlotte-orlando";

export const metadata = {
  title: articleTitle,

  description: articleDescription,

  alternates: {
    canonical: articleUrl,
  },

  openGraph: {
    title: articleTitle,

    description:
      "Saint-Maximin scored against Orlando City before a controversial gesture resulted in a late red card in Charlotte FC’s 4-0 victory.",

    url: articleUrl,

    siteName: "US11",

    images: [
      {
        url: articleImage,
        width: 2048,
        height: 1152,
        alt: "Allan Saint-Maximin during Charlotte FC's match against Orlando City",
      },
    ],

    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title: articleTitle,

    description:
      "Allan Saint-Maximin scored before seeing red following a VAR review in Charlotte FC’s 4-0 win over Orlando City.",

    images: [articleImage],
  },
};

export default function Layout({ children }) {
  return (
    <div>
      <main>{children}</main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",

            headline: articleTitle,

            image: [articleImage],

            datePublished: "2026-11-01T13:00:00Z",
            dateModified: "2026-11-01T13:00:00Z",

            author: {
              "@type": "Person",
              name: "Mio Ristić",
            },

            publisher: {
              "@type": "Organization",
              name: "US11",
              logo: {
                "@type": "ImageObject",
                url: "https://www.us11fc.com/logo.png",
              },
            },

            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": articleUrl,
            },

            keywords: [
              "Allan Saint-Maximin",
              "Charlotte FC",
              "Orlando City SC",
              "MLS",
              "Major League Soccer",
              "Saint-Maximin red card",
              "VAR red card",
              "Wilder Cartagena",
              "Newcastle United",
              "Al-Ahli",
            ],

            articleSection: "MLS",

            description: articleDescription,

            inLanguage: "en-US",
          }),
        }}
      />
    </div>
  );
}

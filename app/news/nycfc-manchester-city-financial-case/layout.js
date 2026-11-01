// layout.js

const articleTitle =
  "Is New York City FC at Risk From Manchester City’s Financial Case?";

const articleDescription =
  "Manchester City’s financial case has raised questions about City Football Group. Here is what MLS has said about New York City FC and the potential implications of the case.";

const articleImage =
  "https://i.ibb.co/VY2ZwGRb/1793544865808.jpg";

const articleUrl =
  "https://www.us11fc.com/news/nycfc-manchester-city-financial-case";

export const metadata = {
  title: articleTitle,

  description: articleDescription,

  openGraph: {
    title: articleTitle,

    description:
      "MLS has drawn a distinction between Manchester City’s financial case in England and New York City FC’s position in the United States.",

    url: articleUrl,

    siteName: "US11",

    images: [
      {
        url: articleImage,
        width: 700,
        height: 700,
        alt: "New York City FC club crest",
      },
    ],

    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary",
    title: articleTitle,

    description:
      "Is NYCFC at risk from Manchester City’s financial case? MLS has drawn a line between the English proceedings and the American club.",

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
              "New York City FC",
              "NYCFC",
              "Manchester City",
              "City Football Group",
              "MLS",
              "Don Garber",
              "Premier League financial case",
              "MLS financial rules",
              "Etihad Park",
            ],

            articleSection: "MLS",

            description: articleDescription,
          }),
        }}
      />
    </div>
  );
}
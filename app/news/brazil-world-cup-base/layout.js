// app/news/brazil-world-cup-base/layout.js

export const metadata = {
  title:
    "Brazil Finds Its World Cup Home in New Jersey: Why the Seleção Chose Red Bull’s $100 Million Facility",

  description:
    "Brazil will base its 2026 FIFA World Cup campaign at the new RWJBarnabas Health Red Bulls Performance Center in New Jersey — a state-of-the-art $100M facility built for elite preparation.",

  openGraph: {
    title:
      "Brazil Finds Its World Cup Home in New Jersey",

    description:
      "The Seleção officially chose Red Bull’s new $100 million training complex in New Jersey as its headquarters for the 2026 FIFA World Cup.",

    url: "https://www.us11fc.com/news/brazil-world-cup-base",

    siteName: "US11",

    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2246918650/crop/MM5DIOJTHE5DENZXHA5G433XMU5DAORTGAYQ====/GettyImages-2246918650.jpg?auto=webp&format=pjpg&width=1920&quality=60",
        width: 1920,
        height: 1080,
        alt: "Brazil World Cup base at Red Bulls Performance Center",
      },
    ],

    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Brazil Chooses Red Bull’s $100M Facility for 2026 World Cup",

    description:
      "Inside the state-of-the-art New Jersey complex that will serve as Brazil’s World Cup headquarters.",

    images: [
      "https://assets.goal.com/images/v3/getty-2246918650/crop/MM5DIOJTHE5DENZXHA5G433XMU5DAORTGAYQ====/GettyImages-2246918650.jpg?auto=webp&format=pjpg&width=1920&quality=60",
    ],

    creator: "@US11FC",
  },
};

export default function BrazilWorldCupBaseLayout({ children }) {
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
              "Brazil Finds Its World Cup Home in New Jersey: Why the Seleção Chose Red Bull’s $100 Million Facility",

            image:
              "https://assets.goal.com/images/v3/getty-2246918650/crop/MM5DIOJTHE5DENZXHA5G433XMU5DAORTGAYQ====/GettyImages-2246918650.jpg?auto=webp&format=pjpg&width=1920&quality=60",

            datePublished: "2026-05-22T12:00:00Z",

            dateModified: "2026-05-22T12:00:00Z",

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

            description:
              "Brazil officially selected the RWJBarnabas Health Red Bulls Performance Center in New Jersey as its home base for the 2026 FIFA World Cup.",
          }),
        }}
      />
    </div>
  );
}
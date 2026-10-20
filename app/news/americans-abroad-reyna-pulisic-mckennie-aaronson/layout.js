export const metadata = {
  title: "Reyna Scored Against PSG. Pulisic Is Finding His Feet. McKennie Started in a Collapse. Aaronson Watched From the Bench.",
  description:
    "Gio Reyna scored against a rotated PSG. Christian Pulisic started for Milan. Weston McKennie played the full match in a 3-0 loss. Brenden Aaronson stayed on the bench.",
  openGraph: {
    title: "Reyna Scored Against PSG. Pulisic Is Finding His Feet. McKennie Started in a Collapse. Aaronson Watched From the Bench.",
    description:
      "Four USMNT players, four different weekends. Minutes, a goal, a collapse, and a place on the bench.",
    url: "https://www.us11fc.com/news/americans-abroad-reyna-pulisic-mckennie-aaronson",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2300107618/crop/MM5DENZWGM5DCNJVGQ5G433XMU5DAORRGQ2A====/GettyImages-2300107618.jpg?quality=60&auto=webp&format=pjpg&width=1920",
        width: 1200,
        height: 675,
        alt: "Gio Reyna scores for Strasbourg against PSG",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reyna Scored. Pulisic Started. McKennie Lost. Aaronson Sat.",
    description:
      "Four different weekends for four USMNT players in Europe.",
    images: [
      "https://assets.goal.com/images/v3/getty-2300107618/crop/MM5DENZWGM5DCNJVGQ5G433XMU5DAORRGQ2A====/GettyImages-2300107618.jpg?quality=60&auto=webp&format=pjpg&width=1920",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/americans-abroad-reyna-pulisic-mckennie-aaronson",
  },
};

export default function AmericansAbroadLayout({ children }) {
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
              "Reyna Scored Against PSG. Pulisic Is Finding His Feet. McKennie Started in a Collapse. Aaronson Watched From the Bench.",
            image:
              "https://assets.goal.com/images/v3/getty-2300107618/crop/MM5DENZWGM5DCNJVGQ5G433XMU5DAORRGQ2A====/GettyImages-2300107618.jpg?quality=60&auto=webp&format=pjpg&width=1920",
            datePublished: "2026-10-20T13:36:00Z",
            dateModified: "2026-10-20T13:36:00Z",
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
              "Gio Reyna",
              "Christian Pulisic",
              "Weston McKennie",
              "Brenden Aaronson",
              "USMNT",
              "Americans Abroad",
            ],
            articleSection: "USMNT",
            description:
              "Gio Reyna scored against PSG. Christian Pulisic started for Milan. Weston McKennie played in a Juventus loss. Brenden Aaronson was unused.",
          }),
        }}
      />
    </div>
  );
}
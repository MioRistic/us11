// layout.js
export const metadata = {
  title:
    "Messi Didn’t Score or Assist. Inter Miami Still Escaped With a Late Draw Against Cincinnati.",
  description:
    "Lionel Messi played nearly the full match without a goal or assist as Inter Miami needed a 90th-minute equaliser from Riquelme Fillipi to draw 2-2 with FC Cincinnati.",
  openGraph: {
    title:
      "Messi Didn’t Score or Assist. Inter Miami Still Escaped With a Late Draw Against Cincinnati.",
    description:
      "Suárez scored, Cincinnati turned the game around late, and Fillipi rescued a point. Messi finished the night without a goal contribution.",
    url: "https://www.us11fc.com/news/messi-inter-miami-cincinnati-draw",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2302465844/crop/MM5DGNRRGY5DEMBTGQ5G433XMU5DAORRHA4Q====/GettyImages-2302465844.jpg?auto=webp&format=pjpg&width=2048&quality=60",
        width: 1200,
        height: 675,
        alt: "Lionel Messi Inter Miami vs FC Cincinnati",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Messi Didn’t Score or Assist. Inter Miami Still Escaped With a Late Draw Against Cincinnati.",
    description:
      "Messi played nearly the full match without a goal or assist. Fillipi’s 90th-minute goal rescued a 2-2 draw for Inter Miami.",
    images: [
      "https://assets.goal.com/images/v3/getty-2302465844/crop/MM5DGNRRGY5DEMBTGQ5G433XMU5DAORRHA4Q====/GettyImages-2302465844.jpg?auto=webp&format=pjpg&width=2048&quality=60",
    ],
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
            headline:
              "Messi Didn’t Score or Assist. Inter Miami Still Escaped With a Late Draw Against Cincinnati.",
            image:
              "https://assets.goal.com/images/v3/getty-2302465844/crop/MM5DGNRRGY5DEMBTGQ5G433XMU5DAORRHA4Q====/GettyImages-2302465844.jpg?auto=webp&format=pjpg&width=2048&quality=60",
            datePublished: "2026-10-29T18:00:00Z",
            dateModified: "2026-10-29T18:00:00Z",
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
              "Lionel Messi",
              "Inter Miami",
              "FC Cincinnati",
              "MLS",
              "Riquelme Fillipi",
              "Luis Suárez",
              "MLS playoffs",
            ],
            articleSection: "MLS",
            description:
              "Lionel Messi played nearly the full match without a goal or assist as Inter Miami needed a late equaliser to draw 2-2 with FC Cincinnati.",
          }),
        }}
      />
    </div>
  );
}
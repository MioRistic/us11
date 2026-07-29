// app/news/sebastian-berhalter-middlesbrough/layout.js

export const metadata = {
  title: "Sebastian Berhalter Leaves Vancouver for Middlesbrough, Reuniting With Aidan Morris",
  description:
    "USMNT midfielder Sebastian Berhalter has completed a transfer from Vancouver Whitecaps to Middlesbrough for a reported $2 million fee. Full details on the move and reunion with Aidan Morris.",
  openGraph: {
    title: "Sebastian Berhalter Leaves Vancouver for Middlesbrough",
    description:
      "The USMNT midfielder joins Championship side Middlesbrough on a four-year deal, reuniting with childhood friend Aidan Morris.",
    url: "https://www.us11fc.com/news/sebastian-berhalter-middlesbrough",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2221149180/crop/MM5DGOBTHE5DEMJVHE5G433XMU5DAORSGAYA====/GettyImages-2221149180.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        width: 1200,
        height: 675,
        alt: "Sebastian Berhalter Vancouver Whitecaps Middlesbrough",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sebastian Berhalter Joins Middlesbrough from Vancouver Whitecaps",
    description: "USMNT midfielder completes move to the Championship and reunites with Aidan Morris.",
    images: [
      "https://assets.goal.com/images/v3/getty-2221149180/crop/MM5DGOBTHE5DEMJVHE5G433XMU5DAORSGAYA====/GettyImages-2221149180.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/sebastian-berhalter-middlesbrough",
  },
};

export default function SebastianBerhalterMiddlesbroughLayout({ children }) {
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
              "Sebastian Berhalter Leaves Vancouver for Middlesbrough, Reuniting With Aidan Morris in the Championship",
            image:
              "https://assets.goal.com/images/v3/getty-2221149180/crop/MM5DGOBTHE5DEMJVHE5G433XMU5DAORSGAYA====/GettyImages-2221149180.jpg?auto=webp&format=pjpg&width=3840&quality=60",
            datePublished: "2026-07-29T20:00:00Z",
            dateModified: "2026-07-29T21:00:00Z",
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
              "Sebastian Berhalter",
              "Middlesbrough",
              "Vancouver Whitecaps",
              "USMNT",
              "Aidan Morris",
              "MLS Transfer",
              "Championship",
              "Berhalter transfer",
            ],
            articleSection: "MLS",
          }),
        }}
      />
    </div>
  );
}
export const metadata = {
  title:
    "Chicago Fire Sign Noah Allen on Loan From Inter Miami as Europe Wait Continues",
  description:
    "Chicago Fire have signed Inter Miami defender Noah Allen on loan with a permanent option. The 22-year-old homegrown had been tracked by European clubs before the MLS move.",
  openGraph: {
    title:
      "Chicago Fire Sign Noah Allen on Loan From Inter Miami as Europe Wait Continues",
    description:
      "Inter Miami loan academy product Noah Allen to Chicago Fire through 2026, with a path to a permanent deal after European interest stalled.",
    url: "https://www.us11fc.com/news/noah-allen-chicago-fire",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2231738550/crop/MM5DGNZVG45DEMJRGM5G433XMU5DAORRHE3A====/GettyImages-2231738550.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        width: 1200,
        height: 675,
        alt: "Noah Allen Inter Miami defender joins Chicago Fire on loan",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chicago Fire Sign Noah Allen on Loan From Inter Miami",
    description:
      "Miami homegrown defender Noah Allen joins Chicago Fire on loan with a permanent option after European clubs monitored him.",
    images: [
      "https://assets.goal.com/images/v3/getty-2231738550/crop/MM5DGNZVG45DEMJRGM5G433XMU5DAORRHE3A====/GettyImages-2231738550.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/noah-allen-chicago-fire",
  },
};

export default function NoahAllenChicagoFireLayout({ children }) {
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
              "Chicago Fire Sign Noah Allen on Loan From Inter Miami as Europe Wait Continues",
            image:
              "https://assets.goal.com/images/v3/getty-2231738550/crop/MM5DGNZVG45DEMJRGM5G433XMU5DAORRHE3A====/GettyImages-2231738550.jpg?auto=webp&format=pjpg&width=3840&quality=60",
            datePublished: "2026-09-04T00:45:00Z",
            dateModified: "2026-09-04T00:45:00Z",
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
              "Noah Allen",
              "Chicago Fire",
              "Inter Miami",
              "MLS transfer",
              "U-22 Initiative",
              "Gregg Berhalter",
              "Kily González",
            ],
            articleSection: "MLS",
            description:
              "Chicago Fire sign Inter Miami defender Noah Allen on loan with a permanent option after European interest failed to produce a deal.",
          }),
        }}
      />
    </div>
  );
}
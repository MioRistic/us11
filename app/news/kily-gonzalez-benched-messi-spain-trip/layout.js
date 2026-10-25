export const metadata = {
  title:
    "Kily Gonzalez Benched Messi After a Trip to Spain. Miami Lost 2-0. This Is Why It Happened.",
  description:
    "Inter Miami coach Kily Gonzalez started Lionel Messi on the bench against New York Red Bulls after his trip to Spain for the Princess of Asturias Award. Miami lost 2-0.",
  openGraph: {
    title:
      "Kily Gonzalez Benched Messi After a Trip to Spain. Miami Lost 2-0. This Is Why It Happened.",
    description:
      "Gonzalez explained the decision was planned to protect Messi after a hectic travel schedule. The 13-game goal contribution streak ended in a 2-0 loss.",
    url: "https://www.us11fc.com/news/kily-gonzalez-benched-messi-spain-trip",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2301840320/crop/MM5DEOBUHA5DCNRQGI5G433XMU5DCNJUHE5DCMRR/GettyImages-2301840320.jpg?quality=60&auto=webp&format=pjpg&width=2160",
        width: 1200,
        height: 675,
        alt: "Lionel Messi Inter Miami Kily Gonzalez",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kily Gonzalez Benched Messi After Spain Trip. Miami Lost 2-0",
    description:
      "The decision was planned. Messi came off the bench but couldn't prevent the loss or the end of his streak.",
    images: [
      "https://assets.goal.com/images/v3/getty-2301840320/crop/MM5DEOBUHA5DCNRQGI5G433XMU5DCNJUHE5DCMRR/GettyImages-2301840320.jpg?quality=60&auto=webp&format=pjpg&width=2160",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical:
      "https://www.us11fc.com/news/kily-gonzalez-benched-messi-spain-trip",
  },
};

export default function MessiBenchedLayout({ children }) {
  return (
    <div className="bg-white min-h-screen">
      <main className="max-w-4xl mx-auto px-4 md:px-0 py-10">{children}</main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline:
              "Kily Gonzalez Benched Messi After a Trip to Spain. Miami Lost 2-0. This Is Why It Happened.",
            image:
              "https://assets.goal.com/images/v3/getty-2301840320/crop/MM5DEOBUHA5DCNRQGI5G433XMU5DCNJUHE5DCMRR/GettyImages-2301840320.jpg?quality=60&auto=webp&format=pjpg&width=2160",
            datePublished: "2026-10-25T07:31:00Z",
            dateModified: "2026-10-25T07:31:00Z",
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
              "Kily Gonzalez",
              "Inter Miami",
              "New York Red Bulls",
              "MLS",
              "Princess of Asturias",
            ],
            articleSection: "MLS",
            description:
              "Kily Gonzalez started Messi on the bench after his Spain trip. Inter Miami lost 2-0 to New York Red Bulls and Messi's streak ended.",
          }),
        }}
      />
    </div>
  );
}
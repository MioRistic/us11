export const metadata = {
  title:
    "Donovan: Inter Miami Look for a Fight Every Time They Don’t Win",
  description:
    "Landon Donovan says Inter Miami yell at referees, complain at opponents and look for a fight every time they tie or lose. Tim Howard has spent two years telling MLS it needs a villain.",
  openGraph: {
    title:
      "Donovan: Inter Miami Look for a Fight Every Time They Don’t Win",
    description:
      "On Unfiltered Soccer, Donovan called out Miami’s post-whistle habit. Shake hands, he said. Walk off. It does not have to be like this every week.",
    url: "https://www.us11fc.com/news/donovan-inter-miami-attitude",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2294428481/crop/MM5DEMRXGI5DCMRXHA5G433XMU5DQNRRHIYTSOA=/GettyImages-2294428481.jpg?auto=webp&format=pjpg&width=2048&quality=60",
        width: 1200,
        height: 675,
        alt: "Inter Miami players argue with officials during an MLS match",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Donovan: Inter Miami Look for a Fight When They Don’t Win",
    description:
      "Landon Donovan is done with Miami’s losing act. Tim Howard still wants the league to have a villain.",
    images: [
      "https://assets.goal.com/images/v3/getty-2294428481/crop/MM5DEMRXGI5DCMRXHA5G433XMU5DQNRRHIYTSOA=/GettyImages-2294428481.jpg?auto=webp&format=pjpg&width=2048&quality=60",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/donovan-inter-miami-attitude",
  },
};

export default function DonovanInterMiamiAttitudeLayout({ children }) {
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
              "Donovan: Inter Miami Look for a Fight Every Time They Don’t Win",
            image:
              "https://assets.goal.com/images/v3/getty-2294428481/crop/MM5DEMRXGI5DCMRXHA5G433XMU5DQNRRHIYTSOA=/GettyImages-2294428481.jpg?auto=webp&format=pjpg&width=2048&quality=60",
            datePublished: "2026-09-16T13:20:00Z",
            dateModified: "2026-09-16T13:20:00Z",
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
              "Landon Donovan",
              "Tim Howard",
              "Inter Miami",
              "Unfiltered Soccer",
              "Lionel Messi",
              "MLS",
            ],
            articleSection: "MLS",
            description:
              "Landon Donovan says Inter Miami look for a fight every time they tie or lose, while Tim Howard has argued MLS needs a villain.",
          }),
        }}
      />
    </div>
  );
}
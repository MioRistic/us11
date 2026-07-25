export const metadata = {
  title: "Antoine Griezmann Announces Himself Immediately: Historic Debut Goal Powers Orlando City to 4-0 Thrashing",
  description: "Antoine Griezmann scored on his MLS debut as Orlando City demolished San Jose Earthquakes 4-0. The goal was the 300th club goal of his career.",
  openGraph: {
    title: "Antoine Griezmann Scores on MLS Debut | Orlando City 4-0 San Jose",
    description: "The French superstar needed just 48 minutes to score his first goal for Orlando City and reach 300 career club goals.",
    url: "https://www.us11fc.com/news/griezmann-debut-goal",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2287264302/crop/MM5DENRRGY5DCNBXGI5G433XMU5DEOBTHIYTENI=/GettyImages-2287264302.jpg?auto=webp&format=pjpg&width=1920&quality=60",
        width: 1920,
        height: 1080,
        alt: "Antoine Griezmann Orlando City debut",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Griezmann Scores on MLS Debut!",
    description: "Antoine Griezmann scores the 300th club goal of his career on his Orlando City debut.",
    images: [
      "https://assets.goal.com/images/v3/getty-2287264302/crop/MM5DENRRGY5DCNBXGI5G433XMU5DEOBTHIYTENI=/GettyImages-2287264302.jpg?auto=webp&format=pjpg&width=1920&quality=60"
    ],
    creator: "@us11",
  },
};

export default function GriezmannDebutGoalLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-[#020617]">
      <main className="max-w-5xl mx-auto px-4 md:px-6 py-10">
        {children}
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": "Antoine Griezmann Announces Himself Immediately: Historic Debut Goal Powers Orlando City to 4-0 Thrashing",
            "image": "https://assets.goal.com/images/v3/getty-2287264302/crop/MM5DENRRGY5DCNBXGI5G433XMU5DEOBTHIYTENI=/GettyImages-2287264302.jpg?auto=webp&format=pjpg&width=1920&quality=60",
            "datePublished": "2026-07-25T11:00:00Z",
            "dateModified": "2026-07-25T11:00:00Z",
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
            "description": "Antoine Griezmann scored on his MLS debut as Orlando City demolished San Jose Earthquakes 4-0.",
            "keywords": ["Antoine Griezmann", "Orlando City", "MLS", "Debut", "San Jose Earthquakes"]
          })
        }}
      />
    </div>
  );
}
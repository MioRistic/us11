export const metadata = {
  title: "Ojeda’s Backheel Is a Goal of the Year Case. It Is Not the Award.",
  description:
    "Martín Ojeda scored a backheel volley off Antoine Griezmann in Orlando’s 4-1 win over D.C. United. MLS called it potentially Goal of the Year. The award comes later.",
  openGraph: {
    title: "Ojeda’s Backheel Is a Goal of the Year Case. It Is Not the Award.",
    description:
      "22nd minute, Griezmann assist, scorpion finish. A candidate, not a nomination.",
    url: "https://www.us11fc.com/news/ojeda-backheel-goal-of-the-year",
    siteName: "US11",
    images: [
      {
        url: "https://i.ibb.co/hRTtz0wp/01ke6zvb0dqtawf59r90.webp",
        width: 1200,
        height: 675,
        alt: "Martín Ojeda scores a backheel for Orlando City",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ojeda’s Backheel Is a Case. Not the Award.",
    description:
      "MLS said potentially. The Goal of the Year is still open.",
    images: [
      "https://i.ibb.co/hRTtz0wp/01ke6zvb0dqtawf59r90.webp",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/ojeda-backheel-goal-of-the-year",
  },
};

export default function OjedaBackheelLayout({ children }) {
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
              "Ojeda’s Backheel Is a Goal of the Year Case. It Is Not the Award.",
            image: "https://i.ibb.co/hRTtz0wp/01ke6zvb0dqtawf59r90.webp",
            datePublished: "2026-10-18T11:13:00Z",
            dateModified: "2026-10-18T11:13:00Z",
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
              "Martín Ojeda",
              "Antoine Griezmann",
              "Orlando City",
              "MLS Goal of the Year",
              "D.C. United",
            ],
            articleSection: "MLS",
            description:
              "Martín Ojeda scored a backheel volley for Orlando City. MLS called it potentially Goal of the Year. The award has not been decided.",
          }),
        }}
      />
    </div>
  );
}

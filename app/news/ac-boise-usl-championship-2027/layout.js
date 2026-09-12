export const metadata = {
  title:
    "AC Boise Jumps to USL Championship in 2027 After One League One Season",
  description:
    "Athletic Club Boise will move from USL League One to the USL Championship in 2027 and add 3,000 seats after a sold-out inaugural season in Idaho.",
  openGraph: {
    title:
      "AC Boise Jumps to USL Championship in 2027 After One League One Season",
    description:
      "Boise leaves USL League One after one season for the Championship in 2027. Stadium adding 3,000 east-side seats after sellout crowds at Expo Idaho.",
    url: "https://www.us11fc.com/news/ac-boise-usl-championship-2027",
    siteName: "US11",
    images: [
      {
        url: "https://cdn1.sportngin.com/attachments/photo/6128-211830812/Crest-Reveal-Video-Thumbnail_large.png",
        width: 1200,
        height: 675,
        alt: "Athletic Club Boise crest ahead of 2027 USL Championship move",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "AC Boise Joins USL Championship in 2027",
    description:
      "After one sold-out League One season, Athletic Club Boise moves to the USL Championship and expands its Expo Idaho stadium by 3,000 seats.",
    images: [
      "https://cdn1.sportngin.com/attachments/photo/6128-211830812/Crest-Reveal-Video-Thumbnail_large.png",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/ac-boise-usl-championship-2027",
  },
};

export default function AcBoiseUslChampionshipLayout({ children }) {
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
              "AC Boise Jumps to USL Championship in 2027 After One League One Season",
            image:
              "https://cdn1.sportngin.com/attachments/photo/6128-211830812/Crest-Reveal-Video-Thumbnail_large.png",
            datePublished: "2026-09-09T23:00:00Z",
            dateModified: "2026-09-12T15:55:00Z",
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
              "AC Boise",
              "Athletic Club Boise",
              "USL Championship",
              "USL League One",
              "Boise soccer",
              "USL promotion",
              "Expo Idaho stadium",
              "Brad Stith",
            ],
            articleSection: "USL",
            description:
              "Athletic Club Boise will join the USL Championship in 2027 after one League One season and add 3,000 seats at Athletic Club Boise Stadium.",
          }),
        }}
      />
    </div>
  );
}
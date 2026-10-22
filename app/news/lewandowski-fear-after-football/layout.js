export const metadata = {
  title: "Lewandowski Has Fear of Life After Football. He Also Thinks Olise Should Be in the Ballon d’Or Conversation.",
  description:
    "Robert Lewandowski says he has fear of life after football. He is backing Lamine Yamal for the Ballon d’Or and rates Michael Olise as a game-changer.",
  openGraph: {
    title: "Lewandowski Has Fear of Life After Football. He Also Thinks Olise Should Be in the Ballon d’Or Conversation.",
    description:
      "The Chicago Fire striker admits he has questions about what comes next. He also praised Yamal and Olise ahead of the Ballon d’Or.",
    url: "https://www.us11fc.com/news/lewandowski-fear-after-football",
    siteName: "US11",
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKikJ--39TDT1sM0AWUeA0grnRGIrjoWTuDl-wuz5MXkbmHJ1dxSRnamxI&s=10",
        width: 1200,
        height: 675,
        alt: "Robert Lewandowski in Chicago",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lewandowski Has Fear of Life After Football",
    description:
      "He is backing Yamal and rates Olise. He also admits he does not know what comes next.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKikJ--39TDT1sM0AWUeA0grnRGIrjoWTuDl-wuz5MXkbmHJ1dxSRnamxI&s=10",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/lewandowski-fear-after-football",
  },
};

export default function LewandowskiFearLayout({ children }) {
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
              "Lewandowski Has Fear of Life After Football. He Also Thinks Olise Should Be in the Ballon d’Or Conversation.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKikJ--39TDT1sM0AWUeA0grnRGIrjoWTuDl-wuz5MXkbmHJ1dxSRnamxI&s=10",
            datePublished: "2026-10-22T16:01:00Z",
            dateModified: "2026-10-22T16:01:00Z",
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
              "Robert Lewandowski",
              "Chicago Fire",
              "Ballon d'Or",
              "Lamine Yamal",
              "Michael Olise",
              "MLS",
            ],
            articleSection: "MLS",
            description:
              "Robert Lewandowski admits he has fear of life after football. He is backing Lamine Yamal and rates Michael Olise highly for the Ballon d’Or.",
          }),
        }}
      />
    </div>
  );
}
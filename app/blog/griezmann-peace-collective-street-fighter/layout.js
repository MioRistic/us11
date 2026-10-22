export const metadata = {
  title: "Orlando City Just Dropped a Peace Collective x Street Fighter Collection With Griezmann. Here’s What’s Worth Buying.",
  description:
    "Peace Collective released an Orlando City SC x Street Fighter collection featuring Antoine Griezmann. Tees, hoodies, jackets and more — here’s what’s worth buying.",
  openGraph: {
    title: "Orlando City Just Dropped a Peace Collective x Street Fighter Collection With Griezmann. Here’s What’s Worth Buying.",
    description:
      "Limited Peace Collective drop with Griezmann graphics and Street Fighter mash-ups. Available at MLS Store and Peace Collective.",
    url: "https://www.us11fc.com/blog/griezmann-peace-collective-street-fighter",
    siteName: "US11",
    images: [
      {
        url: "https://www.mlsstore.com/content/ws/all/71cebf47-8fc9-46ab-b6e7-971b9dc298f2__480X639.jpg?w=480",
        width: 1200,
        height: 675,
        alt: "Orlando City SC Antoine Griezmann Peace Collective Street Fighter collection",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Griezmann x Peace Collective x Street Fighter Drop",
    description:
      "Orlando City’s limited Peace Collective collection is live. Here’s what’s worth buying.",
    images: [
      "https://www.mlsstore.com/content/ws/all/71cebf47-8fc9-46ab-b6e7-971b9dc298f2__480X639.jpg?w=480",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/blog/griezmann-peace-collective-street-fighter",
  },
};

export default function GriezmannPeaceCollectiveLayout({ children }) {
  return (
    <div className="bg-white min-h-screen">
      {/* Full-width affiliate banner — edge to edge */}
      <div className="w-full bg-zinc-100 border-b border-zinc-200 py-2.5 text-center text-[10px] text-zinc-600">
        This page contains affiliate links. When you purchase through the links provided,{' '}
        <span className="text-zinc-700 font-medium">US11 may earn a commission</span> at no extra cost to you.
      </div>

      <main className="max-w-4xl mx-auto px-4 md:px-0 py-10">
        {children}
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline:
              "Orlando City Just Dropped a Peace Collective x Street Fighter Collection With Griezmann. Here’s What’s Worth Buying.",
            image:
              "https://www.mlsstore.com/content/ws/all/71cebf47-8fc9-46ab-b6e7-971b9dc298f2__480X639.jpg?w=480",
            datePublished: "2026-10-22T17:38:00Z",
            dateModified: "2026-10-22T17:38:00Z",
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
              "Antoine Griezmann",
              "Orlando City SC",
              "Peace Collective",
              "Street Fighter",
              "MLS merchandise",
            ],
            articleSection: "Blog",
            description:
              "Peace Collective’s Orlando City SC x Street Fighter collection with Antoine Griezmann is live. Tees, hoodies and jackets worth checking.",
          }),
        }}
      />
    </div>
  );
}
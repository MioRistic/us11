export const metadata = {
  title: "Why the New York Cosmos, Once America’s Soccer Giants, Remain Outside MLS",
  description: "A deep dive into the history of the New York Cosmos, their golden era, financial missteps, and why this iconic American soccer brand remains outside MLS as of 2026.",
  openGraph: {
    title: "Why the New York Cosmos, Once America’s Soccer Giants, Remain Outside MLS",
    description: "A deep dive into the history of the New York Cosmos, their golden era, financial missteps, and why this iconic American soccer brand remains outside MLS as of 2026.",
    url: "https://www.us11fc.com/blog/new-york-cosmos-mls-2026",
    siteName: "US11",
    images: [
      {
        url: "https://nypost.com/wp-content/uploads/sites/2/2022/12/GettyImages-488780302-1.jpg?resize=1200,810&quality=75&strip=all",
        width: 1200,
        height: 800,
        alt: "New York Cosmos history and USL League One return",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why the New York Cosmos, Once America’s Soccer Giants, Remain Outside MLS",
    description: "A deep dive into the history of the New York Cosmos, their golden era, financial missteps, and why this iconic American soccer brand remains outside MLS as of 2026.",
    images: [
      "https://nypost.com/wp-content/uploads/sites/2/2022/12/GettyImages-488780302-1.jpg?resize=1200,810&quality=75&strip=all",
    ],
    creator: "@mioristic",
  },
};

export default function CosmosLayout({ children }) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-5xl mx-auto px-4 md:px-0 py-10">
        {children}
      </main>
    </div>
  );
}
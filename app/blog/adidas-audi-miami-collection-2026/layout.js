// app/news/adidas-audi-miami-collection-2026/layout.js

export const metadata = {
  title: "2000s Football Nostalgia Meets Formula 1 Glamour: Adidas and Audi Drop a Miami Collection That Actually Works",
  description: "Adidas and Audi launch a stylish Miami Collection blending 2000s football kits with F1 design.",
  openGraph: {
    title: "Adidas x Audi F1 Miami Collection 2026",
    description: "2000s football nostalgia meets modern F1 in Miami.",
    url: "https://www.us11fc.com/news/adidas-audi-miami-collection-2026",
    siteName: "US11",
    images: [
      {
        url: "https://www.audif1.com/cms/api/media/file/audif1_2026_miami_collection_messi_teaser_01-1012x1350.webp",
        width: 1200,
        height: 675,
        alt: "Adidas Audi F1 Miami Collection",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adidas x Audi F1 Miami Collection",
    description: "2000s football meets F1 glamour in Miami.",
    images: ["https://www.audif1.com/cms/api/media/file/audif1_2026_miami_collection_messi_teaser_01-1012x1350.webp"],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/adidas-audi-miami-collection-2026"
  }
};

export default function AdidasAudiMiamiLayout({ children }) {
  return (
    <div className="bg-white min-h-screen">
      <main className="max-w-4xl mx-auto px-4 md:px-0 py-10">
        {children}
      </main>
    </div>
  );
}
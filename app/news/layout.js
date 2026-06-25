// app/news/layout.js

export const metadata = {
  title: 'News - US11 Soccer',
  description: 'Latest USMNT, MLS and World Cup news and analysis from US11',
  openGraph: {
    title: 'US11 News',
    description: 'Breaking news, match analysis and transfer updates from the world of soccer',
    images: [
      {
        url: 'https://www.us11fc.com/og-image-news.jpg', // možeš promeniti kasnije
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function NewsLayout({ children }) {
  return (
    <div className="bg-white min-h-screen">
      {/* Ovde možeš dodati globalni news header ako želiš kasnije */}
      <main className="max-w-4xl mx-auto px-4 md:px-0 py-8">
        {children}
      </main>
    </div>
  );
}
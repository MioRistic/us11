// app/news/layout.js

export const metadata = {
  title: 'News - US11 Soccer',
  description: 'Latest USMNT, MLS and World Cup news and analysis from US11',
  openGraph: {
    title: 'US11 News',
    description: 'Breaking news, match analysis and transfer updates from the world of soccer',
    images: [
      {
        url: 'https://www.us11fc.com/og-image-news.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
};


export default function NewsLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
// app/blog/mls-hype-and-vice-womens-collection/layout.js

export const metadata = {
  title: 'MLS x Hype and Vice: The Women’s Collection That Finally Treats Female Fans Like Fashion Consumers',
  description:
    'Hype and Vice drops a full MLS women’s collection with cropped raglan tees, MVP tanks, denim jackets and more. Finally, gear designed for women who actually want to wear it.',
  openGraph: {
    title: 'MLS x Hype and Vice Women’s Collection',
    description:
      'The women’s MLS apparel drop that actually treats female fans like fashion consumers. Cropped tees, MVP tanks, denim jackets and more.',
    url: 'https://www.us11fc.com/blog/mls-hype-and-vice-womens-collection',
    siteName: 'US11',
    images: [
      {
        url: 'https://www.mlsstore.com/content/ws/all/30b36d86-a697-404f-be84-66d333c8aafb__2400X900.jpg',
        width: 1200,
        height: 675,
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MLS x Hype and Vice Women’s Collection',
    description:
      'Finally, MLS gear designed for women who actually want to wear it.',
    images: [
      'https://www.mlsstore.com/content/ws/all/30b36d86-a697-404f-be84-66d333c8aafb__2400X900.jpg',
    ],
    creator: '@US11FC',
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
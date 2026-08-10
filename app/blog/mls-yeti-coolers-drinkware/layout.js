// app/blog/mls-yeti-coolers-drinkware/layout.js

export const metadata = {
  title: 'MLS x YETI 2026: Official Team Coolers & Ramblers That Actually Keep Ice for Days',
  description:
    'Shop the official MLS x YETI collection. Roadie 15 and Tundra 45 coolers + Rambler tumblers with your team logo. Built for tailgates, matchdays and everyday use.',
  openGraph: {
    title: 'MLS x YETI 2026: Official Team Coolers & Ramblers',
    description:
      'Premium YETI coolers and Rambler drinkware with official MLS team logos. Ice that lasts for days.',
    url: 'https://www.us11fc.com/blog/mls-yeti-coolers-drinkware',
    siteName: 'US11',
    images: [
      {
        url: 'https://www.mlsstore.com/content/ws/all/b5a4ef4c-bacc-413d-bef4-44b8c4a6efe3__2400X900.gif',
        width: 1200,
        height: 675,
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MLS x YETI 2026: Official Team Coolers & Ramblers',
    description:
      'Premium YETI coolers and Rambler drinkware with official MLS team logos.',
    images: [
      'https://www.mlsstore.com/content/ws/all/b5a4ef4c-bacc-413d-bef4-44b8c4a6efe3__2400X900.gif',
    ],
    creator: '@US11FC',
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
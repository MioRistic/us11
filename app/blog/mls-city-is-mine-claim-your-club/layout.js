export const metadata = {
  title:
    'Claim Your Club. Claim Your City. Inside the MLS x Paper Planes x Vs. Everybody Drop',
  description:
    'The limited City Is Mine collection is live: tees, hoodies, work jackets, hats and scarves for nine MLS clubs. Claim your club. Claim your city.',
  openGraph: {
    title: 'MLS City Is Mine: Claim Your Club. Claim Your City.',
    description:
      'Paper Planes x Vs. Everybody x MLS drop streetwear for nine clubs. Official collection now at MLS Store.',
    url: 'https://www.us11fc.com/blog/mls-city-is-mine-claim-your-club',
    siteName: 'US11',
    images: [
      {
        url: 'https://www.mlsstore.com/content/ws/all/2fd26dec-bf1d-4dfc-89b3-0d678534ceee__2400X1200.jpg?w=2400',
        width: 2400,
        height: 1200,
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MLS City Is Mine: Claim Your Club. Claim Your City.',
    description:
      'The limited Paper Planes x Vs. Everybody x MLS streetwear drop is live.',
    images: [
      'https://www.mlsstore.com/content/ws/all/2fd26dec-bf1d-4dfc-89b3-0d678534ceee__2400X1200.jpg?w=2400',
    ],
    creator: '@US11FC',
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
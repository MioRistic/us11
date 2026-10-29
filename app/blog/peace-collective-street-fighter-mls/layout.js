import { Metadata } from 'next';

export const metadata = {
  title: 'Peace Collective x Street Fighter x MLS: The Crossover Collection Worth Buying',
  description:
    'Peace Collective teamed up with Street Fighter for an MLS lifestyle collection featuring Griezmann, Son Heung-min, Lewandowski and club designs. Tees, hoodies and more available now.',
  openGraph: {
    title: 'Peace Collective x Street Fighter x MLS: The Crossover Collection Worth Buying',
    description:
      'The Street Fighter x MLS crossover from Peace Collective puts Griezmann, Son, Lewandowski and more into streetwear. Shop the collection.',
    url: 'https://www.us11fc.com/blog/peace-collective-street-fighter-mls',
    siteName: 'US11',
    images: [
      {
        url: 'https://i.postimg.cc/jSgdw8JN/Screenshot-2026-10-29-at-5-04-00-PM.png',
        width: 1200,
        height: 675,
        alt: 'Peace Collective x Street Fighter x MLS collection',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peace Collective x Street Fighter x MLS',
    description:
      'The crossover collection that turns MLS stars into streetwear. Shop Griezmann, Son, Lewandowski and more.',
    images: [
      'https://i.postimg.cc/jSgdw8JN/Screenshot-2026-10-29-at-5-04-00-PM.png',
    ],
  },
};

export default function Layout({ children }) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline:
              'Peace Collective x Street Fighter x MLS: The Crossover Collection Worth Buying',
            image:
              'https://i.postimg.cc/jSgdw8JN/Screenshot-2026-10-29-at-5-04-00-PM.png',
            datePublished: '2026-10-29T17:00:00Z',
            dateModified: '2026-10-29T17:00:00Z',
            author: {
              '@type': 'Person',
              name: 'Mio Ristić',
            },
            publisher: {
              '@type': 'Organization',
              name: 'US11',
              logo: {
                '@type': 'ImageObject',
                url: 'https://us11fc.com/logo.png',
              },
            },
            keywords: [
              'Peace Collective',
              'Street Fighter',
              'MLS',
              'Antoine Griezmann',
              'Son Heung-min',
              'Robert Lewandowski',
              'MLS merch',
              'streetwear',
            ],
            articleSection: 'Blog',
            description:
              'Peace Collective teamed up with Street Fighter for an MLS lifestyle collection featuring Griezmann, Son Heung-min, Lewandowski and club designs.',
          }),
        }}
      />
    </>
  );
}
import { Metadata } from 'next';

export const metadata = {
  title: 'Pulisic and Milan Have Agreed a Deal in Principle Until 2031. The Signature Is Still Missing.',
  description:
    'Christian Pulisic is close to signing a new contract with AC Milan until June 2031. Italian media report an agreement in principle worth around €5 million net per season. The deal has not been officially announced.',
  openGraph: {
    title: 'Pulisic and Milan Have Agreed a Deal in Principle Until 2031. The Signature Is Still Missing.',
    description:
      'AC Milan and Christian Pulisic have reached an agreement in principle on a new deal until 2031. The contract has not yet been signed or announced by the club.',
    url: 'https://www.us11fc.com/news/pulisic-milan-deal-2031',
    siteName: 'US11',
    images: [
      {
        url: 'https://assets.goal.com/images/v3/getty-2302080837/crop/MM5DIOBTGI5DENZRHA5G433XMU5DAORQ/GettyImages-2302080837.jpg?quality=60&auto=webp&format=pjpg&width=2160',
        width: 2160,
        height: 1215,
        alt: 'Christian Pulisic AC Milan',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pulisic and Milan Have Agreed a Deal in Principle Until 2031',
    description:
      'Italian reports say Christian Pulisic and AC Milan have agreed a deal in principle until 2031. The signature is still missing.',
    images: [
      'https://assets.goal.com/images/v3/getty-2302080837/crop/MM5DIOBTGI5DENZRHA5G433XMU5DAORQ/GettyImages-2302080837.jpg?quality=60&auto=webp&format=pjpg&width=2160',
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
            '@type': 'NewsArticle',
            headline:
              'Pulisic and Milan Have Agreed a Deal in Principle Until 2031. The Signature Is Still Missing.',
            image:
              'https://assets.goal.com/images/v3/getty-2302080837/crop/MM5DIOBTGI5DENZRHA5G433XMU5DAORQ/GettyImages-2302080837.jpg?quality=60&auto=webp&format=pjpg&width=2160',
            datePublished: '2026-10-28T12:00:00Z',
            dateModified: '2026-10-28T12:00:00Z',
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
              'Christian Pulisic',
              'AC Milan',
              'USMNT',
              'contract extension',
              'Americans Abroad',
              'Gerry Cardinale',
              'Ruben Amorim',
            ],
            articleSection: 'Americans Abroad',
            description:
              'Christian Pulisic is close to a new deal with AC Milan until 2031. Italian outlets report an agreement in principle, but the contract has not been officially signed.',
          }),
        }}
      />
    </>
  );
}
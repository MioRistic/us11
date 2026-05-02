export const metadata = {
    title: 'Seattle Runs Over Inter Miami – Leagues Cup 2025 Recap',
    description:
      'Seattle Sounders dominate Inter Miami 3-0 in the 2025 Leagues Cup final, showcasing teamwork over star power.',
    openGraph: {
      title: 'Seattle Runs Over Inter Miami – Leagues Cup 2025 Recap',
      description:
        'Seattle Sounders dominate Inter Miami 3-0 in the 2025 Leagues Cup final, showcasing teamwork over star power.',
      url: 'https://www.us11fc.com/blog/seattle-inter-recap',
      siteName: 'US11',
      images: [
        {
          url: 'https://cloudfront-us-east-1.images.arcpublishing.com/leadersgroup/UNPIXKTAEVBB3HJWDGSPYQFOMA.jpg',
          width: 1200,
          height: 800,
          alt: 'Messi after Inter Miami loss',
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Seattle Runs Over Inter Miami – Leagues Cup 2025 Recap',
      description:
        'Seattle Sounders dominate Inter Miami 3-0 in the 2025 Leagues Cup final, showcasing teamwork over star power.',
      images: [
        'https://cloudfront-us-east-1.images.arcpublishing.com/leadersgroup/UNPIXKTAEVBB3HJWDGSPYQFOMA.jpg',
      ],
      creator: '@mioristic',
    },
  };
  
  export default function InterMiamiSeattleLayout({ children }) {
    return (
      <>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              "headline": "Seattle Runs Over Inter Miami – Leagues Cup 2025 Recap",
              "image": "https://cloudfront-us-east-1.images.arcpublishing.com/leadersgroup/UNPIXKTAEVBB3HJWDGSPYQFOMA.jpg",
              "datePublished": "2026-05-02T12:00:00Z",
              "dateModified": "2026-05-02T12:00:00Z",
              "author": {
                "@type": "Person",
                "name": "Mio Ristić"
              },
              "publisher": {
                "@type": "Organization",
                "name": "US11",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://us11fc.com/logo.png"
                }
              }
            })
          }}
        />
      </>
    );
  }
  
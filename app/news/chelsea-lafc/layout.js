export const metadata = {
    title: 'Chelsea vs LAFC Recap â€“ Club World Cup 2025',
    description:
      'Chelsea overcame a spirited LAFC side 2-0 in a low-attendance opener at the 2025 FIFA Club World Cup in Atlanta.',
    openGraph: {
      title: 'Chelsea vs LAFC Recap â€“ Club World Cup 2025',
      description:
        'Chelsea overcame a spirited LAFC side 2-0 in a low-attendance opener at the 2025 FIFA Club World Cup in Atlanta.',
      url: 'https://www.us11fc.com/blog/chelsea-lafc',
      siteName: 'MLS Fan Store',
      images: [
        {
          url: 'https://media.freemalaysiatoday.com/wp-content/uploads/2025/06/ce61bd72-chelsea.jpg',
          width: 1200,
          height: 800,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Chelsea vs LAFC Recap â€“ Club World Cup 2025',
      description:
        'Chelsea overcame a spirited LAFC side 2-0 in a low-attendance opener at the 2025 FIFA Club World Cup in Atlanta.',
      images: [
        'https://media.freemalaysiatoday.com/wp-content/uploads/2025/06/ce61bd72-chelsea.jpg',
      ],
      creator: '@mioristic',
    },
  };
  
  export default function ({ children }) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": "Chelsea vs LAFC Recap â€“ Club World Cup 2025",
            "image": "https://media.freemalaysiatoday.com/wp-content/uploads/2025/06/ce61bd72-chelsea.jpg",
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
  

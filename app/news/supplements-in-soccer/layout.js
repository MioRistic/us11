// app/supplements/layout.js

export const metadata = {
    title: 'Top Supplements for Soccer Players',
    description:
      'Explore the most effective supplements for football players to boost strength, endurance, recovery, and injury prevention.',
    openGraph: {
      title: 'Top Supplements for Soccer Players',
      description:
        'Discover how proteins, creatine, BCAAs, and other supplements can enhance football performance, recovery, and health.',
      url: 'https://www.us11fc.com/supplements', // zameni sa stvarnim URL-om ako se razlikuje
      siteName: 'MLS Fan Store',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1662695086526-112d7959fab4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          width: 1200,
          height: 800,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Top Supplements for Soccer Players',
      description:
        'Learn which supplements can help football players improve performance, endurance, and recovery.',
      images: [
        'https://images.unsplash.com/photo-1662695086526-112d7959fab4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
      creator: '@tvojTwitterHandle', // zameni ako koristiš Twitter
    },
  };
  
  export default function SupplementsLayout({ children }) {
    return (
      <>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              "headline": "Top Supplements for Soccer Players",
              "image": "https://images.unsplash.com/photo-1662695086526-112d7959fab4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
  
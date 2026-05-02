export const metadata = {
    title: 'Barrios Brace Boosts Atlético, but Seattle Go Down Fighting',
    description:
      'Atlético Madrid claimed a vital 3-1 win over Seattle Sounders thanks to Pablo Barrios’ brace, keeping their FIFA Club World Cup hopes alive while Seattle’s path narrows.',
    openGraph: {
      title: 'Barrios Brace Boosts Atlético, but Seattle Go Down Fighting',
      description:
        'Atlético Madrid claimed a vital 3-1 win over Seattle Sounders thanks to Pablo Barrios’ brace, keeping their FIFA Club World Cup hopes alive while Seattle’s path narrows.',
      url: 'https://www.us11fc.com/blog/seattle-atletico',
      siteName: 'MLS Fan Store',
      images: [
        {
          url: 'https://motorcyclesports.net/wp-content/uploads/2025/06/2025-06-19T224853Z_862657799_UP1EL6J1RDGKI_RTRMADP_3_SOCCER-CLUB-SEA-ATM-scaled.jpg',
          width: 1200,
          height: 800,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Barrios Brace Boosts Atlético, but Seattle Go Down Fighting',
      description:
        'Pablo Barrios shined with a brace as Atlético Madrid beat Seattle 3-1. Can the Sounders still qualify for the next round?',
      images: [
        'https://motorcyclesports.net/wp-content/uploads/2025/06/2025-06-19T224853Z_862657799_UP1EL6J1RDGKI_RTRMADP_3_SOCCER-CLUB-SEA-ATM-scaled.jpg',
      ],
      creator: '@mioristic',
    },
  };
  
  export default function SeattleAtleticoLayout({ children }) {
    return (
      <>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              "headline": "Barrios Brace Boosts Atlético, but Seattle Go Down Fighting",
              "image": "https://motorcyclesports.net/wp-content/uploads/2025/06/2025-06-19T224853Z_862657799_UP1EL6J1RDGKI_RTRMADP_3_SOCCER-CLUB-SEA-ATM-scaled.jpg",
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
  
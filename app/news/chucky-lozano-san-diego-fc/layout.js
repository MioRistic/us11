// app/news/[slug]/layout.jsx
export const metadata = {
  title: 'Chucky Lozano Will Not Be Part of San Diego FC Sporting Plans',
  description:
    'San Diego FC confirms Hirving â€œChuckyâ€ Lozano will not be part of the clubâ€™s sporting plans, despite being the second-leading scorer last season.',
  openGraph: {
    title: 'Chucky Lozano Out of San Diego FC Sporting Plans',
    description:
      'Hirving Lozano contributed 11 goals and 11 assists last season but is not in San Diego FCâ€™s plans moving forward.',
    url: 'https://us11fc.com/news/chucky-lozano-san-diego-fc',
    siteName: 'MLS Fan Store',
    images: [
      {
        url: 'https://assets.goal.com/images/v3/getty-2216178867/crop/MM5DIMBQGA5DEMRVGA5G433XMU5DAORSGA4Q====/GettyImages-2216178867.jpg?auto=webp&format=pjpg&width=3840&quality=60',
        width: 1200,
        height: 800,
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chucky Lozano Will Not Be Part of San Diego FC Sporting Plans',
    description:
      'Despite scoring 11 goals last season, Hirving â€œChuckyâ€ Lozano is not included in San Diego FCâ€™s sporting plans.',
    images: [
      'https://assets.goal.com/images/v3/getty-2216178867/crop/MM5DIMBQGA5DEMRVGA5G433XMU5DAORSGA4Q====/GettyImages-2216178867.jpg?auto=webp&format=pjpg&width=3840&quality=60',
    ],
    creator: '@mikkyristic',
  },
};

export default function NewsLayout({ children }) {
  return (
    <main className="w-full bg-white text-[#020617] min-h-screen">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">
        {children}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": "Chucky Lozano Will Not Be Part of San Diego FC Sporting Plans",
            "image": "https://assets.goal.com/images/v3/getty-2216178867/crop/MM5DIMBQGA5DEMRVGA5G433XMU5DAORSGA4Q====/GettyImages-2216178867.jpg?auto=webp&format=pjpg&width=3840&quality=60",
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
    </main>
  );
}


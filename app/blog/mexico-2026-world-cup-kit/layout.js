// app/blog/jerseys/mexico-2026-world-cup-kit/layout.js

export const metadata = {
  title: "Mexico FIFA World Cup 2026 Kit: The Green Jersey",
  description:
    "A complete look at Mexico’s 2026 World Cup home kit, featuring the iconic green jersey with Aztec-inspired design and the 'SOMOS MÉXICO' detail.",
  openGraph: {
    title: "Mexico 2026 World Cup Home Kit: Green Jersey",
    description:
      "Explore Mexico’s 2026 FIFA World Cup home kit and shop the official El Tri replica and authentic jerseys.",
    url: "https://www.us11fc.com/blog/jerseys/mexico-2026-world-cup-kit",
    siteName: "US11",
    images: [
      {
        url: "https://fanatics.frgimages.com/mexico-national-team/mens-adidas-green-mexico-national-team-fifa-x-world-cup-2026-home-replica-jersey_ss5_p-203487748+pv-8+u-ogat4stn1auancckep4s+v-yedw66wzn5jjpmljufio.jpg?_hv=2&w=1018",
        width: 1200,
        height: 630,
        alt: "Mexico 2026 World Cup Home Kit",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mexico 2026 World Cup Home Kit: Green Jersey",
    description:
      "Shop Mexico’s 2026 FIFA World Cup home kit featuring the iconic green jersey with Aztec-inspired design and 'SOMOS MÉXICO' detail.",
    images: [
      "https://fanatics.frgimages.com/mexico-national-team/mens-adidas-green-mexico-national-team-fifa-x-world-cup-2026-home-replica-jersey_ss5_p-203487748+pv-8+u-ogat4stn1auancckep4s+v-yedw66wzn5jjpmljufio.jpg?_hv=2&w=1018",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical:
      "https://www.us11fc.com/blog/jerseys/mexico-2026-world-cup-kit",
  },
};

export default function Mexico2026JerseyLayout({ children }) {
  return (
    <div className="bg-white min-h-screen">
      {/* NO max-w – page handles full-bleed + sticky + content width */}
      <main className="w-full">
        {children}
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "Mexico FIFA World Cup 2026 Kit: The Green Jersey",
            image:
              "https://fanatics.frgimages.com/mexico-national-team/mens-adidas-green-mexico-national-team-fifa-x-world-cup-2026-home-replica-jersey_ss5_p-203487748+pv-8+u-ogat4stn1auancckep4s+v-yedw66wzn5jjpmljufio.jpg?_hv=2&w=1018",
            datePublished: "2026-01-25T10:00:00Z",
            dateModified: "2026-01-25T12:00:00Z",
            author: {
              "@type": "Person",
              name: "Mio Ristić",
            },
            publisher: {
              "@type": "Organization",
              name: "US11",
              logo: {
                "@type": "ImageObject",
                url: "https://us11fc.com/logo.png",
              },
            },
            keywords: [
              "Mexico 2026 kit",
              "El Tri",
              "World Cup jersey",
              "adidas",
              "SOMOS MÉXICO",
              "Fanatics",
            ],
            articleSection: "Shopping",
            description:
              "Mexico’s 2026 World Cup home kit — green jersey with Aztec-inspired design and SOMOS MÉXICO detail.",
          }),
        }}
      />
    </div>
  );
}
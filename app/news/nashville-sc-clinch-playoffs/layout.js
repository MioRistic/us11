export const metadata = {
  title: "How Nashville SC Can Clinch an MLS Playoff Spot",
  description:
    "Nashville SC lead the East on 53 points but have not clinched. A win at Inter Miami gets them to 56. Here is the math vs D.C. United, Toronto and the Red Bulls.",
  openGraph: {
    title: "How Nashville SC Can Clinch an MLS Playoff Spot",
    description:
      "First place is not a playoff berth. Nashville need 62 points — or help from D.C., Toronto and New York — to lock a 2026 MLS Cup Playoffs spot.",
    url: "https://www.us11fc.com/news/nashville-sc-clinch-playoffs",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/blt47978711340c869e/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-08-15T230033.321.png?auto=webp&format=pjpg&width=2048&quality=60",
        width: 1200,
        height: 675,
        alt: "Nashville SC close in on a 2026 MLS playoff berth",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Nashville SC Can Clinch an MLS Playoff Spot",
    description:
      "Nashville lead the East on 53 points with 10 games left. A win in Miami is not enough on its own. Here is what actually clinches.",
    images: [
      "https://assets.goal.com/images/v3/blt47978711340c869e/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-08-15T230033.321.png?auto=webp&format=pjpg&width=2048&quality=60",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/nashville-sc-clinch-playoffs",
  },
};

export default function NashvilleScClinchPlayoffsLayout({ children }) {
  return (
    <div className="bg-white min-h-screen">
      <main className="max-w-4xl mx-auto px-4 md:px-0 py-10">
        {children}
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: "How Nashville SC Can Clinch an MLS Playoff Spot",
            image:
              "https://assets.goal.com/images/v3/blt47978711340c869e/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-08-15T230033.321.png?auto=webp&format=pjpg&width=2048&quality=60",
            datePublished: "2026-09-12T16:20:00Z",
            dateModified: "2026-09-12T16:20:00Z",
            author: {
              "@type": "Person",
              name: "Mio Ristic",
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
              "Nashville SC",
              "MLS playoffs",
              "clinch scenarios",
              "Eastern Conference",
              "Inter Miami",
              "Supporters Shield",
              "B.J. Callaghan",
            ],
            articleSection: "MLS",
            description:
              "Nashville SC sit first in the East on 53 points but still need results — or 62 points — to clinch a 2026 MLS Cup Playoffs berth.",
          }),
        }}
      />
    </div>
  );
}
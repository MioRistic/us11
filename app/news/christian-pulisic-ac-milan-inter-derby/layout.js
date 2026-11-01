
const articleTitle =
  "Christian Pulisic Delivers as AC Milan Take Control of the Derby";

const articleDescription =
  "Christian Pulisic opened the scoring as AC Milan defeated Inter 3-1 at San Siro. Diego Moreira starred with two assists and a goal in a dominant Milan derby performance.";

const articleImage =
  "https://assets.goal.com/images/v3/imago-sport-1085165753/crop/MM5DKMBQGQ5DEOBRGU5G433XMU5DAORQ/imago-image.jpeg?quality=60&auto=webp&format=pjpg&width=1920";

const articleUrl =
  "https://www.us11fc.com/news/christian-pulisic-ac-milan-inter-derby";

export const metadata = {
  title: articleTitle,
  description: articleDescription,
  alternates: {
    canonical: articleUrl,
  },
  openGraph: {
    title: articleTitle,
    description:
      "Pulisic scored early as AC Milan beat Inter 3-1. Diego Moreira's outstanding performance and Milan's defensive organisation helped decide the Derby della Madonnina.",
    url: articleUrl,
    siteName: "US11",
    images: [
      {
        url: articleImage,
        width: 1920,
        height: 1080,
        alt: "Christian Pulisic during AC Milan's derby against Inter",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: articleTitle,
    description:
      "Christian Pulisic opened the scoring as AC Milan defeated Inter 3-1 in the Derby della Madonnina.",
    images: [articleImage],
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: articleTitle,
    description: articleDescription,
    image: [articleImage],
    datePublished: "2026-11-01T13:00:00Z",
    dateModified: "2026-11-01T13:00:00Z",
    author: {
      "@type": "Person",
      name: "Mio Ristić",
    },
    publisher: {
      "@type": "Organization",
      name: "US11",
      logo: {
        "@type": "ImageObject",
        url: "https://www.us11fc.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    articleSection: "Serie A",
    keywords: [
      "Christian Pulisic",
      "AC Milan",
      "Inter Milan",
      "Derby della Madonnina",
      "Serie A",
      "Diego Moreira",
      "USMNT",
      "American soccer players in Europe",
    ],
    inLanguage: "en-US",
  };

  return (
    <div>
      <main>{children}</main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </div>
  );
}

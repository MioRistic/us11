// app/news/americans-abroad-april-27/layout.js

export const metadata = {
  title: "Americans Abroad: Pulisic and McKennie Neutralize Each Other as Aaronson’s Leeds Fall Just Short at Wembley",
  description:
    "Christian Pulisic and Weston McKennie played out a goalless draw, Brenden Aaronson came close but Leeds fell to Chelsea in the FA Cup semi-final, and Haji Wright won the Championship title.",
  openGraph: {
    title: "Americans Abroad: Pulisic vs McKennie, Aaronson at Wembley",
    description: "A busy weekend for USMNT stars in Europe – Pulisic and McKennie cancel each other out, Aaronson denied at Wembley, and Wright lifts the Championship trophy.",
    url: "https://www.us11fc.com/news/americans-abroad-april-27",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2260113972/crop/MM5DINZQGM5DENRUGU5G433XMU5DAORSGQ2Q====/GettyImages-2260113972.jpg?auto=webp&format=pjpg&width=1920&quality=80",
        width: 1920,
        height: 1080,
        alt: "Americans Abroad",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Americans Abroad: Pulisic & McKennie in San Siro Stalemate",
    description: "Pulisic vs McKennie, Aaronson denied at Wembley, Wright wins Championship title – full review of US stars in Europe.",
    images: ["https://assets.goal.com/images/v3/getty-2260113972/crop/MM5DINZQGM5DENRUGU5G433XMU5DAORSGQ2Q====/GettyImages-2260113972.jpg?auto=webp&format=pjpg&width=1920&quality=80"],
    creator: "@US11FC",
  },
};

export default function AmericansAbroadLayout({ children }) {
  return (
    <div className="bg-white min-h-screen">
      <main className="max-w-4xl mx-auto px-4 md:px-0 py-10">
        {children}
      </main>
    </div>
  );
}
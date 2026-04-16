// app/blog/inter-miami-new-coach/layout.js

export const metadata = {
  title: "Who Should Replace Javier Mascherano at Inter Miami? Ranking the Leading Candidates",
  description:
    "Javier Mascherano has left Inter Miami just months after winning the MLS Cup. Full ranking of the top candidates including Xavi, Wilfried Nancy, Marcelo Gallardo and more.",
  openGraph: {
    title: "Who Should Replace Javier Mascherano at Inter Miami?",
    description: "Ranking the leading candidates to succeed Mascherano after his sudden departure from Inter Miami.",
    url: "https://www.us11fc.com/blog/inter-miami-new-coach",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2219044340/crop/MM5DIMBQGA5DEMRVGA5G433XMU5DAORSGA4Q====/GettyImages-2219044340.jpg?auto=webp&format=pjpg&width=1920&quality=80",
        width: 1920,
        height: 1080,
        alt: "Inter Miami new coach candidates 2026",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Who Should Replace Javier Mascherano at Inter Miami?",
    description: "Ranking the top candidates after Mascherano’s exit from Inter Miami.",
    images: ["https://assets.goal.com/images/v3/getty-2219044340/crop/MM5DIMBQGA5DEMRVGA5G433XMU5DAORSGA4Q====/GettyImages-2219044340.jpg?auto=webp&format=pjpg&width=1920&quality=80"],
    creator: "@US11FC",
  },
};

export default function InterMiamiNewCoachLayout({ children }) {
  return (
    <div className="bg-white min-h-screen">
      <main className="max-w-4xl mx-auto px-4 md:px-0 py-10">
        {children}
      </main>
    </div>
  );
}
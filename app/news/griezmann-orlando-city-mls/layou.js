export const metadata = {
  title: "Antoine Griezmann to Orlando City: MLS Blockbuster Rumors Hit Pause",
  description:
    "Griezmann's potential move to Orlando City is on hold as Atlético Madrid advances in Copa del Rey. Read the full story and transfer insights.",
  openGraph: {
    title: "Antoine Griezmann to Orlando City: MLS Blockbuster Rumors Hit Pause",
    description:
      "With the primary MLS transfer window closing, Griezmann’s move to Orlando City is delayed due to Atlético Madrid’s Copa del Rey run. Full analysis inside.",
    url: "https://www.us11fc.com/news/griezmann-orlando-city-mls",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2263389556/crop/MM5DEMBRGY5DCMJTGQ5G433XMU5DCMRYHIYTCNQ=/GettyImages-2263389556.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        width: 1200,
        height: 800,
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antoine Griezmann to Orlando City: MLS Blockbuster Rumors Hit Pause",
    description:
      "Griezmann’s MLS move is paused as Atlético Madrid pursues Copa del Rey glory. Read all about it.",
    images: [
      "https://assets.goal.com/images/v3/getty-2263389556/crop/MM5DEMBRGY5DCMJTGQ5G433XMU5DCMRYHIYTCNQ=/GettyImages-2263389556.jpg?auto=webp&format=pjpg&width=3840&quality=60"
    ],
    creator: "@us11analysis",
  },
};

export default function GriezmannLayout({ children }) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-5xl mx-auto px-4 md:px-0 py-10">
        {children}
      </main>
    </div>
  );
}
// app/news/mascherano-leaves-inter-miami/layout.js

export const metadata = {
  title: "The Sudden Exit: Why Javier Mascherano Left Inter Miami Just Months After Their First MLS Cup",
  description:
    "Javier Mascherano has stepped down as head coach of Inter Miami CF just four months after winning the club's first MLS Cup title. Full story, context and what it means for Messi and the Herons.",
  openGraph: {
    title: "The Sudden Exit: Javier Mascherano Leaves Inter Miami",
    description: "Just months after delivering Inter Miami's first MLS Cup, Javier Mascherano has stepped down as head coach.",
    url: "https://www.us11fc.com/news/mascherano-leaves-inter-miami",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2215792362/crop/MM5DGNZQHA5DEMBYGY5G433XMU5DAORRHEZQ====/GettyImages-2215792362.jpg?auto=webp&format=pjpg&width=1920&quality=80",
        width: 1920,
        height: 1080,
        alt: "Javier Mascherano Inter Miami exit",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Javier Mascherano Leaves Inter Miami",
    description: "The Argentine coach steps down just months after winning the club's first MLS Cup title.",
    images: ["https://assets.goal.com/images/v3/getty-2215792362/crop/MM5DGNZQHA5DEMBYGY5G433XMU5DAORRHEZQ====/GettyImages-2215792362.jpg?auto=webp&format=pjpg&width=1920&quality=80"],
    creator: "@US11FC",
  },
};

export default function MascheranoExitLayout({ children }) {
  return (
    <div className="bg-white min-h-screen">
      <main className="max-w-4xl mx-auto px-4 md:px-0 py-10">
        {children}
      </main>
    </div>
  );
}
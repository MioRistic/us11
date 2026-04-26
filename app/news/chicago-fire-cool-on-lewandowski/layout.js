// app/news/chicago-fire-cool-on-lewandowski/layout.js

export const metadata = {
  title: "Chicago Fire Cool on Lewandowski as Cuypers Surge Reshapes Their Summer Plans",
  description:
    "Chicago Fire have cooled their interest in Robert Lewandowski after a strong start from Hugo Cuypers. The Polish striker's form has dipped, and the Fire are looking toward a more sustainable long-term project.",
  openGraph: {
    title: "Chicago Fire Cool on Lewandowski as Cuypers Surge Reshapes Their Summer Plans",
    description: "Despite earlier interest, Chicago have moved on from Robert Lewandowski as Hugo Cuypers shines in attack.",
    url: "https://www.us11fc.com/news/chicago-fire-cool-on-lewandowski",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2229420776/crop/MM5DENZZGY5DCNJXGM5G433XMU5DAORRGQ3A====/GettyImages-2229420776.jpg?auto=webp&format=pjpg&width=1920&quality=80",
        width: 1920,
        height: 1080,
        alt: "Robert Lewandowski",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chicago Fire Cool on Lewandowski as Cuypers Shines",
    description: "Hugo Cuypers' strong form has reshaped Chicago Fire's summer transfer plans regarding Robert Lewandowski.",
    images: ["https://assets.goal.com/images/v3/getty-2229420776/crop/MM5DENZZGY5DCNJXGM5G433XMU5DAORRGQ3A====/GettyImages-2229420776.jpg?auto=webp&format=pjpg&width=1920&quality=80"],
    creator: "@US11FC",
  },
};

export default function ChicagoFireLewandowskiLayout({ children }) {
  return (
    <div className="bg-white min-h-screen">
      <main className="max-w-4xl mx-auto px-4 md:px-0 py-10">
        {children}
      </main>
    </div>
  );
}
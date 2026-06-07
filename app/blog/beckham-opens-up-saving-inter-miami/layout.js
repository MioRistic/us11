export const metadata = {
  title:
    "Beckham Opens Up: The Brutal Truth Behind Saving Inter Miami",

  description:
    "David Beckham reveals how Inter Miami nearly collapsed amid financial losses, failed stadium projects and an offer from MLS to sell the club back before becoming a billion-dollar success story.",

  openGraph: {
    title:
      "Beckham Opens Up: The Brutal Truth Behind Saving Inter Miami",

    description:
      "From losing $39 million a year to becoming a $1.35 billion club, Beckham shares the untold story behind Inter Miami's rise.",

    url:
      "https://www.us11fc.com/blog/beckham-opens-up-saving-inter-miami",

    siteName: "US11",

    images: [
      {
        url:
          "https://assets.goal.com/images/v3/getty-2250842184/crop/MM5DGMJZGI5DCNZZGY5G433XMU5DAORVGIZQ====/GettyImages-2250842184.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        width: 3840,
        height: 2560,
        alt:
          "David Beckham reflects on saving Inter Miami from collapse",
      },
    ],

    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Beckham Opens Up About Saving Inter Miami",

    description:
      "The Inter Miami co-owner reveals the financial struggles, failed stadium projects and turning point that changed everything.",

    images: [
      "https://assets.goal.com/images/v3/getty-2250842184/crop/MM5DGMJZGI5DCNZZGY5G433XMU5DAORVGIZQ====/GettyImages-2250842184.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    ],

    creator: "@US11FC",
  },

  alternates: {
    canonical:
      "https://www.us11fc.com/blog/beckham-opens-up-saving-inter-miami",
  },
};

export default function BeckhamInterMiamiLayout({ children }) {
  return (
    <div className="bg-white min-h-screen">
      <main className="max-w-4xl mx-auto px-4 md:px-0 py-10">
        {children}
      </main>
    </div>
  );
}
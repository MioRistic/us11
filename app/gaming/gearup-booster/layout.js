// app/gaming/gearup-booster/layout.js

export const metadata = {
  title: "Tired of High Ping in EA FC and Online Games? Here’s How GearUP Booster Actually Helps",
  description:
    "Lag is killing your EA FC matches? Learn how GearUP Booster reduces ping, packet loss and lag spikes for PC, console and mobile gaming.",
  openGraph: {
    title: "Tired of High Ping in EA FC? Here’s How GearUP Booster Helps",
    description:
      "A practical look at GearUP Booster – the network tool that can reduce lag and stabilize your connection in EA FC and other online games.",
    url: "https://www.us11fc.com/gaming/gearup-booster",
    siteName: "US11",
    images: [
      {
        url: "https://i.ibb.co/RGr8G6c7/images.png",
        width: 1200,
        height: 675,
        alt: "GearUP Booster - Reduce Ping for Online Games",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tired of High Ping in EA FC? GearUP Booster Explained",
    description: "How GearUP Booster can reduce lag and stabilize your connection in online football and competitive games.",
    images: [
      "https://i.ibb.co/RGr8G6c7/images.png",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/gaming/gearup-booster",
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
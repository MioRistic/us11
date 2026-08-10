// app/news/gozo-palace-transfer/layout.js

export const metadata = {
  title: "Crystal Palace Finalizing Club-Record Deal for Real Salt Lake Teenager Zavier Gozo",
  description:
    "Crystal Palace are finalizing the signing of 19-year-old American Zavier Gozo from Real Salt Lake in a club-record $15 million deal. Full details on the transfer, playing time expectations and USMNT prospects.",
  openGraph: {
    title: "Crystal Palace Finalizing Deal for Zavier Gozo",
    description:
      "Palace close in on $15m club-record signing of Real Salt Lake teenager Zavier Gozo. Medical underway in London.",
    url: "https://www.us11fc.com/news/gozo-palace-transfer",
    siteName: "US11",
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLMos2R5U1n5qF6NuXxo-ndVhZ3Z6ycwyk4jb6L_cvxg&s=10",
        width: 1200,
        height: 675,
        alt: "Zavier Gozo Real Salt Lake Crystal Palace",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crystal Palace Finalizing Deal for Zavier Gozo",
    description: "Palace close in on $15m club-record signing of Real Salt Lake teenager Zavier Gozo.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLMos2R5U1n5qF6NuXxo-ndVhZ3Z6ycwyk4jb6L_cvxg&s=10",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/gozo-palace-transfer",
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
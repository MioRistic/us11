import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "US11",
    template: "%s | US11",
  },
  description: "MLS News and Analysis by US11",
  openGraph: {
    title: "US11 - MLS News and Analysis",
    description:
      "Stay updated with the latest insights and analysis from Major League Soccer.",
    url: "https://www.us11fc.com",
    siteName: "US11",
    images: [
      {
        url: "/favico.ico",
        width: 1200,
        height: 630,
        alt: "US11 - MLS coverage",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "US11 - MLS News and Analysis",
    description: "Latest MLS coverage, news and expert insights by US11.",
    images: ["https://www.us11fc.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main className="flex-grow pt-[150px]">{children}</main>

        <Footer />

        {/* ================= COOKIEBOT (zamena za IUBENDA) ================= */}
        <Script
          id="cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="657a7740-db63-47f1-9448-695eb5cab5a3"
          data-blockingmode="auto"
          strategy="afterInteractive"
          async
        />

        {/* ================= GOOGLE ANALYTICS ================= */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZCKQ7R7PSQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            // GA4 konfiguracija
            gtag('js', new Date());
            gtag('config', 'G-ZCKQ7R7PSQ', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </body>
    </html>
  );
}
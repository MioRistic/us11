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

        <main className="flex-grow pt-[150px]">
          {children}
        </main>

        <Footer />

        {/* ================= COOKIEBOT ================= */}
        <Script
          id="cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="657a7740-db63-47f1-9448-695eb5cab5a3"
          data-blockingmode="auto"
          strategy="afterInteractive"
        />

        {/* ================= GOOGLE ANALYTICS (GA4) ================= */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZCKQ7R7PSQ"
          strategy="afterInteractive"
          data-cookieconsent="statistics"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
          data-cookieconsent="statistics"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

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
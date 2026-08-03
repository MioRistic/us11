'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MexicoVsUSAJerseySales() {
  const [currentUrl, setCurrentUrl] = useState('');
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  useEffect(() => {
    if (scriptLoaded && window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [scriptLoaded]);

  const handleCopyLink = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      alert('✅ Link copied to clipboard!');
    }
  };

  const articleTitle =
    'Mexico or USA: Whose Jersey Sells More in America? The Surprising Truth (and a Major Shift)';

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">

      {/* FULL-BLEED AFFILIATE NOTICE – edge to edge, on top */}
      <div className="w-full bg-zinc-100 border-b border-zinc-200 py-2.5 text-center text-[10px] text-zinc-600">
        This page contains affiliate links. When you purchase through the links provided,{' '}
        <span className="text-zinc-700 font-medium">US11 may earn a commission</span> at no extra cost to you.
      </div>

      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Mexico or USA: Whose Jersey Sells More in America? The Surprising Truth (and a Major Shift)
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-05-05">May 5, 2026</time>
          </div>

          {/* SOCIAL SHARE */}
          <div className="flex items-center gap-4 mt-4">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"
            >
              <FaWhatsapp size={20} />
            </a>
            <button
              onClick={handleCopyLink}
              className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"
            >
              <FiCopy size={20} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://i.ibb.co/Gfk3qjXJ/Untitled-design-4.png"
            alt="USMNT vs Mexico National Team Jerseys 2026"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            NIKE / ADIDAS
          </div>
        </figure>

        {/* STICKY DUAL BUY BANNERS – always under image */}
        <div className="sticky top-[140px] md:top-[148px] z-40 py-4 md:py-6 bg-white border-b border-zinc-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="https://fanatics.93n6tx.net/7XJYAY"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <div>
                <h3 className="text-[17px] font-semibold text-[#020617] leading-tight">
                  Shop USMNT kits
                </h3>
              </div>
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                <img
                  src="https://www.fanatics.com/content/ws/all/b88152dc-ebb5-4bbb-a3fe-fe3b2f15de08.svg"
                  alt="Fanatics"
                  className="w-full h-full object-contain"
                />
              </div>
            </a>

            <a
              href="https://fanatics.93n6tx.net/5k74Rb"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <div>
                <h3 className="text-[17px] font-semibold text-[#020617] leading-tight">
                  Shop Mexico kits
                </h3>
              </div>
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                <img
                  src="https://www.fanatics.com/content/ws/all/b88152dc-ebb5-4bbb-a3fe-fe3b2f15de08.svg"
                  alt="Fanatics"
                  className="w-full h-full object-contain"
                />
              </div>
            </a>
          </div>
        </div>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8 pt-6">

          <p>For years the question felt almost rhetorical.</p>
          <p>
            In the United States, the Mexican national team jersey consistently outsold every other international shirt — including the home team’s. The power of the Mexican-American community made it a retail juggernaut for over a decade.
          </p>
          <p>
            But in 2026, with the World Cup on home soil, the momentum appears to be shifting.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">The Fanatics Bombshell</h2>

          <p>
            On April 27, Fanatics — the largest soccer retailer in the U.S. — posted an Instagram update that caught the attention of the soccer community.
          </p>

          <p>
            According to that post, the current national team jersey ranking in their data showed:
          </p>

          <div className="flex justify-center my-6">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/p/DXnVRd2FDin/"
              data-instgrm-version="14"
              style={{ maxWidth: '540px', width: '100%' }}
            ></blockquote>
          </div>

          <ul className="list-decimal pl-6 space-y-2 text-lg my-6">
            <li>
              <strong>United States</strong>
            </li>
            <li>
              <strong>Mexico</strong>
            </li>
            <li>
              <strong>Canada</strong>
            </li>
            <li>
              <strong>Brazil</strong>
            </li>
            <li>
              <strong>Argentina</strong>
            </li>
          </ul>

          <p>
            A recent Instagram post by Fanatics suggests that U.S. national team jerseys are currently among the top sellers in the American market, possibly even leading in the short term.
          </p>
          <p>
            However, it’s important to note that these snapshots typically reflect limited-time retail data rather than comprehensive nationwide rankings.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Mini Stories Behind the Jerseys</h2>

          {/* UNITED STATES */}
          <h3 className="text-2xl font-bold mt-10 mb-4">United States – Home 2026</h3>
          <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8 aspect-[16/9]">
            <Image
              src="https://i.ibb.co/wNVY7w67/a142a5f2dc86d6a13778cf50d4b918aab65686c1-1920x1280.avif"
              alt="USMNT 2026 Home Jersey"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
              © Nike
            </div>
          </figure>

          <p>
            The Stars and Stripes are finally home. After years of watching others dominate the sales charts, the USMNT jersey has taken the crown — at least for now. This is more than fabric — it’s the symbol of a generation that grew up believing in American soccer. The 2026 hosting rights and sharp new Nike kits have clearly resonated.
          </p>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 my-10">
            <div className="flex items-center gap-4 sm:gap-5 w-full sm:w-auto">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-gray-50">
                <img
                  src="https://www.fanatics.com/content/ws/all/b88152dc-ebb5-4bbb-a3fe-fe3b2f15de08.svg"
                  alt="Fanatics"
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-tight">
                  Shop USMNT kits at Fanatics
                </h3>
              </div>
            </div>
            <a
              href="https://fanatics.93n6tx.net/7XJYAY"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap w-full sm:w-auto text-center"
            >
              Shop now
            </a>
          </div>

          {/* MEXICO */}
          <h3 className="text-2xl font-bold mt-12 mb-4">Mexico – Home 2026</h3>
          <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8 aspect-[16/9]">
            <Image
              src="https://assets.goal.com/images/v3/blt37f5cf51e25ab549/crop/MM5DQNRUHI2DQNR2NZXXOZJ2GEYTGORXGE======/G5AKS9vWkAAwK5e.jpeg?auto=webp&format=pjpg&width=3840&quality=60"
              alt="Mexico 2026 Home Jersey"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
              © ADIDAS
            </div>
          </figure>

          <p>
            Even if they’ve dropped to second in Fanatics’ recent snapshot, the iconic green home jersey remains a cultural force like no other. From Los Angeles to Chicago, entire communities still bleed green every time El Tri plays. Three generations of Mexican-Americans have worn this shirt with unmatched pride. Second on the chart? Maybe. But in the hearts of millions, Mexico is still number one.
          </p>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 my-10">
            <div className="flex items-center gap-4 sm:gap-5 w-full sm:w-auto">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-gray-50">
                <img
                  src="https://www.fanatics.com/content/ws/all/b88152dc-ebb5-4bbb-a3fe-fe3b2f15de08.svg"
                  alt="Fanatics"
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-tight">
                  Shop Mexico kits at Fanatics
                </h3>
              </div>
            </div>
            <a
              href="https://fanatics.93n6tx.net/5k74Rb"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap w-full sm:w-auto text-center"
            >
              Shop now
            </a>
          </div>

          {/* CANADA */}
          <h3 className="text-2xl font-bold mt-12 mb-4">Canada – Home 2026</h3>
          <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8 aspect-[16/9]">
            <Image
              src="https://i.ibb.co/dJ3fQbBH/RGLQU6-KXZBDCLAFWIEMBPQL3-TI.avif"
              alt="Canada 2026 Home Jersey"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
              © Nike
            </div>
          </figure>

          <p>
            The Sleeping Giant is awake. Canada’s jump to third is one of the most impressive stories. Co-hosting the World Cup and improved performances on the pitch are paying off. The red maple leaf is gaining serious traction south of the border.
          </p>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 my-10">
            <div className="flex items-center gap-4 sm:gap-5 w-full sm:w-auto">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-gray-50">
                <img
                  src="https://www.fanatics.com/content/ws/all/b88152dc-ebb5-4bbb-a3fe-fe3b2f15de08.svg"
                  alt="Fanatics"
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-tight">
                  Shop Canada kits at Fanatics
                </h3>
              </div>
            </div>
            <a
              href="https://fanatics.93n6tx.net/xJN1By"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap w-full sm:w-auto text-center"
            >
              Shop now
            </a>
          </div>

          {/* BRAZIL */}
          <h3 className="text-2xl font-bold mt-12 mb-4">Brazil – Home 2026</h3>
          <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8 aspect-[16/9]">
            <Image
              src="https://assets.goal.com/images/v3/bltc097a64ad5638938/Brazil%20WC%2026%20away%20kit.jpg?auto=webp&format=pjpg&width=1920&quality=60"
              alt="Brazil 2026 Away Jersey"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
              © Nike
            </div>
          </figure>

          <p>
            Even at fourth place, Brazil’s away jersey continues to turn heads. That sleek, bold blue design carries the same magic as the legendary yellow — Pelé, Ronaldinho, Neymar. Some jerseys simply never lose their appeal, no matter the color. It remains a favorite among fans who want something a little different but still unmistakably Brazilian.
          </p>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 my-10">
            <div className="flex items-center gap-4 sm:gap-5 w-full sm:w-auto">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-gray-50">
                <img
                  src="https://www.fanatics.com/content/ws/all/b88152dc-ebb5-4bbb-a3fe-fe3b2f15de08.svg"
                  alt="Fanatics"
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-tight">
                  Shop Brazil kits at Fanatics
                </h3>
              </div>
            </div>
            <a
              href="https://fanatics.93n6tx.net/DWk45b"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap w-full sm:w-auto text-center"
            >
              Shop now
            </a>
          </div>

          {/* ARGENTINA */}
          <h3 className="text-2xl font-bold mt-12 mb-4">Argentina – Home 2026</h3>
          <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8 aspect-[16/9]">
            <Image
              src="https://assets.goal.com/images/v3/bltac839746b38f19d0/Argentina%20FIFA%20World%20Cup%2026%20Mac%20Allister.png?auto=webp&format=pjpg&width=3840&quality=60"
              alt="Argentina 2026 Home Jersey"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
              © ADIDAS
            </div>
          </figure>

          <p>
            The Messi Effect refuses to die. Despite slipping to fifth, the sky-blue and white stripes still carry enormous weight thanks to Lionel Messi’s presence in Miami. Many wear it for the greatest player of this generation.
          </p>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 my-10">
            <div className="flex items-center gap-4 sm:gap-5 w-full sm:w-auto">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-gray-50">
                <img
                  src="https://www.fanatics.com/content/ws/all/b88152dc-ebb5-4bbb-a3fe-fe3b2f15de08.svg"
                  alt="Fanatics"
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-tight">
                  Shop Argentina kits at Fanatics
                </h3>
              </div>
            </div>
            <a
              href="https://fanatics.93n6tx.net/5k74R1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap w-full sm:w-auto text-center"
            >
              Shop now
            </a>
          </div>

          <h2 className="text-3xl font-bold mt-10 mb-4">The Bigger Picture</h2>

          <p>
            Whether this Fanatics snapshot becomes a long-term trend or just a temporary spike remains to be seen. What is clear is that the 2026 World Cup is already changing the commercial dynamics of soccer in America.
          </p>

          <p>
            For the first time in a long time, the USMNT jersey has a genuine shot at sustained dominance. But the loyalty of the Mexican-American community runs deep, and the Messi factor keeps Argentina dangerous.
          </p>

          <p>
            It’s worth noting that this ranking comes from a single Instagram post by Fanatics and reflects their own internal sales data at that specific moment. We cannot independently verify how representative these numbers are for the entire U.S. market. Like most retail snapshots, it should be taken with a grain of salt — interesting and worth discussing, but not necessarily an official industry-wide statistic.
          </p>

          <p>
            The real story will unfold over the next few months as we get closer to the tournament.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-gray-600">
          <div>
            <p>Published: May 5, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>
          <Link href="/blog" className="hover:text-gray-800">
            ← Back to blog
          </Link>
        </footer>

      </div>

      <Script
        src="https://www.instagram.com/embed.js"
        strategy="afterInteractive"
        onLoad={() => setScriptLoaded(true)}
      />
    </article>
  );
}
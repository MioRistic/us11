'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MLSAllStar2026Jersey() {
  const [currentUrl, setCurrentUrl] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
    setMounted(true);
  }, []);

  const handleCopyLink = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      alert('✅ Link copied to clipboard!');
    }
  };

  const articleTitle = "2026 MLS All-Star Jersey: What’s Selling and Where to Buy";

  return (
   <article className="w-full min-h-screen bg-white text-[#020617]">

    {/* AFFILIATE NOTICE — full width, edge to edge */}
    <div className="w-full bg-zinc-100 border-b border-zinc-200 py-2.5 text-center text-[10px] text-zinc-600 px-4">
      This page contains affiliate links. When you purchase through the links provided, 
      <span className="text-zinc-700 font-medium"> US11 may earn a commission</span> at no extra cost to you.
    </div>

    {/* CONTENT CONTAINER */}
    <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">


        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            2026 MLS All-Star Jersey: What’s Selling and Where to Buy
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-07-30">July 30, 2026</time>
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

        {/* FEATURE IMAGE — 16/9 kao ostali blogovi */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://www.mlsstore.com/content/ws/all/e4e8612e-2d5c-44f1-b65b-8d94751127eb__480X639.jpg?w=480"
            alt="2026 MLS All-Star Game adidas Blue Jersey"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Credit: MLS Store | adidas
          </div>
        </figure>

       {/* STICKY DUAL BUY TICKETS BANNERS */}
      <div suppressHydrationWarning>{mounted && (
        <div className="sticky top-[140px] md:top-[148px] z-40 py-4 md:py-6 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <a
                  href="https://fanatics.93n6tx.net/DW12xn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div>
                    <h3 className="text-[17px] font-semibold text-[#020617] leading-tight">
                      Shop at Fanatics
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
                  href="https://mlsstore.i8h2.net/KB9DNn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div>
                    <h3 className="text-[17px] font-semibold text-[#020617] leading-tight">
                      Shop at MLS Store
                    </h3>
                  </div>
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Major_League_Soccer_logo.svg/500px-Major_League_Soccer_logo.svg.png"
                      alt="MLS Store"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </a>

              </div>
            </div>
          </div>
        )}</div>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

          <p>
            The 2026 MLS All-Star Game is over, but the merchandise is just getting started. Son Heung-min’s brace and MVP performance in Charlotte gave the league a memorable night — and fans are now looking for the blue adidas jersey that went with it.
          </p>

          <p>
            The official 2026 MLS All-Star collection is available now, with clear early favorites emerging across MLS Store and Fanatics.
          </p>

          <h3 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Standout Piece: Blue Replica Jersey
          </h3>
          <p>
            The Men’s MLS All Stars adidas Blue 2026 MLS All-Star Game Replica Jersey ($99.99) is the clear volume leader. It carries the “Most Popular” tag across major retailers for good reason.
          </p>
          <p>
            The design celebrates 30 years of the All-Star Game with a modern take on the original 1996 East All-Stars look. Royal blue base, green accents referencing the league’s early branding, stylized side stripes, and — for the first time on an All-Star jersey — the classic adidas Trefoil logo.
          </p>
          <p>
            It feels more like a proper football shirt than a one-off event tee. Light enough for summer, clean enough to wear outside the stadium, and distinctive enough that it doesn’t disappear next to club kits. For most fans, the Replica at $99.99 is the smart buy.
          </p>

          {/* Shop Banner - Fanatics */}
          <div suppressHydrationWarning>{mounted && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 my-10 max-w-4xl mx-auto">
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
                    2026 MLS All-Star Game Replica Jersey
                  </h3>
                </div>
              </div>
              <a
                href="https://fanatics.93n6tx.net/DW12xn"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap w-full sm:w-auto text-center"
              >
                Shop now
              </a>
            </div>
          )}</div>

          {/* Shop Banner - MLS Store */}
          <div suppressHydrationWarning>{mounted && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 my-10 max-w-4xl mx-auto">
              <div className="flex items-center gap-4 sm:gap-5 w-full sm:w-auto">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-gray-50">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Major_League_Soccer_logo.svg/500px-Major_League_Soccer_logo.svg.png"
                    alt="MLS Store"
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-tight">
                    2026 MLS All-Star Game Replica Jersey
                  </h3>
                </div>
              </div>
              <a
                href="https://mlsstore.i8h2.net/KB9DNn"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap w-full sm:w-auto text-center"
              >
                Shop now
              </a>
            </div>
          )}</div>

          <h3 className="text-xl font-semibold text-gray-900 leading-tight">
            Premium Option: On-Field Authentic
          </h3>
          <p>
            The Men’s MLS All Stars adidas Blue 2026 On-Field Authentic Jersey ($149.99) is the match-issue version: lighter fabric, Climacool+ technology, closer athletic fit, and the same detailing the All-Stars used on the field.
          </p>
          <p>
            It sits higher in the rankings than expected for a $150 All-Star shirt, with recent purchases still registering. Collectors and fans who want the exact on-field feel are driving demand here.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 leading-tight">
            Supporting Pieces That Are Moving
          </h3>
          <p>
            A few secondary items are also performing well:
          </p>
          <ul>
            <li><strong>New Era Black 2026 MLS All-Star Game Charlotte 9FIFTY Snapback</strong> — $39.99 (Most Popular)</li>
            <li><strong>Men’s Black 2026 MLS All-Star Game Roster T-Shirt</strong> — $42.99 (Most Popular)</li>
            <li><strong>Men’s Black 2026 MLS All-Star Game Local T-Shirt</strong> — $42.99</li>
            <li><strong>adidas Black Full-Zip Anthem Jacket</strong> — $119.99</li>
            <li><strong>Youth Replica Jersey</strong> — $79.99</li>
          </ul>
          <p>
            The gray MLS vs. Liga MX Matchup T-Shirt and youth crest tees round out the lower end of the range.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 leading-tight">
            Replica vs Authentic
          </h3>
          <p>
            The 2026 MLS All-Star jersey is available in two main versions:
          </p>
          <ul>
            <li><strong>Replica Jersey ($99.99)</strong> — designed for everyday comfort while maintaining the official look. Best overall value and the clear best-seller.</li>
            <li><strong>On-Field Authentic ($149.99)</strong> — the same version worn by players, with premium lightweight materials and advanced moisture management.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 leading-tight">
            Where to Buy the 2026 MLS All-Star Jersey
          </h3>
          <p>
            Fans can purchase the official 2026 MLS All-Star collection through Fanatics and the official MLS Store. Stock on main sizes remains solid, with shipping typically in 2–4 business days.
          </p>

          {/* Shop Banner - Fanatics */}
          <div suppressHydrationWarning>{mounted && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 my-10 max-w-4xl mx-auto">
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
                    2026 MLS All-Star Collection
                  </h3>
                </div>
              </div>
              <a
                href="https://fanatics.93n6tx.net/DW12xn"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap w-full sm:w-auto text-center"
              >
                Shop now
              </a>
            </div>
          )}</div>

          {/* Shop Banner - MLS Store */}
          <div suppressHydrationWarning>{mounted && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 my-10 max-w-4xl mx-auto">
              <div className="flex items-center gap-4 sm:gap-5 w-full sm:w-auto">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-gray-50">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Major_League_Soccer_logo.svg/500px-Major_League_Soccer_logo.svg.png"
                    alt="MLS Store"
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-tight">
                    2026 MLS All-Star Collection
                  </h3>
                </div>
              </div>
              <a
                href="https://mlsstore.i8h2.net/KB9DNn"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap w-full sm:w-auto text-center"
              >
                Shop now
              </a>
            </div>
          )}</div>

          <p>
            <strong>Recommended order if you’re buying one or two pieces:</strong>
          </p>
          <ul>
            <li>Men’s Blue Replica Jersey ($99.99) — best overall value and clear best-seller</li>
            <li>Black 9FIFTY Snapback or Roster T-Shirt — easy add-ons</li>
            <li>Authentic Jersey ($149.99) — only if you want the on-field version</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 leading-tight">
            Why This Collection Works
          </h3>
          <p>
            Most All-Star kits are forgettable. This one isn’t. Adidas leaned into nostalgia without making it look dated. The Trefoil, the original MLS blue-and-green palette, and the 30th-anniversary framing give it a clear story. Timing helps too: the game was in Charlotte, Son delivered a highlight-reel night, and the shirt was already available before kickoff.
          </p>

          <p className="font-bold text-xl mt-8">
            If you want one piece from the 2026 MLS All-Star Game, the blue Replica jersey is the one most fans are choosing — and the one that makes the most sense to own.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex justify-between text-sm text-gray-600">
          <span>Published: July 30, 2026</span>
          <Link href="/blog" className="hover:text-gray-800">← Back to blog</Link>
        </footer>

      </div>
    </article>
  );
}
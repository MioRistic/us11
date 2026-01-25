'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function USFreeAgentsWinter2026() {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') setCurrentUrl(window.location.href);
  }, []);

  const handleCopyLink = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      alert('Link copied to clipboard!');
    }
  };

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(
    "Free Agents – US Players (MLS & Abroad) – Winter 2026"
  )}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Free Agents – US Players (MLS & Abroad) – Winter 2026
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-01-25">January 25, 2026</time>
          </div>

          <div className="flex items-center gap-3">
            <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition">
              <FaFacebookF size={18} />
            </a>
            <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition">
              <FaTwitter size={18} />
            </a>
            <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition">
              <FaWhatsapp size={18} />
            </a>
            <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition">
              <FiCopy size={18} />
            </button>
          </div>
        </header>

        {/* Feature Image – promeni src po potrebi, npr. na USMNT ili Transfermarkt stil */}
       <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
  <Image
    src="https://i.ibb.co/p6NKtkb4/SN222-H3-NXFGYTHLW34-S2-NBJKEI.webp"
    alt="US Free Agents Winter 2026"
    width={1200}
    height={500}
    className="w-full h-[420px] object-cover object-top"
    priority
  />
  <figcaption className="text-xs text-gray-400 px-3 py-2">
    Creator: Ron Jenkins 
| 
Credit: Getty Images
Copyright: 2021 Getty Images
  </figcaption>
</figure>

        {/* Article Content */}
        <section className="prose prose-lg max-w-none space-y-8 leading-relaxed">

          <p>
            As the 2026 MLS season approaches, several American players find themselves out of contract and available for new opportunities. These free agents include experienced veterans, promising young talents, and versatile midfielders and defenders ready to make an impact at their next club.
          </p>

          <p>Here are some notable names:</p>

          <ul className="list-none space-y-6">
            <li><strong>Brooks Lennon</strong> (RB, 28, €2.0m) – Former MLS and Ireland-eligible right-back, available since 01/01/2026.</li>
            <li><strong>Henry Kessler</strong> (CB, 27, €1.8m) – Solid central defender with leadership qualities, out of contract from 01/01/2026.</li>
            <li><strong>Bryce Duke</strong> (AM, 24, €1.5m) – Creative attacking midfielder, seeking a new challenge after 01/01/2026.</li>
            <li><strong>Corey Baird</strong> (CF, 29, €1.0m) – Experienced forward looking for his next scoring opportunity.</li>
            <li><strong>Andrew Brody</strong> (RB, 30, €1.0m) – Veteran defender with MLS experience.</li>
            <li><strong>Memo Rodríguez</strong> (AM, 30, €800k) – Dual-nationality attacking midfielder (US/Mexico), free since 01/01/2026.</li>
            <li><strong>Sebastian Lletget</strong> (CM, 33, €600k) – Former USMNT midfielder with solid playmaking skills.</li>
            <li><strong>Sean Davis</strong> (CM, 32, €600k) – Central midfielder capable of anchoring the midfield.</li>
            <li><strong>Akil Watts</strong> (RB, 25, €600k) – Young defender ready for a new project.</li>
            <li><strong>Jonathan Lewis</strong> (LW, 28, €500k) – Experienced winger with MLS and international experience (Jamaica).</li>
          </ul>

          <p>
            Other players to watch include <strong>Gyasi Zardes</strong> (CF, 34, €400k), <strong>Teal Bunbury</strong> (CF, 35, €150k), <strong>Zac MacMath</strong> (GK, 34, €125k), and promising young talents like <strong>Axel Kei</strong> (CF, 18, €100k).
          </p>

          <p>
            These players present an opportunity for clubs across MLS, USL, and abroad to strengthen their squads without transfer fees. From seasoned veterans to emerging prospects, this list offers options for teams looking to fill key positions.
          </p>

          <p className="text-sm text-gray-500 italic mt-8">
            Source: Transfermarkt – Free Agents USA
          </p>

        </section>

        {/* Footer */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 text-sm text-gray-600">
          <div>
            <p>Published: January 25, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>
          <div className="flex gap-6">
            <Link href="/news" className="hover:text-gray-800 transition">
              Back to news
            </Link>
          </div>
        </footer>

      </div>
    </article>
  );
}
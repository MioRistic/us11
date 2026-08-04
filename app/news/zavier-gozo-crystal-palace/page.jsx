'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function ZavierGozoCrystalPalace() {
  const [currentUrl, setCurrentUrl] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleCopyLink = async () => {
    if (!navigator?.clipboard || !currentUrl) return;
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      alert('✅ Link copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      alert('Failed to copy link');
    }
  };

  const articleTitle =
    "Zavier Gozo Nears $15 Million Move to Crystal Palace as Real Salt Lake Star Eyes Premier League Leap";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(
    'Zavier Gozo nears $15M move to Crystal Palace 🇺🇸🔴🔵'
  )}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    articleTitle + ' ' + currentUrl
  )}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Zavier Gozo Nears $15 Million Move to Crystal Palace as Real Salt Lake Star Eyes Premier League Leap
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-08-04">August 4, 2026</time>
          </div>
        </header>

        {/* SHARE BUTTONS */}
        <div className="flex items-center gap-3 mb-8">
          <a
            href={facebookShare}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition"
          >
            <FaFacebookF size={16} />
          </a>
          <a
            href={twitterShare}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:opacity-90 transition"
          >
            <FaTwitter size={16} />
          </a>
          <a
            href={whatsappShare}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition"
          >
            <FaWhatsapp size={18} />
          </a>
          <button
            onClick={handleCopyLink}
            className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center hover:bg-gray-300 transition"
          >
            <FiCopy size={16} />
          </button>
        </div>

        {/* FEATURE IMAGE */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://assets.goal.com/images/v3/getty-2277148248/crop/MM5DENRSGQ5DCNBXGY5G433XMU5DCORU/GettyImages-2277148248.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Zavier Gozo Real Salt Lake Crystal Palace"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Getty Images
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">

          <p className="text-xl font-medium">
            Crystal Palace are closing in on one of the most promising young American talents in Major League Soccer.
          </p>

          <p>
            According to multiple sources, including <em>The Athletic</em>, the Premier League club are in advanced talks to sign 19-year-old Zavier Gozo from Real Salt Lake. A deal has not yet been finalized, but negotiations are progressing positively and a fee in the region of <strong>$15 million</strong> (£11.1 million) is expected.
          </p>

          <p>
            Gozo, a dynamic wing-back and attacking threat who has broken out this season with RSL, has made clear his desire to move to Europe this summer.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            A Breakout Talent on the Rise
          </h2>

          <p>
            Born in West Valley City, Utah, Gozo is a Real Salt Lake Homegrown product who has rapidly climbed the ranks. After progressing through the academy and Real Monarchs, he established himself as a first-team regular and delivered consistent goal contributions, pace, and directness that quickly attracted European attention.
          </p>

          <p>
            His performances for the U.S. youth national teams, including strong showings at U-20 level, only accelerated the interest. Clubs such as Aston Villa, Atlético Madrid, Monaco and Villarreal had monitored him earlier in the year, but Crystal Palace have emerged as the frontrunners.
          </p>

          <p>
            Palace have scouted the American since the latter stages of last season and view him as a player who fits their recruitment model — young, athletic, versatile, and with significant upside.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Why Palace Makes Sense
          </h2>

          <p>
            For Gozo, the move represents a logical next step. Crystal Palace have developed a reputation in recent years for integrating and improving young attackers, while the presence of U.S. international Chris Richards offers a familiar face and a ready-made support system in the dressing room.
          </p>

          <p>
            Sources indicate that Palace’s development plan and pathway to first-team minutes played a significant role in the player’s thinking. At 19, Gozo is still raw but possesses the physical tools and technical confidence that translate well to the Premier League.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What It Means for Real Salt Lake
          </h2>

          <p>
            For RSL, the potential sale would rank among the club’s most significant outgoing transfers. Gozo is under contract through 2027 with club options beyond that, giving the Utah side leverage. A fee approaching $15 million would represent a strong return on a Homegrown product and further validate the club’s academy pathway.
          </p>

          <p>
            The timing also fits a broader pattern of MLS talents moving to Europe after strong domestic seasons and youth international exposure.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Still Not Done
          </h2>

          <p>
            While talks are advanced and momentum is building, the deal is not yet complete. Medicals are expected in the coming days if an agreement is reached, according to additional reporting.
          </p>

          <p>
            If completed, Gozo would become the latest American prospect to test himself in the Premier League — and another example of MLS continuing to produce players capable of commanding eight-figure fees.
          </p>

          <p className="font-semibold text-lg mt-10">
            For now, all eyes remain on whether Crystal Palace can get the deal over the line.
          </p>

        </section>

        {/* READ NEXT */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Next For You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/news/pochettino-stays-2030"
              className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md"
            >
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">
                  1
                </span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Mauricio Pochettino Stays: USMNT Coach Signs New Deal Through 2030
                </h3>
              </div>
            </Link>

            <Link
              href="/news/gio-reyna-strasbourg"
              className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md"
            >
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">
                  2
                </span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Gio Reyna Agrees Move to Strasbourg
                </h3>
              </div>
            </Link>

            <Link
              href="/news/leeds-liverpool-chicago"
              className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md"
            >
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">
                  3
                </span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Leeds Stun Liverpool 4-2 in Chicago
                </h3>
              </div>
            </Link>

            <Link
              href="/news/lucas-herrington-hull-city"
              className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md"
            >
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">
                  4
                </span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Hull City Agree Deal for Lucas Herrington
                </h3>
              </div>
            </Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: August 4, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>
          <Link href="/news" className="mt-4 sm:mt-0 hover:text-black transition-colors">
            ← Back to news
          </Link>
        </footer>

      </div>
    </article>
  );
}
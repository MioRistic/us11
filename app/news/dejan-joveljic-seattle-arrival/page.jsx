'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function DejanJoveljicSeattleArrival() {
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

  const articleTitle = "Seattle Sounders Acquire Dejan Joveljić in $6 Million Cash Trade — Proven Goalscorer Arrives as Designated Player";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Seattle Sounders acquire Dejan Joveljić for $6M — DP striker arrives ⚽️')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Seattle Sounders Acquire Dejan Joveljić in $6 Million Cash Trade — Proven Goalscorer Arrives as Designated Player
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-08-25">August 25, 2026</time>
          </div>

          {/* SOCIAL SHARE */}
          <div className="flex items-center gap-3">
            <a
              href={facebookShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1877F2] text-white hover:opacity-90 transition"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href={twitterShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:opacity-90 transition"
            >
              <FaTwitter size={16} />
            </a>
            <a
              href={whatsappShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#25D366] text-white hover:opacity-90 transition"
            >
              <FaWhatsapp size={18} />
            </a>
            <button
              onClick={handleCopyLink}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
            >
              <FiCopy size={16} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://assets.goal.com/images/v3/blt1f59038c75fb0191/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202024-11-30T215714.252.jpg?auto=webp&format=pjpg&width=2048&quality=60"
            alt="Dejan Joveljić Seattle Sounders"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Imagn

          </div>
        </figure>

        {/* ARTICLE BODY */}
        <section className="space-y-6 text-lg leading-relaxed">

          <p>
            SEATTLE — The Seattle Sounders have made one of the boldest moves of the 2026 summer window, acquiring striker Dejan Joveljić from Sporting Kansas City in a pure cash-for-player trade worth $6 million. The 27-year-old Serbian international becomes a Designated Player in Seattle and has signed a four-year contract through June 2030, with a club option for an additional year.
          </p>

          <p>
            The deal required Seattle to restructure Albert Rusnák’s contract in order to free up a DP slot — a clear signal of how highly the front office rates Joveljić.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            A Proven MLS Goalscorer
          </h2>

          <p>
            Joveljić arrives with a strong track record in the league. In a year and a half with Sporting Kansas City he scored 26 goals in 52 appearances. This season alone he had already found the net eight times before the transfer.
          </p>

          <p>
            His peak remains the 2024 campaign with LA Galaxy, when he scored 21 goals in 33 matches and played a decisive role in their MLS Cup triumph. That level of finishing is exactly what Seattle has been missing while dealing with injuries and inconsistent attacking output.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            How the Move Fits Sporting KC’s Strategy
          </h2>

          <p>
            From Kansas City’s perspective, the trade is part of what general manager David Lee has described as an aggressive and bold approach to roster construction.
          </p>

          <p>
            The sale achieves two key objectives at once:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>It opens a Designated Player slot — one of the most valuable spots on the roster.</li>
            <li>It allows the club to convert the maximum $3 million of the fee into General Allocation Money.</li>
          </ul>

          <p>
            Lee called the transaction “transformational” in its ability to improve the roster on two fronts. Sporting KC has already made a club-record move this summer by signing winger Andre Luiz for approximately $18 million and mutually terminated the contract of Manu García. The front office is still actively pursuing a center forward and an attacking midfielder to fill the remaining DP spots before the window closes on September 2.
          </p>

          <p>
            The team currently sits at the bottom of the Western Conference, but ownership under Peter Mallouk and the technical staff under Lee are clearly prioritizing long-term structure and financial flexibility over short-term results.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Immediate Impact Expected in Seattle
          </h2>

          <p>
            For the Sounders, the addition is more straightforward: an immediate upgrade in a position of need. Joveljić is a proven MLS goalscorer who has already shown he can deliver in high-stakes matches. His presence gives Seattle a different profile in attack while the club continues to manage injury issues in other areas of the roster.
          </p>

          <p>
            The deal is now official. Joveljić is a Sounder, Sporting KC has fresh resources and an open DP slot, and both clubs head into the final days of the window with clearer paths forward.
          </p>

          <p className="font-semibold text-lg mt-10">
            Whether this trade becomes the catalyst for a deeper Seattle run or the foundation for a more competitive Kansas City side will be decided on the field. For now, it stands as one of the more decisive and calculated moves of the 2026 MLS season.
          </p>

        </section>

        {/* NEXT TO READ */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link href="/blog/mls-archive-collection-2026" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://images.mlssoccer.com/image/private/t_editorial_landscape_12_desktop_2x/f_auto/mls/rsyenouylj95wi8oeipx.jpg"
                    alt="2026 MLS Archive Collection"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    2026 MLS Archive Collection: Ranking the Retro Kits — From Grimace Purple to Mountain Power
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 17, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/breel-embolo-atlanta-united" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbwzV8zjhlrGysUyoFj63vuCBg-DpmwygmARa2ASDwTA&s=10"
                    alt="Breel Embolo Atlanta United"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Atlanta United Finalizing $18m Deal for Switzerland Forward Breel Embolo
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 14, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/kevin-kelsy-rangers-bid" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://i.ibb.co/QvHNgtP7/images-3.jpg"
                    alt="Kevin Kelsy Rangers bid"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Rangers Submit ~$10m Bid for Portland Timbers Striker Kevin Kelsy
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 13, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/alexis-sanchez-cf-montreal" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNUx2mcZSv0C23oFnU7J4uT_jCAJ5y9KGMFw0_vn3vHQ&s=10"
                    alt="Alexis Sánchez CF Montréal"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    CF Montréal Sign Chilean Great Alexis Sánchez as Designated Player
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 11, 2026</p>
                </div>
              </div>
            </Link>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: August 25, 2026</p>
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
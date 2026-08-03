'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function GioReynaStrasbourg() {
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
    "Gio Reyna Agrees Move to Strasbourg as Career Reset Continues in France";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Gio Reyna agrees move to Strasbourg from Gladbach 🇺🇸⚽️')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Gio Reyna Agrees Move to Strasbourg as Career Reset Continues in France
          </h1>
          <p className="text-gray-500 text-sm">
            August 3, 2026 · By Mio Ristić
          </p>
        </header>

        {/* SHARE BUTTONS */}
        <div className="flex items-center gap-4 mb-8">
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
            <FaWhatsapp size={16} />
          </a>
          <button
            onClick={handleCopyLink}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
          >
            <FiCopy size={16} />
          </button>
        </div>

        {/* FEATURE IMAGE */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://assets.goal.com/images/v3/blt1c7bd4c8d2766389/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-02-20T134449.815.png?auto=webp&format=pjpg&width=2048&quality=60"
            alt="Gio Reyna Strasbourg transfer"
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

          <p>
            Gio Reyna is set for another fresh start.
          </p>

          <p>
            According to Fabrizio Romano and L’Équipe, RC Strasbourg have reached an agreement with Borussia Mönchengladbach to sign the United States international for a fee of around €3 million. Reyna has already accepted the move and is scheduled to undergo his medical on Monday before signing a five-year contract.
          </p>

          <p>
            If completed, the transfer will make Strasbourg Reyna’s fourth club in four seasons.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            A Low-Cost Bet on Talent
          </h2>

          <p>
            At 23, Reyna still carries the reputation of one of the most gifted American attacking midfielders of his generation. Comfortable between the lines, capable of creating in tight spaces, and dangerous from either wing, his technical quality has rarely been questioned.
          </p>

          <p>
            What has held him back is availability.
          </p>

          <p>
            A series of injuries limited his impact at Borussia Dortmund after a promising breakthrough. A loan at Nottingham Forest in the second half of 2023-24 failed to restore consistency. Last summer he moved to Mönchengladbach in search of regular minutes ahead of the home World Cup. He made 19 Bundesliga appearances and scored once, but logged little more than 500 league minutes across the campaign.
          </p>

          <p>
            For Strasbourg, the fee is modest. For a club operating inside the BlueCo multi-club structure alongside Chelsea, Reyna represents a calculated risk: a player with Champions League, Premier League, Bundesliga and international experience, still young enough to rebuild value if he stays fit.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            BlueCo Context
          </h2>

          <p>
            Strasbourg finished eighth in Ligue 1 last season and have used the BlueCo network to bring in young, high-upside talent. The recent departure of Valentín Barco to Chelsea created space in the squad. Reyna is expected to compete for minutes as an attacking midfielder or wide option.
          </p>

          <p>
            The French club has developed a reputation as a place where talented players can regain rhythm. Whether Reyna becomes the next success story depends largely on health and minutes — two things that have been hard to secure in recent years.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What It Means for Reyna and the USMNT
          </h2>

          <p>
            For Reyna, this is another chance to reset. Ligue 1 can offer a less physically brutal environment than the Bundesliga while still providing competitive football. Regular starts would strengthen his case with Mauricio Pochettino and the USMNT as the post-World Cup cycle begins.
          </p>

          <p>
            For American soccer, the move is another reminder of how quickly careers can shift. Once viewed as a future cornerstone of the national team, Reyna is now looking for stability more than hype.
          </p>

          <p>
            The medical remains the final major hurdle. Once that is cleared, Strasbourg are expected to announce the signing.
          </p>

          <p className="font-bold text-xl mt-8">
            At €3 million, the upside is obvious. The question, as it has been for several years, is whether Reyna can stay on the pitch long enough to show it.
          </p>

        </section>

        {/* READ NEXT */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Next For You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link href="/news/lucas-herrington-hull-city" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">1</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Hull City Reach Agreement for Lucas Herrington in Deal Worth Up to $23 Million
                </h3>
              </div>
            </Link>

            <Link href="/news/arfsten-middlesbrough" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">2</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Max Arfsten Seals Transfer to Middlesbrough, Joins USMNT Duo
                </h3>
              </div>
            </Link>

            <Link href="/news/sebastian-berhalter-middlesbrough" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">3</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Vancouver Whitecaps Transfer USMNT’s Sebastian Berhalter to Middlesbrough
                </h3>
              </div>
            </Link>

            <Link href="/news/mls-matchday-roundup-lewandowski-messi" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">4</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  MLS Matchday Roundup: Lewandowski Announces Himself at Home, Messi’s Return Ends in Frustration
                </h3>
              </div>
            </Link>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: August 3, 2026</p>
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
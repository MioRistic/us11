'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function OwenWolffSportingKC() {
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
    "Sporting KC Complete $4.5m Move for USYNT Midfielder Owen Wolff — Club Legend’s Son Comes Home";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Sporting KC sign Owen Wolff from Austin for $4.5m + add-ons ⚽️')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Sporting KC Complete $4.5m Move for USYNT Midfielder Owen Wolff — Club Legend’s Son Comes Home
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-08-26">August 26, 2026</time>
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
            src="https://i.ibb.co/rG89HZj4/01jfvndt3mzgqws5t022.webp"
            alt="Owen Wolff Sporting Kansas City"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Copyright: 2024 Bob Drebin/ISIPhotos | Credit: Getty Images | Creator: Bob Drebin/ISI Photos
          </div>
        </figure>

        {/* ARTICLE BODY */}
        <section className="space-y-6 text-lg leading-relaxed">

          <p>
            KANSAS CITY — Sporting Kansas City have completed one of the more meaningful domestic acquisitions of the summer window, signing U.S. youth international midfielder Owen Wolff from Austin FC in a cash-for-player trade.
          </p>

          <p>
            Austin will receive $4.5 million up front, with another $3.1 million available in performance-based add-ons. The Texas club also retains a sell-on percentage. The total package, potentially reaching $7.6 million, is the largest cash trade for a U-22 Initiative player in the brief history of the rule.
          </p>

          <p>
            Wolff, 21, joins Sporting as a U-22 Initiative player and is under contract through June 2031. His salary will count against the salary budget at a reduced rate — a structural advantage that fits cleanly into David Lee’s rebuild.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            A Breakout Year, Then an Interrupted One
          </h2>

          <p>
            In 2025 Wolff was Austin’s Offensive Player of the Year. He set career highs with seven goals and 12 assists in 41 matches across all competitions, started nearly every regular-season game, and helped the club reach the playoffs and the U.S. Open Cup final. Technical quality, progressive passing, and the ability to play centrally or wide made him one of the most complete young midfielders in the league.
          </p>

          <p>
            2026 has been different. Groin and ankle injuries limited him to a handful of appearances. The production that defined last season has not fully returned. That context matters: Sporting are not buying a player at the peak of his current form. They are buying the version that existed 12 months ago — and the ceiling that still sits ahead of him.
          </p>

          <p>
            Wolff featured for the United States at the 2023 U-20 World Cup and remains part of the broader USYNT pipeline. At 21, with 147 first-team appearances already banked, he fits the profile of a domestic player clubs are increasingly willing to pay real money to acquire under the U-22 framework.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Family Story Is Real — and It Is Not the Whole Story
          </h2>

          <p>
            Owen is the son of Josh Wolff, a Sporting Legends Hall of Honor inductee who played for the Kansas City Wizards from 2003–06 and 2008–10. Owen’s first youth club was Sporting Blue Valley. He later moved through the Columbus Crew and Atlanta United academies before signing as Austin’s first Homegrown player at 16. His MLS debut, ironically, came against Sporting Kansas City in November 2021.
          </p>

          <p>
            The narrative writes itself. But Lee’s public comments stayed focused on the football.
          </p>

          <p>
            “Owen is one of the top young players in MLS with excellent technical quality who can add goals and assists to the team, while his versatility to play in multiple positions will make him a key asset for our coaching staff,” Lee said. “We want to be a destination for the top domestic talent around the league and Owen fits perfectly into that model following his standout season in 2025 with Austin.”
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            How It Fits the Rebuild
          </h2>

          <p>
            The timing is not accidental. One day earlier, Sporting sent Dejan Joveljić to the Seattle Sounders for $6 million in cash. Earlier in the window they signed winger Andre Luiz in a club-record deal worth an initial $18 million and mutually terminated Manu García’s contract. Opening roster space, converting fees into allocation money, and reinvesting in younger, more controllable assets has been the through-line of Lee’s summer.
          </p>

          <p>
            Wolff does not fill the No. 9 vacancy Joveljić left. He is more likely to operate as an attacking midfielder, a wide creator, or a connector underneath a future designated striker. Until that striker arrives, he offers goals and assists from midfield — the same profile that made him so valuable in Austin.
          </p>

          <p>
            For Austin, the sale ends a longer conversation. Discussions about a move had been ongoing since December. Wolff had extended into a U-22 contract but remained open to a new challenge. Interim coach Davy Arnaud described the decision as difficult but consistent with the club’s willingness to grant the player’s request if the right offer arrived.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Honest Assessment
          </h2>

          <p>
            Sporting are paying a premium for a 21-year-old who has already proven he can produce at MLS level, but who has spent much of 2026 on the treatment table. The upside is obvious: a technical, versatile American midfielder with senior experience, international pedigree, and years left on a U-22 deal. The risk is equally clear: he has to get healthy and rediscover the 2025 version of himself.
          </p>

          <p className="font-semibold text-lg mt-10">
            If he does, this becomes one of the smarter domestic acquisitions of the window — and a neat piece of Kansas City football history. If he does not, the fee will look heavy for a player still searching for consistency. For now, the deal is done. Owen Wolff is a Sporting Kansas City player. The rebuild continues.
          </p>

        </section>

        {/* NEXT TO READ */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link href="/news/dejan-joveljic-seattle-arrival" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/blt1f59038c75fb0191/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202024-11-30T215714.252.jpg?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="Dejan Joveljić Seattle Sounders"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Seattle Sounders Acquire Dejan Joveljić in $6 Million Cash Trade — Proven Goalscorer Arrives as Designated Player
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 25, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/rangers-agree-deal-timbers-kevin-kelsy" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://i.ibb.co/QvHNgtP7/images-3.jpg"
                    alt="Kevin Kelsy Rangers"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Rangers Agree $13 Million Deal for Portland Timbers Striker Kevin Kelsy
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 26, 2026</p>
                </div>
              </div>
            </Link>

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

          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: August 26, 2026</p>
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
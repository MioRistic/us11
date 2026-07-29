'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function OlwethuMakhanyaRangers() {
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

  const articleTitle = "Rangers Close In on Deal for Philadelphia Union Defender Olwethu Makhanya";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Rangers close in on Philadelphia Union defender Olwethu Makhanya ⚽️')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-[#020617]">
            Rangers Close In on Deal for Philadelphia Union Defender Olwethu Makhanya
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-6">
            <span>By <strong>Mio Ristić</strong></span>
            <span>•</span>
            <span>July 29, 2026</span>
          </div>

          {/* SOCIAL SHARE */}
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
              <FaWhatsapp size={16} />
            </a>
            <button
              onClick={handleCopyLink}
              className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center hover:bg-gray-300 transition"
            >
              <FiCopy size={16} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://assets.goal.com/images/v3/blt9413ab732a88c480/crop/MM5DCMBZGI5DMMJUHJXG653FHIYDUMA=/Mkhanaya.jpg?auto=webp&format=pjpg&width=2048&quality=60" // ← Zameni ovaj link
            alt="Olwethu Makhanya Philadelphia Union"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Philadelphia Union Facebook page
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">

          <p>
            Rangers are closing in on a deal to sign South Africa international center back Olwethu Makhanya from the Philadelphia Union, sources briefed on the negotiations have confirmed.
          </p>

          <p>
            The Union are expected to receive a fee north of $4.5 million and will retain a significant sell-on clause. The Rangers Review first reported the advanced talks.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Why Makhanya Is Leaving
          </h2>

          <p>
            Makhanya, 22, has been pushing for a move to Europe all summer. He did not return to the United States after being included in South Africa’s World Cup squad and has effectively played his final game for the Union.
          </p>

          <p>
            Philadelphia waited until they felt their valuation of the player had been met before progressing the deal. The Athletic previously reported in June that the Union had rejected an offer from a top Belgian club, viewing the bid as well short of their asking price.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            A Breakout Season, Then a Difficult 2026
          </h2>

          <p>
            Makhanya was one of the standout defenders in MLS during the 2025 season. His all-action, ground-covering style fit perfectly with the Union’s high-pressing, transition-based approach and helped the team claim the Supporters’ Shield.
          </p>

          <p>
            He only truly broke into the first team in 2025 after joining the club in the summer of 2023. That rapid rise made him one of the more intriguing young center backs in the league.
          </p>

          <p>
            The 2026 campaign has been far more difficult for both player and club. Philadelphia entered the World Cup break bottom of the table, and head coach Bradley Carnell was subsequently dismissed. Since the restart, the Union have recorded back-to-back wins while operating without Makhanya.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            International Context
          </h2>

          <p>
            Despite being part of South Africa’s World Cup squad, Makhanya did not feature in any of their four matches at the tournament. His sole senior appearance for Bafana Bafana came in a friendly against Nicaragua in May.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Rangers’ Defensive Rebuild
          </h2>

          <p>
            New Rangers manager Derek McInnes, who left Hearts to take the job in June, has already moved to strengthen his back line this summer. The club have brought in Ben Godfrey on a season-long loan from Atalanta and completed the permanent signing of Ross McCrorie from Bristol City.
          </p>

          <p>
            Makhanya would represent another addition to that defensive group and a clear step up in level for a young player who has impressed in MLS.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Bottom Line
          </h2>

          <p>
            If completed, the move would mark another example of a promising MLS defender making the jump to Europe after establishing himself in the league. For the Philadelphia Union, it would deliver a solid transfer fee and a sell-on clause after developing the player from a limited role into one of the stronger center backs in the competition.
          </p>

          <p className="font-bold text-xl mt-8">
            For Makhanya, it is the European opportunity he has been seeking.
          </p>

        </section>

        {/* READ NEXT */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-[#020617]">Read Next</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/news/mls-all-star-game-2026-messi" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-6">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">1</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  MLS All-Star Game 2026: No Messi in Charlotte
                </h3>
              </div>
            </Link>

            <Link href="/news/chicharito-dallas" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-6">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">2</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Chicharito Returns to MLS with FC Dallas
                </h3>
              </div>
            </Link>

            <Link href="/news/vincent-janssen-portland" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-6">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">3</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Portland Timbers Sign Vincent Janssen
                </h3>
              </div>
            </Link>

            <Link href="/news/three-stars-first-impressions" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-6">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">4</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Three Stars: First Impressions of MLS’s New Global Names
                </h3>
              </div>
            </Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: July 29, 2026</p>
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
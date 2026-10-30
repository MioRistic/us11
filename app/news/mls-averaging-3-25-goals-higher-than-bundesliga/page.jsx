'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MLSGoalsAverageRecord() {
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
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const articleTitle =
    'MLS Is Averaging 3.25 Goals a Game. That Is Higher Than the Bundesliga.';

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
              MLS
            </span>
            <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
              Stats
            </span>
            <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
              Goals
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            MLS Is Averaging 3.25 Goals a Game. That Is Higher Than the Bundesliga.
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
            Major League Soccer has already broken its single-season goals record. After 480 games, the league is averaging more goals per match than the completed 2025-26 Bundesliga season.
          </p>

          {/* Share buttons - black & white */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-800 px-4 py-2 rounded-full text-sm font-medium transition"
            >
              <FiCopy className="w-4 h-4" />
              {copied ? 'Copied!' : 'Copy link'}
            </button>

            <a
              href={facebookShare}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-800 px-4 py-2 rounded-full text-sm font-medium transition"
            >
              <FaFacebookF className="w-4 h-4" />
              Facebook
            </a>

            <a
              href={twitterShare}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-800 px-4 py-2 rounded-full text-sm font-medium transition"
            >
              <FaTwitter className="w-4 h-4" />
              X
            </a>

            <a
              href={whatsappShare}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-800 px-4 py-2 rounded-full text-sm font-medium transition"
            >
              <FaWhatsapp className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </header>

        {/* Hero image */}
        <figure className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9] bg-gray-100">
          <Image
            src="https://assets.goal.com/images/v3/imago-sport-1085015807/crop/MM5DCOJUGU5DCMBZGQ5G433XMU5DAORRGAYQ====/imago-image.jpeg?quality=60&auto=webp&format=pjpg&width=1920"
            alt="MLS high-scoring action"
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover"
            priority
          />
          <div className="absolute bottom-3 right-3 bg-black/75 text-white text-xs px-3 py-1.5 rounded font-medium">
            NurPhoto
          </div>
        </figure>

        {/* Article content */}
        <div className="max-w-none text-lg leading-relaxed">
          <p className="mb-6">
            Major League Soccer has already broken its single-season goals record, and there are still two matchdays left.
          </p>

          <p className="mb-6">
            After 480 games in 2026, the league is averaging 3.25 goals per match. That number is higher than the full 2025-26 Bundesliga season (3.24) and well clear of most other major leagues around the world.
          </p>

          <p className="mb-6">
            The figure comes from a comparison shared by Tom Bogert and confirmed by multiple statistical sources. MLS and South American leagues are measured on their 2026 seasons. European leagues and Liga MX are measured on their completed 2025-26 campaigns.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-6">
            Where MLS sits
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-semibold">Rank</th>
                  <th className="py-3 pr-4 font-semibold">League</th>
                  <th className="py-3 font-semibold">Goals per game</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100"><td className="py-3 pr-4">1</td><td className="py-3 pr-4">MLS</td><td className="py-3 font-medium">3.25</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3 pr-4">2</td><td className="py-3 pr-4">Bundesliga</td><td className="py-3">3.24</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3 pr-4">3</td><td className="py-3 pr-4">Saudi Pro League</td><td className="py-3">3.01</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3 pr-4">4</td><td className="py-3 pr-4">Liga MX</td><td className="py-3">2.86</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3 pr-4">5</td><td className="py-3 pr-4">Ligue 1</td><td className="py-3">2.82</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3 pr-4">6</td><td className="py-3 pr-4">Premier League</td><td className="py-3">2.75</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3 pr-4">7</td><td className="py-3 pr-4">LaLiga</td><td className="py-3">2.69</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3 pr-4">8</td><td className="py-3 pr-4">Primeira Liga</td><td className="py-3">2.68</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3 pr-4">9</td><td className="py-3 pr-4">Brasileirão</td><td className="py-3">2.66</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3 pr-4">10</td><td className="py-3 pr-4">Turkish Super Lig</td><td className="py-3">2.65</td></tr>
              </tbody>
            </table>
          </div>

          <p className="mb-6">
            The gap between MLS and the Bundesliga is small. The gap between those two and everyone else is not. Most of the traditional top leagues in Europe are sitting between 2.65 and 2.82.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-6">
            What the number actually means
          </h2>

          <p className="mb-6">
            A 3.25 average is high. It means the typical MLS match is producing more than three goals. Over a full season that adds up quickly. The league has already recorded 1,559 goals with 30 games still to play. The previous record was 1,552, set in 2024.
          </p>

          <p className="mb-6">
            Inter Miami have scored 75 goals. Vancouver have scored 67. Nashville, who have the best defense in the league (23 conceded), have still scored 66. The attacking numbers are not limited to one or two teams.
          </p>

          <p className="mb-6">
            Whether this is driven more by better attacking play or by weaker defending is harder to separate cleanly. A multi-year study by TheDatabetics that looked at leagues between 2022 and 2026 had MLS averaging 2.96 goals per game over that longer period. The jump to 3.25 in the current season is significant. It suggests the trend is moving in one direction.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-6">
            How it compares
          </h2>

          <p className="mb-6">
            The Bundesliga has long been one of the highest-scoring major leagues in Europe. Finishing a full season at 3.24 is strong. MLS matching or slightly exceeding that figure in an ongoing season is notable, especially with games still remaining.
          </p>

          <p className="mb-6">
            Ligue 1 (2.82) and the Premier League (2.75) are further back. LaLiga sits at 2.69. Those numbers are respectable by historical standards, but they are not in the same range as what MLS is producing right now.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-6">
            The context that matters
          </h2>

          <p className="mb-6">
            MLS still has two full matchdays left. The average could move slightly in either direction, but it would take an unusually low-scoring finish to fall below the Bundesliga’s completed-season mark. Even if it does, the league will finish the year as one of the highest-scoring top-division competitions in the world.
          </p>

          <p className="mb-6">
            The number does not automatically mean the quality of play has risen. It does mean that matches are producing more goals than in most other major leagues. For a competition that has spent years trying to shed the perception of being lower-scoring and more physical, that is a measurable shift.
          </p>

          <p className="mb-6">
            Whether the trend holds into 2027 is a separate question. For 2026, the data is clear. MLS is currently averaging more goals per game than the Bundesliga did last season, and more than most other leagues that matter.
          </p>
        </div>

        {/* Next to Read */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/news/messi-inter-miami-cincinnati-draw" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative bg-gray-100">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2302465844/crop/MM5DGNRRGY5DEMBTGQ5G433XMU5DAORRHA4Q====/GettyImages-2302465844.jpg?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="Lionel Messi"
                    fill
                    sizes="(max-width: 768px) 100vw, 448px"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Messi Didn’t Score or Assist. Inter Miami Still Escaped With a Late Draw Against Cincinnati.
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">October 29, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/nashville-supporters-shield-2026" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative bg-gray-100">
                  <Image
                    src="https://assets.goal.com/images/v3/blt0733c3edcfb41a40/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-03-22T213603.222.png?quality=60&auto=webp&format=pjpg&width=1920"
                    alt="Nashville SC"
                    fill
                    sizes="(max-width: 768px) 100vw, 448px"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Nashville SC Won the 2026 Supporters’ Shield. They Did It the Old-Fashioned Way.
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">October 25, 2026</p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: October 30, 2026</p>
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
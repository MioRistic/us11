'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function JoveljicSeattleSounders() {
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
    'Seattle Sounders Move for Dejan Joveljić as Struggling Attack Forces Bold Summer Play';

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(
    'Seattle Sounders closing in on Dejan Joveljić from Sporting KC ⚽️'
  )}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    articleTitle + ' ' + currentUrl
  )}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Seattle Sounders Move for Dejan Joveljić as Struggling Attack Forces Bold Summer Play
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-08-24">August 24, 2026</time>
          </div>

          {/* SOCIAL SHARE */}
          <div className="flex items-center gap-3">
            <a
              href={facebookShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href={twitterShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition"
            >
              <FaTwitter size={16} />
            </a>
            <a
              href={whatsappShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-600 transition"
            >
              <FaWhatsapp size={16} />
            </a>
            <button
              onClick={handleCopyLink}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
              aria-label="Copy link"
            >
              <FiCopy size={16} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp1PSDRhOJodgMInN48AeYYVQicUXW4AArLkGkx_3fdDM6QePtOQbHzDyc&s=10"
            alt="Dejan Joveljić Seattle Sounders"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Credit: Getty Images
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">

          <p>
            The Seattle Sounders are finalizing a deal to acquire forward Dejan Joveljić from Sporting Kansas City, according to multiple sources briefed on the situation.
          </p>

          <p>
            The agreement, first reported by Fabrizio Romano and confirmed by <em>The Athletic</em>, is structured as a $6 million cash-for-player trade. Joveljić, 27, is expected to join as a Designated Player and is already heading for his medical.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            A Necessary Move for Seattle
          </h2>

          <p>
            For Seattle, the move represents a clear admission that the current attack is not good enough. The Sounders have scored just 22 goals in 20 matches this season — one of the lowest totals in the league — while a long list of injuries has stripped the roster of key attackers. Jordan Morris, Jesús Ferreira, Cristian Roldán and Pedro de la Vega have all missed significant time.
          </p>

          <p>
            This is the first major cash outlay Seattle has made in a transfer since signing Pedro de la Vega ahead of the 2024 season. To free a Designated Player slot, the club is renegotiating Albert Rusnák’s contract so he can be moved off the DP list. Morris and de la Vega currently occupy the other two spots.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Proven Goalscorer
          </h2>

          <p>
            Joveljić arrives with a proven MLS résumé. In 2024 he was central to LA Galaxy’s MLS Cup-winning campaign, recording 21 goals and eight assists in 33 appearances across all competitions. That included the late winner against Seattle in the Western Conference Final.
          </p>

          <p>
            Sporting KC paid $4 million to acquire him the following winter in the first pure cash-for-player trade in league history. In Kansas City he has continued scoring at a high rate: 26 goals in 52 appearances, including a career-best 18 in the 2025 regular season. This year he leads Sporting with eight goals despite the team sitting near the bottom of the Western Conference.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Sporting KC’s Pragmatic Call
          </h2>

          <p>
            For Sporting KC the decision is pragmatic. The club loses its leading scorer but receives $6 million, of which the maximum $3 million can be converted into General Allocation Money. The sale also opens a second Designated Player slot. Even after spending $18 million on winger André Luiz earlier in the window, Sporting remains active in the market and is targeting three Designated Players by the winter, sources say.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Full Circle
          </h2>

          <p>
            The irony is not lost on Sounders supporters. Joveljić has punished Seattle before. Now the club that once watched him celebrate against them is bringing him in to solve the very problem he helped create.
          </p>

          <p className="font-bold text-xl mt-10">
            Whether the medical is completed without issue and the clubs formally announce the deal in the coming days, the direction is clear. Seattle has decided that standing still is no longer an option.
          </p>

        </section>

        {/* NEXT TO READ */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link href="/news/brenden-aaronson-leeds-deal" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2237710051/crop/MM5DEMBRGQ5DCMJTGM5G43"
                    alt="Brenden Aaronson Leeds United"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Brenden Aaronson Signs New Deal with Leeds United
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 20, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/messi-sullivan-subaru-park" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://i.ibb.co/15qZsXB/images-6.jpg"
                    alt="Messi Union vs Inter Miami"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Messi and Iloski Shine as Union and Inter Miami Share Spoils in Heated Draw
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 19, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/cf-montreal-sanchez-debut" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/imago-sport-1077615335/crop/MM5DEOJZGI5DCNRYGM5G433XMU5DAORRGIYA====/imago-image.jpeg?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="CF Montréal Alexis Sánchez"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    CF Montréal Edge Columbus as Alexis Sánchez Makes Debut
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 18, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/orlando-chicago-postponed-retro" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://i.ibb.co/1GVM9GVD/images-5.jpg"
                    alt="Orlando City vs Chicago Fire"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Griezmann vs Lewandowski Delayed by Weather as Retro Kits Take Center Stage
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 17, 2026</p>
                </div>
              </div>
            </Link>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: August 24, 2026</p>
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
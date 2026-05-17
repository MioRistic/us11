'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function GabrielPecGalaxySeattle() {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleCopyLink = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      alert('✅ Link copied to clipboard!');
    }
  };

  const articleTitle =
    "Gabriel Pec Runs Riot as Galaxy Stun Seattle and Climb Into Western Conference Playoff Spots";

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Gabriel Pec Runs Riot as Galaxy Stun Seattle and Climb Into Western Conference Playoff Spots
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-05-14">May 17, 2026</time>
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
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://ca-times.brightspotcdn.com/dims4/default/5324370/2147483647/strip/false/crop/7754x5169+0+0/resize/1486x991!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fef%2F48%2F37ba8e174430bbc5ac147024a175%2F2264835118.jpg"
            alt="Gabriel Pec celebrates for LA Galaxy against Seattle Sounders"
            width={1200}
            height={675}
            className="w-full h-[420px] object-cover"
            priority
          />

          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Dustin Bradford
 | 
Credit: Dustin Bradford / Getty Images
Copyright: 2026 Getty Images
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

          <p>
            SEATTLE — Lumen Field has long been one of the most intimidating venues in Major League Soccer.
          </p>

          <p>
            Seattle Sounders, backed by one of the league’s stingiest defenses and riding a nine-game unbeaten streak, have made a habit of punishing visitors here.
          </p>

          <p className="font-semibold text-xl">
            On Saturday night, the LA Galaxy simply refused to play along.
          </p>

          <p>
            In a commanding 2-0 victory, the Galaxy handed Seattle just their second defeat of the 2026 season — and their first home shutout loss.
          </p>

          <p>
            At the center of the upset was Brazilian winger Gabriel Pec, who delivered a standout performance, contributing a goal and an assist in what is quickly becoming a breakout campaign.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Pec Takes Center Stage
          </h2>

          <p>
            The opening goal arrived in the 21st minute.
          </p>

          <p>
            Marco Reus, enjoying one of his finest spells since joining MLS, slipped an inch-perfect through ball behind the Seattle defense.
          </p>

          <p>
            Pec stayed calm, rounded the goalkeeper, and finished neatly to give the visitors a deserved lead.
          </p>

          <p>
            For the second goal, Pec turned provider.
          </p>

          <p>
            Collecting the ball in midfield, he drove forward with purpose, reaching the byline before unselfishly cutting it back for fellow Brazilian Matheus Nascimento to tap home from close range.
          </p>

          <p className="font-semibold">
            With another goal and assist, Pec now sits on five goals and four assists this season.
          </p>

          <p>
            His performance against Seattle’s dangerous left-back Nouhou — a matchup in which he has historically struggled — stood out as particularly significant.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700">
            “We all know that he has had a hard time against Nouhou over the years,” Galaxy head coach Greg Vanney said afterward.
            <br /><br />
            “I felt like tonight he got the best of them. I thought it was the best performance he has had against him.”
          </blockquote>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            A Much-Needed Resurgence
          </h2>

          <p>
            The victory continues a promising mini-revival for the Galaxy.
          </p>

          <p>
            They have now won three of their last five matches and climbed into ninth place in the Western Conference.
          </p>

          <p>
            For a team that dramatically missed the playoffs last season despite entering the year as defending MLS Cup champions, results like this against top opposition carry extra weight.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700">
            “I don’t know if I could say I envisioned our points to go the way they did this week,” Vanney added.
            <br /><br />
            “But I think going on the road and winning two out of three is very, very solid.”
          </blockquote>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Seattle Left to Reflect
          </h2>

          <p>
            For the Sounders, it was an unusually blunt and frustrating evening.
          </p>

          <p>
            Despite their reputation for defensive solidity, they struggled to create clear-cut chances and were unusually toothless in the final third.
          </p>

          <p>
            The result leaves them with plenty to ponder as they head into the final stretch before the World Cup break.
          </p>

          <p>
            Gabriel Pec, meanwhile, continues to announce himself as one of the most dangerous young attackers in MLS.
          </p>

          <p className="font-semibold text-xl">
            On a night when the Galaxy needed a hero on the road in one of the league’s toughest environments, the Brazilian delivered.
          </p>

          <p>
            And with playoff positioning beginning to take shape, moments like this could prove decisive.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex justify-between text-sm text-gray-600">
          <span>Published: May 17, 2026</span>

          <Link
            href="/news"
            className="hover:text-gray-800"
          >
            Back to news
          </Link>
        </footer>

      </div>
    </article>
  );
}
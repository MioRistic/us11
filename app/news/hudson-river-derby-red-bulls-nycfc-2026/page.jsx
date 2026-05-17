'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function HudsonRiverDerby2026() {
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
    "Hudson River Derby Delivers Another Classic as Red Bulls and NYCFC Split the Points in Fiery 1-1 Draw";

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Hudson River Derby Delivers Another Classic as Red Bulls and NYCFC Split the Points in Fiery 1-1 Draw
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
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10 bg-white">
          <div className="flex items-center justify-center p-10">
            <Image
              src="https://upload.wikimedia.org/wikipedia/en/5/5d/Hudson_River_Derby_Foundation_logo.png"
              alt="Hudson River Derby logo"
              width={500}
              height={500}
              className="w-full max-w-md h-auto object-contain"
              priority
            />
          </div>

          <figcaption className="text-xs text-gray-400 px-3 py-2 text-center">
            Hudson River Derby Foundation
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

          <p>
            NEW YORK — For two decades, the Hudson River Derby has been one of Major League Soccer’s most authentic and fiercely contested rivalries.
          </p>

          <p>
            Born not from marketing but from geography and genuine animosity, it rarely fails to deliver drama.
          </p>

          <p className="font-semibold text-xl">
            On Saturday night at Sports Illustrated Stadium, the 2026 chapter added another memorable entry to the saga.
          </p>

          <p>
            In a tense, high-intensity battle, the New York Red Bulls and New York City FC played to a 1-1 draw.
          </p>

          <p>
            It was a result that felt both fair and frustrating — classic derby football at its finest.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            A Game Defined by Intensity and Momentum Swings
          </h2>

          <p>
            The first half was marked by physical duels and tactical tension.
          </p>

          <p>
            Just 24 minutes in, NYCFC suffered a significant blow when veteran midfielder Maxi Moralez went down heavily and had to be substituted.
          </p>

          <p>
            The injury visibly disrupted the visitors’ rhythm.
          </p>

          <p>
            Yet it was the Red Bulls who struck first.
          </p>

          <p>
            In the 44th minute, Jorge Ruvalcaba pounced on a loose ball in the box, swiveled sharply, and fired past the goalkeeper to send the home crowd into raptures.
          </p>

          <p className="font-semibold">
            At halftime, it was Red Bulls 1, New York City FC 0.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700">
            “The goal won’t change our style of play. We’re going to keep playing the same way — aggressive, high press, and looking to attack.”
          </blockquote>

          <p>
            Red Bulls head coach Michael Bradley was in no mood to sit on the lead.
          </p>

          <p>
            NYCFC responded with purpose after the break.
          </p>

          <p>
            In the 49th minute, substitute Andrés Perea — who had come on for the injured Moralez — delivered a perfectly weighted free-kick into the box.
          </p>

          <p>
            A runner timed his movement impeccably and powered home the equalizer.
          </p>

          <p className="font-semibold text-xl">
            1-1.
          </p>

          <p>
            From that point on, the match became an open, end-to-end affair.
          </p>

          <p>
            Both teams created dangerous chances. Both goalkeepers were forced into important saves.
          </p>

          <p>
            The expected goals (xG) told the story: Red Bulls 2.4 – NYCFC 2.0.
          </p>

          <p>
            It was a contest that could easily have gone either way.
          </p>

          <p>
            In the end, neither side could find a winner.
          </p>

          <p className="font-semibold">
            The 1-1 draw was a fair reflection of an intense, well-matched battle.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            The Bigger Picture
          </h2>

          <p>
            The result leaves both teams on 19 points, with bragging rights in the New York metropolitan area still shared.
          </p>

          <p>
            For the Red Bulls, it was a missed opportunity to pull clear in the derby and build crucial momentum before the World Cup break.
          </p>

          <p>
            For NYCFC, it was a valuable point on the road against a direct rival despite the early injury setback.
          </p>

          <p>
            More than the result, however, the Hudson River Derby once again proved why it remains one of the most compelling fixtures in American soccer.
          </p>

          <p>
            Even when it ends in a draw, the passion, intensity, and narrative are never boring.
          </p>

          <p className="font-semibold text-xl">
            And with both clubs still fighting for playoff positioning ahead of the summer pause, this rivalry feels far from finished.
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
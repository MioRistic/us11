'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function JamesMinnesotaExperiment() {
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
    "The James Rodríguez Experiment in Minnesota Ends After Just Four Games: What Went Wrong?";

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            The James Rodríguez Experiment in Minnesota Ends After Just Four Games: What Went Wrong?
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-05-11">May 11, 2026</time>
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
            src="https://assets.goal.com/images/v3/getty-2266866585/crop/MM5DEOBYGA5DCNRSGA5G433XMU5DINBUHIYTANA=/GettyImages-2266866585.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="James Rodríguez Minnesota United"
            width={1200}
            height={675}
            className="w-full h-auto object-cover"
            priority
          />

          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Rich Lam
 | 
Credit: Getty Images
Copyright: 2026 Getty Images
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

          <p>
            It lasted barely six weeks.
          </p>

          <p>
            James Rodríguez’s much-hyped arrival at Minnesota United — a move that generated genuine buzz across MLS and Latin America — has come to a quiet and somewhat awkward end.
          </p>

          <p>
            The 34-year-old Colombian is expected to play his final match for the Loons this week before departing for national team duty, and he will not be returning.
          </p>

          <p>
            What began as an ambitious gamble has become one of the shortest and most disappointing chapters of the veteran’s long club career.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            A Deal That Never Quite Clicked
          </h2>

          <p>
            When Minnesota United signed James in early March, the excitement was real.
          </p>

          <p>
            A former Real Madrid star, Ballon d’Or contender, and one of the most gifted No. 10s of his generation landing in the Twin Cities felt like a genuine coup for a club with ambition but limited star power.
          </p>

          <p>
            Reality, however, quickly set in.
          </p>

          <p>
            James made just four league appearances for Minnesota, with only one start.
          </p>

          <p>
            He contributed two assists and zero goals. He never looked fully fit, never found consistent rhythm, and rarely looked comfortable within the team’s tactical setup.
          </p>

          <p>
            His minutes were managed with one eye firmly on the 2026 World Cup.
          </p>

          <p>
            In the end, both player and club mutually agreed that continuing the arrangement made little sense.
          </p>

          <p>
            Minnesota opted not to exercise the option to extend his contract beyond June 30.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            The Financial and Sporting Reality
          </h2>

          <p>
            James reportedly earned around $2.5 million during his brief stay — not an exorbitant sum by MLS Designated Player standards, but still a significant investment for a mid-market club like Minnesota United.
          </p>

          <p>
            For that money, the Loons received limited on-field impact, a modest marketing boost, and very few memorable moments.
          </p>

          <p className="font-semibold">
            In sporting terms, this experiment must be considered a failure.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            What Went Wrong?
          </h2>

          <ul className="list-disc pl-6 space-y-4 text-lg">
            <li>
              <strong>Physical Management:</strong> James arrived prioritizing his fitness for what could be his final World Cup. Minnesota’s staff were understandably cautious with his workload, which prevented him from building the necessary match rhythm.
            </li>

            <li>
              <strong>Tactical Fit:</strong> The Loons’ current system did not appear built around a classic, creative No. 10. James often looked isolated or forced into roles that didn’t suit his strengths.
            </li>

            <li>
              <strong>Competition for Places:</strong> Minnesota already had established midfield options. Integrating a high-profile veteran proved far more difficult than anticipated.
            </li>

            <li>
              <strong>Motivation and Stage of Career:</strong> At 34, James is clearly in the twilight of his club career. His focus and emotional energy appear to be almost entirely directed toward one last dance with Colombia.
            </li>
          </ul>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            The Bigger Picture
          </h2>

          <p>
            This short-lived stint fits a familiar pattern in James Rodríguez’s post-Real Madrid career: flashes of genius on the international stage contrasted with inconsistency and frustration at club level.
          </p>

          <p>
            For Minnesota United, it was a calculated, relatively low-risk gamble that simply didn’t pay off.
          </p>

          <p>
            They took a chance on star power without blowing up their salary structure. In return, they got very little football.
          </p>

          <p>
            For James, the damage is minimal.
          </p>

          <p>
            He leaves with extra money in the bank and can now devote himself fully to what still matters most — carrying Colombia’s hopes at the 2026 World Cup.
          </p>

          <p className="font-semibold text-xl">
            The Minnesota experiment is over. The Colombian fairytale, however, still has one more chapter left to write.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex justify-between text-sm text-gray-600">
          <span>Published: May 11, 2026</span>

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
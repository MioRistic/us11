'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MessiAllStarAbsence() {
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

  const articleTitle = "Why Lionel Messi Will Avoid Punishment for Missing the 2026 MLS All-Star Game";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Why Lionel Messi Will Avoid Punishment for Missing the 2026 MLS All-Star Game
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-07-27">July 27, 2026</time>
          </div>

          {/* SOCIAL SHARE */}
          <div className="flex items-center gap-4 mt-6">
            <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition">
              <FaFacebookF size={20} />
            </a>
            <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-black text-white hover:opacity-80 transition">
              <FaTwitter size={20} />
            </a>
            <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[#25D366] text-white hover:opacity-80 transition">
              <FaWhatsapp size={20} />
            </a>
            <button onClick={handleCopyLink} className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors">
              <FiCopy size={20} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-video">
          <Image
            src="https://assets.goal.com/images/v3/blt9377225dfc46ac1f/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-05-10T084308.859.png?auto=webp&format=pjpg&width=2048&quality=60"
            alt="Lionel Messi Inter Miami"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Credit: Getty Images
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8 text-gray-800">

          <p>
            Lionel Messi will once again be the most notable absentee from the MLS All-Star Game this week in Charlotte. But unlike last year, the Inter Miami captain is expected to face no disciplinary consequences.
          </p>

          <p>
            Despite being named to the roster for Wednesday’s match against the Liga MX All-Stars, both Messi and his Argentina teammate Rodrigo De Paul have been granted official leave. The decision stems from a combination of World Cup fatigue and a pre-season agreement between Major League Soccer and the MLS Players Association.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The key difference from 2025
          </h2>

          <p>
            Last summer, Messi’s late withdrawal from the All-Star Game in Austin triggered an automatic one-game suspension. At the time, the league applied its standard rule: any player selected for the All-Star Game who fails to appear without a documented medical excuse is subject to a one-match ban for their club’s next competitive fixture.
          </p>

          <p>
            The decision drew sharp criticism from Inter Miami ownership. Managing owner Jorge Mas publicly called the league’s mandatory participation policy “draconian,” arguing that players were already being stretched to their physical limits.
          </p>

          <p>
            This year, the situation is different.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The World Cup exemption
          </h2>

          <p>
            Because Messi and De Paul reached the final of the 2026 World Cup with Argentina, they fall under specific player-welfare protections. Prior to the start of the 2026 MLS season, the league and the Players Association agreed that clubs would have individual conversations with players returning from the tournament to determine appropriate rest periods.
          </p>

          <p>
            In a formal statement, MLS confirmed:
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-6 italic text-lg my-8">
            “Prior to the start of the 2026 season, Major League Soccer and the MLS Players Association agreed that upon a player’s exit from the World Cup competition, clubs would have individual conversations with each player to determine the appropriate rest and return to training and competition timeline. Consistent with that agreement, Rodrigo De Paul and Lionel Messi will be excused from participating in the 2026 MLS All-Star Game.”
          </blockquote>

          <p>
            The exemption is essentially a recognition of the physical and mental toll of a deep World Cup run.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            When will Messi return?
          </h2>

          <p>
            While Messi has avoided a formal suspension, Inter Miami supporters will still have to wait. The current 21-day rest window means the 39-year-old is not expected to be available for selection until early August.
          </p>

          <p>
            That absence will see him miss several key MLS matches as he recovers from Argentina’s run to the final, where he finished with eight goals and claimed both the Silver Boot and Silver Ball.
          </p>

          <p>
            For the league, the absence of its biggest star is an obvious commercial setback. For Messi and Inter Miami, however, the priority remains clear: managing workload after an exhausting international summer.
          </p>

          <p className="font-semibold text-lg text-[#020617] mt-8">
            The All-Star Game will go on without him. This time, at least, it will not come with a suspension.
          </p>
        </section>

        {/* NEXT FOR YOU */}
        <section className="mt-16 border-t pt-8 bg-white">
          <h2 className="text-4xl font-extrabold text-[#111] mb-8 text-center">
            Next For You
          </h2>

          <div className="grid md:grid-cols-2 gap-6 px-4 md:px-8">
            <Link href="/news/griezmann-debut-goal" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">1</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Antoine Griezmann Announces Himself Immediately: Historic Debut Goal Powers Orlando City to 4-0 Thrashing
                </h3>
              </div>
            </Link>

            <Link href="/news/suarez-lewandowski-debut" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">2</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Suárez Spoils Lewandowski’s MLS Debut as Inter Miami Edge Chicago 3-2
                </h3>
              </div>
            </Link>

            <Link href="/news/nycfc-pulisic" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">3</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  NYCFC CEO Brad Sims Sends Clear Message: “We Want Christian Pulisic”
                </h3>
              </div>
            </Link>

            <Link href="/news/messi-recap" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">4</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Lionel Messi at the 2026 World Cup: Magic, Controversy, and One Last Stand
                </h3>
              </div>
            </Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: July 27, 2026</p>
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
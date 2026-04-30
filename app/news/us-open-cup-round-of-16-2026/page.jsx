'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function USOpenCupRoundOf16Page() {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') setCurrentUrl(window.location.href);
  }, []);

  const handleCopyLink = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      alert('✅ Link copied to clipboard!');
    }
  };

  const articleTitle = "US Open Cup 2026: NYCFC Finally Break the Red Bulls’ Spell, Colorado Derby Decided on Penalties";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            US Open Cup 2026: NYCFC Finally Break the Red Bulls’ Spell, Colorado Derby Decided on Penalties
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-04-30">April 30, 2026</time>
          </div>

          {/* SHARE BUTTONS */}
          <div className="flex items-center gap-4 mt-4">
            <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"><FaFacebookF size={20} /></a>
            <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"><FaTwitter size={20} /></a>
            <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"><FaWhatsapp size={20} /></a>
            <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"><FiCopy size={20} /></button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://assets.goal.com/images/v3/getty-1705295975/crop/MM5DGNRXG45DEMBWHA5G433XMU5DAORTGM2A====/GettyImages-1705295975.jpg?auto=webp&format=pjpg&width=1920&quality=60"
            alt="US Open Cup Round of 16 2026"
            width={1200}
            height={675}
            className="w-full h-auto object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Copyright: Getty Images Sport
          </figcaption>
        </figure>

      

        {/* ARTICLE CONTENT - Tvoj tačan tekst */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

          <p>
            The 2026 U.S. Open Cup once again proved why it remains one of the most unpredictable and dramatic competitions in American soccer. The Round of 16 delivered rivalries, extra time, penalties, and results that keep the path to the trophy wide open.
          </p>

          <p>
            The biggest spotlight was on two derbies: the Hudson River Derby between NYCFC and the Red Bulls, and the intense local clash between Colorado Rapids and Colorado Springs Switchbacks.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">NYCFC Finally Defeat the Red Bulls in Knockout Play</h2>
          <p>
            For years, the script had been the same — the Red Bulls dominated when it mattered most.
          </p>
          <p>
            This time, NYCFC rewrote the story. With a 3-1 victory at Sports Illustrated Stadium, New York City FC secured their first-ever knockout win against their biggest rivals — a landmark moment in the history of this derby.
          </p>
          <p>
            The hero of the night was Maxi Moralez. Three corners. Three assists. Kai Trewin, Raul Gustavo, and Thiago Martins all scored with powerful headers from Moralez’s pinpoint deliveries. The Red Bulls took the lead in the 14th minute through Julian Hall, but after that, they lost control of the match.
          </p>
          <p>
            NYCFC took over and never looked back. This wasn’t just a win — it was a statement and a long-awaited breakthrough in the rivalry.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Colorado Derby: Rapids Survive a Real Scare</h2>
            {/* YOUTUBE VIDEO */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-4">Match Highlights</h3>
          <div className="aspect-video w-full bg-black rounded-2xl overflow-hidden shadow-md">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dkCGvPDEYLs"
              title="US Open Cup Round of 16 2026 Highlights"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
          <p>
            The other derby was equally dramatic. Colorado Rapids faced Colorado Springs Switchbacks in a fiery local showdown at Dick’s Sporting Goods Park.
          </p>
          <p>
            The match ended 2-2 after extra time in a contest full of momentum swings. Georgi Minoungou looked to have won it for the Rapids with a goal in the 114th minute, but Khori Bennett equalized from the penalty spot in the dying seconds of extra time — a moment straight out of a movie.
          </p>
          <p>
            In the end, the Rapids prevailed 5-4 on penalties to advance to the quarterfinals. This was no routine MLS victory. It was a hard-fought battle for survival.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Other Round of 16 Results</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Orlando City 4-3 New England Revolution</strong> – Dramatic comeback with a 92nd-minute winner</li>
            <li><strong>Columbus Crew 4-1 One Knoxville SC</strong></li>
            <li><strong>Houston Dynamo 2-1 Louisville City FC</strong> (after extra time)</li>
            <li><strong>St. Louis CITY SC 2-1 Chicago Fire</strong></li>
          </ul>

          <h2 className="text-3xl font-bold mt-10 mb-4">Quarterfinal Matchups (Confirmed)</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>New York City FC vs Columbus Crew</li>
            <li>Orlando City vs Houston Dynamo</li>
            <li>Colorado Rapids vs St. Louis CITY SC</li>
            <li>Atlanta United vs San Jose Earthquakes</li>
          </ul>

          <p className="mt-8 font-medium">
            The U.S. Open Cup is now entering its decisive phase. There is no more room for mistakes.
          </p>

          <p>
            NYCFC have finally broken their psychological barrier in the derby. The Colorado Rapids showed just how dangerous and unpredictable this competition can be — even for MLS teams.
          </p>

          <p className="mt-6">
            As the tournament heads toward its conclusion, one thing is clear: reputation, budget, and regular-season form are no guarantee of success. In the Open Cup, every match must be earned.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: April 30, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>
          <Link href="/news" className="text-sm text-gray-500 hover:text-gray-800">Back to news</Link>
        </footer>

      </div>
    </article>
  );
}
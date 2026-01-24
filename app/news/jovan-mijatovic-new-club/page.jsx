'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MijatovicArticle() {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') setCurrentUrl(window.location.href);
  }, []);

  const handleCopyLink = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      alert('Link copied to clipboard!');
    }
  };

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(
    "What’s Happening with Jovan Mijatović?"
  )}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            What’s Happening with Jovan Mijatović?
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-01-24">January 24, 2026</time>
          </div>

          {/* TAGS */}
          <div className="flex flex-wrap items-center gap-2 mt-3">
            
            <Link href="/teams/nycfc" className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full hover:bg-blue-700 transition">
              #NYCFC
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <div className="flex items-center gap-3">
              <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"><FaFacebookF size={18} /></a>
              <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"><FaTwitter size={18} /></a>
              <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"><FaWhatsapp size={18} /></a>
              <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"><FiCopy size={18} /></button>
            </div>
          </div>
        </header>

        {/* Feature Image */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://i.ibb.co/zhFtcJwh/1769286421690.png"
            alt="Jovan Mijatović playing football"
            width={1200}
            height={500}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Credit: Brad Penner/Vecteezy
Copyright: Brad Penner/Vecteezy
          </figcaption>
        </figure>

        {/* Article Content */}
        <section className="prose prose-lg max-w-none space-y-8 mb-9 leading-relaxed">

          <p>
            Jovan Mijatović, the 20-year-old Serbian striker, is still searching for his breakthrough in professional football. After moving from Red Star Belgrade to New York City FC and a loan spell in Belgium, he is now heading to Germany for a new challenge.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">From Red Star to NYCFC</h2>
          <p>
            Mijatović was one of Red Star’s brightest young talents, making 26 appearances and scoring 9 goals between 2022 and 2024. The Belgrade club, a regular participant in the Champions League, projected him as a future star, drawing interest from clubs across Europe.
          </p>
          <p>
            In 2024, he joined NYCFC for a reported €8 million, adding extra pressure to live up to expectations. While he was the focal point of Red Star’s attack, his role in New York was far more limited, constrained by system differences and tactical adjustments.
          </p>
          <p>
            <strong>NYCFC stats (all competitions):</strong><br />
            17 appearances<br />
            1 goal (Leagues Cup vs. FC Cincinnati)<br />
            MLS regular season: 0 goals
          </p>
          <p>
            Limited minutes and MLS’s tactical demands meant Mijatović struggled to show his full potential, highlighting the gap between youth promise and senior professional performance.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loan Spell: Oud-Heverlee Leuven</h2>
          <p>
            In search of regular playing time, Mijatović spent the 2025/26 season on loan at Oud-Heverlee Leuven in Belgium.
          </p>
          <p>
            <strong>Stats (2025/26):</strong><br />
            13 appearances (7 starts, 6 substitute)<br />
            Goals: 0<br />
            Assists: 1<br />
            Shots: 14<br />
            Yellow cards: 2<br />
            Red cards: 0
          </p>
          <p>
            While he gained valuable minutes and experience, the season did not produce standout numbers, leaving questions about his readiness to perform consistently at a higher level.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">A New Challenge: Eintracht Braunschweig</h2>
          <p>
            After Belgium, Mijatović is set for Germany, where he will join Eintracht Braunschweig in the 2. Bundesliga. According to Sky Sport’s Florian Platenberg, the move is a loan with an option to buy:
          </p>
          <ul className="list-disc ml-6">
            <li>Braunschweig will not cover his NYCFC wages</li>
            <li>He is expected to replace Sebastian Polter mid-season</li>
            <li>Medical tests are imminent before joining the squad</li>
          </ul>
          <p>
            The 2. Bundesliga will test Mijatović’s adaptability and tactical awareness in a highly competitive European league. Success here could either earn him a permanent move or a second chance at NYCFC.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Looking Ahead</h2>
          <p>
            Mijatović left Red Star as a teenager for a big-money transfer but struggled to make an impact in New York, scoring just one goal in 15 appearances. His NYCFC contract runs until June 30, 2026, making the upcoming months pivotal for his career.
          </p>
          <p>
            Braunschweig represents a critical opportunity: a chance to regain form, showcase his talent in Europe, and prove he can live up to the promise that once made him one of Serbia’s brightest young forwards.
          </p>
          <p>
            At 20, Mijatović still has time to develop, but he will need consistent minutes, tactical adaptation, and the right environment to fulfill his potential. Germany might just be the reset he needs.
          </p>

        </section>

        {/* Footer */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: January 24, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>
          <div className="flex gap-2">
            <Link href="/news" className="text-sm text-gray-500 hover:text-gray-800">
              Back to news
            </Link>
          </div>
        </footer>

      </div>
    </article>
  );
}

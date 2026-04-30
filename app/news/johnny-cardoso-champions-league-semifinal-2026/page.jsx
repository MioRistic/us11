'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function JohnnyCardosoChampionsLeaguePage() {
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

  const articleTitle = "Johnny Cardoso Writes His Name Into American Soccer History with Composed Champions League Semifinal Debut";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Johnny Cardoso Writes His Name Into American Soccer History with Composed Champions League Semifinal Debut
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
            src="https://assets.goal.com/images/v3/getty-2249616690/crop/MM5DENJTGQ5DCNBSGU5G433XMU5DAORRGMZA====/GettyImages-2249616690.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Johnny Cardoso Atlético Madrid vs Arsenal Champions League Semifinal"
            width={1200}
            height={675}
            className="w-full h-auto object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: David Ramos | Credit: Getty Images | Copyright: 2025 Getty Images
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

          <p>
            On a tense Wednesday night at the Metropolitano, 24-year-old Johnny Cardoso did something only two other Americans had ever done before him: he started a Champions League semifinal.
          </p>

          <p>
            Born in New Jersey, raised in Brazil, and now anchoring the midfield of Diego Simeone’s Atlético Madrid, Cardoso delivered exactly what his manager needed against a dangerous Arsenal side — steel, positional discipline, and quiet reliability.
          </p>

          <p>
            The result was a hard-fought 1-1 draw in the first leg. But the real story, at least from the American perspective, was the kid wearing No. 5 who refused to let the game slip away.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">A Defining Night for American Talent in Europe</h2>
          <p>
            Cardoso played 88 minutes in what was his first start in the competition at this stage. In a first half where Atlético looked leggy and Arsenal threatened to overrun them, the American midfielder was one of the few providing balance.
          </p>
          <p>
            His defining moment came midway through the opening period when he produced a superb last-ditch block to deny Martin Ødegaard a certain goal. That intervention changed the momentum of the tie.
          </p>

          <p>
            “I thought Johnny was excellent,” Simeone said afterward. “He gave us control in the middle. He understands what we need.”
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Growing Into the Game</h2>
          <p>
            After a difficult first half, Atlético adjusted tactically in the second period. Cardoso grew with the game — winning important duels, helping recycle possession under pressure, and providing the defensive foundation that allowed Antoine Griezmann and Julián Álvarez to push forward.
          </p>
          <p>
            While he didn’t register a goal or assist, his work rate and game intelligence earned him solid 6.5–7.0 ratings across major platforms — a very respectable score for a first-time starter in a Champions League semifinal.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Joining an Elite Club</h2>
          <p>
            Cardoso becomes just the third American to start a Champions League semifinal, following DaMarcus Beasley (2005 with PSV) and Christian Pulisic (2021 with Chelsea). That he earned the starting nod after only 60 seconds off the bench in the quarterfinal against Barcelona makes the achievement even more impressive.
          </p>

          <p>
            For the U.S. national team, with the 2026 World Cup on home soil approaching fast, this performance carries huge significance. Cardoso is proving he can handle the highest level of club football.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Griezmann’s Emotional Farewell Chapter</h2>
          <p>
            The night also carried heavy emotional weight for Atlético legend Antoine Griezmann. In what was likely his final home Champions League match at the Metropolitano, the 35-year-old was named man of the match. This summer he heads to MLS and Orlando City — another sign that America’s league continues to attract elite names for one last big stage.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">What Comes Next</h2>
          <p>
            The second leg at the Emirates on May 5 will be significantly tougher. Arsenal at home in a European knockout tie is a different beast. Yet Cardoso has already shown he belongs at this level.
          </p>
          <p className="font-semibold">
            If he continues performing like this, his name could soon be mentioned alongside the very best Americans to ever play in Europe.
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
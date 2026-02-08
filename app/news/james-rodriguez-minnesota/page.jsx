'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function JamesRodriguezArticle() {
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
    "James Rodríguez in Minnesota: A Move with the World Cup in Mind — and the Club’s Identity on the Line"
  )}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            James Rodríguez in Minnesota: a move with the World Cup in mind — and the club’s identity on the line
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-02-06">February 6, 2026</time>
          </div>

          <div className="flex flex-wrap items-center gap-2 mt-3">
            <Link href="/teams/minnesota-united" className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full hover:bg-blue-700 transition">
              #MNUFC
            </Link>
          </div>

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
            src="https://assets.goal.com/images/v3/getty-2162057999/crop/MM5DEMJTGQ5DCMRQGA5G433XMU5DOMR2GE3TS===/GettyImages-2162057999.jpg?auto=webp&format=pjpg&width=1920&quality=60"
            alt="James Rodríguez unveiled by Minnesota United"
            width={1200}
            height={500}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Maddie Meyer | Credit: Getty Images
          </figcaption>
        </figure>

        {/* Article Content */}
        <section className="prose prose-lg max-w-none space-y-8 mb-9 leading-relaxed">

          <p>
            When James Rodríguez walked into Minnesota United’s training facility in St. Paul, the scene felt almost unreal. A player who has won the Champions League, finished as the top scorer at a World Cup, and long embodied the idea of a world-class No. 10 was now beginning a new chapter in MLS.
          </p>

          <p><strong>But this is not a marketing stunt.</strong><br />
          <strong>And it is not a farewell tour.</strong></p>

          <p>
            This is a move with clear logic, a defined timeline, and a major objective: the 2026 World Cup.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">A contract with purpose</h2>

          <p>
            Rodríguez has signed a deal through June 2026, with a club option to extend it through the end of the season. The timing is no coincidence. The Colombian views the next six months as preparation for what could be the final major tournament of his career — and Minnesota see an opportunity to bring in a player whose motivation is unusually high.
          </p>

          <p>
            “When you have open and honest communication with a player of that caliber, the relationship can grow into something more,” sporting director Khalid El-Ahmad said. “Our focus is the World Cup. After that, we’ll talk about the future.”
          </p>

          <p>
            In other words: this is a contract that creates space — but also sets a standard.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Minnesota actually makes sense</h2>

          <p>
            On paper, Minnesota United and James Rodríguez look like opposites. The club has been known for defensive structure, physical duels and discipline. Rodríguez is a creative midfielder, a player of rhythm, space and ideas.
          </p>

          <p>
            But the club is in the middle of a transformation.
          </p>

          <p>
            After the departure of Eric Ramsay and the arrival of Cameron Knowles, Minnesota are trying to redefine their style — from a team that reacts to one that dictates. In that context, Rodríguez is not a luxury. He is a tool.
          </p>

          <p>
            “The quality and experience he brings fit perfectly with the direction we’re going,” El-Ahmad said. “Colombia play pragmatically, but with high pressing and speed. That identity matches what we’re building.”
          </p>

          <p>
            Rodríguez is expected to operate as a classic No. 10 behind the striker, with the freedom to drop deep, connect the lines and control tempo — something Minnesota haven’t previously had in this profile.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Not here to wind down — here to prove himself</h2>

          <p>
            At 34, Rodríguez could have chosen comfort. Instead, he chose competition.
          </p>

          <p>
            “Until the very last day, I’ll give everything. We want to win trophies,” he said at his unveiling.
          </p>

          <p>
            MLS is no longer a league for nostalgia. With players like Messi, Busquets, Müller and others, it has become a place where reputation means nothing without performance.
          </p>

          <p>
            For Rodríguez, this is about relevance — and about earning his place in Colombia’s plans for 2026.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">What this means for Minnesota</h2>

          <p>
            This is the biggest signing in the club’s history — not only in name, but in message.
          </p>

          <p>
            Minnesota have never had a globally recognizable No. 10 around whom the game is built. Now they do.
          </p>

          <p>
            Rodríguez brings more than assists. He brings gravity — opponents will have to adjust to him. He also brings legitimacy — Minnesota are no longer just an organized team. They are becoming a destination.
          </p>

          <p>
            For a club redefining its identity, this is not just a reinforcement.
          </p>

          <p><strong>This is a signal.</strong></p>

          <p>
            For Rodríguez, this is not the end.
          </p>

          <p>
            This is a timeline:<br />
            six months to the World Cup,<br />
            six months to change a team,<br />
            and maybe — a story that lasts longer than planned.
          </p>

        </section>

      


        {/* Footer */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: February 6, 2026</p>
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

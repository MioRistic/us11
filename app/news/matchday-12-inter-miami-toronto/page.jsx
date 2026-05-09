'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function Matchday12InterMiamiToronto() {
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
    "Matchday 12 Opens With a Statement: Messi Produces Goal + Two Assists as Inter Miami Cruises Past Toronto 4-2";

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Matchday 12 Opens With a Statement: Messi Produces Goal + Two Assists as Inter Miami Cruises Past Toronto 4-2
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-05-10">May 10, 2026</time>
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
            src="https://assets.goal.com/images/v3/getty-2275337445/crop/MM5DKMBQGQ5DEOBRGU5G433XMU5DAORSGYYQ====/GettyImages-2275337445.jpg?auto=webp&format=pjpg&width=1920&quality=60"
            alt="Lionel Messi Inter Miami vs Toronto FC"
            width={1200}
            height={675}
            className="w-full h-auto object-cover"
            priority
          />

          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Credit: Getty Images
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

          <p>
            <strong>TORONTO —</strong> Lionel Messi doesn’t do subtle reminders. He delivers statements.
          </p>

      

          <p>
            In the opening match of Matchday 12, Inter Miami put on a masterclass at BMO Field, dismantling Toronto FC 4-2 and sending an early message to the rest of Major League Soccer: the defending champions are operating on another level once again.
          </p>

          <p>
            Messi was, as expected, at the heart of everything — finishing with one goal and two assists in a performance that once again underlined why he remains the most dangerous player in the league.
          </p>

              {/* VIDEO */}
<div className="my-10">
  <h2 className="text-3xl font-bold mb-4">Toronto FC x Inter Miami FC</h2>

  <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/DsKhxWLKDKM"
      title="MLS Matchday 11 Highlights"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  </div>
</div>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            How the Game Unfolded
          </h2>

          

          <p>
            Inter Miami controlled proceedings from the opening whistle and rarely looked in danger of relinquishing that control.
          </p>

          <p>
            Rodrigo De Paul opened the scoring in the 44th minute with a well-taken finish following a slick team move. Luis Suárez made it 2-0 shortly after halftime, with Messi heavily involved in the build-up.
          </p>

          <p>
            Toronto pulled one back through substitute Emilio Aristizábal in the 82nd minute, but any hope of a comeback was swiftly extinguished.
          </p>

          <p>
            Sergio Reguilón added a third for Miami in the 73rd minute, assisted by Messi, before the Argentine superstar capped the evening with a clinical finish of his own just two minutes later.
          </p>

          <p>
            Aristizábal grabbed a second consolation goal for the home side deep in stoppage time, but it changed little. The final scoreline — Inter Miami 4, Toronto FC 2 — told the story of a match that was far more comfortable than the numbers suggested.
          </p>

          <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8">
                      <Image
                        src="https://assets.goal.com/images/v3/getty-2274583818/crop/MM5DGMRYGA5DCOBUGU5G433XMU5DIOJSHIYTMOA=/GettyImages-2274583818.jpg?auto=webp&format=pjpg&width=1920&quality=60"
                        alt="USMNT 2026 Home Jersey"
                        width={1200}
                        height={800}
                        className="w-full h-auto object-cover"
                        priority
                      />
                      <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
                        Getty Images Sport
                      </div>
                    </figure>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Messi’s Masterclass
          </h2>

          <p>
            The raw numbers (one goal, two assists) only begin to tell the tale.
          </p>

          <p>
            Messi dictated the rhythm of the game, created high-quality chance after high-quality chance, and looked capable of unlocking the Toronto defense every time he received the ball.
          </p>

          <p>
            With 10 goal contributions already through just 12 matchdays, the 38-year-old continues to defy age and logic.
          </p>

          <p>
            More importantly, he continues to elevate everyone around him. Suárez looked sharp and clinical, De Paul brought vision and dynamism in midfield, and the entire attacking unit operated with a frightening level of fluidity.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            What This Means for Inter Miami
          </h2>

          <p>
            This was more than just another three points. It was a statement performance on the road against a Toronto side that has traditionally been difficult to break down at home.
          </p>

          <p>With the victory, Inter Miami:</p>

          <ul className="list-disc pl-6 space-y-4 my-6">
            <li>Moved to the top of the Eastern Conference</li>
            <li>Extended their unbeaten run</li>
            <li>Demonstrated they can dominate matches even when not at their absolute best</li>
          </ul>

          <p>
            The attacking trio of Messi, Suárez, and De Paul is rapidly becoming one of the most potent units in the league.
          </p>

          <p>
            The recent addition of Sergio Reguilón at left back has also brought balance and quality to the defensive structure.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            The Bigger Picture
          </h2>

          <p>
            Matchday 12 is barely underway, but Inter Miami has already set the tone for the weekend.
          </p>

          <p>
            While many expected them to be contenders again in 2026, the level of control, efficiency, and depth they are showing this season suggests they are not just here to compete — they are here to dominate.
          </p>

          <p>
            For Toronto, the result exposed familiar issues: defensive fragility and an inability to contain elite attacking talent.
          </p>

          <p>
            Despite a late rally, they were ultimately outclassed by a Miami side operating at a higher level.
          </p>

          <p className="text-xl font-semibold mt-10">
            The champions have spoken. The rest of the league now has 48 hours to respond.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-gray-600">
          <div>
            <p>Published: May 10, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>

          <Link href="/news" className="hover:text-gray-800">
            Back to News
          </Link>
        </footer>

      </div>
    </article>
  );
}
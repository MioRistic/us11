'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function NoahAllenOlympiacos() {
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
    "Noah Allen to Olympiacos? The Greek-American Prospect Facing a Defining Career Decision";

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Noah Allen to Olympiacos? The Greek-American Prospect Facing a Defining Career Decision
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-05-14">May 14, 2026</time>
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
  src="https://cdn1.intermiami.news/uploads/52/2024/10/GettyImages-2148224320-scaled.jpg"
  alt="Noah Allen Inter Miami"
  width={1200}
  height={675}
  className="w-full h-[420px] object-cover"
  priority
/>

          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Azael Rodriguez
 | 
Credit: Getty Images
Copyright: 2024 Getty Images
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

          <p>
            Olympiacos are seriously considering signing Noah Allen, the 22-year-old Greek-American left-back currently at Inter Miami.
          </p>

          <p>
            The player, who qualifies for Greece through his mother, has emerged as a realistic target for the Greek champions as they look to reinforce their defense ahead of next season.
          </p>

          <p>
            However, any potential move to Piraeus would represent a major leap — both in competition level and pressure — for a young defender who has yet to play a single minute of European football.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Current Situation
          </h2>

          <p>
            According to reports from Greece and the United States, Olympiacos are at the forefront of the race, although clubs like Anderlecht, Gent, Sporting CP, and Panathinaikos have also shown interest.
          </p>

          <p>
            Allen’s estimated market value sits between €2-3 million.
          </p>

          <p>
            This season, the versatile 22-year-old has continued his steady development in MLS, featuring primarily as a left-back while showing the ability to play in central defense.
          </p>

          <p>
            His dual citizenship would make the administrative side of any move to Greece relatively smooth.
          </p>

           

          <h2 className="text-3xl font-bold mt-10 mb-4">
            The Appeal and the Risks
          </h2>

          <p>
            On paper, the move has clear attractions:
          </p>

          <ul className="list-disc pl-6 space-y-4 text-lg">
            <li>
              Regular football at a big club
            </li>

            <li>
              European competition
            </li>

            <li>
              The cultural comfort of Greek heritage
            </li>
          </ul>

          <p>
            But the challenges are equally significant — lack of European experience, Inter Miami’s desire to keep him, and the enormous expectations that come with wearing the Olympiacos shirt.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            My View
          </h2>

          <p>
            Olympiacos is one of the biggest clubs in Greece, where the pressure to win titles and compete in Europe is relentless.
          </p>

          <p>
            For a 22-year-old with zero European experience, that environment could prove extremely demanding.
          </p>

          <p>
            In my opinion, staying at Inter Miami currently looks like the most sensible option.
          </p>

          <p>
            There, Allen has stability, regular playing time, and the chance to establish himself as a key player in the defensive line alongside experienced teammates.
          </p>

          <p>
            He can continue his development in a familiar environment while learning from world-class players like Lionel Messi and Rodrigo De Paul.
          </p>

          <p>
            Alternatively, a stepping-stone move to Cyprus could also make sense.
          </p>

          <p>
            In recent years, the Cypriot league has quietly become something of a “mini-MLS in Europe” — a competitive environment that successfully mixes promising young talents with high-profile veteran stars such as Memo Ochoa, Stevan Jovetić, David Luiz, and Aleksandr Kokorin.
          </p>

          <p>
            Clubs like APOEL, Omonia, and AEK Larnaca could offer Allen regular minutes in a more forgiving setting before he eventually takes on a bigger challenge like Olympiacos.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            The Bigger Picture
          </h2>

          <p>
            Greek roots are undoubtedly an advantage, but jumping straight into one of Greece’s most demanding clubs at this stage of his career feels like a high-risk gamble rather than the optimal development move.
          </p>

          <p className="font-semibold text-xl">
            Noah Allen clearly has the talent to play in Europe. The real question is whether now is the right time — and whether Olympiacos is the right first step.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex justify-between text-sm text-gray-600">
          <span>Published: May 14, 2026</span>

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
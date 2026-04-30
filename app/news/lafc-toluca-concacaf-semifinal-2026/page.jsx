'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function LAFCvsTolucaPage() {
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

  const articleTitle = "LAFC Dramatically Defeat Toluca 2-1 in First Leg of 2026 Concacaf Champions Cup Semifinals";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            LAFC Dramatically Defeat Toluca 2-1 in First Leg of 2026 Concacaf Champions Cup Semifinals
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
            src="https://assets.goal.com/images/v3/getty-2183798831/crop/MM5DGMZUGQ5DCOBYGE5G433XMU5DQMRVHI3TS===/GettyImages-2183798831.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="LAFC vs Toluca Concacaf Champions Cup 2026"
            width={1200}
            height={675}
            className="w-full h-auto object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Copyright: Getty Images Sport
          </figcaption>
        </figure>

   

        {/* ARTICLE CONTENT - Full Text */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

          <p>
            LAFC managed to overcome the powerful Mexican side Toluca with a 2-1 victory in the first leg of the 2026 Concacaf Champions Cup semifinals, thanks to a stoppage-time goal from Nkosi Tafari at BMO Stadium.
          </p>

          <p>
            The LAFC center back rose highest to head home a precise assist from South Korean superstar Son Heung-min in the 91st minute, giving his team a crucial advantage ahead of the second leg in Mexico.
          </p>

          <p>
            LAFC took the lead in the 51st minute through Timothy Tillman, who set himself up perfectly before smashing home a vicious volley. Just three minutes later, the hosts thought they had doubled their advantage, but Jacob Shaffelburg’s far-post finish was disallowed after a VAR review. Toluca equalized in the 73rd minute with a goal from Jesús Angulo.
          </p>

          <p>
            The match was heading toward a frustrating 1-1 draw, but LAFC snatched the lead back in the dying seconds thanks to Tafari’s header.
          </p>

          <p>
            Hugo Lloris was also outstanding, producing a crucial double-save just before halftime to keep the score level and allow LAFC to stay in the game.
          </p>

            {/* YOUTUBE VIDEO */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Match Highlights</h3>
          <div className="aspect-video w-full bg-black rounded-2xl overflow-hidden shadow-md">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/nGHicBXTCVs"
              title="LAFC vs Toluca - Concacaf Champions Cup Semifinal Highlights"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

          <h2 className="text-3xl font-bold mt-10 mb-4">Goals</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>51' – LAFC – Timothy Tillman</li>
            <li>73' – Toluca – Jesús Angulo</li>
            <li>90+1' – LAFC – Nkosi Tafari</li>
          </ul>

          <h2 className="text-3xl font-bold mt-10 mb-4">Three Key Takeaways</h2>

          <h3 className="text-2xl font-bold">The Big Picture</h3>
          <p>
            LAFC are in a solid position heading into the second leg in Mexico, albeit with a very narrow advantage. They showed they can compete with the back-to-back Liga MX champions. They will also welcome back star forward Denis Bouanga for the decisive return leg after he missed this match due to yellow card accumulation. The winner of this tie will face Nashville SC or Tigres UANL in the final on May 30.
          </p>

          <h3 className="text-2xl font-bold">Moment of the Match</h3>
          <p>
            Without the late Son-to-Tafari connection in the 91st minute, LAFC would be traveling to Mexico at a disadvantage on away goals.
          </p>

          <h3 className="text-2xl font-bold">Man of the Match</h3>
          <p>
            Hugo Lloris. His double-save in the 44th minute prevented Toluca from taking the lead and potentially seizing control of the tie.
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
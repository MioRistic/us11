'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function GriezmannOrlandoDebut() {
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

  const articleTitle = "Antoine Griezmann Announces Himself Immediately: Historic Debut Goal Powers Orlando City to 4-0 Thrashing";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Antoine Griezmann scores on MLS debut! 🇫🇷 Orlando City 4-0 San Jose')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Antoine Griezmann Announces Himself Immediately: Historic Debut Goal Powers Orlando City to 4-0 Thrashing
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-07-25">July 25, 2026</time>
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
            src="https://assets.goal.com/images/v3/getty-2287264302/crop/MM5DENRRGY5DCNBXGI5G433XMU5DEOBTHIYTENI=/GettyImages-2287264302.jpg?auto=webp&format=pjpg&width=1920&quality=60"
            alt="Antoine Griezmann Orlando City debut"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Copyright: Getty Images
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8 text-gray-800">
          <p>
            Some debuts take time. Antoine Griezmann needed less than 50 minutes.
          </p>
          <p>
            In his first official match for Orlando City SC, the French superstar scored a trademark goal and delivered exactly the moment Lions fans had been waiting for, helping his new club demolish the San Jose Earthquakes 4-0 on the road Wednesday night.
          </p>
          <p>
            It was clinical, stylish, and entirely fitting for a player who has spent the last decade starring for Atlético Madrid, Barcelona, and France.
          </p>

          {/* VIDEO */}
          <div className="my-10">
            <h2 className="text-3xl font-bold mb-4">
              Watch: Griezmann’s Debut Goal
            </h2>
            <div className="aspect-video w-full bg-black rounded-2xl overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/KNeqKlesTO0"
                title="Antoine Griezmann MLS Debut Goal"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Moment Arrives
          </h2>
          <p>
            Griezmann entered the game already in strong form after scoring in two pre-MLS friendlies. That confidence showed. In the 48th minute, Justin Ellis intercepted a pass in the attacking third and quickly found his new strike partner. Griezmann slipped past three defenders with that familiar low center of gravity and drilled a precise low shot inside the near post.
          </p>
          <p>
            3-0. Cue the signature celebration.
          </p>
          <p>
            The goal was more than just a debut strike. It was the <strong>300th club goal</strong> of Griezmann’s career — a remarkable milestone for a player who already sits as Atlético Madrid’s all-time leading scorer with 212 goals.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            More Than Just One Man
          </h2>
          <p>
            While Griezmann provided the highlight, this was a complete team performance. Eduard Atuesta was outstanding, recording three assists and earning Man of the Match honors. Iván Angulo and Braian Ojeda also delivered key contributions as Orlando controlled the game from start to finish against a Western Conference contender.
          </p>
          <p>
            The result carries real weight in the Eastern Conference table. Orlando entered the night in 13th place with just 14 points. They left San Jose in 10th, only two points behind D.C. United for the final playoff spot.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Belief Returns
          </h2>
          <p>
            For a club that has spent much of the season searching for consistency, the combination of a statement away win and the arrival of a genuine world-class talent feels significant.
          </p>
          <p>
            Griezmann didn’t just score on debut — he scored the kind of goal that immediately raises expectations. At 35, he still moves with the same intelligence and timing that made him one of Europe’s most reliable attackers for over a decade.
          </p>
          <p>
            Whether this is the start of a genuine playoff push remains to be seen. But after Wednesday night in San Jose, one thing is already clear:
          </p>
          <p className="font-semibold text-lg text-[#020617] mt-8">
            Orlando City’s biggest signing in years has arrived — and he didn’t waste any time announcing himself.
          </p>
        </section>

        {/* NEXT FOR YOU */}
        <section className="mt-16 border-t pt-8 bg-white">
          <h2 className="text-4xl font-extrabold text-[#111] mb-8 text-center">
            Next For You
          </h2>

          <div className="grid md:grid-cols-2 gap-6 px-4 md:px-8">
            <Link href="/news/suarez-lewandowski-debut" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">1</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Suárez Spoils Lewandowski’s MLS Debut as Inter Miami Edge Chicago 3-2
                </h3>
              </div>
            </Link>

            <Link href="/news/nycfc-pulisic" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">2</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  NYCFC CEO Brad Sims Sends Clear Message: “We Want Christian Pulisic”
                </h3>
              </div>
            </Link>

            <Link href="/news/furuhashi" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">3</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  LA Galaxy Sign Kyōgo Furuhashi: A Calculated Gamble on Proven Pedigree
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
            <p>Published: July 25, 2026</p>
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
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function IraolaNYCFCLiverpool() {
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

  const articleTitle =
    "Andoni Iraola’s Journey from NYCFC to Liverpool Manager: How New York Shaped the New Reds Boss";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Andoni Iraola’s path from NYCFC to Liverpool manager ⚽️')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Andoni Iraola’s Journey from NYCFC to Liverpool Manager: How New York Shaped the New Reds Boss
          </h1>
          <div className="flex items-center gap-3 text-sm text-gray-600 mb-6">
            <span>By Mio Ristić</span>
            <span>•</span>
            <span>July 29, 2026</span>
          </div>

          {/* SOCIAL SHARE */}
          <div className="flex items-center gap-3 mb-8">
            <a
              href={facebookShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href={twitterShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition"
            >
              <FaTwitter size={16} />
            </a>
            <a
              href={whatsappShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition"
            >
              <FaWhatsapp size={16} />
            </a>
            <button
              onClick={handleCopyLink}
              className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center hover:bg-gray-300 transition"
            >
              <FiCopy size={16} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA08VnYa7lfdOryp81vNUqtJsGAv1s0ImJkYnD0JG0EMzUzNB8Qanx-mo&s=10"
            alt="Andoni Iraola NYCFC Liverpool"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Getty Images
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">

          <p>
            Andoni Iraola returns to Yankee Stadium today as head coach of Liverpool. Ten years ago, this was the place where he finished his playing career and quietly began shaping the coach he would become.
          </p>

          <p>
            Between 2015 and 2016, Iraola spent the final chapter of his professional life at New York City FC. He arrived as a seasoned right-back from Athletic Club, where he had made more than 500 appearances and captained the side. In New York he lined up alongside Frank Lampard, Andrea Pirlo and David Villa. The environment was star-studded, but those who shared the dressing room remember Iraola less for his name and more for how he thought about the game.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            A Player Who Already Thought Like a Coach
          </h2>

          <p>
            Former teammates and coaches frequently described Iraola as unusually analytical for a player still active. Andrea Pirlo publicly praised his technical intelligence. Others simply said it felt like having an extra coach on the field. He asked questions, studied details, and already carried the habits of someone preparing for life after football.
          </p>

          <p>
            Iraola has since confirmed that New York was the moment he seriously began planning his coaching path. While still playing, he started viewing matches and training sessions differently. The experience of sharing a locker room with elite veterans accelerated that shift.
          </p>

          <p>
            He retired in November 2016 after just over a season and a half with NYCFC. Within two years he was managing AEK Larnaca in Cyprus. From there the route ran through Mirandés, Rayo Vallecano, Bournemouth, and finally Liverpool.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            An Earlier Liverpool Connection
          </h2>

          <p>
            The link with Liverpool actually predates his time in New York. In late 2013 the club monitored him as a potential right-back under Brendan Rodgers. After careful consideration, Iraola chose to stay at Athletic Club. What stood out to Liverpool’s recruitment staff was the letter he sent afterward — polite, humble, and unusually thoughtful. Those who received it never forgot the gesture.
          </p>

          <p>
            More than a decade later, the same club that once wanted him as a player has now appointed him as head coach.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Full Circle in the Bronx
          </h2>

          <p>
            Today Iraola walks back into Yankee Stadium in a different role. The stadium that once marked the end of his playing days now marks the beginning of his first pre-season as Liverpool manager. For those who knew him in New York, the appointment feels consistent with the player they remember: quiet, demanding of himself, and always thinking one step ahead.
          </p>

          <p className="font-semibold text-lg mt-10">
            New York City FC was never the longest chapter of Iraola’s career. But it may have been one of the most important. It was the place where the player finished and the coach began to take shape.
          </p>

        </section>

        {/* READ NEXT */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Next For You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/news/olwethu-makhanya-rangers" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">1</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Rangers Close In on Deal for Philadelphia Union Defender Olwethu Makhanya
                </h3>
              </div>
            </Link>

            <Link href="/news/mls-all-star-game-2026" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">2</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  MLS All-Star Game 2026: Missing Messi But Riding Post-World Cup Momentum
                </h3>
              </div>
            </Link>

            <Link href="/news/chicharito-dallas" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">3</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Chicharito Returns to MLS with FC Dallas
                </h3>
              </div>
            </Link>

            <Link href="/news/vincent-janssen-signing" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">4</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Dutch Forward Vincent Janssen Linked with MLS Return
                </h3>
              </div>
            </Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: July 29, 2026</p>
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
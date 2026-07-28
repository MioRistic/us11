'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function VincentJanssenPortland() {
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

  const articleTitle = "Portland Timbers Set to Sign Dutch Striker Vincent Janssen";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Portland Timbers Set to Sign Dutch Striker Vincent Janssen
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-07-28">July 28, 2026</time>
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
            src="https://assets.goal.com/images/v3/imago-sport-1077788800/crop/MM5DGNJVGE5DCOJZG45G433XMU5DAORRHA2Q====/imago-image.jpeg;%20charset=utf-8?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Vincent Janssen Portland Timbers"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Credit: Imago
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6 text-gray-800">

          <p>
            The Portland Timbers are closing in on a smart, low-risk addition to their attack.
          </p>

          <p>
            According to multiple reports, including The Athletic’s Tom Bogert and Dutch outlet Voetbal International, the club has agreed to sign 32-year-old Dutch forward Vincent Janssen as a free agent. The deal will not count as a Designated Player slot.
          </p>

          <p>
            Janssen arrives after four productive seasons at Royal Antwerp, where he served as captain and contributed 13 goals and 7 assists last season. The former Tottenham and Monterrey striker becomes available after his contract in Belgium expired this summer.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Why This Makes Sense for Portland
          </h2>

          <p>
            At 32, Janssen is no longer the high-upside prospect Tottenham once paid big money for. But he has reinvented himself in Belgium as a reliable, experienced No. 9 who can hold the ball up, finish chances, and provide leadership.
          </p>

          <p>
            For the Timbers, this is a classic value signing. They get a proven goal scorer without sacrificing a DP spot, adding depth and competition in the forward line. It also gives them a veteran presence who understands the physical demands of MLS after his time in Liga MX with Monterrey.
          </p>

          <p>
            Janssen has long expressed interest in moving to the United States, partly for family reasons. His wife is Mexican-American, and the couple has previously spoken about eventually settling in North America.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What He Brings
          </h2>

          <p>
            • Strong aerial presence and hold-up play<br />
            • Clinical finishing inside the box<br />
            • Leadership and experience as a captain<br />
            • Recent form that shows he still has plenty left in the tank
          </p>

          <p>
            He is not expected to be the primary focal point of the attack, but rather a quality option who can rotate and contribute consistently over the second half of the season.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Bottom Line
          </h2>

          <p>
            This is not a flashy, headline-grabbing move in the mold of Griezmann or Lewandowski. It is, however, a pragmatic and intelligent one.
          </p>

          <p>
            Portland continue to build a competitive roster with targeted additions rather than pure star power. If Janssen can replicate even a portion of his Antwerp form, the Timbers will have secured one of the better non-DP forwards available this summer.
          </p>

          <p className="font-semibold text-lg mt-8">
            An official announcement is expected in the coming days.
          </p>

        </section>

        {/* NEXT FOR YOU */}
        <section className="mt-16 border-t pt-8 bg-white">
          <h2 className="text-4xl font-extrabold text-[#111] mb-8 text-center">
            Next For You
          </h2>

          <div className="grid md:grid-cols-2 gap-6 px-4 md:px-8">
            <Link href="/news/three-stars-first-impressions" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">1</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Three Stars, Three Debuts: First Impressions of MLS’s Newest Global Icons
                </h3>
              </div>
            </Link>

            <Link href="/news/berterame-injury-update" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">2</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Inter Miami’s Germán Berterame Discharged After Scary Head Collision
                </h3>
              </div>
            </Link>

            <Link href="/news/messi-all-star-absence" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">3</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Why Lionel Messi Will Avoid Punishment for Missing the 2026 MLS All-Star Game
                </h3>
              </div>
            </Link>

            <Link href="/news/suarez-lewandowski-debut" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">4</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Suárez Spoils Lewandowski’s MLS Debut as Inter Miami Edge Chicago 3-2
                </h3>
              </div>
            </Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: July 28, 2026</p>
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
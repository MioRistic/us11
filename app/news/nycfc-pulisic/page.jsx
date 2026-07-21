'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function PulisicNYCFC() {
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

  const articleTitle = "NYCFC CEO Brad Sims sends clear message: “We want Christian Pulisic”";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('NYCFC CEO: “We want Christian Pulisic” ⚽')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            NYCFC CEO Brad Sims Sends Clear Message: “We Want Christian Pulisic”
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-07-21">July 21, 2026</time>
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
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://assets.goal.com/images/v3/getty-2281625986/crop/MM5DEMJXGA5DCMRSGE5G433XMU5DAORRGAZQ====/GettyImages-2281625986.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Christian Pulisic NYCFC"
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
            Even as Christian Pulisic was still processing the United States’ Round of 16 exit at the 2026 World Cup, the rumor mill back home was already spinning at full speed.
          </p>

          <p>One club, in particular, has made its interest loud and clear.</p>

          <p>
            Speaking at a public event in New York last Thursday, New York City FC CEO <strong>Brad Sims</strong> left little doubt about the club’s long-term ambitions regarding the USMNT captain.
          </p>

          <blockquote className="border-l-4 border-[#020617] pl-6 italic text-xl text-gray-700 my-8">
            “We believe Christian wants to play in MLS one day and wants to come back home. Whenever that time comes, we would hope and expect that New York City FC would be very high on his list.”
          </blockquote>

          <p className="font-medium">A statement that carries weight.</p>

          <p>
            While Pulisic remains under contract at AC Milan — and the Italian club has repeatedly stated he is not for sale — Sims’ comments represent the most direct public overture yet from any MLS club for the 27-year-old attacker.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Stadium Factor
          </h2>
          <p>
            There is another layer to NYCFC’s interest. The club is scheduled to open its long-awaited new stadium on July 17, 2027. Sims clearly envisions Pulisic as the face of that new era, much like Lionel Messi became the face of Inter Miami.
          </p>

          <blockquote className="border-l-4 border-[#020617] pl-6 italic text-xl text-gray-700 my-8">
            “If you ask any of my 29 counterparts across the league if they would be interested in having Christian Pulisic on their team, I’m pretty sure you’d get 29 yeses.”
          </blockquote>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Reality Check
          </h2>
          <p>
            For all the optimism coming out of New York, the road to bringing Pulisic back to MLS is far from straightforward. AC Milan has no intention of selling him this summer, and Pulisic himself has never publicly expressed a desire to return to Major League Soccer at this stage of his career.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Bigger Picture
          </h2>
          <p>
            Pulisic has always said he wants to finish his career in a way that means something to him and to American soccer. Whether that includes a homecoming — and whether that homecoming happens in New York — remains one of the more intriguing storylines heading into 2027.
          </p>

          <p className="font-bold text-xl mt-8">
            For now, NYCFC has planted its flag firmly in the ground.
          </p>
        </section>

        {/* NEXT FOR YOU */}
        <section className="mt-16 border-t pt-8 bg-white">
          <h2 className="text-4xl font-extrabold text-[#111] mb-8 text-center">
            Next For You
          </h2>

          <div className="grid md:grid-cols-2 gap-6 px-4 md:px-8">
            <Link href="/news/spain-world-cup-victory" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">1</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Spain Won the FIFA World Cup: Ferran Torres Fires Spain to Historic Victory Over Argentina
                </h3>
              </div>
            </Link>

            <Link href="/news/el-traffico-son-return" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">2</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Son Heung-Min’s Statement Goal in LAFC’s El Tráfico Rout: A Triumphant Return
                </h3>
              </div>
            </Link>

            <Link href="/news/top-10-mls-transfers-2026" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">3</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Top 10 Most Interesting Summer Transfers in MLS
                </h3>
              </div>
            </Link>

            <Link href="/news/cremaschi-parma-permanent" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">4</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Benjamin Cremaschi’s Move to Parma Made Permanent
                </h3>
              </div>
            </Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: July 21, 2026</p>
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
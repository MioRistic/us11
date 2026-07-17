'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function ChicagoFireMatchPostponed() {
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

  const articleTitle = "Chicago Fire vs Vancouver Whitecaps Postponed as Hazardous Air Quality Delays Robert Lewandowski's MLS Debut";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent("Chicago Fire vs Vancouver postponed due to hazardous air quality – Lewandowski debut delayed")}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Chicago Fire vs Vancouver Whitecaps Postponed as Hazardous Air Quality Delays Robert Lewandowski&apos;s MLS Debut
          </h1>
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span>July 16, 2026</span>
            <span>By Mio Ristić</span>
          </div>

          {/* SOCIAL SHARING */}
          <div className="flex items-center gap-4 mt-6">
            <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition">
              <FaFacebookF size={22} />
            </a>
            <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-black text-white hover:opacity-80 transition">
              <FaTwitter size={22} />
            </a>
            <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[#25D366] text-white hover:opacity-80 transition">
              <FaWhatsapp size={22} />
            </a>
            <button
              onClick={handleCopyLink}
              className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
              title="Copy link"
            >
              <FiCopy size={22} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://i.ibb.co/xSpmFW5m/im-45660188.avif"
            alt="Robert Lewandowski Chicago Fire"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Credit: Michael Nagle/Bloomberg News
          </div>
        </figure>

        <section className="prose prose-lg max-w-none leading-relaxed space-y-8 text-gray-800">

          <p>
            Robert Lewandowski will have to wait a little longer for his long-awaited MLS debut after Thursday night&apos;s clash between Chicago Fire and Vancouver Whitecaps was postponed due to hazardous air quality in Chicago.
          </p>

          <p>
            Smoke from Canadian wildfires pushed the city&apos;s Air Quality Index into the &quot;Hazardous&quot; category, forcing local authorities to shut public beaches and swimming pools while cancelling all outdoor activities that could not be relocated indoors. MLS subsequently decided to postpone the fixture at Soldier Field.
          </p>

          <p>
            The match was set to mark Lewandowski&apos;s first MLS appearance following his summer move from Barcelona. The Polish striker was expected to face Western Conference leaders Vancouver, who are captained by his former Bayern Munich teammate Thomas Müller.
          </p>

          <p>
            There was also an intriguing family storyline, with Chicago head coach Gregg Berhalter preparing to face his son, Sebastian Berhalter, the Vancouver midfielder and U.S. international.
          </p>

          <p>
            MLS has yet to confirm a new date for the fixture, although reports suggest the game could be rescheduled for early October.
          </p>

          <p>
            The postponement is an untimely setback for the league, which had hoped to build momentum after the World Cup break with a packed slate of marquee fixtures scheduled for Thursday and Friday.
          </p>

        </section>

       <section className="mt-16 border-t pt-8 bg-white">
  <h2 className="text-4xl font-extrabold text-[#111] mb-8 text-center">
    Next For You
  </h2>

  <div className="grid md:grid-cols-2 gap-6 px-4 md:px-8">

    <Link
      href="/news/top-10-mls-transfers-2026"
      className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md"
    >
      <div className="flex items-center gap-8">
        <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">
          1
        </span>

        <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
          Top 10 Most Interesting Summer Transfers in MLS
        </h3>
      </div>
    </Link>

    <Link
      href="/news/cremaschi-parma-permanent"
      className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md"
    >
      <div className="flex items-center gap-8">
        <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">
          2
        </span>

        <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
          Benjamin Cremaschi&apos;s Move to Parma Made Permanent
        </h3>
      </div>
    </Link>

    <Link
      href="/news/griezmann-orlando-debut"
      className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md"
    >
      <div className="flex items-center gap-8">
        <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">
          3
        </span>

        <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
          Antoine Griezmann Officially Arrives in Orlando
        </h3>
      </div>
    </Link>

     

  </div>
</section>
  


        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: July 16, 2026</p>
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
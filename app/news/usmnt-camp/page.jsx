'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function USMNTGreatParkBasePage() {
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
    "USMNT Sets Up World Cup Base in Orange County: Great Park Becomes America’s Home for 2026";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;

  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    currentUrl
  )}&text=${encodeURIComponent(
    'USMNT officially establishes its 2026 World Cup headquarters at Great Park in Orange County 🇺🇸⚽'
  )}`;

  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    articleTitle + ' ' + currentUrl
  )}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            USMNT Sets Up World Cup Base in Orange County: Great Park Becomes America’s Home for 2026
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-06-09">June 9, 2026</time>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <a
              href={facebookShare}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80"
            >
              <FaFacebookF size={20} />
            </a>

            <a
              href={twitterShare}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-black text-white hover:opacity-80"
            >
              <FaTwitter size={20} />
            </a>

            <a
              href={whatsappShare}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80"
            >
              <FaWhatsapp size={20} />
            </a>

            <button
              onClick={handleCopyLink}
              className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300"
            >
              <FiCopy size={20} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Championship_Soccer_Stadium_NW_View_2024-08-03.jpg/1280px-Championship_Soccer_Stadium_NW_View_2024-08-03.jpg"
            alt="USMNT Great Park Sports Complex Irvine"
            width={1200}
            height={675}
            className="w-full h-auto object-cover object-center"
            priority
          />

          <figcaption className="text-xs text-gray-400 px-3 py-2">
            US Soccer / Great Park Sports Complex
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

          <p>
            IRVINE, California — With the 2026 FIFA World Cup just days away, the United States Men’s National Team has officially moved into its tournament headquarters at the Great Park Sports Complex in Orange County.
          </p>

          <p>
            This sprawling, state-of-the-art facility in Irvine will serve as the USMNT’s home for the duration of the competition — a centralized, high-performance base designed to give Mauricio Pochettino’s side every possible advantage on home soil.
          </p>

          <p>
  This sprawling, state-of-the-art facility in Irvine will serve as the USMNT’s home for the duration of the competition — a centralized, high-performance base designed to give Mauricio Pochettino’s side every possible advantage on home soil.
</p>

{/* VIDEO */}
<div className="my-10">
  <h2 className="text-3xl font-bold mb-4">
    USMNT Training at Great Park
  </h2>

  <div className="relative w-full overflow-hidden rounded-2xl shadow-lg aspect-video">
    <iframe
      src="https://www.youtube.com/embed/hQRg5DySdQE"
      title="USMNT Great Park Training"
      className="absolute inset-0 w-full h-full"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  </div>
</div>



          <h1 className="text-3xl font-bold mt-10 mb-4">
            Why Great Park?
          </h1>

          <p>
            The decision to set up camp at Great Park was made months ago, and it is already looking like a masterstroke.
          </p>

          <p>
            The complex boasts multiple full-size natural grass pitches, elite recovery and medical facilities, and a level of privacy that top national teams demand.
          </p>

          <p>
            Crucially, it sits just a 45-minute drive from SoFi Stadium in Los Angeles, where the USMNT will play two of their three group-stage matches.
          </p>

          <p>
            That proximity removes unnecessary travel fatigue and allows the team to maintain consistency in training and preparation.
          </p>

          <p>
            The squad arrived in Irvine at the beginning of June and has already logged several closed-door sessions.
          </p>

          <p>
            On Saturday, June 8, they held an open training session at Championship Soccer Stadium inside the complex, drawing more than 5,500 fans — an early and encouraging sign of the home support they can expect throughout the tournament.
          </p>

          <h1 className="text-3xl font-bold mt-10 mb-4">
            A Controlled Environment
          </h1>

          <p>
            For Pochettino and his staff, controlling every variable has been a major priority during this home World Cup cycle.
          </p>

          <p>
            Having a calm, high-quality base away from the chaos of central Los Angeles gives the players the best chance to focus, recover, and fine-tune their tactics.
          </p>

          <p>
            Players have spoken positively about the facilities, the Southern California weather, and the quiet environment that Great Park provides.
          </p>

          <p>
            In a tournament where small details can make a significant difference, this kind of setup matters.
          </p>

          <h1 className="text-3xl font-bold mt-10 mb-4">
            What It Means for the USMNT
          </h1>

          <p>
            By establishing a true home base in Orange County, the USMNT is attempting to create familiarity and stability as they navigate the pressures of a home World Cup.
          </p>

          <p>
            The team will remain at Great Park between matches, using it as a sanctuary while traveling only when necessary for games.
          </p>

          <p>
            For American supporters, particularly those in Southern California, it also presents a rare opportunity.
          </p>

          <p>
            Some training sessions will be open to the public, offering fans a chance to see the national team up close during the biggest sporting event the country has ever hosted.
          </p>

          <h1 className="text-3xl font-bold mt-10 mb-4">
            The Journey Begins
          </h1>

          <p>
            The journey begins in earnest on June 12, when the USMNT faces Paraguay in their Group D opener at SoFi Stadium.
          </p>

          <p>
            Until then, Great Park — for the next several weeks at least — is America’s soccer capital.
          </p>

          <p className="font-semibold text-xl">
            For Pochettino’s squad, everything now points toward one objective: making history on home soil.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: June 9, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>

          <Link
            href="/news"
            className="text-sm text-gray-500 hover:text-gray-800"
          >
            Back to news
          </Link>
        </footer>

      </div>
    </article>
  );
}
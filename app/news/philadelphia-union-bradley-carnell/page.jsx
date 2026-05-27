'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function PhiladelphiaUnionCarnellPage() {
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
    "Philadelphia Union Fire Bradley Carnell One Season After Winning Supporters’ Shield";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;

  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(
    'Philadelphia Union have fired Bradley Carnell just one year after winning the Supporters’ Shield 😳⚽'
  )}`;

  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Philadelphia Union Fire Bradley Carnell One Season After Winning Supporters’ Shield
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-05-27">May 27, 2026</time>
          </div>

          {/* SHARE BUTTONS */}
          <div className="flex items-center gap-4 mt-4">
            <a
              href={facebookShare}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Facebook"
              className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"
            >
              <FaFacebookF size={20} />
            </a>

            <a
              href={twitterShare}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Twitter"
              className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"
            >
              <FaTwitter size={20} />
            </a>

            <a
              href={whatsappShare}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on WhatsApp"
              className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"
            >
              <FaWhatsapp size={20} />
            </a>

            <button
              onClick={handleCopyLink}
              aria-label="Copy link"
              className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"
            >
              <FiCopy size={20} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://assets.goal.com/images/v3/getty-2248141870/crop/MM5DENRWGA5DCNBZGY5G433XMU5DAORRGM4A====/GettyImages-2248141870.jpg?auto=webp&format=pjpg&width=1920&quality=60"
            alt="Bradley Carnell Philadelphia Union"
            width={1200}
            height={675}
            className="w-full h-auto object-cover object-center"
            priority
          />

          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Copyright: Getty Images
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

          <p>
            The Philadelphia Union have fired head coach Bradley Carnell, sources briefed on the situation told The Athletic.
          </p>

          <p>
            The decision comes just one season after Carnell guided the club to its first-ever Supporters’ Shield and earned MLS Coach of the Year honors.
          </p>

          <p className="font-semibold text-xl">
            It’s one of the most shocking coaching changes of the 2026 MLS season.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            A Stunning Collapse
          </h2>

          <p>
            Philadelphia currently sit bottom of the overall MLS standings with just seven points from 15 matches.
          </p>

          <p>
            The Union hold a brutal 1-10-4 record heading into the extended World Cup break and have struggled badly throughout the campaign.
          </p>

          <p>
            Confidence, attacking identity, and defensive organization have all disappeared from a team that looked elite only a year ago.
          </p>

          <p>
            Carnell arrived in 2025 and immediately transformed the Union into one of MLS’s most aggressive and disciplined sides.
          </p>

          <p className="font-semibold">
            Twelve months later, the same project has completely unraveled.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Winter Departures Hurt Philadelphia
          </h2>

          <p>
            A major reason behind the decline can be traced to the club’s difficult winter roster rebuild.
          </p>

          <p>
            Philadelphia — still operating with one of the league’s lowest payrolls according to MLS Players Association data — lost several key starters during the offseason.
          </p>

          <ul className="list-disc pl-6 space-y-4">
            <li>Kai Wagner — transferred to Birmingham City</li>
            <li>Tai Baribo — moved to D.C. United</li>
            <li>Jakob Glesnes — joined LA Galaxy</li>
          </ul>

          <p>
            Those departures created major gaps across the spine of the squad that were never fully replaced.
          </p>

          <p>
            The team’s lack of depth and attacking quality has become increasingly obvious throughout the season.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Academy Vision vs Immediate Results
          </h2>

          <p>
            Philadelphia’s long-term strategy remains heavily centered around youth development, academy investment, and sustainable roster building.
          </p>

          <p>
            Around MLS, the Union continue to receive praise for their infrastructure and player pathway model.
          </p>

          <p>
            But the on-field reality in 2026 has been brutal.
          </p>

          <p className="font-semibold">
            What was supposed to be a consolidation year instead became a full-blown crisis.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Another MLS Coaching Casualty
          </h2>

          <p>
            Carnell’s dismissal continues the growing trend of rapid coaching turnover across MLS this season.
          </p>

          <p>
            Even managers with recent success are receiving little patience once results collapse.
          </p>

          <p>
            The coaching carousel has already claimed multiple high-profile names in 2026, and Philadelphia has now joined that list.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            What Happens Next?
          </h2>

          <p>
            The Union will now begin searching for a new head coach during the 2026 FIFA World Cup break.
          </p>

          <p>
            Club leadership hopes the pause will provide an opportunity to reset mentally, tactically, and structurally before MLS resumes in July.
          </p>

          <p className="font-semibold text-xl">
            Salvaging the season now becomes the primary objective.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: May 27, 2026</p>
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
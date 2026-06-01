'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function USMNTSenegalFriendlyPage() {
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
    "USMNT Builds World Cup Momentum With Bounce-Back 3-2 Win Over Senegal";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;

  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(
    'USMNT defeats Senegal 3-2 as Pulisic and Balogun shine ahead of the 2026 World Cup 🇺🇸⚽'
  )}`;

  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            USMNT Builds World Cup Momentum With Bounce-Back 3-2 Win Over Senegal
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-05-31">May 31, 2026</time>
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
            src="https://assets.goal.com/images/v3/getty-2279124591/crop/MM5DGMZTG45DCOBXG45G433XMU5DAORRGY4Q====/GettyImages-2279124591.jpg?auto=webp&format=pjpg&width=1920&quality=60"
            alt="USMNT vs Senegal"
            width={1200}
            height={675}
            className="w-full h-auto object-cover object-center"
            priority
          />

          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Jamie Squire
 | 
Credit: Getty Images
Copyright: 2026 Getty Images
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

          <p>
            CHARLOTTE, N.C. — The United States men’s national team needed a statement performance ahead of the 2026 FIFA World Cup.
          </p>

          <p>
            On Sunday night at Bank of America Stadium, they delivered exactly that.
          </p>

          <p>
            In an entertaining end-to-end friendly, the USMNT came from behind to defeat Senegal 3-2 and gain valuable momentum heading into the tournament.
          </p>

          <p className="font-semibold text-xl">
            After disappointing results in March, Mauricio Pochettino’s side finally provided reasons for optimism.
          </p>

          {/* VIDEO */}
<div className="my-10">
  <h2 className="text-3xl font-bold mb-4">
    USMNT Highlights vs Senegal
  </h2>

  <div className="relative w-full overflow-hidden rounded-2xl shadow-lg aspect-video">
    <iframe
      src="https://www.youtube.com/embed/hNdTeeNCiG8"
      title="USMNT vs Senegal Highlights"
      className="absolute inset-0 w-full h-full"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  </div>
</div>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Pochettino Pleased With Progress
          </h2>

          <p>
            Following the match, head coach Mauricio Pochettino emphasized the importance of building confidence and positive momentum.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic">
            “It was important to get good feelings. We are still a little bit short in our preparation, but I think we are going in a good direction.”
          </blockquote>

          <p>
            The performance represented a significant improvement compared to recent defeats against Belgium and Portugal.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Pulisic Ends Goal Drought
          </h2>

          <p>
            Christian Pulisic was one of the standout performers, ending a scoring drought that stretched back to November 2025.
          </p>

          <p>
            The US captain looked sharp throughout the evening and played a key role in the attacking buildup.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic">
            “It’s just great to score again. Hopefully people can stop talking about it. I feel great, and I’m really proud of the performance the guys put in today.”
          </blockquote>

          <p>
            The goal could provide an important confidence boost as the World Cup rapidly approaches.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Pepi Makes His Case
          </h2>

          <p>
            Ricardo Pepi took full advantage of a rare starting opportunity, helping create both of the Americans’ opening goals.
          </p>

          <p>
            With competition fierce at striker, Pepi delivered exactly the type of performance needed to strengthen his case.
          </p>

          <p>
            Folarin Balogun, meanwhile, came off the bench and scored the winning goal to remind everyone why he remains a favorite to lead the line.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic">
            “It’s healthy competition. We both want to play, but at the end of the day it’s the team that comes first. We have to push each other.”
          </blockquote>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Defensive Issues Still Visible
          </h2>

          <p>
            While the attack looked encouraging, defensive concerns remain unresolved.
          </p>

          <p>
            Senegal star Sadio Mané scored twice, exposing vulnerabilities in transition and capitalizing on defensive mistakes.
          </p>

          <p>
            The first goal arrived following a dangerous counterattack, while the second came after sloppy defending early in the second half.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic">
            “In the way that we concede the goals, I think we need to improve. But overall, it was a positive day.”
          </blockquote>

          <p>
            Pochettino will undoubtedly focus on tightening the back line before the tournament begins.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Looking Ahead
          </h2>

          <p>
            The victory provides a timely morale boost after a difficult spring and gives the squad renewed belief heading into the final stage of preparation.
          </p>

          <p>
            Next weekend presents an even tougher challenge when the United States face Germany at Soldier Field in Chicago.
          </p>

          <p className="font-semibold text-xl">
            For now, the USMNT heads toward the World Cup with better vibes, growing confidence, and a much-needed victory.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: May 31, 2026</p>
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
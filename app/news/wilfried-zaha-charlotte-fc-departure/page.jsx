'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function WilfriedZahaCharlotteExitPage() {
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
    "Wilfried Zaha Plays Final Game for Charlotte FC as Loan Spell Ends";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;

  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(
    'Wilfried Zaha officially leaves Charlotte FC after 18 months 🇨🇮'
  )}`;

  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Wilfried Zaha Plays Final Game for Charlotte FC as Loan Spell Ends
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-05-24">May 24, 2026</time>
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
            src="https://assets.goal.com/images/v3/getty-2204351245/crop/MM5DGNZVHA5DEMJRGQ5G433XMU5DAORRHE3A====/GettyImages-2204351245.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Wilfried Zaha Charlotte FC"
            width={1200}
            height={675}
            className="w-full h-auto object-cover object-center"
            priority
          />

          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Rich Storry
 | 
Credit: Getty Images
Copyright: 2025 Getty Images
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

          <p>
            CHARLOTTE, N.C. — Wilfried Zaha’s 18-month stay with Charlotte FC is officially over.
          </p>

          <p>
            The Ivorian winger confirmed his departure on Instagram on Sunday morning, posting an emotional farewell message after his loan spell from Galatasaray reached its conclusion.
          </p>

          <p>
            “The moment has come to say goodbye,” Zaha wrote.
          </p>

          <p>
            “Thank you Charlotte, thank you to the city for welcoming me and my family with open arms and for helping me fall in love with football again.”
          </p>

          <p className="font-semibold text-xl">
            Zaha leaves Charlotte having helped transform the club into a legitimate playoff contender.
          </p>

          {/* VIDEO */}
          <div className="my-10">
            <h2 className="text-3xl font-bold mb-4">
              Watch: Wilfried Zaha Highlights at Charlotte FC
            </h2>

            <div className="aspect-video w-full bg-black rounded-2xl overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/G6jupfHJ47w"
                title="Wilfried Zaha Charlotte FC Highlights"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            An Impactful MLS Spell
          </h2>

          <p>
            Zaha originally arrived in January 2025 as a Designated Player on a short-term loan that was later extended through June 30, 2026.
          </p>

          <p>
            Across 44 MLS appearances, he recorded 13 goals and 14 assists while quickly becoming one of the league’s most recognizable attacking stars.
          </p>

          <p>
            His pace in transition, elite dribbling ability, and capacity to create moments out of nothing helped elevate Charlotte from a mid-table side into a playoff team during the 2025 campaign.
          </p>

          <p>
            At his best, Zaha looked reminiscent of the dynamic winger who starred for Crystal Palace in the Premier League for nearly a decade.
          </p>

          <p>
            However, injuries and occasional inconsistency also prevented him from fully dominating MLS on a weekly basis.
          </p>

          <p>
            Zaha himself described the experience as one filled with “many ups and downs.”
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Charlotte FC Responds
          </h2>

          <p>
            Charlotte FC general manager Zoran Krneta released a brief statement following the announcement.
          </p>

          <p>
            “We thank Wilfried for his contributions and wish him and his family all the best moving forward,” Krneta said.
          </p>

          <p>
            The timing of the departure aligns naturally with MLS pausing for the 2026 FIFA World Cup.
          </p>

          <p>
            Charlotte will not return to league action until July 22, making this a logical transition point for both the player and the club.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            What Comes Next?
          </h2>

          <p>
            Now officially a free agent, Zaha enters the next chapter of his career at 33 years old.
          </p>

          <p>
            While he is no longer at the physical peak of his Crystal Palace years, he still possesses the technical quality and experience to contribute at a high level.
          </p>

          <p>
            Potential destinations could include a return to England, another move in Turkey, or a lucrative opportunity in Saudi Arabia.
          </p>

          <p>
            For Charlotte FC, replacing his creativity will not be easy.
          </p>

          <p>
            Pep Biel and Liel Abada remain central attacking pieces, but the club will likely need another high-level chance creator if it hopes to remain a serious Eastern Conference contender.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            The Legacy He Leaves Behind
          </h2>

          <p>
            Zaha’s time in Charlotte may not have been perfect, but it undeniably mattered.
          </p>

          <p>
            He brought international attention, moments of individual brilliance, and a level of star power that helped push the relatively young MLS franchise into a different conversation.
          </p>

          <p className="font-semibold text-xl">
            Whether this marks the end of his American chapter — or simply a pause — will become clear in the weeks ahead.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: May 24, 2026</p>
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
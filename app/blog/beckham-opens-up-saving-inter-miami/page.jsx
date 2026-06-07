'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function BeckhamInterMiamiStoryPage() {
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
    "Beckham Opens Up: The Brutal Truth Behind Saving Inter Miami";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;

  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(
    'David Beckham reveals how close Inter Miami came to collapse before becoming a billion-dollar MLS powerhouse ⚽💰'
  )}`;

  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Beckham Opens Up: The Brutal Truth Behind Saving Inter Miami
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-06-07">June 7, 2026</time>
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
            src="https://assets.goal.com/images/v3/getty-2250842184/crop/MM5DGMJZGI5DCNZZGY5G433XMU5DAORVGIZQ====/GettyImages-2250842184.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="David Beckham Inter Miami"
            width={1200}
            height={675}
            className="w-full h-auto object-cover object-center"
            priority
          />

          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Elsa
 | 
Credit: Getty Images
Copyright: 2025 Getty Images
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

          <p>
            In a candid and revealing interview with Forbes, David Beckham has pulled back the curtain on the darkest chapters of Inter Miami’s journey — the financial bleeding, the repeated failures, and the moment when even MLS Commissioner Don Garber offered him an easy way out.
          </p>

          <p>
            The numbers were brutal. At one point, the club was losing $39 million in a single year. Stadium plans collapsed three separate times. The future of the franchise looked anything but certain.
          </p>

          <p>
            It was then that Garber made Beckham a direct offer: sell the club back to the league for $50 million.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic">
            “No, Don. I believe in this.”
          </blockquote>

          {/* VIDEO */}
          <div className="my-10">
            <h2 className="text-3xl font-bold mb-4">
              Beckham Discusses Inter Miami's Journey
            </h2>

            <div className="relative w-full overflow-hidden rounded-2xl shadow-lg aspect-video">
              <iframe
                src="https://www.youtube.com/embed/R3DvxszGKzw"
                title="David Beckham Interview"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          <h1 className="text-3xl font-bold mt-10 mb-4">
            A Legacy Bigger Than Money
          </h1>

          <p>
            Beckham didn’t buy Inter Miami in 2014 just to own a soccer team.
          </p>

          <p>
            He wanted something much deeper — a lasting legacy in American soccer. A club that would help elevate the entire sport in the United States.
          </p>

          <p>
            That decision to stay committed through the hardest years has now been completely vindicated.
          </p>

          <p>
            Inter Miami is currently valued at $1.35 billion before debt. Beckham’s 26% ownership stake is worth well over $300 million.
          </p>

          <p>
            The former England captain has become one of only seven living athlete billionaires in the world thanks to the success of this project combined with his massive endorsement portfolio, including Adidas, Nespresso, Lay’s and Verizon.
          </p>

          <p>
            He was also recently knighted by King Charles.
          </p>

          <h1 className="text-3xl font-bold mt-10 mb-4">
            The Brutal Reality
          </h1>

          <p>
            In the Forbes interview, Beckham didn’t sugarcoat the struggle.
          </p>

          <p>
            There were many nights when the numbers looked terrifying and the doubts were loud.
          </p>

          <p>
            Multiple stadium projects fell through. The club operated with heavy losses. Many people inside and outside MLS questioned whether the project would survive.
          </p>

          <p>
            Yet Beckham refused to walk away.
          </p>

          <p>
            He kept investing — financially, emotionally, and reputationally — even when it would have been far easier and more profitable to sell.
          </p>

          <h1 className="text-3xl font-bold mt-10 mb-4">
            Black and Gold Redemption
          </h1>

          <p>
            Today, as Inter Miami stands as one of the flagship clubs in Major League Soccer, featuring Lionel Messi and preparing to play a central role in the 2026 FIFA World Cup, Beckham’s gamble looks like one of the smartest and most visionary moves in modern American sports business.
          </p>

          <p className="font-semibold text-xl">
            He didn’t just save the club.
          </p>

          <p>
            He built something that now sits at the very heart of American soccer’s golden era — and in the process secured his own extraordinary legacy on and off the pitch.
          </p>

          <p>
            From near-collapse to billion-dollar valuation. From skepticism to global powerhouse.
          </p>

          <p className="font-semibold text-xl">
            That is the real story of Inter Miami — and the man who refused to let it die.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: June 7, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>

          <Link
            href="/blog"
            className="text-sm text-gray-500 hover:text-gray-800"
          >
            Back to blog
          </Link>
        </footer>

      </div>
    </article>
  );
}
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function BrazilWorldCupBasePage() {
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
    "Brazil Finds Its World Cup Home in New Jersey";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;

  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(
    'Brazil officially chooses Red Bulls’ $100M facility as World Cup base 🇧🇷🔥'
  )}`;

  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
<header className="mb-8">
  <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
    Brazil Finds Its World Cup Home in New Jersey: Why the Seleção Chose Red Bull’s $100 Million Facility
  </h1>

  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
    <span>By Mio Ristić</span>
    <span>•</span>
    <time dateTime="2026-05-22">May 22, 2026</time>
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
            src="https://assets.goal.com/images/v3/getty-2246918650/crop/MM5DIOJTHE5DENZXHA5G433XMU5DAORTGAYQ====/GettyImages-2246918650.jpg?auto=webp&format=pjpg&width=1920&quality=60"
            alt="RWJBarnabas Health Red Bulls Performance Center"
            width={1200}
            height={675}
            className="w-full h-auto object-cover object-center"
            priority
          />

          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Getty Images Sport
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

          <p>
            HARRISON, N.J. — In the high-stakes chess match that quietly unfolds before every World Cup, Brazil has made its first major move.
          </p>

          <p>
            On Wednesday, the Brazilian Football Confederation officially confirmed that the Seleção will base its 2026 FIFA World Cup preparations at the brand-new RWJBarnabas Health Red Bulls Performance Center in Morris Township, New Jersey.
          </p>

          <p>
            The state-of-the-art complex, which officially opened only weeks ago, will temporarily operate under the name <strong>Columbia Park Training Center</strong> during the tournament.
          </p>

          <p className="font-semibold text-xl">
            Brazil did not simply choose a training ground — they chose an environment built for total control.
          </p>

          {/* VIDEO */}
          <div className="my-10">
            <h2 className="text-3xl font-bold mb-4">
              Watch: Inside Brazil’s New World Cup Base
            </h2>

            <div className="aspect-video w-full bg-black rounded-2xl overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/iPOgUYswPgQ?rel=0&modestbranding=1"
                title="Brazil World Cup Base - Red Bulls Performance Center"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Why Brazil Chose This Facility
          </h2>

          <p>
            Spanning more than 80 acres and reportedly costing over $100 million to construct, the Red Bulls’ new facility is already considered one of the premier soccer training complexes in North America.
          </p>

          <p>
            The center includes eight full-size pitches, advanced recovery and rehabilitation suites, performance labs, nutrition centers, video analysis rooms, and elite-level sports science infrastructure.
          </p>

          <p>
            For a Brazilian federation criticized in recent years for inconsistent preparation and organizational instability, this move represents something different:
          </p>

          <p className="font-semibold">
            precision, structure, and long-term planning.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            A Carefully Planned Decision
          </h2>

          <p>
            Brazil’s general coordinator Rodrigo Caetano explained that the federation spent months evaluating possible locations before making its final decision.
          </p>

          <p>
            “We believe we made the best choice based on our assessments,” Caetano said.
          </p>

          <p>
            “Since qualifying for the World Cup, we have worked carefully to find a place that could provide privacy, comfort, modern infrastructure, and the ideal conditions for performance.”
          </p>

          <p>
            “After the draw, we intensified the process and found exactly what we were looking for.”
          </p>

          <p>
            Brazil will stay at The Ridge Hotel in nearby Basking Ridge, only a short drive from the training complex.
          </p>

          <p>
            The geographical setup offers another important advantage:
          </p>

          <p>
            Brazil opens the tournament against Morocco at MetLife Stadium on June 13 — less than 30 minutes away from the facility.
          </p>

          <p>
            With all group-stage matches located on the East Coast, Brazil avoids the exhausting cross-country travel that many other teams will face throughout the tournament.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            More Than Just Logistics
          </h2>

          <p>
            The symbolism behind the move matters almost as much as the practical advantages.
          </p>

          <p>
            The Red Bulls only opened the new performance center in April 2026, and Brazil — arguably the most iconic national team in football history — immediately selected it as its World Cup headquarters.
          </p>

          <p>
            That decision instantly elevates the global profile of the facility and reinforces Red Bull’s growing reputation for elite football infrastructure development.
          </p>

          <p>
            Inside the federation, the decision also signals a broader cultural shift toward modern preparation methods and professionalized tournament planning.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            The Bigger Picture
          </h2>

          <p>
            None of this guarantees World Cup success.
          </p>

          <p>
            Brazil still faces major footballing questions regarding squad balance, tactical identity, and consistency against elite opposition.
          </p>

          <p>
            But from an infrastructure and preparation standpoint, very few nations heading into the 2026 World Cup will be operating under better conditions.
          </p>

          <p className="font-semibold text-xl">
            The World Cup begins on June 11.
          </p>

          <p className="font-semibold text-xl">
            For the next several weeks, Brazil’s football home will be in New Jersey.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: May 22, 2026</p>
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
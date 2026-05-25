'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MLSMatchday15RecapPage() {
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
    "MLS Matchday 15 Recap: Nashville Tightens Grip on Top Spot";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;

  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(
    'MLS Matchday 15 delivered chaos, goals and Zaha’s farewell ⚽🔥'
  )}`;

  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            MLS Matchday 15 Recap: Nashville Tightens Grip on Top Spot, Miami-Philadelphia Chaos, Zaha’s Farewell
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-05-25">May 25, 2026</time>
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
            src="https://assets.goal.com/images/v3/getty-2202723392/crop/MM5DIOBZGI5DENZVGI5G433XMU5DAORSGI======/GettyImages-2202723392.jpg?auto=webp&format=pjpg&width=1920&quality=60"
            alt="MLS Matchday 15 recap"
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
            Major League Soccer wrapped up the first half of the 2026 season in dramatic fashion on Sunday, delivering goals, late drama, and one emotional goodbye before the league pauses for the FIFA World Cup.
          </p>

          <p className="font-semibold text-xl">
            Matchday 15 had everything: statement wins, defensive chaos, hat-tricks, and one of the wildest matches MLS has seen all season.
          </p>

          {/* VIDEO */}
          <div className="my-10">
            <h2 className="text-3xl font-bold mb-4">
              Watch: MLS Matchday 15 Highlights
            </h2>

            <div className="aspect-video w-full bg-black rounded-2xl overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/feH28W1NUBE"
                title="MLS Matchday 15 Highlights"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Nashville SC Tightens Grip on First Place
          </h2>

          <p>
            Nashville SC remained atop the overall MLS standings with a hard-fought 2-1 victory over New York City FC.
          </p>

          <p>
            The Coyotes now sit on 33 points through 14 matches, one point ahead of Vancouver Whitecaps in the Supporters’ Shield race.
          </p>

          <p>
            Nashville has quietly become the league’s most consistent team:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Only one loss all season</li>
            <li>Unbeaten in eight straight matches</li>
            <li>Dominant 6-0-1 home record</li>
          </ul>

          <p>
            Maxwell Woledzi scored the decisive goal with a header assisted by Bryan Acosta, while head coach B.J. Callaghan continues to build one of the league’s most disciplined and organized sides.
          </p>

          <p className="font-semibold">
            Right now, Nashville looks like the clear Supporters’ Shield frontrunner heading into the break.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            The Wildest Game of the Season
          </h2>

          <p>
            Inter Miami and Philadelphia Union delivered absolute chaos at DRV PNK Stadium, combining for 10 goals in a stunning 6-4 thriller.
          </p>

          <p>
            Milan Iloski scored a hat-trick for Philadelphia, while Luis Suárez answered with one of his own for Miami.
          </p>

          <p>
            But the biggest storyline emerging from the match involves Lionel Messi.
          </p>

          <p>
            Messi exited early due to injury, creating immediate concern with the 2026 World Cup now only weeks away.
          </p>

          <p className="font-semibold">
            His recovery timeline will instantly become one of the biggest stories in global football.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Evander’s Career Night
          </h2>

          <p>
            FC Cincinnati demolished Orlando City 6-2 behind a sensational performance from Brazilian midfielder Evander.
          </p>

          <p>
            The former Portland Timbers star produced two goals and three assists in one of the best individual performances of the MLS season.
          </p>

          <p>
            Cincinnati climbed into seventh place in the Eastern Conference standings, while Orlando’s defensive problems continue spiraling.
          </p>

          <p>
            The Lions have now conceded a league-worst 44 goals through just 15 matches.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Zaha’s Farewell in Charlotte
          </h2>

          <p>
            Wilfried Zaha made his final appearance for Charlotte FC in a 1-0 victory over New England Revolution.
          </p>

          <p>
            The Ivorian winger nearly scored in the 13th minute but failed to convert a golden opportunity.
          </p>

          <p>
            Zaha ends his MLS spell with 13 goals and 14 assists across 44 appearances following his loan move from Galatasaray.
          </p>

          <p>
            His contract expires on June 30, after which he officially becomes a free agent.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Other Notable Results
          </h2>

          <ul className="list-disc pl-6 space-y-4 text-lg">
            <li>
              <strong>D.C. United 4-4 CF Montréal</strong> — Prince Owusu scored a hat-trick before Montréal found a dramatic 96th-minute equalizer.
            </li>

            <li>
              <strong>LAFC 1-0 Seattle Sounders</strong> — Timothy Tillman scored the winner in the 86th minute.
            </li>

            <li>
              <strong>Vancouver Whitecaps and San Jose Earthquakes</strong> remain level on 32 points atop the Western Conference.
            </li>
          </ul>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Current Standings Before the World Cup Break
          </h2>

          <p className="font-semibold">
            Supporters’ Shield Race
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Nashville SC — 33 points</li>
            <li>Vancouver Whitecaps — 32 points</li>
          </ul>

          <p>
            Charlotte FC currently remains inside the Eastern Conference playoff positions heading into the break.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            The Long Pause Begins
          </h2>

          <p>
            MLS will now pause for 52 days due to the 2026 FIFA World Cup.
          </p>

          <p className="font-semibold text-xl">
            The league officially returns on July 22.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: May 25, 2026</p>
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
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MLSMidseasonRecapPage() {
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
    "MLS 2026 Midseason Recap: The Good, The Bad & The Chaos";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;

  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(
    'MLS 2026 has delivered chaos, surprises and massive disappointments ⚽🔥'
  )}`;

  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            MLS 2026 Midseason Recap: The Good, The Bad & The Chaos
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
            src="https://i.ibb.co/qYywgPzP/nashville-sc-vs-dc-united-prediction-2026-05-09.webp"
            alt="MLS 2026 Midseason Recap"
            width={1200}
            height={675}
            className="w-full h-auto object-cover object-center"
            priority
          />

          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Credit: Alamy Stock Photo
Copyright: Credit: Associated Press / Alamy Stock Photo
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

          <p>
            Fifteen matchdays into the 2026 MLS season, one thing is clear: this league remains gloriously unpredictable.
          </p>

          <p>
            Before the long World Cup break, we’ve seen legitimate contenders, surprise packages, big-market disappointments, defensive disasters, and the usual coaching carousel.
          </p>

          <p className="font-semibold text-xl">
            In other words — a typical MLS half-season.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Supporters’ Shield Race
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Nashville SC — 33 points</li>
            <li>Vancouver Whitecaps — 32 points</li>
            <li>San Jose Earthquakes — 32 points</li>
          </ul>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            The Biggest Winners
          </h2>

        
                    <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8">
                      <Image
                        src="https://assets.goal.com/images/v3/blte8f463fafee800c1/1600.jpg?auto=webp&format=pjpg&width=3840&quality=60"
                        alt="Argentina 2026 Home Jersey"
                        width={1200}
                        height={800}
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
                        Copyright: 2026 Getty Images
                      </div>
                    </figure>

          <h3 className="text-2xl font-bold mt-8 mb-4">
            Nashville SC
          </h3>

          <p>
            The clearest success story of the first half.
          </p>

          <p>
            With just one loss all season and an eight-game unbeaten run, B.J. Callaghan has built the most disciplined and complete team in the league.
          </p>

          <p>
            This isn’t a side that relies on individual brilliance — it’s a collective that controls matches, defends with intelligence, and punishes mistakes efficiently.
          </p>

          <p className="font-semibold">
            Nashville currently look like the strongest Supporters’ Shield favorites in recent memory.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">
            San Jose Earthquakes
          </h3>

          <p>
            The biggest positive surprise of 2026.
          </p>

          <p>
            The arrival of Timo Werner has added pace and verticality, but this resurgence runs much deeper.
          </p>

          <p>
            Bruce Arena’s project is functioning at a high level, and San Jose head into the break as legitimate Western Conference contenders.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">
            Vancouver Whitecaps
          </h3>

          <p>
            Arguably the most entertaining team in MLS right now.
          </p>

          <p>
            They play sharp, proactive football and have dominated the Western Conference for large stretches.
          </p>

          <p>
            The only cloud hanging over the club is the persistent speculation surrounding a possible relocation.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            The Biggest Disappointments
          </h2>

          
           
                    <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8">
                      <Image
                        src="https://assets.goal.com/images/v3/getty-2266866585/crop/MM5DEOBYGA5DCNRSGA5G433XMU5DINBUHIYTANA=/GettyImages-2266866585.jpg?auto=webp&format=pjpg&width=3840&quality=60"
                        alt="Argentina 2026 Home Jersey"
                        width={1200}
                        height={800}
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
                        Copyright: 2026 Getty Images
                      </div>
                    </figure>

          <h3 className="text-2xl font-bold mt-8 mb-4">
            LA Galaxy
          </h3>

          <p>
            After winning MLS Cup in 2024, expectations were sky high.
          </p>

          <p>
            Instead, the Galaxy have looked strangely lost at times, struggling with consistency, identity, and defensive organization.
          </p>

          <p>
            A significant summer reset now feels necessary.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">
            Orlando City
          </h3>

          <p>
            A defensive horror show.
          </p>

          <p>
            Orlando are on pace to concede a historically high number of goals this season.
          </p>

          <p>
            No amount of attacking talent — or incoming Antoine Griezmann hype — can fully hide how porous they’ve been defensively.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">
            Austin FC & Columbus Crew
          </h3>

          <p>
            Both clubs have fallen well below their recent standards, with sharp drops in form that ultimately cost their coaches their jobs.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">
            James Rodríguez (Minnesota United)
          </h3>

          <p>
            The most disappointing individual story of the first half.
          </p>

          <p>
            Signed with significant fanfare, the Colombian star has failed to deliver consistent performances.
          </p>

          <p>
            One strong match aside, his overall impact has been minimal.
          </p>

          <p className="font-semibold">
            His MLS chapter risks becoming a quiet footnote.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Managerial Chaos
          </h2>

            <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8">
                      <Image
                        src="https://assets.goal.com/images/v3/getty-2205008127/crop/MM5DEMBQGA5DCMJSGU5G433XMU5DENJQHIYTMNA=/GettyImages-2205008127.jpg?auto=webp&format=pjpg&width=1920&quality=60"
                        alt="Argentina 2026 Home Jersey"
                        width={1200}
                        height={800}
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
                        Copyright: 2025 Getty Images
                      </div>
                    </figure>

          <p>
            The coaching carousel spun at full speed once again:
          </p>

          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Marco Donadel (CF Montréal)</strong> — Fired after a dismal start
            </li>

            <li>
              <strong>Javier Mascherano (Inter Miami)</strong> — Resigned for personal reasons just months after winning the 2025 MLS Cup
            </li>

            <li>
              <strong>Henrik Rydström (Columbus Crew)</strong> — Dismissed following poor results
            </li>

            <li>
              <strong>Nico Estévez (Austin FC)</strong> — Let go due to lack of progress
            </li>

            <li>
              <strong>Phil Neville (Portland Timbers)</strong> — Mutual parting of ways after a disappointing start
            </li>
          </ul>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Moments We’ll Remember
          </h2>

          <ul className="list-disc pl-6 space-y-4">
            <li>The absolute madness of Inter Miami 6-4 Philadelphia Union</li>
            <li>Timo Werner bringing San Jose back to life</li>
            <li>Nashville’s defensive masterclass</li>
            <li>The ongoing uncertainty surrounding Vancouver’s future</li>
            <li>Another year of heavy managerial turnover</li>
          </ul>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Final Verdict
          </h2>

          <p>
            Fifteen matches have once again proven that MLS is beautifully chaotic.
          </p>

          <p>
            Nashville SC and Vancouver Whitecaps have set the standard at the top, while San Jose have delivered the feel-good story of the season.
          </p>

          <p>
            At the same time, several big-market clubs have plenty of work to do heading into the second half.
          </p>

          <p>
            Now comes the long World Cup break and the always unpredictable summer transfer window — two ingredients that could completely reshape the landscape before the league returns on July 22.
          </p>

          <p className="font-semibold text-xl">
            Buckle up. The second half should be fascinating.
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
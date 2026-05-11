'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function Matchday12Takeaways() {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleCopyLink = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      alert('✅ Link copied to clipboard!');
    }
  };

  const articleTitle =
    "Messi Makes History Again, Portland Explodes & James Delivers: What We Learned from MLS Matchday 12";

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Messi Makes History Again, Portland Explodes & James Delivers: What We Learned from MLS Matchday 12
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-05-11">May 11, 2026</time>
          </div>

          {/* SOCIAL SHARE */}
          <div className="flex items-center gap-4 mt-4">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"
            >
              <FaFacebookF size={20} />
            </a>

            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"
            >
              <FaTwitter size={20} />
            </a>

            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"
            >
              <FaWhatsapp size={20} />
            </a>

            <button
              onClick={handleCopyLink}
              className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"
            >
              <FiCopy size={20} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://assets.goal.com/images/v3/getty-2266866579/crop/MM5DGNRQGA5DEMBSGU5G433XMU5DAORSGMYQ====/GettyImages-2266866579.jpg?auto=webp&format=pjpg&width=1920&quality=60"
            alt="Creator: Rich Lam
 | 
Credit: Getty Images
Copyright: 2026 Getty Images"
            width={1200}
            height={675}
            className="w-full h-auto object-cover"
            priority
          />

          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Rich Lam
 | 
Credit: Getty Images
Copyright: 2026 Getty Images
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

          <p>
            As the 2026 World Cup draws nearer, Major League Soccer delivered another chaotic and compelling weekend.
          </p>

          <p>
            Matchday 12 featured record-breaking performances, statement wins, and several players making their final push for national team selection.
          </p>

          {/* VIDEO */}
          <div className="my-10">
            <h2 className="text-3xl font-bold mb-4">Matchday 12 Highlights</h2>

            <div className="aspect-video w-full bg-black rounded-2xl overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/qO7pFBfzoNY"
                title="MLS Matchday 12 Highlights"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Messi’s Masterclass in Toronto
          </h2>

          <p>
            The headline belonged, once again, to Lionel Messi.
          </p>

          <p>
            In front of a BMO Field-record crowd of 44,828, the 38-year-old delivered one goal and two assists as Inter Miami defeated Toronto FC 4-2.
          </p>

          <p>
            With that performance, Messi became the fastest player in MLS history to reach 100 career goal contributions, doing so in just 64 games.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Portland’s Historic Romp
          </h2>

          <p>
            While Messi was making history in Canada, the Portland Timbers were busy rewriting their own record books in Oregon.
          </p>

          <p>
            Portland destroyed Sporting Kansas City 6-0 at Providence Park — the largest margin of victory in club history.
          </p>

          <p>
            Young Venezuelan striker Kevin Kelsy stole the show with two goals and two assists before the 30th minute had even elapsed.
          </p>

          <p>
            It was a night when everything clicked for Phil Neville’s side.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Standout Performances Around the League
          </h2>

          <p>
            <strong>Minnesota United 2–2 Austin FC</strong>
          </p>

          <p>
            James Rodríguez delivered a reminder of his enduring class. The Colombian star came off the bench in the second half and produced two beautiful assists, helping Minnesota fight back from a deficit to earn a hard-fought draw on the road.
          </p>

          <p>
            Even at this stage of his career, James continues to show he can change games when given the opportunity.
          </p>

          <p>
            <strong>Houston Dynamo 3–1 LAFC</strong>
          </p>

          <p>
            Houston took full advantage of a visibly fatigued LAFC side, who were still recovering from a midweek Concacaf Champions Cup semifinal.
          </p>

          <p>
            The Dynamo were clinical and energetic from the start, controlling the tempo and exposing LAFC’s tired legs.
          </p>

          <p>
            It was a well-deserved victory that showcased Houston’s growing depth and tactical discipline under their coaching staff.
          </p>

          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>
              <strong>New York City FC 3–0 Columbus Crew</strong> — Hannes Wolf scored his first career hat-trick as the Pigeons ended a seven-game winless streak in emphatic fashion.
            </li>

            <li>
              <strong>New England Revolution 2–1 Philadelphia Union</strong> — Carles Gil once again orchestrated a comeback victory with a masterclass performance.
            </li>

            <li>
              <strong>Atlanta United 2–1 CF Montréal</strong>
            </li>

            <li>
              <strong>Charlotte FC 1–0 D.C. United</strong>
            </li>

            <li>
              <strong>Chicago Fire 2–2 FC Cincinnati</strong>
            </li>

            <li>
              <strong>Nashville SC 1–1 Orlando City</strong>
            </li>

            <li>
              <strong>San Jose Earthquakes 3–2 Seattle Sounders</strong>
            </li>

            <li>
              <strong>Real Salt Lake 1–1 Vancouver Whitecaps</strong>
            </li>
          </ul>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            The Bigger Picture
          </h2>

          <p>
            Matchday 12 reinforced several key narratives heading into the heart of the season:
          </p>

          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>
              <strong>Inter Miami</strong> continues to look like the team to beat. Their attacking depth and Messi’s unrelenting brilliance make them extremely dangerous.
            </li>

            <li>
              <strong>Portland Timbers</strong> have the potential to be one of the most exciting and dangerous teams in the Western Conference when everything clicks.
            </li>

            <li>
              Several national team hopefuls (including James Rodríguez) are playing with added urgency as the 2026 World Cup approaches. Every start, every goal, and every assist now carries extra weight.
            </li>
          </ul>

          <p>
            As we move deeper into May, the race for playoff positioning and final World Cup roster spots is intensifying.
          </p>

          <p>
            Every match matters more than the last.
          </p>

          <p className="font-semibold text-xl">
            The champions have sent their message. The rest of the league now has six days to respond.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex justify-between text-sm text-gray-600">
          <span>Published: May 11, 2026</span>

          <Link
            href="/news"
            className="hover:text-gray-800"
          >
            Back to news
          </Link>
        </footer>

      </div>
    </article>
  );
}
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function SonMLSAllStarGame() {
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

  const articleTitle = "Son Heung-min Steals the Spotlight as MLS All-Stars Edge Liga MX 4-3 in Charlotte";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Son Heung-min steals the show with a brace as MLS All-Stars beat Liga MX 4-3 ⚽️')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Son Heung-min Steals the Spotlight as MLS All-Stars Edge Liga MX 4-3 in Charlotte
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
            <span>By Mio Ristić</span>
            <span>•</span>
            <span>July 30, 2026</span>
          </div>

          {/* SOCIAL SHARE */}
          <div className="flex items-center gap-3 mb-8">
            <a
              href={facebookShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1877F2] text-white hover:opacity-90 transition"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href={twitterShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:opacity-90 transition"
            >
              <FaTwitter size={16} />
            </a>
            <a
              href={whatsappShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#25D366] text-white hover:opacity-90 transition"
            >
              <FaWhatsapp size={16} />
            </a>
            <button
              onClick={handleCopyLink}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
            >
              <FiCopy size={16} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://assets.goal.com/images/v3/getty-2288223409/crop/MM5DIMZSGQ5DENBTGI5G433XMU5DAORSHE======/GettyImages-2288223409.jpg?auto=webp&format=pjpg&width=2048&quality=60"
            alt="Son Heung-min MLS All-Star Game 2026"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Getty Images
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6 text-[#020617]">

          <p>
            CHARLOTTE — Without Lionel Messi, the MLS All-Star Game still found its star.
          </p>

          <p>
            Son Heung-min needed only 35 minutes and two clinical finishes to decide the night. The LAFC forward scored twice in a three-minute span in the first half, earned MVP honors, and lifted the MLS All-Stars to a 4-3 victory over their Liga MX counterparts on Wednesday at Bank of America Stadium.
          </p>

          <p>
            In front of 35,197 fans, the South Korean delivered the kind of performance the league hoped for when it brought him to Los Angeles last summer. With the biggest name on the roster resting after the World Cup, Son stepped into the void and refused to leave it empty.
          </p>

          {/* YOUTUBE VIDEO */}
          <div className="my-10">
            <iframe
              width="100%"
              height="420"
              src="https://www.youtube.com/embed/zTO3LLkIjVk"
              title="Son Heung-min MLS All-Star Game Highlights"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-2xl"
            ></iframe>
          </div>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            A Brace That Changed Everything
          </h2>

          <p>
            Liga MX struck first. Luis Gabriel Rey headed home a free-kick delivery from Juan Brunetta in the ninth minute, giving the Mexican side an early lead. For a brief moment, the visitors looked ready to spoil the party.
          </p>

          <p>
            Son needed less than 15 minutes to rewrite the script.
          </p>

          <p>
            In the 20th minute, Carles Gil found him in space on the left side of the box. Son settled the ball and slid a low shot past Carlos Acevedo to level the score. Three minutes later, Gil chased a ball to the end line, kept it in play, and clipped a perfect cross into the middle. Son met it on the volley. 2-1 MLS.
          </p>

          <p>
            Both goals carried the same signature celebration — the camera motion that has become his trademark. Both were assisted by the New England Revolution playmaker. And both arrived before most of the substitutes had even warmed up.
          </p>

          {/* MIDDLE IMAGE */}
          <figure className="relative w-full rounded-3xl overflow-hidden shadow-md my-10 aspect-[16/9]">
            <Image
              src="https://assets.goal.com/images/v3/getty-2288223805/crop/MM5DGMJUHE5DCNZXGE5G433XMU5DAORYGE======/GettyImages-2288223805.jpg?auto=webp&format=pjpg&width=2048&quality=60"
              alt="Son Heung-min celebrates MLS All-Star Game goals"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
              Getty Images
            </div>
          </figure>

          <p>
            Philip Zinckernagel extended the lead to 3-1 before halftime. Salomón Rondón pulled one back early in the second half, but Evander restored the two-goal cushion in the 58th minute. José Paradela’s stoppage-time strike made the final score 4-3, yet it never truly threatened the result Son had already shaped.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Captain, MVP, Difference-Maker
          </h2>

          <p>
            Son captained the MLS side and left the field in the 35th minute with the job done. The performance was efficient, clinical, and decisive — the kind of contribution that turns an exhibition into a statement.
          </p>

          <p>
            He became the first South Korean to win MLS All-Star Game MVP honors. Park Ji-sung remains the only other Korean to claim the award, doing so in 2011 against Manchester United.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-6 italic text-lg my-8">
            “I had great players around me and that made my job easier. Scoring two goals makes the night really special.”
          </blockquote>

          <p>
            The timing mattered. Coming out of a disappointing World Cup with South Korea, Son has rediscovered his scoring touch. Three consecutive league games with a goal for LAFC preceded this All-Star appearance. The brace in Charlotte continued that run.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Context Beyond the Scoreline
          </h2>

          <p>
            Messi’s absence was expected. The Inter Miami star and Rodrigo De Paul are operating under a post-World Cup rest agreement. Their non-participation opened the stage for others. Thomas Müller entered later. Carles Gil dictated the tempo in the first half. Maxime Crépeau made six saves to protect the lead.
          </p>

          <p>
            The result extends MLS’s dominance in the All-Star series against Liga MX to 4-1. The American side has now won four of the five meetings since the format settled on this inter-league matchup. Last year’s 3-1 victory in Austin was followed by another win in Charlotte.
          </p>

          <p>
            The game also served as a final showcase before Leagues Cup begins in early August, when the rivalry shifts from exhibition to competitive fixtures across both leagues.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What It Means
          </h2>

          <p>
            All-Star Games are imperfect measuring sticks. Motivation varies. Tactical structure is limited. Yet certain performances transcend the format. Son’s did.
          </p>

          <p>
            In a league still defining its post-World Cup identity, the LAFC forward offered a reminder of what star power looks like when it arrives with purpose. He did not need a full 90 minutes. He needed two chances and the quality to take them.
          </p>

          <p className="font-bold text-xl mt-8">
            For one night in Charlotte, that was more than enough.
          </p>

        </section>

        {/* NEXT FOR YOU */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Next For You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <Link href="/news/mls-vs-liga-mx-all-star-preview" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">1</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  MLS vs Liga MX: Everything You Need to Know About the All-Star Rivalry
                </h3>
              </div>
            </Link>

            <Link href="/news/sebastian-berhalter-middlesbrough" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">2</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Vancouver Whitecaps Transfer USMNT’s Sebastian Berhalter to Middlesbrough
                </h3>
              </div>
            </Link>

            <Link href="/news/lewandowski-100-million-saudi-rejection" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">3</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Not Everything Is About Money: How Lewandowski Turned Down €100 Million a Season
                </h3>
              </div>
            </Link>

            <Link href="/news/iraola-liverpool-nycfc" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">4</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Iraola’s Path to Liverpool via New York City: “It Was Like Having a Coach on the Field”
                </h3>
              </div>
            </Link>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: July 30, 2026</p>
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
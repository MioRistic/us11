'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function CvetkovicWhitecapsFirstGoal() {
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
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const articleTitle =
    'Aleksa Cvetković Scored His First MLS Goal. Vancouver Looked Like a Team That Has One.';

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
              MLS
            </span>
            <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
              Vancouver Whitecaps
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Aleksa Cvetković Scored His First MLS Goal. Vancouver Looked Like a Team That Has One.
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
            The 21-year-old Serbian midfielder opened the scoring in Vancouver’s 4-1 win over San Diego and was named Man of the Match in only his fourth start.
          </p>

          {/* Share buttons - black & white */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-800 px-4 py-2 rounded-full text-sm font-medium transition"
            >
              <FiCopy className="w-4 h-4" />
              {copied ? 'Copied!' : 'Copy link'}
            </button>

            <a
              href={facebookShare}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-800 px-4 py-2 rounded-full text-sm font-medium transition"
            >
              <FaFacebookF className="w-4 h-4" />
              Facebook
            </a>

            <a
              href={twitterShare}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-800 px-4 py-2 rounded-full text-sm font-medium transition"
            >
              <FaTwitter className="w-4 h-4" />
              X
            </a>

            <a
              href={whatsappShare}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-800 px-4 py-2 rounded-full text-sm font-medium transition"
            >
              <FaWhatsapp className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </header>

        {/* Hero image */}
        <figure className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9] bg-gray-100">
          <Image
            src="https://xdn.tf.rs/2026/10/29/profimedia-1147414591-930594-830x553.webp"
            alt="Aleksa Cvetković Vancouver Whitecaps"
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover"
            priority
          />
          <div className="absolute bottom-3 right-3 bg-black/75 text-white text-xs px-3 py-1.5 rounded font-medium">
            foto:amy elle imago sportfondies Profimedia
          </div>
        </figure>

        {/* Article content */}
        <div className="max-w-none text-lg leading-relaxed">
          <p className="mb-6">
            The goal arrived early and cleanly.
          </p>

          <p className="mb-6">
            In the 24th minute at BC Place, Mathías Laborda played a ball across the box. Aleksa Cvetković, unmarked, directed it into the net with his left foot. Vancouver led 1-0. By the end of the night, the Whitecaps had won 4-1, Brian White had scored his 100th MLS goal, and San Diego were eliminated from playoff contention.
          </p>

          <p className="mb-6">
            Cvetković was named Man of the Match. It was his fourth start since joining the club in August.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-6">
            The goal and the night around it
          </h2>

          <p className="mb-6">
            The sequence was straightforward. Ryan Gauld was involved in the build-up, Laborda delivered the final ball, and Cvetković finished from close range. Vancouver had spent the early minutes probing without creating a clear chance. Once the Serbian midfielder converted, the game opened.
          </p>

          <p className="mb-6">
            White scored in the 41st minute, heading in a cross from Oliver Larraz to make it 2-0 before half-time. Gauld added a third in the 66th. Bruno Caicedo scored the fourth in the 76th after coming off the bench. San Diego’s Onni Valakari pulled one back in the 83rd, but the result was never in serious doubt after the opening goal.
          </p>

          <p className="mb-6">
            The win moved Vancouver to 58 points and extended their lead at the top of the Western Conference to four points over Dallas, with two regular-season games remaining. They can clinch first place with a home win over Seattle on Sunday.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-6">
            How Cvetković arrived here
          </h2>

          <p className="mb-6">
            Cvetković joined Vancouver in mid-August from OFK Beograd for a reported fee of around €1.5 million. The 21-year-old signed a U22 Initiative contract through the 2029-30 season, with a club option for one more year. He is from Leskovac and came through the youth system at Red Star Belgrade before establishing himself at OFK Beograd, where he made 73 appearances, scored seven goals, and recorded nine assists.
          </p>

          <p className="mb-6">
            He is a box-to-box midfielder who can also play wider. Sporting director Axel Schuster described him at the time of the signing as a player with “tremendous energy and intensity” and a “relentless work rate.” Those traits were visible on Wednesday. He played the full 90 minutes, scored, and contributed defensively.
          </p>

          <p className="mb-6">
            Coach Jesper Sørensen has spoken about the adaptation period. “Aleksa has a great engine,” Sørensen said. “He’s a guy who can cover a lot of distance on the pitch. He needs to settle into the way we play. He looks more and more comfortable. It’s always great to see a young man come in and score his first goal.”
          </p>

          <p className="mb-6">
            Brian White, who scored his own milestone on the same night, offered a similar view from the dressing room. “He’s been a guy who’s waiting for his time to get some minutes,” White said. “He’s a guy that we see in training every day, the quality he has. I’m happy for him to get on the scoresheet. I thought he played a great game.”
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-6">
            What the goal represents
          </h2>

          <p className="mb-6">
            Cvetković is not a finished product. He has made limited starts since arriving and is still adjusting to MLS. A single goal does not change that. What it does is provide a concrete marker in a season where Vancouver have been competitive at the top of the West while integrating new players.
          </p>

          <p className="mb-6">
            The Whitecaps have leaned on established contributors such as Gauld and White throughout the campaign. Adding a young midfielder who can start and affect games in both directions gives them another option as the playoffs approach. Cvetković’s contract structure under the U22 Initiative also means the club is not carrying a heavy salary-cap burden while he develops.
          </p>

          <p className="mb-6">
            San Diego, by contrast, left the night without a postseason berth. Their winless run stretched to 10 matches. Vancouver’s performance was efficient rather than dominant, but the early goal from a player still finding his feet set the tone.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-6">
            What comes next
          </h2>

          <p className="mb-6">
            Vancouver host Seattle on Sunday with the chance to secure top spot in the West. Cvetković’s minutes will depend on how Sørensen manages the squad in the final two league games and then into the playoffs. He has shown he can contribute when selected. The next step is consistency.
          </p>

          <p className="mb-6">
            One goal in October does not define a season or a transfer. It does, however, give a clearer picture of what Cvetković can offer. Vancouver have a young midfielder who has scored in MLS and who played a full match while the team strengthened its position at the top of the conference. That is a useful development at this stage of the year.
          </p>
        </div>

        {/* Next to Read */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/news/pulisic-milan-deal-2031" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative bg-gray-100">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2302080837/crop/MM5DIOBTGI5DENZRHA5G433XMU5DAORQ/GettyImages-2302080837.jpg?quality=60&auto=webp&format=pjpg&width=2160"
                    alt="Christian Pulisic"
                    fill
                    sizes="(max-width: 768px) 100vw, 448px"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Pulisic and Milan Have Agreed a Deal in Principle Until 2031. The Signature Is Still Missing.
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">October 28, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/nashville-supporters-shield-2026" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative bg-gray-100">
                  <Image
                    src="https://assets.goal.com/images/v3/blt0733c3edcfb41a40/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-03-22T213603.222.png?quality=60&auto=webp&format=pjpg&width=1920"
                    alt="Nashville SC"
                    fill
                    sizes="(max-width: 768px) 100vw, 448px"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Nashville SC Won the 2026 Supporters’ Shield. They Did It the Old-Fashioned Way.
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">October 25, 2026</p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: October 29, 2026</p>
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
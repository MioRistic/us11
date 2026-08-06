'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function LarryBergMLSCommissioner() {
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
    "Larry Berg and the One Opportunity MLS Cannot Afford to Miss";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Larry Berg takes over as MLS commissioner — the league’s most important window is now')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Larry Berg and the One Opportunity MLS Cannot Afford to Miss
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-08-06">August 6, 2026</time>
          </div>

          {/* SHARE BUTTONS */}
          <div className="flex items-center gap-3">
            <a
              href={facebookShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href={twitterShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition"
            >
              <FaTwitter size={16} />
            </a>
            <a
              href={whatsappShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-600 transition"
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
            src="https://assets.goal.com/images/v3/bltc33c70b1ae46424b/crop/MM5DKMBQGU5DEOBRGU5G433XMU5DAORSGYYA====/Garber_Berg_Rosenthal%20at%20Press%20Conference.jpg?auto=webp&format=pjpg&width=2048&quality=60"
            alt="Larry Berg MLS Commissioner Press Conference"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Major League Soccer
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">

          <p>
            Larry Berg is about to become the third commissioner in Major League Soccer history. On paper, the transition looks orderly. In reality, he is walking into the most consequential period the league has ever faced.
          </p>

          <p>
            On August 3, 2026, MLS owners voted Berg in as Don Garber’s successor. He will officially take the job on January 1, 2027. Garber remains commissioner through the end of this year before moving into a chairman role. The handoff is designed to be smooth. The challenges waiting for Berg are not.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Who Larry Berg Actually Is
          </h2>

          <p>
            Berg is not an outsider. He is a lifelong soccer fan who grew up in the Philadelphia area, played the game for years, and has barely missed a U.S. men’s national team match in four decades. He is also a private equity veteran who spent more than 30 years at Apollo Global Management before later joining Josh Harris’s firm 26North as an advisor.
          </p>

          <p>
            As a co-managing owner of LAFC since the club’s founding, Berg helped build one of the league’s model franchises. Under that ownership group, LAFC won the 2022 MLS Cup, multiple Supporters’ Shields, opened BMO Stadium, and became one of the first clubs in the league valued at more than $1 billion. He also previously held ownership stakes in AS Roma and Swansea City, giving him experience across different football cultures.
          </p>

          <p>
            He has already been deeply involved in league governance as co-chair of the powerful Sporting and Competition Committee. That role is important. Berg is not arriving cold. He knows the internal debates, the competing owner philosophies, and the slow pace at which major decisions often move in MLS.
          </p>

          <p>
            He will have to sell his stake in LAFC and step away from his private equity roles to avoid conflicts of interest. At 60, he is taking on the job at a moment when the league is both stronger and more exposed than it has ever been.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Real Stakes
          </h2>

          <p>
            Berg’s early public message has been consistent and deliberate: <strong>product first</strong>.
          </p>

          <p>
            In his introductory comments and interviews, he has repeatedly returned to the same idea. The foundation of MLS is solid. The opportunity in front of it is extraordinary. But status quo is not an option. Quality on the field has to improve if the league wants to turn World Cup interest into lasting growth.
          </p>

          <p>
            That sounds obvious. The difficulty lies in the timing.
          </p>

          <p>
            MLS is preparing a major relaunch in 2027. The league will flip its calendar to a fall-to-spring schedule, introduce a new competition structure that includes divisions and a revised postseason format, and, ideally, roll out a new roster investment model. The goal is to present a “new” MLS — more competitive, more flexible, and more aligned with the global game — at the exact moment when attention on soccer in North America is still high.
          </p>

          <p>
            If the league cannot get the roster rules and a new collective bargaining agreement over the line in time for that 2027 window, it risks another massive lost opportunity.
          </p>

          <p>
            MLS already moved too slowly to fully capitalize on the 2026 World Cup. The tournament delivered packed stadiums, strong television numbers, and a surge in casual interest. But the structural changes that could have made the league more attractive to those new fans were not ready. Missing that window once was costly. Missing the 2027 relaunch would be worse.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Hard Problems Berg Must Solve
          </h2>

          <p>
            <strong>1. Roster rules and spending flexibility</strong><br />
            The current system, built around three Designated Players and a complex web of mechanisms, has long been criticized as inefficient. Owners have been discussing a more open investment model that would allow teams to spend more freely across the roster. Berg has called this his number one job. He believes better roster rules will create a flywheel: stronger teams, higher transfer revenue, better media deals, and a stronger product.
          </p>

          <p>
            <strong>2. A new CBA with the MLS Players Association</strong><br />
            The current collective bargaining agreement expires on January 31, 2028. To make meaningful roster changes for the 2027-28 season, the league and the players need an agreement much earlier. Berg’s ability to find common ground here will define the early years of his tenure.
          </p>

          <p>
            <strong>3. Youth development</strong><br />
            Berg has spoken strongly about making MLS academies and MLS Next Pro more productive pipelines into first teams. He sees this as both a competitive advantage and a way to strengthen the U.S. and Canadian national team pools.
          </p>

          <p>
            <strong>4. Media rights</strong><br />
            The Apple deal ends earlier than originally planned (around 2029). Securing the next media agreement will be one of the biggest business challenges of Berg’s early years.
          </p>

          <p>
            <strong>5. Converting World Cup fans</strong><br />
            The league has never had a better chance to turn casual interest into long-term support. Whether it succeeds will depend less on marketing slogans and more on whether the product on the field is worth watching week after week.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What Berg Is Not Promising
          </h2>

          <p>
            Promotion and relegation is not coming anytime soon. Berg was clear on that point, echoing Garber’s long-standing position while leaving a small “never say never” door open. His focus is on creating more jeopardy inside the existing structure rather than importing a European model that many owners remain deeply opposed to.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Bigger Picture
          </h2>

          <p>
            Berg arrives with advantages previous commissioners never had. The league is financially stable, franchise values are high, the infrastructure is largely in place, and the sport’s profile in the United States has never been higher. He is not being asked to save MLS. He is being asked to elevate it.
          </p>

          <p>
            That distinction matters. Saving a league requires survival skills. Elevating one requires speed, alignment, and the willingness to make hard choices while momentum still exists.
          </p>

          <p>
            The owners chose Berg because he understands the league from the inside, has deal-making experience, and has already pushed for more efficient decision-making on the competition committee. The question now is whether that background can translate into the kind of decisive leadership the moment demands.
          </p>

          <p className="font-bold text-xl mt-10">
            MLS has spent years talking about the next level. With Larry Berg as commissioner, the next level is no longer theoretical. It has a deadline attached to it — and that deadline is closer than it looks.
          </p>

        </section>

        {/* NEXT FOR YOU */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Next For You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/news/messi-leagues-cup-record"
              className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md"
            >
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">1</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Messi Sets Leagues Cup Scoring Record
                </h3>
              </div>
            </Link>

            <Link
              href="/news/usmnt-fall-friendlies-2026"
              className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md"
            >
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">2</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  USMNT Opens New Cycle Against Familiar Rivals
                </h3>
              </div>
            </Link>

            <Link
              href="/news/chucky-lozano-galaxy-loan"
              className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md"
            >
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">3</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  LA Galaxy Close In on Chucky Lozano Loan
                </h3>
              </div>
            </Link>

            <Link
              href="/news/zavier-gozo-crystal-palace"
              className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md"
            >
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">4</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Zavier Gozo Nears $15M Move to Crystal Palace
                </h3>
              </div>
            </Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: August 6, 2026</p>
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
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MLSAllStarGame2026Messi() {
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
    "MLS All-Star Game 2026: No Messi, But the League Still Sees Opportunity After the World Cup";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(
    'MLS All-Star Game 2026: No Messi, but the league still sees opportunity after the World Cup ⚽️'
  )}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    articleTitle + ' ' + currentUrl
  )}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-[#020617]">
            MLS All-Star Game 2026: No Messi, But the League Still Sees Opportunity After the World Cup
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-6">
            <span>By <strong>Mio Ristić</strong></span>
            <span>•</span>
            <span>July 28, 2026</span>
          </div>

          {/* SOCIAL SHARE */}
          <div className="flex items-center gap-3 mb-8">
            <a
              href={facebookShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href={twitterShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:opacity-90 transition"
            >
              <FaTwitter size={16} />
            </a>
            <a
              href={whatsappShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition"
            >
              <FaWhatsapp size={16} />
            </a>
            <button
              onClick={handleCopyLink}
              className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center hover:bg-gray-300 transition"
            >
              <FiCopy size={16} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://assets.goal.com/images/v3/getty-2228112735/crop/MM5DIOJZGM5DEOBQHE5G433XMU5DAORSGYYA====/GettyImages-2228112735.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="MLS All-Star Game 2026 Charlotte"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Creator: FREDERIC J. BROWN | Credit: AFP via Getty Images | Copyright: AFP or licensors
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">

          <p>
            The 2026 MLS All-Star Game arrives in Charlotte without its biggest star. Lionel Messi will not be there. Neither will his Inter Miami and Argentina teammate Rodrigo De Paul. Yet Major League Soccer is still treating this week as more than just another midsummer exhibition.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            When and Where to Watch
          </h2>

          <p>
            <strong>MLS All-Star Game</strong><br />
            <strong>Date:</strong> Wednesday, July 29, 2026<br />
            <strong>Kickoff:</strong> 8:00 p.m. ET<br />
            <strong>Venue:</strong> Bank of America Stadium, Charlotte, North Carolina<br />
            <strong>TV / Streaming:</strong> Apple TV
          </p>

          <p>
            <strong>MLS All-Star Skills Challenge</strong><br />
            <strong>Date:</strong> Tuesday, July 28, 2026<br />
            <strong>Venue:</strong> Truist Field, Charlotte
          </p>

          <p>
            This is the first time Charlotte has hosted the All-Star Game. The match will feature the MLS All-Stars against a team of Liga MX All-Stars for the fifth consecutive year.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Why Messi and De Paul Are Missing
          </h2>

          <p>
            Messi and De Paul reached the World Cup final with Argentina on July 19. Under an agreement reached before the start of the 2026 season between MLS and the MLS Players Association, clubs were given flexibility to manage rest periods for players returning from the tournament.
          </p>

          <p>
            The league confirmed both players have been officially excused. There will be no suspension this time.
          </p>

          <p>
            That marks a clear change from last summer. In 2025, Messi and Jordi Alba skipped the All-Star Game in Austin without an injury designation and were each handed a one-game ban. Inter Miami owner Jorge Mas called the punishment “draconian.” This year, the league has taken a more pragmatic approach.
          </p>

          <p>
            Messi has now been named to three consecutive All-Star rosters without appearing in any of them. An ankle injury kept him out in 2024. A unilateral decision led to a suspension in 2025. In 2026, the absence is protected by policy.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Full Picture of Absences and Replacements
          </h2>

          <p>
            Messi and De Paul are not the only high-profile names missing. Chicago Fire striker Hugo Cuypers was sold to CF Monterrey for a reported $7.5 million shortly after being named to the roster, while defender Mbekezeli Mbokazi is out with a lower-body injury.
          </p>

          <p>
            MLS filled the four open spots with Yannick Bright, Andrés Cubas, Guilherme, and Philip Zinckernagel.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            2026 MLS All-Star Roster
          </h2>

          <p className="font-semibold text-lg">Goalkeepers</p>
          <ul>
            <li>Maxime Crépeau (Orlando City SC) – Coach selection</li>
            <li>Matt Freese (New York City FC) – Coach selection</li>
            <li>Brian Schwake (Nashville SC) – Fan vote</li>
          </ul>

          <p className="font-semibold text-lg">Defenders</p>
          <ul>
            <li>Max Arfsten (Columbus Crew) – Coach selection</li>
            <li>Lucas Herrington (Colorado Rapids) – Coach selection</li>
            <li>Richie Laryea (Toronto FC) – Commissioner’s pick</li>
            <li>Anthony Markanich (Minnesota United FC) – Fan vote</li>
            <li>Steven Moreira (Columbus Crew) – Coach selection</li>
            <li>Daniel Munie (San Jose Earthquakes) – Fan vote</li>
            <li>Andy Najar (Nashville SC) – Fan vote</li>
            <li>Jackson Ragen (Seattle Sounders FC) – Coach selection</li>
            <li>Tim Ream (Charlotte FC) – Fan vote</li>
          </ul>

          <p className="font-semibold text-lg">Midfielders</p>
          <ul>
            <li>Sebastian Berhalter (Vancouver Whitecaps FC) – Fan vote</li>
            <li>Pep Biel (Charlotte FC) – Coach selection</li>
            <li>Yannick Bright (Inter Miami CF) – Coach selection</li>
            <li>Andrés Cubas (Vancouver Whitecaps FC) – Coach selection</li>
            <li>Evander (FC Cincinnati) – Coach selection</li>
            <li>Carles Gil (New England Revolution) – Coach selection</li>
            <li>Zavier Gozo (Real Salt Lake) – Fan vote</li>
            <li>Hany Mukhtar (Nashville SC) – Fan vote</li>
            <li>Thomas Müller (Vancouver Whitecaps FC) – Coach selection</li>
            <li>Ashley Westwood (Charlotte FC) – Coach selection</li>
          </ul>

          <p className="font-semibold text-lg">Forwards</p>
          <ul>
            <li>Anders Dreyer (San Diego FC) – Coach selection</li>
            <li>Guilherme (Houston Dynamo FC) – Coach selection</li>
            <li>Julian Hall (New York Red Bulls) – Commissioner’s pick</li>
            <li>Son Heung-min (Los Angeles FC) – Fan vote</li>
            <li>Petar Musa (FC Dallas) – Coach selection</li>
            <li>Sam Surridge (Nashville SC) – Coach selection</li>
            <li>Philip Zinckernagel (Chicago Fire FC) – Coach selection</li>
          </ul>

          <p>
            Charlotte FC head coach Dean Smith will lead the MLS side on home soil. The roster still carries significant star power, headlined by Son Heung-min and Thomas Müller.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What the League Is Really Looking At
          </h2>

          <p>
            The on-field product is only part of the story. Around the All-Star Game, owners will hold a Board of Governors meeting. Those closed-door sessions often matter more than the 90 minutes that follow.
          </p>

          <p>
            For fans, the event remains a concentrated few days of celebration. All-Star Games in global soccer are imperfect by nature. They are not meant to decide titles. They exist to create a moment, generate attention, and give the league a platform. In a post-World Cup environment, that platform feels more valuable than usual.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Bigger Question
          </h2>

          <p>
            MLS spent years building toward this summer. The World Cup was always going to be the biggest test of whether American soccer could hold the attention of a broader audience once the tournament ended. The All-Star Game is one of the first real measuring sticks.
          </p>

          <p>
            Messi’s absence removes the easiest marketing hook. It also removes the risk of another public dispute over participation. The league is betting that a combination of new global names, the residual heat from the World Cup, and a well-run event in a growing soccer market will be enough.
          </p>

          <p>
            Whether that bet pays off will not be decided solely by the scoreline in Charlotte on July 29. It will be measured in attention, attendance, and how the league carries itself in the weeks that follow.
          </p>

          <p className="font-bold text-xl mt-10">
            The most important moments of the 2026 All-Star week may still happen away from the cameras. But the game itself will show whether MLS can keep the conversation going even when its brightest star is resting.
          </p>

        </section>

        {/* READ NEXT */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-[#020617]">Read Next</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/news/chicharito-dallas" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-6">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">1</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Chicharito Returns to MLS with FC Dallas
                </h3>
              </div>
            </Link>

            <Link href="/news/vincent-janssen-portland" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-6">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">2</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Portland Timbers Sign Vincent Janssen
                </h3>
              </div>
            </Link>

            <Link href="/news/three-stars-first-impressions" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-6">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">3</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Three Stars: First Impressions of MLS’s New Global Names
                </h3>
              </div>
            </Link>

            <Link href="/news/messi-all-star-absence" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-6">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">4</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Why Messi Will Miss the MLS All-Star Game Again
                </h3>
              </div>
            </Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: July 28, 2026</p>
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
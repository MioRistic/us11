'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function TimoWernerPlayerOfTheMonthPage() {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') setCurrentUrl(window.location.href);
  }, []);

  const handleCopyLink = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      alert('✅ Link copied to clipboard!');
    }
  };

  const articleTitle = "Timo Werner, Player of the Month: The Signing That Changed Everything for San Jose";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Timo Werner, Player of the Month: The Signing That Changed Everything for San Jose
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-04-30">April 30, 2026</time>
          </div>

          {/* SHARE BUTTONS */}
          <div className="flex items-center gap-4 mt-4">
            <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"><FaFacebookF size={20} /></a>
            <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"><FaTwitter size={20} /></a>
            <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"><FaWhatsapp size={20} /></a>
            <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"><FiCopy size={20} /></button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://assets.goal.com/images/v3/blte8f463fafee800c1/1600.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Timo Werner San Jose Earthquakes Player of the Month"
            width={1200}
            height={675}
            className="w-full h-auto object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Brandon Vallance | Copyright: 2026 Getty Images
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

          <p>
            There are moments in a season when a team’s trajectory quietly shifts — and only in hindsight does it become clear just how decisive that stretch was.
          </p>

          <p>
            For San Jose Earthquakes, April may prove to be exactly that.
          </p>

          <p>
            At the center of it all stood Timo Werner, officially named MLS Player of the Month after a run of performances that didn’t just elevate his own numbers, but redefined the ceiling of Bruce Arena’s team.
          </p>

          <p>
            In just three appearances, Werner produced four goals and three assists — seven direct goal contributions — while San Jose delivered a perfect month, winning all five of their matches and climbing to the top of the Western Conference.
          </p>

          <p>
            This wasn’t form. This was impact.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">A Month That Turned Into a Statement</h2>
          <p>
            San Jose’s numbers in April tell a story of dominance.
          </p>
          <p>
            Five matches. Five wins. A +13 goal difference. The best attack and the best defense in the league over that span.
          </p>
          <p>
            But beyond the raw output, there is historical weight to what they are doing.
          </p>
          <p>
            With nine wins from their first ten matches, the Earthquakes have achieved something no MLS team has managed since the introduction of the modern penalty rules in 2000. They have also become just the second team in league history to open a season with five consecutive away victories — a marker not just of quality, but of resilience and tactical clarity.
          </p>
          <p>
            This is no longer a surprising start. It is a pattern.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Werner’s Immediate Influence</h2>
          <p>
            When Werner arrived from RB Leipzig in January, the expectation was clear: he would add pace, verticality, and a proven European pedigree to a team in transition.
          </p>
          <p>
            Few anticipated just how quickly he would take control of the attack.
          </p>
          <p>
            In only 455 regular-season minutes, Werner has already recorded four goals and five assists. Among players with nine or more goal contributions this season, only Nashville’s Sam Surridge has reached that level in fewer minutes.
          </p>
          <p>
            Efficiency is one part of the story. Consistency is another.
          </p>
          <p>
            Werner has become the first player in Earthquakes history to record at least one goal and one assist in three consecutive matches — a reflection not just of productivity, but of his involvement in every decisive moment. Three match-winning goals and a match-winning assist underline that influence further.
          </p>
          <p>
            He is not simply contributing. He is deciding games.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Replacing More Than a Player</h2>
          <p>
            The departure of Cristian Espinoza left a question that lingered over San Jose entering the season: where would the creativity and final-third clarity come from?
          </p>
          <p>
            Arena’s answer was not like-for-like. Instead, he reshaped the structure around Werner.
          </p>
          <p>
            The German forward offers a different profile — direct running, intelligent movement between lines, and a willingness to attack space early. Where Espinoza orchestrated, Werner accelerates. Where others build, he finishes.
          </p>
          <p>
            The effect has been immediate. San Jose now plays with a sharper edge, transitioning faster, creating higher-quality chances, and — perhaps most importantly — carrying a sense of inevitability when Werner is involved in attacking sequences.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">From Surprise to Contender</h2>
          <p>
            There is always hesitation when a team starts fast in MLS. The league has a way of correcting early narratives.
          </p>
          <p>
            But San Jose are beginning to look less like a temporary storyline and more like a legitimate force.
          </p>
          <p>
            At 2.70 points per game, they are currently the most efficient team in the league. The underlying performances support the results. The structure is stable. The roles are clear.
          </p>
          <p>
            And Werner sits at the center of it.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">What Comes Next</h2>
          <p>
            Awards like Player of the Month often serve as markers — recognition of what has already happened.
          </p>
          <p>
            The more important question is what follows.
          </p>
          <p>
            Can Werner sustain this level across a longer stretch? Can San Jose maintain their balance as opponents begin to adjust? And can this early-season dominance translate into something deeper when the margins tighten later in the year?
          </p>
          <p className="font-semibold">
            For now, the answers can wait. April belonged to Werner. And in many ways, it may come to define San Jose’s season.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: April 30, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>
          <Link href="/news" className="text-sm text-gray-500 hover:text-gray-800">Back to news</Link>
        </footer>

      </div>
    </article>
  );
}
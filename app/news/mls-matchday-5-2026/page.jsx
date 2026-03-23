'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MLSMatchday5Page() {
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

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('MLS Matchday 5 2026 Recap: Nashville Explodes, Charlotte Shatters Records, LAFC Builds Historic Wall')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            MLS Matchday 5 2026 Recap: Nashville Explodes, Charlotte Shatters Records, LAFC Builds Historic Wall – What It Means for the Season
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-03-24">March 24, 2026</time>
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
            src="https://assets.goal.com/images/v3/blt0733c3edcfb41a40/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-03-22T213603.222.png?auto=webp&format=pjpg&width=1920&quality=60"
            alt="MLS Matchday 5 2026 highlights – Nashville SC 5-0 Orlando, Charlotte FC 6-1 NY Red Bulls, LAFC shutout streak"
            width={1018}
            height={420}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Source: Getty Images | Credit: Goal.com / MLS
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT – ubačen ceo tvoj tekst */}
        <section className="prose prose-lg max-w-none leading-relaxed">
          <p>After five weeks, chaos reigns in MLS. Record-breaking attacks, defensive masterclasses, and early crises define a wildly unpredictable start to 2026.</p>

          <p>Major League Soccer rarely follows a script in the early weeks, but Matchday 5 (March 21-22, 2026) delivered one of the most entertaining and revealing weekends of the young 2026 season. From Nashville SC’s statement 5-0 demolition of Orlando City to Charlotte FC’s historic 6-1 thrashing of New York Red Bulls, and LAFC’s ongoing record shutout streak, the results sent clear signals: contenders are emerging, while some big names are already in trouble.</p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Nashville SC Levels Up After Stunning Inter Miami – Now They’re the Team to Beat in the East</h2>
          <p>Nashville SC didn’t just win on Matchday 5 – they announced themselves as legitimate Supporters’ Shield contenders. Fresh off eliminating Inter Miami in the Concacaf Champions Cup Round of 16, B.J. Callaghan’s side followed up with a ruthless 5-0 home rout of Orlando City. Sam Surridge’s hat-trick pushed him to seven goals in five games, leading the Golden Boot race, while new signing Cristian Espinoza added a goal and assist in a dominant performance.</p>

          <p>This wasn’t a fluke. Nashville now tops the Eastern Conference and overall standings with an impressive 4-0-1 record. Their blend of physicality, pressing, and clinical finishing makes them a nightmare matchup – especially at GEODIS Park. After years of being a solid playoff side, Nashville looks ready to challenge for silverware in 2026.</p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Charlotte FC’s Record-Breaking Night: From Mid-Table to Eastern Powerhouse?</h2>
          <p>Charlotte FC delivered the weekend’s biggest shock with a club-record 6-1 victory over New York Red Bulls. Pep Biel, Wilfried Zaha (finally off the mark for the season), and Idan Toklomati all contributed, turning Bank of America Stadium into a goal-fest. The margin of victory and total goals set new franchise benchmarks under Dean Smith, whose structured yet explosive approach is paying dividends.</p>

          <p>This outburst vaults Charlotte into the top four in the East and signals a potential breakout year. Meanwhile, Red Bulls – who started strong under new coach – showed vulnerability on the road, raising questions about their depth.</p>

          <h2 className="text-3xl font-bold mt-10 mb-4">LAFC’s Unbreakable Defense: MLS History in the Making</h2>
          <p>While attacks stole headlines, LAFC continued their defensive masterclass with a 0-0 draw at Austin FC. Hugo Lloris and the backline extended their shutout streak to five straight games – 450 consecutive minutes without conceding in MLS play. This is now the longest opening-season clean-sheet run in league history.</p>

          <p>LAFC doesn’t need fireworks to dominate the West; their rock-solid organization and counter-attacking threat make them the conference favorite. The question is no longer if they’ll concede – it’s when someone finally breaks through.</p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Wild Finishes and Drama: The Three Must-See Matches</h2>
          <p><strong>FC Dallas 4-3 Houston Dynamo</strong> – An epic Texas Derby with seven goals, including a dramatic 86th-minute winner from Musa after Farrington’s brace. Pure chaos.</p>
          <p><strong>FC Cincinnati 4-3 CF Montréal</strong> – Down to 10 men late, Cincinnati fought back with Tom Barlow’s equalizer and Kévin Denkey’s 90+4′ winner. Mental toughness personified.</p>
          <p><strong>Inter Miami 3-2 New York City FC</strong> – Lionel Messi’s 901st career goal (a trademark free-kick) sealed a comeback win at Yankee Stadium after NYCFC led twice.</p>

          <p>Other highlights included Colorado Rapids’ Paxten Aaronson brace in a 4-1 win at Sporting KC, St. Louis CITY’s first victory under new management, and San Jose’s road upset over Vancouver.</p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Early Season Takeaways After MLS Matchday 5</h2>
          <ul className="list-disc ml-6">
            <li><strong>Eastern Conference leaders:</strong> Nashville SC (13 points), with Inter Miami, NYCFC, and now Charlotte close behind. Philadelphia Union sit dead last after five straight losses – a stunning fall from last year’s Supporters’ Shield.</li>
            <li><strong>Western Conference:</strong> LAFC remains perfect defensively and atop the table.</li>
            <li><strong>Golden Boot watch:</strong> Surridge leads with 7; watch for more fireworks from him and Messi.</li>
            <li><strong>Biggest surprises:</strong> Charlotte’s attack awakening, Nashville’s rise, Philly’s collapse.</li>
            <li><strong>What’s next:</strong> Can LAFC keep the shutouts going? Will Inter Miami find consistency post-Cup exit? Is Philadelphia’s crisis fixable?</li>
          </ul>

          <p className="mt-6">Five weeks in, MLS 2026 is delivering drama, records, and storylines galore. The race for playoffs, trophies, and individual awards is already heating up.</p>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: March 24, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>
          <Link href="/news" className="text-sm text-gray-500 hover:text-gray-800">Back to news</Link>
        </footer>

      </div>
    </article>
  );
}
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MLSMatchday8Page() {
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

  const articleTitle = "MLS Matchday 8 2026: Messi Magic in Denver, San Jose’s Historic Statement and a Weekend of 56 Goals";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(
    'MLS Matchday 8 2026: Messi scores twice to win in Denver, San Jose stuns LAFC 4-1, 56 goals across the league'
  )}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            MLS Matchday 8 2026: Messi Magic in Denver, San Jose’s Historic Statement and a Weekend of 56 Goals
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-04-20">April 20, 2026</time>
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
            src="https://assets.goal.com/images/v3/getty-2271966216/crop/MM5DEMBQGA5DCMJSGU5G433XMU5DAORWHE3A====/GettyImages-2271966216.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Lionel Messi celebrating during MLS Matchday 8 2026"
            width={1200}
            height={675}
            className="w-full h-auto object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Lionel Messi celebrates after scoring the winner against Colorado Rapids • Creator: Getty Images
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT - Duži i dublji The Athletic stil */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

          <p>
            If there was ever a weekend that perfectly captured the chaotic beauty of Major League Soccer, it was Matchday 8 of the 2026 season. Fifteen matches produced a staggering <strong>56 goals</strong> — an average of nearly four per game — while delivering high drama, record attendances, emotional comebacks and one of the most shocking results in recent MLS history.
          </p>

          <p>
            From Lionel Messi once again bending a game to his will at altitude, to a San Jose Earthquakes side that refuses to be dismissed as a fluke, this weekend reminded everyone why MLS has become one of the most entertaining leagues in the world.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Messi’s Mile-High Masterclass</h2>
          <p>
            In Denver, Inter Miami found themselves in a genuine battle. Playing in front of 75,824 fans — the second-largest crowd in MLS history — the Herons trailed 2-1 against a motivated Colorado Rapids side. But as has happened so many times before, Lionel Messi stepped up when it mattered most.
          </p>
          <p>
            The 38-year-old scored from the penalty spot in the 18th minute and then produced a moment of magic in the 79th minute to secure a 3-2 victory. It was his second decisive performance in difficult conditions this season and provided interim coach Guillermo Hoyos with a much-needed boost.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">San Jose’s Statement Win in Los Angeles</h2>
          <p>
            While Messi was stealing headlines in Colorado, something even more remarkable was happening at BMO Stadium. Bruce Arena’s San Jose Earthquakes traveled to face LAFC and left with a resounding 4-1 victory.
          </p>
          <p>
            Featuring eight homegrown players in the starting lineup, San Jose played with incredible intensity and tactical discipline. Timo Werner opened his MLS account, Ousseni Bouda scored twice, and the Quakes dismantled one of the Western Conference’s traditional powerhouses. With seven wins from eight matches, San Jose now sits level on 21 points at the top of the West alongside Vancouver Whitecaps. This is no longer a surprise package — it’s a legitimate contender.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">A Weekend Defined by Goals and Chaos</h2>
          <p>
            The goal-fest wasn’t limited to just two matches. CF Montréal thrashed the New York Red Bulls 4-1, Seattle Sounders put four past St. Louis, and Real Salt Lake edged San Diego 4-2. Even Toronto FC and Austin FC combined for six goals in a thrilling 3-3 draw, with young Kobe Franklin rescuing a point for the hosts in the 88th minute.
          </p>

          <p>
            Vancouver Whitecaps continued their strong form with a comfortable 3-0 win over Sporting KC, while Atlanta United’s poor start continued with a 0-2 home defeat to Nashville SC — leaving them with just four points from eight games.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Current Standings After Matchday 8</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="font-semibold mb-2">Eastern Conference – Top 6</p>
              <ul className="list-disc ml-6 space-y-1 text-sm">
                <li><strong>1. Nashville SC</strong> – 19 pts</li>
                <li><strong>2. Inter Miami</strong> – 15 pts</li>
                <li>3. Charlotte FC – 14 pts</li>
                <li>4. Chicago Fire – 14 pts</li>
                <li>5. New England Revolution – 12 pts</li>
                <li>6. Toronto FC – 12 pts</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">Western Conference – Top 5</p>
              <ul className="list-disc ml-6 space-y-1 text-sm">
                <li><strong>1. Vancouver Whitecaps</strong> – 21 pts</li>
                <li><strong>2. San Jose Earthquakes</strong> – 21 pts</li>
                <li>3. LAFC – 16 pts</li>
                <li>4. Seattle Sounders – 16 pts</li>
                <li>5. Real Salt Lake – 16 pts</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-10 mb-4">Key Takeaways from Matchday 8</h2>
          <ul className="list-disc ml-6 space-y-3">
            <li><strong>San Jose is real.</strong> With smart recruitment, strong academy integration, and excellent coaching under Bruce Arena, the Earthquakes have emerged as one of the most compelling stories of 2026.</li>
            <li><strong>Messi at 38 is still Messi.</strong> Even playing at altitude and against motivated opposition, he continues to produce moments that decide games.</li>
            <li><strong>Attacking football is thriving.</strong> The league-wide goal average continues to rise, making for highly watchable matches almost every weekend.</li>
            <li><strong>Atlanta United are in crisis.</strong> With just four points from eight matches, questions are growing louder about their early-season form.</li>
            <li><strong>Youth movement is accelerating.</strong> From Adri Mehmeti and Julian Hall at the Red Bulls to several standout performers in Montréal, young players are making their mark.</li>
          </ul>

          <p className="mt-10 font-medium text-lg">
            Matchday 8 was loud, unpredictable, and thoroughly entertaining. As we head deeper into the 2026 season, the narratives are becoming clearer: San Jose is a serious contender, Messi remains the league’s ultimate difference-maker, and the gap between “big clubs” and well-organized underdogs is narrower than ever.
          </p>

          <p className="mt-6 text-center font-semibold">
            The 2026 MLS season is delivering on its promise — and we’re only eight weeks in.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: April 20, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>
          <Link href="/news" className="text-sm text-gray-500 hover:text-gray-800">Back to news</Link>
        </footer>

      </div>
    </article>
  );
}
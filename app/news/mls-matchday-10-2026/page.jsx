'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function Matchday10WhatWeLearned() {
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


  const articleTitle = "What Matchday 10 Really Told Us: Vancouver’s Ruthless Recruitment, Turner’s Second Coming and the League’s Emerging Truths";

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            MLS Matchday 10 2026 : Vancouver’s Ruthless Recruitment, Turner’s Second Coming and the League’s Emerging Truths
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-04-28">April 28, 2026</time>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"><FaFacebookF size={20} /></a>
            <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"><FaTwitter size={20} /></a>
            <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"><FaWhatsapp size={20} /></a>
            <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"><FiCopy size={20} /></button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://assets.goal.com/images/v3/getty-2273145374/crop/MM5DIMJXHE5DEMZVGE5G433XMU5DAORSGE4A====/GettyImages-2273145374.jpg?auto=webp&format=pjpg&width=1920&quality=60"
            alt="Vancouver Whitecaps Matchday 10"
            width={1200}
            height={675}
            className="w-full h-auto object-cover"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: | Credit: Getty Images | Copyright: 2026 Getty Images
          </figcaption>
        </figure>

       

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

          <p>
            One-third of the way through the 2026 MLS season, Matchday 10 didn’t just provide results — it sharpened several important narratives and forced us to reevaluate what we thought we knew about certain teams and players.
          </p>
          

          <h2 className="text-3xl font-bold mt-10 mb-4">Vancouver’s Recruitment Is Operating on Another Level</h2>
          <p>
            Losing Ali Ahmed to Norwich City and Jayden Nelson to Austin FC would have been a significant setback for most clubs. For Vancouver Whitecaps, it was barely a speed bump.
          </p>
          
          <p>
            In their place arrived Cheikh Sabaly, a Senegal international coming off nearly 1,000 minutes in Ligue 1, and Bruno Caicedo, a highly-rated Ecuadorian youngster. Both have integrated seamlessly. Sabaly opened the scoring with a clinical finish off a Thomas Müller cross, while Caicedo produced a moment of explosive quality late in the 3-1 win over Colorado Rapids.
          </p>
          <p>
            This is not luck. This is deliberate, high-level recruitment. While Jesper Sørensen rightly earns praise for his tactical system, the front office deserves equal credit for consistently identifying and integrating players who immediately upgrade the squad. Vancouver is quietly building something very serious.
          </p>
           {/* VIDEO */}
        <div className="my-10">
          <h2 className="text-3xl font-bold mb-4">Matchday 10 Highlights</h2>
          <div className="aspect-video w-full bg-black rounded-2xl overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/kHdBWJh5QFY"
              title="MLS Matchday 10 Highlights"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

         <h2 className="text-3xl font-bold mt-10 mb-4">San Jose’s Road Resilience Sends a Message

</h2>
          <p>
           Perhaps the most impressive result of the weekend came in Missouri.St. Louis City had been in strong home form, yet San Jose arrived, absorbed early pressure, and left with all three points in a 3–2 victory. The Earthquakes’ ability to weather the storm and strike on the counter — led by a sharp performance from Timo Werner — was genuinely impressive.

          </p>
          <p>
           This result speaks volumes about the growing depth and mentality in the Western Conference. San Jose are far from perfect, but they are showing a resilience that was often missing in previous seasons.
          </p>

          
         <h2 className="text-3xl font-bold mt-10 mb-4">Matt Turner’s Second Coming at Nu Stadium</h2>
          <p>
            It’s starting to look like Matt Turner never left. Facing Inter Miami at Nu Stadium, the USMNT goalkeeper delivered a commanding performance with nine saves, including several highlight-reel stops against Messi and Suárez.
          </p>
          <p>
            According to advanced metrics, Turner leads all MLS goalkeepers in goals saved above expectation this season. After a difficult European spell, the 2021 MLS Goalkeeper of the Year appears to be back to his best. With the 2026 World Cup approaching, his resurgence could not be better timed.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Chicago Finally Announces Itself as a Real Contender


</h2>
          <p>
         This wasn’t just a win. This was a declaration of intent.



          </p>
          <p>
        For weeks, questions have lingered about whether Chicago had the quality to compete at the very top of the Eastern Conference. On Saturday, they answered emphatically. Hugo Cuypers delivered a clinical hat-trick as the Fire dismantled Sporting Kansas City 5–0. What stood out most wasn’t just the scoreline — it was the manner of the performance. Organized, aggressive in the press, and lethal in transition, this version of Chicago looks ready to challenge for the Eastern Conference title.


          </p>

          

          <h2 className="text-3xl font-bold mt-10 mb-4">Max Arfsten Is Finding His True Role</h2>
          <p>
            Under Henrik Rydström, Columbus Crew are evolving tactically. One of the most promising developments has been the repositioning of Max Arfsten. The 25-year-old, previously a left wing-back, is now being used higher and more inverted on the right. The early results are excellent — an assist midweek and a well-taken goal against Philadelphia Union.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">David Martínez Is Becoming LAFC’s Difference Maker</h2>
          <p>
            Marc Dos Santos hasn’t reinvented LAFC, but he has sharpened them. No player has benefited more than 20-year-old David Martínez. His goal and overall contribution in the win over Minnesota United showed growth on both sides of the ball — particularly his improved counter-pressing and work rate without possession.
          </p>

           <h2 className="text-3xl font-bold mt-10 mb-4">Nashville Keeps Winning While Looking Imperfect</h2>
          <p>
           In a match that was far more open than coach BJ Callaghan would have preferred, Nashville still found a way to win 4–2 against a dangerous Charlotte side. Sam Surridge continues to thrive as the focal point of their attack, while the midfield trio of Godoy, Davis, and Mukhtar controlled the tempo. This team doesn’t always dominate aesthetically, but they are remarkably effective. That’s the mark of a serious contender.

            </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Prince Owusu Remains One of MLS’s Most Underrated Strikers</h2>
          <p>
            For three straight seasons, Prince Owusu has delivered consistent production with very little fanfare. With six goals and three assists already this year, the Ghanaian forward continues to be the focal point of CF Montréal’s direct, combative attack. Some strikers dazzle. Owusu simply scores — quietly, efficiently, and relentlessly.
          </p>
             <h2 className="text-3xl font-bold mt-10 mb-4">Full Matchday 10 Results</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li><strong>Toronto FC 1–2 Atlanta United</strong></li>
            <li><strong>CF Montréal 1–0 New York City FC</strong></li>
            <li><strong>Minnesota United 0–1 LAFC</strong></li>
            <li><strong>Columbus Crew 2–0 Philadelphia Union</strong></li>
            <li><strong>DC United 3–2 Orlando City</strong></li>
            <li><strong>FC Cincinnati 2–0 New York Red Bulls</strong></li>
            <li><strong>Inter Miami 1–1 New England Revolution</strong></li>
            <li><strong>Austin FC 2–0 Houston Dynamo</strong></li>
            <li><strong>Chicago Fire 5–0 Sporting Kansas City</strong></li>
            <li><strong>Nashville SC 4–2 Charlotte FC</strong></li>
            <li><strong>St. Louis City 2–3 San Jose Earthquakes</strong></li>
            <li><strong>San Diego FC 1–2 Portland Timbers</strong></li>
          </ul>

          <h2 className="text-3xl font-bold mt-10 mb-4">The Bigger Picture</h2>
          <p>
            We are only one-third through the season, but the margins are already razor thin. The teams getting the small details right — recruitment, tactical flexibility, and individual development — are pulling ahead. Vancouver, New England, Columbus, LAFC, and Montréal are all proving it in different ways.
          </p>

          

        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex justify-between text-sm text-gray-600">
          <span>Published: April 28, 2026</span>
          <Link href="/news" className="hover:text-gray-800">Back to news</Link>
        </footer>

      </div>
    </article>
  );
}
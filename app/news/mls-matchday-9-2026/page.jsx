'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MLSMatchday9Page() {
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

  const articleTitle = "Midweek Madness: Goalkeeper Goals, De Paul & Suárez Magic, and San Jose’s Unstoppable Rise – MLS Matchday 9";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(
    'Matchday 9 was pure chaos: Goalkeeper scores header, De Paul & Suárez shine, San Jose win 5-1'
  )}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Midweek Madness: Goalkeeper Goals, De Paul & Suárez Magic, and San Jose’s Unstoppable Rise – MLS Matchday 9
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-04-24">April 24, 2026</time>
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
            src="https://assets.goal.com/images/v3/getty-2270923706/crop/MM5DGOBSGI5DEMJVGA5G433XMU5DAORTGEYA====/GettyImages-2270923706.jpg?auto=webp&format=pjpg&width=1920&quality=60"
            alt="MLS Matchday 9 2026 - Midweek Madness"
            width={1200}
            height={675}
            className="w-full h-auto object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Getty Images
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT - CELOKUPAN TEKST BEZ SKRAĆIVANJA */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

          <p>
            You think you’ve seen everything Major League Soccer has to offer after two months of the season. Then Matchday 9 arrives on a Wednesday night and delivers 43 goals, a goalkeeper scoring a header in stoppage time, two members of Argentina’s 2022 World Cup-winning team stealing the show, and a team that looks more legitimate by the week.
          </p>

          <p>
            Midweek Madness was not just a slogan — it was reality. From Luka Gavran’s miraculous header to Rodrigo De Paul and Luis Suárez reminding everyone of their quality, and San Jose Earthquakes continuing their dream run, this was one of the most entertaining midweek rounds in recent MLS history.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">The Goalkeeper Who Became a Hero</h2>
          <p>
            With Toronto FC on the verge of a painful 3-2 home defeat to Philadelphia Union, goalkeeper <strong>Luka Gavran</strong> did the unthinkable. He charged into the box for a 96th-minute corner and powered home a header to make it 3-3.
          </p>
          <p>
            The last goalkeeper to score in MLS was William Hesmer in 2010. Gavran didn’t just earn a point — he created one of the most memorable moments of the 2026 season and gave Toronto fans a story they will tell for years.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Argentine Magic in Utah</h2>
          <p>
            Fans came to America First Field hoping to see Lionel Messi. Instead, they witnessed brilliance from two other members of Argentina’s 2022 World Cup squad.
          </p>
          <p>
            <strong>Rodrigo De Paul</strong> opened the scoring with a stunning curling strike from distance, and minutes later <strong>Luis Suárez</strong> turned back the clock with a ferocious volley. Inter Miami won 2-0 against Real Salt Lake, extended their unbeaten run to eight games, and showed they can win without their captain producing magic.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">San Jose Is the Real Deal</h2>
          <p>
            The San Jose Earthquakes continued their fairytale start with a dominant 5-1 victory over Austin FC. Preston Judd scored twice, Timo Werner converted a penalty, and Paul Marie recorded three assists in a devastating second-half display.
          </p>
          <p>
            Bruce Arena’s side now sits atop the Supporters’ Shield with 24 points from nine games — winning eight of their first nine matches, a feat never achieved in the modern MLS era. This is no longer a surprise. This is a serious championship contender.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Other Wild Moments from Matchday 9</h2>
          <ul className="list-disc ml-6 space-y-3">
            <li><strong>Tai Baribo hat-trick</strong> — The Israeli striker scored three goals in D.C. United’s chaotic 4-4 draw with the New York Red Bulls.</li>
            <li><strong>Evander’s 95th-minute penalty</strong> — The Brazilian superstar equalized for Cincinnati in a thrilling 4-4 draw at Yankee Stadium and became the highest-scoring Brazilian in MLS history.</li>
            <li><strong>Luis Otávio’s first MLS goal</strong> — A stunning strike helped Orlando City rout Charlotte FC 4-1.</li>
            <li><strong>Alhassan Yusuf’s disallowed worldie</strong> — A stunning volley was ruled out for offside after VAR review.</li>
            <li><strong>Two-hour weather delay in Columbus</strong> — The Crew still managed a 2-1 win over LA Galaxy despite the long delay.</li>
          </ul>

          <h2 className="text-3xl font-bold mt-10 mb-4">The Bigger Picture</h2>
          <p>
            Matchday 9 was loud, unpredictable, and wildly entertaining. San Jose continues to shock the league, Inter Miami looks dangerous even without Mascherano on the bench, and individual moments of brilliance are popping up everywhere.
          </p>

          <p className="mt-10 font-medium text-lg">
            Two months into the 2026 season, one thing is clear: this league is delivering on its promise of chaos, drama, and unforgettable football. The midweek round once again proved that in MLS, anything can happen — and usually does.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: April 24, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>
          <Link href="/news" className="text-sm text-gray-500 hover:text-gray-800">Back to news</Link>
        </footer>

      </div>
    </article>
  );
}
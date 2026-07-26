'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function EnglishClubsUSATour() {
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

  const articleTitle = "English clubs keep the party going: Why football in America isn’t slowing down after the World Cup";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('English clubs keep the party going in America after the World Cup 🔥')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            English Clubs Keep the Party Going: Why Football in America Isn’t Slowing Down After the World Cup
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-07-26">July 26, 2026</time>
          </div>

          {/* SOCIAL SHARE */}
          <div className="flex items-center gap-4 mt-6">
            <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition">
              <FaFacebookF size={20} />
            </a>
            <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-black text-white hover:opacity-80 transition">
              <FaTwitter size={20} />
            </a>
            <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[#25D366] text-white hover:opacity-80 transition">
              <FaWhatsapp size={20} />
            </a>
            <button onClick={handleCopyLink} className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors">
              <FiCopy size={20} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-video">
          <Image
            src="https://assets.goal.com/images/v3/getty-2254270434/crop/MM5DGMRZHE5DCOBVGY5G433XMU5DAORWHA======/GettyImages-2254270434.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="English clubs USA Summer Tour 2026"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Copyright: Getty Images
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8 text-gray-800">
          <p>
            Barely a week after the final whistle of the 2026 World Cup, the football fever in the United States shows no signs of cooling. While fans are still processing the tournament’s record-breaking attendance and viewership, four English clubs have already arrived to continue the celebration.
          </p>
          <p>
            Leeds United, Liverpool, Sunderland and Wrexham are currently deep into a high-profile pre-season tour across America — and their presence feels less like a standard summer trip and more like confirmation of something bigger.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            English Football Lands in the Heart of America
          </h2>
          <p>
            The USA Summer Tour 2026 features three Premier League sides and one Championship club with outsized cultural reach. Wrexham, buoyed by the global popularity of Ryan Reynolds and the <em>Welcome to Wrexham</em> series, sits alongside Liverpool, Leeds and Sunderland.
          </p>
          <p>
            Matches are being staged at major venues: Raymond James Stadium in Tampa, GEODIS Park in Nashville, Yankee Stadium in New York, Sports Illustrated Stadium in New Jersey, Soldier Field in Chicago and Subaru Park outside Philadelphia. Tickets have moved quickly. Crowds are strong. The atmosphere at several venues has already felt closer to a competitive match than a typical pre-season friendly.
          </p>
          <p>
            For the English clubs, this is preparation. For American audiences, it is another reminder of what elite European football looks and feels like up close.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            How English Football Still Differs from MLS
          </h2>
          <p>
            The gap remains visible, even if it is narrowing.
          </p>
          <p>
            English clubs bring intensity, tempo and technical sharpness that MLS has not fully matched. The Premier League’s trademark is the speed of transition, physical duels and tactical discipline forged through weekly high-stakes matches. Even in pre-season — with many players still recovering from World Cup duty — the quality of the first touch, the press and the final ball often stands out.
          </p>
          <p>
            MLS, meanwhile, continues its upward trajectory. The league is wealthier than ever, stocked with global names and buoyed by the performances of American and Mexican players who impressed on the World Cup stage. The style remains more open and slightly slower, with greater emphasis on athleticism and space. Yet the standard rises every year.
          </p>
          <p>
            These summer matches serve both sides. English clubs get sharp opposition and large crowds. MLS clubs and fans get a clear measuring stick — and motivation.
          </p>
          <p>
            Simply put: English teams still play a higher-intensity brand of football. But MLS is no longer an easy opponent. That closing gap is the most encouraging development for the American game.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Real Story: Football Didn’t Leave with the Trophy
          </h2>
          <p>
            The most important takeaway from this summer is that interest did not evaporate once the World Cup trophy was lifted.
          </p>
          <p>
            MLS has returned from its break to sharp rises in ticket sales — some clubs reporting jumps of 150–200 percent. The MLS All-Star Game against Liga MX is set for July 29 in Charlotte. The Premier League is preparing major activations across the country ahead of its new season. And English clubs touring Florida, Tennessee, New York and Chicago are simply adding fuel to an already burning fire.
          </p>
          <p>
            The 2026 World Cup was not just a tournament. It functioned as a rocket launch for the sport in the United States. Viewership, attendance, youth interest and jersey sales all surged. Now, with English clubs still filling stadiums weeks later, the message is becoming harder to ignore.
          </p>
          <p className="font-semibold text-lg text-[#020617] mt-8">
            Football in America is no longer a seasonal curiosity. It has stayed. And it is still growing.
          </p>
          <p>
            The English clubs came to prepare for their own campaigns. In the process, they have become part of a larger story — the story of how “soccer” in the United States is steadily turning into proper football.
          </p>
        </section>

        {/* NEXT FOR YOU */}
        <section className="mt-16 border-t pt-8 bg-white">
          <h2 className="text-4xl font-extrabold text-[#111] mb-8 text-center">
            Next For You
          </h2>

          <div className="grid md:grid-cols-2 gap-6 px-4 md:px-8">
            <Link href="/news/griezmann-debut-goal" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">1</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Antoine Griezmann Announces Himself Immediately: Historic Debut Goal Powers Orlando City to 4-0 Thrashing
                </h3>
              </div>
            </Link>

            <Link href="/news/suarez-lewandowski-debut" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">2</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Suárez Spoils Lewandowski’s MLS Debut as Inter Miami Edge Chicago 3-2
                </h3>
              </div>
            </Link>

            <Link href="/news/nycfc-pulisic" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">3</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  NYCFC CEO Brad Sims Sends Clear Message: “We Want Christian Pulisic”
                </h3>
              </div>
            </Link>

            <Link href="/news/messi-recap" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">4</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Lionel Messi at the 2026 World Cup: Magic, Controversy, and One Last Stand
                </h3>
              </div>
            </Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: July 26, 2026</p>
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
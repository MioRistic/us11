'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function HenryHallOfFame() {
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
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(
    "MLS Hall of Fame: Thierry Henry — The King Who Brought Class to New York"
  )}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            MLS Hall of Fame: Thierry Henry — The King Who Brought Class to New York
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-04-12">April 12, 2026</time>
          </div>

          {/* SHARE BUTTONS */}
          <div className="flex items-center gap-4 mt-4">
            <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"><FaFacebookF size={18} /></a>
            <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"><FaTwitter size={18} /></a>
            <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"><FaWhatsapp size={18} /></a>
            <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"><FiCopy size={18} /></button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://assets.goal.com/images/v3/getty-459466526/crop/MM5DCNZWGA5DSOJQHJXG653FHIZDGNR2GE3TM===/GettyImages-459466526.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Thierry Henry New York Red Bulls"
            width={1200}
            height={675}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            
            
            Copyright: 2014 Getty Images
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none space-y-8 leading-relaxed">

          <p>
            For a generation of MLS fans who discovered the league in the early 2010s, one name towers above the rest in New York Red Bulls history: Thierry Henry.
          </p>

          <p>
            The elegant Frenchman arrived as a global superstar in the twilight of his career and brought world-class quality, leadership, and the club’s first major trophy to Red Bull Arena. 
            A Ballon d’Or contender, World Cup champion, and one of the greatest strikers of all time — Henry became a true Red Bulls legend and a worthy entrant into the MLS Hall of Fame.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">The Arrival in New York</h2>
          <p>
            In July 2010, Thierry Henry shocked the football world by signing with the New York Red Bulls as a Designated Player. 
            The 32-year-old had just helped Barcelona win the treble in 2009, but he chose MLS over staying in Europe.
          </p>

          <p>
            At his introductory press conference at Red Bull Arena, Henry was clear: “I came here to play and win.” 
            He understood what many didn’t at the time — that MLS was growing fast and deserved respect. From the moment he stepped on the pitch, 
            Henry elevated the league’s profile and brought sold-out crowds and global attention to Harrison, New Jersey.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">Overcoming Doubts</h2>
          <p>
            Many questioned whether a player of Henry’s caliber could still perform at the highest level in a new league, new country, and new style of play. 
            He arrived mid-season in 2010 and needed time to adapt, but the doubts quickly disappeared.
          </p>

          <p>
            Henry showed the same intelligence, movement, and finishing that made him a superstar at Arsenal and Barcelona. 
            He became the heartbeat of the team — not just scoring, but creating, leading, and demanding the highest standards from everyone around him.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">Making His Mark</h2>
          <p>
            In 122 regular-season appearances for the Red Bulls (118 starts), Henry scored 51 goals and provided 42 assists. 
            He was named Team MVP in 2011 and 2012, earned multiple MLS All-Star selections, and made the MLS Best XI three times.
          </p>

          <p>
            His best individual season came in 2012 with 15 goals and 12 assists. But 2013 was the year that defined his legacy in MLS.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">The Supporters’ Shield — Breaking the Curse</h2>
          <p>
            After 18 years without a major trophy, the Red Bulls finally won the 2013 Supporters’ Shield. On the final day of the season against Chicago Fire, 
            Henry opened the scoring with a calm, classy finish and the team cruised to a 5-2 victory in front of a sold-out Red Bull Arena.
          </p>

          <p>
            It was the first piece of silverware in club history, and Henry — as captain — dedicated it to the fans.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">Vintage Henry Moments</h2>
          <p>
            Even in MLS, Henry produced moments of pure magic: the spectacular bicycle kick against Montreal, long-range strikes, cheeky chips, 
            perfectly weighted assists, and that outrageous backheel pass in the playoffs that only he could conceive.
          </p>

          <p>
            He wasn’t just scoring — he was entertaining, teaching younger players, and showing what top-level football looks like. 
            Opponents feared him, teammates respected him, and fans adored the elegance he brought every single week.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">A Lasting Legacy</h2>
          <p>
            In New York, Henry wasn’t just a big-name signing who came for a paycheck. He embraced the city, the club, and the league. 
            He pushed the Red Bulls to new heights, helped develop the next generation, and left the club in a much better place than he found it.
          </p>

          <p>
            He never won the MLS Cup — the one thing missing from his Red Bulls story — but his impact went far beyond trophies. 
            Henry proved that world-class talent could thrive in MLS and helped change how the league is viewed around the world.
          </p>

          <p className="font-semibold">
            A true pioneer, a captain, a goalscorer, an artist on the pitch — Thierry Henry is now, and forever will be, an MLS Hall of Famer.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: April 12, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>

          <div className="flex gap-2">
            <Link href="/blog/mls-hall-of-fame/" className="text-sm text-gray-500 hover:text-gray-800">
              Hall of Fame
            </Link>
          </div>
        </footer>

      </div>
    </article>
  );
}
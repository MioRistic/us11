'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function RonaldoArticle() {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') setCurrentUrl(window.location.href);
  }, []);

  const handleCopyLink = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      alert('Link copied to clipboard!');
    }
  };

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(
    "Cristiano Ronaldo and Inter Miami: Why a Move to MLS Isn’t So Simple"
  )}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Cristiano Ronaldo and Inter Miami: Why a Move to MLS Isn’t So Simple
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-02-06">February 9, 2026</time>
          </div>

          {/* TAGS */}
          <div className="flex flex-wrap items-center gap-2 mt-3">
            <Link href="/teams/inter-miami" className="text-xs bg-pink-600 text-white px-3 py-1 rounded-full hover:bg-pink-700 transition">
              #InterMiami
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <div className="flex items-center gap-3">
              <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"><FaFacebookF size={18} /></a>
              <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"><FaTwitter size={18} /></a>
              <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"><FaWhatsapp size={18} /></a>
              <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"><FiCopy size={18} /></button>
            </div>
          </div>
        </header>

        {/* Feature Image */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://assets.goal.com/images/v3/getty-2167147749/crop/MM5DIOJSHA5DENZXGI5G433XMU5DAORRGM2A====/GettyImages-2167147749.jpg?auto=webp&format=pjpg&width=1920&quality=60"
            alt="Cristiano Ronaldo in action"
            width={1200}
            height={500}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Yasser Bakhsh 
| 
Credit: Getty Images
Copyright: 2024 Getty Images
          </figcaption>
        </figure>

        {/* Article Content */}
        <section className="prose prose-lg max-w-none space-y-8 mb-9 leading-relaxed">

          <p>
            Cristiano Ronaldo’s recent standoff with Al Nassr has dominated headlines. The Portugal international reportedly went on strike, frustrated by what he perceives as a lack of ambition from the Saudi Pro League club, particularly in comparison with other PIF-owned teams such as Al Ittihad, Al Hilal, and Al Ahli. This dispute has reignited speculation about his next destination, with Major League Soccer—and specifically Inter Miami—frequently mentioned.
          </p>

          <p>
            But as tempting as it sounds, a move to MLS is far from straightforward.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Salary Demands Remain a Major Obstacle</h2>

          <p>
            At 41, Ronaldo earns a staggering $4.73 million per week at Al Nassr, translating to approximately $246 million annually before bonuses. Add in reported bonuses of $50 million per year, and the financial reality becomes clear: very few clubs anywhere in the world could realistically match that compensation, and MLS teams are simply not structured to do so.
          </p>

          <p>
            Even Inter Miami, despite having potential Designated Player (DP) slots open following the retirements of Sergio Busquets and Jordi Alba, would need to navigate MLS’s strict salary budget and the league’s own financial fair play rules. Meeting Ronaldo’s wage demands would require extraordinary restructuring and could impact the club’s ability to build the squad around him.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Messi Factor: Potential, Not Reality</h2>

          <p>
            Rumors of Ronaldo joining Inter Miami frequently focus on the possibility of pairing him with Lionel Messi. The narrative is tantalizing: two of the game’s greatest players sharing the same field in the twilight of their careers. But in reality, they have never played together at a club level, and their established roles present significant questions.
          </p>

          <p>
            Messi has already assumed leadership and central influence at Inter Miami. Ronaldo would need a role that offers immediate autonomy and a clear central position to make the partnership viable. Simply assuming that their rivalry on the field would translate smoothly into collaboration ignores both tactical considerations and locker room dynamics.
          </p>

          <p>
            Whether they could form a complementary tandem, or whether one would dominate the team’s attacking focus, remains entirely speculative. At best, it could become one of the most exciting duos MLS has ever seen; at worst, it could be a one-way street, where the team must adapt around two aging superstars with distinct styles and histories of individual dominance.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Marketing Impact: Unmatched Global Reach</h2>

          <p>
            Even if the sporting logistics are challenging, there is no question that Ronaldo in MLS would be a marketing phenomenon. Inter Miami would likely sell more jerseys in 2026 than any other club globally, regardless of form or fitness. Both Messi and Ronaldo command unparalleled commercial power, and the combination would elevate the league’s visibility worldwide, attracting fans, sponsors, and media attention in a way few other signings could.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bottom Line</h2>

          <p>
            A move for Ronaldo to MLS—and specifically to Inter Miami—is far more complex than media speculation suggests. Salary, roster rules, and tactical fit present significant hurdles. Pairing him with Messi is a tempting storyline, but one that cannot be realized without careful planning and financial maneuvering.
          </p>

          <p>
            For now, the discussions remain hypothetical. Should Al Nassr and MLS find a path that reconciles ambition, finances, and playing time, the league could witness one of the most sensational signings in modern football history. Until then, it remains a story of potential, rather than reality.
          </p>

        </section>

        {/* Footer */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: February 9, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>
          <div className="flex gap-2">
            <Link href="/news" className="text-sm text-gray-500 hover:text-gray-800">
              Back to news
            </Link>
          </div>
        </footer>

      </div>
    </article>
  );
}

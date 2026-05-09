'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function CasemiroToInterMiami() {
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

  const articleTitle =
    "Casemiro to Inter Miami? The High-Stakes Gamble That Could Define Messi’s Final Chapter";

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Casemiro to Inter Miami? The High-Stakes Gamble That Could Define Messi’s Final Chapter
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-05-09">May 9, 2026</time>
          </div>

          {/* SOCIAL SHARE */}
          <div className="flex items-center gap-4 mt-4">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"
            >
              <FaFacebookF size={20} />
            </a>

            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"
            >
              <FaTwitter size={20} />
            </a>

            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"
            >
              <FaWhatsapp size={20} />
            </a>

            <button
              onClick={handleCopyLink}
              className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"
            >
              <FiCopy size={20} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://assets.goal.com/images/v3/getty-2264815577/crop/MM5DGMZWGA5DCOBZGA5G433XMU5DINZZHIYTENQ=/GettyImages-2264815577.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Casemiro Inter Miami Transfer Rumors"
            width={1200}
            height={675}
            className="w-full h-auto object-cover"
            priority
          />

          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Stu Forster | Credit: Getty Images | Copyright: 2026 Getty Images
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

          <p>
            Nothing is signed yet. But the rumors have reached the point where they can no longer be ignored.
          </p>

          <p>
            According to multiple reports, including those from Fabrizio Romano, Casemiro is expected to leave Manchester United this summer when his contract expires. Inter Miami has emerged as the clear frontrunner for the 34-year-old Brazilian defensive midfielder.
          </p>

          <p>
            If the move materializes, it would represent one of the most significant roster decisions in Inter Miami’s short history — and one that could heavily shape the final chapter of Lionel Messi’s career.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            What Inter Miami Would Actually Get
          </h2>

          <p>
            Casemiro is no longer the indestructible force of his Real Madrid peak, but he remains one of the most effective defensive midfielders in the game when it comes to winning duels, breaking up play, and shielding the back line.
          </p>

          <p>Inter Miami would gain three clear things:</p>

          <ul className="list-disc pl-6 space-y-5 my-6">

            <li>
              <strong>Immediate Defensive Steel and Leadership</strong><br />
              Since Sergio Busquets’ departure, Miami’s midfield has occasionally lacked bite and structure. Casemiro’s positioning, anticipation, and sheer physical presence would bring a level of reliability and authority the Herons have missed.
            </li>

            <li>
              <strong>The Perfect Complement to Messi and Suárez</strong><br />
              Few players understand how to protect superstar attackers better than Casemiro. Having spent years alongside Modrić and Kroos at Real Madrid, he knows exactly when to drop deep, when to cover, and when to give creative players the freedom to operate. In Miami, he could form a formidable partnership with a younger, more dynamic midfielder.
            </li>

            <li>
              <strong>Proven Big-Game Mentality</strong><br />
              Five Champions League titles don’t lie. Casemiro has performed on the biggest stages and thrived under pressure. In a locker room built around Messi and Suárez, that pedigree and winning mentality would carry significant weight.
            </li>

          </ul>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            The Very Real Risks
          </h2>

        
                       <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8">
                                <Image
                                  src="https://assets.goal.com/images/v3/getty-1328064897/crop/MM5DGMBQGA5DCNRYHA5G433XMU5DAORXGI======/GettyImages-1328064897.jpg?auto=webp&format=pjpg&width=3840&quality=60"
                                  alt="USMNT 2026 Home Jersey"
                                  width={1200}
                                  height={800}
                                  className="w-full h-auto object-cover"
                                  priority
                                />
                                <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
                                  Creator: Buda Mendes
 | 
Credit: Getty Images
Copyright: 2021 Getty Images
                                </div>
                              </figure>

          

          <p>
            However, this would not be a risk-free signing.
          </p>

          <p>The concerns are substantial:</p>

          <ul className="list-disc pl-6 space-y-5 my-6">

            <li>
              <strong>Age and Durability</strong><br />
              At 34, Casemiro’s body has already absorbed more than a decade of elite-level football. The physical toll of MLS — frequent travel, condensed schedule, and artificial surfaces — could accelerate his decline.
            </li>

            <li>
              <strong>Financial and Roster Implications</strong><br />
              Even arriving as a free agent, Casemiro would likely demand a high base salary and a significant Designated Player slot. That commitment could limit Miami’s flexibility to sign younger talents or another star attacker in the coming years.
            </li>

            <li>
              <strong>Tactical Fit</strong><br />
              Casemiro is a classic No. 6 — a destroyer who sits in front of the defense. Inter Miami, under their current coaches, has leaned toward a more possession-based, fluid style. Integrating him smoothly may require tactical adjustments.
            </li>

            <li>
              <strong>Opportunity Cost</strong><br />
              By going all-in on a 34-year-old, Miami would be explicitly choosing to extend their current “win-now” window with Messi and Suárez rather than accelerating the transition toward a younger, more sustainable project.
            </li>

          </ul>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            The Bigger Strategic Question
          </h2>

          <p>
            This rumored move is about more than adding one strong midfielder. It is Inter Miami deciding what kind of club they want to be in 2026 and beyond.
          </p>

          <p>
            Do they bet everything on one last, glorious title push while Messi is still capable of magic? Or do they begin the difficult process of building for life after the greatest player of his generation?
          </p>

          <p>
            Casemiro would be the ultimate “win-now” signing — a proven winner who can help deliver immediate trophies, but whose impact is likely to be relatively short-term.
          </p>

          <p className="text-xl font-semibold mt-10">
            The coming weeks will tell us whether Inter Miami is willing to roll the dice on one final roll of the dice with their aging superstars — or whether they are ready to start thinking beyond the Messi era.
          </p>

        </section>

        

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-gray-600">
          <div>
            <p>Published: May 9, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>

          <Link href="/news" className="hover:text-gray-800">
            Back to news
          </Link>
        </footer>

      </div>
    </article>
  );
}
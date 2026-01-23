'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function LozanoArticle() {
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
    "Hirving Lozano, San Diego FC and the 2026 World Cup dilemma"
  )}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Hirving “Chucky” Lozano and the World Cup Question: Aguirre’s Message Is Clear
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-01-18">January 23, 2026</time>
          </div>

          {/* TAGS */}
      <div className="flex flex-wrap items-center gap-2 mt-3">
        <Link href="/teams/san-diego/lozano" className="text-xs bg-green-600 text-white px-3 py-1 rounded-full hover:bg-green-700 transition">
          #Lozano
        </Link>
        <Link href="/teams/san-diego" className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full hover:bg-blue-700 transition">
          #San Diego FC
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
            src="https://assets.goal.com/images/v3/getty-1245147268/crop/MM5DIMBQGQ5DEMRVGI5G433XMU5DKMRYHI4DE===/GettyImages-1245147268.jpg?auto=webp&format=pjpg&width=1920&quality=60"
            alt="Hirving Lozano San Diego FC"
            width={1200}
            height={500}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            AFP
          </figcaption>
        </figure>

           {/* Article Content */}
        <section className="prose prose-lg max-w-none space-y-8 mb-9 leading-relaxed">

          <p>
            Hirving “Chucky” Lozano has reached a crossroads in his career. Once one of the defining faces of Mexican football, his place at the 2026 World Cup is no longer guaranteed. Javier Aguirre’s message to him, according to sources close to the situation, is direct and uncompromising: no consistent club minutes, no spot in the national team.
          </p>

          <p>
            For a player with Lozano’s pedigree — a former PSV and Napoli standout — that warning lands heavy. Reputation alone will not carry him to a World Cup on home soil.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">From Franchise Icon to Uncertain Fit</h2>
          <p>
            When San Diego FC brought Lozano to MLS, the plan was clear. He was supposed to be the face of the project — the leader, the star around whom the identity of a brand-new club would be built. A player meant to symbolize ambition, professionalism and international credibility.
          </p>
          <p>
            And in some ways, he did. Younger teammates benefited from training with a player who had lived at the top level in Europe, who had played at the Stadio Diego Armando Maradona and carried expectations in major competitions.
          </p>
          <p>
            But football doesn’t live on reputation. It lives on performance.
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold mb-3">2025 MLS Season Stats</h3>
          <ul>
            <li>9 goals in 27 league appearances</li>
            <li>2 goals in the playoffs</li>
            <li>Internally tracked at 9 goals and 10 assists</li>
          </ul>
          <p>Solid numbers. But for a designated-player salary and star billing, they were not the kind that make a player untouchable.</p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Things Stalled</h2>
          <p>
            Several factors have complicated Lozano’s role in San Diego.
          </p>
          <ul className="list-disc ml-6">
            <li><strong>Tactical fit:</strong> His style did not always align with the system the club wants to build — especially in pressing and off-ball movement.</li>
            <li><strong>Off-field tension:</strong> At one point he was left out of the squad following a reported verbal confrontation in the locker room, further damaging his standing.</li>
            <li><strong>Others stepped up:</strong> Players like Anders Dreyer delivered more consistent performances and became central to the club’s long-term plans.</li>
          </ul>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">San Diego Is Ready to Move On</h2>
          <p>
            San Diego FC has now made it clear that Lozano is not part of the sporting plan for next season. The club is actively working on an exit — through a transfer or another solution.
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold mb-3">Potential Destinations</h3>
          <ul className="list-disc ml-6">
            <li><strong>Cruz Azul:</strong> The strongest concrete interest. The Liga MX side is pushing for a permanent deal, not a loan.</li>
            <li><strong>Atlanta United (MLS):</strong> Links exist due to Tata Martino’s past relationship with Lozano, but DP slots, salary structure and roster mechanics make it complicated.</li>
            <li><strong>Liga MX – wider interest:</strong> Toluca and Tigres are mentioned, while Chivas, Monterrey and Pachuca are not currently leading contenders.</li>
          </ul>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Real Question: San Diego or the World Cup?</h2>
          <p>
            Lozano is reportedly reluctant to leave San Diego. But the reality is stark:
          </p>
          <ul className="list-disc ml-6">
            <li>The club cannot guarantee him minutes</li>
            <li>Without minutes, Aguirre cannot guarantee him selection</li>
            <li>Without form, the World Cup drifts further away</li>
          </ul>
          <p className="font-semibold">
            For Lozano, this is no longer just about a transfer window. It is about whether a player who defined a generation of Mexican attackers will even be part of the story in 2026. Time is not on his side. And every game he doesn’t play shortens his road to the World Cup.
          </p>

        </section>

        {/* Footer */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: January 18, 2026</p>
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
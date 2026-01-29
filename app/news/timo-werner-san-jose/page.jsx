'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function WernerArticle() {
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
    "Timo Werner in San Jose: Why This Transfer Changes Everything"
  )}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Timo Werner in San Jose: The Contract, the Context, and Why This Transfer Changes the Direction of the Earthquakes
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-01-28">January 28, 2026</time>
          </div>

          {/* TAGS */}
          <div className="flex flex-wrap items-center gap-2 mt-3">
            <Link href="/teams/san-jose-earthquakes" className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full hover:bg-blue-700 transition">
              #SJEarthquakes
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
            src="https://assets.goal.com/images/v3/getty-1752670823/crop/MM5DEOBXHE5DCNRRHE5G433XMU5DAORRGUYA====/GettyImages-1752670823.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Timo Werner joins San Jose Earthquakes"
            width={1200}
            height={500}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: RONNY HARTMANN 
| 
Credit: AFP via Getty Images
Copyright: AFP or licensors
          </figcaption>
        </figure>

        {/* Article Content */}
        <section className="prose prose-lg max-w-none space-y-8 mb-9 leading-relaxed">

          <p>
            The San Jose Earthquakes have officially announced the arrival of one of the most recognizable German forwards of his generation. Timo Werner, the 29-year-old German international, has joined from RB Leipzig and signed a contract that runs until June 2028. He will take up a Designated Player spot, immediately making him one of the most significant projects in the club’s history.
          </p>

          <p>
            According to the club’s statement, Werner’s arrival also required technical maneuvering within the MLS system. San Jose had to purchase his Discovery Priority from New York Red Bulls for $50,000 in General Allocation Money (GAM) for 2026. This further underlines how planned and long-term this transfer truly was.
          </p>

          <p>
            Werner brings 449 professional appearances, 153 goals, and 86 assists. He debuted with VfB Stuttgart before becoming a Bundesliga star at RB Leipzig. After that came Chelsea, where he won the Champions League and Club World Cup in 2021, followed by a spell at Tottenham.
          </p>

          <p>
            On the international stage, Werner has earned 57 caps for Germany and scored 24 goals. He featured at the 2018 World Cup and Euro 2020, placing him among the most experienced players ever to join San Jose.
          </p>

          <p>
            The contract until 2028 shows the Earthquakes don’t see Werner as a short-term fix. He isn’t here to wind down his career—he’s here to lead a new chapter under Bruce Arena’s project of structure, discipline, and identity.
          </p>

          <p>
            The winter window context makes this even clearer. With Josef Martínez and Cristian Espinoza gone and Cristian Arango likely leaving, San Jose lost its attacking core. Werner arrives not just as a replacement, but as the axis around which the new offense will be built.
          </p>

          <p>
            Arena personally traveled to Germany to speak with Werner—an unusual but powerful signal of ambition. In MLS terms, this isn’t a marketing signing. It’s a football decision.
          </p>

          <p>
            Werner made it clear: he’s here to win trophies. For a club that hasn’t been a true contender in years, that sets a new standard.
          </p>

          <p>
            San Jose has history, but not continuity. Timo Werner doesn’t guarantee success—but he defines the direction. The Earthquakes are building around football again.
          </p>

        </section>

         {/* Footer */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: January 24, 2026</p>
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

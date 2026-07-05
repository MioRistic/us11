'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function USMNTvsBosniaPreview() {
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

  const articleTitle = "USMNT vs Bosnia and Herzegovina: A Golden Opportunity, But No Room for Complacency";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('USMNT face Bosnia in Round of 32 – Preview ⚽️')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            USMNT vs Bosnia and Herzegovina: A Golden Opportunity, But No Room for Complacency
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-06-29">June 29, 2026</time>
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
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://assets.goal.com/images/v3/getty-2283365405/crop/MM5DINRWGY5DENRSGU5G433XMU5DAORSGQZQ====/GettyImages-2283365405.jpg?auto=webp&format=pjpg&width=1920&quality=60"
            alt="USMNT vs Bosnia and Herzegovina 2026"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Credit: Getty Images | Copyright: 2026 Getty Images
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8 text-gray-800">

          <p className="text-xl">
            SANTA CLARA, Calif. — The group stage is over. The United States finished top of Group D with six points and a statement of intent. Now the real World Cup begins.
          </p>

          <p>
            On July 1 at the San Francisco Bay Area Stadium, the USMNT will face Bosnia and Herzegovina in the Round of 32. It is, on paper, one of the more favorable matchups available to a top-seeded team. But as Mauricio Pochettino and his players are well aware, favorable on paper does not always translate on the pitch.
          </p>

         <div className="mb-12">
  <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
    A Familiar Opponent With Teeth
  </h2>
  
  <p className="text-gray-700 leading-relaxed">
    Bosnia and Herzegovina advanced as one of the best third-placed teams, and they arrive in California with nothing to lose and plenty to prove. 
    This is a side built on experience and tactical discipline. Edin Džeko remains a dangerous focal point up front, while Miralem Pjanić and the midfield provide technical quality and set-piece threat.
  </p>

  <p className="text-gray-700 leading-relaxed mt-6">
    They are physical, organized, and capable of punishing any complacency. Pochettino has already warned his players not to underestimate the challenge.
  </p>

  <blockquote className="border-l-4 border-gray-300 pl-6 italic text-lg my-8 text-gray-700">
    “Every team in the knockout stage is dangerous,” he said. “Bosnia has quality players and a strong mentality. We must be at our best.”
  </blockquote>

  <p className="text-gray-700 leading-relaxed">
    For the USMNT, this is an opportunity. A winnable game against a side they should, on talent and current form, be able to overcome. 
    But it is also a test of maturity — the first true knockout pressure of the tournament on home soil.
  </p>
</div>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Pochettino’s Big Decisions
          </h2>
          <p>
            The Argentine coach faces several key choices. Christian Pulisic returned against Türkiye and looked close to full fitness. His presence changes the entire attacking dynamic. Folarin Balogun has been in strong form, and the midfield trio of Tyler Adams, Weston McKennie, and Malik Tillman gives the USMNT balance and physicality.
          </p>

          <p>
            The defensive line remains the area of most concern. The rotation against Türkiye exposed some vulnerabilities, and Pochettino must decide whether to go with his strongest available back four or continue to manage minutes and yellow card situations. Rotation will be limited now. This is knockout football. Every player knows the margin for error is razor thin.


          </p>

          <div className="mb-12">
  <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
    Home Advantage and Momentum
  </h2>
  
  <p className="text-gray-700 leading-relaxed">
    The atmosphere in Santa Clara is expected to be heavily pro-American, with a large Bosnian-American community also expected to make noise. 
    The USMNT has fed off home crowds throughout the group stage, and that support could be decisive again.
  </p>

  <p className="text-gray-700 leading-relaxed mt-6">
    The bigger picture is clear: this is the moment the 2026 World Cup truly starts for the United States. 
    They have already achieved the minimum goal of advancing from the group. Now they have the chance to make a deeper run — something that has eluded them in recent tournaments.
  </p>

  <p className="text-gray-700 leading-relaxed mt-6">
    Pochettino has spoken repeatedly about building belief. A win against Bosnia would do exactly that.
  </p>
</div>

          <p className="font-semibold text-lg mt-10">
            The bigger picture is clear: this is the moment the 2026 World Cup truly starts for the United States. They have already achieved the minimum goal of advancing from the group. Now they have the chance to make a deeper run.
          </p>

          <p className="font-bold text-xl mt-8">
            The statement has been made. Now it’s time to prove it.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: June 29, 2026</p>
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
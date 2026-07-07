'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function EtihadParkArticle() {
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

  const articleTitle = "Etihad Park: How New York City FC’s Long-Awaited Soccer-Specific Stadium Is Finally Taking Shape";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Etihad Park is rising — NYCFC’s future home takes shape ⚽️')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Etihad Park: How New York City FC’s Long-Awaited Soccer-Specific Stadium Is Finally Taking Shape
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-07-07">July 7, 2026</time>
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
            src="https://i.ibb.co/Ld5X8fm7/im-52639548.avif"
            alt="Etihad Park Construction New York City FC"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Creator: Associated Press
 | 
Credit: Associated Press
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8 text-gray-800">

          <p>
            For more than a decade, New York City FC fans have been waiting for a true home. Temporary stays at Yankee Stadium and Citi Field, while functional, never quite felt permanent. That wait is now entering its final chapter.
          </p>

          <p>
            <strong>Etihad Park</strong>, New York City’s first-ever soccer-specific stadium, is rising in Willets Point, Queens — and construction progress as of mid-2026 shows a project that is very much on track.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Exact Location and Context
          </h2>
          <p>
            The stadium is being built at 126-87 Willets Point Boulevard, directly adjacent to Citi Field in the historic Willets Point neighborhood. It forms the centerpiece of a larger mixed-use redevelopment that includes affordable housing, a new public school, a hotel, retail space, and significant public open areas.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Current Construction Status (as of July 2026)
          </h2>
          <ul>
            <li><strong>Groundbreaking:</strong> December 4, 2024</li>
            <li><strong>Topping Out:</strong> March 25, 2026 — completed on schedule</li>
            <li><strong>Current Phase:</strong> Superstructure largely complete. Work is advancing on the roof, exterior cladding, seating bowls, and interior fit-out.</li>
          </ul>

          <p>
            The stadium’s distinctive rectangular form and “The Cube” main entrance are becoming clearly visible from surrounding highways and elevated trains.
          </p>

          <p>
            The project remains on schedule for a <strong>summer 2027 opening</strong>, aligning with the start of the 2027–28 MLS season.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Key Technical Details
          </h2>
          <ul>
            <li><strong>Capacity:</strong> 25,000 seats</li>
            <li><strong>Cost:</strong> Approximately $780 million (100% privately financed by City Football Group)</li>
            <li><strong>Architect:</strong> HOK</li>
            <li><strong>General Contractor:</strong> Turner Construction</li>
            <li><strong>Notable Features:</strong> First fully electric outdoor professional sports stadium in the United States, extensive LED displays, a large Supporters Porch, and excellent public transit access.</li>
          </ul>

          <p>
            The venue will also host matches during the 2028 Los Angeles Olympics.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Broader Significance
          </h2>
          <p>
            Beyond NYCFC, the stadium will become the new home of Gotham FC (reigning NWSL champions) starting in 2028. This shared facility marks a historic moment for women’s soccer in New York.
          </p>

          <p>
            For the city, Etihad Park represents a major win in the push to establish New York as a true global soccer capital.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Bottom Line
          </h2>
          <p>
            After years of planning, delays, and temporary homes, Etihad Park is no longer a distant rendering. Steel is up, the shape is clear, and the finish line is visible in 2027.
          </p>

          <p className="font-bold text-xl mt-8">
            For NYCFC supporters who have waited patiently through more than a decade of uncertainty, the wait is almost over. A true home — built for soccer, in Queens — is on the horizon.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: July 7, 2026</p>
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
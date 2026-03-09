'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function CosmosArticle() {
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
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent("Why the New York Cosmos Remain Outside MLS")}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Why the New York Cosmos, Once America’s Soccer Giants, Remain Outside MLS
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-03-09">March 9, 2026</time>
          </div>

          {/* SHARE BUTTONS */}
          <div className="flex items-center gap-4 mt-4">
            <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition">
              <FaFacebookF size={20} />
            </a>
            <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition">
              <FaTwitter size={20} />
            </a>
            <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition">
              <FaWhatsapp size={20} />
            </a>
            <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition">
              <FiCopy size={20} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://nypost.com/wp-content/uploads/sites/2/2022/12/GettyImages-488780302-1.jpg?resize=1200,810&quality=75&strip=all"
            alt="New York Cosmos history and USL League One return"
            width={1018}
            height={420}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Focus On Sport 
| 
Credit: Getty Images
Copyright: 1977 Focus on Sport
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">
          <p>
            In the spring of 1975, a 34-year-old Pelé stepped onto the turf at Downing Stadium in New York and changed everything. The Brazilian legend, already a three-time World Cup winner, didn’t just join a soccer team—he ignited a cultural moment in a country that had barely registered the sport. The New York Cosmos, backed by Warner Communications visionary Steve Ross, became the face of American soccer’s first true boom. Crowds swelled to 77,691 for a 1977 playoff game against the Fort Lauderdale Strikers. Franz Beckenbauer arrived from Bayern Munich, Giorgio Chinaglia from Lazio, Carlos Alberto from Santos. The Cosmos weren’t merely competing; they were performing, turning soccer into spectacle in a way the United States had never seen.
          </p>

          <p>
            Fast-forward five decades, and the name still carries weight. Yet as the 2026 USL League One season approaches—with the Cosmos preparing for their March 14 opener against Portland Hearts of Pine at the historic Hinchliffe Stadium in Paterson, New Jersey—the club remains firmly outside Major League Soccer. The question lingers: why hasn’t one of American soccer’s most storied brands found its way into the top flight?
          </p>

          <h2 className="font-bold">The Golden Era and the Inevitable Crash</h2>
          <p>
            The Cosmos of the NASL era were built on star power and big spending. Pelé’s three-year deal reportedly earned him over $4 million (roughly $20 million today), while Beckenbauer and others followed suit. The glamour worked—until it didn’t. By the mid-1980s, NASL attendance had cratered amid over-expansion, salary inflation, and a lack of television revenue. The league folded after 1984; the Cosmos, burdened by debts and unable to post the required performance bond for 1985, were effectively dissolved. A 28-year hiatus followed, during which the brand survived largely through licensing and nostalgia.
          </p>
          <p>
            When revival came in 2010, led by Paul Kemsley and later Seamus O’Brien, the ambition was clear: return the Cosmos to prominence, ideally in MLS. Negotiations with commissioner Don Garber were serious. New York was a priority market for expansion, and the Cosmos name carried instant recognition. Yet talks stalled. MLS’s expansion fees—already climbing toward nine figures—were a hurdle. The league’s single-entity structure, with its salary cap and centralized control, clashed with the independent, European-style vision many Cosmos stakeholders held.
          </p>

          <h2 className="font-bold">The MLS Door That Never Fully Opened</h2>
          <p>
            Multiple windows existed. In the early 2010s, before NYCFC’s 2013 announcement (debut 2015), the Cosmos were frequently mentioned as the logical second New York team. Garber himself acknowledged the brand’s appeal. Yet the club’s ownership—particularly after Rocco Commisso’s 2017 acquisition—grew increasingly adversarial toward MLS. MLS, already committed to NYCFC and viewing the New York market as saturated with the Red Bulls, drew a line: no third team.
          </p>

          <h2 className="font-bold">A New Chapter in Paterson</h2>
          <p>
            Today’s Cosmos, under Baye Adofo-Wilson and Erik Stover, compete in USL League One at the refurbished Hinchliffe Stadium. The roster blends experience with local talent, and the focus has shifted to sustainability, youth development, and community impact.
          </p>

          <h2 className="font-bold">What Might Have Been—and What Still Could Be</h2>
          <p>
            Had the Cosmos accepted MLS terms a decade ago, they might now be competing in front of packed crowds at a soccer-specific stadium. Instead, they embody the tension in American soccer: top-tier stability versus independent, community-focused growth. As they prepare for 2026, the green shirts are back on the field. The story isn’t over.
          </p>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: March 9, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>
          <div className="flex gap-2">
            <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-800">
              Back to blog
            </Link>
          </div>
        </footer>

      </div>
    </article>
  );
}
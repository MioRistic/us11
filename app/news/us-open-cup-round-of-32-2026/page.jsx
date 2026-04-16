'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function USOpenCupRoundOf32Page() {
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

  const articleTitle = "US Open Cup Round of 32 2026: Multiple Upsets as Four MLS Teams Eliminated";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            US Open Cup Round of 32 2026: Multiple Upsets as Four MLS Teams Eliminated
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-04-16">April 16, 2026</time>
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
            src="https://assets.goal.com/images/v3/getty-1705295975/crop/MM5DGNRXG45DEMBWHA5G433XMU5DAORTGM2A====/GettyImages-1705295975.jpg?auto=webp&format=pjpg&width=1920&quality=60"
            alt="US Open Cup Round of 32 2026"
            width={1200}
            height={675}
            className="w-full h-auto object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Copyright: 2025 Getty Images
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT - Tvoj ORIGINALNI tekst bez skraćivanja */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

          <p>
            The 2026 U.S. Open Cup Round of 32 delivered exactly what makes this competition special — giant-killings, late drama, and unforgettable moments for lower-division teams.
          </p>

          <p>
            Four MLS clubs were knocked out, several USL sides produced heroic performances, and penalty shootouts decided two thrilling ties. Here’s the full recap, biggest surprises, and what it means as we head into the Round of 16.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Biggest Upsets of the Round</h2>

          <h3 className="text-2xl font-bold">One Knoxville SC 3–3 (6–5 pens) D.C. United</h3>
          <p>
            The story of the round. USL League One side One Knoxville eliminated MLS side D.C. United on penalties after a 3-3 thriller. This is exactly why the Open Cup still matters.
          </p>

          <h3 className="text-2xl font-bold">Colorado Springs Switchbacks FC 3–0 Sporting Kansas City</h3>
          <p>
            A dominant display from the USL Championship team. Sporting KC were completely outplayed, marking another disappointing early exit for the MLS side.
          </p>

          <h3 className="text-2xl font-bold">Louisville City FC 2–1 Austin FC</h3>
          <p>
            Louisville City continued their strong tradition of punching above their weight, eliminating Austin FC and advancing to the Round of 16.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Expected Results and Solid Performances</h2>
          <p>
            Most top MLS teams advanced, but not without some scares:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Charlotte FC 6–0 Charlotte Independence</strong> – A ruthless showing from the MLS side.</li>
            <li><strong>Columbus Crew 3–0 Richmond Kickers</strong> – Comfortable progress for the defending champions.</li>
            <li><strong>NY Red Bulls 3–1 Pittsburgh Riverhounds SC</strong> – Solid win on the road.</li>
            <li><strong>Houston Dynamo 4–1 El Paso Locomotive FC</strong> – Houston looked sharp in attack.</li>
            <li><strong>San Jose Earthquakes 2–0 Phoenix Rising FC</strong> – Clean sheet and controlled performance.</li>
          </ul>

          <p>
            Orlando City needed a late goal to beat FC Naples 1-0, while New England Revolution advanced past Rhode Island FC on penalties (1-1, 3-1 pens).
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Standout Performances and Young Talent</h2>
          <p>
            Jude Terry (17 years old) scored a stunning debut goal for LAFC before they eventually lost to Portland. Adri Mehmeti (17) and Julian Hall (18) impressed for the New York Red Bulls in their 2-2 draw with Inter Miami.
          </p>
          <p>
            The emergence of young academy products continues to be one of the most positive stories of the 2026 season.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Key Takeaways from Round of 32</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>MLS vulnerability:</strong> Four MLS teams (D.C. United, Austin FC, Sporting KC, and others on penalties) are already out. This shows the danger of underestimating lower-league opponents in single-elimination format.</li>
            <li><strong>Cup magic is alive:</strong> USL teams once again proved they can compete and create memorable nights.</li>
            <li><strong>Scheduling pressure:</strong> With a congested MLS calendar, rotation and squad depth are becoming critical factors.</li>
            <li><strong>Penalty drama:</strong> Two matches were decided from the spot, highlighting the mental toughness required in knockout football.</li>
          </ul>

          <h2 className="text-3xl font-bold mt-10 mb-4">What’s Next?</h2>
          <p>
            The Round of 16 will be drawn soon and is scheduled for April 28–29, 2026. More top MLS teams will enter the competition, making the knockout stages even more competitive and unpredictable.
          </p>

          <p className="mt-8 font-medium">
            The U.S. Open Cup continues to deliver excitement and opportunity. For lower-division clubs, it’s a chance to dream. For MLS teams, it’s a reminder that no match is easy — especially when silverware is on the line.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: April 16, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>
          <Link href="/news" className="text-sm text-gray-500 hover:text-gray-800">Back to news</Link>
        </footer>

      </div>
    </article>
  );
}
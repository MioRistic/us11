'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function GriezmannOrlandoPage() {
  const [currentUrl, setCurrentUrl] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.log('Copy failed');
    }
  };

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(
    'Antoine Griezmann to Orlando City: A World Cup Winner Heads to MLS – What It Means for 2026'
  )}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Antoine Griezmann to Orlando City: A World Cup Winner Chooses MLS – The Move That Could Reshape the East
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-03-24">March 24, 2026</time>
          </div>

          {/* SHARE BUTTONS */}
          <div className="flex items-center gap-4 mt-4">
            <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80">
              <FaFacebookF size={20} />
            </a>

            <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80">
              <FaTwitter size={20} />
            </a>

            <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80">
              <FaWhatsapp size={20} />
            </a>

            <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
              <FiCopy size={20} />
            </button>

            {copied && <span className="text-green-600 text-sm">Copied!</span>}
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://assets.goal.com/images/v3/blt2ccb4598094c1547/2.jpg"
            alt="Antoine Griezmann"
            width={1018}
            height={420}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Credit: Getty Images
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed">

          <h2 className="text-3xl font-bold mt-10 mb-4">Why Now? Why Orlando? And Why Griezmann?</h2>
      <p>At 35, Griezmann remains elite — still creating, scoring, and pressing at a high level for Atlético. But the pull of MLS is clear: family stability, a less grueling schedule, and the chance to play in a World Cup host country (2026) while potentially extending his France career. He’s long spoken of American culture, NBA games, and vacations in the U.S. Orlando offers Disney proximity, a passionate fanbase, and a rising project under Oscar Pareja.</p>

      <p>For Orlando City, this is transformative. They sit mid-table in the East but have ambition. Pairing Griezmann with Facundo Torres, Duncan McGuire, and a solid core could make them instant contenders — especially in a conference already featuring Nashville’s surge and Charlotte’s explosion. Imagine Griezmann vs. Messi in Florida derbies; the marketing writes itself.</p>

      <h2 className="text-3xl font-bold mt-10 mb-4">The Bigger Picture: MLS’s Golden Era Continues</h2>
      <p>Griezmann joins a growing list: Messi, Suárez, Busquets in Miami; Son Heung-min at LAFC; Müller in Vancouver; Rodríguez in Minnesota; Lloris in goal. But unlike those clustered in South Florida or the West, Griezmann in Orlando spreads the star power. The East becomes must-watch: Inter Miami’s galaxy vs. Orlando’s French flair vs. Nashville’s American grit.</p>

      <p>Risks exist — age, adaptation, motivation — but Griezmann’s professionalism is legendary. If he arrives fit and hungry, he could deliver 15+ goals/assists per season and mentor a young squad. Orlando could leap from playoff hopefuls to Supporters’ Shield challengers.</p>

      <h2 className="text-3xl font-bold mt-10 mb-4">What’s Next</h2>
      <p>Signatures are imminent. Griezmann debuts likely in July 2026, post-summer window. Orlando’s season could change overnight. For MLS, it’s proof the league is no retirement home — it’s a destination for legends still in their prime.</p>

      <p>This is more than a signing. It’s validation. And it’s going to be fun to watch.</p>
    </section>



        

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:justify-between gap-4 text-sm text-gray-600">
          <div>
            <p>Published: March 24, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>

          <Link href="/news" className="hover:text-black">
            Back to news
          </Link>
        </footer>

      </div>
    </article>
  );
}
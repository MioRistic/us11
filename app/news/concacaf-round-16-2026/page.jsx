'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";

export default function ConcacafRound162026() {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") setCurrentUrl(window.location.href);
  }, []);

  const handleCopyLink = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      alert("✅ Link copied to clipboard!");
    }
  };

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent("MLS in Concacaf Champions Cup 2026 Round of 16")}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Concacaf Champions Cup 2026 Round of 16: MLS Makes History with Nine Teams
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-03-10">March 10, 2026</time>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <div className="flex items-center gap-3">
              <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition">
                <FaFacebookF size={18} />
              </a>
              <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition">
                <FaTwitter size={18} />
              </a>
              <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition">
                <FaWhatsapp size={18} />
              </a>
              <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition">
                <FiCopy size={18} />
              </button>
            </div>
          </div>
        </header>

        {/* Feature Image */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://assets.goal.com/images/v3/getty-2260983710/crop/MM5DIMBQGA5DEMRVGA5G433XMU5DAORSGA4Q====/GettyImages-2260983710.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Concacaf Champions Cup 2026 Round of 16 MLS teams"
            width={1200}
            height={500}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: 
| 
Credit: Getty Images
Copyright: 2026 Getty Images
          </figcaption>
        </figure>

        {/* Article Content */}
        <section className="prose prose-lg max-w-none space-y-8 mb-9 leading-relaxed">

          <p>
            The 2026 Concacaf Champions Cup has reached its knockout intensity, and for the first time in recent memory, Major League Soccer arrives with a record nine clubs in the Round of 16. With the tournament's stakes higher than ever — a spot in the 2029 FIFA Club World Cup for the winner, plus the 2026 FIFA Intercontinental Cup berth — this phase marks the true beginning of the continental campaign for MLS sides.
          </p>

          <p>
            Three high-profile clashes against Liga MX heavyweights headline the matchups, while internal MLS derbies add another layer of intrigue. After a dominant Round One showing, the league's representatives now face the real test. Here's the full breakdown of the nine MLS clubs still standing, their paths forward, and what this round could mean for MLS's long-standing quest to break Liga MX's 18-year grip on the title.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">The MLS Matchups in Round of 16</h2>

          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Philadelphia Union vs. Club América:</strong> First leg March 10 at Subaru Park. Philadelphia hosts seven-time champions Club América. Tactical discipline and home advantage could make this a tense series.
            </li>
            <li>
              <strong>FC Cincinnati vs. Tigres UANL:</strong> First leg March 12 at TQL Stadium. Cincinnati faces Liga MX experience; exploiting transitions at home could shock the region.
            </li>
            <li>
              <strong>San Diego FC vs. Deportivo Toluca:</strong> First leg March 11 at Snapdragon Stadium. San Diego’s high-energy style meets reigning Liga MX champions Toluca.
            </li>
            <li>
              <strong>LA Galaxy vs. Mount Pleasant FA:</strong> First leg March 11 at Dignity Health Sports Park. A favorable draw for LA Galaxy against Jamaican champions.
            </li>
            <li>
              <strong>Los Angeles FC vs. LD Alajuelense:</strong> First leg March 10 at BMO Stadium. LAFC’s quality and depth make this a winnable series.
            </li>
            <li>
              <strong>Nashville SC vs. Inter Miami CF:</strong> First leg March 11 at GEODIS Park. MLS showdown with Messi and company in Miami.
            </li>
            <li>
              <strong>Vancouver Whitecaps FC vs. Seattle Sounders FC:</strong> Cascadia derby, all-MLS clash with tight, physical competition.
            </li>
          </ul>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">What This Round Means for MLS</h2>

          <p>
            Nine MLS teams in the Round of 16 is a milestone — more representation than ever. The three Liga MX clashes are the litmus test: MLS has closed the gap in talent depth, infrastructure, and tactical sophistication, but Liga MX still holds the edge in knockout experience.
          </p>

          <p>
            Progress in these matchups would signal a genuine shift in continental power. For clubs like San Diego and Philadelphia, advancement boosts domestic confidence and attracts investment. Miami and Seattle carry the banner for a potential first MLS title since 2022. The road ahead is unforgiving: quarterfinals in April, semifinals in May, and the final on May 30.
          </p>

        </section>

        {/* Footer */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: March 10, 2026</p>
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
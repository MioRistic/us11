'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function GoldCup2027Format() {
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
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const articleTitle =
    "Concacaf Has Rewritten the Gold Cup. The 2027 Tournament Will Look Different From the Start.";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Concacaf Has Rewritten the Gold Cup. The 2027 Tournament Will Look Different From the Start.
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-11-07">November 7, 2026</time>
          </div>

          <div className="flex items-center gap-4 mt-5">
            <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full border border-gray-300 hover:bg-gray-100 transition">
              <FaFacebookF size={16} />
            </a>
            <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full border border-gray-300 hover:bg-gray-100 transition">
              <FaTwitter size={16} />
            </a>
            <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full border border-gray-300 hover:bg-gray-100 transition">
              <FaWhatsapp size={16} />
            </a>
            <button onClick={handleCopyLink} className="p-2.5 rounded-full border border-gray-300 hover:bg-gray-100 transition">
              <FiCopy size={16} />
            </button>
          </div>
        </header>

        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://assets.goal.com/images/v3/getty-2223851504/crop/MM5DINJVGM5DENJWGE5G433XMU5DAORRGM4Q====/GettyImages-2223851504.jpg?quality=60&auto=webp&format=pjpg&width=2160"
            alt="Concacaf Gold Cup trophy"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Credit: Getty Images
          </div>
        </figure>

        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">
          <p>Concacaf confirmed on Thursday that the 2027 Gold Cup will abandon its long-standing format of four groups of four. Instead, the 16 teams will be split into two groups of eight. Each team will play four group-stage matches rather than three, and the top four from each group will advance to the knockout rounds.</p>

          <p>The change is designed to produce more competitive fixtures earlier in the tournament. Under the new system, teams will be placed into eight pots of two based on the Concacaf rankings, with one team from each pot drawn into each group. Within those groups, sides will then be organized into four ranking bands. Every team will face one opponent from each band, using a predetermined fixture matrix. It is not a pure round-robin. Teams will not play all seven other members of their group. The structure has drawn comparisons to the Swiss-style model UEFA introduced in the Champions League.</p>

          <p>Victor Montagliani, Concacaf president, said the goal is to give fans more meaningful matches between the region’s stronger sides from the opening week. In previous editions, the United States and Mexico were routinely placed in separate groups and often avoided each other until the later stages. The new format does not guarantee an early meeting between the two, but it makes that possibility more realistic than it has been under the old system. It also raises the floor of the group stage. A top seed is more likely to face a competitive mix of opponents across its four matches rather than three games that frequently included at least one clear mismatch.</p>

          <p>The tournament will still feature 16 teams — 15 from Concacaf plus Saudi Arabia as a guest. Qualification remains tied to the Nations League, with additional spots decided through preliminary rounds in March. The official draw is scheduled for April 8, 2027. The competition itself runs from June 17 to July 11, with the group stage concluding on June 30, quarterfinals on July 3-4, semifinals on July 7-8, and the final on July 11.</p>

          <p>For the United States, the practical effect is a longer group stage and a higher chance of facing stronger opposition before the knockout rounds. That is the trade-off Concacaf is accepting. The old format protected the favorites early and concentrated the best matches later. The new one spreads the difficulty more evenly and accepts that some of the tournament’s highest-profile games could arrive before the quarterfinals. Whether that produces a more compelling event is something that will only be clear once the groups are drawn and the first round of matches is played.</p>

          <p>The format is set. The questions about how it will actually feel on the field remain open.</p>
        </section>

        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: November 7, 2026</p>
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

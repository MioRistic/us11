'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function Fc27AmericanMen() {
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

  const articleTitle =
    "The 10 Highest-Rated American Men in FC 27. None of Them Play in MLS.";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('The 10 highest-rated American men in FC 27. None of them play in MLS.')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  const ratings = [
    ['1', 'Christian Pulisic', 'AC Milan', 'CAM', '83'],
    ['2', 'Weston McKennie', 'Juventus', 'CM', '80'],
    ['3', 'Johnny Cardoso', 'Atlético Madrid', 'CDM', '80'],
    ['4', 'Antonee Robinson', 'Fulham', 'LB', '80'],
    ['5', 'Folarin Balogun', 'AS Monaco', 'ST', '80'],
    ['6', 'Chris Richards', 'Crystal Palace', 'CB', '80'],
    ['7', 'Sergiño Dest', 'PSV', 'RB', '79'],
    ['8', 'Malik Tillman', 'Bayer Leverkusen', 'CAM', '79'],
    ['9', 'Tyler Adams', 'Bournemouth', 'CDM', '79'],
    ['10', 'Tim Weah', 'Marseille', 'RM', '78'],
  ];

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            The 10 Highest-Rated American Men in FC 27. None of Them Play in MLS.
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-10-09">October 9, 2026</time>
          </div>
        </header>

        <div className="flex items-center gap-3 mb-8">
          <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border hover:bg-gray-50 transition" aria-label="Share on Facebook">
            <FaFacebookF />
          </a>
          <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border hover:bg-gray-50 transition" aria-label="Share on X">
            <FaTwitter />
          </a>
          <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border hover:bg-gray-50 transition" aria-label="Share on WhatsApp">
            <FaWhatsapp />
          </a>
          <button onClick={handleCopyLink} className="p-2 rounded-full border hover:bg-gray-50 transition" aria-label="Copy link">
            <FiCopy />
          </button>
          {copied && <span className="text-sm text-green-600">Copied</span>}
        </div>

        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://assets.goal.com/images/v3/getty-2267704044/crop/MM5DENRQHA5DCNBWG45G433XMU5DEORRGQ3Q====/GettyImages-2267704044.jpg?auto=webp&format=pjpg&width=2048&quality=60"
            alt="Christian Pulisic"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Copyright: Getty Images
          </div>
        </figure>

        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">
          <p>
            EA’s United States list does not start with a man. Sophia Wilson is 88 at the Portland Thorns. Rose Lavelle and Trinity Rodman are 87. Christian Pulisic is the first American man on the board, at 83, and he is 13th among Americans. The top 10 men are all in Europe. Not one plays in MLS.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-300">
                  <th className="py-3 pr-4 font-semibold">#</th>
                  <th className="py-3 pr-4 font-semibold">Player</th>
                  <th className="py-3 pr-4 font-semibold">Club</th>
                  <th className="py-3 pr-4 font-semibold">Pos</th>
                  <th className="py-3 font-semibold">OVR</th>
                </tr>
              </thead>
              <tbody>
                {ratings.map((row) => (
                  <tr key={row[1]} className="border-b border-zinc-200">
                    {row.map((cell) => (
                      <td key={cell} className="py-3 pr-4">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            Weah is the tenth name if the list has to stop at ten. Alejandro Zendejas, Ricardo Pepi and Cameron Carter-Vickers are also 78. Zendejas is at Club América. Pepi is at PSV. Carter-Vickers is at Celtic. None of those three are in MLS either.
          </p>

          <p>
            Pulisic is the only man above 80 on his own. Pace 87, shooting 83, dribbling 84. The five 80s are McKennie, Cardoso, Robinson, Balogun and Richards. McKennie is the most complete on the face stats: 79 passing, 79 dribbling, 79 defending, 81 physical. Robinson is the fullback EA still trusts. Balogun is the only striker in the ten. Richards is the only center back.
          </p>

          <p>
            The 79s are Dest, Tillman and Adams. Dest is still a right back in the database. Tillman is a CAM. Adams is the 79 who defends.
          </p>

          <p className="font-semibold text-lg mt-10">
            The MLS names sit under that line. Cristian Roldan is 77. Sebastian Berhalter is 76. Paxten Aaronson, Matt Turner and Brian White are 75. Messi is 89 in the same game, Lewandowski and Griezmann 84, and none of them are American. The highest-rated American men EA could find are the ones who left. If you want an American core above 79, you are building Milan, Juventus, Atlético, Fulham, Monaco and Palace. The league on the box does not have a man in that ten.
          </p>
        </section>

        

        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: October 9, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>
        <Link href="/gaming" className="mt-4 sm:mt-0 hover:text-black transition-colors">
  ← Back to gaming
</Link>
        </footer>

      </div>
    </article>
  );
}

'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MLSMatchday4Page() {
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
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('MLS Matchday 4 2026: Late Drama, Blowouts, and the Chaos That Defines Early-Season Soccer')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            MLS Matchday 4 2026: Late Drama, Blowouts, and the Chaos That Defines Early-Season Soccer
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By US11 Analysis</span>
            <span>•</span>
            <time dateTime="2026-03-16">March 16, 2026</time>
          </div>

          {/* SHARE BUTTONS */}
          <div className="flex items-center gap-4 mt-4">
            <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"><FaFacebookF size={20} /></a>
            <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"><FaTwitter size={20} /></a>
            <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"><FaWhatsapp size={20} /></a>
            <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"><FiCopy size={20} /></button>
          </div>
        </header>

        {/* FEATURE IMAGE – placeholder; replace src with real Matchday 4 image if available */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://assets.goal.com/images/v3/blt8209e4c975d96a14/GettyImages-2250417409.jpg?auto=webp&format=pjpg&width=3840&quality=60" // ← Replace with better MLS action shot
            alt="MLS Matchday 4 2026 highlights – Vancouver Whitecaps, New England Revolution, late goals"
            width={1018}
            height={420}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: 
| 
Credit: Getty Images
Copyright: 2025 Getty Images
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed">
          <p>In the whirlwind of Major League Soccer's fourth matchday, the league once again reminded us why it's the most unpredictable domestic competition in North America. From last-gasp equalizers to outright demolitions, this weekend delivered a smorgasbord of narratives: teams finding their footing, others stumbling into crisis, and a handful of stars emerging from the shadows. With 15 games packed into a frenetic schedule, the storylines are already piling up like stoppage-time goals—seven of which, astonishingly, came after the 90th minute across the slate. If Matchday 3 was about tentative steps, this round was a full sprint into the season's heart.</p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Eastern Conference: Fireworks in the North, Struggles in the South</h2>

          <h3 className="text-2xl font-semibold mt-6 mb-2">Toronto FC 1-1 New York Red Bulls</h3>
          <p>Daniel Salloi put Toronto ahead just before halftime with a clinical finish, but Eric Choupo-Moting's equalizer in the seventh minute of stoppage time stole a point for the Red Bulls. It was a gut-punch for Toronto, who dominated possession but couldn't kill the game.</p>

          <h3 className="text-2xl font-semibold mt-6 mb-2">Atlanta United 3-1 Philadelphia Union</h3>
          <p>Emmanuel Latte Lath opened the scoring with a blistering run, followed by strikes from Jacob and Alexey Miranchuk. Union's late consolation did little to mask their defensive woes. Atlanta midfielder Cooper Sanchez: “Obviously a great feeling to get the first three points of the year, a big one at home...”</p>

          <h3 className="text-2xl font-semibold mt-6 mb-2">Columbus Crew 0-1 Nashville SC</h3>
          <p>Hany Mukhtar's 94th-minute stunner handed Columbus a frustrating home defeat. Crew midfielder Max Arfsten: “Definitely frustrating... we need to create more quality chances on offense.”</p>

          <h3 className="text-2xl font-semibold mt-6 mb-2">New England Revolution 6-1 FC Cincinnati</h3>
          <p>The blowout of the weekend. Daniel Ceballos (twice), Dor Turgeman, Yusuf, Yow, and Miller overwhelmed Cincinnati. Coach Marko Mitrovic: “What matters more than six goals is the way we play.”</p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Western Conference: Penalties, Comebacks, and Shutouts</h2>

          <h3 className="text-2xl font-semibold mt-6 mb-2">FC Dallas 3-3 San Diego</h3>
          <p>Petar Musa’s hat trick, including a 95th-minute equalizer, rescued Dallas from a 3-1 deficit. Coach Eric Quill: “The guys were warriors. If you want to be a champion, you need that mentality.”</p>

          <h3 className="text-2xl font-semibold mt-6 mb-2">Vancouver Whitecaps 6-0 Minnesota United</h3>
          <p>Brian White's double highlighted Vancouver's demolition—their best-ever start to an MLS season. Minnesota looked shell-shocked.</p>

          <h3 className="text-2xl font-semibold mt-6 mb-2">LAFC 2-0 St. Louis City</h3>
          <p>Mathieu Choiniere's brace and Hugo Lloris's four saves secured a clean-sheet professional outing.</p>

          <h2 className="text-3xl font-bold mt-10 mb-4">The Bigger Picture: Trends and Takeaways</h2>
          <ul className="list-disc ml-6">
            <li><strong>Stoppage-time madness:</strong> Seven goals after 90 minutes—nearly a quarter of the weekend's total.</li>
            <li><strong>Penalty fest:</strong> Over a dozen spot-kicks across the slate as referees crack down on box contact.</li>
            <li><strong>Standouts:</strong> Musa's heroics, White's finishing, Mukhtar's clutch gene.</li>
            <li><strong>Red flags:</strong> Cincinnati and Minnesota need urgent resets.</li>
          </ul>

          <p className="mt-6">As we head into the international break, Vancouver and LAFC lead the West, while New England surges in the East. But in MLS, one weekend can flip everything. The chaos is just beginning.</p>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: March 16, 2026</p>
            <p>Author: US11 Analysis</p>
          </div>
          <Link href="/news" className="text-sm text-gray-500 hover:text-gray-800">Back to news</Link>
        </footer>

      </div>
    </article>
  );
}
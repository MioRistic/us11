'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function CremaschiParmaPermanent() {
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

  const articleTitle = "Benjamin Cremaschi’s Move to Parma Made Permanent: The Full Story of the American Midfielder’s European Journey";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Benjamin Cremaschi joins Parma permanently 🇺🇸')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Benjamin Cremaschi’s Move to Parma Made Permanent: The Full Story of the American Midfielder’s European Journey
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-07-13">July 13, 2026</time>
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx-OyYFOezlJ99SwImyDlE2hrcELC06dVliqAIp20QYleTdBhmwUWhCH51&s=10"
            alt="Benjamin Cremaschi Parma"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Creator: DeFodi Images | Credit: DeFodi Images via Getty Images | Copyright: 2026 DeFodi Images
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8 text-gray-800">

          
          <p>
            Benjamin Cremaschi has officially left Inter Miami. Parma have triggered the <strong>€4 million</strong> buy option (approximately $4.3–4.6 million) on the 20-year-old American’s loan deal, making the transfer permanent, according to Fabrizio Romano.
          </p>

          <p>
            The move marks the end of Cremaschi’s chapter at the club where he came through the academy and established himself as one of the brightest young talents in MLS.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            How It All Started
          </h2>
          <p>
            Cremaschi was a key product of Inter Miami’s academy and broke into the first team with high expectations. He was named U.S. Young Player of the Year in 2025 and earned three senior caps for the United States national team.
          </p>

          <p>
            However, his playing time became limited under then-manager Javier Mascherano. The versatile midfielder was often deployed out of position, which led to frustration. In August 2025, Cremaschi publicly addressed his situation:
          </p>
          <blockquote>
            “I’m frustrated, I want to play. I think the most important thing for me is to be at a very high level, and to get there, I need minutes and experience. I’ve played very little in these recent games.”
          </blockquote>

          <p>
            Shortly after those comments, Inter Miami agreed to send him on loan to Parma in September 2025.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Loan Spell in Serie A
          </h2>
          <p>
            Cremaschi made his debut for Parma in October 2025. He showed flashes of quality but struggled for consistent minutes and form. In total, he made nine appearances before suffering a season-ending meniscus injury in March 2026.
          </p>

          <p>
            Despite the limited playing time and the injury, Parma decided to exercise the buy option and secure him on a permanent basis.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Messi Influence
          </h2>

           {/* FEATURE IMAGE */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://i.ibb.co/VWZsCM24/Getty-Images-1752634475-1140x760.jpg"
            alt="Benjamin Cremaschi Parma"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Creator: Matt Kelley
 | 
Credit: Getty Images
Copyright: 2023 Getty Images
          </div>
        </figure>

          <p>
            During his time at Inter Miami, Cremaschi had the rare opportunity to train and play alongside Lionel Messi. That daily exposure to one of the greatest players of all time is something that cannot be replicated in regular training.
          </p>

          <p>
            Sources close to the team noted that Cremaschi’s tactical awareness and professionalism improved noticeably after Messi’s arrival.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What This Means for All Parties
          </h2>
          <ul>
            <li><strong>For Cremaschi:</strong> A fresh start in Serie A at the age of 20. He now has the stability and platform to rebuild his confidence.</li>
            <li><strong>For Inter Miami:</strong> The departure frees up an international roster spot and provides some financial return.</li>
            <li><strong>For Parma:</strong> They secure a young, technically gifted midfielder with international experience at a relatively low cost.</li>
          </ul>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Bigger Picture
          </h2>
          <p>
            Cremaschi’s journey reflects a common path for talented young American players — breaking through in MLS, seeking more minutes and higher competition in Europe, and trying to build a long-term career abroad.
          </p>

          <p className="font-bold text-xl mt-8">
            At just 20 years old, Benjamin Cremaschi still has plenty of time to fulfill the potential that once made him one of the most promising prospects in American soccer.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: July 13, 2026</p>
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
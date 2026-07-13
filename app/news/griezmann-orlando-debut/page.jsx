'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function GriezmannOrlandoDebut() {
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

  const articleTitle = "Antoine Griezmann Officially Arrives in Orlando: Goal and Assist in Debut as Lions Crush Tampa Bay 6-0";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Griezmann scores and assists in Orlando City debut ⚽️')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Antoine Griezmann Officially Arrives in Orlando: Goal and Assist in Debut as Lions Crush Tampa Bay 6-0
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-07-09">July 9, 2026</time>
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
            src="https://assets.goal.com/images/v3/getty-2284675878/crop/MM5DGNRQGA5DEMBSGU5G433XMU5DAORYGU======/GettyImages-2284675878.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Antoine Griezmann Orlando City Debut"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Credit: Getty Images | Copyright: 2026
          </div>
        </figure>


        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8 text-gray-800">

          <p className="text-xl">
            Orlando, July 9, 2026
          </p>

          <p>
            Less than 48 hours after a star-studded welcome event at Full Sail Live, Antoine Griezmann showed Orlando City exactly why they signed him.
          </p>

          <p>
            The French superstar scored a goal and added an assist in just over 60 minutes as the Lions demolished Tampa Bay Rowdies <strong>6-0</strong> in a Season Ticket Member exclusive friendly on Wednesday night at Inter&Co Stadium.
          </p>

          

          <p>
            It was the perfect debut for the new No. 7.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            A Dream Debut
          </h2>

               <div className="my-10">
  <div className="aspect-video w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl">
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/en8wMi_ux8M"
      title="Matchday 14 Preview"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>
</div>
          <p>
            Griezmann opened the scoring in the 32nd minute with a clinical finish across the face of goal, celebrating directly in front of The Wall. Later, he forced a turnover from the Rowdies goalkeeper and set up <strong>Iván Angulo</strong> for Orlando’s third goal.
          </p>

          <p>
            The performance capped an unforgettable first week in purple. On July 7 — a fitting date — Griezmann was officially introduced to fans in a lavish ceremony that included a custom barbershop video (complete with purple hair), smoke effects, and heartfelt speeches from club leadership.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What Griezmann Said
          </h2>
          <p>
            <strong>On the welcome and settling in:</strong><br />
            "Besides the fireworks with the kids, I’m really enjoying the calm. I can go to the supermarket and nobody recognizes me. That’s something I’m enjoying quite a bit."
          </p>
          <p>
            <strong>On Ricardo Moreira’s visit to Madrid:</strong><br />
            "Ricardo came to my house… that already touched my heart. From that moment, I knew we were going to make it happen."
          </p>
          <p>
            <strong>On the fans:</strong><br />
            "Keep doing what you’ve been doing for years. That goal chant is incredible. I hope I can score a lot on that side of the stadium so we can enjoy it together."
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Bigger Picture
          </h2>
          <p>
            Nearly 11 years after bringing in Kaká, Orlando City have once again landed a global icon. Griezmann’s arrival signals serious ambition — both on and off the field.
          </p>

          <p className="font-bold text-xl mt-8">
            With a new DP star already delivering on the pitch, the Lions have sent a clear message: they are ready to compete at the highest level in MLS.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: July 9, 2026</p>
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
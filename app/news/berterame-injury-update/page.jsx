'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function BerterameInjuryUpdate() {
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

  const articleTitle = "Inter Miami’s Germán Berterame Discharged After Scary Head Collision";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Inter Miami’s Germán Berterame Discharged After Scary Head Collision
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-07-27">July 27, 2026</time>
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
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-video">
          <Image
            src="https://s.yimg.com/os/en/onefootball_articles_802/ffb59a1e4e5923f3f5a1b54f960062a7"
            alt="Germán Berterame Inter Miami injury"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Credit: Getty Images
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6 text-gray-800">

          <p>
            Inter Miami forward Germán Berterame has been discharged from hospital after suffering a frightening head injury during Saturday’s 1-0 win over CF Montréal.
          </p>

          <p>
            The incident occurred in the 70th minute at Stade Saputo. Berterame went up for an aerial challenge with Montréal defender Efraín Morales and took a heavy blow to the head. He collapsed motionless on the turf and appeared to lose consciousness. Medical staff immediately rushed onto the field, and he was eventually stretchered off and taken to hospital by ambulance.
          </p>

          <p>
            After the match, Inter Miami head coach Guillermo Hoyos provided a reassuring update:
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-6 italic text-lg my-8">
            “He’s recovering right now, he’s fine, conscious. His family is aware of everything. They’re calm. The most important thing is that he’s okay, and right now he is okay.”
          </blockquote>

          <p>
            On Sunday, the club released an official statement confirming that Berterame had been discharged from Montreal General Hospital after spending the night under observation. He sustained injuries to his <strong>left shoulder and nose</strong> and will begin his recovery process under the supervision of the club’s medical staff. No timeline for his return has been announced yet.
          </p>

          <p>
            The collision also led to a penalty, which Luis Suárez converted with a Panenka to secure the win. Suárez later dedicated the goal to his teammate by holding up Berterame’s jersey.
          </p>

          <p>
            Berterame, who joined Inter Miami from Monterrey in January, has scored seven MLS goals this season and has been an important part of the attack in Lionel Messi’s absence.
          </p>

        </section>

        {/* NEXT FOR YOU */}
        <section className="mt-16 border-t pt-8 bg-white">
          <h2 className="text-4xl font-extrabold text-[#111] mb-8 text-center">
            Next For You
          </h2>

          <div className="grid md:grid-cols-2 gap-6 px-4 md:px-8">
            <Link href="/news/messi-all-star-absence" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">1</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Why Lionel Messi Will Avoid Punishment for Missing the 2026 MLS All-Star Game
                </h3>
              </div>
            </Link>

            <Link href="/news/suarez-lewandowski-debut" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">2</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Suárez Spoils Lewandowski’s MLS Debut as Inter Miami Edge Chicago 3-2
                </h3>
              </div>
            </Link>

            <Link href="/news/griezmann-debut-goal" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">3</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Antoine Griezmann Announces Himself Immediately: Historic Debut Goal Powers Orlando City to 4-0 Thrashing
                </h3>
              </div>
            </Link>

            <Link href="/news/messi-recap" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">4</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Lionel Messi at the 2026 World Cup: Magic, Controversy, and One Last Stand
                </h3>
              </div>
            </Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: July 27, 2026</p>
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
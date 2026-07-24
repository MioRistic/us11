'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function SuarezLewandowskiDebut() {
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

  const articleTitle = "Suárez Spoils Lewandowski’s MLS Debut as Inter Miami Edge Chicago 3-2";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Suárez brace spoils Lewandowski’s MLS debut 🔥 Inter Miami 3-2 Chicago')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Suárez Spoils Lewandowski’s MLS Debut as Inter Miami Edge Chicago 3-2
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-07-24">July 24, 2026</time>
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
            src="https://assets.goal.com/images/v3/getty-2270923706/crop/MM5DGOBSGI5DEMJVGA5G433XMU5DAORTGEYA====/GettyImages-2270923706.jpg?auto=webp&format=pjpg&width=1920&quality=60"
            alt="Luis Suárez Inter Miami"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Copyright: Getty Images
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8 text-gray-800">
          <p>
            Robert Lewandowski finally made his Major League Soccer debut on Wednesday night. Luis Suárez made sure the headlines still belonged to Inter Miami.
          </p>
          <p>
            In a chaotic 3-2 victory at Nu Stadium, the 39-year-old Uruguayan scored twice and helped set up the late winner as Miami — missing Lionel Messi and Rodrigo De Paul — extended their winning streak to five games and spoiled the Polish striker’s first appearance in a Chicago Fire shirt.
          </p>

           {/* VIDEO */}
<div className="my-10">
  <h2 className="text-3xl font-bold mb-4">
    nter Miami CF vs. Chicago Fire FC
  </h2>

  <div className="aspect-video w-full bg-black rounded-2xl overflow-hidden shadow-lg">
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/vJt25NRDJDw"
      title="MLS Matchday 13 Highlights"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="w-full h-full"
    ></iframe>
  </div>
</div>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            A Nightmare Start
          </h2>
          <p>
            The night began in disastrous fashion for the hosts. In the 18th minute, Ian Fray played a routine back-pass toward goalkeeper Rocco Ríos Novo. With Lewandowski pressing, Ríos Novo completely missed the ball, watching it roll under his feet and into the net for an own goal. Chicago led 1-0 in the most embarrassing possible way.
          </p>
          <p>
            Miami, still shaking off the rust after the World Cup break, needed a response. They got it from the most reliable source available.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            El Pistolero Takes Over
          </h2>
          <p>
            Nine minutes later, David Ruiz was fouled in the box. Suárez stepped up, sent Chris Brady the wrong way, and smashed the penalty inside the left post to make it 1-1. The equalizer came on his 100th appearance for Inter Miami.
          </p>
          <p>
            The second half belonged to Suárez and Germán Berterame. In the 51st minute the pair combined beautifully. Berterame received the ball on the right side of the area and produced a sublime backheel that put Suárez clean through. The veteran finished calmly into the far corner for 2-1 — his eighth goal of the season.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Lewandowski’s Quiet Debut
          </h2>
          {/* FEATURE IMAGE */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-video">
          <Image
            src="https://i.ibb.co/wFHmmm6Q/35d3e969-afp-20260723-2287254538-v1-highres-intermiamicfvchicagofirefc-cropped-1.avif"
            alt="Luis Suárez Inter Miami"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Copyright: © Free Malaysia
          </div>
        </figure>
          <p>
            Lewandowski, who had been largely contained, was withdrawn in the 62nd minute after 62 minutes of limited impact. Chicago responded almost immediately. Substitute Puso Dithejane scored his first MLS goal in the 67th minute to make it 2-2.
          </p>
          <p>
            After the match, Lewandowski admitted: “After just two days with my teammates I didn’t think everything would go so well in my first game because playing a game is different than training. Of course I need more time.”
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Academy Hero
          </h2>
          <p>
            With the game heading toward a draw, Miami’s academy product Preston Plambeck entered in the 69th minute. Eighteen minutes later he became the unlikely match-winner.
          </p>
          <p>
            Suárez again linked with Berterame and forced a sharp save from Brady. The rebound fell perfectly for the 20-year-old Plambeck, who contorted his body and steered the ball home for his first career MLS goal in the 87th minute.
          </p>
          <p>
            Nu Stadium erupted. Miami had stolen all three points.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            After the Final Whistle
          </h2>
          <p>
            Suárez was later named MLS Player of the Matchday. After the game he spoke with characteristic honesty:
          </p>
          <blockquote className="border-l-4 border-[#020617] pl-6 italic text-xl text-gray-700 my-8">
            “Despite my age, I still have the ambition to keep playing soccer. It’s my passion I’ve had since I was a kid. I’ve had to earn everything since I was a kid. I’ll keep giving it my all.”
          </blockquote>
          <p>
            Inter Miami head coach Guillermo Hoyos went even further, placing Suárez in the same category as Messi: “Like our No. 10, these are players who mark a difference… I am not sure these players will be replaced in the future.”
          </p>
          <p>
            On the sidelines, newly signed Casemiro watched alongside co-owner Jorge Mas. When the Brazilian midfielder eventually joins Messi, De Paul and Suárez on the field, Miami’s already dangerous attack will become even more formidable.
          </p>
          <p className="font-semibold text-lg text-[#020617] mt-10">
            For one night, though, the story belonged to the old gunslinger and a 20-year-old academy graduate. El Pistolero is still firing.
          </p>
        </section>

        {/* NEXT FOR YOU */}
        <section className="mt-16 border-t pt-8 bg-white">
          <h2 className="text-4xl font-extrabold text-[#111] mb-8 text-center">
            Next For You
          </h2>

          <div className="grid md:grid-cols-2 gap-6 px-4 md:px-8">
            <Link href="/news/nycfc-pulisic" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">1</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  NYCFC CEO Brad Sims Sends Clear Message: “We Want Christian Pulisic”
                </h3>
              </div>
            </Link>

            <Link href="/news/furuhashi" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">2</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  LA Galaxy Sign Kyōgo Furuhashi: A Calculated Gamble on Proven Pedigree
                </h3>
              </div>
            </Link>

            <Link href="/news/spain-world-cup-victory" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">3</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Spain Won the FIFA World Cup: Ferran Torres Fires Spain to Historic Victory Over Argentina
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
            <p>Published: July 24, 2026</p>
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
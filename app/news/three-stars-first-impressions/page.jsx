'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function ThreeStarsFirstImpressions() {
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

  const articleTitle = "Three Stars, Three Debuts: First Impressions of MLS’s Newest Global Icons";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Three Stars, Three Debuts: First Impressions of MLS’s Newest Global Icons
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
            src="https://assets.goal.com/images/v3/getty-2284675878/crop/MM5DGNRQGA5DEMBSGU5G433XMU5DAORYGU======/GettyImages-2284675878.jpg?auto=webp&format=pjpg&width=2048&quality=60"
            alt="MLS new global stars 2026"
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
            The post-World Cup return of MLS brought more than just regular-season action. It delivered the long-awaited debuts of three major European names: Antoine Griezmann, Robert Lewandowski, and Casemiro.
          </p>

          <p>
            Each arrived with huge expectations. Here’s how they looked in their first steps on American soil — and how we rate them after the opening chapter.
          </p>

          {/* GRIEZMANN */}
          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            1. Antoine Griezmann (Orlando City) — 8.5/10
          </h2>

          <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8 aspect-video">
            <Image
              src="https://assets.goal.com/images/v3/bltf992be96f6619375/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-07-26T174855.468.png?auto=webp&format=pjpg&width=2048&quality=60"
              alt="Antoine Griezmann Orlando City"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
              Credit: Getty Images
            </div>
          </figure>

          <p>
            The clear winner of the three.
          </p>

          <p>
            Griezmann didn’t just debut — he announced himself. In Orlando’s emphatic 4-0 win over San Jose, the Frenchman scored his first MLS goal in the 48th minute, a composed near-post finish that also marked the <strong>300th club goal</strong> of his career.
          </p>

          <p>
            What stood out even more than the goal was how naturally he fit. Intelligent movement, quick combinations, and constant involvement in the final third. He looked like a player who had already trained with his new teammates for months rather than days.
          </p>

          <p>
            Griezmann brought structure and creativity to an Orlando side that needed both. Early returns suggest the Lions may have found the missing piece.
          </p>

          <p className="font-semibold">
            First Impression: Instant impact. Looks ready to carry the attack.
          </p>

          {/* CASEMIRO */}
          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            2. Casemiro (Inter Miami) — 7.5/10
          </h2>

          <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8 aspect-video">
            <Image
              src="https://assets.goal.com/images/v3/imago-sport-1080479016/crop/MM5DKMBQGQ5DEOBRGU5G433XMU5DAORSGYYQ====/imago-image.jpeg;%20charset=utf-8?auto=webp&format=pjpg&width=2048&quality=60"
              alt="Casemiro Inter Miami"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
              Credit: Eyepix Group
            </div>
          </figure>

          <p>
            Quietly impressive.
          </p>

          <p>
            While the headlines from Miami’s 1-0 win in Montreal focused on Luis Suárez’s Panenka and Germán Berterame’s scary injury, Casemiro did exactly what he was signed to do.
          </p>

          <p>
            The Brazilian controlled the tempo, completed nearly 90% of his passes, and looked completely unfazed by the physical nature of MLS midfield battles. He dictated rhythm without forcing the issue and gave Miami a stabilizing presence in the absence of Messi and De Paul.
          </p>

          <p>
            It wasn’t flashy, but it was authoritative. The kind of performance that makes teammates around him look better.
          </p>

          <p className="font-semibold">
            First Impression: Calm, composed, and already influencing the game from deep.
          </p>

          {/* LEWANDOWSKI */}
          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            3. Robert Lewandowski (Chicago Fire) — 5.5/10
          </h2>

          <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8 aspect-video">
            <Image
              src="https://assets.goal.com/images/v3/getty-2287253820/crop/MM5DKMBQGQ5DEOBRGU5G433XMU5DAORSGYYQ====/GettyImages-2287253820.jpg?auto=webp&format=pjpg&width=2048&quality=60"
              alt="Robert Lewandowski Chicago Fire"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
              Credit: Getty Images
            </div>
          </figure>

          <p>
            The slowest start of the three.
          </p>

          <p>
            Lewandowski’s debut against Inter Miami (a 3-2 loss) was underwhelming by his standards. He played just over an hour, recorded limited touches in dangerous areas, and failed to test the goalkeeper. A second appearance against NYCFC produced a similar lack of goal threat.
          </p>

          <p>
            The movement was still intelligent, and the work rate was there, but the sharpness in front of goal that defined his career at Bayern and Barcelona has not yet appeared. At 37, adaptation time was always expected — yet the early numbers show a player still searching for rhythm and service.
          </p>

          <p>
            Chicago will need to create better chances for him. Lewandowski remains a high-level finisher, but the system around him has to catch up.
          </p>

          <p className="font-semibold">
            First Impression: Professional but quiet. Needs time and better service.
          </p>

          {/* BIGGER PICTURE */}
          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Bigger Picture
          </h2>

          <p>
            These three arrivals represent different stages of the MLS star experiment.
          </p>

          <p>
            Griezmann looks like an immediate difference-maker.  
            Casemiro provides the kind of midfield control that wins games over a full season.  
            Lewandowski still has the quality, but the early evidence suggests the adjustment will take longer.
          </p>

          <p>
            One week is never enough to judge a player’s full impact. Still, the early hierarchy is clear.
          </p>

          <p>
            Griezmann has set the highest bar.  
            Casemiro has given Miami exactly what they needed.  
            Lewandowski has left us waiting for the version we know he can be.
          </p>

          <p className="font-semibold text-lg mt-8">
            The next month will tell us far more than the first week did.
          </p>

        </section>

        {/* NEXT FOR YOU */}
        <section className="mt-16 border-t pt-8 bg-white">
          <h2 className="text-4xl font-extrabold text-[#111] mb-8 text-center">
            Next For You
          </h2>

          <div className="grid md:grid-cols-2 gap-6 px-4 md:px-8">
            <Link href="/news/berterame-injury-update" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">1</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Inter Miami’s Germán Berterame Discharged After Scary Head Collision
                </h3>
              </div>
            </Link>

            <Link href="/news/messi-all-star-absence" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">2</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Why Lionel Messi Will Avoid Punishment for Missing the 2026 MLS All-Star Game
                </h3>
              </div>
            </Link>

            <Link href="/news/suarez-lewandowski-debut" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">3</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Suárez Spoils Lewandowski’s MLS Debut as Inter Miami Edge Chicago 3-2
                </h3>
              </div>
            </Link>

            <Link href="/news/griezmann-debut-goal" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">4</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Antoine Griezmann Announces Himself Immediately: Historic Debut Goal Powers Orlando City
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
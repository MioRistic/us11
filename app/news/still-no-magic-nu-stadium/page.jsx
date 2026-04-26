'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function InterMiamiArticle() {
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

  const articleTitle = "Still No Magic at Nu Stadium: Messi and Suárez Draw a Blank as Inter Miami Fail to Win at Home Again";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Still No Magic at Nu Stadium: Messi and Suárez Draw a Blank as Inter Miami Fail to Win at Home Again
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-04-26">April 26, 2026</time>
          </div>

          {/* SHARE BUTTONS */}
          <div className="flex items-center gap-4 mt-4">
            <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"><FaFacebookF size={20} /></a>
            <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"><FaTwitter size={20} /></a>
            <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"><FaWhatsapp size={20} /></a>
            <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"><FiCopy size={20} /></button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://assets.goal.com/images/v3/getty-2273149300/crop/MM5DENBWGQ5DCMZYGY5G433XMU5DKNRRHIYTIMA=/GettyImages-2273149300.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Inter Miami vs New England Revolution"
            width={1200}
            height={675}
            className="w-full h-auto object-cover"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: 
| 
Credit: Getty Images
Copyright: 2026 Getty Images
          </figcaption>
        </figure>

     

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

         <h2 className="text-3xl font-bold mt-10 mb-4">
            The housewarming party at Nu Stadium remains on hold
            </h2>
          

          <p>
            For the third time since moving into their glittering new home, Inter Miami were unable to secure a victory, forced to settle for a 1-1 draw against the New England Revolution on Saturday night. Despite fielding one of the most decorated attacking duos in football history, Lionel Messi and Luis Suárez could not find the decisive spark in front of a passionate home crowd.
          </p>

          <p>
            Carles Gil gave the visitors a first-half lead, before Germán Berterame equalized for the Herons in the 76th minute. New England goalkeeper Matt Turner was the standout performer of the evening, producing a sensational display with nine saves to frustrate Miami’s star-studded attack.
          </p>

   {/* YOUTUBE VIDEO */}
        <div className="my-10">
          <h2 className="text-3xl font-bold mb-4">Match Highlights</h2>
          <div className="aspect-video w-full bg-black rounded-2xl overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/LpNu2vUrsLQ"
              title="Inter Miami vs New England Revolution Highlights"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

          <h2 className="text-3xl font-bold mt-10 mb-4">Praise Meets Reality</h2>

          <p>
            Before the match, interim coach Guillermo Hoyos had spoken glowingly about his veteran forwards.
          </p>

          <p>
            “Luis is not just an option. He is a player with more than 600 career goals,” Hoyos said. “Between him and Leo, they have scored something like 1,500 goals. That is not normal. You don’t see that anywhere. People come out to see their magic. It’s extraordinary.”
          </p>

          <p>
            On this night, however, the magic was missing. Suárez, starting for just the second time this season, looked a shadow of his former self. Messi was active and dangerous at times, but both players were repeatedly denied by Turner’s heroics.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">A Frustrating Start at Home</h2>

          <p>
            The result means Inter Miami have now played three matches at Nu Stadium without a win (0-3-3). Despite the electric atmosphere created by La Familia and the rest of the home support, the team has struggled to turn dominance into results on their new pitch.
          </p>

          <p>
            The draw comes during a period of transition. Javier Mascherano’s sudden departure for personal reasons left the club without a permanent head coach. While Hoyos has shown promise on the road — with wins over Colorado Rapids and Real Salt Lake — the home form remains a major concern.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Looking Beyond the Messi Era</h2>

          <p>
            Co-owner Jorge Mas has already begun speaking openly about life after Messi. While the club wants to maximize the Argentine’s final years, there is a clear long-term plan in place.
          </p>

          <p>
            “Our fans keep asking us who will be next,” Mas explained recently. “We always try to sign star players, but also young talent, to give our supporters a sense of belonging. What matters to our fans is competing and winning. I want to enjoy Messi while we have him, for the next two years.”
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">The Bigger Picture</h2>

          <p>
            Inter Miami remain well-placed in the Eastern Conference standings and are still only a few points off the top. But the inability to turn home games into wins at their shiny new stadium is becoming a noticeable trend.
          </p>

          <p className="font-medium text-lg">
            For all the star power on the pitch, the Herons are still searching for that first memorable night at Nu Stadium. On this occasion, even Messi and Suárez — with more than 1,500 career goals between them — could not provide it.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex justify-between text-sm text-gray-600">
          <span>Published: April 26, 2026</span>
          <Link href="/news" className="hover:text-gray-800">Back to news</Link>
        </footer>

      </div>
    </article>
  );
}
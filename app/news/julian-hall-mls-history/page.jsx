'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function JulianHallMLSHistory() {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleCopyLink = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      alert('✅ Link copied to clipboard!');
    }
  };

  const articleTitle =
    "Julian Hall and the Night MLS History Got a New Face";

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Julian Hall and the Night MLS History Got a New Face
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-05-14">May 14, 2026</time>
          </div>

          {/* SOCIAL SHARE */}
          <div className="flex items-center gap-4 mt-4">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"
            >
              <FaFacebookF size={20} />
            </a>

            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"
            >
              <FaTwitter size={20} />
            </a>

            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"
            >
              <FaWhatsapp size={20} />
            </a>

            <button
              onClick={handleCopyLink}
              className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"
            >
              <FiCopy size={20} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://assets.goal.com/images/v3/getty-2276124306/crop/MM5DINBVGI5DENJQGQ5G433XMU5DAORSGMZA====/GettyImages-2276124306.jpg?auto=webp&format=pjpg&width=1920&quality=60"
            alt="Julian Hall celebrates hat-trick for New York Red Bulls"
            width={1200}
            height={675}
            className="w-full h-auto object-cover"
            priority
          />

          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Dustin Satloff
 | 
Credit: Getty Images
Copyright: 2026 Getty Images
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

          <p>
            NEW YORK — In the 79th minute at Red Bull Arena, Julian Hall did something no 18-year-old had ever done in Major League Soccer.
          </p>

          <p className="font-semibold text-xl">
            He scored a hat-trick.
          </p>

          <p>
            With the score tied at 2-2 and the clock winding down, the Manhattan-born forward stretched out his leg and steered the ball into the bottom corner, sparking pandemonium in the stands.
          </p>

          <p>
            When the final whistle blew moments later, Red Bull had a 3-2 victory over Columbus Crew — and MLS had a brand new record holder.
          </p>

          <p>
            At 18 years and 50 days old, Julian Hall became the youngest player in league history to score a hat-trick.
          </p>

          {/* VIDEO */}
          <div className="my-10">
            <h2 className="text-3xl font-bold mb-4">Red Bull New York vs. Columbus Crew </h2>

            <div className="aspect-video w-full bg-black rounded-2xl overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/6LT8_hdQof8"
                title="MLS Matchday 12 Highlights"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Three Goals, One Statement
          </h2>

          <p>
            It wasn’t just any hat-trick. It was clinical, composed, and carried real weight.
          </p>

          <p>
            The first goal came in the 7th minute, a calm finish off a precise cross from Cade Cowell.
          </p>

          <p>
            The second arrived just before halftime with near-identical poise.
          </p>

          <p>
            The third — the game-winner — was pure instinct: a corner kick, a saved header, and Hall reacting quickest to smash home the rebound.
          </p>

          <p className="font-semibold">
            Three goals. Three different types of finishes. One unmistakable message: this kid is different.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700">
            “I’m not going to lie, I got kind of emotional,” Hall said afterward.
            <br /><br />
            “It makes me think about all the times I was working so hard to create memories like this. I’m just really grateful for the guys who put me in these positions.”
          </blockquote>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Bradley Sees Something Special
          </h2>

           
                    <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8">
                      <Image
                        src="https://assets.goal.com/images/v3/getty-2263564057/crop/MM5DIOBYG45DENZUHE5G433XMU5DAORSGU2Q====/GettyImages-2263564057.jpg?auto=webp&format=pjpg&width=3840&quality=60"
                        alt="Canada 2026 Home Jersey"
                        width={1200}
                        height={800}
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
                        Creator: Adam Hunger
 | 
Credit: Getty Images
Copyright: 2026 Getty Images
                      </div>
                    </figure>

          <p>
            Head coach Michael Bradley, a man not prone to hyperbole when it comes to young players, could barely contain his excitement.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700">
            “He comes in every day ready to work, ready to train, ready to listen,” Bradley said.
            <br /><br />
            “He has a great personality and really good starting points as a player. I’ve enjoyed every second working with him.”
            <br /><br />
            “We’re going to keep challenging him and pushing him. We’re really, really excited for him.”
          </blockquote>

          <p>
            With nine goals already this season, Hall is tied for fourth in the MLS Golden Boot race.
          </p>

          <p>
            For context: most players don’t reach that number in their entire rookie season.
          </p>

          <p className="font-semibold">
            Hall is doing it at 18.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            What This Actually Means
          </h2>

          <p>
            In an era defined by global superstars like Lionel Messi, Luis Suárez, and others, nights like this carry special significance.
          </p>

          <p>
            They remind us that MLS is not just importing talent — it is producing it.
          </p>

          <p>
            Julian Hall is more than the latest promising prospect at Red Bull New York.
          </p>

          <p>
            Right now, he is the clearest symbol yet that homegrown American superstars are emerging in this league.
          </p>

          <p>
            A kid from Manhattan just rewrote the record books before he can legally buy a drink in most states.
          </p>

          <p className="font-semibold text-xl">
            And at only 18 years old, this feels like merely the beginning of something much bigger.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex justify-between text-sm text-gray-600">
          <span>Published: May 14, 2026</span>

          <Link
            href="/news"
            className="hover:text-gray-800"
          >
            Back to news
          </Link>
        </footer>

      </div>
    </article>
  );
}
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function OjedaBackheel() {
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
    "Ojeda’s Backheel Is a Goal of the Year Case. It Is Not the Award.";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Ojeda’s backheel is a Goal of the Year case. It is not the award.')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Ojeda’s Backheel Is a Goal of the Year Case. It Is Not the Award.
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-10-18">October 18, 2026</time>
          </div>
        </header>

        <div className="flex items-center gap-3 mb-8">
          <a
            href={facebookShare}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border hover:bg-gray-50 transition"
            aria-label="Share on Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href={twitterShare}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border hover:bg-gray-50 transition"
            aria-label="Share on X"
          >
            <FaTwitter />
          </a>
          <a
            href={whatsappShare}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border hover:bg-gray-50 transition"
            aria-label="Share on WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <button
            onClick={handleCopyLink}
            className="p-2 rounded-full border hover:bg-gray-50 transition"
            aria-label="Copy link"
          >
            <FiCopy />
          </button>
          {copied && <span className="text-sm text-green-600">Copied</span>}
        </div>

        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://i.ibb.co/hRTtz0wp/01ke6zvb0dqtawf59r90.webp"
            alt="Martín Ojeda scores a backheel for Orlando City"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Copyright: Getty Images / Geoff Stellfox
          </div>
        </figure>

        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">
          <p>
            Martín Ojeda scored the kind of goal that gets posted before the final whistle. He did not win Goal of the Year on Saturday night.
          </p>

          <p>
            The finish came in the 22nd minute of Orlando City’s 4-1 win over D.C. United. Antoine Griezmann played the ball over the top. Ojeda met it with a backheel volley, a scorpion, and put Orlando 2-0 up. MLS posted the clip with the line “potentially the Goal of the Year.” ESPN called it Puskas-worthy. LatinUS called it an escorpión. None of those are a nomination. The award is chosen at the end of the season. This is a candidate from one night.
          </p>

          <div className="my-10 aspect-video rounded-2xl overflow-hidden shadow-md">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/LFUfB2_a8Ys"
              title="Martín Ojeda backheel goal vs D.C. United"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The numbers around it
          </h2>

          <p>
            Griezmann had two goals and an assist. Ojeda had a goal and an assist. Marco Pasalić scored in stoppage time. The goal was Ojeda’s 49th for Orlando City, extending the club record he had already broken. Griezmann, in 14 MLS appearances, has 12 goals and seven assists. He is the first player in league history with a goal contribution in 12 of his first 14 games.
          </p>

          <p className="font-semibold text-lg mt-10">
            The clip is the story. The award is later. Ojeda has a case. He does not have the trophy.
          </p>
        </section>

        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link href="/news/albert-kovac-city-minutes" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/bltddddd4716914a103/Albert.jpg?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="Mathis Albert"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Kovac Promised Albert Minutes. The City Interest Is Still a Report.
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">October 13, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/doucoure-charlotte-freeze" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2197194714/crop/MM5DCOBQHA5DCMBRG45G433XMU5DCMBZG45DGMZV/GettyImages-2197194714.jpg?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="Abdoulaye Doucouré"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Charlotte Signed Doucouré Before the Freeze. The Debut Can Wait.
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">October 13, 2026</p>
                </div>
              </div>
            </Link>

          </div>
        </section>

        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: October 18, 2026</p>
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
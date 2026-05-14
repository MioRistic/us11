'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function McDonaldsParkChicagoFire() {
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
    "McDonald’s Park: A New Chapter for Chicago Fire and a Defining Moment for a City";

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            McDonald’s Park: A New Chapter for Chicago Fire and a Defining Moment for a City
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-05-13">May 13, 2026</time>
          </div>

          {/* SOCIAL SHARE */}
          <div className="flex items-center gap-4 mt-4">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"
            >
              <FaTwitter size={18} />
            </a>

            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"
            >
              <FaWhatsapp size={18} />
            </a>

            <button
              onClick={handleCopyLink}
              className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"
            >
              <FiCopy size={18} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://i.ibb.co/7xZxRhLp/hero-rendering-5-Ce-Ln-RX9s.jpg"
            alt="Chicago skyline river stadium concept"
            width={1200}
            height={700}
            className="w-full h-auto object-cover"
            priority
          />

          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Chicago Fire FC
          </figcaption>
        </figure>

        {/* CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">

          <p>
            CHICAGO — For nearly three decades, Chicago Fire FC has searched for a true home.
          </p>

          <p>
            On Wednesday, the club finally found one — and it comes with golden arches.
          </p>

          <p>
            In a landmark partnership, McDonald’s and Chicago Fire FC announced that the club’s new
            $750 million soccer-specific stadium in The 78 development will be named McDonald’s Park
            when it opens in 2028.
          </p>

          <p>
            It marks the first time in history that McDonald’s has secured naming rights for a major
            professional sports venue in the United States.
          </p>

          

          

          <h2 className="text-3xl font-bold mt-10 mb-4">More Than Bricks and Mortar</h2>

          <p>
            Located along the Chicago River, McDonald’s Park is being designed as a year-round destination.
            Beyond Chicago Fire matches, it will host concerts, festivals, and community events.
          </p>

          <p>
            A flagship McDonald’s restaurant will be integrated into the stadium, blending sport, food,
            and local culture into one unified experience.
          </p>

           

          <h2 className="text-3xl font-bold mt-10 mb-4">
            A Transformational Investment in Chicago’s Youth
          </h2>

          <p>
            At the core of the partnership is an expansion of the Chicago Fire Foundation’s P.L.A.Y.S. program,
            which will grow from 70 to 140 Chicago Public Schools by 2028.
          </p>

          <p>
            Long term, the initiative aims to reach more than 280 under-resourced schools and over 125,000 students.
          </p>

          <p>
            The program will provide free soccer kits, after-school training, and educational support focused on
            social and emotional development.
          </p>
          <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8">
                      <Image
                        src="https://i.ibb.co/HThVZ1dY/noicon3bhonrnjollzyb.jpg"
                        alt="Chicago fire"
                        width={1200}
                        height={800}
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
                        Chicago Fire FC
                      </div>
                    </figure>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Two Chicago Giants Finding Common Ground
          </h2>

          <p>
            McDonald’s CEO Chris Kempczinski described the project as more than a stadium:
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700">
            “Together, we are creating more than a stadium. We are building a place that serves up joy,
            brings together community, and delivers impact for generations.”
          </blockquote>

          <p>
            Chicago Fire owner Joe Mansueto echoed that vision, calling McDonald’s Park a “stadium that Chicago deserves.”
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">A New Identity for the Fire</h2>

          <p>
            For a franchise that has struggled with identity and consistency, this partnership represents a turning point.
          </p>

          <p>
            A modern stadium on the Chicago River, backed by one of the world’s most recognizable brands,
            gives the Fire something they have long lacked: stability and direction.
          </p>

          <p className="font-semibold text-xl">
            McDonald’s Park is not just a stadium — it is an attempt to redefine what Chicago Fire FC can become.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex justify-between text-sm text-gray-600">
          <span>Published: May 13, 2026</span>

          <Link href="/news" className="hover:text-gray-800">
            Back to news
          </Link>
        </footer>

      </div>
    </article>
  );
}
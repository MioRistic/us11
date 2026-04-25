'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function RedBullAcademyPage() {
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

  const articleTitle = "The Red Bulls’ $100 Million Statement: A New Performance Center That Could Reshape Their Future";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(
    'The Red Bulls just opened their new $100M+ Performance Center 🔥'
  )}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            The Red Bulls’ $100 Million Statement: A New Performance Center That Could Reshape Their Future
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-04-25">April 25, 2026</time>
          </div>

          {/* SHARE BUTTONS */}
          <div className="flex items-center gap-4 mt-4">
            <a href={facebookShare} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook"
              className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition">
              <FaFacebookF size={20} />
            </a>
            <a href={twitterShare} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter"
              className="p-2 rounded-full bg-black text-white hover:opacity-80 transition">
              <FaTwitter size={20} />
            </a>
            <a href={whatsappShare} target="_blank" rel="noopener noreferrer" aria-label="Share on WhatsApp"
              className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition">
              <FaWhatsapp size={20} />
            </a>
            <button
              onClick={handleCopyLink}
              aria-label="Copy link"
              className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"
            >
              <FiCopy size={20} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://i.postimg.cc/NfSk5KFy/zuetffftdtclzxthyw87.webp"
            alt="RWJBarnabas Health Red Bulls Performance Center"
            width={1200}
            height={675}
            className="w-full h-auto object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            The new Red Bulls Performance Center in Morris Township, NJ / Credit: Red Bull New York
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

          <p>
            Three days ago, in the quiet suburbs of Morris Township, New Jersey, something significant happened in American soccer. Thierry Henry and Bradley Wright-Phillips stood together cutting a ribbon on an 80-acre campus that Red Bull hopes will become one of the most important developmental hubs in the Western Hemisphere.
          </p>

          <p>
            The <strong>RWJBarnabas Health Red Bulls Performance Center</strong> is now officially open. And it is not just another training ground. It is a declaration of intent.
          </p>

          {/* YOUTUBE VIDEO - zadržan */}
          <div className="my-10">
            <h2 className="text-3xl font-bold mb-4">Watch: Official Opening of the Red Bulls Performance Center</h2>
            <div className="aspect-video w-full bg-black rounded-2xl overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/iPOgUYswPgQ?rel=0&modestbranding=1"
                title="Red Bulls Performance Center Official Opening"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-10 mb-4">From Modest Beginnings to a Flagship Facility</h2>
          <p>
            For years, the Red Bulls operated out of a relatively modest facility in Whippany — functional, but increasingly outdated compared to what top MLS clubs and European academies were building. That chapter is now closed.
          </p>

          <p>
            The new center spans 80 acres, features a main building of nearly 88,400 square feet, and includes eight full-size pitches (five of them heated natural grass). The total investment is reported to be between $100 million and $112 million — one of the largest single infrastructure projects in recent MLS history.
          </p>

          <p>
            This is not incremental improvement. This is a leap.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">What the Facility Actually Offers</h2>
          <p>
            Walking through the campus feels more like touring a European top-flight club than a typical MLS facility. The cruciform-shaped main building (designed by Gensler) includes:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>A massive performance gym with floor-to-ceiling windows overlooking the pitches</li>
            <li>State-of-the-art medical and rehabilitation wing with hydrotherapy pools and cryotherapy</li>
            <li>Dedicated nutrition and dining areas run by professional chefs</li>
            <li>Academic classrooms and study lounges for academy players who still attend school</li>
            <li>Advanced video analysis suites and a full data science department</li>
            <li>Integrated living quarters for academy talents</li>
          </ul>

          <p>
            For the first time, the First Team, Red Bulls II, and the entire youth academy are all based in one location — a crucial step toward creating a true end-to-end player pathway.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">A Star-Studded Opening</h2>
          <p>
            The grand opening carried real weight. Jürgen Klopp, Red Bull’s global head of soccer, was present and clearly impressed. Thierry Henry and Bradley Wright-Phillips, two of the club’s greatest-ever players, helped cut the ribbon. MLS Commissioner Don Garber attended, as did a long list of club legends.
          </p>

          <p>
            Klopp reportedly joked that the facility was so good it almost made him consider getting back into coaching.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Strategic Importance</h2>
          <p>
            This project goes far beyond daily training. The Brazilian national team has already secured the center as their official base camp for preparations ahead of the 2026 World Cup. That alone speaks volumes about the quality of the infrastructure.
          </p>

          <p>
            For Red Bull, the goal is clear: stop relying so heavily on buying ready-made talent and instead produce more of it themselves. The new center is the physical embodiment of that philosophy.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">The Bigger Picture</h2>
          <p>
            While some MLS clubs have focused on flashy signings and stadium projects, the Red Bulls have quietly invested in what many consider the true long-term currency of modern football: facilities and player development.
          </p>

          <p>
            Whether this massive investment translates into on-field success for the First Team in the short term remains to be seen. But as a foundation for sustainable excellence, the Red Bulls have just raised the bar significantly in Major League Soccer.
          </p>

          <p className="mt-8 font-medium">
            The old office park era is over. A new chapter — built on grass, data, science, and ambition — has officially begun in Morris Township.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: April 25, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>
          <Link href="/news" className="text-sm text-gray-500 hover:text-gray-800">Back to news</Link>
        </footer>

      </div>
    </article>
  );
}
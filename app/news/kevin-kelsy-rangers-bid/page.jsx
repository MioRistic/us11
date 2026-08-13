'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function KevinKelsyRangersBid() {
  const [currentUrl, setCurrentUrl] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
    setMounted(true);
  }, []);

  const handleCopyLink = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      alert('✅ Link copied to clipboard!');
    }
  };

  const articleTitle =
    "Rangers Submit ~$10m Bid for Portland Timbers Striker Kevin Kelsy";

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Rangers Submit ~$10m Bid for Portland Timbers Striker Kevin Kelsy
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-08-13">August 13, 2026</time>
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
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://i.ibb.co/QvHNgtP7/images-3.jpg"
            alt="Kevin Kelsy Portland Timbers Rangers bid"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            gettyimages.com · Copyright: 2025 Alika Jenner, Credit: Getty Images
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">

          <p>
            Rangers have made a formal move for Portland Timbers forward Kevin Kelsy, submitting a bid in the region of $10 million, according to sources.
          </p>

          <p>
            The Scottish club are looking to strengthen their attack after Youssef Chermiti’s injury, and the 22-year-old Venezuela international has emerged as a clear target. However, the Timbers are not looking to sell, and Kelsy is not pushing for a move at this stage.
          </p>

          <p>
            Kelsy has been one of the more productive young strikers in MLS this season. The 6-foot-4 forward has recorded <strong>9 goals and 2 assists in 994 minutes</strong>, showing both finishing ability and physical presence in the box.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Why Rangers are interested</h3>
          <p>
            Rangers are working through a shortlist of striking options as they look for a replacement profile for Chermiti. Kelsy’s combination of size, mobility and goal output in MLS has put him on their radar — and he is not the only club tracking the Venezuelan.
          </p>
          <p>
            Any deal would require a significant fee. Portland signed Kelsy from Shakhtar Donetsk in January 2025 for a reported figure near $6 million and still have him under contract through 2028, with a club option for 2029. As a U22 Initiative player with strong numbers, the Timbers have little incentive to cash in cheaply mid-season.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">The Portland stance</h3>
          <p>
            Sources indicate Portland are not actively shopping Kelsy. The club view him as a long-term piece of their attack, and the player himself is not driving a transfer. That does not completely close the door — a substantially improved offer could change the conversation — but for now the Timbers appear content to keep him.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">What it means</h3>
          <p>
            For MLS, this is another example of European clubs monitoring young talent developed or polished in the league. Kelsy’s path — from Venezuela to Shakhtar, a productive loan at FC Cincinnati, then a permanent move to Portland — has quickly raised his stock.
          </p>
          <p>
            Whether Rangers return with a higher bid remains to be seen. For the moment, the message from Portland is clear: Kevin Kelsy is not for sale at $10 million.
          </p>

        </section>

        {/* NEXT TO READ */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link href="/news/alexis-sanchez-cf-montreal" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNUx2mcZSv0C23oFnU7J4uT_jCAJ5y9KGMFw0_vn3vHQ&s=10"
                    alt="Alexis Sánchez CF Montréal"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    CF Montréal Sign Chilean Great Alexis Sánchez as Designated Player
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 11, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/middlesbrough-usmnt-trio" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://i.ibb.co/G4WV0yhL/images.jpg"
                    alt="USMNT Trio Middlesbrough"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    USMNT Trio Living Together at Middlesbrough as Premier League Dream Takes Shape
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 10, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/la-galaxy-chucky-lozano-loan" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2249117363/crop/MM5DGOJVHA5DEMRSGY5G433XMU5DAORSGA3A====/GettyImages-2249117363.jpg?auto=webp&format=pjpg&width=3840&quality=60"
                    alt="Chucky Lozano LA Galaxy"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    LA Galaxy Finalizing Deal for Chucky Lozano on Loan from San Diego FC
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 6, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/messi-leagues-cup-record" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2289259073/crop/MM5DGMJYGQ5DCNZZGE5G433XMU5DGOJRHI2DK===/GettyImages-2289259073.jpg?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="Messi Leagues Cup"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Messi Sets Leagues Cup Scoring Record as Inter Miami Open Tournament with 4-2 Win
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 6, 2026</p>
                </div>
              </div>
            </Link>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex justify-between text-sm text-gray-600">
          <span>Published: August 13, 2026</span>
          <Link href="/news" className="hover:text-gray-800">
            ← Back to news
          </Link>
        </footer>

      </div>
    </article>
  );
}
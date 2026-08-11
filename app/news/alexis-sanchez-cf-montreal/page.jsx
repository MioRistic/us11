'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function AlexisSanchezMontreal() {
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
    "CF Montréal Sign Chilean Great Alexis Sánchez as Designated Player";

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            CF Montréal Sign Chilean Great Alexis Sánchez as Designated Player
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-08-11">August 11, 2026</time>
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNUx2mcZSv0C23oFnU7J4uT_jCAJ5y9KGMFw0_vn3vHQ&s=10"
            alt="Alexis Sánchez CF Montréal signing"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Copyright: 2025 Getty Images, Credit: Getty Images, Creator: Gaston Brito Miserocchi
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">

          <p>
            CF Montréal have made one of the biggest signings in club history, officially confirming the arrival of Chilean legend Alexis Sánchez as a Designated Player.
          </p>

          <p>
            The 37-year-old free agent has agreed a deal through the 2027 MLS Sprint Season, with a club option for the 2027-28 campaign. He becomes Montréal’s first Designated Player of the current era and will wear the No. 10 shirt.
          </p>

          <p>
            Sánchez arrives after a season at Sevilla in La Liga, where he contributed four goals and two assists in around 30 appearances across all competitions. Before that, he built a glittering career at some of Europe’s biggest clubs: Barcelona, Arsenal, Manchester United, Inter Milan and Marseille.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">A true Chilean great</h3>
          <p>
            With Chile, Sánchez is both the all-time leading scorer (51 goals) and the most-capped player in national team history (168 appearances). He was a key figure in the side that won back-to-back Copa América titles in 2015 and 2016.
          </p>
          <p>
            Club managing director Luca Saputo called the signing “an important step in our sporting project,” praising Sánchez’s technical quality, leadership and competitive mentality.
          </p>
          <p>
            “I am very happy to join CF Montréal and take on this new challenge,” Sánchez said. “I’m grateful to the Club for the confidence they’ve shown in me and I’m eager to put my experience to work so that we can reach our objectives and create memorable moments for our supporters. I’m here to give everything I have for the Club and for this city.”
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Why it matters for Montréal</h3>
          <p>
            Montréal have struggled for goals this season and sit near the bottom of the Eastern Conference. Adding a player of Sánchez’s pedigree is a clear statement of ambition and a boost for a fanbase that has previously watched stars like Didier Drogba and Ignacio Piatti wear the colours.
          </p>
          <p>
            At 37, Sánchez is no longer the explosive forward who terrorised defences a decade ago. But his vision, link-up play and experience at the highest level should give Montréal a different dimension in attack — and a leader in the dressing room.
          </p>
          <p>
            The Chilean becomes the latest high-profile European veteran to choose MLS, following a summer that has already seen major names arrive across the league.
          </p>

          <p className="font-bold text-xl mt-8">
            For CF Montréal, this is more than just another signing. It is a statement.
          </p>

        </section>

        {/* NEXT TO READ */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

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

            <Link href="/news/gonzalo-tapia-columbus-crew" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://i.ibb.co/KzsYw3SH/Getty-Images-2279876069.webp"
                    alt="Gonzalo Tapia Columbus Crew"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Columbus Crew Add Chilean Forward Gonzalo Tapia on Loan from São Paulo
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
          <span>Published: August 11, 2026</span>
          <Link href="/news" className="hover:text-gray-800">
            ← Back to news
          </Link>
        </footer>

      </div>
    </article>
  );
}
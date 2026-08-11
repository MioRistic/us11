'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MiddlesbroughUSMNTTrio() {
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
    "USMNT Trio Living Together at Middlesbrough as Premier League Dream Takes Shape";

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            USMNT Trio Living Together at Middlesbrough as Premier League Dream Takes Shape
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-08-10">August 10, 2026</time>
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
            src="https://i.ibb.co/G4WV0yhL/images.jpg"
            alt="USMNT players at Middlesbrough - Aidan Morris, Sebastian Berhalter and Max Arfsten"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Licensable at gettyimages.com · Copyright: 2023 Adam Fradgley
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">

          <p>
            Three United States internationals are sharing a house in the north-east of England and chasing the same goal: promotion to the Premier League with Middlesbrough.
          </p>

          <p>
            Aidan Morris, Sebastian Berhalter and Max Arfsten have formed an American colony at the Riverside Stadium. Morris has been at the club since July 2024 after leaving Columbus Crew. This summer he was joined by two more USMNT players — Berhalter from Vancouver Whitecaps and Arfsten from Columbus Crew on a four-year deal.
          </p>

          <p>
            All three are 24. None of them are married. And for now, Berhalter and Arfsten are living with Morris.
          </p>

          <p>
            “We’re trying to stay tidy,” Berhalter said. “We cooked Aidan dinner last night — pasta and some salad. We’re doing our best. He’s been great. We’re so lucky to have him.”
          </p>

          <p>
            Morris has also introduced the pair to a British classic: Nando’s.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Columbus connection</h3>
          <p>
            The trio’s bond goes back further than Teesside. All three have roots at Columbus Crew. Berhalter played there in 2020-21 while his father Gregg was still associated with the club. Morris and Arfsten later shared a dressing room in Ohio.
          </p>
          <p>
            That familiarity has made the move to England smoother. Morris, who spent his first year adapting alone, has given the newcomers a crash course in life at Middlesbrough.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Instant impact and USA chants</h3>
          <p>
            Berhalter and Arfsten both made winning debuts for the club. Fans waved Stars and Stripes flags, chanted “USA, USA,” and the stadium even played Estelle’s <em>American Boy</em> at half-time.
          </p>
          <p>
            Morris watched from the touchline and applauded his new roommates.
          </p>
          <p>
            Alexi Lalas has already nicknamed the growing American presence at the club “Middlesmerica.” Middlesbrough have steadily added US talent in recent years, and the three current internationals are the clearest sign yet of that strategy.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Shared ambition</h3>
          <p>
            The objective is clear. Middlesbrough want promotion. The three Americans want to help deliver it — and prove themselves in one of Europe’s toughest leagues.
          </p>
          <p>
            Just over a month after the United States’ World Cup exit, Berhalter and Arfsten (who made the squad) are already settled in the Championship. Morris, who narrowly missed out on the tournament, is the experienced guide in the house.
          </p>

          <p className="font-bold text-xl mt-8">
            Three young Americans. One shared home. One Premier League dream.
          </p>

        </section>

        {/* NEXT TO READ */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

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

            <Link href="/news/larry-berg-mls-commissioner" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/bltc33c70b1ae46424b/crop/MM5DKMBQGU5DEOBRGU5G433XMU5DAORSGYYA====/Garber_Berg_Rosenthal%20at%20Press%20Conference.jpg?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="Larry Berg MLS Commissioner"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Larry Berg and the One Opportunity MLS Cannot Afford to Miss
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
          <span>Published: August 10, 2026</span>
          <Link href="/news" className="hover:text-gray-800">
            ← Back to news
          </Link>
        </footer>

      </div>
    </article>
  );
}
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function LewandowskiChicagoFire() {
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

  const articleTitle = "Chicago Fire Cool on Lewandowski as Cuypers Surge Reshapes Their Summer Plans";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Chicago Fire Cool on Lewandowski as Cuypers Surge Reshapes Their Summer Plans
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
            src="https://assets.goal.com/images/v3/getty-2229420776/crop/MM5DENZZGY5DCNJXGM5G433XMU5DAORRGQ3A====/GettyImages-2229420776.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Robert Lewandowski"
            width={1200}
            height={675}
            className="w-full h-auto object-cover"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: | Credit: Getty Images | Copyright: 2025 Getty Images
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

          <p>
            For a few months this winter, it looked like one of the great “what if” stories in Major League Soccer might actually happen.
          </p>

          <p>
            Robert Lewandowski, one of the finest strikers of his generation, was out of contract at Barcelona this summer and open to a new challenge. The Chicago Fire, ambitious and financially capable, were reportedly all-in on making it reality. Multiple rounds of talks took place. The Polish superstar was seriously considering a move to MLS.
          </p>

          <p>
            Now, according to The Athletic, that pursuit has gone cold.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">A Shift in Priorities</h2>
          <p>
            Sources close to the situation suggest Chicago have moved on from Lewandowski, redirecting their attention toward other targets expected to become available after the 2026 World Cup. The decision comes as current No. 9 Hugo Cuypers has exploded into form, scoring six goals in his first five matches of the 2026 season.
          </p>

          <p>
            Cuypers, signed from Belgian side Gent last year, finished the 2025 campaign with 17 goals and has carried that momentum into the new season. His performances have not only eased the immediate pressure on the Fire’s attack but also forced the front office to reconsider whether a 38-year-old Lewandowski — however legendary — is the right fit at this moment.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Lewandowski’s Declining Form</h2>
          <p>
            The timing is not ideal for the Polish striker either. After scoring 27 league goals last season, Lewandowski has managed just 12 in La Liga this campaign. Since the turn of the year, he has found the net only four times across all competitions. At 38, questions about his long-term explosiveness are growing louder.
          </p>

          <p>
            His international future also looks uncertain. Poland failed to qualify for the 2026 World Cup, and with the next tournament in 2030, Lewandowski’s window on the biggest stage may be closing.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Chicago’s Long-Term Vision</h2>
          <p>
            The Fire’s decision reflects a more calculated approach under head coach Gregg Berhalter. After finishing eighth in 2025 — Berhalter’s first full season in charge — Chicago have started 2026 strongly, sitting fourth in the Eastern Conference.
          </p>

          <p>
            Rather than chasing one final star for a short-term boost, the club appears focused on building a sustainable project. While they remain open to high-profile additions, the current feeling is that Cuypers gives them a reliable focal point up front.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">What It Means</h2>
          <p>
            This doesn’t necessarily close the door on Lewandowski coming to MLS forever — only that Chicago, at least for now, are looking elsewhere. The Polish forward has publicly admitted his future remains uncertain.
          </p>

          <p>
            “I have to feel it,” he said last month. “For now, I cannot tell you anything, because I’m not even 50 percent sure which way I want to go.”
          </p>

          <p className="font-medium text-lg">
            For Chicago Fire fans, the message is mixed but ultimately pragmatic. The dream of seeing Lewandowski in a red jersey may be fading, but a more balanced, forward-thinking project could be taking shape instead.
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
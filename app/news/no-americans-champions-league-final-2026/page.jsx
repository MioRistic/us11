'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function CardosoChampionsLeague() {
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

  const articleTitle = "No Americans in the Champions League Final: Johnny Cardoso’s Dream Ends in London";

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            No Americans in the Champions League Final: Johnny Cardoso’s Dream Ends in London
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-05-06">May 6, 2026</time>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"><FaFacebookF size={20} /></a>
            <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"><FaTwitter size={20} /></a>
            <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"><FaWhatsapp size={20} /></a>
            <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"><FiCopy size={20} /></button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://assets.goal.com/images/v3/getty-2249006353/crop/MM5DGNJQGA5DCOJWHE5G433XMU5DAORRHAZA====/GettyImages-2249006353.jpg?auto=webp&format=pjpg&width=1920&quality=60" 
            alt="Johnny Cardoso in action for Atlético Madrid vs Arsenal"
            width={1200}
            height={675}
            className="w-full h-auto object-cover"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Credit: Getty Images
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

          <p className="text-xl text-gray-700">
            LONDON — For a moment, it felt like Johnny Cardoso might write another chapter in American soccer history.
          </p>

          <p>
            He came off the bench in the 57th minute at the Emirates Stadium with Atlético Madrid chasing a goal to force extra time. One more push. One moment of magic. One night that could have sent an American into the 2026 Champions League final.
          </p>

          <p className="font-semibold text-lg">
            It never came.
          </p>

          <p>
            Arsenal won 1-0 on the night and 2-1 on aggregate, booking their place in the final. For the first time since 2021, there will be <strong>no American player</strong> in the Champions League final.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">The Match: Arsenal 1-0 Atlético Madrid (2-1 agg.)</h2>

<p>
  Arsenal secured their place in the 2026 Champions League final with a professional 1-0 victory over Atlético Madrid at the Emirates Stadium. 
</p>

<p>
  Bukayo Saka’s first-half goal proved decisive as Mikel Arteta’s side controlled large portions of the match and successfully defended their slender aggregate lead. 
  Atlético showed their usual fighting spirit after the break, but ultimately lacked the cutting edge needed to turn the tie around.
</p>

<p>
  With this result, Arsenal will face <strong>Paris Saint-Germain</strong> in the Champions League final — a highly anticipated showdown between two attacking powerhouses.
</p>

          {/* GOAL.com Style Match Rating Card */}
          <div className="my-12 border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">

            <div className="px-6 py-4 border-b border-gray-200">
              <p className="text-sm uppercase tracking-wide text-gray-500 font-semibold">
                Player Ratings • Second Leg
              </p>
              <h3 className="text-3xl font-extrabold mt-1 leading-tight">
                Johnny Cardoso vs Arsenal
              </h3>
              <p className="text-gray-500 mt-1 text-sm">
                UEFA Champions League Semi-Final • 5. May 2026
              </p>
            </div>

            <div className="grid grid-cols-3 border-b border-gray-200">
              <div className="p-5 text-center">
                <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">Sofascore</p>
                <div className="mt-3 text-4xl font-black">6.0</div>
              </div>
              <div className="p-5 text-center border-l border-r border-gray-200">
                <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">FotMob</p>
                <div className="mt-3 text-4xl font-black">5.9</div>
              </div>
              <div className="p-5 text-center">
                <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">WhoScored</p>
                <div className="mt-3 text-4xl font-black">6.0</div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4">
              <div className="p-5 border-b md:border-b-0 md:border-r border-gray-200">
                <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">Minutes</p>
                <p className="mt-2 text-3xl font-bold">33</p>
              </div>
              <div className="p-5 border-b md:border-b-0 md:border-r border-gray-200">
                <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">Pass Accuracy</p>
                <p className="mt-2 text-3xl font-bold">86%</p>
                <p className="text-sm text-gray-500 mt-1">42/49</p>
              </div>
              <div className="p-5 border-r border-gray-200">
                <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">Duels Won</p>
                <p className="mt-2 text-3xl font-bold">4/7</p>
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">Key Passes</p>
                <p className="mt-2 text-3xl font-bold">0</p>
              </div>
            </div>

            <div className="px-6 py-5 border-t border-gray-200 bg-gray-50 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">Shots</p>
                <p className="text-2xl font-bold">0</p>
              </div>
              <div className="text-right md:text-left">
                <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">Verdict</p>
                <p className="text-sm text-gray-600 mt-1">
                  Solid defensively but struggled to influence the game off the bench when Atlético needed creativity.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-4">A Historic Drought Continues</h2>
            
                    {/* UNITED STATES */}
                    <h3 className="text-2xl font-bold mt-10 mb-4">Christian Pulisic: The Last American to Play in a Champions League Final

</h3>
                    <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8">
                      <Image
                        src="https://i.ibb.co/TBnzz7p0/87f7bcd0-3174-11ec-935b-fb0d68440871.jpg"
                        alt="USMNT 2026 Home Jersey"
                        width={1200}
                        height={800}
                        className="w-full h-auto object-cover"
                        priority
                      />
                      <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
                        Creator: James Williamson - AMA
 | 
Credit: Getty Images
                      </div>
                    </figure>
          <p>
            Christian Pulisic remains the last American to play in a Champions League final — coming off the bench for Chelsea in their 1-0 victory over Manchester City in 2021. 
            Before him, Jovan Kirovski became the first American to win the competition with Borussia Dortmund in 1997, though he never entered the field in the final.
          </p>

          <p>
            Johnny Cardoso came agonizingly close to becoming only the third American to reach that stage.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">What It Means for Cardoso</h2>
          <p>
            There is no shame in this elimination. Becoming a regular in Diego Simeone’s intense, demanding system at just 24 years old is a significant achievement. 
            Cardoso has grown significantly this season — tactically sharper, physically stronger, and mentally tougher.
          </p>

          <p className="mt-8 text-lg font-medium">
            The disappointment will linger for a few days. Then the focus shifts. Ahead of him lies a summer with the United States national team at Copa América, followed by another crucial campaign at Atlético Madrid. 
            The foundation is there. The trajectory is upward.
          </p>

          <p className="text-xl font-semibold mt-12">
            For American soccer fans, the wait for the next Champions League finalist continues. 
            But nights like this — where a young American is trusted in the biggest European competitions — are exactly how that wait eventually ends.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-4">
          <span>Published: May 6, 2026</span>
          <Link href="/blog" className="hover:text-gray-800 font-medium">← Back to all news</Link>
        </footer>

      </div>
    </article>
  );
}
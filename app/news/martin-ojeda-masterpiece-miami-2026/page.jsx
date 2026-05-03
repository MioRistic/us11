'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function OjedaMasterpiece() {
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

  const articleTitle = "Martín Ojeda’s Masterpiece: One Night in Miami That No One Will Forget";

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Martín Ojeda’s Masterpiece: One Night in Miami That No One Will Forget
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-05-03">May 3, 2026</time>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"><FaFacebookF size={20} /></a>
            <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"><FaTwitter size={20} /></a>
            <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"><FaWhatsapp size={20} /></a>
            <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"><FiCopy size={20} /></button>
          </div>
        </header>

        {/* FEATURE IMAGE - preporučujem da zameniš sa relevantnom slikom Ojede ili proslave */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://assets.goal.com/images/v3/blt46944697bc863c53/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-05-02T211526.574.png?auto=webp&format=pjpg&width=1920&quality=60"
            // Bolje bi bilo nešto sa Ojedom - možeš promeniti link
            alt="Martín Ojeda hat-trick vs Inter Miami"
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

          <p>
            MIAMI — For thirty-three minutes on Saturday night, everything made perfect sense inside the gleaming Nu Stadium. Lionel Messi was doing Lionel Messi things. Inter Miami were cruising at 3-0. The Florida Derby looked like it was heading toward another comfortable home victory.
          </p>
            {/* YOUTUBE VIDEO */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Match Highlights</h3>
          <div className="aspect-video w-full bg-black rounded-2xl overflow-hidden shadow-md">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/nGHicBXTCVs"
              title="LAFC vs Toluca - Concacaf Champions Cup Semifinal Highlights"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

          <p>
            Then the script didn’t just flip. It shattered.
          </p>

          <p>
            What followed was one of the most stunning collapses in recent MLS history — and at the absolute center of the chaos was a 27-year-old Argentine winger who decided this was going to be his night.
          </p>

          <p>
            <strong>Martín Ojeda didn’t just score a hat-trick.</strong> He dragged Orlando City back from the dead, dismantled a three-goal lead, and delivered what might be the performance of his career in front of a stunned Miami crowd.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">The Opening Act</h2>
          <p>
            Inter Miami came flying out of the blocks. Ian Fray powered home a header in the 4th minute. Telasco Segovia finished a Messi cutback to make it 2-0. Then, on 33 minutes, the Argentine maestro produced one of those vintage curling efforts into the bottom corner. 3-0. The party was in full swing.
          </p>
          <p>
            At that point, most people in the stadium — and probably watching at home — assumed the game was effectively over. Miami had 10 shots on target by halftime. Orlando goalkeeper Maxime Crépeau was the only reason the scoreline wasn’t uglier.
          </p>
          <p>
            But derbies have a way of punishing arrogance.
          </p>

          <p>
            Ojeda pulled one back right before the break with a sharp turn and finish. It looked like a consolation goal. It turned out to be the beginning of something extraordinary.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">The Storm</h2>
          <p>
            Whatever Orlando head coach said at halftime worked. The visitors came out transformed, and Miami’s defense — already missing its usual cohesion — began to creak, then completely gave way.
          </p>
          <p>
            Ojeda’s second goal arrived on 68 minutes. His third, a composed penalty after Maxi Falcon’s clumsy challenge, made it 3-3. By then the Argentine was everywhere — dropping deep to receive, making runs in behind, dictating the tempo. He wasn’t just scoring; he was running the game.
          </p>
          <p>
            Then, in the third minute of stoppage time, came the knife. Braian Ojeda slipped a perfect pass through, Tyrese Spicer raced clear and slotted the ball between Dayne St. Clair’s legs. Final score: <strong>Inter Miami 3–4 Orlando City</strong>.
          </p>
          <p>
            A 3-0 lead gone. History written. Only the third time in MLS regular-season history a team has come back from three goals down to win.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">The Man of the Hour</h2>
          <p>
            For Ojeda, this was more than just a good game. This was validation.
          </p>
          <p>
            Since arriving from Argentina in 2023, he has been a steady, reliable performer for Orlando. But nights like this are what separate good players from memorable ones. A hat-trick against Messi, in Miami’s brand-new stadium, in a Florida Derby? That’s the kind of performance supporters will talk about for years.
          </p>

          <p>
            While Ojeda was writing his name into the headlines, uncomfortable questions will linger for Inter Miami. Their defense looked disjointed and vulnerable all evening. Falcon and Micael were repeatedly exposed, and even Messi’s brilliance (a goal and two assists) couldn’t paper over the cracks. This was their fourth game at the new Nu Stadium without a win. The “cursed stadium” whispers are getting louder.
          </p>
          <p>
            The collapse also ended an 11-game unbeaten run across all competitions. Painful. Avoidable. And impossible to ignore.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">The Bigger Picture</h2>
          <p>
            For Orlando City, this is massive. A first road win of the season, a huge confidence injection, and a statement that they are very much alive in the Eastern Conference race.
          </p>
          <p>
            For Miami, it’s a serious wake-up call. Talent alone — even talent like Messi — is not enough when defensive foundations are this fragile.
          </p>
          <p>
            But the image that will remain long after this chaotic Florida Derby is finished is Martín Ojeda wheeling away in celebration, time after time, as one of the league’s most expensive stadiums fell into stunned silence.
          </p>
          <p>
            In a league full of superstars, sometimes it’s the less-heralded names who deliver the unforgettable moments.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex justify-between text-sm text-gray-600">
          <span>Published: May 3, 2026</span>
          <Link href="/news" className="hover:text-gray-800">Back to news</Link>
        </footer>

      </div>
    </article>
  );
}
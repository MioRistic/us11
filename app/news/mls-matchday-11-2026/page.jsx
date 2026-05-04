'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function Matchday11Takeaways() {
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

  const articleTitle = "Orlando’s Miracle, Cincinnati’s Chaos and the Loons’ Aerial Assault: What We Learned from MLS Matchday 11";

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Orlando’s Miracle, Cincinnati’s Chaos and the Loons’ Aerial Assault: What We Learned from MLS Matchday 11
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-05-04">May 4, 2026</time>
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
            src="https://assets.goal.com/images/v3/getty-2274230605/crop/MM5DIMRUGY5DEMZYHE5G433XMU5DAORUGI3A====/GettyImages-2274230605.jpg?auto=webp&format=pjpg&width=1920&quality=60"
            alt="Martín Ojeda hat-trick vs Inter Miami - MLS Matchday 11"
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
            It was one of those weekends that reminded everyone why we still watch this league.
          </p>
          <p>
            Leads vanished into thin air, history was nearly made, and chaos reigned from Miami to Chicago to Columbus. Matchday 11 didn’t just deliver results — it delivered drama, character tests, and a few moments that will be replayed for years.
          </p>

            {/* VIDEO */}
        <div className="my-10">
          <h2 className="text-3xl font-bold mb-4">Matchday 11 Highlights</h2>
          <div className="aspect-video w-full bg-black rounded-2xl overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Tj5Vw7Q_ZRM"
              title="MLS Matchday 10 Highlights"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

          <h2 className="text-3xl font-bold mt-10 mb-4">The Derby That Refused to Die</h2>
          <p>
            For 33 minutes at the sparkling new Nu Stadium, Inter Miami did exactly what everyone expected. Ian Fray headed them in front, Telasco Segovia pounced on a Messi cutback, and then the great Argentine produced one of his signature curling beauties. 3-0. The Florida Derby looked finished before halftime.
          </p>
          <p>
            Then <strong>Martín Ojeda happened</strong>.
          </p>
          <p>
            The 27-year-old Argentine winger produced a hat-trick for the ages — including a coolly taken penalty — to drag Orlando City back from the brink. When Tyrese Spicer slotted home in stoppage time, the final score read <strong>Inter Miami 3–4 Orlando City</strong>.
          </p>
          <p>
            Only the third time in MLS regular-season history a team has come back from three goals down to win.
          </p>
          <p>
            For Miami, it was another painful reminder that talent alone isn’t enough. Four games at their new home, zero wins. The “cursed stadium” talk is no longer background noise. For Orlando, it was pure magic — and perhaps the moment their season turned.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Cincinnati’s Ten-Men Masterpiece</h2>
          <p>
            If you thought the Florida Derby was wild, Soldier Field had its own brand of madness.
          </p>
          <p>
            Hugo Cuypers scored twice, Chicago Fire went down to ten men, and they were even awarded a stoppage-time penalty. Most teams would have happily taken a point.
          </p>
          <p>
            Not FC Cincinnati.
          </p>
          <p>
            Roman Celentano, on his emotional return to Chicago, made eight saves — including a heroic stop from Cuypers’ spot-kick. Then Evander stepped up in the dying moments and completed his first MLS hat-trick, securing a 3-2 victory while playing with a man disadvantage.
          </p>
          <p>
            This is now the third time this season that Pat Noonan’s side has come from behind with ten men. That level of resilience is what separates contenders from the rest.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Minnesota’s Set-Piece Masterclass</h2>
          <p>
            Columbus Crew were coasting at 2-0 and looked completely in control. Then Minnesota United did what they’ve done all season under John Herdman — they turned the game into an aerial war.
          </p>
          <p>
            Three unanswered goals, all from dead-ball situations. Kelvin Yeboah scored twice and Anthony Markanich added another. It was clinical, ruthless, and left Wilfried Nancy’s side wondering how a two-goal lead evaporated so completely.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Around the League</h2>
          <p>
            <strong>LAFC</strong> showed champion DNA once again, fighting back from 2-0 down to earn a 2-2 draw against San Diego FC. The late corner-kick equalizer keeps their Concacaf hopes alive.
          </p>
          <p>
            <strong>Real Salt Lake</strong> continue to look like one of the most exciting young teams in the league. A comfortable 2-0 win over Portland, with Zavier Gozo and Diego Luna both on the scoresheet.
          </p>
          <p>
            <strong>D.C. United</strong> finally showed signs of life, with Louis Munteanu scoring twice in a 2-0 victory in New York.
          </p>
          <p>
            <strong>San Jose Earthquakes</strong> remain top of the Supporters’ Shield standings, but needed a heroic goal-line clearance from young Reid Roberts to escape Toronto with a point.
          </p>

          
          {/* NOVI DEO - THE REST OF MATCHDAY 11 */}
          <h2 className="text-3xl font-bold mt-10 mb-4">The Rest of Matchday 11</h2>
          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li><strong>New York City FC 0–2 D.C. United</strong> — Louis Munteanu scored twice as D.C. finally showed some fight.</li>
            <li><strong>Austin FC 2–0 St. Louis CITY SC</strong></li>
            <li><strong>Real Salt Lake 2–0 Portland Timbers</strong> — Zavier Gozo and Diego Luna on target in another impressive display from the young RSL side.</li>
            <li><strong>Atlanta United 3–1 CF Montréal</strong></li>
            <li><strong>New England Revolution 1–0 Charlotte FC</strong></li>
            <li><strong>Philadelphia Union 0–0 Nashville SC</strong></li>
            <li><strong>New York Red Bulls 0–2 FC Dallas</strong></li>
            <li><strong>Toronto FC 1–1 San Jose Earthquakes</strong> — San Jose remain top of the Supporters’ Shield standings.</li>
            <li><strong>Sporting Kansas City 1–1 Seattle Sounders</strong></li>
            <li><strong>San Diego FC 2–2 LAFC</strong> — LAFC fought back from 2-0 down with a late corner-kick equalizer.</li>
          </ul>

          <h2 className="text-3xl font-bold mt-10 mb-4">The Bigger Picture</h2>
          <p>
            Matchday 11 confirmed several emerging themes this season: defensive fragility can destroy even the most talented teams, set pieces remain the ultimate equalizer, and mental toughness is often what separates the good from the great.
          </p>
          <p>
            As we approach the one-third mark of the 2026 campaign, the Eastern Conference is shaping up to be especially brutal. Orlando’s miracle may prove to be a genuine turning point. Cincinnati’s repeated comebacks suggest a team built for the long haul. And somewhere in Ohio, Columbus Crew are left licking their wounds, wondering how comfortable leads keep disappearing.
          </p>
          <p>
            This league continues to deliver far more than we bargained for.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex justify-between text-sm text-gray-600">
          <span>Published: May 4, 2026</span>
          <Link href="/news" className="hover:text-gray-800">Back to news</Link>
        </footer>

      </div>
    </article>
  );
}
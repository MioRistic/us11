'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MascheranoReplacementPage() {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') setCurrentUrl(window.location.href);
  }, []);

  const handleCopyLink = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      alert('✅ Link copied to clipboard!');
    }
  };

  const articleTitle = "Who Should Replace Javier Mascherano at Inter Miami? Ranking the Leading Candidates";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Who Should Replace Javier Mascherano at Inter Miami? Ranking the Leading Candidates
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-04-16">April 16, 2026</time>
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
            src="https://assets.goal.com/images/v3/getty-2219044340/crop/MM5DIMBQGA5DEMRVGA5G433XMU5DAORSGA4Q====/GettyImages-2219044340.jpg?auto=webp&format=pjpg&width=1920&quality=60https://assets.goal.com/images/v3/getty-2219044340/crop/MM5DIMBQGA5DEMRVGA5G433XMU5DAORSGA4Q====/GettyImages-2219044340.jpg?auto=webp&format=pjpg&width=1920&quality=60"
            alt="Who Should Replace Javier Mascherano at Inter Miami"
            width={1200}
            height={675}
            className="w-full h-auto object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: 
| 
Credit: AFP via Getty Images
Copyright: AFP or licensors
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

          <p>
            Just four months after guiding Inter Miami to its first MLS Cup title in club history, Javier Mascherano has stepped down as head coach, citing personal reasons. The Argentine, who took over in late 2024 and delivered a record-breaking 2025 season, left with his entire coaching staff in tow.
          </p>

          <p>
            The departure comes after a solid but unspectacular start to 2026 (3-1-3, third in the Eastern Conference) and an early exit from the Concacaf Champions Cup.
          </p>

          <p>
            Guillermo Hoyos — the man Messi has long called his “futbol dad” from his early days at Barcelona’s academy — has taken interim charge. Chief soccer officer Alberto Marrero has assumed sporting director duties.
          </p>

          <p>
            For a club built around Lionel Messi and still adjusting to life without Sergio Busquets and Jordi Alba (both retired at the end of 2025), the next appointment carries enormous weight.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">1. Xavi Hernández – The Dream Candidate, With a Major Caveat</h2>
          <p>
            Xavi remains the name that surfaces first in any conversation about Inter Miami’s future. A former teammate and close friend of Messi during their golden years at Barcelona, he brings deep tactical understanding of possession-based football, player management and the Catalan-Argentine footballing DNA that still defines much of the roster.
          </p>
          <p>
            His managerial record is respectable: he won multiple titles with Al Sadd in Qatar (2019–2021) and delivered La Liga and the Spanish Super Cup during his Barcelona tenure (2021–2024), while successfully integrating young talents. At 46, he has the authority and football intelligence to command a dressing room that still features Messi and Luis Suárez as its pillars.
          </p>
          <p>
            The reality check: Xavi has been without a club for nearly two years and has repeatedly signaled a preference for a return to European football — ideally the Premier League or La Liga. Whether he is willing to relocate to South Florida and accept the structural realities of MLS (salary cap, travel, roster rules) is far from certain. If a strong European offer arrives this summer, Miami could be left waiting.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">2. Wilfried Nancy – The MLS-Proven Option</h2>
          <p>
            If Inter Miami wants someone who already understands the league’s quirks inside out, Wilfried Nancy is the clearest “plug-and-play” candidate. The French-Canadian coach won the MLS Cup with Columbus Crew in 2023 and was named MLS Coach of the Year in 2024. He previously enjoyed success with CF Montréal, building organized, high-pressing, possession-oriented teams.
          </p>
          <p>
            Nancy’s style — structured build-up, aggressive pressing and tactical flexibility — would not represent a radical departure from what Mascherano was implementing. Crucially, he knows how to navigate MLS roster construction, the condensed schedule and the travel demands that often catch European coaches off guard.
          </p>
          <p>
            Drawbacks: Nancy moved to Celtic in December 2025 but was sacked after a brief, difficult spell in early 2026. While that short stint in Scotland raises questions about adapting to different pressure, his MLS pedigree remains elite. The bigger issue for Miami may be the lack of a direct personal connection with Messi.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">3. Marcelo Gallardo – The Charismatic South American Heavyweight</h2>
          <p>
            Marcelo “Muñeco” Gallardo boasts one of the most impressive coaching résumés in South America, highlighted by multiple Copa Libertadores triumphs with River Plate. He has a reputation for managing egos, implementing intense, high-energy football and getting the best out of talented squads under pressure.
          </p>
          <p>
            The cultural proximity to Messi and the remaining Argentine contingent in Miami could help accelerate dressing-room buy-in. Gallardo is tactically versatile and brings a winning mentality forged in highly demanding environments.
          </p>
          <p>
            Challenges: He stepped down from his second spell at River Plate in February 2026 after a difficult run of results. That recent experience might leave him needing time to reset. Jumping from the intensity of Argentine football to the different rhythms of MLS would be a significant cultural and competitive shift.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">4. Raúl González Blanco – The Romantic Wild Card</h2>
          <p>
            Raúl, the legendary Real Madrid striker, spent time playing in the United States with NY Cosmos and therefore has some familiarity with American soccer culture. He enjoyed a long, successful spell developing talent as coach of Real Madrid Castilla, where he emphasized attractive, disciplined football.
          </p>
          <p>
            As a Spaniard, he speaks the same football language as the remaining Spanish-speaking core. His mere presence would bring instant authority and a different tactical flavor — potentially more direct and intense.
          </p>
          <p>
            The hurdles: Many will view his Real Madrid background as a potential cultural mismatch in a squad still shaped by Barcelona influences. Raúl is currently without a club and may still be holding out for a European opportunity.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">5. Fernando Torres – The High-Risk, High-Reward Storyline</h2>
          <p>
            Fernando “El Niño” Torres is doing impressive work with Atlético Madrid’s B team, where his side plays attacking, goal-heavy football and develops young talent effectively. As a Spaniard, he shares a similar mentality and language with key figures in the organization.
          </p>
          <p>
            A move to Miami would be a cinematic leap — from youth coach to leading a Messi-led team chasing more silverware. His energy could be valuable as the club continues to integrate academy prospects alongside its aging stars.
          </p>
          <p>
            The obvious risk: Torres still has very limited senior head-coaching experience. Placing him directly into one of the highest-pressure environments in MLS would be a massive gamble for both parties.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Final Thoughts</h2>
          <p>
            Xavi sits atop most shortlists because of his Messi connection and Barcelona DNA, but the practical obstacles are real. Nancy offers the safest short-term footballing continuity thanks to his deep MLS track record. Gallardo would bring star power and intensity, while Raúl and Torres represent more speculative, narrative-driven choices.
          </p>

          <p className="mt-8 font-medium">
            David Beckham and the ownership group have shown patience before, but with the new stadium open and expectations undiminished, they cannot afford a long, messy search. Whoever ultimately gets the job must quickly establish authority in a dressing room still anchored by Messi and deliver results in a league that rewards both tactical sophistication and pragmatic roster management.
          </p>

          <p className="mt-6 text-center font-semibold">
            What do you think — should Miami go for the big name with European pedigree, or the coach who already knows the league? The clock is ticking.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: April 16, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>
          <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-800">Back to blog</Link>
        </footer>

      </div>
    </article>
  );
}
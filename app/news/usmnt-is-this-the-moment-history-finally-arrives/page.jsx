'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function USMNTMomentHistoryPage() {
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

  const articleTitle = "USMNT: Is This the Moment History Finally Arrives?";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('USMNT: Is This the Moment History Finally Arrives? 🇺🇸')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            USMNT: Is This the Moment History Finally Arrives?
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-06-11">June 11, 2026</time>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition">
              <FaFacebookF size={20} />
            </a>
            <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-black text-white hover:opacity-80 transition">
              <FaTwitter size={20} />
            </a>
            <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[#25D366] text-white hover:opacity-80 transition">
              <FaWhatsapp size={20} />
            </a>
            <button onClick={handleCopyLink} className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors">
              <FiCopy size={20} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="w-full rounded-3xl overflow-hidden shadow-xl mb-10">
          <Image
            src="https://assets.goal.com/images/v3/blt40b9a6a88c288b52/crop/MM5DEMZTGA5DCMZRGE5G433XMU5DAORSGMZQ====/GettyImages-2268813440.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="USMNT 2026 World Cup"
            width={1200}
            height={675}
            className="w-full h-auto object-cover"
            priority
          />
             <figcaption className="text-xs text-gray-400 px-3 py-2">
    Creator: Kevin C. Cox
 | 
Credit: Getty Images
Copyright: 2026 Getty Images
  </figcaption>
</figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8 text-gray-800">

          <p className="text-xl">
            The countdown is nearly over. In just a few days, the 2026 World Cup begins, and the United States Men’s National Team enters what may be the most important tournament in the modern history of American soccer.
          </p>

          <p>
            The opening match against Paraguay at SoFi Stadium in Los Angeles will bring the kind of atmosphere U.S. players have rarely experienced at the international level. A packed stadium. A home World Cup. Expectations unlike any this program has carried before.
          </p>

          <p>
            For years, this generation was discussed in terms of potential. Christian Pulisic was the prodigy. Giovanni Reyna was the next star. Weston McKennie and Tyler Adams were viewed as pieces of a future contender.
          </p>

          <p className="font-semibold text-xl">The future has arrived.</p>

          <p>
            This is no longer a young team learning on the job. These are players in or near their prime, many with years of experience in Europe’s top leagues. More importantly, this may be the last World Cup in which the core of this generation enters together at its peak.
          </p>

          <p>
            The question is no longer whether the talent exists.<br />
            The question is whether it can finally translate into a defining tournament.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-5">A Team That Looks Ready</h2>
          <p>
            One of the strongest arguments for optimism is that the U.S. finally appears more complete than at any point during this cycle.
          </p>
          <p>
            Under Mauricio Pochettino, the team has developed a clearer identity. The pressing structure is more aggressive but also more organized. Possession sequences have greater purpose. The midfield has found balance between energy and control, while the attack possesses more variety than previous American teams.
          </p>
          <p>
            Recent performances have reinforced that belief. A victory over Senegal showcased resilience and attacking quality, while a competitive performance against Germany — even in defeat — offered evidence that the U.S. can compete with elite opposition for extended stretches.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-5">The Advantage of Playing at Home</h2>
          <p>
            Home-field advantage is often overstated in international soccer. But hosting a World Cup is different. Familiar environments, reduced travel demands, and overwhelming crowd support create tangible benefits over the course of a month-long tournament.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-5">A Group That Offers Opportunity</h2>
          <p>
            Paraguay, Australia, and Turkey are all capable opponents. Still, compared to some of the difficult groups the United States has faced in previous World Cups, this draw presents a genuine opportunity to build confidence and momentum early.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-5">Scouting the Opposition</h2>

          <h3 className="text-2xl font-bold">1. Paraguay</h3>
          <p>
            A quality South American side that knows how to suffer. They are excellent defensively, physically strong, and tactically disciplined. They will not open up easily. Key players include Miguel Almirón (Premier League experience), the highly talented creator Julio Enciso, and veteran defender Gustavo Gómez.
          </p>
          <p><strong>Real threat:</strong> Set pieces and quick counterattacks.</p>
          <p><strong>USMNT advantage:</strong> Greater individual quality and a stronger bench.</p>

          <h3 className="text-2xl font-bold mt-8">2. Australia</h3>
          <p>
            Physically powerful and extremely well-organized. They play direct football, using long balls into the striker and high pressing in phases.
          </p>
          <p><strong>Key players:</strong> Mathew Ryan, Aaron Mooy (if still active), Craig Goodwin and several young talents from the A-League and Europe.</p>
          <p><strong>Style:</strong> Difficult to play against. They like to kill the game and wait for penalties.</p>
          <p><strong>Key for USMNT:</strong> Patience and avoiding unnecessary duels in midfield. Australia can become very awkward if the match becomes locked.</p>

          <h3 className="text-2xl font-bold mt-8">3. Turkey</h3>
          <p>
            The most unpredictable opponent in the group. They possess exceptional individual quality (Çalhanoğlu, Güler and others). They play with emotion and are technically very gifted, but can be tactically chaotic.
          </p>
          <p><strong>Danger:</strong> Counterattacks and moments of individual brilliance (especially if Arda Güler is in form).</p>
          <p><strong>Weakness:</strong> Occasional poor defensive organization and emotional drops when things are not going their way.</p>
          <p><strong>USMNT advantage:</strong> Better tactical discipline and superior physical preparation for three matches in seven days.</p>

          <h2 className="text-3xl font-bold mt-12 mb-5">Conclusion and Realistic Expectations</h2>
          <p>
            This is the most favorable group the USMNT has received at a World Cup in the last 30 years. Advancing from the group — likely in first or second place — is a realistic expectation.
          </p>

          <p><strong>My predicted scenario:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Paraguay</strong> — Win</li>
            <li><strong>Australia</strong> — Win</li>
            <li><strong>Turkey</strong> — Win or draw (the toughest match)</li>
          </ul>

          <p className="font-semibold text-xl mt-8">
            Minimum goal: Round of 16<br />
            Realistic ceiling: Quarterfinals<br />
            Dream scenario: Semifinals (if the knockout draw is kind)
          </p>

          <p className="text-xl font-medium mt-10">
            This generation no longer has any excuses. Pulisic is in his prime, Pochettino is a manager who knows how to win big matches, and the crowd will be the 12th player.
          </p>

          <p className="text-xl font-medium">
            The opportunity is here. Now comes the part that ultimately defines every golden generation: proving it on the world’s biggest stage.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: June 11, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>
          <Link href="/news" className="mt-4 sm:mt-0 hover:text-black transition-colors">
            ← Back to news
          </Link>
        </footer>

      </div>
    </article>
  );
}
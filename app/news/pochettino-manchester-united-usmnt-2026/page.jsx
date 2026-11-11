
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function PochettinoManchesterUnitedUSMNT2026() {
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
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const articleTitle =
    "Pochettino’s Manchester United interest is real. What it means for the USMNT is less clear.";

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
              USMNT
            </span>
            <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
              Mauricio Pochettino
            </span>
            <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
              Manchester United
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Pochettino’s Manchester United Interest Is Real. What It Means for the USMNT Is Less Clear.
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-11-10">November 10, 2026</time>
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
              className="p-2 rounded-full bg-black text-white hover:bg-white hover:text-black transition"
              aria-label="Copy article link"
            >
              <FiCopy size={20} />
            </button>
          </div>
        </header>

        {/* HERO IMAGE */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1at_ZooB46OwJF3ESZJDSlpbxSHObJBzA7amwquJj3zXxdgIhVSPmrHsN&s=10"
            alt="Mauricio Pochettino"
            fill
            className="object-cover"
            priority
            unoptimized
          />

          <div className="absolute bottom-3 right-3 bg-black/75 text-white text-[10px] sm:text-xs px-3 py-2 rounded font-medium text-right leading-relaxed">
            <div>Copyright: 2026 Getty Images</div>
            <div>Credit: Getty Images</div>
            <div>Creator: Charlotte Wilson</div>
          </div>
        </figure>

        {/* ARTICLE BODY */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">

          <p>
            Mauricio Pochettino has not left the United States men’s national team. He has not been offered the Manchester United job. He has not even confirmed, publicly, that he wants it. Yet the reports that emerged on November 10 were consistent enough, and came from enough outlets with reliable track records, that the conversation inside the USMNT camp shifted from hypothetical to practical.
          </p>

          <p>
            The Guardian, ESPN, The Telegraph, and others described mutual interest. United, sitting in the relegation zone after one win in 10 league games under Michael Carrick, are expected to make a managerial change. Pochettino’s contract with U.S. Soccer runs through 2030 and contains a release clause in the region of $10 million. For a club of United’s size, that is a manageable figure. For U.S. Soccer, it is the amount they accepted as the price of hiring a coach with genuine European options.
          </p>

          <p>
            The timing is awkward. Pochettino signed the extension only three months ago, after the World Cup. He is currently preparing a squad for a two-legged Concacaf Nations League quarterfinal against Haiti. Several players, including Antonee Robinson, have already said they are treating the reports as background noise until they are told otherwise. That is the correct short-term approach. It does not resolve the longer one.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">
            Why the Interest Makes Sense for Both Sides
          </h2>

          <p>
            Pochettino has never hidden his preference for club football and for the Premier League specifically. He has spoken, more than once, about wanting to build something with the chance of winning titles. United have approached him, or at least interviewed him, on previous occasions. Sir Alex Ferguson has long viewed him as a coach who understands the scale of the job. Those are not new facts. What is new is that United’s situation is now bad enough that the hierarchy appears willing to move quickly, and that Pochettino’s contract includes a clear exit mechanism.
          </p>

          <p>
            From United’s perspective, the appeal is obvious. They need a manager who has worked in the Premier League, who has experience managing big personalities, and who is available without a lengthy search. Pochettino checks those boxes. From his perspective, the appeal is also straightforward. The United job remains one of the few that can match the daily intensity he is used to. The USMNT role, while well compensated and relatively low-pressure outside of major tournaments, is still a national-team job. It does not offer the same rhythm.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">
            What It Would Cost the USMNT
          </h2>

          <p>
            If the move happens, the financial hit to U.S. Soccer is limited. The real cost is continuity. The federation brought Pochettino in after the previous cycle and then chose to keep him after a round-of-16 exit at the 2026 World Cup. The stated goal was to avoid another reset. An exit now, less than four months after that decision, would undercut that logic.
          </p>

          <p>
            The practical effects would depend on timing. The Haiti matches are close enough that Pochettino will almost certainly remain in charge of them. After that, a departure would leave the program without a permanent coach heading into the rest of the 2026–27 calendar. U.S. Soccer would need to decide whether to promote from within, return to a previous option, or begin another external search. Each choice carries its own complications. The current group of players has already adjusted to one style. Introducing another would require another adjustment period at a point in the cycle when the federation has repeatedly said it wants stability.
          </p>

          <p>
            There is also the question of staff. Pochettino rarely moves without his core group, including longtime assistant Jesús Pérez. Any deal that includes them would raise the compensation figure. Any deal that does not would leave the USMNT with a partially dismantled coaching structure.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">
            The Other Side of the Argument
          </h2>

          <p>
            It is also possible to overstate the damage. National-team jobs have always carried the risk that a high-profile coach will leave for a club. U.S. Soccer knew this when they hired Pochettino and when they extended him. The $10 million clause exists precisely because they anticipated it. Several of the players who have spoken about the situation have done so with a degree of realism rather than surprise.
          </p>

          <p>
            The roster itself is not suddenly weaker if the coach changes. Christian Pulisic, Weston McKennie, Folarin Balogun, and the younger players who have emerged under Pochettino will still be available. What would be lost is the specific version of the team that has been built over the last two years. Whether that version was progressing quickly enough to justify the investment is a separate debate. The reports this week simply force the federation to confront it sooner than planned.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">
            What Happens Next
          </h2>

          <p>
            Nothing is finalized. Carrick has not been dismissed. No formal approach has been confirmed. Pochettino is scheduled to speak to the media this week and will almost certainly be asked about the speculation. His answers, and United’s decision after their internal meetings, will determine how seriously the situation needs to be taken.
          </p>

          <p>
            Until then, the USMNT continues preparing for Haiti. That is the only part of the story that is fully under their control. Everything else remains contingent on a club in Manchester deciding how badly it wants to change managers, and on a coach in the United States deciding how strongly he wants to return to the Premier League. Both sides have reasons to move. Neither has done so yet.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: November 10, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>

          <Link
            href="/news"
            className="mt-4 sm:mt-0 hover:text-black transition-colors"
          >
            ← Back to news
          </Link>
        </footer>

      </div>
    </article>
  );
}

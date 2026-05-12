'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function USMNTInjuryConcerns() {
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
    "USMNT Hit by Injury Concerns as Cardoso Faces Surgery and Pulisic Misses Key Milan Match";

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            USMNT Hit by Injury Concerns as Cardoso Faces Surgery and Pulisic Misses Key Milan Match
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-05-11">May 11, 2026</time>
          </div>

          {/* SOCIAL SHARE */}
          {mounted && (
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
          )}
        </header>

        {/* FEATURE IMAGE */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <img
            src="https://assets.goal.com/images/v3/getty-2270965566/crop/MM5DEMRYGA5DCMRYGM5G433XMU5DAORWHA======/GettyImages-2270965566.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Christian Pulisic and Johnny Cardoso USMNT injury concerns"
            width={1200}
            height={675}
            className="w-full h-auto object-cover"
          />

          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Marco Luzzani | Credit: Getty Images | Copyright: 2026 Getty Images
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

          <p>
            With the 2026 World Cup on home soil just weeks away, Mauricio Pochettino’s United States national team has suffered a pair of worrying injury blows in the space of 48 hours.
          </p>

          <p>
            On Monday, Atlético Madrid confirmed that Johnny Cardoso will undergo surgery on a high-grade right ankle sprain with joint involvement.
          </p>

          <p>
            The 24-year-old is expected to miss three to four months — a timeline that almost certainly rules him out of the tournament.
          </p>

          <p>
            Meanwhile, Christian Pulisic missed AC Milan’s 3-2 defeat to Atalanta on Sunday due to a glute injury, though early indications suggest the issue is precautionary rather than serious.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Cardoso’s Season Ends Abruptly
          </h2>
                <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8">
                                <img
                                  src="https://assets.goal.com/images/v3/getty-2267955731/crop/MM5DEMZYGQ5DCMZUGE5G433XMU5DKMJWHIZTS===/GettyImages-2267955731.jpg?auto=webp&format=pjpg&width=3840&quality=60"
                                  alt="USMNT 2026 Home Jersey"
                                  width={1200}
                                  height={800}
                                  className="w-full h-auto object-cover"
                                />
                                <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
                                  Creator: Angel Martinez | Credit: Getty Images | Copyright: 2026 Getty Images
                                </div>
                              </figure>

          <p>
            The New Jersey native had been enjoying a genuine breakout campaign in Madrid.
          </p>

          <p>
            After a big-money move from Real Betis, Cardoso had made 30 appearances across all competitions and was beginning to establish himself as a trusted starter in Diego Simeone’s physically demanding system.
          </p>

          <p>
            That progress has now been halted suddenly.
          </p>

          <p>
            The injury occurred in training last Thursday, and the need for surgery represents a significant setback for both player and national team.
          </p>

          <p>
            For Pochettino, this is a particularly painful loss.
          </p>

          <p>
            Cardoso had emerged as one of the strongest candidates to partner Tyler Adams in central midfield.
          </p>

          <p>
            His blend of physicality, tactical discipline, and growing European experience made him a valuable two-way option in the USMNT engine room.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Pulisic’s Situation Offers More Optimism
          </h2>
            <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8">
                                <img
                                  src="https://assets.goal.com/images/v3/getty-2274302674/crop/MM5DIMBQGA5DEMRVGA5G433XMU5DAORSGA4Q====/GettyImages-2274302674.jpg?auto=webp&format=pjpg&width=3840&quality=60"
                                  alt="USMNT 2026 Home Jersey"
                                  width={1200}
                                  height={800}
                                  className="w-full h-auto object-cover"
                                />
                                <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
                                  Creator: Emmanuele Ciancaglini | Credit: Getty Images | Copyright: 2026 Getty Images
                                </div>
                              </figure>

          <p>
            The situation with Christian Pulisic is far less concerning.
          </p>

          <p>
            While he sat out Sunday’s match, multiple reports indicate the glute issue is precautionary.
          </p>

          <p>
             While he sat out Sunday’s match, multiple reports — including from ESPN and Gianluca Di Marzio — indicate the glute issue is precautionary. The American star has dealt with muscular problems throughout his career, but he is widely expected to be available for the World Cup barring any setbacks.


          </p>

          <p>
            This season has been something of a mixed bag for Pulisic — eight goals and three assists in 18 Serie A appearances — but his quality and importance to the national team remain beyond question.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            The Current USMNT Injury Picture
          </h2>

          <ul className="list-disc pl-6 space-y-4 text-lg">
            <li>
              <strong>Confirmed absences for the World Cup:</strong>
              <br />
              Johnny Cardoso (ankle surgery)
              <br />
              Patrick Agyemang (Achilles injury)
            </li>

            <li>
              <strong>Monitoring / Precautionary:</strong>
              <br />
              Christian Pulisic (glute) — expected to recover in time
              <br />
              Tanner Tessmann — minor issue, not expected to impact World Cup hopes
            </li>

            <li>
              <strong>Positive returns:</strong>
              <br />
              Antonee Robinson and Sergino Dest have both returned to full training recently.
            </li>
          </ul>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            What It Means for Pochettino
          </h2>
          <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8">
                                <img
                                  src="https://assets.goal.com/images/v3/getty-2269402545/crop/MM5DIOBRGY5DENZQHE5G433XMU5DAORRG44Q====/GettyImages-2269402545.jpg?auto=webp&format=pjpg&width=3840&quality=60"
                                  alt="USMNT 2026 Home Jersey"
                                  width={1200}
                                  height={800}
                                  className="w-full h-auto object-cover"
                                />
                                <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
                                  Creator: Jared C. Tilton | Credit: Getty Images | Copyright: 2026 Getty Images
                                </div>
                              </figure>

          <p>
            The USMNT manager now faces the familiar late-stage challenge of finalizing a 26-man roster while dealing with injuries to key personnel.
          </p>

          <p>
            The loss of Cardoso removes one of the more reliable and physically robust central midfield options.
          </p>

          <p>
            While depth exists — Tyler Adams, Yunus Musah, Aidan Morris, Cristian Roldan — replacing Cardoso’s specific profile and recent club form will not be straightforward.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            The Bigger Picture
          </h2>

          <p>
            These injury concerns arrive at a critical juncture.
          </p>

          <p>
            The United States will face Senegal in Charlotte on May 31 and Germany in Chicago on June 6 in their final pre-tournament friendlies before opening Group Stage play against Paraguay on June 12.
          </p>

          <p>
            While the squad still possesses significant talent and home advantage, the absence of Cardoso forces Pochettino to rethink his midfield balance.
          </p>

          <p>
            As expectations around this team continue to grow, every available body and every recovered player becomes increasingly valuable.
          </p>

          <p className="font-semibold text-xl">
            The countdown to the World Cup is well and truly on — and the injury gods have not been kind to the USMNT in these final weeks.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex justify-between text-sm text-gray-600">
          <span>Published: May 11, 2026</span>

          <Link
            href="/news"
            className="hover:text-gray-800"
          >
            Back to news
          </Link>
        </footer>

      </div>
    </article>
  );
}
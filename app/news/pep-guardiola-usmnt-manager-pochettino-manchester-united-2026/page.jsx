
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function GuardiolaUSMNT2026() {
  const [currentUrl, setCurrentUrl] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const title =
    'The Guardiola-to-USMNT Idea Is Real on One Side. It Is Still a Long Shot on the Other.';

  const shareText = title;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
              USMNT
            </span>
            <span className="text-xs font-bold uppercase tracking-wider bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
              Pep Guardiola
            </span>
            <span className="text-xs font-bold uppercase tracking-wider bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
              Mauricio Pochettino
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            {title}
          </h1>

          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-6">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-11-12">November 12, 2026</time>
          </div>

          {/* SOCIAL SHARE */}
          <div className="flex items-center gap-3">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Facebook"
              className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"
            >
              <FaFacebookF size={20} />
            </a>

            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareText)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on X"
              className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"
            >
              <FaTwitter size={20} />
            </a>

            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on WhatsApp"
              className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"
            >
              <FaWhatsapp size={20} />
            </a>

            <button
              onClick={handleCopyLink}
              aria-label="Copy article link"
              className="p-2 rounded-full bg-black text-white hover:bg-white hover:text-black transition"
            >
              <FiCopy size={20} />
            </button>

            {copied && (
              <span className="text-sm text-gray-500">
                Link copied!
              </span>
            )}
          </div>
        </header>

        {/* HERO IMAGE */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://assets.goal.com/images/v3/getty-2277167485/crop/MM5DCMJTGY5DMMZZHJXG653FHI2TUMJQGY======/GettyImages-2277167485.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Pep Guardiola"
            fill
            className="object-cover"
            priority
            unoptimized
          />

          <figcaption className="absolute bottom-3 right-3 bg-black/75 text-white text-[10px] sm:text-xs px-3 py-2 rounded font-medium text-right leading-relaxed">
            Credit: Getty Images
            <br />
            Creator: Michael Steele
          </figcaption>
        </figure>

        {/* ARTICLE BODY */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">

          <p>
            U.S. Soccer is prepared to make Pep Guardiola its leading candidate if Mauricio Pochettino leaves for Manchester United, according to reporting from The Athletic’s Paul Tenorio, Henry Bushnell and Tom Bogert on November 11. The federation has discussed him internally. That part is not invented. What is far less certain is whether Guardiola has any interest in ending his sabbatical to take the job.
          </p>

          <p>
            Guardiola left Manchester City at the end of the 2025-26 season after a decade in charge. He has said repeatedly that he wanted a break. In July he turned down Italy. Italian federation president Giovanni Malagò later said Guardiola was honest about wanting time away, partly for family reasons, and that if he had wanted to work immediately he would have taken the Italy job. Reports this week note that he has shown little recent interest in a quick return to management. The pursuit, The Athletic wrote, “would not be straightforward nor easy.”
          </p>

          <p>
            That is the central problem. U.S. Soccer can decide it wants Guardiola. It cannot decide that Guardiola wants the USMNT.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">
            What Would Have to Happen, and in What Order
          </h2>

          <p>
            The sequence is clear and sequential:
          </p>

          <ol>
            <li>
              Manchester United must decide to move on from Michael Carrick and formally approach Pochettino and U.S. Soccer. Multiple reports say a framework or verbal agreement on personal terms already exists and that United views the roughly $10 million release clause as manageable. As of November 11–12, Carrick had not been officially dismissed in every account, and full contact with U.S. Soccer had not been completed in all reporting. Until those steps are finished, nothing else moves.
            </li>

            <li>
              Pochettino must agree to leave and the compensation must be settled. He is currently with the USMNT in camp ahead of the Nations League quarterfinals against Haiti (Saturday in Miami, Tuesday in Cincinnati). He is expected to coach those matches. A departure could come after the second game if United finalizes the deal quickly.
            </li>

            <li>
              Only then does U.S. Soccer make its formal call to Guardiola. The federation has contacted him before—he was sounded out during the 2024 search that eventually produced Pochettino—and he has a documented interest in the United States. He spent a year in New York after leaving Barcelona in 2012. In 2024 he described the U.S. as “fascinating for trying to build a project over many years” and noted the country’s size and sporting culture. Those comments give U.S. Soccer a reason to call. They do not guarantee an answer.
            </li>

            <li>
              Guardiola would then have to decide that the project is worth interrupting his planned time away, that he wants an international job rather than another club, and that the USMNT is the right one. He has never managed a national team. He has also never managed a side that is not among the absolute elite. Those are practical questions any conversation would have to address.
            </li>
          </ol>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">
            When We Will Know More
          </h2>

          <p>
            The Haiti matches give a natural window of a few days. If United completes its process this week or early next week, Pochettino’s future should be clearer by the middle or end of next week. U.S. Soccer’s approach to Guardiola, if it happens, would follow almost immediately. Guardiola’s response would not necessarily come the same day. He has shown he is willing to say no quickly when he is not ready. A clear “no” could arrive within days of a formal approach. A willingness to talk would extend the process.
          </p>

          <p>
            In short: the next 7–10 days should resolve the Pochettino side of the story. The Guardiola side could take longer, or it could end almost as soon as the call is made.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">
            What It Would Actually Mean If He Came
          </h2>

          <p>
            If Guardiola accepted, it would be the most significant coaching appointment in the modern history of the USMNT. His record at Barcelona, Bayern Munich and Manchester City is unmatched among active managers. He has spoken positively about the long-term potential of American soccer. A successful tenure would raise the program’s ceiling in a way few other coaches could.
          </p>

          <p>
            It would also introduce new risks. National-team jobs offer less daily control, fewer training sessions, and a different set of pressures than club management. Guardiola has thrived with resources and time. The USMNT can offer neither in the same volume. Whether his methods translate cleanly is an open question that would only be answered on the field.
          </p>

          <p>
            For now the realistic position is simpler. U.S. Soccer is ready to try. Guardiola has given no public indication that he is ready to be convinced. Everything else is still conditional.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: November 12, 2026</p>
            <p>Written by Mio Ristić</p>
          </div>

          <Link
            href="/news"
            className="mt-4 sm:mt-0 hover:text-black transition-colors"
          >
            ← Back to News
          </Link>
        </footer>

      </div>
    </article>
  );
}

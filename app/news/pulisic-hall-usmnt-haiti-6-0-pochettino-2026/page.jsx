
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

export default function PulisicHallUSMNTHaiti2026() {
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
    'Pulisic and Hall Lead a Dominant USMNT as Pochettino’s Exit Begins';

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
              Christian Pulisic
            </span>
            <span className="text-xs font-bold uppercase tracking-wider bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
              Julian Hall
            </span>
            <span className="text-xs font-bold uppercase tracking-wider bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
              Concacaf Nations League
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            {title}
          </h1>

          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-6">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-11-15">November 15, 2026</time>
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
            src="https://assets.goal.com/images/v3/getty-2305143539/crop/MM5DIOBSGY5DGMRRG45G433XMU5DAORQ/GettyImages-2305143539.jpg?quality=60&auto=webp&format=pjpg&width=1920"
            alt="United States national team players during their Concacaf Nations League match against Haiti"
            fill
            className="object-cover"
            priority
            unoptimized
          />

          <figcaption className="absolute bottom-3 right-3 bg-black/75 text-white text-[10px] sm:text-xs px-3 py-2 rounded font-medium text-right leading-relaxed">
            Credit: Getty Images
          </figcaption>
        </figure>

        {/* ARTICLE BODY */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">

          <p>
            The United States did what was expected of them on Saturday night in Miami, and they did it with more clarity than the circumstances around the team might have suggested.
          </p>

          <p>
            A 6-0 win over Haiti in the first leg of their Concacaf Nations League quarterfinal put the series effectively out of reach. Auston Trusty opened the scoring early, Julian Hall doubled the lead seven minutes into the second half, and then Christian Pulisic scored twice in the space of a minute. Weston McKennie and Folarin Balogun added the fifth and sixth. Five of the six goals came after halftime. The performance was controlled rather than frantic, and it left the second leg in Cincinnati on Tuesday looking more like a formality than a contest.
          </p>

          {/* YOUTUBE VIDEO */}
          <div className="not-prose my-10">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-md">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/bt-iHnzcevQ"
                title="USMNT vs Haiti - Concacaf Nations League highlights"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          <p>
            This was also Mauricio Pochettino’s penultimate match in charge. He will coach the return leg before flying to Manchester to begin work at Old Trafford. The result does not change the larger reality of his departure, but it does remove the most immediate practical concern. The United States will almost certainly advance. What comes after that remains the more complicated question.
          </p>

          <p>
            Pulisic’s return was the clearest individual story. He had missed the October window while recovering from the injury sustained in the World Cup round of 16. On Saturday he was involved in the game from the start and decisive after the break. He won the penalty that made it 3-0, converted it, and scored again almost immediately from outside the box. The brace moved him past Eric Wynalda on the all-time USMNT scoring list. It was his first multi-goal game for the national team in several years. The performance will not settle every debate about his form or his best position, but it was a reminder of the level he can still reach when he is fit and fully involved.
          </p>

          <p>
            Hall’s contribution was quieter in volume and just as important in timing. The 18-year-old scored the goal that stretched the lead early in the second half and was involved in the build-up that led to Pulisic’s penalty. It was his fourth goal in five senior appearances. More significantly, the match officially cap-tied him to the United States. He had previously been eligible for Poland. That door is now closed. Hall still has work to do on his finishing and his consistency in tighter games, but the early returns have been difficult to ignore.
          </p>

          <p>
            The rest of the performance was efficient. Trusty’s early header from a Sebastian Berhalter set piece settled any early nerves. McKennie’s header from a corner added a fifth. Balogun, who came off the bench, scored the sixth and had another effort correctly ruled out for a foul in the build-up. The United States controlled possession and limited Haiti to limited clear chances. Diego Kochen was not heavily tested, though he was required to make at least one important save before the game opened up.
          </p>

          <p>
            The context around the match remains difficult to separate from the result. Pochettino had signed an extension in the summer that was intended to run through the 2030 World Cup. He will now leave after two more days and one more game. The federation will begin a search for a permanent replacement while Steve Cherundolo handles the December camp. None of that was visible in the way the team played on Saturday. The players executed the plan that was in front of them. Whether that plan survives the coaching change is a different matter.
          </p>

          <p>
            The second leg in Cincinnati will still need to be treated with some care. A 6-0 aggregate lead is substantial, but it is not infinite. Haiti will have the chance to play more freely, and the United States will be without Pochettino afterward. The more useful takeaway from Miami is narrower. When the squad has its preferred attacking pieces available and the opponent is overmatched, the United States can still produce this kind of scoreline. That was true under Pochettino. It will need to remain true under whoever comes next.
          </p>

          <p>
            For one night, the noise around the coaching change was secondary. Pulisic scored twice, Hall continued his early scoring run, and the team took a clear step toward the Nations League semifinals. The larger questions about the program will still be there on Tuesday morning. On Saturday night they could be set aside long enough for the result to stand on its own.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: November 15, 2026</p>
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

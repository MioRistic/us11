
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function AllanSaintMaximinRedCard() {
  const [currentUrl, setCurrentUrl] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCurrentUrl(window.location.href);

    const scriptId = 'twitter-wjs';

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.charset = 'utf-8';

      document.body.appendChild(script);
    } else {
      window.twttr?.widgets?.load();
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
    'Allan Saint-Maximin Sent Off After VAR Review in Charlotte FC’s 4-0 Win';

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">

        {/* Header */}
        <header className="mb-8">

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
              MLS
            </span>

            <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
              News
            </span>

            <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
              Charlotte FC
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-5">
            Allan Saint-Maximin Sent Off After VAR Review in Charlotte FC’s 4-0 Win
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
            The French winger scored against Orlando City before a controversial
            gesture resulted in a late red card, turning an otherwise impressive
            Charlotte performance into a night of contrasting headlines.
          </p>

          {/* Share buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-8">

            <button
              onClick={handleCopyLink}
              className="flex items-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-800 px-4 py-2 rounded-full text-sm font-medium transition"
            >
              <FiCopy className="w-4 h-4" />
              {copied ? 'Copied!' : 'Copy link'}
            </button>

            <a
              href={facebookShare}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-800 px-4 py-2 rounded-full text-sm font-medium transition"
            >
              <FaFacebookF className="w-4 h-4" />
              Facebook
            </a>

            <a
              href={twitterShare}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-800 px-4 py-2 rounded-full text-sm font-medium transition"
            >
              <FaTwitter className="w-4 h-4" />
              X
            </a>

            <a
              href={whatsappShare}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-800 px-4 py-2 rounded-full text-sm font-medium transition"
            >
              <FaWhatsapp className="w-4 h-4" />
              WhatsApp
            </a>

          </div>
        </header>

        {/* Hero image */}
        <figure className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-md mb-3 aspect-[16/9] bg-gray-100">

          <Image
            src="https://assets.goal.com/images/v3/getty-2299592124/crop/MM5DINBRGE5DENBYGE5G433XMU5DAORSGMYA====/GettyImages-2299592124.jpg?auto=webp&format=pjpg&width=2048&quality=60"
            alt="Allan Saint-Maximin during Charlotte FC's match against Orlando City"
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover"
            priority
          />

          <div className="absolute bottom-3 right-3 bg-black/75 text-white text-xs px-3 py-1.5 rounded font-medium">
            © Getty Images
          </div>

        </figure>

   

        {/* Article content */}
        <div className="max-w-none text-base md:text-lg leading-8">

          <p className="mb-6">
            Allan Saint-Maximin had already delivered one of Charlotte FC’s
            most important moments of the evening when his performance took
            an unexpected turn. The French winger scored, missed a penalty
            and was eventually sent off following a VAR review as Charlotte
            cruised to a 4-0 victory over Orlando City.
          </p>

          <p className="mb-6">
            Charlotte had little reason to complain about the overall result.
            They were comfortable for much of the contest, scored four times
            and secured a convincing victory. Yet the closing stages brought
            an entirely different kind of attention, with Saint-Maximin
            becoming the central figure in an incident that overshadowed
            an otherwise productive performance.
          </p>

          <p className="mb-10">
            For a player whose game is built around unpredictability,
            Saturday’s appearance provided a reminder that not every moment
            of individual expression works in a team's favour.
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-12 mb-5">
            From Attacking Threat to Controversy
          </h2>

          <p className="mb-6">
            Charlotte established control early, taking the lead in the
            sixth minute through Henry Kessler. The hosts continued to
            threaten, using their attacking movement to stretch Orlando’s
            defensive structure.
          </p>

          <p className="mb-6">
            Saint-Maximin was particularly influential, offering the kind
            of direct attacking threat that has made him an intriguing
            addition to Charlotte’s squad.
          </p>

          <p className="mb-6">
            His contribution became even more significant four minutes
            into the second half. The Frenchman doubled Charlotte’s lead
            in the 49th minute, providing another example of the individual
            quality that makes him such a dangerous attacking player.
          </p>

          <p className="mb-10">
            His ability to accelerate past defenders and create opportunities
            in one-on-one situations remains an important weapon for Charlotte.
            However, the most consequential moments of his evening were
            still to come.
          </p>

          {/* Section 2 */}
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-12 mb-5">
            A Missed Penalty and a Costly Reaction
          </h2>

          <p className="mb-6">
            With Charlotte leading 2-0, Saint-Maximin had an opportunity
            to put the result beyond doubt from the penalty spot in the
            84th minute.
          </p>

          <p className="mb-6">
            His attempt was saved, but Abdoulaye Doucouré reacted quickest
            to the rebound and scored, extending Charlotte’s advantage
            to three goals.
          </p>

          <p className="mb-6">
            Five minutes later, Saint-Maximin became involved in an exchange
            with Orlando players that would bring his evening to an abrupt end.
          </p>

          <p className="mb-6">
            According to reports, the winger made an obscene gesture during
            an exchange involving Orlando midfielder Wilder Cartagena.
            The incident prompted VAR intervention after the initial
            decision on the field.
          </p>

          {/* X video embed */}
          <div className="my-10">

            <div className="mb-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                The Incident
              </span>
              <h3 className="text-xl md:text-2xl font-bold mt-2">
                Saint-Maximin’s Red Card Against Orlando City
              </h3>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 p-3 md:p-5">

              <blockquote
                className="twitter-tweet"
                data-dnt="true"
                data-theme="light"
                data-conversation="none"
              >
                <a href="https://twitter.com/PavelFdez/status/2116637830109954350">
                  Watch the incident
                </a>
              </blockquote>

            </div>

            <p className="text-xs text-gray-500 mt-3">
              Video: Original post by Pavel Fdez on X.
            </p>

          </div>

          <p className="mb-6">
            The referee reviewed the footage on the pitchside monitor
            before deciding to show Saint-Maximin a straight red card
            in the 89th minute.
          </p>

          <p className="mb-10">
            The dismissal was not for a challenge or an incident involving
            physical contact. It was for the nature of the gesture itself,
            which was deemed offensive under the Laws of the Game.
          </p>

          {/* Section 3 */}
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-12 mb-5">
            Why the Incident Matters
          </h2>

          <p className="mb-6">
            There is an important distinction between Saint-Maximin’s
            contribution to the match and the circumstances surrounding
            his dismissal.
          </p>

          <p className="mb-6">
            On the pitch, his performance was productive. He scored,
            created problems for Orlando’s defensive line and remained
            one of Charlotte’s most dangerous attacking outlets.
          </p>

          <p className="mb-6">
            But the dismissal introduced an unnecessary complication
            into an otherwise successful evening.
          </p>

          <p className="mb-6">
            Under IFAB Law 12, a player can be sent off for using
            offensive, insulting or abusive language or actions.
            The rules do not require physical contact or a conventional
            footballing foul for a direct red card to be justified.
          </p>

          <p className="mb-10">
            The precise length of any subsequent suspension will depend
            on the relevant disciplinary process. For Charlotte, the
            priority will be ensuring that one moment of indiscipline
            does not become a bigger problem at a crucial stage of
            the campaign.
          </p>

          {/* Section 4 */}
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-12 mb-5">
            Charlotte Move Forward, but Saint-Maximin Faces Questions
          </h2>

          <p className="mb-6">
            The 4-0 victory was another positive result for Charlotte,
            who demonstrated their attacking quality throughout the contest.
            Rodolfo Aloko added a fourth goal in stoppage time, completing
            an emphatic performance against Orlando.
          </p>

          <p className="mb-6">
            For Saint-Maximin, however, the match will be remembered
            for more than his goal.
          </p>

          <p className="mb-6">
            The 29-year-old arrived in MLS with a reputation built during
            spells at Newcastle United and Al-Ahli, among other clubs.
            His technical ability and capacity to produce moments of
            individual brilliance have rarely been in question.
          </p>

          <p className="mb-6">
            Charlotte signed him to add another dimension to their
            attacking options. His ability to carry the ball, beat
            defenders and create opportunities makes him a valuable
            player when fully focused on the game.
          </p>

          <p className="mb-6">
            Saturday demonstrated both sides of that equation.
            The quality that makes Saint-Maximin a difference-maker
            was visible in his second-half goal. So was the indiscipline
            that can turn a positive individual performance into an
            unnecessary disciplinary issue.
          </p>

          <p className="mb-6">
            Charlotte got the result they wanted. Saint-Maximin,
            despite scoring, will leave the evening with a rather
            different set of questions to answer.
          </p>

        </div>

        {/* Next to Read */}
        <section className="mt-16">

          <h3 className="text-2xl font-bold mb-6">
            Next to Read
          </h3>

          <div className="grid md:grid-cols-2 gap-6">

            <Link
              href="/news/nashville-supporters-shield-2026"
              className="group"
            >
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">

                <div className="aspect-[16/10] relative bg-gray-100">
                  <Image
                    src="https://assets.goal.com/images/v3/blt0733c3edcfb41a40/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-03-22T213603.222.png?quality=60&auto=webp&format=pjpg&width=1920"
                    alt="Nashville SC"
                    fill
                    sizes="(max-width: 768px) 100vw, 448px"
                    className="object-cover"
                  />
                </div>

                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Nashville SC Won the 2026 Supporters’ Shield. They Did It the Old-Fashioned Way.
                  </h4>

                  <p className="text-sm text-gray-500 mt-2">
                    October 25, 2026
                  </p>
                </div>

              </div>
            </Link>

            <Link
              href="/news/messi-inter-miami-cincinnati-draw"
              className="group"
            >
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">

                <div className="aspect-[16/10] relative bg-gray-100">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2302465844/crop/MM5DGNRRGY5DEMBTGQ5G433XMU5DAORRHA4Q====/GettyImages-2302465844.jpg?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="Lionel Messi and Inter Miami"
                    fill
                    sizes="(max-width: 768px) 100vw, 448px"
                    className="object-cover"
                  />
                </div>

                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Messi Didn’t Score or Assist. Inter Miami Still Escaped With a Late Draw Against Cincinnati.
                  </h4>

                  <p className="text-sm text-gray-500 mt-2">
                    October 29, 2026
                  </p>
                </div>

              </div>
            </Link>

          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">

          <div className="space-y-1">
            <p>Published: November 1, 2026</p>
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

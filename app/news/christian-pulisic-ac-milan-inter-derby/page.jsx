
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function ChristianPulisicMilanInter() {
  const [currentUrl, setCurrentUrl] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCurrentUrl(window.location.href);
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
    'Christian Pulisic Delivers as AC Milan Take Control of the Derby';

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
              Serie A
            </span>

            <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
              News
            </span>

            <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
              AC Milan
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-5">
            Christian Pulisic Delivers as AC Milan Take Control of the Derby
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
            Christian Pulisic opened the scoring against Inter, setting the
            tone for a 3-1 victory at San Siro. But Milan&apos;s performance
            was about more than one American forward. Diego Moreira&apos;s
            outstanding contribution and a disciplined collective display
            exposed the weaknesses of Cristian Chivu&apos;s side.
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
            src="https://assets.goal.com/images/v3/imago-sport-1085165753/crop/MM5DKMBQGQ5DEOBRGU5G433XMU5DAORQ/imago-image.jpeg?quality=60&auto=webp&format=pjpg&width=1920"
            alt="Christian Pulisic during AC Milan's derby against Inter"
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover"
            priority
          />

          <div className="absolute bottom-3 right-3 bg-black/75 text-white text-xs px-3 py-1.5 rounded font-medium">
            © Buzzi
          </div>

        </figure>

        {/* Article content */}
        <div className="max-w-none text-base md:text-lg leading-8">

          <p className="mb-6">
            There are certain matches in which a player does not need to
            dominate possession or produce a spectacular individual
            performance to leave a lasting impression. Sometimes, the most
            important contribution comes from recognising the right moment
            to make the decisive run.
          </p>

          <p className="mb-6">
            Christian Pulisic understood that moment perfectly.
          </p>

          <p className="mb-6">
            Just four minutes into Saturday&apos;s Derby della Madonnina,
            the United States international opened the scoring as AC Milan
            defeated Inter 3-1 at San Siro. It was an early statement from
            a side that entered the contest needing a response after
            suffering a 4-2 defeat against Bologna in midweek.
          </p>

          <p className="mb-6">
            For Pulisic, it was another opportunity to demonstrate why he
            has become such an important attacking figure for Milan. His
            goal gave the Rossoneri an immediate advantage, but the
            significance of the result extended beyond the American&apos;s
            contribution.
          </p>

          <p className="mb-10">
            Milan had beaten their city rivals through a combination of
            intelligent movement, effective execution and defensive
            organisation. Against an Inter side that had started the league
            campaign unbeaten, those qualities proved decisive.
          </p>

   

          {/* Section 1 */}
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-12 mb-5">
            Pulisic Finds the Space When It Matters
          </h2>

          <p className="mb-6">
            Milan&apos;s opening goal illustrated one of Pulisic&apos;s most
            valuable qualities: his ability to identify space inside the
            penalty area without needing to dominate the ball.
          </p>

          <p className="mb-6">
            Diego Moreira created the opportunity on the right, controlling
            possession before advancing towards the byline. His delivery
            found Pulisic arriving in the penalty area, where the American
            directed a header into the bottom-left corner.
          </p>

          <p className="mb-6">
            It was an uncomplicated finish, but the movement deserved as
            much attention as the execution.
          </p>

          <p className="mb-6">
            Pulisic did not remain isolated in a wide position waiting for
            the ball. Instead, he recognised the opportunity to attack the
            space created by Moreira&apos;s forward movement.
          </p>

          <p className="mb-6">
            That distinction matters when evaluating his role in
            Milan&apos;s attacking structure. Pulisic is not simply a winger
            expected to receive possession and take on defenders. His
            ability to move between the lines, attack the penalty area and
            arrive in dangerous positions makes him a more versatile
            attacking option.
          </p>

          <p className="mb-10">
            His opening goal also changed the psychological balance of the
            derby. Inter had barely established themselves in the contest
            when Milan were already celebrating.
          </p>

          {/* Section 2 */}
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-12 mb-5">
            Moreira Turns the Derby Into Milan&apos;s Game
          </h2>

          <p className="mb-6">
            Although Pulisic provided the opening moment, Diego Moreira was
            arguably the most influential attacking player on the pitch.
          </p>

          <p className="mb-6">
            The Belgian winger was directly involved in all three Milan
            goals, producing two assists before scoring himself.
          </p>

          <p className="mb-6">
            His contribution to the second goal was particularly revealing.
            In the 10th minute, Moreira delivered a cleverly executed low
            corner towards Adrien Rabiot, who finished with a delicate touch
            that sent the ball against the far post and into the net.
          </p>

          <p className="mb-6">
            It was an example of preparation and execution rather than
            simply individual inspiration. Inter were caught by a set-piece
            routine that Milan had clearly developed to exploit the
            defensive positioning of their opponents.
          </p>

          <p className="mb-6">
            The early 2-0 advantage placed Inter in an uncomfortable
            position. Chivu&apos;s team had expected to control the game
            through possession and midfield combinations. Instead, they
            were forced to chase a result against a Milan side that had
            already demonstrated its willingness to attack quickly.
          </p>

          <p className="mb-6">
            Inter responded through Alessandro Bastoni in the 22nd minute.
            The defender converted a corner delivered by Hakan Çalhanoğlu,
            with Manuel Akanji providing the initial flick-on.
          </p>

          <p className="mb-6">
            For a period, the momentum shifted towards the Nerazzurri.
            Mike Maignan was particularly important during that spell,
            producing a remarkable reaction save to deny Djed Spence from
            close range.
          </p>

          <p className="mb-6">
            That intervention prevented Inter from equalising and allowed
            Milan to regain control.
          </p>

          <p className="mb-6">
            Moreira then delivered the decisive moment of the first half.
            Two minutes before stoppage time, he stepped forward to take a
            free kick from approximately 25 yards and curled a superb
            left-footed effort beyond Josep Martínez.
          </p>

          <p className="mb-10">
            Milan went into the interval with a 3-1 advantage, having
            converted their attacking opportunities with remarkable
            efficiency.
          </p>

          {/* Section 3 */}
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-12 mb-5">
            Why Milan&apos;s Tactical Approach Worked
          </h2>

          <p className="mb-6">
            The result was not simply a consequence of individual quality.
            Milan&apos;s organisation played an equally important role.
          </p>

          <p className="mb-6">
            Amorim&apos;s side started in a 4-4-1-1 formation, with Pulisic
            operating on the left side of midfield, Moreira providing width
            on the opposite flank and Rabiot positioned behind centre-forward
            Gonçalo Ramos.
          </p>

          <p className="mb-6">
            The structure offered Milan several advantages.
          </p>

          <p className="mb-6">
            First, it allowed the team to maintain a relatively compact
            defensive shape while keeping attacking players in positions
            from which they could exploit transitions.
          </p>

          <p className="mb-6">
            Second, the presence of Luka Modrić in midfield provided
            experience and composure. Rather than turning the game into an
            uncontrolled exchange of attacks, Milan could rely on his
            ability to manage possession and help dictate the rhythm.
          </p>

          <p className="mb-6">
            Rabiot also played an important role. His positioning between
            midfield and attack gave Milan another option when progressing
            the ball, while his movement into dangerous areas created
            problems for Inter&apos;s defensive structure.
          </p>

          <p className="mb-6">
            Inter, meanwhile, struggled to translate their possession into
            consistent attacking opportunities.
          </p>

          <p className="mb-6">
            Their three-man defensive system was exposed by Milan&apos;s
            ability to attack the spaces around the wing-backs. Moreira was
            particularly dangerous, repeatedly forcing Carlos Augusto into
            difficult defensive situations.
          </p>

          <p className="mb-10">
            The problem for Inter was not necessarily a lack of possession
            or technical quality. It was their inability to establish
            sufficient defensive control when Milan moved forward.
          </p>

          {/* Section 4 */}
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-12 mb-5">
            Inter Fail to Find a Second-Half Response
          </h2>

          <p className="mb-6">
            The second half presented a different challenge.
          </p>

          <p className="mb-6">
            With a two-goal advantage, Milan had little reason to take
            unnecessary risks. Their priority became protecting the space
            in front of Maignan while preventing Inter from building
            sustained pressure.
          </p>

          <p className="mb-6">
            Chivu attempted to change the attacking picture through
            substitutions, including the introduction of Henrikh Mkhitaryan
            and Federico Dimarco.
          </p>

          <p className="mb-6">
            Inter also had an opportunity to reduce the deficit when a
            potential handball involving Mario Gila initially attracted
            the referee&apos;s attention. However, a VAR review overturned
            the decision after confirming that the ball had struck the
            defender&apos;s chest.
          </p>

          <p className="mb-6">
            It was an important moment because Inter needed a goal to make
            the final stages genuinely competitive.
          </p>

          <p className="mb-6">
            Instead, Milan continued to defend with discipline. Strahinja
            Pavlović was particularly important in dealing with Marcus
            Thuram, while Maignan provided the security expected from one
            of the team&apos;s most experienced players.
          </p>

          <p className="mb-6">
            The Nerazzurri never managed to generate the sustained attacking
            pressure required to threaten Milan&apos;s advantage.
          </p>

          <p className="mb-10">
            For the Rossoneri, that was perhaps the most encouraging aspect
            of the performance. They had scored three times in the first
            half, but they also demonstrated that they could manage a
            difficult derby without losing their defensive structure.
          </p>

          {/* Section 5 */}
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-12 mb-5">
            Pulisic&apos;s Importance Goes Beyond the Goal
          </h2>

          <p className="mb-6">
            Pulisic will understandably receive attention in the United
            States following the victory.
          </p>

          <p className="mb-6">
            His opening goal against Inter adds another significant moment
            to his growing collection of performances in Italian football.
            More importantly, it reinforces his importance within Milan&apos;s
            attacking options.
          </p>

          <p className="mb-6">
            The American has developed into a player capable of influencing
            matches in different ways. He can operate from wide positions,
            attack the penalty area and contribute to combinations in
            central areas.
          </p>

          <p className="mb-6">
            That versatility is particularly valuable in a team that does
            not always rely on one fixed attacking structure.
          </p>

          <p className="mb-6">
            However, it would be misleading to present Saturday&apos;s
            victory as a one-man performance.
          </p>

          <p className="mb-6">
            Moreira&apos;s contribution was extraordinary, Rabiot provided
            another important attacking dimension, and Maignan&apos;s
            interventions ensured that Inter could not turn their improved
            spell into an equaliser.
          </p>

          <p className="mb-6">
            Pulisic was the player who delivered the opening blow. His
            teammates ensured that it became a decisive victory.
          </p>

          <p className="mb-6">
            For American football, there is also a broader significance.
            Pulisic continues to demonstrate that players from the United
            States can occupy important roles at elite European clubs,
            competing in some of the most demanding matches on the
            continental calendar.
          </p>

          <p className="mb-6">
            A goal in the Derby della Madonnina is not an ordinary
            achievement. It is another reminder of the level at which he
            is performing.
          </p>

          

          <p className="mb-10">
            Milan have now won three consecutive Serie A derbies against
            Inter, a sequence they had not achieved since the early 2000s.
            For Pulisic, the latest victory provides another important
            chapter in his Milan career.
          </p>

        </div>

        <div className="relative w-full aspect-video overflow-hidden rounded-xl">
  <iframe
    className="absolute inset-0 w-full h-full"
    src="https://www.youtube.com/embed/hMqZMLqkoWI"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  />
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

'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function AmericansAbroadWeekend() {
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

  const articleTitle =
    "Reyna Scored Against PSG. Pulisic Is Finding His Feet. McKennie Started in a Collapse. Aaronson Watched From the Bench.";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Reyna scored against PSG. Pulisic is finding his feet. McKennie started in a collapse. Aaronson watched from the bench.')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Reyna Scored Against PSG. Pulisic Is Finding His Feet. McKennie Started in a Collapse. Aaronson Watched From the Bench.
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-10-20">October 20, 2026</time>
          </div>
        </header>

        <div className="flex items-center gap-3 mb-8">
          <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border hover:bg-gray-50 transition" aria-label="Share on Facebook">
            <FaFacebookF />
          </a>
          <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border hover:bg-gray-50 transition" aria-label="Share on X">
            <FaTwitter />
          </a>
          <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border hover:bg-gray-50 transition" aria-label="Share on WhatsApp">
            <FaWhatsapp />
          </a>
          <button onClick={handleCopyLink} className="p-2 rounded-full border hover:bg-gray-50 transition" aria-label="Copy link">
            <FiCopy />
          </button>
          {copied && <span className="text-sm text-green-600">Copied</span>}
        </div>

        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://assets.goal.com/images/v3/getty-2300107618/crop/MM5DENZWGM5DCNJVGQ5G433XMU5DAORRGQ2A====/GettyImages-2300107618.jpg?quality=60&auto=webp&format=pjpg&width=1920"
            alt="Gio Reyna scores for Strasbourg against PSG"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Copyright: AFP via Getty Images / Francois Lo Presti
          </div>
        </figure>

        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">
          <p className="text-lg italic text-gray-700">
            Four USMNT players, four different weekends in Europe — and four reminders that club form is about more than the final score.
          </p>

          <p>
            For the United States men’s national team, the weekend offered no single story of progress. Gio Reyna scored against Paris Saint-Germain, Christian Pulisic took another step toward regular involvement at AC Milan, Weston McKennie endured a damaging Juventus defeat, and Brenden Aaronson watched Leeds United’s draw with Manchester United from the bench.
          </p>

          <p>
            Their situations are different, but the questions overlap. Who is turning minutes into momentum? Who is still rebuilding? And who needs his club role to change before the next international window?
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Gio Reyna: A goal that matters beyond the scoreline
          </h2>

          <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8 aspect-[16/9]">
            <Image
              src="https://assets.goal.com/images/v3/getty-2293340398/crop/MM5DCNZRGI5DSNRTHJXG653FHIYTSNB2GI2TS===/GettyImages-2293340398.jpg?auto=webp&format=pjpg&width=3840&quality=60"
              alt="Weston McKennie in action for Juventus"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
              Copyright: AFP
            </div>
          </figure>

          <p>
            Reyna gave Strasbourg an early lead against PSG on Saturday, finishing in the 17th minute after combining with Gessime Yassine and driving into the penalty area. His shot found the bottom corner, giving Strasbourg a reward for a promising start against the reigning French powerhouse.
          </p>

          <p>
            The lead survived until the closing stages, but PSG eventually turned the match around. Illia Zabarnyi equalized in the 77th minute, Ousmane Dembélé put the visitors ahead eight minutes later, and Désiré Doué added a third in stoppage time. Strasbourg lost 3–1 despite Reyna’s contribution.
          </p>

          <p>
            The result should not obscure the individual significance of the goal. Reyna’s career has repeatedly been interrupted by injuries and short spells in which he struggled to establish himself. His move from Borussia Mönchengladbach to Strasbourg this summer offered an opportunity to reset in a younger squad and a different environment. The early signs are encouraging: he has found a place in the team and is producing moments that translate into goals.
          </p>

          <p>
            There is a distinction, however, between finding a foothold and becoming a decisive player over an entire season. One goal against PSG does not establish that Reyna has solved the consistency problem that has followed him through recent club moves. It does show why Strasbourg could be a useful setting for his development: regular involvement gives him the chance to turn flashes of technical quality into repeatable contributions.
          </p>

          <p>
            For the USMNT, that is the more important development. Reyna does not need to be judged solely on whether Strasbourg can compete with PSG over 90 minutes. He needs sustained playing time, physical continuity and a role in which he can influence matches rather than simply appear in them. Saturday offered evidence of progress, not a final verdict.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Christian Pulisic: Minutes are returning, but production must follow
          </h2>

           <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8 aspect-[16/9]">
            <Image
              src="https://assets.goal.com/images/v3/getty-2248113233/crop/MM5DGMBQGA5DCNRYHA5G433XMU5DAORRGQYQ====/GettyImages-2248113233.jpg?auto=webp&format=pjpg&width=3840&quality=60"
              alt="Christian Pulisic in action for AC Milan"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
              Copyright: 2025 Getty Images
            </div>
          </figure>


          <p>
            Pulisic’s weekend was more complicated than the headline result suggests. He started for AC Milan in Sunday’s 3–2 win over Atalanta, had a close-range finish ruled out for offside in the 13th minute, was denied by goalkeeper Marco Carnesecchi after the break and left the field in the 75th minute. Milan won, but Pulisic did not record a goal or an assist.
          </p>

          <p>
            That distinction matters. Pulisic is no longer simply waiting for an opportunity to return to the pitch; he is back in the starting lineup and accumulating meaningful minutes. But a return to regular involvement is not the same as a return to his best level. His disallowed goal showed that he was getting into a dangerous position, while the subsequent save denied him a chance to turn that movement into a measurable contribution.
          </p>

          <p>
            His recovery has been gradual. Pulisic scored against Lecce on September 20, his first competitive club goal in 266 days, and has since featured against Sassuolo, RB Salzburg and Atalanta. He was left out of the USMNT squad while working toward full fitness.
          </p>

          <p>
            The club situation also carries a longer-term dimension. Milan have yet to begin formal contract-renewal talks, according to reporting attributed to The Athletic, although the club has an option to extend his current agreement through June 2028. Milan also rejected interest from New York City FC during the summer. Those details suggest the club still values keeping him, even as questions remain about his contract and his level of performance.
          </p>

          <p>
            The next step is not simply to start another match. It is to make those starts count. Pulisic has the technical ability to influence games from wide areas and between the lines, but the priority after a lengthy absence is to build rhythm without rushing expectations. His involvement against Atalanta was another step forward; his next challenge is to turn that involvement into consistent end product.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Weston McKennie: Playing regularly is not the same as playing well enough
          </h2>

          <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8 aspect-[16/9]">
            <Image
              src="https://assets.goal.com/images/v3/getty-2300860603/crop/MM5DKMBQGQ5DEOBRGU5G433XMU5DAORSGYYQ====/GettyImages-2300860603.jpg?quality=60&auto=webp&format=pjpg&width=1920"
              alt="Weston McKennie in action for Juventus"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
              Getty Images Sport
            </div>
          </figure>

          <p>
            McKennie started Juventus’ 3–0 defeat to Lazio on Sunday and remained on the pitch for the full match. Lazio scored through Oliver Provstgaard in the 37th minute, Gustav Isaksen in the 66th and Fisayo Dele-Bashiru in the 89th. It was a comprehensive defeat for a Juventus side that struggled to contain its visitors.
          </p>

          <p>
            For McKennie, the match illustrates the limits of judging a player by selection alone. His place in the team is not in immediate doubt: Juventus renewed his contract through June 2030 in March, and the club has highlighted his versatility and importance under Luciano Spalletti. He can operate in several midfield and attacking roles, a quality that helps explain why he remains a useful option.
          </p>

          <p>
            But a regular role creates a different standard of evaluation. The question is no longer whether McKennie can get onto the pitch. It is whether Juventus can turn the work of players such as him into performances that are stable enough to compete with Serie A’s strongest teams.
          </p>

          <p>
            Against Lazio, the collective failure was unmistakable. Juventus conceded three times and never found a response. It would be too simplistic to assign the defeat to one midfielder, particularly in a match shaped by the team’s wider defensive and attacking problems. Still, McKennie’s reliability and tactical flexibility will count for more if Juventus can build a functioning structure around him.
          </p>

          <p>
            For the USMNT, the distinction is important. A player who regularly competes at a major European club brings valuable match fitness and experience. Yet club status alone does not guarantee that he is arriving in international camp at the level required to influence games. McKennie has the minutes; Juventus need the results, and he needs to remain a positive part of the solution.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Brenden Aaronson: A point for Leeds, no minutes for him
          </h2>

            <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8 aspect-[16/9]">
            <Image
              src="https://assets.goal.com/images/v3/getty-2192405278/crop/MM5DGNZRHA5DEMBZGE5G433XMU5DAORRHEZQ====/GettyImages-2192405278.jpg?auto=webp&format=pjpg&width=3840&quality=60"
              alt="Christian Pulisic in action for AC Milan"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
              Copyright: 2025 Getty Images 
              Credit: Getty Images
Creator: George Wood
            </div>
          </figure>

          <p>
            Leeds United earned a 1–1 draw against Manchester United at Elland Road on Sunday. Bryan Mbeumo opened the scoring for United in the 35th minute, before Dominic Calvert-Lewin equalized six minutes into the second half. Aaronson was named among Leeds’ substitutes but did not enter the game.
          </p>

          <p>
            The result was useful for Leeds, who recovered from falling behind to claim a point in a high-intensity rivalry fixture. For Aaronson, however, the afternoon offered no opportunity to influence the outcome. A team result and an individual’s progress are not always moving in the same direction.
          </p>

          <p>
            Aaronson began the season with a place in Leeds’ starting lineup but has since found himself competing for minutes. His new contract, which runs until 2029, gives the club a long-term commitment to the player, but it does not guarantee a place in the XI.
          </p>

          <p>
            His challenge is different from Pulisic’s. Pulisic is working to turn a gradual return into sustained productivity; Aaronson needs to turn his opportunities into a stronger claim for selection. For an attacking player whose value is tied to energy, pressing and movement, the most important evidence will come when he gets back onto the pitch — not from watching a teammate take his place.
          </p>

          <p>
            A substitute appearance can be a route back into a team. An unused substitute has to wait for the next opening. Aaronson’s task is to make that opening count when it comes.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Four players, four different measures of progress
          </h2>

          <p>
            Reyna had the weekend’s most visible individual moment, but Strasbourg’s defeat was a reminder that one goal cannot settle the broader questions about his consistency. Pulisic is building match fitness and starting again, although his contribution against Atalanta remains a step in a longer recovery rather than proof that he is back at his best. McKennie continues to play regularly, but Juventus’ collapse against Lazio exposed the gap between individual availability and collective performance. Aaronson, meanwhile, is facing the simplest and most urgent problem: earning minutes.
          </p>

          <p>
            The four situations should not be reduced to a single ranking. A goal, a start, a defeat and a place on the bench measure different things. The more useful question for the USMNT is what each player can carry forward from this point.
          </p>

          <p>
            Reyna needs continuity. Pulisic needs rhythm and production. McKennie needs to help turn regular involvement into stronger team performances. Aaronson needs a chance — and then a performance that makes the next selection harder to ignore.
          </p>

          <p className="font-semibold text-lg mt-10">
            One weekend does not define any of them. But across Europe, the same principle remains: reputation can secure attention, and a contract can secure a future, but consistent performances are what move a player’s season forward.
          </p>
        </section>

        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/news/damet-st-louis-first-job" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/blt577ca013fa3871fc/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-03-10T122830.270.png?quality=60&auto=webp&format=pjpg&width=1920"
                    alt="Yoann Damet"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Damet Is 36 and in His First Job. St. Louis Is One Game From a Trophy.
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">October 20, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/ojeda-backheel-goal-of-the-year" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://i.ibb.co/hRTtz0wp/01ke6zvb0dqtawf59r90.webp"
                    alt="Martín Ojeda"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Ojeda’s Backheel Is a Goal of the Year Case. It Is Not the Award.
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">October 18, 2026</p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: October 20, 2026</p>
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
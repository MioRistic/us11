'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function NYCFCManchesterCityCase() {
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
    'Is New York City FC at Risk From Manchester City’s Financial Case?';

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
              Analysis
            </span>

            <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
            NYCFC
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-5">
            Is New York City FC at Risk From Manchester City’s Financial Case?
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
            Manchester City’s financial case has raised questions about the
            wider City Football Group network. But MLS has drawn a clear line
            between the Premier League proceedings and the business of New
            York City FC.
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
               <figure className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9] bg-gray-100">
                 <Image
                   src="https://i.ibb.co/VY2ZwGRb/1793544865808.jpg"
                   alt="MLS high-scoring action"
                   fill
                   sizes="(max-width: 768px) 100vw, 896px"
                   className="object-cover"
                   priority
                 />
                 <div className="absolute bottom-3 right-3 bg-black/75 text-white text-xs px-3 py-1.5 rounded font-medium">
                   Gemini Images
                 </div>
               </figure>

        {/* Article content */}
        <div className="max-w-none text-base md:text-lg leading-8">

          <p className="mb-6">
            The ownership links are difficult to ignore. The executives
            overlap, the commercial relationships are shared, and the two
            clubs belong to the same global football group. Yet as Manchester
            City faces the consequences of a major regulatory case in England,
            New York City FC continues to operate without an MLS investigation
            into its finances or ownership.
          </p>

          <p className="mb-6">
            That distinction was made explicit in October, when MLS commissioner
            Don Garber said the league was not in the business of examining
            what its owners do in other competitions. For now, the league sees
            Manchester City’s case as a matter for English football, not
            American soccer.
          </p>

          <p className="mb-10">
            The question is whether that separation will remain straightforward
            if the proceedings against Manchester City eventually result in
            significant sanctions.
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-12 mb-5">
            The Manchester City Case — and the Questions It Raises
          </h2>

          <p className="mb-6">
            An independent commission found Manchester City guilty of 114 of
            115 charges relating to alleged breaches of the Premier League’s
            financial rules between 2009 and 2018. The findings centered on
            sponsorship arrangements described as “sham” deals, which the
            commission concluded had inflated the club’s reported revenue and
            understated costs by more than £800 million.
          </p>

          <p className="mb-6">
            Manchester City has appealed the findings, and the case remains
            subject to that process. No final sanctions have been imposed.
          </p>

          <p className="mb-6">
            The scale of the allegations has inevitably drawn attention to the
            wider City Football Group network. New York City FC is part of that
            structure, with CFG holding a controlling stake in the MLS club.
            The organizations also share senior executive connections, while
            Etihad Airways sponsors both teams.
          </p>

          <p className="mb-6">
            One additional link is particularly relevant to the period under
            scrutiny: NYCFC’s chief financial officer previously worked at
            Manchester City during the years covered by the charges.
          </p>

          <p className="mb-6">
            These connections establish a clear corporate relationship between
            the clubs. They do not, by themselves, establish that NYCFC has
            breached any MLS rules or that Manchester City’s alleged conduct
            was replicated in the United States.
          </p>

          <p className="mb-10">
            That is an important distinction. Shared ownership creates
            legitimate questions about governance and financial exposure, but
            it does not automatically make every club within a multinational
            group responsible for the regulatory position of another.
          </p>

          {/* Section 2 */}
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-12 mb-5">
            Garber Has Drawn a Line Between the Two Clubs
          </h2>

          <p className="mb-6">
            Garber addressed the issue directly in mid-October at a Front
            Office Sports event in New York.
          </p>

          <p className="mb-6">
            The commissioner said MLS was “not in the business of looking at
            what our team owners do in other leagues.” He also praised City
            Football Group’s investment in NYCFC, including the club’s new
            stadium under construction in Queens.
          </p>

          {/* Quote block */}
          <blockquote className="my-8 border-l-4 border-blue-600 bg-gray-50 rounded-r-xl px-6 py-5">
            <p className="text-xl md:text-2xl font-semibold leading-relaxed text-gray-800">
              “Not in the business of looking at what our team owners do in
              other leagues.”
            </p>

            <footer className="mt-3 text-sm text-gray-500">
              — Don Garber, MLS commissioner
            </footer>
          </blockquote>

          <p className="mb-6">
            His comments offered no indication that MLS intended to investigate
            NYCFC’s finances or ownership structure in response to the
            Manchester City proceedings.
          </p>

          <p className="mb-6">
            The position reflects a distinction between the responsibilities
            of the Premier League and those of MLS. Manchester City is subject
            to the rules and disciplinary processes of English football. NYCFC
            operates within a separate competition, under a different
            financial and regulatory framework.
          </p>

          <p className="mb-6">
            Garber’s comments do not resolve every question about the potential
            consequences of a ruling against Manchester City. They do, however,
            establish the league’s current position: the English case is not,
            in itself, a reason to open a separate investigation into NYCFC.
          </p>

          <p className="mb-10">
            For the moment, MLS is treating the two situations separately.
          </p>

          {/* Section 3 */}
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-12 mb-5">
            NYCFC’s Business Continues as Usual
          </h2>

          <p className="mb-6">
            NYCFC officials have adopted a similar public position.
          </p>

          <p className="mb-6">
            Chief operating officer Jennifer O’Sullivan described the club’s
            approach as “business as usual.” Construction on Etihad Park, the
            club’s planned new stadium in Queens, continues toward a scheduled
            opening in July 2027.
          </p>

          <p className="mb-6">
            The project is significant because it represents a long-term
            commitment to NYCFC and its place in the New York sports market.
            The club has spent years seeking a permanent home, and the stadium
            is central to its plans for future growth.
          </p>

          <p className="mb-6">
            There has been no reported disruption to NYCFC’s day-to-day
            operations or commercial agreements as a result of the Manchester
            City case.
          </p>

          <p className="mb-6">
            That does not mean the wider ownership structure is irrelevant. A
            major financial or sporting penalty against Manchester City could
            create consequences elsewhere within City Football Group, depending
            on the scale of the sanction and the group’s subsequent decisions.
          </p>

          <p className="mb-6">
            But there is currently no established link between the proceedings
            in England and any wrongdoing by NYCFC. The club continues to
            operate, and its stadium project remains on schedule.
          </p>

          <p className="mb-10">
            That does not eliminate every possible future risk. It does mean
            there is a difference between speculation about the ownership
            group and evidence of an immediate problem at the MLS club.
          </p>

          {/* Section 4 */}
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-12 mb-5">
            Why Premier League Rules Do Not Translate Directly to MLS
          </h2>

          <p className="mb-6">
            The regulatory differences between the two competitions help
            explain Garber’s position.
          </p>

          <p className="mb-6">
            The Premier League operates under its own financial regulations,
            including a profitability and sustainability framework. Manchester
            City’s case concerns alleged breaches of the rules governing its
            finances during a specific period.
          </p>

          <p className="mb-6">
            MLS has a different structure. Its financial model includes a
            salary budget and roster mechanisms designed to regulate spending
            across the league. It does not apply the same profitability and
            sustainability framework that formed the basis of the Premier
            League case.
          </p>

          <p className="mb-6">
            The distinction matters because a finding under one competition’s
            rules does not automatically constitute a violation under another
            competition’s regulations.
          </p>

          <p className="mb-6">
            For MLS to pursue a case against NYCFC, there would need to be a
            relevant basis under its own rules and a reason to examine the
            club’s conduct. The existence of a shared owner, on its own, does
            not establish either.
          </p>

          <p className="mb-10">
            This is not to say that NYCFC is insulated from every possible
            consequence of the Manchester City proceedings. It means that the
            legal and regulatory questions facing the two clubs are different,
            even if their corporate relationships overlap.
          </p>

          {/* Section 5 */}
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-12 mb-5">
            The Bigger Risk May Be Financial, Not Disciplinary
          </h2>

          <p className="mb-6">
            The more complicated question concerns City Football Group itself.
          </p>

          <p className="mb-6">
            The group has recorded substantial losses across its global
            portfolio in recent years. If Manchester City eventually faces a
            heavy fine, a points deduction or another significant sporting
            sanction, the consequences could extend beyond the club directly
            involved.
          </p>

          <p className="mb-6">
            The effect on NYCFC would depend on several factors: the scale of
            any eventual penalty, CFG’s overall financial position, the
            resources available across the group and its willingness to
            maintain investment in each club.
          </p>

          <p className="mb-6">
            A major financial burden at Manchester City would not necessarily
            result in reduced funding for NYCFC. Equally, shared ownership
            cannot guarantee that investment levels will remain unchanged
            under every circumstance.
          </p>

          <p className="mb-6">
            That is the distinction between an immediate regulatory threat and
            a longer-term financial risk.
          </p>

          <p className="mb-10">
            There is no established basis to say that NYCFC is facing an MLS
            investigation because of Manchester City’s case. There is, however,
            a reasonable question about how a significant sanction against
            CFG’s flagship club could affect the wider group’s priorities.
            Until the proceedings produce a definitive outcome, the scale of
            that risk remains uncertain.
          </p>

          {/* Section 6 */}
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-12 mb-5">
            Separate Clubs, Shared Ownership
          </h2>

          <p className="mb-6">
            For NYCFC, the immediate position is relatively clear. MLS has not
            announced an investigation into the club over Manchester City’s
            financial case, Garber has publicly distinguished the league’s
            responsibilities from those of other competitions, and NYCFC’s
            operations continue without reported disruption.
          </p>

          <p className="mb-6">
            The ownership connection remains important, but it should not be
            confused with evidence of wrongdoing. Manchester City’s regulatory
            case concerns conduct examined under Premier League rules. NYCFC
            has not been accused of the same violations in the information
            presented here.
          </p>

          <p className="mb-6">
            The longer-term implications are harder to assess. A significant
            sanction against Manchester City could create financial or
            strategic questions for City Football Group, with potential
            consequences for its other clubs. Whether that happens will depend
            on the eventual outcome and the group’s response.
          </p>

          <p className="mb-6">
            For now, the distinction is straightforward: Manchester City faces
            a major regulatory case in England, while New York City FC
            continues its business in MLS without a related investigation.
          </p>

          <p className="mb-6">
            The two clubs are connected by ownership. Whether the consequences
            of Manchester City’s case extend further is a question that only
            the eventual outcome — and CFG’s response to it — can answer.
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
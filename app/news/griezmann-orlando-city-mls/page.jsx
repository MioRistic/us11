'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function GriezmannOrlandoCity() {
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

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Antoine Griezmann to Orlando City: MLS Blockbuster Rumors Hit Pause')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Antoine Griezmann to Orlando City: MLS Blockbuster Rumors Hit Pause as Atlético Madrid Chases Copa del Rey Glory
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By US11 Analysis</span>
            <span>•</span>
            <time dateTime="2026-03-07">March 7, 2026</time>
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
            src="https://assets.goal.com/images/v3/getty-2263389556/crop/MM5DEMBRGY5DCMJTGQ5G433XMU5DCMRYHIYTCNQ=/GettyImages-2263389556.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Antoine Griezmann Orlando City rumors"
            width={1018}
            height={420}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Clive Brunskill 
| 
Credit: Getty Images
Copyright: 2026 Getty Images
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none mb-8 leading-relaxed">
          <p>The 2026 MLS primary transfer window — closing March 26 — has delivered its share of high-profile speculation, but few stories have generated as much buzz as the prolonged pursuit of Antoine Griezmann by Orlando City. For weeks, the Florida club appeared on the verge of landing one of Europe's most decorated attackers as a Designated Player. Now, with Atlético Madrid advancing deep into cup competitions, the French World Cup winner has hit the brakes on any immediate MLS switch.</p>

          <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4 tracking-tight">Advanced Talks Turn to Hold: The Copa del Rey Factor</h2>
          <p>Reports from late February confirmed Orlando City was in advanced discussions with Atlético Madrid over Griezmann for their remaining Designated Player slot. The 34-year-old — under contract until 2027 but long linked with a North American move — emerged as Orlando's top target.</p>
          <p>Orlando reportedly tabled a lucrative offer (estimated €10-15 million gross annually), conditional on Griezmann joining before the March 26 deadline. Everything changed after Atlético Madrid's dramatic Copa del Rey semifinal victory over Barcelona, securing their place in the April 18 final at Estadio La Cartuja. Griezmann has paused the MLS move, prioritizing silverware with his long-time club.</p>

          <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4 tracking-tight">What Orlando City Offered — and Why Griezmann Said No (For Now)</h2>
          <p>The package was ambitious: a Designated Player contract with massive financial upside, lifestyle appeal, and a starring role in a rising Eastern Conference side. Yet the timing proved decisive, leaving mid-season would mean missing Atlético's Copa del Rey final and remaining Champions League push.</p>
          <p>Diego Simeone and club leadership reportedly worked to convince Griezmann to stay, emphasizing his legacy and opportunity for one last triumphant run in Spain.</p>

          <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4 tracking-tight">Summer Window Outlook: Free Transfer Possibility?</h2>
          <p>With the primary window closing soon and no deal imminent, attention shifts to the summer secondary window (opening July). Orlando City has signaled willingness to wait until June if necessary, even exploring a free transfer scenario if Griezmann's contract situation evolves.</p>
          <p>The saga underscores MLS clubs' growing pull on aging European stars — and the challenges of prying them away mid-campaign when trophies are still on the line. Orlando City continues monitoring, but the immediate dream of Griezmann in purple this spring appears deferred.</p>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: March 7, 2026</p>
            <p>Author: US11 Analysis</p>
          </div>
          <div className="flex gap-2">
            <Link href="/news" className="text-sm text-gray-500 hover:text-gray-800">Back to news</Link>
          </div>
        </footer>

      </div>
    </article>
  );
}

'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MLSWinterTransfers() {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') setCurrentUrl(window.location.href);
  }, []);

  const handleCopyLink = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      alert('Link copied to clipboard!');
    }
  };

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(
    "MLS Winter 2026 Transfer Roundup"
  )}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            MLS Winter 2026 Transfer Roundup
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-01-24">January 24, 2026</time>
          </div>

          <div className="flex items-center gap-3">
            <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition">
              <FaFacebookF size={18} />
            </a>
            <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition">
              <FaTwitter size={18} />
            </a>
            <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition">
              <FaWhatsapp size={18} />
            </a>
            <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition">
              <FiCopy size={18} />
            </button>
          </div>
        </header>

        {/* Feature Image */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://assets.goal.com/images/v3/blt81f8e9ce07a146c0/crop/MM5DGMBQGA5DCNRYHA5G433XMU5DAORRGU3Q====/IMG_8044.jpeg?auto=webp&format=pjpg&width=1920&quality=60"
            alt="MLS Transfers Winter 2026"
            width={1200}
            height={500}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Toronto FC / Lucas Kschischang
          </figcaption>
        </figure>

        {/* Article Content */}
        <section className="prose prose-lg max-w-none space-y-12 leading-relaxed">

          <p>
            The MLS winter transfer window of 2026 saw a flurry of activity across the league. Clubs have been busy reshaping their squads, with new signings, loans, and departures set to impact the second half of the season. Here's a detailed roundup.
          </p>

          {/* ────────────────────────────────────────────── */}
          {/* Atlanta United */}
          <div className="border-t pt-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">ATL</div>
              <h2 className="text-3xl md:text-4xl font-bold">Atlanta United</h2>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Players In</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>M - Santiago Pita (12/10/25 - homegrown)</li>
              <li>GK - Lucas Hoyos (12/23/25 - free)</li>
              <li>D - Tomás Jacob (12/30/25 - transfer from Club Necaxa)</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-6 mb-2">Players Out</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>GK - Brad Guzan (11/18/25 - retired)</li>
              <li>F - Leo Afonso (11/18/25 - option declined)</li>
              <li>GK - Josh Cohen (11/18/25 - option declined)</li>
              <li>D - Brooks Lennon (11/18/25 - option declined)</li>
              <li>D - Nyk Sessock (11/18/25 - option declined)</li>
              <li>D - Noah Cobb (12/9/25 - trade to Colorado Rapids)</li>
              <li>F - Ashton Gordon (1/7/26 - loan to Chattanooga FC)</li>
              <li>M - Bartosz Slisz (1/8/26 - transfer to Brøndby)</li>
              <li>M - Edwin Mosquera (1/20/26 - transfer to Independiente Santa Fe)</li>
            </ul>
          </div>

          {/* Austin FC */}
          <div className="border-t pt-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">ATX</div>
              <h2 className="text-3xl md:text-4xl font-bold">Austin FC</h2>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Players In</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>M - Ervin Torres (11/24/25 - homegrown)</li>
              <li>D - Jon Bell (12/16/25 - free agent)</li>
              <li>F - Jayden Nelson (12/18/25 - trade from Vancouver Whitecaps FC)</li>
              <li>D/M - Joseph Rosales (12/23/25 - trade from Minnesota United FC)</li>
              <li>F - Facundo Torres (1/23/26 - transfer from Palmeiras)</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-6 mb-2">Players Out</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>D - Julio Cascante (11/25/25 - option declined)</li>
              <li>F - Jimmy Farkarlun (11/25/25 - option declined)</li>
              <li>F - Diego Rubio (11/25/25 - option declined)</li>
              <li>GK - Stefan Cleveland (12/10/25 - trade to Sporting Kansas City)</li>
              <li>F - Osman Bukari (12/19/25 - transfer to Widzew Łódź)</li>
            </ul>
          </div>

          {/* Charlotte FC */}
          <div className="border-t pt-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">CLT</div>
              <h2 className="text-3xl md:text-4xl font-bold">Charlotte FC</h2>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Players In</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>M - Luca de la Torre (12/30/25 - transfer from Celta de Vigo)</li>
              <li>M - Pep Biel (1/8/26 - fully acquired from Olympiacos)</li>
              <li>D - David Schnegg (1/15/26 - waivers)</li>
              <li>GK - Tyler Miller (1/20/26 - transfer from Bolton Wanderers)</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-6 mb-2">Players Out</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>GK - David Bingham (11/21/25 - out of contract)</li>
              <li>D - Jahlane Forbes (11/21/25 - option declined)</li>
              <li>D - Adilson Malanda (11/21/25 - loan expired)</li>
              <li>D - Jahkeele Marshall-Rutty (11/21/25 - loan expired)</li>
              <li>M - Nick Scardina (11/21/25 - option declined)</li>
              <li>D - Bill Tuiloma (11/21/25 - option declined)</li>
              <li>M - Eryk Williamson (11/21/25 - out of contract)</li>
              <li>GK - Drake Callender (12/29/25 - trade to Minnesota United FC)</li>
              <li>M - Nikola Petković (1/8/26 - loan to Seattle Sounders FC)</li>
              <li>M - Brandon Cambridge (1/14/26 - transfer to FC Čukarički)</li>
            </ul>
          </div>

          {/* Chicago Fire FC */}
          <div className="border-t pt-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">CHI</div>
              <h2 className="text-3xl md:text-4xl font-bold">Chicago Fire FC</h2>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Players In</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>M - Anton Salétros (11/7/25 - transfer from AIK Fotboll)</li>
              <li>M - André Franco (11/7/25 - fully acquired from FC Porto)</li>
              <li>D - Mbekezeli Mbokazi (12/2/25 - transfer from Orlando Pirates)</li>
              <li>F - Jason Shokalook (12/10/25 - MLS NEXT Pro)</li>
              <li>M - Robin Lod (12/26/25 - free agent)</li>
              <li>GK - Josh Cohen (12/31/25 - free agent)</li>
              <li>F - Puso Dithejane (1/13/26 - transfer from TS Galaxy FC)</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-6 mb-2">Players Out</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>F - Tom Barlow (11/26/25 - option declined)</li>
              <li>GK - Bryan Dowd (11/26/25 - option declined)</li>
              <li>D - Chase Gasper (11/26/25 - retired)</li>
              <li>M - Rominigue Kouamé (11/26/25 - loan expired)</li>
              <li>M - Brian Gutiérrez (12/12/25 - transfer to Chivas de Guadalajara)</li>
              <li>F - Georgios Koutsias (12/13/25 - transfer to FC Lugano)</li>
              <li>D - Justin Reynolds (12/30/25 - trade to Sporting Kansas City)</li>
              <li>M - Kellyn Acosta (1/14/26 - mutual contract termination)</li>
            </ul>
          </div>

          {/* FC Cincinnati */}
          <div className="border-t pt-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">CIN</div>
              <h2 className="text-3xl md:text-4xl font-bold">FC Cincinnati</h2>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Players In</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>F - Ayoub Jabbari (12/12/25 - fully acquired from Grenoble Foot 38)</li>
              <li>M - Ademar Chávez (1/5/26 - homegrown)</li>
              <li>D - Félix Samson (1/6/26 - loan from CF Montréal)</li>
              <li>D - Kyle Smith (1/7/26 - free agent)</li>
              <li>F - Tom Barlow (1/12/26 - free agent)</li>
              <li>F - Kristian Fletcher (1/13/26 - free)</li>
              <li>F - Bryan Ramírez (1/15/26 - transfer from LDU Quito)</li>
              <li>D - Brian Schaefer (1/22/26 - MLS NEXT Pro)</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-6 mb-2">Players Out</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>F - Brenner (11/26/25 - loan expired)</li>
              <li>D - Lukas Engel (11/26/25 - loan expired)</li>
              <li>F - Kei Kamara (11/26/25 - option declined)</li>
              <li>GK - Alec Kann (11/26/25 - retired)</li>
              <li>M - Yuya Kubo (11/26/25 - option declined)</li>
              <li>M - Dominik Marczuk (11/26/25 - loan expired)</li>
              <li>D - Brad Smith (11/26/25 - option declined)</li>
              <li>D - Álvaro Barreal (12/17/25 - transfer to Santos FC)</li>
              <li>M - Luca Orellano (1/11/26 - transfer to CF Monterrey)</li>
              <li>GK - Nate Crockford (1/12/26 - trade to San Jose Earthquakes)</li>
              <li>GK - Paul Walters (1/15/26 - loan to Bohemian FC)</li>
              <li>D - Brian Schaefer (1/22/26 - loan to Tampa Bay Rowdies)</li>
            </ul>
          </div>

          {/* Dodaj ostale timove na isti način – svi su sada u kodu ispod */}

          {/* Colorado Rapids */}
          <div className="border-t pt-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">COL</div>
              <h2 className="text-3xl md:text-4xl font-bold">Colorado Rapids</h2>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Players In</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>D - Noah Cobb (12/9/25 - fully acquired from Atlanta United)</li>
              <li>F - Dante Sealy (12/23/25 - trade from CF Montréal)</li>
              <li>M - Hamzat Ojediran (1/8/26 - transfer from RC Lens)</li>
              <li>F - Donavan Phillip (1/23/26 - SuperDraft)</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-6 mb-2">Players Out</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>D - Daouda Amadou (11/26/25 - option declined)</li>
              <li>M - Sam Bassett (11/26/25 - option declined)</li>
              <li>D - Michael Edwards (11/26/25 - option declined)</li>
              <li>F - Calvin Harris (11/26/25 - out of contract)</li>
              <li>D - Nate Jones (11/26/25 - option declined)</li>
              <li>M - Oliver Larraz (11/26/25 - out of contract)</li>
              <li>D - Andreas Maxsø (11/26/25 - option declined)</li>
              <li>D - Rafael Santos (11/26/25 - option declined)</li>
            </ul>
          </div>

          {/* Columbus Crew */}
          <div className="border-t pt-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">CLB</div>
              <h2 className="text-3xl md:text-4xl font-bold">Columbus Crew</h2>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Players In</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>M - Sekou Bangoura (1/6/26 - transfer from Hapoel Ironi Kiryat Shmona)</li>
              <li>F - Chase Adams (1/7/26 - homegrown)</li>
              <li>D - Quinton Elliot (1/7/26 - homegrown)</li>
              <li>D - Owen Presthus (1/7/26 - homegrown)</li>
              <li>GK - Luke Pruter (1/9/26 - MLS NEXT Pro)</li>
              <li>M - Zach Zengue (1/9/26 - SuperDraft)</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-6 mb-2">Players Out</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>M - Derrick Jones (11/26/25 - option declined)</li>
              <li>M - Lassi Lappalainen (11/26/25 - option declined)</li>
              <li>M - Darlington Nagbe (11/26/25 - retired)</li>
              <li>GK - Abraham Romero (11/26/25 - out of contract)</li>
            </ul>
          </div>

          {/* FC Dallas */}
          <div className="border-t pt-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">DAL</div>
              <h2 className="text-3xl md:text-4xl font-bold">FC Dallas</h2>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Players In</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>M - Ran Binyamin (12/15/25 - transfer from Hapoel Tel Aviv)</li>
              <li>F - Ricky Louis (12/18/25 - SuperDraft)</li>
              <li>F - Nicholas Simmonds (12/18/25 - SuperDraft)</li>
              <li>D/M - Herman Johansson (12/30/25 - transfer from Mjällby AIF)</li>
              <li>M - Caleb Swann (1/5/26 - homegrown)</li>
              <li>F - Jaidyn Contreras (1/5/26 - homegrown)</li>
              <li>D - Kaka Scabin (1/5/26 - homegrown)</li>
              <li>D - Slade Starnes (1/5/26 - homegrown)</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-6 mb-2">Players Out</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>F - Herbert Endeley (11/20/25 - option declined)</li>
              <li>GK - Jacob Jackson (11/20/25 - out of contract)</li>
              <li>M - Sebastian Lletget (11/20/25 - option declined)</li>
              <li>M - Pedrinho (11/20/25 - option declined)</li>
              <li>F - Diego Pepi (11/20/25 - option declined)</li>
              <li>M - Tomas Pondeca (11/20/25 - option declined)</li>
              <li>M - Anthony Ramirez (11/20/25 - option declined)</li>
              <li>M - Carl Sainté (11/20/25 - option declined)</li>
              <li>F - Tarik Scott (11/20/25 - option declined)</li>
              <li>M - Alejandro Urzua (11/20/25 - option declined)</li>
              <li>M - Enes Sali (1/22/26 - loan to Al-Riyadh SC)</li>
            </ul>
          </div>

          {/* D.C. United */}
          <div className="border-t pt-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">DC</div>
              <h2 className="text-3xl md:text-4xl font-bold">D.C. United</h2>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Players In</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>F - Tai Baribo (12/17/25 - trade from Philadelphia Union)</li>
              <li>D - Nikola Markovic (12/18/25 - SuperDraft)</li>
              <li>F - Richie Aman (12/18/25 - SuperDraft)</li>
              <li>D - Sean Nealis (12/22/25 - trade from Red Bull New York)</li>
              <li>GK - Sean Johnson (12/23/25 - free agent)</li>
              <li>D - Keisuke Kurokawa (12/30/25 - transfer from Gamba Osaka)</li>
              <li>F - Gabriel Segal (1/4/26 - Re-Entry Draft)</li>
              <li>F - Louis Munteanu (1/5/26 - transfer from CFR Cluj)</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-6 mb-2">Players Out</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>GK - Luis Barraza (11/26/25 - out of contract)</li>
              <li>F - Christian Benteke (11/26/25 - option declined)</li>
              <li>D - Derek Dodson (11/26/25 - option declined)</li>
              <li>F - Kristian Fletcher (11/26/25 - option declined)</li>
              <li>M - Randall Leal (11/26/25 - option declined)</li>
              <li>D - Lukas MacNaughton (11/26/25 - out of contract)</li>
              <li>M - Rida Zouhir (11/26/25 - option declined)</li>
              <li>M - Boris Enow (1/9/26 - transfer to Beitar Jerusalem)</li>
              <li>F - Dominique Badji (1/12/26 - waived)</li>
              <li>D - David Schnegg (1/12/26 - waived)</li>
              <li>GK - Kim Joon Hong (1/20/26 - loan to Suwon Samsung Bluewings)</li>
            </ul>
          </div>

          {/* Houston Dynamo FC */}
          <div className="border-t pt-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">HOU</div>
              <h2 className="text-3xl md:text-4xl font-bold">Houston Dynamo FC</h2>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Players In</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>GK - Logan Erb (12/18/25 - homegrown)</li>
              <li>D - Reese Miller (12/18/25 - homegrown)</li>
              <li>D - Lucas Halter (1/12/26 - transfer from Botafogo)</li>
              <li>M - Agustín Bouzat (1/12/26 - transfer from Velez Sarsfield)</li>
              <li>F - Guilherme (1/13/26 - transfer from Santos FC)</li>
              <li>M - Héctor Herrera (1/14/26 - free)</li>
              <li>F - Nick Markanich (1/20/26 - loan from CD Castellón)</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-6 mb-2">Players Out</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>F - Stephen Annor (10/22/25 - option declined)</li>
              <li>D - Obafemi Awodesu (10/22/25 - option declined)</li>
              <li>D - Ethan Bartlow (10/22/25 - option declined)</li>
              <li>F - Amine Bassi (10/22/25 - option declined)</li>
              <li>M - Erik Dueñas (10/22/25 - option declined)</li>
              <li>D - Franco Escobar (10/22/25 - out of contract)</li>
              <li>D - Michael Halliday (10/22/25 - option declined)</li>
              <li>M - Sebastian Kowalczyk (10/22/25 - option declined)</li>
              <li>D - Damion Lowe (10/22/25 - option declined)</li>
              <li>D - Pablo Ortiz (10/22/25 - loan expired)</li>
              <li>F - Sergio Santos (10/22/25 - option declined)</li>
              <li>F - Gabe Segal (10/22/25 - out of contract)</li>
              <li>D - Daniel Steres (10/22/25 - option declined)</li>
              <li>GK - Andrew Tarbell (10/22/25 - out of contract)</li>
              <li>M - Júnior Urso (10/22/25 - option declined)</li>
              <li>D - Kieran Sargeant (12/18/25 - trade to San Diego FC)</li>
              <li>M - Brooklyn Raines (12/23/25 - trade to New England Revolution)</li>
              <li>F - Exon Arzú (1/20/26 - loan to Real CD España)</li>
              <li>F - Toyosi Olusanya (1/23/26 - loan to Aberdeen FC)</li>
            </ul>
          </div>

          {/* LAFC */}
          <div className="border-t pt-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">LAFC</div>
              <h2 className="text-3xl md:text-4xl font-bold">Los Angeles Football Club</h2>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Players In</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>M - Mathieu Choinière (12/9/25 - fully acquired from Grasshopper)</li>
              <li>F - Jacob Shaffelburg (12/29/25 - trade from Nashville SC)</li>
              <li>M - Matt Evans (1/8/26 - homegrown)</li>
              <li>GK - Cabral Carter (1/8/26 - homegrown)</li>
              <li>F - Tyler Boyd (1/14/26 - waivers)</li>
              <li>M - Amin Boudri (1/24/26 - transfer from GAIS)</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-6 mb-2">Players Out</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>D - Luca Bombino (11/18/25 - trade to San Diego FC)</li>
              <li>M - Frankie Amaya (11/26/25 - loan expired)</li>
              <li>F - Alexandru Bǎluțǎ (11/26/25 - option declined)</li>
              <li>M - Odin Thiago Holm (11/26/25 - loan expired)</li>
              <li>M - Jailson (11/26/25 - option declined)</li>
              <li>M - Andrew Moran (11/26/25 - loan expired)</li>
              <li>GK - David Ochoa (11/26/25 - option declined)</li>
              <li>M - Adam Saldaña (11/26/25 - option declined)</li>
              <li>M - Yaw Yeboah (1/16/26 - mutual contract termination)</li>
            </ul>
          </div>

          {/* LA Galaxy */}
          <div className="border-t pt-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">LAG</div>
              <h2 className="text-3xl md:text-4xl font-bold">LA Galaxy</h2>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Players In</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>D - Jakob Glesnes (12/15/25 - trade from Philadelphia Union)</li>
              <li>M - Justin Haak (12/29/25 - free agent)</li>
              <li>F - Matheus Nascimento (1/23/26 - loan from Botafogo)</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-6 mb-2">Players Out</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>F - Miguel Berry (10/30/25 - option declined)</li>
              <li>M - Diego Fagúndez (10/30/25 - option declined)</li>
              <li>D - Eriq Zavaleta (10/30/25 - option declined)</li>
            </ul>
          </div>

          {/* Inter Miami CF */}
          <div className="border-t pt-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">MIA</div>
              <h2 className="text-3xl md:text-4xl font-bold">Inter Miami CF</h2>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Players In</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>M - Rodrigo De Paul (12/11/25 - fully acquired from Atlético Madrid)</li>
              <li>D - Sergio Reguilón (12/15/25 - free)</li>
              <li>D - Facundo Mura (1/3/26 - free)</li>
              <li>GK - Dayne St. Clair (1/4/26 - free agent)</li>
              <li>D - Micael (1/7/26 - loan from Palmeiras)</li>
              <li>M - David Ayala (1/9/26 - trade from Portland Timbers)</li>
              <li>F - Tadeo Allende (1/19/26 - fully acquired from Celta de Vigo)</li>
              <li>F - Daniel Pinter (1/21/26 - homegrown)</li>
              <li>GK - Rocco Ríos Novo (1/22/26 - fully acquired from Lanús)</li>
              <li>GK - Luis Barraza (1/23/26 - free agent)</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-6 mb-2">Players Out</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>D - Jordi Alba (12/7/25 - retired)</li>
              <li>M - Sergio Busquets (12/7/25 - retired)</li>
              <li>F - Allen Obando (12/11/25 - loan expired)</li>
              <li>M - Fafà Picault (12/11/25 - option declined)</li>
              <li>M - Baltasar Rodríguez (12/11/25 - loan expired)</li>
              <li>D - Ryan Sailor (12/11/25 - out of contract)</li>
              <li>D - Marcelo Weigandt (12/11/25 - loan expired)</li>
              <li>GK - William Yarbrough (12/11/25 - option declined)</li>
              <li>D - Tomás Avilés (1/23/26 - loan to CF Montréal)</li>
            </ul>
          </div>

          {/* Minnesota United FC */}
          <div className="border-t pt-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">MIN</div>
              <h2 className="text-3xl md:text-4xl font-bold">Minnesota United FC</h2>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Players In</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>M - Peter Stroud (12/16/25 - trade from Red Bull New York)</li>
              <li>D - Britton Fischer (12/17/25 - MLS NEXT Pro)</li>
              <li>F - Tomás Chancalay (12/26/25 - trade from New England Revolution)</li>
              <li>GK - Drake Callender (12/29/25 - trade from Charlotte FC)</li>
              <li>GK - Kayne Rizvanovich (1/16/26 - homegrown)</li>
              <li>F - Mauricio González (1/20/26 - transfer from Deportes Tolima)</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-6 mb-2">Players Out</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>M - Hassani Dotson (11/26/25 - out of contract)</li>
              <li>D - Kipp Keller (11/26/25 - option declined)</li>
              <li>M - Robin Lod (11/26/25 - option declined)</li>
              <li>F - Loïc Mesanvi (11/26/25 - option declined)</li>
              <li>M - Samuel Shashoua (11/26/25 - option declined)</li>
              <li>GK - Dayne St. Clair (11/26/25 - out of contract)</li>
              <li>D/M - Joseph Rosales (12/23/25 - trade to Austin FC)</li>
              <li>GK - Wessel Speel (1/16/26 - loan to Shelbourne FC)</li>
              <li>M - Hoyeon Jung (1/24/26 - loan to Suwon Samsung Bluewings FC)</li>
            </ul>
          </div>

          {/* CF Montréal */}
          <div className="border-t pt-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">MTL</div>
              <h2 className="text-3xl md:text-4xl font-bold">CF Montréal</h2>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Players In</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>D - Félix Samson (11/24/25 - homegrown)</li>
              <li>D - Dagur Dan Thórhallsson (12/10/25 - trade from Orlando City)</li>
              <li>D - Brayan Vera (12/10/25 - trade from Real Salt Lake)</li>
              <li>D - Josh-Duc Nteziryayo (12/15/25 - homegrown)</li>
              <li>M - Ivan Losenko (12/30/25 - loan from Shakhtar Donetsk)</li>
              <li>F - Daniel Ríos (1/9/26 - free)</li>
              <li>D - Tomás Avilés (1/23/26 - loan from Inter Miami CF)</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-6 mb-2">Players Out</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>D - Fernando Álvarez (10/20/25 - option declined)</li>
              <li>M - Bryce Duke (10/20/25 - option declined)</li>
              <li>D - Tom Pearce (10/20/25 - contract terminated)</li>
              <li>M - Alessandro Biello (10/20/25 - out of contract)</li>
              <li>F - Giacomo Vrioni (10/20/25 - option declined)</li>
              <li>F - Matías Cóccaro (12/22/25 - mutual contract termination)</li>
              <li>F - Dante Sealy (12/23/25 - trade to Colorado Rapids)</li>
              <li>GK - Emil Gazdov (1/4/26 - loan to St. Pauli)</li>
              <li>D - Félix Samson (1/6/26 - loan to FC Cincinnati)</li>
            </ul>
          </div>

          {/* Nashville SC */}
          <div className="border-t pt-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">NSH</div>
              <h2 className="text-3xl md:text-4xl font-bold">Nashville SC</h2>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Players In</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>D - Maxwell Woledzi (12/2/25 - transfer from Fredrikstad FK)</li>
              <li>D - Thomas Williams (12/8/25 - trade from Orlando City)</li>
              <li>F - Warren Madrigal (12/31/25 - transfer from Deportivo Saprissa)</li>
              <li>M - Shak Mohammed (1/7/26 - free)</li>
              <li>D - Isaiah LeFlore (1/7/26 - free)</li>
              <li>M - Cristian Espinoza (1/9/26 - free agent)</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-6 mb-2">Players Out</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>M - Gastón Brugman (11/17/25 - option declined)</li>
              <li>F - Teal Bunbury (11/17/25 - out of contract)</li>
              <li>F - Maximus Ekk (11/17/25 - option declined)</li>
              <li>D - Julian Gaines (11/17/25 - option declined)</li>
              <li>D - Wyatt Meyer (11/17/25 - option declined)</li>
              <li>D - Tate Schmitt (11/17/25 - option declined)</li>
              <li>D - Walker Zimmerman (11/17/25 - out of contract)</li>
              <li>F - Jacob Shaffelburg (12/29/25 - trade to LAFC)</li>
              <li>F - Tyler Boyd (1/8/26 - waived)</li>
              <li>M - Isaiah Jones (1/9/26 - loan to Chattanooga FC)</li>
            </ul>
          </div>

          {/* New England Revolution */}
          <div className="border-t pt-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">NE</div>
              <h2 className="text-3xl md:text-4xl font-bold">New England Revolution</h2>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Players In</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>M - Brooklyn Raines (12/23/25 - trade from Houston Dynamo FC)</li>
              <li>D - Ethan Kohler (12/31/25 - transfer from Werder Bremen)</li>
              <li>M - Cristiano Oliveira (1/14/26 - homegrown)</li>
              <li>F - Griffin Yow (1/20/26 - transfer from KVC Westerlo)</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-6 mb-2">Players Out</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>D - Brandon Bye (11/25/25 - out of contract)</li>
              <li>F - Ignatius Ganago (11/25/25 - loan expired)</li>
              <li>D - Wyatt Omsberg (11/25/25 - retired)</li>
              <li>F - Tomás Chancalay (12/26/25 - trade to Minnesota United FC)</li>
              <li>D - Santiago Suarez (1/23/26 - loan to San Antonio FC)</li>
            </ul>
          </div>

          {/* New York City FC */}
          <div className="border-t pt-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">NYC</div>
              <h2 className="text-3xl md:text-4xl font-bold">New York City FC</h2>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Players In</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>M - Cooper Flax (12/22/25 - homegrown)</li>
              <li>D - Kamran Acito (12/22/25 - homegrown)</li>
              <li>GK - Mac Learned (1/9/26 - MLS NEXT Pro)</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-6 mb-2">Players Out</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>D - Prince Amponsah (12/1/25 - option declined)</li>
              <li>M - Justin Haak (12/1/25 - out of contract)</li>
              <li>GK - Alex Rando (12/1/25 - option declined)</li>
              <li>D - Mitja Ilenič (1/17/26 - loan to Raków Częstochowa)</li>
            </ul>
          </div>

          {/* New York Red Bulls */}
          <div className="border-t pt-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">NYRB</div>
              <h2 className="text-3xl md:text-4xl font-bold">New York Red Bulls</h2>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Players In</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>D - Justin Che (12/16/25 - transfer from Brøndby IF)</li>
              <li>F - Cade Cowell (12/17/25 - loan from Chivas de Guadalajara)</li>
              <li>M - Nehuen Benedetti (12/23/25 - transfer from Estudiantes de la Plata)</li>
              <li>D - Robert Voloder (1/12/26 - free agent)</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-6 mb-2">Players Out</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>GK - Carlos Coronel (11/26/25 - out of contract)</li>
              <li>D - Kyle Duncan (11/26/25 - option declined)</li>
              <li>D - Curtis Ofori (11/26/25 - option declined)</li>
              <li>M - Peter Stroud (12/16/25 - trade to Minnesota United FC)</li>
              <li>M - Lewis Morgan (12/16/25 - trade to San Diego FC)</li>
              <li>D - Sean Nealis (12/22/25 - trade to D.C. United)</li>
              <li>D - Alexander Hack (1/5/26 - mutual contract termination)</li>
              <li>M - Daniel Edelman (1/13/26 - trade to St. Louis CITY SC)</li>
            </ul>
          </div>

          {/* Orlando City SC */}
          <div className="border-t pt-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">ORL</div>
              <h2 className="text-3xl md:text-4xl font-bold">Orlando City SC</h2>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Players In</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>F - Tiago (12/19/25 - transfer from Bahia)</li>
              <li>M - Luis Otávio (12/26/25 - transfer from Internacional)</li>
              <li>M - Braian Ojeda (1/2/26 - trade from Real Salt Lake)</li>
              <li>GK - Maxime Crépeau (1/6/26 - free agent)</li>
              <li>F - Harvey Sarajian (1/16/26 - SuperDraft)</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-6 mb-2">Players Out</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>M - César Araújo (11/17/25 - out of contract)</li>
              <li>GK - Pedro Gallese (11/17/25 - out of contract)</li>
              <li>F - Favian Loyola (11/17/25 - option declined)</li>
              <li>GK - Carlos Mercado (11/17/25 - option declined)</li>
              <li>M - Shak Mohammed (11/17/25 - option declined)</li>
              <li>D - Kyle Smith (11/17/25 - out of contract)</li>
              <li>D - Thomas Williams (12/8/25 - trade to Nashville SC)</li>
              <li>D - Dagur Dan Thórhallsson (12/10/25 - trade to CF Montréal)</li>
              <li>D - Rodrigo Schlegel (12/16/25 - transfer to Atlas FC)</li>
              <li>F - Nicolás Rodríguez (1/8/26 - loan to Atlético Nacional)</li>
              <li>F - Luis Muriel (1/15/26 - transfer to Atlético Junior)</li>
            </ul>
          </div>

          {/* Philadelphia Union */}
          <div className="border-t pt-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">PHI</div>
              <h2 className="text-3xl md:text-4xl font-bold">Philadelphia Union</h2>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Players In</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>F - Ezekiel Alladoh (12/3/25 - transfer from IF Brommapojkarna)</li>
              <li>D - Finn Sundstrom (12/30/25 - transfer from North Carolina FC)</li>
              <li>D - Japhet Sery Larsen (1/13/26 - transfer from SK Brann)</li>
              <li>F - Stas Korzeniowski (1/21/26 - MLS NEXT Pro)</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-6 mb-2">Players Out</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>F - Chris Donovan (11/26/25 - option declined)</li>
              <li>M - Isaiah LeFlore (11/26/25 - option declined)</li>
              <li>D - Nicholas Pariano (11/26/25 - option declined)</li>
              <li>GK - Oliver Semmle (11/26/25 - option declined)</li>
              <li>F - Mikael Uhre (11/26/25 - out of contract)</li>
              <li>M - David Vazquez (12/9/25 - trade to San Diego FC)</li>
              <li>D - Jakob Glesnes (12/15/25 - trade to LA Galaxy)</li>
              <li>F - Tai Baribo (12/17/25 - trade to D.C. United)</li>
              <li>D - Kai Wagner (1/2/26 - transfer to Birmingham City)</li>
              <li>D - Neil Pierre (1/22/26 - loan to Lyngby Boldklub)</li>
            </ul>
          </div>

          {/* Portland Timbers */}
          <div className="border-t pt-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">POR</div>
              <h2 className="text-3xl md:text-4xl font-bold">Portland Timbers</h2>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Players In</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>D - Brandon Bye (12/22/25 - free agent)</li>
              <li>D - Alex Bonetig (1/7/26 - transfer from Western Sydney Wanderers)</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-6 mb-2">Players Out</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>M - Felipe Carballo (11/14/25 - option declined)</li>
              <li>GK - Maxime Crépeau (11/14/25 - out of contract)</li>
              <li>M - Cristhian Paredes (11/14/25 - option declined)</li>
              <li>M - Matías Rojas (11/14/25 - option declined)</li>
              <li>D - Dario Župarić (11/14/25 - out of contract)</li>
              <li>M - David Ayala (1/9/26 - trade to Inter Miami CF)</li>
            </ul>
          </div>

          {/* Real Salt Lake */}
          <div className="border-t pt-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">RSL</div>
              <h2 className="text-3xl md:text-4xl font-bold">Real Salt Lake</h2>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Players In</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>D - Kobi Henry (12/18/25 - transfer from Stade de Reims)</li>
              <li>F - Chance Cowell (1/6/26 - trade from San Jose Earthquakes)</li>
              <li>M - Zach Booth (1/7/26 - loan from Excelsior Rotterdam)</li>
              <li>M - Griffin Dillon (1/9/26 - homegrown)</li>
              <li>F - Diego Rocio (1/9/26 - homegrown)</li>
              <li>M - Antonio Riquelme (1/9/26 - homegrown)</li>
              <li>F - Sergi Solans (1/15/26 - SuperDraft)</li>
              <li>D - Lukas Engel (1/16/26 - transfer from Middlesbrough)</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-6 mb-2">Players Out</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>F - William Agada (11/6/25 - out of contract)</li>
              <li>F - Forster Ajago (11/6/25 - option declined)</li>
              <li>M - Matthew Bell (11/6/25 - option declined)</li>
              <li>D - Javain Brown (11/6/25 - out of contract)</li>
              <li>D - Zack Farnsworth (11/6/25 - out of contract)</li>
              <li>D - Kevon Lambert (11/6/25 - option declined)</li>
              <li>GK - Zac MacMath (11/6/25 - out of contract)</li>
              <li>F - Johnny Russell (11/6/25 - option declined)</li>
              <li>D - Tommy Silva (11/6/25 - option declined)</li>
              <li>M - Jude Wellings (11/6/25 - option declined)</li>
              <li>D - Brayan Vera (12/10/25 - trade to CF Montréal)</li>
              <li>M - Braian Ojeda (1/2/26 - trade to Orlando City)</li>
            </ul>
          </div>

          {/* San Diego FC */}
          <div className="border-t pt-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">SD</div>
              <h2 className="text-3xl md:text-4xl font-bold">San Diego FC</h2>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Players In</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>D - Luca Bombino (11/18/25 - fully acquired from LAFC)</li>
              <li>D - Oscar Verhoeven (11/19/25 - fully acquired from San Jose Earthquakes)</li>
              <li>M - Onni Valakari (12/9/25 - fully acquired from Pafos FC)</li>
              <li>M - David Vazquez (12/9/25 - fully acquired from Philadelphia Union)</li>
              <li>M - Lewis Morgan (12/16/25 - trade from Red Bull New York)</li>
              <li>D - Kieran Sargeant (12/18/25 - trade from Houston Dynamo FC)</li>
              <li>D - Wilson Eisner (12/19/25 - waivers)</li>
              <li>D - Osvald Søe (1/9/26 - transfer from Boldklubben af 1893)</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-6 mb-2">Players Out</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>M - Luca de la Torre (12/9/25 - loan expired)</li>
              <li>D - Franco Negri (12/9/25 - option declined)</li>
              <li>M - Heine Gikling Bruseth (1/7/26 - transfer to Kristiansund BK)</li>
            </ul>
          </div>

          {/* San Jose Earthquakes */}
          <div className="border-t pt-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">SJ</div>
              <h2 className="text-3xl md:text-4xl font-bold">San Jose Earthquakes</h2>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Players In</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>GK - Nate Crockford (1/12/26 - trade from FC Cincinnati)</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-6 mb-2">Players Out</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>D - Oscar Verhoeven (11/19/25 - trade to San Diego FC)</li>
              <li>D - Wilson Eisner (11/26/25 - option declined)</li>
              <li>F - Cristian Espinoza (11/26/25 - out of contract)</li>
              <li>M - Mark-Anthony Kaye (11/26/25 - option declined)</li>
              <li>F - Josef Martínez (11/26/25 - option declined)</li>
              <li>D - Rodrigues (11/26/25 - option declined)</li>
              <li>D - Bruno Wilson (11/26/25 - option declined)</li>
              <li>F - Chance Cowell (1/6/26 - trade to Real Salt Lake)</li>
              <li>D - Nick Lima (1/16/26 - retired)</li>
              <li>M - Cruz Medina (1/21/26 - loan to Chivas de Guadalajara)</li>
            </ul>
          </div>

          {/* Seattle Sounders FC */}
          <div className="border-t pt-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">SEA</div>
              <h2 className="text-3xl md:text-4xl font-bold">Seattle Sounders FC</h2>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Players In</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>M - Hassani Dotson (12/16/25 - free agent)</li>
              <li>D - Ryan Sailor (12/17/25 - free agent)</li>
              <li>GK - Max Anchor (12/17/25 - waivers)</li>
              <li>M - Nikola Petković (1/8/26 - loan from Charlotte FC)</li>
              <li>F - Yu Tsukanome (1/13/26 - MLS NEXT Pro)</li>
              <li>M - Sebastian Gomez (1/13/26 - MLS NEXT Pro)</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-6 mb-2">Players Out</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>D - Jon Bell (11/25/25 - out of contract)</li>
              <li>D - Leo Burney (11/25/25 - option declined)</li>
              <li>GK - Jacob Castro (11/25/25 - option declined)</li>
              <li>M - Ryan Kent (11/25/25 - option declined)</li>
              <li>M - João Paulo (11/25/25 - out of contract)</li>
              <li>D - Travian Sousa (11/25/25 - option declined)</li>
              <li>M - Danny Leyva (12/8/25 - transfer to Club Necaxa)</li>
            </ul>
          </div>

          {/* Sporting Kansas City */}
          <div className="border-t pt-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">SKC</div>
              <h2 className="text-3xl md:text-4xl font-bold">Sporting Kansas City</h2>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Players In</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>M - Cielo Tschantret (11/14/25 - homegrown)</li>
              <li>GK - Stefan Cleveland (12/10/25 - trade from Austin FC)</li>
              <li>M - Kwaku Agyabeng (12/18/25 - SuperDraft)</li>
              <li>D - Justin Reynolds (12/30/25 - trade from Chicago Fire FC)</li>
              <li>F - Calvin Harris (1/15/26 - free agent)</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-6 mb-2">Players Out</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>D - Andrew Brody (10/23/25 - out of contract)</li>
              <li>D - Joaquín Fernández (10/23/25 - out of contract)</li>
              <li>D - Tim Leibold (10/23/25 - option declined)</li>
              <li>D - Alán Montes (10/23/25 - loan expired)</li>
              <li>F - Santiago Muñoz (10/23/25 - loan expired)</li>
              <li>D - Logan Ndenbe (10/23/25 - out of contract)</li>
              <li>M - Nemanja Radoja (10/23/25 - option declined)</li>
              <li>M - Memo Rodríguez (10/23/25 - out of contract)</li>
              <li>F - Khiry Shelton (10/23/25 - option declined)</li>
              <li>M - Erik Thommy (10/23/25 - out of contract)</li>
              <li>F - Mason Toye (10/23/25 - option declined)</li>
              <li>D - Robert Voloder (10/23/25 - out of contract)</li>
            </ul>
          </div>

          {/* St. Louis City SC */}
          <div className="border-t pt-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">STL</div>
              <h2 className="text-3xl md:text-4xl font-bold">St. Louis City SC</h2>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Players In</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>M - Daniel Edelman (1/13/26 - trade from Red Bull New York)</li>
              <li>M - Conrad Wallem (1/20/26 - fully acquired from SK Slavia Prague)</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-6 mb-2">Players Out</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>M - Rasmus Alm (10/21/25 - option declined)</li>
              <li>D - Henry Kessler (10/21/25 - option declined)</li>
              <li>M - Alfredo Morales (10/21/25 - option declined)</li>
              <li>D - Devin Padelford (10/21/25 - loan expired)</li>
              <li>D - Selmir Pidro (10/21/25 - out of contract)</li>
              <li>M - Akil Watts (10/21/25 - option declined)</li>
              <li>D - Michael Wentzel (10/21/25 - option declined)</li>
              <li>M - Seth Antwi (11/25/25 - option declined)</li>
              <li>D - Jayden Reid (11/25/25 - option declined)</li>
              <li>D - Joey Zalinsky (11/25/25 - option declined)</li>
              <li>GK - Christian Olivares (1/10/26 - loan to Sporting Club Jacksonville)</li>
            </ul>
          </div>

          {/* Toronto FC */}
          <div className="border-t pt-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">TOR</div>
              <h2 className="text-3xl md:text-4xl font-bold">Toronto FC</h2>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Players In</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>D - Matheus Pereira (12/29/25 - transfer from C.D. Santa Clara)</li>
              <li>D - Walker Zimmerman (1/2/26 - free agent)</li>
              <li>GK - William Yarbrough (1/16/26 - free agent)</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-6 mb-2">Players Out</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>M - Maxime Dominguez (10/24/25 - loan expired)</li>
              <li>M - Nathaniel Edwards (10/24/25 - option declined)</li>
              <li>GK - Sean Johnson (10/24/25 - option declined)</li>
              <li>D - Kevin Long (10/24/25 - option declined)</li>
              <li>F - Hugo Mbongue (10/24/25 - option declined)</li>
              <li>D - Raoul Petretta (10/24/25 - option declined)</li>
              <li>D - Sigurd Rosted (10/24/25 - option declined)</li>
              <li>F - Charlie Sharp (10/24/25 - option declined)</li>
            </ul>
          </div>

          {/* Vancouver Whitecaps FC */}
          <div className="border-t pt-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">VAN</div>
              <h2 className="text-3xl md:text-4xl font-bold">Vancouver Whitecaps FC</h2>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Players In</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>D - Nikola Djordjevic (12/15/25 - MLS NEXT Pro)</li>
              <li>D - Mihail Gherasimencov (12/17/25 - homegrown)</li>
              <li>M - Oliver Larraz (1/15/26 - free agent)</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-6 mb-2">Players Out</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>GK - Max Anchor (12/8/25 - option declined)</li>
              <li>F - Nicolas Fleuriau Chateau (12/8/25 - option declined)</li>
              <li>D - Belal Halbouni (12/8/25 - option declined)</li>
              <li>D - Mark O’Neill (12/8/25 - option declined)</li>
              <li>F - Daniel Ríos (12/8/25 - loan expired)</li>
              <li>F - Jayden Nelson (12/18/25 - trade to Austin FC)</li>
              <li>M - Ali Ahmed (1/4/26 - transfer to Norwich City)</li>
            </ul>
          </div>

          <p className="italic text-center mt-16 text-lg">
            Transfer window remains open until late March 2026 – expect more moves in the coming weeks!
          </p>

        </section>

        {/* Footer */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 text-sm text-gray-600">
          <div>
            <p>Published: January 24, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>
          <div className="flex gap-6">
            <Link href="/news" className="hover:text-gray-800 transition">
              Back to news
            </Link>
          </div>
        </footer>

      </div>
    </article>
  );
}
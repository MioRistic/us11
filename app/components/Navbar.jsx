'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaXmark } from 'react-icons/fa6';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  // Desktop menu links
  const desktopLinks = [
    { path: '/news', label: 'NEWS' },
    { path: '/blog', label: 'BLOG' },
    { path: '/teams', label: 'TEAMS' },
    { path: '/academy-insider', label: 'ACADEMY INSIDER' },
    { path: '/gaming', label: 'GAMING' },
    { path: '/contact', label: 'CONTACT' },
  ];

  // Mobile menu links
  const mobileLinks = [
    { path: '/', label: 'HOME' },
    ...desktopLinks,
  ];

  return (
    <div className="fixed w-full h-[150px] flex justify-between items-center px-20 bg-black z-50 font-bold">
      {/* Logo */}
      <div>
        <Link href="/" passHref>
          <Image
            src="/logo11.png"
            alt="Logo Image"
            width={189}
            height={80}
            style={{ cursor: 'pointer' }}
          />
        </Link>
      </div>

      {/* Desktop Menu - Goal.com stil */}
      <div className="hidden md:flex items-center">
        <ul className="flex gap-8">
          {desktopLinks.map(({ path, label }, index) => (
            <li key={index} className="relative text-white text-lg group">
              <Link href={path} className="py-2 hover:text-gray-300 transition-colors">
                {label}
              </Link>
              <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-white group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div 
        onClick={handleClick} 
        className="md:hidden text-white z-50 cursor-pointer"
      >
        {!nav ? <FaBars size={32} /> : <FaXmark size={32} />}
      </div>

      {/* Mobile Menu - Goal.com stil */}
      <ul
        className={`${
          nav ? 'flex' : 'hidden'
        } absolute top-0 left-0 w-full h-screen bg-[#020617] flex-col justify-center items-center text-white z-40`}
      >
        {mobileLinks.map(({ path, label }, index) => (
          <li key={index} className="py-6 text-4xl font-bold">
            <Link href={path} onClick={handleClick}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
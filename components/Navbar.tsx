'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg'
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-center h-20">

          {/* LOGO SECTION (IMPORTANT FIXED) */}
          <div className="flex items-center">
            <Link href="#home" className="flex items-center">
              <Image
                src="/images/toes-n-tails-logo.png"
                alt="TOES N TAILS"
                width={140}
                height={140}
                priority
                className="h-14 w-auto object-contain drop-shadow-md"
              />
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10">
            {[
              { name: 'Home', href: '#home' },
              { name: 'About', href: '#about' },
              { name: 'Services', href: '#services' },
              { name: 'Contact', href: '#contact' },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 font-medium relative group"
              >
                <span className="group-hover:text-pink-600 transition">
                  {item.name}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-pink-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}

            <button className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition-all shadow-md hover:scale-105">
              Book Now
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1"
          >
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-4">
            <Link onClick={() => setOpen(false)} href="#home">Home</Link>
            <Link onClick={() => setOpen(false)} href="#about">About</Link>
            <Link onClick={() => setOpen(false)} href="#services">Services</Link>
            <Link onClick={() => setOpen(false)} href="#contact">Contact</Link>

            <button className="bg-pink-600 text-white px-5 py-2 rounded-full w-fit">
              Book Now
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
}

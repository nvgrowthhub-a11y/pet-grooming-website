'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

          {/* LOGO IMAGE VERSION */}
<Link href="#home" className="flex items-center gap-2">
  <Image
    src="/logo.png"
    alt="Logo"
    width={40}
    height={40}
    className="object-contain"
  />
  <span className="text-xl font-bold">
    Brand <span className="text-blue-600">Name</span>
  </span>
</Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setActiveLink(link.id)}
                className={`relative text-sm font-medium transition ${
                  activeLink === link.id
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {link.name}

                {/* underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all ${
                    activeLink === link.id ? 'w-full' : 'w-0'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
            >
              Get Quote
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setIsMobileOpen(true)}
          >
            <span className="w-6 h-[2px] bg-black"></span>
            <span className="w-6 h-[2px] bg-black"></span>
            <span className="w-6 h-[2px] bg-black"></span>
          </button>
        </div>
      </header>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity md:hidden ${
          isMobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMobileOpen(false)}
      />

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-2xl transform transition-transform md:hidden ${
          isMobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 flex flex-col gap-6">

          {/* CLOSE */}
          <button
            className="self-end text-2xl"
            onClick={() => setIsMobileOpen(false)}
          >
            ✕
          </button>

          {/* LINKS */}
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={() => {
                setActiveLink(link.id);
                setIsMobileOpen(false);
              }}
              className={`text-lg font-medium transition ${
                activeLink === link.id
                  ? 'text-blue-600'
                  : 'text-gray-700'
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* CTA */}
          <Link
            href="#contact"
            onClick={() => setIsMobileOpen(false)}
            className="mt-4 px-5 py-3 text-center rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </>
  );
}

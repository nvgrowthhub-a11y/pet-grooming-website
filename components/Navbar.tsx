'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Image
              src="/images/toes-n-tails-logo.png"
              alt="TOES N TAILS Logo"
              width={45}
              height={45}
              className="h-10 w-10"
            />
            
          </div>
          <div className="flex gap-8 items-center">
            <Link href="#home" className="text-gray-700 hover:text-pink-600 transition">Home</Link>
            <Link href="#about" className="text-gray-700 hover:text-pink-600 transition">About</Link>
            <Link href="#services" className="text-gray-700 hover:text-pink-600 transition">Services</Link>
            <Link href="#contact" className="text-gray-700 hover:text-pink-600 transition">Contact</Link>
            <button className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

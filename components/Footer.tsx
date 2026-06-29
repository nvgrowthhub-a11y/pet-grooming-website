'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">TOES N TAILS</h3>
            <p className="text-gray-400 mb-4">
              Where luxury meets exceptional pet care. Providing premium grooming services for your beloved companions since 2009.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition">📷</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition">👍</a>
              <a href="https://wa.me/918800971337" target="_blank" rel="noopener noreferrer" className="bg-green-600 p-2 rounded-full hover:bg-green-700 transition">💬</a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#" className="hover:text-pink-600 transition">Full Grooming</Link></li>
              <li><Link href="#" className="hover:text-pink-600 transition">Pet Spa</Link></li>
              <li><Link href="#" className="hover:text-pink-600 transition">Bath & Cleaning</Link></li>
              <li><Link href="#" className="hover:text-pink-600 transition">Nail Trimming</Link></li>
              <li><Link href="#" className="hover:text-pink-600 transition">Luxury Packages</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#about" className="hover:text-pink-600 transition">About Us</Link></li>
              <li><Link href="#" className="hover:text-pink-600 transition">Why Choose Us</Link></li>
              <li><Link href="#" className="hover:text-pink-600 transition">Testimonials</Link></li>
              <li><Link href="#" className="hover:text-pink-600 transition">Gallery</Link></li>
              <li><Link href="#contact" className="hover:text-pink-600 transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400 mb-4">
              G-007, Raj Nagar Extension,<br/>
              Ghaziabad, Uttar Pradesh 201003
            </p>
            <p className="text-gray-400 font-semibold">+91 88009 71337</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none"
                />
                <button className="bg-pink-600 px-6 py-2 rounded hover:bg-pink-700 transition font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="text-center text-gray-400 pt-8 border-t border-gray-800">
            <p>© 2026 TOES N TAILS. All rights reserved.</p>
            <p className="mt-2">Made with ❤️ for pets</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

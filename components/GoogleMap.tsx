'use client';

import { MapPin, Star } from 'lucide-react';

export default function GoogleMap() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <span className="text-pink-600 font-semibold uppercase tracking-widest">
            Find Us
          </span>

          <h2 className="text-5xl font-bold mt-3 mb-4 text-gray-900">
            Visit Our Google Business Profile
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover why pet owners across Delhi NCR trust TOES N TAILS for premium
            doorstep pet grooming. Check our Google reviews, location and business
            information.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          <div>

            <iframe
              src="https://www.google.com/maps?q=Toes+N+Tails+Pet+Grooming&output=embed"
              width="100%"
              height="500"
              loading="lazy"
              className="rounded-3xl shadow-2xl border-0"
            />

          </div>

          <div className="bg-pink-50 rounded-3xl p-10">

            <div className="flex items-center gap-3 mb-6">

              <MapPin className="text-pink-600" size={32} />

              <h3 className="text-3xl font-bold">
                TOES N TAILS
              </h3>

            </div>

            <p className="text-gray-600 leading-8 mb-8">

              Premium Doorstep Pet Grooming Services across Delhi NCR.

              Book professional grooming for dogs and cats in the comfort of your home.

            </p>

            <div className="flex gap-2 mb-8">

              <Star className="fill-yellow-400 text-yellow-400" />

              <Star className="fill-yellow-400 text-yellow-400" />

              <Star className="fill-yellow-400 text-yellow-400" />

              <Star className="fill-yellow-400 text-yellow-400" />

              <Star className="fill-yellow-400 text-yellow-400" />

            </div>

            <a

              href="https://maps.app.goo.gl/xwqdQXGPoKRqVAz59"

              target="_blank"

              rel="noopener noreferrer"

              className="inline-block bg-pink-600 hover:bg-pink-700 transition text-white px-8 py-4 rounded-full font-semibold shadow-lg"

            >

              View on Google Maps →

            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

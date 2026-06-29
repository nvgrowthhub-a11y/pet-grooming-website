'use client';

import Image from 'next/image';

const areas = [
  {
    name: 'Gurgaon',
    image: '/images/cyber-hub-gurgaon.jpg',
  },
  {
    name: 'South Delhi',
    image: '/images/india-gate-south-delhi.jpg',
  },
  {
    name: 'Faridabad',
    image: '/images/surajkund-faridabad.jpg',
  },
  {
    name: 'Noida',
    image: '/images/okhla-bird-sanctuary-noida.jpg',
  },
  {
    name: 'Greater Noida',
    image: '/images/india-expo-mart-greater-noida.jpg',
  },
  {
    name: 'Ghaziabad',
    image: '/images/iskcon-ghaziabad.jpg',
  },
];

export default function Areas() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Service Areas
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          We serve premium pet grooming across NCR region
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 cursor-pointer group">
              <div className="relative w-full h-56 bg-gray-300">
                <Image
                  src={area.image}
                  alt={area.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6 group-hover:from-black/80 transition">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">📍</span>
                    <span className="text-white font-bold text-xl">{area.name}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

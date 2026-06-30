'use client';

import { useState, useRef, useEffect } from 'react';

const servicePackages = {
  dog: [
    {
      name: 'BASIC',
      price: '₹999',
      description: 'Simple wash & dry',
      features: ['Shampoo', 'Conditioning', 'Drying', 'Comibing/Brushing' , 'Teeth Brushing/ Mouth Spray' , 'Nail Clipping' , 'Ear Cleaning' , 'Eyes Cleaning' , 'Perfume']
    },
    {
      name: 'BASIC HYGIENE',
      price: '₹799',
      description: 'Bath with nail trim',
      features: ['Bath', 'Nail trim', 'Dry', 'Ear cleaning']
    },
    {
      name: 'ESSENTIAL',
      price: '₹1299',
      description: 'Complete grooming',
      features: ['Bath', 'Haircut', 'Nail trim', 'Teeth cleaning']
    },
    {
      name: 'HAIRCUT',
      price: '₹1599',
      description: 'Style & groom',
      features: ['Bath', 'Custom haircut', 'Styling', 'Nail trim']
    },
    {
      name: 'ADVANCE',
      price: '₹2499',
      description: 'Premium spa package',
      features: ['Bath', 'Massage', 'Full groom', 'Premium products']
    },
  ],
  cat: [
    {
      name: 'BASIC',
      price: '₹399',
      description: 'Simple wash & dry',
      features: ['Bath', 'Dry', 'Basic trim']
    },
    {
      name: 'BASIC HYGIENE',
      price: '₹699',
      description: 'Bath with nail trim',
      features: ['Bath', 'Nail trim', 'Dry', 'Ear cleaning']
    },
    {
      name: 'ESSENTIAL',
      price: '₹1099',
      description: 'Complete grooming',
      features: ['Bath', 'Haircut', 'Nail trim', 'Dental care']
    },
    {
      name: 'HAIRCUT',
      price: '₹1399',
      description: 'Style & groom',
      features: ['Bath', 'Lion cut', 'Styling', 'Nail trim']
    },
    {
      name: 'ADVANCE',
      price: '₹1999',
      description: 'Premium spa package',
      features: ['Bath', 'Massage', 'Full groom', 'Premium products']
    },
  ]
};

interface ServiceDetailsProps {
  onClose: () => void;
}

export default function ServiceDetails({ onClose }: ServiceDetailsProps) {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const packages = servicePackages[petType];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newPosition = direction === 'left' 
        ? scrollPosition - scrollAmount 
        : scrollPosition + scrollAmount;
      
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-lg max-w-6xl w-full my-8 max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
          <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
          <button
            onClick={onClose}
            className="text-2xl text-gray-600 hover:text-gray-800"
          >
            ✕
          </button>
        </div>

        <div className="p-8">
          <div className="flex gap-4 mb-8 justify-center">
            <button
              onClick={() => setPetType('dog')}
              className={`px-8 py-3 rounded-full font-semibold text-lg transition ${
                petType === 'dog'
                  ? 'bg-pink-600 text-white'
                  : 'border-2 border-pink-600 text-pink-600 hover:bg-pink-50'
              }`}
            >
              🐕 Dog Grooming
            </button>
            <button
              onClick={() => setPetType('cat')}
              className={`px-8 py-3 rounded-full font-semibold text-lg transition ${
                petType === 'cat'
                  ? 'bg-purple-600 text-white'
                  : 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50'
              }`}
            >
              🐱 Cat Grooming
            </button>
          </div>

          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
              style={{ scrollBehavior: 'smooth' }}
            >
              {packages.map((pkg, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-72 bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-lg shadow-lg border-2 border-pink-200 hover:shadow-xl transition"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                  <p className="text-pink-600 text-2xl font-bold mb-2">{pkg.price}</p>
                  <p className="text-gray-700 mb-4">{pkg.description}</p>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, fidx) => (
                      <li key={fidx} className="text-gray-700 flex items-center gap-2">
                        <span className="text-pink-600">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-pink-600 text-white py-2 rounded-full hover:bg-pink-700 transition font-semibold">
                    Book Now
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition shadow-lg"
            >
              ←
            </button>
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition shadow-lg"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

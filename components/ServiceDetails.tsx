'use client';

import { useState, useRef } from 'react';

interface ServiceDetailsProps {
  onClose: () => void;
  onBook?: (pkg: any) => void;
}

export default function ServiceDetails({ onClose, onBook }: ServiceDetailsProps) {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const servicePackages = {
    dog: [
      {
        name: 'BASIC',
        price: '₹999',
        description: 'Simple wash & dry',
        features: [
          'Shampoo',
          'Conditioning',
          'Drying',
          'Combing/Brushing',
          'Teeth Brushing/ Mouth Spray',
          'Nail Clipping',
          'Ear Cleaning',
          'Eyes Cleaning',
          'Perfume'
        ]
      },
      {
        name: 'ESSENTIAL',
        price: '₹1499',
        description: 'Complete grooming',
        features: [
          'Shampoo',
          'Conditioning',
          'Drying',
          'Combing/Brushing',
          'Teeth Brushing/ Mouth Spray',
          'Paw Massage',
          'Nail Clipping',
          'Ear Cleaning',
          'Eyes Cleaning',
          'Full Body Trimming',
          'Perfume'
        ]
      },
      {
        name: 'HAIRCUT',
        price: '₹1199',
        description: 'Style & groom',
        features: ['Full Body Trimming', 'Nail Clipping', 'Ear Cleaning', 'Eyes Cleaning']
      },
      {
        name: 'ADVANCE',
        price: '₹1999',
        description: 'Premium spa package',
        features: [
          'Shampoo',
          'Conditioning',
          'Drying',
          'Combing/Brushing',
          'Teeth Brushing/ Mouth Spray',
          'Paw Massage',
          'Nail Clipping',
          'Ear Cleaning',
          'Eyes Cleaning',
          'Under Paw Trim',
          'Sanitary Trim',
          'Face Haircut',
          'Full Body Trim',
          'Oil Massage',
          'Perfume',
          'Anti-Tick Bath'
        ]
      }
    ],
    cat: [
      {
        name: 'BASIC',
        price: '₹999',
        description: 'Simple wash & dry',
        features: [
          'Shampoo',
          'Conditioning',
          'Drying',
          'Combing/Brushing',
          'Teeth Brushing/ Mouth Spray',
          'Nail Clipping',
          'Ear Cleaning',
          'Eyes Cleaning',
          'Perfume'
        ]
      },
      {
        name: 'ESSENTIAL',
        price: '₹1099',
        description: 'Complete grooming',
        features: [
          'Shampoo',
          'Conditioning',
          'Drying',
          'Combing/Brushing',
          'Teeth Brushing/ Mouth Spray',
          'Paw Massage',
          'Nail Clipping',
          'Ear Cleaning',
          'Eyes Cleaning',
          'Full Body Trimming',
          'Perfume'
        ]
      },
      {
        name: 'HAIRCUT',
        price: '₹1399',
        description: 'Style & groom',
        features: ['Full Body Trimming', 'Nail Clipping', 'Ear Cleaning', 'Eyes Cleaning']
      },
      {
        name: 'ADVANCE',
        price: '₹1999',
        description: 'Premium spa package',
        features: [
          'Shampoo',
          'Conditioning',
          'Drying',
          'Combing/Brushing',
          'Teeth Brushing/ Mouth Spray',
          'Paw Massage',
          'Nail Clipping',
          'Ear Cleaning',
          'Eyes Cleaning',
          'Under Paw Trim',
          'Sanitary Trim',
          'Face Haircut',
          'Full Body Trim',
          'Oil Massage',
          'Perfume',
          'Anti-Tick Bath'
        ]
      }
    ]
  };

  const packages = servicePackages[petType];

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;

    const scrollAmount = 300;

    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
      
      {/* MODAL BOX */}
      <div className="bg-white rounded-lg max-w-6xl w-full my-8 max-h-[90vh] overflow-y-auto relative">

        {/* HEADER */}
        <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center z-10">
          <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>

          <button
            onClick={onClose}
            className="text-2xl text-gray-600 hover:text-gray-800"
          >
            ✕
          </button>
        </div>

        <div className="p-8">

          {/* PET SWITCH */}
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

          {/* PACKAGES */}
          <div className="relative">

            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto pb-4 scroll-smooth"
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

                 {/* BOOK BUTTON */}
<button
  type="button"
  onClick={() => onBook?.(pkg)}
  className="w-full bg-pink-600 text-white py-2 rounded-full hover:bg-pink-700 transition font-semibold"
>
  Book Now
</button>

</div>   {/* Package Card */}
))}       {/* packages.map */}
</div>    {/* Scroll Container */}
          
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700"
            >
              ←
            </button>

            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700"
            >
              →
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

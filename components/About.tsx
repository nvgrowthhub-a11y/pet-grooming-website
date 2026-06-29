'use client';

import { useState } from 'react';
import Image from 'next/image';

const dogBreeds = [
  { name: 'German Shepherd', image: '/images/breed-german-shepherd.png' },
  { name: 'Labrador', image: '/images/breed-labrador.png' },
  { name: 'Golden Retriever', image: '/images/breed-golden-retriever.png' },
  { name: 'Pug', image: '/images/breed-pug.png' },
];

export default function About() {
  const [showVision, setShowVision] = useState(false);

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">About TOES N TAILS</h2>
        
        <div className="flex gap-8 items-center mb-12 flex-col md:flex-row">
          <div className="flex-1">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Welcome to TOES N TAILS, your premier choice for professional at-home pet grooming services. We bring the salon experience directly to your doorstep, serving all of Delhi and NCR with experienced, compassionate groomers. We provide stress-free grooming that leaves your pets happier, healthier, and looking their best, all within the familiar comfort of their own environment.
            </p>
            <button
              onClick={() => setShowVision(!showVision)}
              className="bg-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition"
            >
              {showVision ? 'Hide' : 'View'} Our Vision
            </button>
          </div>
        </div>

        {showVision && (
          <div className="mb-12 bg-pink-50 p-8 rounded-lg border-l-4 border-pink-600">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Vision</h3>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We envision a world where every pet receives premium grooming care with compassion and expertise. Our commitment is to revolutionize pet grooming by making luxury spa treatments accessible and stress-free for every beloved companion.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {dogBreeds.map((breed) => (
                <div key={breed.name} className="text-center">
                  <div className="relative w-full aspect-square mb-3 rounded-lg overflow-hidden">
                    <Image
                      src={breed.image}
                      alt={breed.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="font-semibold text-gray-800">{breed.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

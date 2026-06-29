'use client';

interface ServicesProps {
  onServicesClick: () => void;
}

export default function Services({ onServicesClick }: ServicesProps) {
  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-8 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">🐕 Dog Grooming</h3>
            <p className="text-gray-700 mb-6">
              Professional grooming services tailored for all dog breeds with specialized care and attention.
            </p>
            <button 
              onClick={onServicesClick}
              className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition font-semibold"
            >
              View Services
            </button>
          </div>

          <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-8 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">🐱 Cat Grooming</h3>
            <p className="text-gray-700 mb-6">
              Gentle and stress-free grooming solutions for cats with premium care products.
            </p>
            <button 
              onClick={onServicesClick}
              className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition font-semibold"
            >
              View Services
            </button>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onServicesClick}
            className="bg-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition text-lg"
          >
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
}

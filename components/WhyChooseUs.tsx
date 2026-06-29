'use client';

const reasons = [
  {
    title: 'Certified Groomers',
    description: 'Our team consists of internationally certified professionals with years of experience.',
    icon: '🎓'
  },
  {
    title: 'Pet-Friendly Environment',
    description: 'Our spa is designed to minimize stress and maximize comfort for every pet.',
    icon: '💆'
  },
  {
    title: 'Fast Booking',
    description: 'Easy online booking system with flexible scheduling to fit your lifestyle.',
    icon: '⚡'
  },
  {
    title: 'Premium Experience',
    description: 'White-glove service from the moment you arrive until you leave with your pampered pet.',
    icon: '👑'
  },
  {
    title: 'Affordable Pricing',
    description: 'Luxury grooming services at competitive prices without compromising quality.',
    icon: '💰'
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Why Choose Us
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          The TOES N TAILS Difference - Experience the difference that sets us apart
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition hover:transform hover:scale-105 duration-300 border-t-4 border-pink-600"
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{reason.title}</h3>
              <p className="text-gray-700 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

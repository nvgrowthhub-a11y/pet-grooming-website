'use client';

import { useEffect, useState } from 'react';

const stats = [
  { label: 'Happy Pets', value: 250, icon: '🐾' },
  { label: 'Grooming Sessions', value: 300, icon: '✨' },
  { label: 'Positive Reviews', value: 100, icon: '⭐' },
  { label: 'Expert Groomers', value: 10, icon: '👥' },
];

const AnimatedStat = ({ stat }: { stat: typeof stats[0] }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = stat.value;
    const duration = 2000;
    const increment = end / (duration / 50);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [stat.value]);

  return (
    <div className="text-center">
      <div className="text-4xl mb-2">{stat.icon}</div>
      <div className="text-4xl font-bold text-pink-600 mb-2">{count}+</div>
      <p className="text-gray-700 font-semibold">{stat.label}</p>
    </div>
  );
};

export default function Stats() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-pink-600 to-purple-600">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Our Track Record
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg shadow-lg">
              <AnimatedStat stat={stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

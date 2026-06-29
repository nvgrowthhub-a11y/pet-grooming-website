'use client';

const areas = [
  { name: 'Gurgaon', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7%20%20-pLP8RamldBwexe9RLco43gSCsPGN8c.jpeg' },
  { name: 'South Delhi', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7%20%20-pLP8RamldBwexe9RLco43gSCsPGN8c.jpeg' },
  { name: 'Noida', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7%20%20-pLP8RamldBwexe9RLco43gSCsPGN8c.jpeg' },
  { name: 'Greater Noida', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7%20%20-pLP8RamldBwexe9RLco43gSCsPGN8c.jpeg' },
  { name: 'Ghaziabad', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7%20%20-pLP8RamldBwexe9RLco43gSCsPGN8c.jpeg' },
  { name: 'Faridabad', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7%20%20-pLP8RamldBwexe9RLco43gSCsPGN8c.jpeg' },
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
            <div key={idx} className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer group">
              <div className="relative w-full h-48 bg-gray-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 group-hover:from-black/80 transition">
                  <span className="text-white font-bold text-lg">📍 {area.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

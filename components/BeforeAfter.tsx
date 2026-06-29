'use client';

import Image from 'next/image';

const beforeAfterExamples = [
  {
    before: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2275.PNG-tQDksTIX3NWNW6hyLxrZPxrDfKoSLa.png',
    after: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2275.PNG-tQDksTIX3NWNW6hyLxrZPxrDfKoSLa.png',
  },
  {
    before: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2278.PNG-ehKF01HHleZmiyRgT1JFPzijDLUHPa.png',
    after: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2278.PNG-ehKF01HHleZmiyRgT1JFPzijDLUHPa.png',
  },
  {
    before: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2277.PNG-9kfl7aOp32G1yYfY51QmZSKywQITI9.png',
    after: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2277.PNG-9kfl7aOp32G1yYfY51QmZSKywQITI9.png',
  },
  {
    before: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2276.PNG-7jd9KShvg75fa31SrT3UwmZVq8CsD9.png',
    after: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2276.PNG-7jd9KShvg75fa31SrT3UwmZVq8CsD9.png',
  },
  {
    before: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2274.PNG-XwdpdFWhmQ1YvbIxtlmQ7lmbHvpG3e.png',
    after: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2274.PNG-XwdpdFWhmQ1YvbIxtlmQ7lmbHvpG3e.png',
  },
];

export default function BeforeAfter() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Transformation Gallery
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          See the amazing transformations our grooming services provide
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beforeAfterExamples.map((example, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="relative w-full aspect-video">
                <Image
                  src={example.before}
                  alt="Before and After"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <p className="text-gray-700 font-semibold">Beautiful Transformation</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

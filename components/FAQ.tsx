'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'What services do you offer for dogs and cats?',
    answer: 'We offer a comprehensive range of services including full grooming, spa treatments, bath and cleaning, nail trimming, hair styling, pet massage, feeding care, and luxury packages. All services are available for both dogs and cats with specialized techniques for each.'
  },
  {
    question: 'How do I book an appointment?',
    answer: 'Booking is easy! You can use our online booking form, call us directly at +91 88009 71337, or send a message through WhatsApp. We recommend booking at least 3-5 days in advance for regular appointments, and 1-2 weeks for special occasions or luxury packages.'
  },
  {
    question: 'Are your products safe for pets with sensitive skin?',
    answer: 'Absolutely! We use only premium, organic, and hypoallergenic products. Before any treatment, our groomers assess your pet\'s skin condition and select appropriate products. We also offer special sensitive-skin formulas upon request.'
  },
  {
    question: 'How long does a typical grooming session take?',
    answer: 'Session duration varies based on the service and your pet\'s size and coat condition. A basic bath and groom takes about 1-2 hours, while full grooming or spa packages may take 2-4 hours. We never rush - your pet\'s comfort is our priority.'
  },
  {
    question: 'Do you groom all breeds?',
    answer: 'Yes! Our certified groomers are trained to work with all dog and cat breeds. We understand the unique grooming requirements of each breed and tailor our services accordingly, from Yorkshire Terriers to Great Danes, Persian cats to Maine Coons.'
  },
  {
    question: 'What should I bring for my pet\'s appointment?',
    answer: 'Just bring your pet! We provide all grooming supplies and products. If your pet has any favorite treats, comfort items, or requires specific products due to allergies, feel free to bring those. Please also bring any vaccination records for first-time visits.'
  },
];

const FAQItem = ({ faq, index }: { faq: typeof faqs[0]; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 px-6 text-left flex justify-between items-center hover:bg-pink-50 transition"
      >
        <span className="font-semibold text-gray-800 text-lg">{faq.question}</span>
        <span className={`text-2xl text-pink-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-gray-700 leading-relaxed">
          {faq.answer}
        </div>
      )}
    </div>
  );
};

export default function FAQ() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Find answers to common questions about our services and policies
        </p>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} faq={faq} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

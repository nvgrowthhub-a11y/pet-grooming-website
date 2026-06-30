'use client';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918800971337?text=Hi! I want to book a grooming appointment."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="w-16 h-16 rounded-full bg-green-500 shadow-xl flex items-center justify-center hover:scale-110 transition-all duration-300">

        <img
          src="/images/whatsapp.png"
          alt="WhatsApp"
          className="w-9 h-9"
        />

      </div>
    </a>
  );
}

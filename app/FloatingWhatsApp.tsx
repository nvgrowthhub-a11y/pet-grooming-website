'use client';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918800971337?text=Hi%20Toes%20N%20Tails!%20I%20want%20to%20book%20a%20pet%20grooming%20appointment."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      aria-label="Chat on WhatsApp"
    >
      <div className="w-16 h-16 rounded-full bg-[#25D366] shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 animate-bounce">

        <img
          src="/images/whatsapp.png"
          alt="WhatsApp"
          className="w-9 h-9"
        />

      </div>
    </a>
  );
}

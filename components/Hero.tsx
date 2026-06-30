'use client';

import Image from "next/image";

export default function Hero() {
  const handleBookAppointments = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleBookServices = () => {
    document.getElementById("services")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="bg-gradient-to-r from-pink-200 via-pink-100 to-purple-100 pt-28 pb-24 px-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto text-center">

        {/* Curved Logo */}
        <div className="relative flex justify-center mb-8">

          {/* Curved Ring */}
          <div className="absolute -top-12 w-72 h-72 border-[5px] border-pink-400 rounded-full opacity-25"></div>

          {/* Logo */}
          <div className="relative z-10 bg-white p-5 rounded-full shadow-2xl">
            <Image
              src="/images/toes-n-tails-logo.png"
              alt="Toes N Tails"
              width={180}
              height={180}
              priority
              className="w-40 h-40 object-contain"
            />
          </div>

        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
  Welcome to
  <br />
  <span className="text-pink-600">Toes N Tails</span>
</h1>

        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
          Professional Pet Spa, Grooming & Care Experience.
          Where your furry companions receive the royal treatment they deserve.
        </p>

        <div className="flex justify-center gap-5 flex-wrap">

          <button
            onClick={handleBookAppointments}
            className="bg-pink-600 hover:bg-pink-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl transition duration-300 hover:scale-105"
          >
            Book Appointments
          </button>

          <button
            onClick={handleBookServices}
            className="border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white px-10 py-4 rounded-full text-lg font-semibold transition duration-300"
          >
            Book Services
          </button>

        </div>

      </div>
    </section>
  );
}

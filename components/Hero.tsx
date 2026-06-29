'use client';

export default function Hero() {
  const handleBookAppointments = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-r from-pink-200 via-pink-100 to-purple-100 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          Luxury Grooming For Your Beloved Pets
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Professional Pet Spa, Grooming & Care Experience. Where your furry companions receive the royal treatment they deserve.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button 
            onClick={handleBookAppointments}
            className="bg-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition text-lg"
          >
            Book Appointments
          </button>
          <button 
            onClick={handleBookServices}
            className="border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition text-lg"
          >
            Book Services
          </button>
        </div>
      </div>
    </section>
  );
}

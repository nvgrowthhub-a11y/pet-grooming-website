'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import BeforeAfter from '@/components/BeforeAfter';
import Services from '@/components/Services';
import ServiceDetails from '@/components/ServiceDetails';
import Areas from '@/components/Areas';
import WhyChooseUs from '@/components/WhyChooseUs';
import Stats from '@/components/Stats';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import GoogleMap from "@/components/GoogleMap";
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  const [showServiceDetails, setShowServiceDetails] = useState(false);

  // 🔥 DEBUG: confirm state changes
  const openModal = () => {
    console.log("MODAL OPENED");
    setShowServiceDetails(true);
  };

  const closeModal = () => {
    console.log("MODAL CLOSED");
    setShowServiceDetails(false);
  };

  const handleBook = (pkg: any) => {
  const message = `Hi Toes N Tails! 👋

I want to book a grooming appointment.

Package: ${pkg.name}
Price: ${pkg.price}

Please share the available slots.`;

  window.open(
    `https://wa.me/918800971337?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-50">

      <Navbar />

      <Hero />
      <About />
      <BeforeAfter />

      {/* ✅ FIXED SERVICES TRIGGER */}
      <Services onServicesClick={openModal} />

      {/* ✅ MODAL */}
      {showServiceDetails && (
        <ServiceDetails
          onClose={closeModal}
          onBook={handleBook}
        />
      )}

      <Areas />
      <WhyChooseUs />
      <Stats />
      <Reviews />
      <FAQ />
      <Contact />
      <FloatingWhatsApp />
      <GoogleMap />
      <Footer />

    </div>
  );
}

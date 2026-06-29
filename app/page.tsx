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

export default function Home() {
  const [showServiceDetails, setShowServiceDetails] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-50">
      <Navbar />
      <Hero />
      <About />
      <BeforeAfter />
      <Services onServicesClick={() => setShowServiceDetails(true)} />
      {showServiceDetails && <ServiceDetails onClose={() => setShowServiceDetails(false)} />}
      <Areas />
      <WhyChooseUs />
      <Stats />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

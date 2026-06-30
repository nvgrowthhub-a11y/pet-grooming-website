'use client';

import { useState } from 'react';
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    petName: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hello! I would like to book an appointment.
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Pet Name: ${formData.petName}
Message: ${formData.message}`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/918800971337?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Book Your Appointment
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Schedule a luxury grooming session for your beloved pet today
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-800 font-semibold mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pink-600 focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-gray-800 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pink-600 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-800 font-semibold mb-2">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pink-600 focus:outline-none"
                  placeholder="+91 XXXXXXXXXX"
                />
              </div>

              <div>
                <label className="block text-gray-800 font-semibold mb-2">Pet Name</label>
                <input
                  type="text"
                  required
                  value={formData.petName}
                  onChange={(e) => setFormData({...formData, petName: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pink-600 focus:outline-none"
                  placeholder="Your pet's name"
                />
              </div>

              <div>
                <label className="block text-gray-800 font-semibold mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pink-600 focus:outline-none h-24"
                  placeholder="Tell us about your pet and any special requirements"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition text-lg"
              >
                Send via WhatsApp
              </button>
            </form>
          </div>

          <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">📍 Address</h4>
                <p className="text-gray-700">
                  G-007 Ajnara Integrity Office,<br/>
                  Raj Nagar Extension,<br/>
                  Ghaziabad, Uttar Pradesh 201003
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">📞 Phone</h4>
                <p className="text-gray-700 text-lg">+91 88009 71337</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Connect With Us</h4>
               <div className="flex gap-4">

  <a
    href="https://wa.me/918800971337"
    target="_blank"
    rel="noopener noreferrer"
    className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition"
  >
    <Image
      src="/images/whatsapp.png"
      alt="WhatsApp"
      width={50}
      height={50}
    />
  </a>

  <a
    href="https://www.instagram.com/toesntail?igsh=MXhoOXo5cW9rbnd3Mw%3D%3D&utm_source=qr"
    target="_blank"
    rel="noopener noreferrer"
    className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition"
  >
    <Image
      src="/images/instagram.png"
      alt="Instagram"
      width={34}
      height={34}
    />
  </a>

  <a
    href="https://www.facebook.com/ToesNTail"
    target="_blank"
    rel="noopener noreferrer"
    className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition"
  >
    <Image
      src="/images/facebook.png"
      alt="Facebook"
      width={34}
      height={34}
    />
  </a>

</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

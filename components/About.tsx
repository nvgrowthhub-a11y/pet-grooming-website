'use client';

import { useState } from 'react';
import Image from 'next/image';

const visionSections = [
  {
    id: 1,
    title: 'Pamper Your Pet in the Comfort of Home',
    image: '/images/breed-german-shepherd.png',
    description:
      'Welcome to TOES N TAILS, your premier choice for professional at-home pet grooming services. 
      We bring the salon experience directly to your doorstep, serving all of Delhi and NCR with experienced,
  compassionate groomers. Our mission is to provide stress-free grooming that leaves your pets happier, healthier, 
  and looking their best, all within the familiar comfort of their own environment.',

    bullets: [
      'Professional & Certified Groomers',
      'Doorstep Pet Grooming',
      'Stress-Free Home Environment',
      'Premium Grooming Products',
      '100% Hygiene & Safety'
    ]
  },

  {
    id: 2,
    title: 'Benefits of At-Home Grooming',
    image: '/images/breed-labrador.png',

    description:
      'Reduced Stress
        Pets are 30% calmer in their familiar surroundings, avoiding the anxiety of travel and new environments.
Convenience,
        No travel time, no exposure to other animals, and flexible scheduling 7 days a week to fit your busy life.
Personalized Care,
          One-on-one attention ensures customized services, leading to a 45% increase in hygiene compliance.',

    bullets: [
      'No travelling required',
      'Less anxiety & stress',
      'One-to-one personal attention',
      'Comfort of home',
      'Flexible appointment scheduling',
      'Safe & hygienic grooming'
    ]
  },

  {
    id: 3,
    title: 'Our Comprehensive Grooming Services',
    image: '/images/breed-golden-retriever.png',

    description:
      'Bath and Brush 
        Hair cuts & Styling 
       Nail trims 
         Teeth Cleaning
           DeSheeding Treatments 
             Flea & Tick Treatments',

    services: [
      'Luxury Bath',
      'Hair Cut & Styling',
      'Blow Dry',
      'Nail Trimming',
      'Ear Cleaning',
      'Teeth Brushing',
      'Paw Cleaning',
      'Tick & Flea Treatment'
    ]
  },

  {
    id: 4,
    title: 'The TOES N TAILS Grooming Process',
    image: '/images/breed-pug.png',

    description:
      'Easy Bookings on Call
Schedule your convenient at-home grooming appointment in minutes.
	Groomer Arrival
Our supportive and friendly professional arrives at your home, fully equipped
	Customized Grooming
Services are carefully tailored to your pet's specific needs and your preferences.
	Clean & Tidy
We ensure your home is left spotless and clean after grooming.
	Satisfaction Guaranteed
We strive for excellence, making sure both you and your beloved pet are completely happy.',

    process: [
      'Book Appointment',
      'Groomer Arrives at Your Home',
      'Pet Health Check',
      'Professional Grooming',
      'Final Quality Inspection'
    ]
  },

  {
    id: 5,
    title: 'Book Your At-Home Grooming Today!',
    image: '/images/breed-german-shepherd.png',

    description:
      'Explore our full range of services and book your appointment online at
TOES N TAILS.
Call Us Directly
Speak with our friendly team and schedule your pet's pampering session by calling 8800971337.
Give your pet the gift of a professional grooming experience without ever leaving your home. TOES N TAILS is committed to providing convenient, high-quality care that prioritizes your pet's comfort and well-being.
Contact us today and let us bring the ultimate grooming experience',

    cta:
      'Professional • Safe • Hygienic • Doorstep Grooming'
  }
];

export default function About() {

const [showVision,setShowVision]=useState(false);

return(

<section
id="about"
className="py-24 bg-gradient-to-b from-white via-pink-50 to-white"
>

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-5xl font-bold text-center text-gray-900">

About TOES N TAILS

</h2>

<p className="text-lg text-gray-600 leading-8 max-w-4xl mx-auto text-center mt-8">

Welcome to TOES N TAILS, your trusted destination for premium at-home pet grooming services. We provide professional doorstep grooming that keeps your pets relaxed, happy and looking their absolute best without leaving home.

</p>

<div className="flex justify-center mt-12">

<button

onClick={()=>setShowVision(!showVision)}

className="bg-pink-600 hover:bg-pink-700 transition text-white px-10 py-4 rounded-full font-semibold shadow-xl"

>

{showVision ? 'Hide Our Vision' : 'View Our Vision'}

</button>

</div>

{showVision && (

<div className="mt-20 space-y-24">

{visionSections.map((item,index)=>(

<div

key={item.id}

className="grid lg:grid-cols-2 gap-14 items-center"

>

<div className={`${index % 2 !== 0 ? 'lg:order-2' : ''}`}>

<div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">

<Image

src={item.image}

alt={item.title}

fill

className="object-cover"

priority={index===0}

/>

</div>

</div>

<div className={`${index % 2 !== 0 ? 'lg:order-1' : ''}`}>

<h3 className="text-4xl font-bold text-gray-900 mb-6">

{item.title}

</h3>

<p className="text-gray-600 text-lg leading-8 mb-8">

{item.description}

</p>
  {item.points && (

<div className="space-y-4 mb-8">

{item.points.map((point,i)=>(

<div
key={i}
className="flex items-start gap-4 bg-pink-50 rounded-xl p-4 shadow-sm hover:shadow-md transition"
>

<div className="w-8 h-8 rounded-full bg-pink-600 text-white flex items-center justify-center font-bold flex-shrink-0">

✓

</div>

<p className="text-gray-700 leading-7">

{point}

</p>

</div>

))}

</div>

)}

{item.services && (

<div className="grid grid-cols-2 gap-4 mb-8">

{item.services.map((service,i)=>(

<div
key={i}
className="bg-white rounded-xl p-5 shadow-md border border-pink-100 hover:shadow-xl transition"
>

<h4 className="font-semibold text-gray-800">

🐾 {service}

</h4>

</div>

))}

</div>

)}

{item.process && (

<div className="space-y-5 mb-8">

{item.process.map((step,i)=>(

<div
key={i}
className="flex gap-5 items-start"
>

<div className="w-12 h-12 rounded-full bg-pink-600 text-white flex items-center justify-center font-bold text-lg">

{i+1}

</div>

<div>

<h4 className="font-bold text-gray-800 mb-1">

Step {i+1}

</h4>

<p className="text-gray-600">

{step}

</p>

</div>

</div>

))}

</div>

)}

{item.cta && (

<div className="bg-gradient-to-r from-pink-600 to-rose-500 rounded-2xl p-8 text-white shadow-xl">

<h4 className="text-3xl font-bold mb-4">

Ready to Pamper Your Pet?

</h4>

<p className="text-pink-100 leading-8 mb-6">

{item.cta}

</p>

<button

className="bg-white text-pink-600 font-bold px-8 py-4 rounded-full hover:scale-105 transition"

>

Book Appointment

</button>

</div>

)}
                </div>

            </div>

          ))}

        </div>

      )}

    </div>

  </section>

);

}

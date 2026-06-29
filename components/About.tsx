'use client';

import { useState } from 'react';
import Image from 'next/image';

const visionSections = [
  {
    id: 1,
    title: 'Pamper Your Pet in the Comfort of Home',
    image: '/images/breed-german-shepherd.png',
    description: `Welcome to TOES N TAILS, your premier choice for professional at-home pet grooming services.

We bring the salon experience directly to your doorstep, serving all of Delhi and NCR with experienced, compassionate groomers.

Our mission is to provide stress-free grooming that leaves your pets happier, healthier, and looking their best, all within the familiar comfort of their own environment.`,
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
      'Doorstep grooming offers convenience while reducing stress and anxiety for your pets. Your furry friend receives one-on-one attention without travelling to a grooming salon.',

    bullets: [
      'Reduced Stress',
      'Convenience',
      'Personalized Care',
      'Comfort of home'
      
    ]
  },

  {
    id: 3,
    title: 'Our Comprehensive Grooming Services',
    image: '/images/breed-golden-retriever.png',

    description:
      'We provide complete grooming solutions designed to keep your pet healthy, clean and beautiful.',

    services: [
      'Bath and Brush',
      'Hair Cut & Styling',
      'Nail Trims',
      'Teeth Cleaning',
      'De-Shedding Treatments',
      'Flea & Tick Treatments'
    
    ]
  },

  {
    id: 4,
    title: 'The TOES N TAILS Grooming Process',
    image: '/images/breed-pug.png',

    description:
      'Every grooming session follows a professional process that keeps your pet comfortable from beginning to end.',

    process: [
      'Easy Bookings on Call',
      'Groomer Arrival',
      'Customized Grooming',
      'Clean & Tidy',
      'Satisfaction Guaranteed'
    ]
  },

  {
    id: 5,
    title: 'Book Your At-Home Grooming Today!',
    image: '/images/Shih-Tzu-Dog.jpg',

    description:
      'Give your furry friend the luxury grooming experience they deserve. Book an appointment today and let TOES N TAILS bring the spa directly to your home.',

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
<div className="space-y-3">

{item.bullets?.map((bullet, i) => (

<p key={i} className="flex gap-2 text-gray-700">

<span className="text-pink-600">✔</span>

{bullet}

</p>

))}

{item.services?.map((service, i) => (

<p key={i} className="flex gap-2 text-gray-700">

<span className="text-pink-600">🐾</span>

{service}

</p>

))}

{item.process?.map((step, i) => (

<p key={i} className="flex gap-2 text-gray-700">

<span className="text-pink-600">{i + 1}.</span>

{step}

</p>

))}

{item.cta && (

<div className="mt-8 rounded-xl bg-pink-600 text-white p-6">

<p>{item.cta}</p>

</div>

)}

</div>

</div>

</div>

))}

</div>

)}

</div>

</section>

);

}

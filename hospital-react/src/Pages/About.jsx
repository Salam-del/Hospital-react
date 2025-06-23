import React from 'react';

export default function About() {
  return (
    <div className="bg-green-50 min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-10">
        <h1 className="text-4xl font-extrabold text-green-800 mb-4 text-center">About MediCare Hospital</h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          MediCare Hospital is dedicated to providing compassionate, world-class healthcare to our community. Learn more about our mission, vision, and the values that guide us every day.
        </p>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-2">Our Mission</h2>
          <p className="text-gray-700">To deliver exceptional, patient-centered care with integrity, innovation, and excellence.</p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-2">Our Vision</h2>
          <p className="text-gray-700">To be the leading healthcare provider, recognized for clinical excellence, advanced technology, and a commitment to the well-being of every patient.</p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-2">Our Values</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Compassion and respect for every individual</li>
            <li>Integrity and transparency in all we do</li>
            <li>Continuous learning and improvement</li>
            <li>Collaboration and teamwork</li>
            <li>Community engagement and support</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-green-700 mb-2">Our Story</h2>
          <p className="text-gray-700">Founded in 2005, MediCare Hospital has grown from a small clinic to a state-of-the-art medical center serving thousands of patients each year. Our dedicated team of professionals is committed to making a positive impact on the lives of our patients and their families.</p>
        </div>
      </div>
    </div>
  );
} 
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function InsurancePlan() {
  const navigate = useNavigate();
  return (
    <motion.div className="bg-green-50 min-h-screen py-12 px-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-10">
        <h1 className="text-4xl font-extrabold text-green-800 mb-8 text-center">Choose Your Insurance Plan</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Individual Plan */}
          <div className="bg-green-100 rounded-xl shadow p-6 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-green-700 mb-2">Individual Plan</h2>
            <p className="text-gray-700 mb-4 text-center">Comprehensive health coverage for one person. Ideal for singles, students, or anyone seeking personal medical protection.</p>
            <button
              className="bg-green-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-800 transition-colors"
              onClick={() => navigate('/contact')}
            >
              Register for Individual Plan
            </button>
          </div>
          {/* Family Plan */}
          <div className="bg-green-100 rounded-xl shadow p-6 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-green-700 mb-2">Family Plan</h2>
            <p className="text-gray-700 mb-4 text-center">Affordable health insurance for your entire family. Covers parents, children, and dependents under one plan for peace of mind.</p>
            <button
              className="bg-green-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-800 transition-colors"
              onClick={() => navigate('/contact')}
            >
              Register for Family Plan
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 
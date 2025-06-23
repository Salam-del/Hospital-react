import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (!form.email || !form.password || !form.name || !form.phone) {
      setError('Please fill in all fields.');
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-100 min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-md w-full">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Sign Up Successful!</h2>
          <p className="text-gray-700 mb-2">Welcome, {form.name}! Your account has been created.</p>
          <Link to="/login" className="text-blue-600 underline">Go to Login</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-green-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-extrabold text-primary mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-primary"
            />
          </div>
          {error && <div className="text-red-600 text-sm text-center">{error}</div>}
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-lg font-bold text-lg shadow hover:bg-primary/90 transition-colors"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account? <Link to="/login" className="text-primary hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
} 
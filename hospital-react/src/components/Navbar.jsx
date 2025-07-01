import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-green-700 text-white shadow-md">
      <div className="w-full px-0 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center text-2xl font-extrabold tracking-tight">
          <img
            src="https://th.bing.com/th/id/OIP.6m-iZ9HuKV8rOO36Ft6V6gHaEP?w=258&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
            alt="Medical Logo"
            className="h-10 w-10 mr-3 drop-shadow-md bg-white rounded-full p-1"
            style={{ marginLeft: 0 }}
          />
          <span className="align-middle">Medicare</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:underline px-4 py-2">Home</Link>
          <Link to="/doctors" className="hover:underline px-4 py-2">Doctors</Link>
          <Link to="/services" className="hover:underline px-4 py-2">Services</Link>
          <div className="relative group">
            <button className="hover:underline px-4 py-2 flex items-center focus:outline-none">
              Resources
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded shadow-lg opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity z-20">
              <Link to="/about" className="block px-4 py-2 hover:bg-gray-100">About</Link>
              <Link to="/pregnancy" className="block px-4 py-2 hover:bg-gray-100">Pregnancy Care</Link>
              <Link to="/menstrual-calculator" className="block px-4 py-2 hover:bg-gray-100">Menstrual Calculator</Link>
              <Link to="/contact" className="block px-4 py-2 hover:bg-gray-100">Contact</Link>
            </div>
          </div>
          <Link to="/book-appointment" className="bg-green-600 px-4 py-2 rounded hover:bg-green-700 font-semibold shadow">Book Appointment</Link>
          <Link to="/login" className="bg-white text-green-700 px-4 py-2 rounded hover:bg-green-50 border border-green-600 font-semibold">Login</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-primary-dark px-4 py-2">
          <Link to="/" className="block py-2 hover:underline">Home</Link>
          <Link to="/doctors" className="block py-2 hover:underline">Doctors</Link>
          <Link to="/services" className="block py-2 hover:underline">Services</Link>
          <details className="py-2">
            <summary className="cursor-pointer font-semibold">Resources</summary>
            <div className="pl-4">
              <Link to="/about" className="block py-2 hover:underline">About</Link>
              <Link to="/pregnancy" className="block py-2 hover:underline">Pregnancy Care</Link>
              <Link to="/menstrual-calculator" className="block py-2 hover:underline">Menstrual Calculator</Link>
              <Link to="/contact" className="block py-2 hover:underline">Contact</Link>
            </div>
          </details>
          <Link to="/book-appointment" className="block py-2 bg-green-600 text-white rounded my-2 text-center font-semibold">Book Appointment</Link>
          <Link to="/login" className="block py-2 bg-white text-green-700 rounded border border-green-600 text-center font-semibold">Login</Link>
        </div>
      )}
    </header>
  );
}
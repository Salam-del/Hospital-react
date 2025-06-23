import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-green-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">MediCare</Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:underline px-4 py-2">Home</Link>
          <Link to="/about" className="hover:underline px-4 py-2">About</Link>
          <Link to="/doctors" className="hover:underline px-4 py-2">Doctors</Link>
          <Link to="/services" className="hover:underline px-4 py-2">Services</Link>
          <Link to="/pregnancy" className="text-pink-200 hover:text-pink-100 hover:underline px-4 py-2">Pregnancy Care</Link>
          <Link to="/menstrual-calculator" className="text-pink-200 hover:text-pink-100 hover:underline px-4 py-2">Menstrual Calculator</Link>
          <Link to="/book-appointment" className="hover:underline px-4 py-2">Book Appointment</Link>
          <Link to="/contact" className="hover:underline px-4 py-2">Contact</Link>
          <Link to="/login" className="bg-green-600 px-4 py-2 rounded hover:bg-green-700">
            Login
          </Link>
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
          <Link to="/about" className="block py-2 hover:underline">About</Link>
          <Link to="/doctors" className="block py-2 hover:underline">Doctors</Link>
          <Link to="/services" className="block py-2 hover:underline">Services</Link>
          <Link to="/pregnancy" className="block py-2 hover:underline">Pregnancy Care</Link>
          <Link to="/menstrual-calculator" className="block py-2  hover:underline">Menstrual Calculator</Link>
          <Link to="/book-appointment" className="block py-2 hover:underline">Book Appointment</Link>
          <Link to="/contact" className="block py-2 hover:underline">Contact</Link>
          <Link to="/login" className="block py-2">Login</Link>
        </div>
      )}
    </header>
  );
}
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Doctors from './Pages/Doctors';
import Services from './Pages/Services';
import PatientHomepage from './Pages/PatientHomepage';
import DoctorDashboard from './Pages/DoctorDashboard';
import BookAppointment from './Pages/BookAppointment';
import Contact from './Pages/Contact';
import Navbar from './components/Navbar';  
import LiveChatWidget from './components/LiveChatWidget';
import Pregnancy from './Pages/Pregnancy';
import MenstrualCalculator from './Pages/MenstrualCalculator';
import SpecialFunds from './Pages/SpecialFunds';
import HeartHealthyTips from './Pages/HeartHealthyTips';
import About from './Pages/About';
import SignUp from './Pages/SignUp';
import DoctorProfile from './Pages/DoctorProfile';
import InsurancePlan from './Pages/InsurancePlan';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <LiveChatWidget />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Doctors" element={<Doctors />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/patient" element={<PatientHomepage />} />
            <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
            <Route path="/book-appointment" element={<BookAppointment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pregnancy" element={<Pregnancy />} />
            <Route path="/menstrual-calculator" element={<MenstrualCalculator />} />
            <Route path="/special-funds" element={<SpecialFunds />} />
            <Route path="/heart-healthy-tips" element={<HeartHealthyTips />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/doctor/:id" element={<DoctorProfile />} />
            <Route path="/insurance-plan" element={<InsurancePlan />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
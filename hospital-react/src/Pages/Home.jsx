import { motion } from 'framer-motion';

export default function Home() {
    return (
      <div className="bg-black-min-h-screen flex flex-col">
        <motion.section className="container mx-auto px-4 py-20 flex-1" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
          <div className="text-center mb-16">
            <motion.h1 className="text-5xl md:text-6xl font-extrabold text-primary mb-6 tracking-tight drop-shadow-lg" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
              Welcome to <span className="text-green-700">MediCare Hospital</span>
            </motion.h1>
            <motion.p className="text-2xl md:text-3xl text-gray-700 max-w-3xl mx-auto font-medium mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}>
              Compassionate, world-class healthcare for you and your family.
            </motion.p>
            <motion.p className="text-lg text-gray-500 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}>
              Experience the future of medicine with our state-of-the-art facilities, renowned specialists, and a commitment to your well-being.
            </motion.p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-stretch gap-12 mb-20">
            <motion.div className="bg-white rounded-2xl shadow-2xl p-10 max-w-lg w-full border-2 border-green-100" initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}>
              <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
              <p className="text-gray-800 text-lg leading-relaxed">
                At MediCare Hospital, we are dedicated to providing exceptional medical care with a patient-centered approach. Our team of experienced doctors and nurses use the latest technology to ensure your well-being and comfort. We strive to set new standards in healthcare excellence, safety, and innovation.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1519494080410-f9aa8f52f1e1?auto=format&fit=crop&w=80&q=80"
                  alt="Mission"
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                />
                <span className="text-primary font-semibold text-lg">Trusted by 10,000+ patients</span>
              </div>
            </motion.div>
            <motion.div className="bg-white rounded-2xl shadow-2xl p-10 max-w-lg w-full border-2 border-green-100" initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}>
              <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Us?</h2>
              <ul className="list-none space-y-4 text-gray-800 text-lg">
                <li className="flex items-center gap-3">
                  <span className="inline-block bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold">✓</span>
                  24/7 Emergency & Trauma Services
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-block bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold">✓</span>
                  Board-Certified, Highly Qualified Specialists
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-block bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold">✓</span>
                  Modern Diagnostic & Surgical Facilities
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-block bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold">✓</span>
                  Personalized, Holistic Patient Care
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-block bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold">✓</span>
                  Comprehensive Health & Wellness Programs
                </li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">ISO 9001:2015 Certified</span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">NABH Accredited</span>
              </div>
            </motion.div>
          </div>

          <motion.div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-20" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}>
            <a
              href="/doctors"
              className="bg-green-700 text-white px-10 py-4 rounded-xl font-bold text-xl shadow-lg hover:bg-green-800 transition-colors border-2 border-green-800"
            >
              Meet Our Doctors
            </a>
            <a
              href="/services"
              className="bg-green-700 text-white px-10 py-4 rounded-xl font-bold text-xl shadow-lg hover:bg-green-800 transition-colors border-2 border-green-800"
            >
              View Our Services
            </a>
            <a
              href="/login"
              className="bg-white text-green-700 px-10 py-4 rounded-xl font-bold text-xl shadow-lg hover:bg-green-100 transition-colors border-2 border-green-700"
            >
              Patient Login
            </a>
          </motion.div>
          <div className="flex justify-center mb-12">
            <a
              href="/insurance-plan"
              className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow hover:bg-green-700 transition-colors border-2 border-green-700"
            >
              Register for Insurance Plan
            </a>
          </div>

          <div className="mt-24 flex flex-col md:flex-row items-center justify-center gap-12">
            <motion.div className="flex-1 flex flex-col gap-8" initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }}>
              <motion.div className="bg-white rounded-xl shadow-lg p-8 border-l-8 border-green-600" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }}>
                <h3 className="text-2xl font-bold text-primary mb-2">Cutting-Edge Technology</h3>
                <p className="text-gray-700">
                  From advanced imaging to robotic surgery, we invest in the latest medical technology to deliver the best outcomes for our patients.
                </p>
              </motion.div>
              <motion.div className="bg-white rounded-xl shadow-lg p-8 border-l-8 border-green-600" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.5 }}>
                <h3 className="text-2xl font-bold text-primary mb-2">Patient-Centered Approach</h3>
                <p className="text-gray-700">
                  Our care teams listen, understand, and partner with you to create a personalized treatment plan for your unique needs.
                </p>
              </motion.div>
            </motion.div>
            <motion.div className="flex-1 flex justify-center" initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.6 }}>
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80"
                alt="Hospital team"
                className="rounded-2xl shadow-2xl w-full max-w-2xl object-cover border-4 border-green-200"
              />
            </motion.div>
          </div>

          {/* Health Blog Section */}
          <motion.div className="mt-24" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-green-700 mb-4">Health Blog</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Stay informed with the latest health tips, news, and wellness advice from our experts.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Special Funds Mini Blog */}
              <div className="bg-yellow-50 rounded-xl shadow-lg overflow-hidden flex flex-col border-l-4 border-yellow-400">
                <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80" alt="Special Funds" className="h-48 w-full object-cover" />
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-yellow-700 mb-2">Support Patients in Need</h3>
                  <p className="text-gray-700 mb-4 flex-1">Learn how you can help patients who need urgent medical care but face financial hardship. Every contribution brings hope and healing.</p>
                  <a href="/special-funds" className="text-yellow-700 font-semibold hover:underline mt-auto">Support Now</a>
                </div>
              </div>
              {/* Blog Post 1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
                <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80" alt="Healthy Eating" className="h-48 w-full object-cover" />
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-green-700 mb-2">5 Tips for a Heart-Healthy Diet</h3>
                  <p className="text-gray-600 mb-4 flex-1">Discover simple dietary changes that can help you maintain a healthy heart and reduce your risk of cardiovascular disease.</p>
                  <a href="/heart-healthy-tips" className="text-green-700 font-semibold hover:underline mt-auto">Read More</a>
                </div>
              </div>
              {/* Blog Post 2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
                <img src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=600&q=80" alt="Mental Wellness" className="h-48 w-full object-cover" />
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-green-700 mb-2">Managing Stress for Better Health</h3>
                  <p className="text-gray-600 mb-4 flex-1">Learn effective strategies to manage stress and improve your overall well-being, including mindfulness and relaxation techniques.</p>
                  <a href="#" className="text-green-700 font-semibold hover:underline mt-auto">Read More</a>
                </div>
              </div>
              {/* Blog Post 3 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
                <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" alt="Exercise" className="h-48 w-full object-cover" />
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-green-700 mb-2">The Importance of Regular Exercise</h3>
                  <p className="text-gray-600 mb-4 flex-1">Explore the many benefits of physical activity and how to incorporate more movement into your daily routine.</p>
                  <a href="#" className="text-green-700 font-semibold hover:underline mt-auto">Read More</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Summary Section */}
          <motion.div className="mb-20 max-w-2xl mx-auto" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}>
            <div className="bg-green-50 rounded-xl shadow p-8 flex flex-col items-center">
              <h2 className="text-2xl font-bold text-green-800 mb-2">About MediCare Hospital</h2>
              <p className="text-gray-700 mb-4 text-center">MediCare Hospital is dedicated to providing compassionate, world-class healthcare to our community. Discover our mission, vision, and the values that guide us every day.</p>
              <a href="/about" className="inline-block bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-6 rounded-lg shadow transition-colors">Learn More</a>
            </div>
          </motion.div>

          <motion.div className="mt-24 bg-green-700 rounded-2xl shadow-xl py-12 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.6 }}>
            <div className="text-white flex-1">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Book an Appointment Today</h2>
              <p className="text-lg mb-6">
                Take the first step towards better health. Schedule a consultation with our expert team and experience the MediCare difference.
              </p>
              <a
                href="/book-appointment"
                className="inline-block bg-white text-green-700 font-bold px-8 py-3 rounded-lg shadow hover:bg-green-100 transition-colors text-lg"
              >
                Book Now
              </a>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=500&q=80"
                alt="Appointment"
                className="rounded-xl shadow-lg w-72 h-72 object-cover border-4 border-white"
              />
            </div>
          </motion.div>
        </motion.section>
        {/* Footer - moved outside main content for sticky effect */}
        <footer className="bg-green-700 text-green-100 py-10 px-4 shadow-inner">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">MediCare Hospital</h3>
              <p className="text-green-200">Compassionate, world-class healthcare for you and your family.</p>
              <p className="text-green-300 text-sm mt-2">&copy; {new Date().getFullYear()} MediCare Hospital. All rights reserved.</p>
            </div>
            <div className="mb-6 md:mb-0 text-center">
              <h4 className="font-semibold mb-2">Quick Links</h4>
              <ul className="space-y-1">
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="/about" className="hover:underline">About</a></li>
                <li><a href="/services" className="hover:underline">Services</a></li>
                <li><a href="/contact" className="hover:underline">Contact</a></li>
                <li><a href="/book-appointment" className="hover:underline">Book Appointment</a></li>
              </ul>
            </div>
            <div className="text-center md:text-right">
              <h4 className="font-semibold mb-2">Contact Us</h4>
              <p className="text-green-200">123 MediCare Avenue<br />Cityville, State 12345</p>
              <p className="text-green-200 mt-2">Phone: <a href="tel:+234 813 456 7890" className="underline">+234 813 456 7890</a></p>
              <p className="text-green-200">Email: <a href="mailto:info@medicare.com" className="underline">info@medicare.com</a></p>
            </div>
          </div>
        </footer>
      </div>
    );
}
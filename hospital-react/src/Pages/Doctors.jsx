import { useEffect, useState } from 'react';
import { doctors } from '../data/doctor';

export default function Doctors() {
  const [loading, setLoading] = useState(true);
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');

  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const specialties = ['All', ...new Set(doctors.map(doctor => doctor.specialty))];
  
  const filteredDoctors = selectedSpecialty === 'All' 
    ? doctors 
    : doctors.filter(doctor => doctor.specialty === selectedSpecialty);

  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-2 text-sm text-gray-600">{rating}</span>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Medical Specialists</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our team of experienced and dedicated healthcare professionals committed to providing exceptional care.
          </p>
        </div>

        {/* Specialty Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {specialties.map(specialty => (
            <button
              key={specialty}
              onClick={() => setSelectedSpecialty(specialty)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedSpecialty === specialty
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-green-50 border border-gray-200'
              }`}
            >
              {specialty}
            </button>
          ))}
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDoctors.map(doctor => (
              <div key={doctor.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {doctor.specialty}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-800">{doctor.name}</h3>
                    <StarRating rating={doctor.rating} />
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">{doctor.bio}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="font-medium w-20">Experience:</span>
                      <span>{doctor.experience}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="font-medium w-20">Education:</span>
                      <span>{doctor.education}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="font-medium w-20">Languages:</span>
                      <span>{doctor.languages.join(', ')}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="font-medium w-20">Patients:</span>
                      <span>{doctor.patients.toLocaleString()}+</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                      Book Appointment
                    </button>
                    <button className="px-4 py-2 border border-green-600 text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {filteredDoctors.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No doctors found for the selected specialty.</p>
          </div>
        )}
      </div>
    </div>
  );
}
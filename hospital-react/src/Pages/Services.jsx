import { useEffect, useState } from 'react';
import { services } from '../data/doctor'; // Import from the same data file

export default function Services() {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const servicesToShow = showAll ? filteredServices : filteredServices.slice(0, 6);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Medical Services</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare services delivered with compassion, expertise, and cutting-edge technology.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="w-full md:w-96">
            <div className="relative">
              <input
                type="text"
                placeholder="Search services..."
                className="w-full px-6 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg transition-colors"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <div className="text-sm text-gray-500">
            {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-600"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesToShow.length > 0 ? (
                servicesToShow.map(service => (
                  <div 
                    key={service.id} 
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                  >
                    <div className="p-8 flex flex-col h-full">
                      <div className="flex items-center mb-6">
                        <div className="text-4xl mr-4">{service.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-800 mb-2">{service.name}</h3>
                          <div className="w-12 h-1 bg-green-600 rounded-full"></div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-base leading-relaxed mb-6 flex-1">
                        {service.description}
                      </p>
                      
                      <div className="flex gap-3">
                        <button className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-md hover:shadow-lg">
                          Learn More
                        </button>
                        <button className="px-4 py-3 border border-green-600 text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-16">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">No services found</h3>
                  <p className="text-gray-500">Try adjusting your search terms</p>
                </div>
              )}
            </div>
            
            {filteredServices.length > 6 && (
              <div className="flex justify-center mt-12">
                {!showAll ? (
                  <button
                    className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
                    onClick={() => setShowAll(true)}
                  >
                    <span>Show All Services</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <button
                    className="bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors flex items-center gap-2"
                    onClick={() => setShowAll(false)}
                  >
                    <span>Show Less</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </button>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
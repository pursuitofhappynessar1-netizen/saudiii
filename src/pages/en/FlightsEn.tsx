import React from 'react';
import { Plane, MapPin, Clock } from 'lucide-react';

const FlightsEn = () => {
  const airlines = [
    { name: 'Saudia', nameAr: 'الخطوط السعودية' },
    { name: 'Flyadeal', nameAr: 'طيران أديل' },
    { name: 'Flynas', nameAr: 'طيران ناس' },
    { name: 'Nile Air', nameAr: 'النيل' },
    { name: 'Air Arabia', nameAr: 'الشارقة' },
    { name: 'Air Arabia Egypt', nameAr: 'القاهرة' },
    { name: 'flydubai', nameAr: 'دبي' },
    { name: 'Jazeera Airways', nameAr: 'الكويت' },
    { name: 'Qatar Airways', nameAr: 'الدوحة' },
    { name: 'Turkish Airlines', nameAr: 'إسطنبول' }
  ];

  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 to-white min-h-screen" dir="ltr">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="mb-8">
            <img 
              src="/logo.png" 
              alt="Medical Tourism Association" 
              className="h-24 w-auto mx-auto mb-6 drop-shadow-lg logo-glow"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-darkBlue-800 mb-8">
            Flights
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Available airlines to reach Taif for the conference
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 animate-slide-up border-t-4 border-teal-500">
            <div className="flex items-center justify-center mb-8">
              <div className="p-4 bg-teal-50 rounded-xl">
                <Plane className="w-12 h-12 text-teal-600" />
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-darkBlue-800 mb-8 text-center">
              Available Airlines
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {airlines.map((airline, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-6 bg-gradient-to-r from-teal-50 to-purple-50 rounded-xl border border-teal-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      <Plane className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-darkBlue-800">
                        {airline.name}
                      </h3>
                      <p className="text-gray-600">
                        ({airline.nameAr})
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-teal-600" />
                  <h3 className="text-xl font-bold text-darkBlue-800">Taif Regional Airport</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Taif Regional Airport is located approximately 30 kilometers from the city center, offering regular flights to and from major cities in the Kingdom and the region.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-purple-600" />
                  <h3 className="text-xl font-bold text-darkBlue-800">Important Information</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  We recommend booking flights early to ensure the best prices and suitable schedules. It is also advisable to verify travel requirements and necessary documents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightsEn;
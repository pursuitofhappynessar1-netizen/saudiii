import React from 'react';
import { MapPin, Flower, Mountain, Calendar } from 'lucide-react';

interface PlaceholderPageEnProps {
  title: string;
  description?: string;
}

const PlaceholderPageEn: React.FC<PlaceholderPageEnProps> = ({ title, description }) => {
  // Special handling for "About Taif" page
  if (title === 'About Taif') {
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
              About Taif
            </h1>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 animate-slide-up border-t-4 border-teal-500">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                Taif is located in the heart of the Hijaz Mountains and is the largest governorate in the Makkah Region, ranking seventh in size across Saudi Arabia. Thanks to its unique geographic location and elevation above sea level, Taif enjoys a mild climate year-round, making it a favored local and regional tourist destination.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl shadow-xl p-8 animate-slide-up border-t-4 border-purple-500" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-purple-50 rounded-xl">
                    <Mountain className="w-8 h-8 text-purple-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-darkBlue-800">
                    A Perfect Summer Getaway
                  </h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Known as the "Bride of Summer Resorts," Taif offers cool, refreshing weather that attracts visitors seeking escape from the summer heat. The city is also a key transit point for pilgrims and Umrah performers traveling by land to Makkah from the east.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 animate-slide-up border-t-4 border-pink-500" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-pink-50 rounded-xl">
                    <Flower className="w-8 h-8 text-pink-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-darkBlue-800">
                    City of Roses
                  </h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Taif is also nicknamed the "City of Roses," with thousands of fragrant roses blooming across its valleys and mountains. In April each year, rose farms open their doors to visitors to witness the blooming season and enjoy a unique experience that includes:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Strolling through vibrant flower fields</li>
                  <li>• Learning about essential oil distillation methods</li>
                  <li>• Visiting perfume factories renowned globally for their quality and unique scents</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 animate-slide-up border-t-4 border-orange-500" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-orange-50 rounded-xl">
                  <Calendar className="w-8 h-8 text-orange-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-darkBlue-800">
                  Distinctive Events & Attractions
                </h2>
              </div>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <div>
                  <h3 className="font-bold text-darkBlue-800 mb-2">• Major Annual Festivals:</h3>
                  <p>A cultural showcase of Arab heritage, literature, and arts.</p>
                </div>
                <div>
                  <h3 className="font-bold text-darkBlue-800 mb-2">• Crown Prince Camel Festival:</h3>
                  <p>One of the largest and most prestigious camel racing events in the region, attracting participants from across the Gulf.</p>
                </div>
                <div>
                  <h3 className="font-bold text-darkBlue-800 mb-2">• Key Tourist Attractions:</h3>
                  <div className="pl-4 space-y-3">
                    <div>
                      <h4 className="font-semibold text-teal-600">◦ Al Hada Mountain:</h4>
                      <p>One of the Kingdom's most famous mountains, known for its panoramic views and cool climate.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-600">◦ Al Hada Cable Car:</h4>
                      <p>One of the longest cable car lines in the region, connecting to the Al Kar Tourist Village, which offers recreational facilities and family-friendly experiences.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 to-white min-h-screen" dir="ltr">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <img 
              src="/logo.png" 
              alt="Medical Tourism Association" 
              className="h-24 w-auto mx-auto mb-6 opacity-60 logo-glow"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-darkBlue-800 mb-8">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            {description || 'This page is under development. Content will be added soon.'}
          </p>
          <div className="bg-white rounded-2xl shadow-xl p-12 max-w-3xl mx-auto border-t-4 border-teal-500">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🚧</span>
            </div>
            <h2 className="text-3xl font-bold text-darkBlue-800 mb-6">Coming Soon</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              We are currently working on developing this page to provide the best user experience. 
              Please visit the page again soon to see the new content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderPageEn;
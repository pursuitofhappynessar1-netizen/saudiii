import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Stethoscope, Globe, Award, Heart } from 'lucide-react';

const HomeEn = () => {
  return (
    <div dir="ltr">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-600 via-purple-600 to-pink-600 text-white overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-32 h-32 border-2 border-white rounded-full animate-pulse-slow"></div>
          <div className="absolute top-40 left-32 w-24 h-24 border-2 border-white rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 right-40 w-20 h-20 border-2 border-white rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-40 left-20 w-28 h-28 border-2 border-white rounded-full animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center animate-fade-in">
            <div className="mb-8">
              <img 
                src="/logo.png" 
                alt="Medical Tourism Association" 
                className="h-32 w-auto mx-auto mb-8 drop-shadow-2xl logo-glow"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Annual Medical Tourism Conference
            </h1>
            <p className="text-xl md:text-3xl mb-12 opacity-90 leading-relaxed max-w-4xl mx-auto">
              Towards a Better Future for Medical Tourism in the Kingdom of Saudi Arabia
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
              <div className="flex items-center gap-2">
                <Calendar className="w-7 h-7 text-orange-300" />
                <span className="text-xl font-medium">6 - 8 September</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-7 h-7 text-orange-300" />
                <span className="text-xl font-medium">InterContinental Hotel - Taif</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-7 h-7 text-orange-300" />
                <span className="text-xl font-medium">Over 500 Participants</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/en/conference/register"
                className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-xl text-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/25"
              >
                Register Now
              </Link>
              <Link 
                to="/en/about/conference"
                className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-10 py-4 rounded-xl text-xl font-medium transition-all duration-300 shadow-2xl"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-darkBlue-800 mb-6">
              About Us
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The Medical Tourism Association is a leading organization aimed at developing the medical tourism sector and promoting sustainable development in the Kingdom of Saudi Arabia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                icon: <Stethoscope className="w-8 h-8" />,
                title: 'Our Vision',
                description: 'To be the leader in developing the medical tourism sector and promoting sustainable development',
                color: 'teal'
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: 'Our Mission',
                description: 'Empowering local communities through distinguished medical services and medical tourism',
                color: 'purple'
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Our Values',
                description: 'Transparency, responsibility, and excellence in all our medical and tourism activities',
                color: 'orange'
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: 'Our Impact',
                description: 'Serving over 10,000 beneficiaries throughout the Kingdom and the world',
                color: 'pink'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-slide-up transform hover:-translate-y-2 border-t-4 border-${feature.color}-500`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`text-${feature.color}-500 mb-6 p-3 bg-${feature.color}-50 rounded-xl w-fit`}>{feature.icon}</div>
                <h3 className="text-2xl font-bold text-darkBlue-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Quote Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-3 mb-12">
              <div className="bg-gradient-to-r from-teal-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-8 text-center border border-teal-200">
                <blockquote className="text-2xl md:text-3xl font-bold text-darkBlue-800 mb-4 leading-relaxed">
                  "Towards a bright future for medical tourism in the Kingdom"
                </blockquote>
                <p className="text-gray-600 text-lg">
                  Vision 2030 aims to make the Kingdom a leading global destination for medical tourism
                </p>
              </div>
            </div>

            <Link to="/en/conference" className="group">
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-8 rounded-2xl text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <Calendar className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-3">Conference</h3>
                <p className="opacity-90">Discover the conference program and distinguished speakers</p>
              </div>
            </Link>
            <Link to="/en/hospitality" className="group">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-8 rounded-2xl text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <Heart className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-3">Hospitality</h3>
                <p className="opacity-90">Accommodation and hospitality services for participants</p>
              </div>
            </Link>
            <Link to="/en/partners" className="group">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 rounded-2xl text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <Award className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-3">Partners</h3>
                <p className="opacity-90">Meet our partners and available opportunities</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Conference Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-darkBlue-800 mb-6">
              The Conference
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Join us in this exceptional event to exchange experiences and knowledge in the field of medical tourism
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {[
              { icon: <Calendar className="w-12 h-12" />, number: '3', label: 'Days', color: 'teal' },
              { icon: <Users className="w-12 h-12" />, number: '500+', label: 'Participants', color: 'purple' },
              { icon: <Award className="w-12 h-12" />, number: '25', label: 'Speakers', color: 'orange' },
              { icon: <Stethoscope className="w-12 h-12" />, number: '15', label: 'Sessions', color: 'pink' }
            ].map((stat, index) => (
              <div 
                key={index}
                className={`text-center p-8 bg-gradient-to-br from-${stat.color}-50 to-${stat.color}-100 rounded-2xl animate-slide-up transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`text-${stat.color}-600 mx-auto mb-4 p-3 bg-white rounded-xl shadow-sm`}>{stat.icon}</div>
                <h3 className="text-3xl font-bold text-darkBlue-800 mb-2">{stat.number}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/en/conference"
              className="bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 text-white px-12 py-4 rounded-xl text-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-teal-500/25"
            >
              Discover More About the Conference
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeEn;
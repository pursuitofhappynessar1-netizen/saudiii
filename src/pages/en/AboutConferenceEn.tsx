import React from 'react';
import { Calendar, MapPin, Users, Award, Globe, Stethoscope } from 'lucide-react';

const AboutConferenceEn = () => {
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
            About the Conference
          </h1>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 animate-slide-up border-t-4 border-teal-500">
            <h2 className="text-3xl md:text-4xl font-bold text-darkBlue-800 mb-8 text-center">
              Taif Medical Tourism Conference 2024
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
              The Taif Medical Tourism Conference 2024 is a premier event bringing together healthcare providers, tourism experts, policymakers, investors, and innovators to explore the growing opportunities in medical and wellness tourism in Saudi Arabia. Hosted in the city of Taif, known for its unique climate, natural beauty, and advanced healthcare facilities, the conference will feature keynote speeches, panel discussions, and networking sessions aimed at fostering partnerships and advancing the Kingdom's position as a leading medical tourism destination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Stethoscope className="w-8 h-8" />,
                title: 'Healthcare Providers',
                description: 'Elite medical and healthcare service providers',
                color: 'teal'
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: 'Tourism Experts',
                description: 'Specialists in medical tourism and wellness',
                color: 'purple'
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Policymakers',
                description: 'Leaders and decision-makers in healthcare and tourism',
                color: 'orange'
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Investors',
                description: 'Investors interested in the medical tourism sector',
                color: 'pink'
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: 'Innovators',
                description: 'Entrepreneurs and innovators in healthcare',
                color: 'teal'
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: 'City of Taif',
                description: 'Ideal location with unique climate and advanced infrastructure',
                color: 'purple'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-slide-up transform hover:-translate-y-2 border-t-4 border-${feature.color}-500`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`text-${feature.color}-500 mb-6 p-3 bg-${feature.color}-50 rounded-xl w-fit`}>{feature.icon}</div>
                <h3 className="text-xl font-bold text-darkBlue-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in">
            <h3 className="text-3xl font-bold text-darkBlue-800 mb-6 text-center">Conference Objectives</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6">
                <h4 className="text-xl font-bold text-teal-800 mb-3">Fostering Partnerships</h4>
                <p className="text-gray-700 leading-relaxed">
                  Building strategic partnerships between various stakeholders in the medical tourism sector
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                <h4 className="text-xl font-bold text-purple-800 mb-3">Advancing the Kingdom's Position</h4>
                <p className="text-gray-700 leading-relaxed">
                  Enhancing Saudi Arabia's position as a leading destination in medical tourism
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutConferenceEn;
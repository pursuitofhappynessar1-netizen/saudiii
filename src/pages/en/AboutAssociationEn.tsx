import React from 'react';
import { Stethoscope, Heart, Award, Globe, Users, MapPin } from 'lucide-react';

const AboutAssociationEn = () => {
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
            About the Association
          </h1>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          {/* Introduction Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 animate-slide-up border-t-4 border-teal-500">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
              The Medical Tourism Cooperative Association is a specialized Saudi entity that aims, among its objectives, to attract patients from outside the Kingdom of Saudi Arabia to receive treatment in leading hospitals and medical centers within the Kingdom.
            </p>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              We believe that healthcare is not just treatment, but a comprehensive experience that begins from the moment of contact and ends with safe recovery and good memories.
            </p>
          </div>

          {/* Services Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 animate-slide-up border-t-4 border-purple-500" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-darkBlue-800 mb-8 text-center">
              What Do We Offer?
            </h2>
            
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-purple-600 mb-6">
                We provide a comprehensive therapeutic experience that includes:
              </h3>
            </div>

            <div className="space-y-8">
              {/* Medical Services Coordination */}
              <div className="flex items-start gap-6 p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl">
                <div className="flex-shrink-0 p-3 bg-teal-500 rounded-xl">
                  <Stethoscope className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-darkBlue-800 mb-3">
                    Medical Services Coordination:
                  </h4>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Selecting appropriate medical facilities and treatment centers according to the patient's condition and health needs.
                  </p>
                </div>
              </div>

              {/* Logistics Services */}
              <div className="flex items-start gap-6 p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                <div className="flex-shrink-0 p-3 bg-purple-500 rounded-xl">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-darkBlue-800 mb-3">
                    Logistics Services:
                  </h4>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Organizing travel procedures, reception, transportation, and accommodation throughout the treatment period.
                  </p>
                </div>
              </div>

              {/* Recovery Programs */}
              <div className="flex items-start gap-6 p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
                <div className="flex-shrink-0 p-3 bg-orange-500 rounded-xl">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-darkBlue-800 mb-3">
                    Recovery Programs:
                  </h4>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Designing programs that help accelerate physical and psychological recovery after treatment, in supportive healthy and natural environments.
                  </p>
                </div>
              </div>

              {/* Tourism Programs */}
              <div className="flex items-start gap-6 p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl">
                <div className="flex-shrink-0 p-3 bg-pink-500 rounded-xl">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-darkBlue-800 mb-3">
                    Accompanying Tourism Trips:
                  </h4>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Providing carefully designed tourism packages that allow patients and their companions to explore the Kingdom's landmarks and enjoy a unique cultural experience.
                  </p>
                </div>
              </div>

              {/* Personal Support */}
              <div className="flex items-start gap-6 p-6 bg-gradient-to-br from-teal-50 to-purple-50 rounded-xl">
                <div className="flex-shrink-0 p-3 bg-gradient-to-r from-teal-500 to-purple-500 rounded-xl">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-darkBlue-800 mb-3">
                    Personal Support and Follow-up:
                  </h4>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Providing companions and translators to ensure patient comfort and ease of communication, with precise follow-up from the medical team throughout the treatment period.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 animate-fade-in">
            <div className="bg-gradient-to-r from-teal-500 via-purple-500 to-pink-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                We Are Here to Serve You
              </h3>
              <p className="text-lg md:text-xl opacity-90 leading-relaxed">
                Contact us for a distinguished therapeutic experience that combines the best medical services with authentic Saudi hospitality
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAssociationEn;
import React from 'react';
import { Stethoscope, Heart, Award, Globe } from 'lucide-react';

const AboutEn = () => {
  return (
    <div className="py-20 bg-gray-50" dir="ltr">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Us
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            The Medical Tourism Association is a leading organization aimed at developing the medical tourism sector and promoting sustainable development in the Kingdom of Saudi Arabia
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-slide-up">
            <img 
              src="/logo.png" 
              alt="Medical Tourism Association" 
              className="w-full max-w-md mx-auto h-auto object-contain logo-glow"
            />
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission and Vision</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The Medical Tourism Association was established with the aim of developing and enhancing the medical tourism sector in the Kingdom of Saudi Arabia, by providing the highest quality standards in medical and tourism services.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We strive to make the Kingdom a leading global destination in the field of medical tourism, by leveraging advanced medical capabilities and unique tourist sites.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We work to build strategic partnerships with medical and tourism institutions to ensure the provision of integrated and distinguished services for patients and visitors from all over the world.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: <Stethoscope className="w-12 h-12" />,
              title: 'Our Vision',
              description: 'To be the leader in developing the medical tourism sector and promoting sustainable development in the Kingdom'
            },
            {
              icon: <Heart className="w-12 h-12" />,
              title: 'Our Mission',
              description: 'Empowering local communities through distinguished medical services and advanced medical tourism'
            },
            {
              icon: <Award className="w-12 h-12" />,
              title: 'Our Values',
              description: 'Transparency, responsibility, excellence, and innovation in all our medical and tourism activities'
            },
            {
              icon: <Globe className="w-12 h-12" />,
              title: 'Our Impact',
              description: 'Serving over 10,000 beneficiaries annually from throughout the Kingdom and the world'
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-teal-500 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 animate-fade-in">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Strategic Objectives</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-teal-600 mb-3">Development and Innovation</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Developing quality standards in medical services</li>
                <li>• Investing in advanced medical technologies</li>
                <li>• Developing specialized training programs</li>
                <li>• Supporting scientific research in the medical field</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-teal-600 mb-3">Partnerships and Cooperation</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Building partnerships with global medical institutions</li>
                <li>• Collaborating with the tourism sector</li>
                <li>• Developing medical exchange programs</li>
                <li>• Supporting community health initiatives</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutEn;
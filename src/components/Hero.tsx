import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border-2 border-white rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            المؤتمر السنوي للجمعية التعاونية
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            نحو تعاون أفضل وتنمية مستدامة للمجتمع السعودي
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <Calendar className="w-6 h-6 text-accent-300" />
              <span className="text-lg">6 - 8 سبتمبر</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-6 h-6 text-accent-300" />
              <span className="text-lg">فندق انتركونتيننتال - الطائف</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6 text-accent-300" />
              <span className="text-lg">أكثر من 500 مشارك</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-200 transform hover:scale-105">
              سجل الآن
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg text-lg font-medium transition-all duration-200">
              تعرف على المزيد
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
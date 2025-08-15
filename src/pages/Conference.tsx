import React from 'react';
import { Calendar, Users, Award, Clock, MapPin, Stethoscope, Globe } from 'lucide-react';

const Conference = () => {
  const speakers = [
    { name: "Viana Hassan", nameAr: "فيانا حسن" },
    { name: "Mohammed Aldukhaini", nameAr: "محمد الدخيني" },
    { name: "Mohammed Aldar", nameAr: "محمد الدار" },
    { name: "Abdelghani Rozy", nameAr: "عبدالغني روزي" },
    { name: "Sultan Alsaadoon", nameAr: "سلطان السعدون" },
    { name: "Talal Almaliki", nameAr: "طلال المالكي" },
    { name: "HRH Prince Saud Bin Nahar", nameAr: "سمو الأمير سعود بن نهار" },
    { name: "Christoph Weigel", nameAr: "كريستوف ويجل" },
    { name: "Mohammed Aljahani", nameAr: "محمد الجهني" },
    { name: "Laszlo Puczko", nameAr: "لازلو بوتسكو" },
    { name: "Talal Althumali", nameAr: "طلال الثمالي" },
    { name: "Ahmed Moshli", nameAr: "أحمد مسحلي" },
    { name: "Christian Fadi El-khouri", nameAr: "كريستيان فادي الخوري" },
    { name: "Prem Jagyasi", nameAr: "بريم جاجياسي" },
    { name: "Dr. Awad Alomari", nameAr: "د. عوض العمري" },
    { name: "Dorit von der Osten", nameAr: "دوريت فون دير أوستن" }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            المؤتمر السنوي للسياحة العلاجية
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            انضم إلينا في هذا الحدث الاستثنائي لتبادل الخبرات والمعرفة في مجال السياحة العلاجية
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-6 h-6 text-secondary-600" />
              <span className="text-lg font-medium">6 - 8 سبتمبر</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-6 h-6 text-secondary-600" />
              <span className="text-lg font-medium">فندق انتركونتيننتال - الطائف</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6 text-secondary-600" />
              <span className="text-lg font-medium">أكثر من 500 مشارك</span>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl animate-slide-up shadow-lg">
            <Users className="w-12 h-12 text-teal-600 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-darkBlue-800 mb-2">16</h3>
            <p className="text-gray-600 font-medium">متحدث مميز</p>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl animate-slide-up shadow-lg" style={{ animationDelay: '0.1s' }}>
            <Globe className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-darkBlue-800 mb-2">8</h3>
            <p className="text-gray-600 font-medium">دولة مختلفة</p>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl animate-slide-up shadow-lg" style={{ animationDelay: '0.2s' }}>
            <Award className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-darkBlue-800 mb-2">25+</h3>
            <p className="text-gray-600 font-medium">سنة خبرة متراكمة</p>
          </div>
        </div>

        {/* Speakers Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-darkBlue-800 text-center mb-12">المتحدثون المميزون</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up border-t-4 border-teal-500"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="p-6 text-center">
                  <div className="mb-4">
                    <img 
                      src="/logo.png" 
                      alt={speaker.name}
                      className="h-16 w-auto mx-auto opacity-60 drop-shadow-sm"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-darkBlue-800 mb-2 leading-tight">
                    {speaker.name}
                  </h3>
                  <p className="text-teal-600 font-medium text-base">
                    {speaker.nameAr}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conference;
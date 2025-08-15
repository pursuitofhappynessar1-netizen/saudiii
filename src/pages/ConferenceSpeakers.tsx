import React from 'react';
import { Users, Globe, Award } from 'lucide-react';

const ConferenceSpeakers = () => {
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
    <div className="py-24 bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="mb-8">
            <img 
              src="/logo.png" 
              alt="جمعية السياحة العلاجية" 
              className="h-24 w-auto mx-auto mb-6 drop-shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-darkBlue-800 mb-8">
            المتحدثون
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            نخبة من الخبراء والمتخصصين في مجال السياحة العلاجية من جميع أنحاء العالم
          </p>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

        {/* Additional Information */}
        <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-darkBlue-800 mb-4">عن المتحدثين</h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              يضم المؤتمر نخبة من الخبراء والمتخصصين في مجال السياحة العلاجية من المملكة العربية السعودية ومختلف دول العالم
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6">
              <h4 className="text-xl font-bold text-teal-800 mb-3">الخبرة المحلية</h4>
              <p className="text-gray-700 leading-relaxed">
                متحدثون من المملكة العربية السعودية يتمتعون بخبرة واسعة في تطوير قطاع السياحة العلاجية محلياً
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
              <h4 className="text-xl font-bold text-purple-800 mb-3">الخبرة الدولية</h4>
              <p className="text-gray-700 leading-relaxed">
                خبراء دوليون من مختلف القارات يشاركون تجاربهم الناجحة في مجال السياحة العلاجية
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConferenceSpeakers;
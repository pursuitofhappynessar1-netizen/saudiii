import React from 'react';
import { Calendar, MapPin, Users, Award, Globe, Stethoscope } from 'lucide-react';

const AboutConference = () => {
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
            عن المؤتمر
          </h1>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 animate-slide-up border-t-4 border-teal-500">
            <h2 className="text-3xl md:text-4xl font-bold text-darkBlue-800 mb-8 text-center">
              مؤتمر السياحة العلاجية بالطائف 2024
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
              يُعد مؤتمر السياحة العلاجية بالطائف 2024 منصة رائدة تجمع نخبة من مقدمي الرعاية الصحية، وخبراء السياحة، وصناع القرار، والمستثمرين، والمبتكرين، لمناقشة الفرص المتنامية في مجال السياحة العلاجية وسياحة العافية في المملكة العربية السعودية. يُقام المؤتمر في مدينة الطائف، المعروفة بمناخها الفريد وجمالها الطبيعي وبنيتها التحتية الصحية المتطورة، ويتضمن البرنامج كلمات رئيسية، وحلقات نقاش، وجلسات تواصل تهدف إلى تعزيز الشراكات ودعم مكانة المملكة كوجهة رائدة في مجال السياحة العلاجية.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Stethoscope className="w-8 h-8" />,
                title: 'مقدمو الرعاية الصحية',
                description: 'نخبة من أفضل مقدمي الخدمات الطبية والصحية',
                color: 'teal'
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: 'خبراء السياحة',
                description: 'متخصصون في مجال السياحة العلاجية والعافية',
                color: 'purple'
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'صناع القرار',
                description: 'قادة وصناع قرار في القطاع الصحي والسياحي',
                color: 'orange'
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: 'المستثمرون',
                description: 'مستثمرون مهتمون بقطاع السياحة العلاجية',
                color: 'pink'
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: 'المبتكرون',
                description: 'رواد أعمال ومبتكرون في المجال الصحي',
                color: 'teal'
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: 'مدينة الطائف',
                description: 'موقع مثالي بمناخ فريد وبنية تحتية متطورة',
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
            <h3 className="text-3xl font-bold text-darkBlue-800 mb-6 text-center">أهداف المؤتمر</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6">
                <h4 className="text-xl font-bold text-teal-800 mb-3">تعزيز الشراكات</h4>
                <p className="text-gray-700 leading-relaxed">
                  بناء شراكات استراتيجية بين مختلف أصحاب المصلحة في قطاع السياحة العلاجية
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                <h4 className="text-xl font-bold text-purple-800 mb-3">دعم مكانة المملكة</h4>
                <p className="text-gray-700 leading-relaxed">
                  تعزيز مكانة المملكة العربية السعودية كوجهة رائدة في مجال السياحة العلاجية
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutConference;
import React from 'react';
import { Stethoscope, Heart, Award, Globe, Users, MapPin } from 'lucide-react';

const AboutAssociation = () => {
  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="mb-8">
            <img 
              src="/Screenshot 2025-07-09 at 2.52.06 AM.png" 
              alt="جمعية السياحة العلاجية" 
              className="h-24 w-auto mx-auto mb-6 drop-shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-darkBlue-800 mb-8">
            عن الجمعية
          </h1>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          {/* Introduction Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 animate-slide-up border-t-4 border-teal-500">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
              الجمعية التعاونية للسياحة العلاجية هي جهة سعودية متخصصة تهدف من ضمن أهدافها إلى جذب المرضى من خارج المملكة العربية السعودية لتلقي العلاج في المستشفيات والمراكز الطبية الرائدة داخل المملكة.
            </p>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              نؤمن بأن الرعاية الصحية ليست مجرد علاج، بل تجربة متكاملة تبدأ من لحظة التواصل وتنتهي بتعافٍ آمن وذكريات طيبة.
            </p>
          </div>

          {/* Services Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 animate-slide-up border-t-4 border-purple-500" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-darkBlue-800 mb-8 text-center">
              ما الذي نقدمه؟
            </h2>
            
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-purple-600 mb-6">
                نُقدم تجربة علاجية متكاملة تشمل:
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
                    تنسيق الخدمات الطبية:
                  </h4>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    اختيار المنشآت والمراكز العلاجية المناسبة حسب حالة المريض واحتياجاته الصحية.
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
                    الخدمات اللوجستية:
                  </h4>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    تنظيم إجراءات السفر، الاستقبال، النقل، والإقامة طوال فترة العلاج.
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
                    برامج استشفائية:
                  </h4>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    تصميم برامج تساعد على تسريع التعافي الجسدي والنفسي بعد العلاج، في بيئات صحية وطبيعية داعمة.
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
                    رحلات سياحية مرافقة:
                  </h4>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    توفير باقات سياحية مصممة بعناية تتيح للمريض ومرافقيه استكشاف معالم المملكة والاستمتاع بتجربة ثقافية فريدة.
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
                    دعم ومتابعة شخصية:
                  </h4>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    توفير مرافقين ومترجمين لضمان راحة المريض وسهولة التواصل، مع متابعة دقيقة من الفريق الطبي طوال فترة العلاج.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 animate-fade-in">
            <div className="bg-gradient-to-r from-teal-500 via-purple-500 to-pink-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                نحن هنا لخدمتكم
              </h3>
              <p className="text-lg md:text-xl opacity-90 leading-relaxed">
                تواصلوا معنا لتجربة علاجية متميزة تجمع بين أفضل الخدمات الطبية والضيافة السعودية الأصيلة
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAssociation;
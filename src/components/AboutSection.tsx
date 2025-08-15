import React from 'react';
import { Target, Users, Award, Globe } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'رؤيتنا',
      description: 'أن نكون الرائدة في تطوير القطاع التعاوني وتعزيز التنمية المستدامة'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'رسالتنا',
      description: 'تمكين المجتمعات المحلية من خلال التعاون والشراكة الفعالة'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'قيمنا',
      description: 'الشفافية والمسؤولية والتميز في جميع أعمالنا'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'تأثيرنا',
      description: 'خدمة أكثر من 10,000 عضو في جميع أنحاء المملكة'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            من نحن
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            الجمعية التعاونية السعودية هي منظمة رائدة تهدف إلى تطوير القطاع التعاوني وتعزيز التنمية المستدامة في المملكة العربية السعودية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary-500 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-md p-8 animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">عن المؤتمر</h3>
              <p className="text-gray-600 mb-4">
                يعد المؤتمر السنوي للجمعية التعاونية السعودية أحد أهم الفعاليات في القطاع التعاوني، حيث يجمع الخبراء والمختصين من جميع أنحاء المملكة والعالم لمناقشة أحدث التطورات والتحديات في مجال التعاون.
              </p>
              <p className="text-gray-600">
                يركز المؤتمر على تبادل الخبرات والمعرفة، وتطوير الحلول المبتكرة للتحديات الحالية والمستقبلية في القطاع التعاوني.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-primary-800 mb-3">إحصائيات المؤتمر</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-primary-700">عدد المشاركين:</span>
                  <span className="font-bold text-primary-800">500+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary-700">عدد المتحدثين:</span>
                  <span className="font-bold text-primary-800">25</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary-700">عدد الجلسات:</span>
                  <span className="font-bold text-primary-800">15</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary-700">عدد ورش العمل:</span>
                  <span className="font-bold text-primary-800">8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
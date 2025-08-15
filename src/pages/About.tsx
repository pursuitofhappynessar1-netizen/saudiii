import React from 'react';
import { Stethoscope, Heart, Award, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            من نحن
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            جمعية السياحة العلاجية هي منظمة رائدة تهدف إلى تطوير قطاع السياحة العلاجية وتعزيز التنمية المستدامة في المملكة العربية السعودية
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-slide-up">
            <img 
              src="/logo.png" 
              alt="جمعية السياحة العلاجية" 
              className="w-full max-w-md mx-auto h-auto object-contain"
            />
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">رسالتنا ورؤيتنا</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              تأسست جمعية السياحة العلاجية بهدف تطوير وتعزيز قطاع السياحة العلاجية في المملكة العربية السعودية، وذلك من خلال توفير أعلى معايير الجودة في الخدمات الطبية والسياحية.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              نسعى إلى جعل المملكة وجهة عالمية رائدة في مجال السياحة العلاجية، من خلال الاستفادة من الإمكانيات الطبية المتقدمة والمواقع السياحية الفريدة.
            </p>
            <p className="text-gray-600 leading-relaxed">
              نعمل على بناء شراكات استراتيجية مع المؤسسات الطبية والسياحية لضمان تقديم خدمات متكاملة ومتميزة للمرضى والزوار من جميع أنحاء العالم.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: <Stethoscope className="w-12 h-12" />,
              title: 'رؤيتنا',
              description: 'أن نكون الرائدة في تطوير قطاع السياحة العلاجية وتعزيز التنمية المستدامة في المملكة'
            },
            {
              icon: <Heart className="w-12 h-12" />,
              title: 'رسالتنا',
              description: 'تمكين المجتمعات المحلية من خلال الخدمات الطبية المتميزة والسياحة العلاجية المتطورة'
            },
            {
              icon: <Award className="w-12 h-12" />,
              title: 'قيمنا',
              description: 'الشفافية والمسؤولية والتميز والابتكار في جميع أعمالنا الطبية والسياحية'
            },
            {
              icon: <Globe className="w-12 h-12" />,
              title: 'تأثيرنا',
              description: 'خدمة أكثر من 10,000 مستفيد سنوياً من جميع أنحاء المملكة والعالم'
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-secondary-500 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 animate-fade-in">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">أهدافنا الاستراتيجية</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-secondary-600 mb-3">التطوير والابتكار</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• تطوير معايير الجودة في الخدمات الطبية</li>
                <li>• الاستثمار في التقنيات الطبية المتقدمة</li>
                <li>• تطوير البرامج التدريبية المتخصصة</li>
                <li>• دعم البحث العلمي في المجال الطبي</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-secondary-600 mb-3">الشراكات والتعاون</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• بناء شراكات مع المؤسسات الطبية العالمية</li>
                <li>• التعاون مع القطاع السياحي</li>
                <li>• تطوير برامج التبادل الطبي</li>
                <li>• دعم المبادرات المجتمعية الصحية</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
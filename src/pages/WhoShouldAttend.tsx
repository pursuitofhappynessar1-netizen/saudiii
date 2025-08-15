import React from 'react';
import { Users, Target, Building, GraduationCap, Briefcase, Stethoscope, Plane, Shield, Heart, Globe } from 'lucide-react';

const WhoShouldAttend = () => {
  const targetAudiences = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: 'مقدمو الرعاية الصحية',
      description: 'فرصة فريدة لعرض خبراتهم الطبية وإبراز مكانتهم كمبتكرين ضمن سوق عالمي متنامٍ للرعاية الصحية العلاجية. من خلال المشاركة في الحوارات والندوات، يمكنهم توسيع شبكة علاقاتهم مع صناع القرار، وعقد شراكات استراتيجية تدعم نموهم وانتشارهم دوليًا.',
      color: 'teal'
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: 'وكالات السفر المتخصصة في السياحة العلاجية',
      description: 'تمكينهم من بناء علاقات وثيقة مع أبرز مزودي خدمات السياحة العلاجية، لتطوير باقات مبتكرة تمثل ميزة تنافسية حقيقية. كما تتيح لهم الفعالية التواصل مع ممثلي الحكومات وقادة القطاع للاطلاع على السياسات المستقبلية والاتجاهات المؤثرة.',
      color: 'purple'
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'الممارسون والمؤسسات الطبية',
      description: 'منصة مثالية للظهور العالمي من خلال عرض خدماتهم أمام جمهور يشمل وكالات السفر المتخصصة والحكومات. كما يمكنهم عقد شراكات مع منتجعات ومراكز صحية فاخرة، للوصول إلى شريحة السياحة الراقية المهتمة بالعلاج الفاخر.',
      color: 'orange'
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'الجامعات والمؤسسات التعليمية',
      description: 'فرصة لتوسيع نطاق التعاون الأكاديمي عبر شراكات محلية ودولية تدعم البحث العلمي في مجال السياحة العلاجية. كما تسهّل بناء علاقات مع باحثين ومستثمرين مهتمين بالدراسات السريرية.',
      color: 'pink'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'ممثلو الجهات الحكومية',
      description: 'مساحة للحوار مع أصحاب المصلحة لمناقشة تطوير البنية التحتية للسياحة العلاجية من خلال الشراكة بين القطاعين العام والخاص. تتيح الفعالية مواءمة السياسات مع تطورات السوق العالمي.',
      color: 'teal'
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'المستثمرون ورواد الأعمال في قطاع الرعاية الصحية',
      description: 'تمكينهم من الدخول إلى قطاع سريع النمو عبر التعرف على فرص استثمارية واعدة. كما توفر الفعالية فرصة للتواصل مع قادة القطاع وتحديد نقاط الدخول الاستراتيجية إلى السوق.',
      color: 'purple'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'الشركات الناشئة وشركات التقنية',
      description: 'منصة لعرض حلولهم الصحية الرقمية المبتكرة مثل الطب عن بعد والذكاء الاصطناعي. يمكنهم التواصل مع مزودي الرعاية ووكالات السفر لعقد شراكات استراتيجية تعزز التحول الرقمي في الرعاية الصحية.',
      color: 'orange'
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: 'وكالات السفر المتخصصة في السياحة العلاجية',
      description: 'فرصة لبناء تحالفات استراتيجية مع مزودي الخدمات الطبية لتصميم باقات مخصصة تلبي الطلب العالمي. كما تُمكّنهم من فهم التوجهات والسياسات الداعمة لهذا القطاع المتنامي.',
      color: 'pink'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'مزودو الخدمات المساندة للسياحة العلاجية',
      description: 'مثل شركات النقل، الضيافة، التغذية العلاجية وغيرها، يمكنهم الاستفادة من الفعالية لتسويق خدماتهم وتشكيل شراكات مع شركات التأمين ووكالات السفر لتقديم تجربة مريض شاملة ومتكاملة.',
      color: 'teal'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'منتجعات الصحة والعافية',
      description: 'الحضور يمنحهم فرصة لبناء شراكات مع منشآت وشركات السياحة العلاجية، وتطوير برامج علاجية تدمج بين الرفاهية والممارسات التقليدية، ما يفتح لهم آفاق جديدة في الأسواق الدولية.',
      color: 'purple'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'شركات التأمين الدولية والمحلية',
      description: 'اكتشاف فرص لتوسيع نطاق تغطياتهم لتشمل خدمات السياحة العلاجية، وبناء باقات تأمينية متخصصة بالتعاون مع مقدمي الرعاية ووكالات السفر، مما يعزز مكانتهم كرُوّاد في التأمين الصحي الشامل.',
      color: 'orange'
    }
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
            الفئات المستهدفة
          </h1>
        </div>

        <div className="space-y-8">
          {targetAudiences.map((audience, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-xl p-8 animate-slide-up border-t-4 border-${audience.color}-500 hover:shadow-2xl transition-all duration-300`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className={`flex-shrink-0 p-4 bg-${audience.color}-50 rounded-xl`}>
                  <div className={`text-${audience.color}-600`}>{audience.icon}</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-darkBlue-800 mb-4">
                    {index + 1}. {audience.title}:
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoShouldAttend;
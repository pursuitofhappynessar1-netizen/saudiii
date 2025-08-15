import React from 'react';
import { Clock, Calendar, Users, Award } from 'lucide-react';

const ConferenceSection = () => {
  const speakers = [
    {
      name: 'د. أحمد العمري',
      title: 'خبير التعاون الدولي',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      topic: 'مستقبل التعاون في المملكة'
    },
    {
      name: 'أ. فاطمة الزهراني',
      title: 'مديرة التطوير المؤسسي',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      topic: 'الابتكار في القطاع التعاوني'
    },
    {
      name: 'د. محمد القحطاني',
      title: 'أستاذ الاقتصاد التعاوني',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      topic: 'التنمية المستدامة والتعاون'
    }
  ];

  const schedule = [
    {
      time: '09:00 - 10:00',
      title: 'التسجيل والترحيب',
      speaker: 'فريق التنظيم'
    },
    {
      time: '10:00 - 11:30',
      title: 'الجلسة الافتتاحية',
      speaker: 'د. أحمد العمري'
    },
    {
      time: '11:30 - 12:00',
      title: 'استراحة',
      speaker: ''
    },
    {
      time: '12:00 - 13:30',
      title: 'ورشة عمل: الابتكار في التعاون',
      speaker: 'أ. فاطمة الزهراني'
    }
  ];

  return (
    <section id="conference" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            المؤتمر
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            انضم إلينا في هذا الحدث الاستثنائي لتبادل الخبرات والمعرفة في مجال التعاون
          </p>
        </div>

        {/* Conference Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg animate-slide-up">
            <Calendar className="w-12 h-12 text-primary-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">3</h3>
            <p className="text-gray-600">أيام</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-lg animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <Users className="w-12 h-12 text-secondary-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">500+</h3>
            <p className="text-gray-600">مشارك</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-accent-50 to-accent-100 rounded-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Award className="w-12 h-12 text-accent-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">25</h3>
            <p className="text-gray-600">متحدث</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Clock className="w-12 h-12 text-primary-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">15</h3>
            <p className="text-gray-600">جلسة</p>
          </div>
        </div>

        {/* Speakers Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">المتحدثون المميزون</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{speaker.name}</h4>
                  <p className="text-primary-600 font-medium mb-2">{speaker.title}</p>
                  <p className="text-gray-600">{speaker.topic}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule Preview */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">برنامج اليوم الأول</h3>
          <div className="space-y-4">
            {schedule.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="text-primary-600 font-bold text-lg">{item.time}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    {item.speaker && <p className="text-gray-600">{item.speaker}</p>}
                  </div>
                </div>
                <div className="w-4 h-4 bg-primary-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceSection;
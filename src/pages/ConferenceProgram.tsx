import React from 'react';
import { Calendar, Clock, Users } from 'lucide-react';

const ConferenceProgram = () => {
  const programData = [
    {
      topicEn: "Therapeutic Economy: The Future of Health and Wellness Cities",
      topicAr: "الاقتصاد العلاجي: مستقبل مدن الصحة والعافية",
      speakers: "Viana Hassan (فيانا حسن), Mohammed Aldukhaini (محمد الدخيني)"
    },
    {
      topicEn: "Medical Tourism in the Kingdom: Opportunities and Challenges",
      topicAr: "السياحة العلاجية في المملكة: الفرص والتحديات",
      speakers: "Mohammed Aldar (محمد الدار), Abdelghani Rozy (عبدالغني روزي)"
    },
    {
      topicEn: "Digital Marketing Strategies for Medical Tourism",
      topicAr: "استراتيجيات التسويق الرقمي للسياحة العلاجية",
      speakers: "Sultan Alsaadoon (سلطان السعدون), Talal Almaliki (طلال المالكي)"
    },
    {
      topicEn: "Marketing Taif as a Global Medical Tourism Destination",
      topicAr: "تسويق الطائف كوجهة عالمية للسياحة العلاجية",
      speakers: "HRH Prince Saud Bin Nahar (سمو الأمير سعود بن نهار), Christoph Weigel (كريستوف ويجل)"
    },
    {
      topicEn: "Investment in Medical Tourism: Financial Opportunities and Risks",
      topicAr: "الاستثمار في السياحة العلاجية: الفرص والمخاطر المالية",
      speakers: "Mohammed Aljahani (محمد الجهني), Laszlo Puczko (لازلو بوتسكو)"
    },
    {
      topicEn: "Successful International Experiences in Medical Tourism: How Did They Succeed?",
      topicAr: "تجارب دولية ناجحة في السياحة العلاجية: كيف نجحوا؟",
      speakers: "Talal Althumali (طلال الثمالي), Ahmed Moshli (أحمد مسحلي)"
    },
    {
      topicEn: "What Makes a Destination Attractive to Medical Tourists?",
      topicAr: "ما الذي يجعل الوجهة جذابة للسياح العلاجيين؟",
      speakers: "Christian Fadi El-khouri (كريستيان فادي الخوري), Prem Jagyasi (بريم جاجياسي)"
    },
    {
      topicEn: "International Quality Standards and Licensing for Medical Centers",
      topicAr: "المعايير الدولية للجودة والترخيص للمراكز الطبية",
      speakers: "Dr. Awad Alomari (د. عوض العمري), Dorit von der Osten (دوريت فون دير أوستن)"
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
            برنامج المؤتمر
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            جدول أعمال المؤتمر السنوي للسياحة العلاجية مع المواضيع والمتحدثين المميزين
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-slide-up">
          <div className="bg-gradient-to-r from-teal-600 to-purple-600 p-6">
            <div className="flex items-center justify-center gap-8 text-white">
              <div className="flex items-center gap-2">
                <Calendar className="w-6 h-6" />
                <span className="text-lg font-medium">6 - 8 سبتمبر</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-6 h-6" />
                <span className="text-lg font-medium">3 أيام</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-6 h-6" />
                <span className="text-lg font-medium">8 جلسات</span>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-right text-sm font-bold text-darkBlue-800 uppercase tracking-wider border-b">
                    Topic (English)
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-bold text-darkBlue-800 uppercase tracking-wider border-b">
                    الموضوع (عربي)
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-bold text-darkBlue-800 uppercase tracking-wider border-b">
                    Speakers / المتحدثون
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {programData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 text-sm text-gray-900 border-b">
                      <div className="font-medium leading-relaxed">
                        {item.topicEn}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-b">
                      <div className="font-medium leading-relaxed">
                        {item.topicAr}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-b">
                      <div className="font-medium leading-relaxed text-teal-600">
                        {item.speakers}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-br from-teal-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-darkBlue-800 mb-4">معلومات إضافية</h3>
            <p className="text-gray-600 leading-relaxed">
              سيتم الإعلان عن المزيد من التفاصيل حول التوقيتات المحددة لكل جلسة قريباً. 
              يرجى متابعة الموقع للحصول على آخر التحديثات.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConferenceProgram;
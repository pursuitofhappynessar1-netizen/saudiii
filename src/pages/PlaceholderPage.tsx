import React from 'react';
import { MapPin, Flower, Mountain, Calendar } from 'lucide-react';

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title, description }) => {
  // Special handling for "عن الطائف" page
  if (title === 'عن الطائف') {
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
              عن الطائف
            </h1>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 animate-slide-up border-t-4 border-teal-500">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                تقع مدينة الطائف في قلب مرتفعات الحجاز، وتُعد أكبر محافظات منطقة مكة المكرمة، والسابعة على مستوى المملكة من حيث المساحة. بفضل موقعها الجغرافي الفريد وارتفاعها عن سطح البحر، تنعم الطائف بمناخ معتدل على مدار العام، ما يجعلها وجهة سياحية محلية وإقليمية مفضلة.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl shadow-xl p-8 animate-slide-up border-t-4 border-purple-500" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-purple-50 rounded-xl">
                    <Mountain className="w-8 h-8 text-purple-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-darkBlue-800">
                    وجهة صيفية بامتياز
                  </h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  تُعرف الطائف بلقب "عروس المصايف"، نظرًا لأجوائها الباردة والمنعشة التي تجذب الزوّار الباحثين عن ملاذ من حرارة الصيف. كما تشكل المدينة محطة مهمة للحجاج والمعتمرين القادمين برًّا إلى مكة المكرمة من جهة الشرق.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 animate-slide-up border-t-4 border-pink-500" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-pink-50 rounded-xl">
                    <Flower className="w-8 h-8 text-pink-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-darkBlue-800">
                    مدينة الورود
                  </h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  الطائف تُلقب أيضًا بـ"مدينة الورود"، حيث تنتشر آلاف الورود العطرية في وديانها وجبالها. وتفتح مزارع الورود أبوابها للزوار في شهر أبريل من كل عام، ليشهدوا موسم التفتح ويستمتعوا بتجربة فريدة تشمل:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• التجوّل بين الحقول الزاهية</li>
                  <li>• التعرف على طرق تقطير الزيوت العطرية</li>
                  <li>• زيارة مصانع العطور الشهيرة عالميًا بجودتها وعبيرها الفريد</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 animate-slide-up border-t-4 border-orange-500" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-orange-50 rounded-xl">
                  <Calendar className="w-8 h-8 text-orange-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-darkBlue-800">
                  فعاليات ومعالم مميزة
                </h2>
              </div>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <div>
                  <h3 className="font-bold text-darkBlue-800 mb-2">• مهرجانات سنوية بارزة:</h3>
                  <p>نافذة ثقافية عريقة تستعرض التراث العربي والأدب والفنون.</p>
                </div>
                <div>
                  <h3 className="font-bold text-darkBlue-800 mb-2">• مهرجان ولي العهد للهجن:</h3>
                  <p>من أكبر وأهم سباقات الهجن في المنطقة، ويجذب مشاركين من مختلف الدول الخليجية.</p>
                </div>
                <div>
                  <h3 className="font-bold text-darkBlue-800 mb-2">• أبرز المعالم السياحية:</h3>
                  <div className="pr-4 space-y-3">
                    <div>
                      <h4 className="font-semibold text-teal-600">◦ جبل الهدا:</h4>
                      <p>من أشهر جبال المملكة، ويتميز بإطلالاته البانورامية ومناخه البارد.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-600">◦ تلفريك الهدا:</h4>
                      <p>أحد أطول خطوط التلفريك في المنطقة، يمتد حتى قرية الكر السياحية، التي تضم مرافق ترفيهية وتجارب عائلية متنوعة.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <img 
              src="/logo.png" 
              alt="جمعية السياحة العلاجية" 
              className="h-24 w-auto mx-auto mb-6 opacity-60"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-darkBlue-800 mb-8">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            {description || 'هذه الصفحة قيد التطوير. سيتم إضافة المحتوى قريباً.'}
          </p>
          <div className="bg-white rounded-2xl shadow-xl p-12 max-w-3xl mx-auto border-t-4 border-teal-500">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🚧</span>
            </div>
            <h2 className="text-3xl font-bold text-darkBlue-800 mb-6">قريباً</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              نعمل حالياً على تطوير هذه الصفحة لتقديم أفضل تجربة للمستخدمين. 
              يرجى زيارة الصفحة مرة أخرى قريباً للاطلاع على المحتوى الجديد.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderPage;
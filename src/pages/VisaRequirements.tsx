import React from 'react';
import { FileText, Globe, Info } from 'lucide-react';

const VisaRequirements = () => {
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
            متطلبات التأشيرة
          </h1>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 animate-slide-up border-t-4 border-teal-500">
            <div className="flex items-center justify-center mb-8">
              <div className="p-4 bg-teal-50 rounded-xl">
                <FileText className="w-12 h-12 text-teal-600" />
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-darkBlue-800 mb-8 text-center">
              Visa Information – Taif Medical Tourism Conference
            </h2>

            <div className="bg-gradient-to-br from-teal-50 to-purple-50 rounded-xl p-8 mb-8">
              <div className="flex items-start gap-4">
                <Info className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-darkBlue-800 mb-4">
                    معلومات التأشيرة - مؤتمر السياحة العلاجية بالطائف
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    معلومات التأشيرة – مؤتمر السياحة العلاجية بالطائف
                    <br/><br/> 
                    جميع الحضور في مؤتمر السياحة العلاجية بالطائف – سواء من العارضين أو الزوار أو الرعاة أو المتحدثين – يحتاجون إلى الحصول على تأشيرة دخول إلى المملكة العربية السعودية. أدناه تجدون قائمة بأنواع التأشيرات المتاحة ومعلومات عن خطوات التقديم لكل منها:
                  <br/><br/>  <br/>              
تأشيرة الأعمال (Business Visa)<br/>
	•	مخصصة حصريًا لعارضي ورعاة مؤتمر السياحة العلاجية بالطائف.<br/>
	•	من المهم التقديم على تأشيرة الأعمال قبل السفر إلى المملكة.<br/> 
	•	للحصول على خطاب الدعوة الخاص بالتأشيرة، يرجى التواصل مع فريق خدمة العملاء للمؤتمر.<br/> 
	•	مواطنو دول مجلس التعاون الخليجي (الإمارات العربية المتحدة، البحرين، الكويت، عمان) لا يحتاجون إلى تأشيرة أعمال لدخول المملكة.
                    <br/>   <br/>              
التأشيرة السياحية الإلكترونية (Tourist eVisa)<br/> 
	•	جميع الزوار الدوليين من الدول المؤهلة يجب عليهم التقديم للحصول على تأشيرة سياحية إلكترونية قبل دخول المملكة.<br/> 
	•	التأشيرة السياحية الإلكترونية تكون صالحة لمدة سنة، متعددة الدخول، وتسمح بالبقاء في المملكة لمدة تصل إلى 90 يومًا في كل زيارة.<br/> 
	•	قد يستغرق قبول طلب التأشيرة حتى 72 ساعة، لذا ننصح بالتقديم مبكرًا لتفادي أي تأخير أو رفض محتمل.
                    <br/>  <br/>                
خطوات التقديم:<br/> 
	1.	ابدأ طلب التأشيرة السياحية الإلكترونية عبر البوابة الرسمية.<br/> 
	2.	أكمل نموذج الطلب، وستحتاج إلى إدخال معلوماتك الشخصية مثل:<br/>  (الاسم الكامل، العنوان، تاريخ الميلاد، بيانات جواز السفر، وخطط السفر)<br/> 
	3.	ادفع رسوم التأشيرة باستخدام بطاقة ائتمان أو بطاقة خصم مباشر.<br/> 
	4.	عند الموافقة، ستتلقى التأشيرة عبر البريد الإلكتروني.
                    <br/>
                    <br/><br/>
                    * سيتم التحقق من البيانات المدخلة في نموذج الطلب عبر عدة قواعد بيانات، لذلك من الضروري أن تتطابق بيانات جواز السفر المدخلة مع الجواز الذي ستسافر به، وإلا ستكون التأشيرة غير صالحة.
                    <br/><br/> 
                    ملاحظة: عند تعبئة خانة سبب الزيارة في نموذج التأشيرة الإلكترونية، يرجى كتابة:
                  <br/><br/> 
                    “زيارة مؤتمر السياحة العلاجية بالطائف 2024”
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-6 h-6 text-teal-600" />
                  <h3 className="text-xl font-bold text-darkBlue-800">للمشاركين الدوليين</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  يُرجى التواصل مع السفارة السعودية في بلدكم للحصول على معلومات محدثة حول متطلبات التأشيرة والوثائق المطلوبة.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-purple-600" />
                  <h3 className="text-xl font-bold text-darkBlue-800">الوثائق المطلوبة</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  تأكد من صحة جواز السفر وصلاحيته لمدة لا تقل عن 6 أشهر، بالإضافة إلى أي وثائق أخرى قد تكون مطلوبة حسب جنسيتك.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaRequirements;
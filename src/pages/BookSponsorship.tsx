import React, { useState } from 'react';
import { Building, User, Phone, FileText, CheckCircle } from 'lucide-react';

const BookSponsorship = () => {
  const [formData, setFormData] = useState({
    organizationName: '',
    contactPerson: '',
    phone: '',
    sponsorshipType: 'راعي ذهبي',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center animate-fade-in">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-800 mb-2">تم إرسال طلبك بنجاح!</h3>
            <p className="text-green-600">
              شكراً لاهتمامك برعاية المؤتمر. سيتواصل معك فريقنا قريباً لمناقشة التفاصيل.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            احجز رعايتك
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            كن جزءاً من هذا الحدث المهم وادعم مستقبل السياحة العلاجية في المملكة
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Sponsorship Packages */}
          <div className="animate-slide-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">باقات الرعاية</h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-accent-500 to-accent-600 p-6 rounded-lg text-white">
                <h4 className="text-xl font-bold mb-2">الراعي الذهبي</h4>
                <p className="mb-4">الحصول على أفضل الفرص الترويجية والتسويقية</p>
                <ul className="space-y-2 text-sm">
                  <li>• شعار كبير في جميع المواد الترويجية</li>
                  <li>• جناح مميز في المعرض</li>
                  <li>• فرصة إلقاء كلمة في الحفل</li>
                  <li>• 10 دعوات مجانية</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-gray-400 to-gray-500 p-6 rounded-lg text-white">
                <h4 className="text-xl font-bold mb-2">الراعي الفضي</h4>
                <p className="mb-4">رعاية مميزة بفوائد متنوعة</p>
                <ul className="space-y-2 text-sm">
                  <li>• شعار متوسط في المواد الترويجية</li>
                  <li>• جناح في المعرض</li>
                  <li>• 5 دعوات مجانية</li>
                  <li>• تغطية إعلامية</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-6 rounded-lg text-white">
                <h4 className="text-xl font-bold mb-2">الراعي البرونزي</h4>
                <p className="mb-4">بداية مميزة للشراكة معنا</p>
                <ul className="space-y-2 text-sm">
                  <li>• شعار في البرنامج</li>
                  <li>• مساحة في المعرض</li>
                  <li>• 3 دعوات مجانية</li>
                  <li>• شهادة تقدير</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sponsorship Form */}
          <div className="animate-slide-up">
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">طلب الرعاية</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    اسم المؤسسة *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="organizationName"
                      value={formData.organizationName}
                      onChange={handleChange}
                      required
                      className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-colors"
                      placeholder="اسم الشركة أو المؤسسة"
                    />
                    <Building className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    الشخص المسؤول *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      required
                      className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-colors"
                      placeholder="اسم الشخص المسؤول"
                    />
                    <User className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    رقم الهاتف *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-colors"
                      placeholder="05xxxxxxxx"
                    />
                    <Phone className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    نوع الرعاية *
                  </label>
                  <select
                    name="sponsorshipType"
                    value={formData.sponsorshipType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-colors"
                  >
                    <option value="راعي ذهبي">راعي ذهبي</option>
                    <option value="راعي فضي">راعي فضي</option>
                    <option value="راعي برونزي">راعي برونزي</option>
                    <option value="رعاية مخصصة">رعاية مخصصة</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ملاحظات إضافية
                  </label>
                  <div className="relative">
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={4}
                      className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-colors"
                      placeholder="أي ملاحظات أو متطلبات خاصة"
                    />
                    <FileText className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  إرسال طلب الرعاية
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSponsorship;
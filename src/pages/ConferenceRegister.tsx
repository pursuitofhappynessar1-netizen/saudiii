import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { User, Mail, Phone, Building, CheckCircle, Globe, MapPin } from 'lucide-react';

// Store recent submissions to prevent spam
const recentSubmissions = new Map<string, number>();

const ConferenceRegister = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    phone: '',
    organizationName: '',
    country: 'Saudi Arabia',
    city: '',
    specialization: '',
    gender: 'male',
    agreeTerms: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || 
        !formData.confirmEmail || !formData.phone || !formData.organizationName || 
        !formData.country || !formData.city || !formData.specialization || 
        !formData.agreeTerms) {
      setErrorMessage('يرجى تعبئة جميع الحقول المطلوبة');
      return;
    }
    
    // Validate email confirmation
    if (formData.email !== formData.confirmEmail) {
      setErrorMessage('البريد الإلكتروني وتأكيد البريد الإلكتروني غير متطابقين');
      return;
    }
    
    // Check for recent submissions
    const now = Date.now();
    const lastSubmission = recentSubmissions.get(formData.email);
    if (lastSubmission && (now - lastSubmission) < 2 * 60 * 1000) {
      setErrorMessage('لقد قمت بالتسجيل مؤخراً. يرجى الانتظار دقيقتين قبل المحاولة مرة أخرى.');
      return;
    }
    
    setIsSubmitting(true);
    setErrorMessage('');
    
    if (form.current) {
      emailjs.sendForm('service_rm72jgw', 'template_xmf2egq', form.current)
        .then(() => {
          // Store submission time
          recentSubmissions.set(formData.email, now);
          setSubmitted(true);
          // Reset form
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            confirmEmail: '',
            phone: '',
            organizationName: '',
            country: 'Saudi Arabia',
            city: '',
            specialization: '',
            gender: 'male',
            agreeTerms: false
          });
          setTimeout(() => setSubmitted(false), 3000);
        })
        .catch((error) => {
          setErrorMessage('حدث خطأ أثناء إرسال التسجيل. يرجى المحاولة مرة أخرى.');
          console.log('FAILED...', error);
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };

  if (submitted) {
    return (
      <div className="py-24 bg-gradient-to-br from-gray-50 to-white min-h-screen">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center animate-fade-in shadow-xl">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-green-800 mb-4">تم التسجيل بنجاح!</h3>
            <p className="text-green-600 text-lg leading-relaxed">
              شكراً لك على التسجيل في المؤتمر السنوي للسياحة العلاجية. سيتم إرسال تأكيد التسجيل إلى بريدك الإلكتروني قريباً.
            </p>
          </div>
        </div>
      </div>
    );
  }

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
            سجل الآن
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            انضم إلينا في المؤتمر السنوي للسياحة العلاجية واكتسب خبرات جديدة في هذا المجال المتنامي
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form 
            id="contact-form" 
            onSubmit={handleSubmit} 
            ref={form}
            className="bg-white rounded-2xl shadow-xl p-8 animate-slide-up border-t-4 border-teal-500"
          >
            <h2 className="text-3xl font-bold text-darkBlue-800 mb-8 text-center">نموذج التسجيل</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  الاسم الأول *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full pr-12 pl-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    placeholder="أدخل اسمك الأول"
                  />
                  <User className="absolute right-4 top-4 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  اسم العائلة *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full pr-12 pl-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    placeholder="أدخل اسم العائلة"
                  />
                  <User className="absolute right-4 top-4 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  البريد الإلكتروني *
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pr-12 pl-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    placeholder="example@email.com"
                  />
                  <Mail className="absolute right-4 top-4 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  تأكيد البريد الإلكتروني *
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="confirmEmail"
                    value={formData.confirmEmail}
                    onChange={handleChange}
                    required
                    className="w-full pr-12 pl-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    placeholder="أعد كتابة البريد الإلكتروني"
                  />
                  <Mail className="absolute right-4 top-4 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                    className="w-full pr-12 pl-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    placeholder="05xxxxxxxx"
                  />
                  <Phone className="absolute right-4 top-4 h-5 w-5 text-gray-400" />
                </div>
              </div>

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
                    className="w-full pr-12 pl-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    placeholder="اسم المؤسسة أو الشركة"
                  />
                  <Building className="absolute right-4 top-4 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  الدولة *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full pr-12 pl-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    placeholder="المملكة العربية السعودية"
                  />
                  <Globe className="absolute right-4 top-4 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  المدينة *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full pr-12 pl-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    placeholder="أدخل اسم المدينة"
                  />
                  <MapPin className="absolute right-4 top-4 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  التخصص *
                </label>
                <input
                  type="text"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  placeholder="أدخل تخصصك"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  الجنس
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="male">ذكر</option>
                  <option value="female">أنثى</option>
                </select>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  required
                  className="mt-1 h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                />
                <label className="mr-3 text-sm text-gray-700">
                  أوافق على الشروط والأحكام *
                </label>
              </div>
            </div>

            <div className="mt-8">
              {errorMessage && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-center">
                  {errorMessage}
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
                className={`w-full font-medium py-4 px-6 rounded-xl transition-all duration-300 shadow-lg text-lg ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 transform hover:scale-105'
                } text-white`}
              >
                {isSubmitting ? 'جاري الإرسال...' : 'إرسال التسجيل'}
              </button>
            </div>
          </form>

          {/* Terms & Conditions */}
          <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 border-t-4 border-purple-500">
            <h3 className="text-2xl font-bold text-darkBlue-800 mb-6 text-center">الشروط والأحكام</h3>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                <p>تأكد من كتابة اسمك بشكل صحيح كما سيظهر في الشهادة.</p>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                <p>الحضور إلزامي.</p>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                <p>يجب عليك إكمال التقييم/الاستبيان لتلقي شهادتك.</p>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                <p>سيتم إرسال الشهادات إلى عنوان البريد الإلكتروني المستخدم في هذا النموذج.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConferenceRegister;
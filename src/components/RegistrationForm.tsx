import React, { useState } from 'react';
import { User, Mail, Phone, Building, CheckCircle } from 'lucide-react';

// Store recent submissions to prevent spam
const recentSubmissions = new Map<string, number>();

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    participationType: 'حضور عام'
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.phone) {
      setErrorMessage('يرجى تعبئة جميع الحقول المطلوبة');
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
    
    // Simulate form submission
    setTimeout(() => {
      // Store submission time
      recentSubmissions.set(formData.email, now);
      setSubmitted(true);
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        organization: '',
        participationType: 'حضور عام'
      });
      setIsSubmitting(false);
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto bg-green-50 border border-green-200 rounded-lg p-8 text-center animate-fade-in">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-800 mb-2">تم التسجيل بنجاح!</h3>
        <p className="text-green-600">
          شكراً لك على التسجيل. سيتم إرسال تأكيد التسجيل إلى بريدك الإلكتروني قريباً.
        </p>
      </div>
    );
  }

  return (
    <section id="register" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            سجل الآن
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            انضم إلينا في هذا الحدث الاستثنائي واكتسب خبرات جديدة في مجال التعاون
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8 animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  الاسم الكامل *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="أدخل اسمك الكامل"
                  />
                  <User className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                </div>
              </div>

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
                    className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="example@email.com"
                  />
                  <Mail className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
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
                    className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="05xxxxxxxx"
                  />
                  <Phone className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  المؤسسة / الانتماء
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="اسم المؤسسة أو الشركة"
                  />
                  <Building className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  نوع المشاركة
                </label>
                <select
                  name="participationType"
                  value={formData.participationType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                >
                  <option value="حضور عام">حضور عام</option>
                  <option value="متحدث">متحدث</option>
                  <option value="عارض">عارض</option>
                  <option value="راعي">راعي</option>
                </select>
              </div>
            </div>

            <div className="mt-8">
              {errorMessage && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-center">
                  {errorMessage}
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-medium py-3 px-6 rounded-lg transition-colors duration-200 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-teal-600 hover:bg-teal-700 transform hover:scale-105'
                } text-white`}
              >
                {isSubmitting ? 'جاري الإرسال...' : 'إرسال التسجيل'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
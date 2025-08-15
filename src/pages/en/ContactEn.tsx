import React, { useState } from 'react';
import { User, Mail, Phone, MessageSquare, CheckCircle, MapPin } from 'lucide-react';

const ContactEn = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="py-24 bg-gradient-to-br from-gray-50 to-white min-h-screen" dir="ltr">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center animate-fade-in shadow-xl">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-green-800 mb-4">Your message has been sent successfully!</h3>
            <p className="text-green-600 text-lg leading-relaxed">
              Thank you for contacting us. We will respond to your inquiry as soon as possible.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 to-white min-h-screen" dir="ltr">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-darkBlue-800 mb-8">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            We are pleased to hear from you for any inquiries or suggestions. Please fill out the form below and we will respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-teal-500">
              <h2 className="text-3xl font-bold text-darkBlue-800 mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-teal-50 rounded-xl">
                    <MapPin className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-darkBlue-800 mb-1">Address</h3>
                    <p className="text-gray-600">Kingdom of Saudi Arabia - Taif</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-50 rounded-xl">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-darkBlue-800 mb-1">Email</h3>
                    <p className="text-gray-600">example@email.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-50 rounded-xl">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-darkBlue-800 mb-1">Contact Number</h3>
                    <p className="text-gray-600">+966 555 555 555</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-teal-50 to-purple-50 rounded-xl">
                <img 
                  src="/logo.png" 
                  alt="Medical Tourism Association" 
                  className="h-16 w-auto mx-auto mb-4 logo-glow"
                />
                <p className="text-center text-gray-600 leading-relaxed">
                  We look forward to serving you and providing the best services in the field of medical tourism
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-purple-500">
              <h2 className="text-3xl font-bold text-darkBlue-800 mb-8">Send a Message</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                    <User className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                      placeholder="example@email.com"
                    />
                    <Mail className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                      placeholder="05xxxxxxxx"
                    />
                    <Phone className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Write your message here..."
                    />
                    <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactEn;
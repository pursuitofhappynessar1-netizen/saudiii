import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-darkBlue-800 via-darkBlue-900 to-darkBlue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex justify-center lg:justify-start mb-6">
              <img 
                src="/logo.png" 
                alt="جمعية السياحة العلاجية" 
                className="h-20 w-auto object-contain drop-shadow-lg"
              />
            </div>
            <p className="text-gray-300 mb-6 text-center lg:text-right leading-relaxed text-sm">
              منظمة رائدة في تطوير قطاع السياحة العلاجية وتعزيز التنمية المستدامة في المملكة العربية السعودية.
            </p>
            <div className="flex justify-center lg:justify-start space-x-reverse space-x-4">
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-all duration-300 transform hover:scale-110 p-2 rounded-lg hover:bg-teal-500/10">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-all duration-300 transform hover:scale-110 p-2 rounded-lg hover:bg-purple-500/10">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-all duration-300 transform hover:scale-110 p-2 rounded-lg hover:bg-orange-500/10">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-400 transition-all duration-300 transform hover:scale-110 p-2 rounded-lg hover:bg-pink-500/10">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-6 text-teal-400">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-teal-400 transition-all duration-300 text-sm hover:translate-x-1 block py-1">الرئيسية</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-teal-400 transition-all duration-300 text-sm hover:translate-x-1 block py-1">من نحن</Link></li>
              <li><Link to="/conference" className="text-gray-300 hover:text-teal-400 transition-all duration-300 text-sm hover:translate-x-1 block py-1">المؤتمر</Link></li>
              <li><Link to="/registration" className="text-gray-300 hover:text-teal-400 transition-all duration-300 text-sm hover:translate-x-1 block py-1">التسجيل</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-teal-400 transition-all duration-300 text-sm hover:translate-x-1 block py-1">اتصل بنا</Link></li>
            </ul>
          </div>

          {/* Conference Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-6 text-purple-400">المؤتمر</h3>
            <ul className="space-y-2">
              <li><Link to="/conference/speakers" className="text-gray-300 hover:text-purple-400 transition-all duration-300 text-sm hover:translate-x-1 block py-1">المتحدثون</Link></li>
              <li><Link to="/conference/program" className="text-gray-300 hover:text-purple-400 transition-all duration-300 text-sm hover:translate-x-1 block py-1">البرنامج</Link></li>
              <li><Link to="/partners/sponsors" className="text-gray-300 hover:text-purple-400 transition-all duration-300 text-sm hover:translate-x-1 block py-1">الرعاة</Link></li>
              <li><Link to="/hospitality/accommodation" className="text-gray-300 hover:text-purple-400 transition-all duration-300 text-sm hover:translate-x-1 block py-1">الإقامة</Link></li>
              <li><Link to="/media" className="text-gray-300 hover:text-purple-400 transition-all duration-300 text-sm hover:translate-x-1 block py-1">الإعلام</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-6 text-orange-400">معلومات التواصل</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 text-orange-400 ml-2 flex-shrink-0" />
                <span className="text-gray-300 text-sm">الطائف، المملكة العربية السعودية</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-orange-400 ml-2 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+966 50 930 0053</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-orange-400 ml-2 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@saudimt2025.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-darkBlue-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 جمعية السياحة العلاجية. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
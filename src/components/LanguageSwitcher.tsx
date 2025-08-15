import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const LanguageSwitcher = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isEnglish = location.pathname.startsWith('/en');
  
  const switchLanguage = () => {
    const currentPath = location.pathname;
    
    if (isEnglish) {
      // Switch to Arabic - remove /en prefix
      const arabicPath = currentPath.replace('/en', '') || '/';
      navigate(arabicPath);
    } else {
      // Switch to English - add /en prefix
      const englishPath = `/en${currentPath}`;
      navigate(englishPath);
    }
  };

  return (
    <button
      onClick={switchLanguage}
      className="flex items-center justify-center px-6 py-3 rounded-lg text-lg font-bold transition-all duration-300 bg-teal-600 hover:bg-teal-700 text-white border-2 border-teal-600 hover:border-teal-700 shadow-md hover:shadow-lg transform hover:scale-105 min-w-[80px]"
    >
      <span className="font-tajawal">{isEnglish ? 'AR' : 'EN'}</span>
    </button>
  );
};

export default LanguageSwitcher;
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (itemLabel: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(itemLabel);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  const menuItems = [
    { label: 'الرئيسية', href: '/' },
    {
      label: 'من نحن',
      href: '/about',
      dropdown: [
        { label: 'عن الطائف', href: '/about/taif' },
        { label: 'عن الجمعية', href: '/about/association' },
        { label: 'عن المؤتمر', href: '/about/conference' },
        { label: 'اللجنة العلمية', href: '/about/scientific-committee' },
      ],
    },
    {
      label: 'المؤتمر',
      href: '/conference',
      dropdown: [
        { label: 'المؤتمر', href: '/conference' },
        { label: 'سجل الآن', href: '/conference/register' },
        { label: 'برنامج المؤتمر', href: '/conference/program' },
        { label: 'المتحدثون', href: '/conference/speakers' },
        { label: 'من يجب أن يحضر', href: '/conference/who-should-attend' },
      ],
    },
    {
      label: 'الشركاء والرعاة',
      href: '/partners',
      dropdown: [
        { label: 'الرعاة', href: '/partners/sponsors' },
        { label: 'إحجز رعايتك', href: '/partners/book-sponsorship' },
      ],
    },
    {
      label: 'الإعلام',
      href: '/media',
      dropdown: [
        { label: 'تغطية إعلامية', href: '/media/coverage' },
        { label: 'المعرض', href: '/media/exhibition' },
      ],
    },
    { label: 'التسجيل', href: '/registration' },
    {
      label: 'الضيافة',
      href: '/hospitality',
      dropdown: [
        { label: 'الإقامة', href: '/hospitality/accommodation' },
        { label: 'متطلبات التأشيرة', href: '/hospitality/visa' },
        { label: 'الرحلات الجوية', href: '/hospitality/flights' },
      ],
    },
    { label: 'اتصل بنا', href: '/contact' },
  ];

  const isActivePath = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img 
              src="/logo.png" 
              alt="جمعية السياحة العلاجية" 
              className="h-16 w-auto object-contain drop-shadow-sm"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="mr-10 flex items-baseline space-x-reverse space-x-4">
              {menuItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={item.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center transition-all duration-300 ${
                      isActivePath(item.href)
                        ? 'text-teal-600 bg-teal-50 shadow-sm'
                        : 'text-gray-700 hover:text-teal-600 hover:bg-teal-50 hover:shadow-sm'
                    }`}
                  >
                    {item.label}
                    {item.dropdown && (
                      <ChevronDown className="mr-1 h-4 w-4" />
                    )}
                  </Link>
                  
                  {item.dropdown && activeDropdown === item.label && (
                    <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-3 z-10 animate-slide-down border border-gray-100 backdrop-blur-sm">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.label}
                          to={dropdownItem.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-all duration-200 mx-2 rounded-lg"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-reverse space-x-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-teal-600 inline-flex items-center justify-center p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t animate-slide-down">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActivePath(item.href)
                      ? 'text-secondary-600 bg-secondary-50'
                      : 'text-gray-700 hover:text-secondary-600 hover:bg-secondary-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div className="pr-4">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.label}
                        to={dropdownItem.href}
                        className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-secondary-600 hover:bg-secondary-50 transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../app/LanguageProvider';

const Navigation = () => {
  const { t, lang, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide header based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true); // Hide when scrolling down
      } else {
        setIsHidden(false); // Show when scrolling up
      }
      
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const tabs = [
    { id: '/', label: lang === 'ar' ? 'الرئيسية' : 'Home' },
    { id: '/work', label: lang === 'ar' ? 'الأعمال' : 'Work' },
    { id: '/about', label: lang === 'ar' ? 'حول' : 'About' },
    { id: '/cv', label: lang === 'ar' ? 'السيرة الذاتية' : 'CV' },
    { id: '/contact', label: lang === 'ar' ? 'تواصل' : 'Contact' }
  ];

  const isActiveTab = (tabId) => {
    if (tabId === '/') {
      return pathname === '/';
    }
    return pathname === tabId;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLanguageToggle = () => {
    toggleLanguage();
    closeMobileMenu(); // Close mobile menu when language changes
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      } ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Desktop Navigation Links */}
            <div className={`hidden md:flex gap-8 sm:gap-12`}>
              {tabs.map((tab) => (
                <a
                  key={tab.id}
                  href={tab.id}
                  className={`relative text-sm font-medium tracking-wide transition-all duration-300 ${
                    isActiveTab(tab.id)
                      ? 'text-gray-900'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <span className="relative">
                    {tab.label}
                    {isActiveTab(tab.id) && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gray-900 transform scale-x-100 transition-transform duration-300"></span>
                    )}
                  </span>
                </a>
              ))}
            </div>

            {/* Desktop Language Switcher */}
            <div className="hidden md:flex items-center">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <span className="text-sm font-medium">
                  {lang === 'ar' ? '🇺🇸 EN' : '🇸🇦 AR'}
                </span>
              </button>
            </div>
            
            {/* Mobile Burger Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              {/* Mobile Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <span className="text-sm font-medium">
                  {lang === 'ar' ? '🇺🇸 EN' : '🇸🇦 AR'}
                </span>
              </button>
              
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                aria-label={lang === 'ar' ? 'القائمة' : 'Menu'}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg transition-transform duration-300 md:hidden ${
        isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="px-6 py-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">
              {lang === 'ar' ? 'القائمة' : 'Menu'}
            </h2>
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          
          <div className="space-y-4">
            {tabs.map((tab) => (
              <a
                key={tab.id}
                href={tab.id}
                onClick={closeMobileMenu}
                className={`block py-3 px-4 rounded-lg transition-all duration-200 ${
                  isActiveTab(tab.id)
                    ? 'bg-blue-50 text-blue-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </a>
            ))}
            
            {/* Mobile Menu Language Switcher */}
            <div className="pt-4 border-t border-gray-200">
              <button
                onClick={handleLanguageToggle}
                className="flex items-center space-x-3 w-full py-3 px-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <span className="text-lg">
                  {lang === 'ar' ? '🇺🇸' : '🇸🇦'}
                </span>
                <span className="font-medium">
                  {lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation; 
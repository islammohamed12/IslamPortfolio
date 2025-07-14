'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../app/LanguageProvider';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggle = () => setIsDark((prev) => !prev);

  return [isDark, toggle];
}

const Navigation = () => {
  const { t, lang, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isDark, toggleDark] = useDarkMode();

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
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm' 
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
                      ? 'text-gray-900 dark:text-gray-100'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                  }`}
                >
                  <span className="relative">
                    {tab.label}
                    {isActiveTab(tab.id) && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gray-900 dark:bg-gray-100 transform scale-x-100 transition-transform duration-300"></span>
                    )}
                  </span>
                </a>
              ))}
            </div>

            {/* Desktop Language & Dark Mode Switcher */}
            <div className="hidden md:flex items-center space-x-2">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="text-sm font-medium">
                  {lang === 'ar' ? '🇺🇸 EN' : '🇸🇦 AR'}
                </span>
              </button>
              <button
                onClick={toggleDark}
                className="ml-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDark ? (
                  <SunIcon className="w-5 h-5 text-yellow-400" />
                ) : (
                  <MoonIcon className="w-5 h-5 text-gray-700" />
                )}
              </button>
            </div>
            
            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center justify-between w-full">
              {/* Language & Dark Mode - Position based on language */}
              <div className={`flex items-center ${lang === 'ar' ? 'space-x-4 order-2' : 'space-x-3 order-1'}`}>
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <span className="text-sm font-medium">
                    {lang === 'ar' ? '🇺🇸 EN' : '🇪🇬 AR'}
                  </span>
                </button>
                <button
                  onClick={toggleDark}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  {isDark ? (
                    <SunIcon className="w-5 h-5 text-yellow-400" />
                  ) : (
                    <MoonIcon className="w-5 h-5 text-gray-700" />
                  )}
                </button>
              </div>
              
              {/* Burger Menu - Position based on language */}
              <button
                onClick={toggleMobileMenu}
                className={`p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${lang === 'ar' ? 'order-1' : 'order-2'}`}
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
      <div className={`fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg transition-transform duration-300 md:hidden ${
        isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="px-6 py-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {lang === 'ar' ? 'القائمة' : 'Menu'}
            </h2>
                          <button
                onClick={closeMobileMenu}
                className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
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
                    ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-medium'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
                }`}
              >
                {tab.label}
              </a>
            ))}
            
            {/* Mobile Menu Language Switcher */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={handleLanguageToggle}
                className="flex items-center space-x-3 w-full py-3 px-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="text-lg">
                  {lang === 'ar' ? '🇺🇸' : '🇪🇬'}
                </span>
                <span className="text-lg">
                  {lang === 'ar' ? 'التبديل إلى الإنجليزية' : 'التبديل إلى العربية'}
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
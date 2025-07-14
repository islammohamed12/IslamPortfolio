'use client';
import { useState, useEffect } from 'react';
import { useLanguage } from '../app/LanguageProvider';

const Navigation = ({ activeTab, onTabChange }) => {
  const { t, lang } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tabs = [
    { id: 'home', label: lang === 'ar' ? 'الرئيسية' : 'Home' },
    { id: 'work', label: lang === 'ar' ? 'الأعمال' : 'Work' },
    { id: 'about', label: lang === 'ar' ? 'حول' : 'About' },
    { id: 'contact', label: lang === 'ar' ? 'تواصل' : 'Contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Account for fixed navigation
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleTabClick = (tabId) => {
    onTabChange(tabId);
    scrollToSection(tabId);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-center items-center h-20">
          <div className="flex space-x-8 sm:space-x-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`relative text-sm font-medium tracking-wide transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'text-gray-900'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <span className="relative">
                  {tab.label}
                  {activeTab === tab.id && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gray-900 transform scale-x-100 transition-transform duration-300"></span>
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 
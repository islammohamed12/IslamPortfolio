"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import translations from '@/data/content/translations.json';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Try to get language from localStorage first
      const savedLang = localStorage.getItem('selectedLanguage');
      
      if (savedLang && (savedLang === 'en' || savedLang === 'ar')) {
        setLang(savedLang);
      } else {
        // Fallback to browser language detection
        const userLang = navigator.language || navigator.userLanguage;
        if (userLang.startsWith('ar')) {
          setLang('ar');
          localStorage.setItem('selectedLanguage', 'ar');
        } else {
          setLang('en');
          localStorage.setItem('selectedLanguage', 'en');
        }
      }
      setIsLoaded(true);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'ar' : 'en';
    setLang(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('selectedLanguage', newLang);
    }
  };

  const t = translations[lang];

  // Don't render children until language is loaded
  if (!isLoaded) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, toggleLanguage, isLoaded }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
} 
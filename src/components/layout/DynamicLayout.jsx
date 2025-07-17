"use client";
import { useLanguage } from '@/app/LanguageProvider';
import { useEffect } from 'react';
import { loadFonts } from '@/data/services/fonts';

export default function DynamicLayout({ children }) {
  const { lang, isLoaded } = useLanguage();
  
  useEffect(() => {
    // Load fonts when component mounts
    loadFonts();
  }, []);
  
  // Don't render until language is loaded
  if (!isLoaded) {
    return null;
  }
  
  return (
    <div 
      dir={lang === 'ar' ? 'rtl' : 'ltr'} 
      lang={lang}
      className={`${lang === 'ar' ? 'text-right font-cairo' : 'text-left font-inter'}`}
    >
      {children}
    </div>
  );
} 
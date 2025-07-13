"use client";
import { useLanguage } from './LanguageProvider';
import { useEffect } from 'react';
import { loadFonts } from '../lib/fonts';

export default function DynamicLayout({ children }) {
  const { lang } = useLanguage();
  
  useEffect(() => {
    // Load fonts when component mounts
    loadFonts();
  }, []);
  
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
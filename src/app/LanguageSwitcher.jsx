"use client";
import { useLanguage } from './LanguageProvider';

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  return (
    <div className={`fixed top-4 z-50 flex gap-2 bg-white/80 backdrop-blur-md rounded-full shadow-md px-3 py-1 border border-gray-200 ${lang === 'ar' ? 'left-4' : 'right-4'}`}>
      <button
        onClick={() => setLang('ar')}
        className={`px-3 py-2 rounded-full text-lg transition-all duration-300 hover:scale-110 hover:rotate-3 border lang-button ${lang === 'ar' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-blue-600 border-blue-600 hover:bg-blue-50'}`}
        aria-label="العربية"
        title="العربية"
      >
        🇸🇦
      </button>
      <button
        onClick={() => setLang('en')}
        className={`px-3 py-2 rounded-full text-lg transition-all duration-300 hover:scale-110 hover:rotate-3 border lang-button ${lang === 'en' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-blue-600 border-blue-600 hover:bg-blue-50'}`}
        aria-label="English"
        title="English"
      >
        🇺🇸
      </button>
    </div>
  );
} 
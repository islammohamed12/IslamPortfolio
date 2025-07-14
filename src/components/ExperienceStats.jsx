'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../app/LanguageProvider';
import experienceData from '../lib/experience.json';

export default function ExperienceStats() {
  const { lang } = useLanguage();
  const [counts, setCounts] = useState({
    years: 0,
    projects: 0,
    countries: 0,
    companies: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  const stats = [
    {
      number: 13,
      label: lang === 'ar' ? 'سنوات من الخبرة' : 'Years of Experience',
      icon: '⏰'
    },
    {
      number: 25,
      label: lang === 'ar' ? 'مشروع مكتمل' : 'Projects Completed',
      icon: '🚀'
    },
    {
      number: 3,
      label: lang === 'ar' ? 'دول عملت فيها' : 'Countries Worked In',
      icon: '🌍'
    },
    {
      number: 8,
      label: lang === 'ar' ? 'شركة عملت معها' : 'Companies Worked With',
      icon: '🏢'
    }
  ];

  // Get experience data from centralized JSON
  const experience = experienceData[lang];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        years: Math.floor(13 * progress),
        projects: Math.floor(25 * progress),
        countries: Math.floor(3 * progress),
        companies: Math.floor(8 * progress)
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounts({
          years: 13,
          projects: 25,
          countries: 3,
          companies: 8
        });
      }
    }, stepDuration);
  };

  return (
    <div className="py-8 sm:py-12 px-4 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="section-title gradient-text">
            {experience.title}
          </h2>
          <p className="section-subtitle">
            {experience.subtitle}
          </p>
        </div>
        
        {/* Stats Grid */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                {counts[Object.keys(counts)[index]]}+
              </div>
              <p className="text-sm sm:text-base text-gray-600 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Experience Summary */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {lang === 'ar' ? 'رحلة مهنية مميزة' : 'Distinguished Career Journey'}
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {lang === 'ar' 
                ? 'من مصر إلى الإمارات العربية المتحدة، خبرة شاملة في تطوير تطبيقات الجوال والويب مع تركيز على حلول المؤسسات والذكاء الاصطناعي'
                : 'From Egypt to the United Arab Emirates, comprehensive experience in mobile and web development with focus on enterprise solutions and artificial intelligence'
              }
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {experience.experiences.slice(0, 4).map((exp, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">
                      {exp.company.charAt(0)}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{exp.title}</h4>
                  <p className="text-sm font-medium text-blue-600 mb-1">{exp.company}</p>
                  <p className="text-xs text-gray-500 mb-2">{exp.location}</p>
                  <p className="text-xs text-gray-400 mb-3">{exp.period}</p>
                  <div className="bg-blue-50/50 rounded px-3 py-2">
                    <p className="text-xs text-blue-700 font-medium">{exp.highlights[0]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Countries Worked In */}
          <div className="mt-12 text-center">
            <h4 className="text-xl font-semibold text-gray-900 mb-6">
              {lang === 'ar' ? 'الدول التي عملت فيها' : 'Countries I\'ve Worked In'}
            </h4>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md">
                <span className="text-2xl">🇪🇬</span>
                <span className="font-medium text-gray-700">Egypt</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md">
                <span className="text-2xl">🇸🇦</span>
                <span className="font-medium text-gray-700">Saudi Arabia</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md">
                <span className="text-2xl">🇦🇪</span>
                <span className="font-medium text-gray-700">UAE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
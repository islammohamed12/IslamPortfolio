'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../app/LanguageProvider';

export default function ExperienceStats() {
  const { lang } = useLanguage();
  const [counts, setCounts] = useState({
    years: 0,
    projects: 0,
    countries: 0,
    clients: 0
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
      number: 50,
      label: lang === 'ar' ? 'مشروع مكتمل' : 'Projects Completed',
      icon: '🚀'
    },
    {
      number: 15,
      label: lang === 'ar' ? 'دولة خدمتها' : 'Countries Served',
      icon: '🌍'
    },
    {
      number: 25,
      label: lang === 'ar' ? 'عميل راضي' : 'Happy Clients',
      icon: '😊'
    }
  ];

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
        projects: Math.floor(50 * progress),
        countries: Math.floor(15 * progress),
        clients: Math.floor(25 * progress)
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounts({
          years: 13,
          projects: 50,
          countries: 15,
          clients: 25
        });
      }
    }, stepDuration);
  };

  return (
    <div className="py-8 sm:py-12 px-4 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="section-title gradient-text">
            {lang === 'ar' ? 'خبرتي المهنية' : 'Professional Experience'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' ? 'أرقام تتحدث عن نفسها' : 'Numbers that speak for themselves'}
          </p>
        </div>
        
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
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
      </div>
    </div>
  );
} 
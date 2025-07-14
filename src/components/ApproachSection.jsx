'use client';
import React from 'react';
import { useLanguage } from '../app/LanguageProvider';

export default function ApproachSection() {
  const { lang } = useLanguage();

  const approaches = [
    {
      number: '01',
      title: lang === 'ar' ? 'تحليل المتطلبات' : 'Requirements Analysis',
      description: lang === 'ar' 
        ? 'أقوم بتحليل شامل للمتطلبات والتقنيات المطلوبة لضمان الحل الأمثل للمشروع'
        : 'I conduct comprehensive analysis of requirements and technologies to ensure optimal project solutions',
      icon: '📋'
    },
    {
      number: '02',
      title: lang === 'ar' ? 'التصميم والتطوير' : 'Design & Development',
      description: lang === 'ar'
        ? 'أطور حلول تقنية متقدمة باستخدام أحدث التقنيات وأفضل الممارسات'
        : 'I develop advanced technical solutions using cutting-edge technologies and best practices',
      icon: '💻'
    },
    {
      number: '03',
      title: lang === 'ar' ? 'الاختبار والتحسين' : 'Testing & Optimization',
      description: lang === 'ar'
        ? 'أقوم باختبار شامل وتحسين الأداء لضمان الجودة العالية والتجربة المثلى'
        : 'I conduct comprehensive testing and performance optimization to ensure high quality and optimal experience',
      icon: '🔧'
    },
    {
      number: '04',
      title: lang === 'ar' ? 'النشر والدعم' : 'Deployment & Support',
      description: lang === 'ar'
        ? 'أضمن النشر الآمن والتشغيل المستقر مع تقديم الدعم الفني المستمر'
        : 'I ensure secure deployment and stable operation with ongoing technical support',
      icon: '🚀'
    }
  ];

  return (
    <section className="py-8 sm:py-12 px-4 bg-gray-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="section-title gradient-text">
            {lang === 'ar' ? 'منهجيتي في العمل' : 'My Development Approach'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' 
              ? 'نهج شامل ومنظم لضمان نجاح كل مشروع'
              : 'A comprehensive and systematic approach to ensure every project\'s success'
            }
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {approaches.map((approach, index) => (
            <div key={index} className="bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 approach-card">
              <div className="text-center">
                <div className="text-4xl mb-4">{approach.icon}</div>
                <div className="text-2xl font-bold text-blue-600 mb-3">{approach.number}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{approach.title}</h3>
                <p className="text-gray-600 leading-relaxed">{approach.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
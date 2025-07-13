'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../app/LanguageProvider';

export default function ProjectCard({ title, role, stack, result, description, image, appStoreLinks, date }) {
  const { lang } = useLanguage();
  
  return (
    <div className="bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-blue-300 project-card">
      <div className="mb-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
          {date && (
            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
              {date}
            </span>
          )}
        </div>
        <p className="text-blue-600 font-semibold mb-2">{role}</p>
        <p className="text-gray-600 text-sm mb-3">{stack}</p>
        <div className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full mb-4">
          {result}
        </div>
        <p className="text-gray-700 leading-relaxed mb-6">{description}</p>
      </div>
      
      {appStoreLinks && (
        <div className="flex gap-3">
          <Button 
            onClick={() => window.open(appStoreLinks.appStore, '_blank')}
            className="flex-1 bg-black text-white hover:bg-gray-800 transition-all duration-300 hover:scale-105"
          >
            {lang === 'ar' ? 'متجر التطبيقات' : 'App Store'}
          </Button>
          <Button 
            onClick={() => window.open(appStoreLinks.playStore, '_blank')}
            className="flex-1 bg-green-600 text-white hover:bg-green-700 transition-all duration-300 hover:scale-105"
          >
            {lang === 'ar' ? 'متجر جوجل' : 'Play Store'}
          </Button>
        </div>
      )}
    </div>
  );
} 
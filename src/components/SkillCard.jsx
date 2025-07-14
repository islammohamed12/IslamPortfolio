'use client';
import React from 'react';

export default function SkillCard({ title, description, icon, color, category }) {
  return (
    <div className={`bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:rotate-1 skill-card`}>
      <div className="flex items-center gap-3">
        <div className={`text-2xl bg-gradient-to-r ${color} bg-clip-text text-transparent flex-shrink-0`}>
          {icon}
        </div>
        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 leading-tight">{title}</h3>
      </div>
    </div>
  );
} 
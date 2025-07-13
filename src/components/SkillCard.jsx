'use client';
import React from 'react';

export default function SkillCard({ title, description, icon, color, category }) {
  return (
    <div className={`bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl skill-card`}>
      <div className="text-center">
        <div className={`text-4xl mb-4 bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        <div className="mt-4">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
            {category}
          </span>
        </div>
      </div>
    </div>
  );
} 
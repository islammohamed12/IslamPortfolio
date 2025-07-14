'use client';
import React from 'react';

export default function TestimonialCard({ quote, name, position, company, image }) {
  return (
    <div className="bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 testimonial-card">
      <div className="mb-6">
        <div className="text-4xl text-blue-500 mb-4">"</div>
        <p className="text-gray-700 leading-relaxed text-lg italic mb-6">
          {quote}
        </p>
      </div>
      
      <div className="flex items-center">
        {image && (
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{position}</p>
          <p className="text-sm text-blue-600 font-medium">{company}</p>
        </div>
      </div>
    </div>
  );
} 
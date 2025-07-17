'use client';
import { useLanguage } from '@/app/LanguageProvider';

export default function Logo({ 
  variant = 'full', // 'full', 'icon', 'text'
  size = 'default', // 'small', 'default', 'large'
  className = ''
}) {
  const { lang } = useLanguage();

  const sizeClasses = {
    small: 'h-8',
    default: 'h-12',
    large: 'h-16'
  };

  const textSizes = {
    small: 'text-lg',
    default: 'text-xl',
    large: 'text-2xl'
  };

  const subtitleSizes = {
    small: 'text-xs',
    default: 'text-sm',
    large: 'text-base'
  };

  const iconSizes = {
    small: 'w-6 h-6',
    default: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  // Logo icon component
  const LogoIcon = () => (
    <div className={`${iconSizes[size]} flex-shrink-0 group`}>
      <svg 
        viewBox="0 0 64 64" 
        className="w-full h-full transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main hexagon background */}
        <polygon 
          points="32,4 56,18 56,46 32,60 8,46 8,18" 
          fill="url(#hexGradient)" 
          stroke="url(#glow)" 
          strokeWidth="2"
          className="animate-pulse"
        />
        
        {/* Inner hexagon for depth */}
        <polygon 
          points="32,8 52,20 52,44 32,56 12,44 12,20" 
          fill="url(#innerGradient)" 
          className="animate-pulse"
        />
        
        {/* React Native atom symbol */}
        <g className="animate-spin" style={{ animationDuration: '8s' }}>
          {/* Orbit 1 */}
          <ellipse 
            cx="32" cy="32" 
            rx="16" ry="6" 
            fill="none" 
            stroke="#61DAFB" 
            strokeWidth="2"
            transform="rotate(0 32 32)"
          />
          
          {/* Orbit 2 */}
          <ellipse 
            cx="32" cy="32" 
            rx="16" ry="6" 
            fill="none" 
            stroke="#61DAFB" 
            strokeWidth="2"
            transform="rotate(60 32 32)"
          />
          
          {/* Orbit 3 */}
          <ellipse 
            cx="32" cy="32" 
            rx="16" ry="6" 
            fill="none" 
            stroke="#61DAFB" 
            strokeWidth="2"
            transform="rotate(120 32 32)"
          />
          
          {/* Central nucleus */}
          <circle 
            cx="32" cy="32" 
            r="4" 
            fill="#61DAFB"
            className="animate-ping"
          />
          
          {/* Orbiting electrons */}
          <circle 
            cx="48" cy="32" 
            r="2" 
            fill="#3B82F6"
            className="animate-pulse"
          />
          <circle 
            cx="32" cy="16" 
            r="2" 
            fill="#10B981"
            className="animate-pulse"
          />
          <circle 
            cx="16" cy="32" 
            r="2" 
            fill="#F59E0B"
            className="animate-pulse"
          />
        </g>
        
        {/* Floating code symbols */}
        <text 
          x="32" y="50" 
          textAnchor="middle" 
          fill="#FFFFFF" 
          fontSize="8" 
          fontFamily="Inter, sans-serif" 
          fontWeight="bold"
          className="animate-bounce"
        >
          {'{ }'}
        </text>
        
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6">
              <animate attributeName="stop-color" values="#3B82F6;#1D4ED8;#8B5CF6;#3B82F6" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#1D4ED8">
              <animate attributeName="stop-color" values="#1D4ED8;#8B5CF6;#3B82F6;#1D4ED8" dur="4s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          
          <linearGradient id="innerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1F2937" />
            <stop offset="100%" stopColor="#374151" />
          </linearGradient>
          
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );

  // Text component - Icon only, no text
  const LogoText = () => null;

  if (variant === 'icon') {
    return (
      <div className={`flex items-center ${className}`}>
        <LogoIcon />
      </div>
    );
  }

  if (variant === 'text') {
    return (
      <div className={`flex items-center ${className}`}>
        <LogoIcon />
      </div>
    );
  }

  // Full logo (icon only now)
  return (
    <div className={`flex items-center ${className}`}>
      <LogoIcon />
    </div>
  );
} 
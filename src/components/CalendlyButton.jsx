'use client';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../app/LanguageProvider';
import { trackCalendlyBooking } from '../lib/analytics';

export default function CalendlyButton({ 
  variant = 'default', 
  size = 'default', 
  className = '',
  showIcon = true,
  children 
}) {
  const { lang } = useLanguage();

  const handleCalendlyClick = () => {
    window.open('https://calendly.com/islammelsayed', '_blank');
    trackCalendlyBooking();
  };

  const defaultText = lang === 'ar' ? 'حجز موعد' : 'Book a Call';

  return (
    <Button
      onClick={handleCalendlyClick}
      variant={variant}
      size={size}
      className={`bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
    >
      {showIcon && (
        <svg 
          className="w-4 h-4 mr-2" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
          />
        </svg>
      )}
      {children || defaultText}
    </Button>
  );
} 
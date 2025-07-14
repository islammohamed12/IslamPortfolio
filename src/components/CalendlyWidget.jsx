'use client';
import { useEffect, useState } from 'react';
import { useLanguage } from '../app/LanguageProvider';

export default function CalendlyWidget({ 
  className = '',
  style = {},
  hideEventTypeDetails = false,
  hideLandingPageDetails = false
}) {
  const { lang } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load Calendly script if not already loaded
    if (!window.Calendly) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => {
        setIsLoaded(true);
        if (window.Calendly) {
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/islammelsayed',
            parentElement: document.getElementById('calendly-widget'),
            hideEventTypeDetails: hideEventTypeDetails,
            hideLandingPageDetails: hideLandingPageDetails,
            prefill: {
              name: '',
              email: '',
              firstName: '',
              lastName: '',
              customAnswers: {}
            },
            utm: {
              utmCampaign: 'portfolio',
              utmSource: 'website',
              utmMedium: 'widget'
            }
          });
        }
      };
      document.head.appendChild(script);
    } else {
      setIsLoaded(true);
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/islammelsayed',
          parentElement: document.getElementById('calendly-widget'),
          hideEventTypeDetails: hideEventTypeDetails,
          hideLandingPageDetails: hideLandingPageDetails,
          prefill: {
            name: '',
            email: '',
            firstName: '',
            lastName: '',
            customAnswers: {}
          },
          utm: {
            utmCampaign: 'portfolio',
            utmSource: 'website',
            utmMedium: 'widget'
          }
        });
      }
    }

    return () => {
      // Cleanup if needed
    };
  }, [hideEventTypeDetails, hideLandingPageDetails]);

  return (
    <div className={`calendly-widget-container ${className}`} style={style}>
      {!isLoaded && (
        <div className="flex items-center justify-center p-8 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">
              {lang === 'ar' ? 'جاري تحميل جدولة المواعيد...' : 'Loading calendar...'}
            </p>
          </div>
        </div>
      )}
      <div 
        id="calendly-widget"
        className="min-h-[600px] w-full"
        data-url="https://calendly.com/islammelsayed"
      />
    </div>
  );
} 
'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/app/LanguageProvider';

export default function CVViewer() {
  const { lang } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/assets/cv-islam-mohamed.pdf';
    link.download = 'cv-islam-mohamed.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-xl overflow-hidden">
      {/* Header */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📄</span>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {lang === 'ar' ? 'السيرة الذاتية - اسلام السيد' : 'Curriculum Vitae - Islam Elsayed'}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {lang === 'ar' ? 'عرض مباشر للنسخة PDF' : 'Direct PDF view'}
              </p>
            </div>
          </div>
          <Button 
            onClick={downloadCV}
            className="btn-primary"
          >
            {lang === 'ar' ? 'تحميل PDF' : 'Download PDF'}
          </Button>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="relative h-[600px] sm:h-[700px]">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">
                {lang === 'ar' ? 'جاري تحميل السيرة الذاتية...' : 'Loading CV...'}
              </p>
            </div>
          </div>
        )}
        
        <iframe
          src="/assets/cv-islam-mohamed.pdf"
          className="w-full h-full border-0"
          onLoad={handleIframeLoad}
          title={lang === 'ar' ? 'السيرة الذاتية - اسلام السيد' : 'Curriculum Vitae - Islam Elsayed'}
        />
      </div>

      {/* Footer */}
              <div className="p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-600 text-center">
          {lang === 'ar' 
            ? 'يمكنك التمرير والتصفح داخل النافذة أعلاه، أو استخدام زر التحميل للحصول على نسخة محفوظة'
            : 'You can scroll and browse within the viewer above, or use the download button to get a saved copy'
          }
        </p>
      </div>
    </div>
  );
} 
'use client';
import { useLanguage } from '@/app/LanguageProvider';
import DynamicLayout from '@/components/layout/DynamicLayout';
import SEO from '@/components/layout/SEO';
import BackgroundCanvas from '@/components/layout/BackgroundCanvas';
import CalendlyWidget from '@/components/integrations/CalendlyWidget';
import FloatingChat from '@/components/features/FloatingChat';

export default function BookPage() {
  const { t, lang } = useLanguage();

  return (
    <DynamicLayout>
      <SEO 
        title={lang === 'ar' ? 'حجز موعد - اسلام السيد' : 'Book a Call - Islam Elsayed'}
        description={lang === 'ar' ? 'احجز موعداً مع اسلام السيد لمناقشة مشاريع التطوير أو الاستشارات التقنية. متاح للمشاريع الجديدة والفرص التعاونية.' : 'Book a call with Islam Elsayed to discuss development projects or technical consultations. Available for new projects and collaboration opportunities.'}
        keywords={lang === 'ar' ? [
          'حجز موعد اسلام السيد',
          'استشارة تقنية',
          'مشاريع تطوير',
          'React Native',
          'IBM MobileFirst',
          'مطور تطبيقات الجوال'
        ] : [
          'Book call Islam Elsayed',
          'Technical consultation',
          'Development projects',
          'React Native',
          'IBM MobileFirst',
          'Mobile app developer'
        ]}
        image="/og-image.svg"
        url="https://islammelsayed.com/book"
      />
      
      <BackgroundCanvas />
      
      <main className="relative z-10 min-h-screen pt-20">
        <section className="py-8 sm:py-12 md:py-16 px-4 bg-gradient-to-b from-white/80 to-white/60 dark:from-gray-900/80 dark:to-gray-900/60 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="page-title">
                {lang === 'ar' ? 'حجز موعد' : 'Book a Call'}
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                {lang === 'ar'
                  ? 'هل لديك مشروع تريد مناقشته؟ أو تحتاج استشارة تقنية؟ احجز موعداً معي مباشرة من خلال الجدولة أدناه.'
                  : 'Have a project you\'d like to discuss? Or need technical consultation? Book a call with me directly using the calendar below.'
                }
              </p>

              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  {lang === 'ar' ? 'أنواع المواعيد المتاحة:' : 'Available Meeting Types:'}
                </h3>
                <ul className="text-left space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {lang === 'ar' ? 'استشارة مشروع (30 دقيقة)' : 'Project Consultation (30 min)'}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    {lang === 'ar' ? 'مناقشة تقنية (45 دقيقة)' : 'Technical Discussion (45 min)'}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    {lang === 'ar' ? 'تعاون فريق (60 دقيقة)' : 'Team Collaboration (60 min)'}
                  </li>
                </ul>
              </div>

              <div className="text-sm text-gray-600 dark:text-gray-400">
                <p>
                  {lang === 'ar' 
                    ? 'المنطقة الزمنية: توقيت الخليج (GST) - متاح من الاثنين إلى الجمعة، 9 صباحاً - 6 مساءً'
                    : 'Timezone: Gulf Standard Time (GST) - Available Monday-Friday, 9 AM - 6 PM'
                  }
                </p>
              </div>
            </div>

            {/* Calendly Widget */}
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              <CalendlyWidget 
                className="w-full"
                hideEventTypeDetails={false}
                hideLandingPageDetails={false}
              />
            </div>

            {/* Additional Contact Info */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {lang === 'ar' 
                  ? 'هل تفضل التواصل عبر البريد الإلكتروني؟'
                  : 'Prefer to contact via email?'
                }
              </p>
              <a 
                href="mailto:islammohamed12@gmail.com"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors font-medium"
              >
                islammohamed12@gmail.com
              </a>
            </div>
          </div>
        </section>
        
        {/* Floating Chat */}
        <FloatingChat />
      </main>
    </DynamicLayout>
  );
} 
'use client';
import { useLanguage } from '../LanguageProvider';
import DynamicLayout from '../DynamicLayout';
import SEO from '../../components/SEO';
import BackgroundCanvas from '../../components/BackgroundCanvas';
import CVViewer from '../../components/CVViewer';

export default function CVPage() {
  const { t, lang } = useLanguage();

  return (
    <DynamicLayout>
      <SEO 
        title={lang === 'ar' ? 'السيرة الذاتية - اسلام السيد' : 'CV - Islam Elsayed'}
        description={lang === 'ar' ? 'السيرة الذاتية الكاملة لاسلام السيد - مطور تطبيقات الجوال والويب مع خبرة 13+ عام في قيادة فرق التطوير.' : 'Complete CV of Islam Elsayed - Mobile and Web App Developer with 13+ years experience leading development teams.'}
        keywords={lang === 'ar' ? [
          'السيرة الذاتية اسلام السيد',
          'CV اسلام السيد',
          'مطور تطبيقات الجوال',
          'React Native',
          'IBM MobileFirst',
          'خبرات اسلام السيد'
        ] : [
          'Islam Elsayed CV',
          'Islam Elsayed Resume',
          'Mobile App Developer CV',
          'React Native Developer',
          'IBM MobileFirst Developer',
          'Islam Elsayed Experience'
        ]}
        image="/og-image.jpg"
        url="https://islamelsayed.vercel.app/cv"
      />
      
      <BackgroundCanvas />
      
      <main className="relative z-10 min-h-screen pt-20">
        <section className="py-8 sm:py-12 md:py-16 px-4 bg-gradient-to-b from-white/80 to-white/60 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 gradient-text">
                {lang === 'ar' ? 'السيرة الذاتية' : 'Curriculum Vitae'}
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                {lang === 'ar'
                  ? 'استكشف خبراتي الكاملة في تطوير تطبيقات الجوال والويب مع قيادة فرق التطوير'
                  : 'Explore my complete experience in mobile and web development with team leadership'
                }
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-gray-200/50">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  {lang === 'ar' ? 'اسلام السيد' : 'Islam Elsayed'}
                </h2>
                <p className="text-gray-600 mb-4">
                  {lang === 'ar' 
                    ? 'مطور تطبيقات الجوال والويب | قائد فريق التطوير | 13+ عام خبرة'
                    : 'Mobile & Web App Developer | Development Team Lead | 13+ Years Experience'
                  }
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm text-gray-500">
                  <span>📧 islammohamed12@gmail.com</span>
                  <span>📍 Dubai, UAE</span>
                  <span>💼 linkedin.com/in/islammohamed92</span>
                </div>
              </div>
              
              <CVViewer />
            </div>
          </div>
        </section>
      </main>
    </DynamicLayout>
  );
} 
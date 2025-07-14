'use client';
import { useLanguage } from '../LanguageProvider';
import DynamicLayout from '../DynamicLayout';
import SEO from '../../components/SEO';
import BackgroundCanvas from '../../components/BackgroundCanvas';

export default function ContactPage() {
  const { t, lang } = useLanguage();

  const handleEmail = () => {
    window.open('mailto:islammohamed12@gmail.com?subject=مشروع جديد - اسلام السيد', '_blank');
  };

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/islammohamed92/', '_blank');
  };

  const handleLocation = () => {
    window.open('https://maps.google.com/?q=Dubai,United+Arab+Emirates', '_blank');
  };

  return (
    <DynamicLayout>
      <SEO 
        title={lang === 'ar' ? 'تواصل - اسلام السيد' : 'Contact - Islam Elsayed'}
        description={lang === 'ar' ? 'تواصل مع اسلام السيد لمشاريع تطوير تطبيقات الجوال والويب. خبرة في React Native و IBM MobileFirst و تطبيقات المؤسسات.' : 'Contact Islam Elsayed for mobile and web development projects. Experience in React Native, IBM MobileFirst, and enterprise applications.'}
        keywords={lang === 'ar' ? [
          'تواصل اسلام السيد',
          'مطور تطبيقات الجوال',
          'React Native',
          'IBM MobileFirst',
          'مشاريع تطوير',
          'توظيف مطور'
        ] : [
          'Contact Islam Elsayed',
          'Mobile App Developer',
          'React Native Developer',
          'IBM MobileFirst Developer',
          'Development Projects',
          'Hire Developer'
        ]}
        image="/og-image.jpg"
        url="https://islamelsayed.vercel.app/contact"
      />
      
      <BackgroundCanvas />
      
      <main className="relative z-10 min-h-screen pt-20">
        <section className="py-8 sm:py-12 md:py-16 px-4 bg-gradient-to-b from-white/80 to-white/60 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 gradient-text">
              {lang === 'ar' ? 'تواصل معي' : 'Get in Touch'}
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-16 max-w-3xl mx-auto leading-relaxed">
              {lang === 'ar'
                ? 'هل لديك مشروع تريد مناقشته؟ أو تريد معرفة المزيد عن خبراتي؟ لا تتردد في التواصل معي.'
                : 'Have a project you\'d like to discuss? Or want to learn more about my experience? Feel free to reach out.'
              }
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
              {/* Email */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-red-500">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 18.366V5.457c0-.904.732-1.636 1.636-1.636h20.728c.904 0 1.636.732 1.636 1.636zM12 13.5L1.636 4.5h20.728L12 13.5z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {lang === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                </h3>
                <a 
                  href="mailto:islammohamed12@gmail.com"
                  onClick={handleEmail}
                  className="text-blue-600 hover:text-blue-800 transition-colors text-xl font-medium"
                >
                  islammohamed12@gmail.com
                </a>
              </div>

              {/* LinkedIn */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-blue-600">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {lang === 'ar' ? 'LinkedIn' : 'LinkedIn'}
                </h3>
                <a 
                  href="https://www.linkedin.com/in/islammohamed92/"
                  onClick={handleLinkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors text-xl font-medium"
                >
                  linkedin.com/in/islammohamed92
                </a>
              </div>

              {/* Location */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-green-600">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {lang === 'ar' ? 'الموقع' : 'Location'}
                </h3>
                <button 
                  onClick={handleLocation}
                  className="text-green-600 hover:text-green-800 transition-colors text-xl font-medium cursor-pointer"
                >
                  {lang === 'ar' ? 'دبي، الإمارات العربية المتحدة' : 'Dubai, United Arab Emirates'}
                </button>
              </div>
            </div>

            <div className="mt-16 text-gray-600">
              <p className="text-lg">
                {lang === 'ar'
                  ? 'متاح للمشاريع الجديدة والفرص التعاونية'
                  : 'Available for new projects and collaboration opportunities'
                }
              </p>
            </div>
          </div>
        </section>
      </main>
    </DynamicLayout>
  );
} 
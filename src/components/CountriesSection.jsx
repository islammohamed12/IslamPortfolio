'use client';
import { useLanguage } from '../app/LanguageProvider';

export default function CountriesSection() {
  const { lang } = useLanguage();

  const countries = [
    {
      flag: "🇪🇬",
      name: lang === 'ar' ? 'مصر' : 'Egypt',
      period: lang === 'ar' ? '2011 - 2021' : '2011 - 2021',
      role: lang === 'ar' ? 'مطور تطبيقات الجوال' : 'Mobile App Developer',
      description: lang === 'ar' 
        ? 'بدأت مسيرتي المهنية في تطوير تطبيقات الجوال' 
        : 'Started my career in mobile app development'
    },
    {
      flag: "🇦🇪",
      name: lang === 'ar' ? 'الإمارات العربية المتحدة' : 'United Arab Emirates',
      period: lang === 'ar' ? '2021 - الحالي' : '2021 - Present',
      role: lang === 'ar' ? 'قائد فريق التطوير' : 'Development Team Lead',
      description: lang === 'ar' 
        ? 'قائد فرق التطوير ومشاريع التحول الرقمي الحكومية' 
        : 'Leading development teams and government digital transformation projects'
    }
  ];

  return (
    <section className="py-8 sm:py-12 px-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="section-title gradient-text">
            {lang === 'ar' ? 'الدول التي عملت فيها' : 'Countries I\'ve Worked In'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' 
              ? 'خبرة دولية في تطوير التطبيقات والتحول الرقمي' 
              : 'International experience in app development and digital transformation'
            }
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
          {countries.map((country, index) => (
            <div 
              key={index}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{country.flag}</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {country.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {country.period}
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    {lang === 'ar' ? 'الدور:' : 'Role:'}
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {country.role}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {country.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full px-6 py-3">
            <span className="text-blue-600 dark:text-blue-400 font-medium">
              {lang === 'ar' ? '13+ عام من الخبرة الدولية' : '13+ Years of International Experience'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
} 
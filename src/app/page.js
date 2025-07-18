'use client';
import { Button } from '@/components/ui/button';
import FloatingChat from '@/components/features/FloatingChat';
import BackgroundCanvas from '@/components/layout/BackgroundCanvas';
import { useLanguage } from './LanguageProvider';
import DynamicLayout from '@/components/layout/DynamicLayout';
import SEO from '@/components/layout/SEO';
import ProjectCard from '@/components/cards/ProjectCard';
import ExperienceStats from '@/components/sections/ExperienceStats';

import CalendlyButton from '@/components/integrations/CalendlyButton';
import CountriesSection from '@/components/sections/CountriesSection';
import workProjectsData from '@/data/content/projects/work-projects.json';
import testimonialsData from '@/data/content/testimonials.json';

export default function Home() {
  const { t, lang } = useLanguage();

  const handleContact = () => {
    // Open email client
    window.open('mailto:islammohamed12@gmail.com?subject=مشروع جديد - اسلام السيد', '_blank');
  };

  const handleViewProjects = () => {
    // Navigate to work page
    window.location.href = '/work';
  };

  const handleViewAbout = () => {
    // Navigate to about page
    window.location.href = '/about';
  };

  const featuredProjects = workProjectsData[lang].filter(project => project.featured);
  const linkedInTestimonials = testimonialsData[lang];

  return (
    <DynamicLayout>
      <SEO 
        title={lang === 'ar' ? 'اسلام السيد - مطور تطبيقات الجوال' : 'Islam Elsayed - Mobile App Developer & Team Lead'}
        description={lang === 'ar' ? 'مطور تطبيقات الجوال وقائد فريق التطوير مع خبرة في React Native و IBM MobileFirst. عرض المشاريع والمهارات ومعلومات التواصل.' : 'Experienced Mobile App Developer and Development Team Lead specializing in React Native, IBM MobileFirst, and cross-platform development. View portfolio, projects, and contact information.'}
        keywords={lang === 'ar' ? [
          'مطور تطبيقات الجوال',
          'React Native',
          'IBM MobileFirst',
          'تطوير متعدد المنصات',
          'قائد فريق التطوير',
          'مطور JavaScript',
          'مطور React',
          'مطور Node.js',
          'تطوير iOS',
          'تطوير Android',
          'مطور ويب',
          'UAE',
          'دبي'
        ] : [
          'Mobile App Developer',
          'React Native Developer',
          'IBM MobileFirst',
          'Cross-platform Development',
          'Team Lead',
          'Full Stack Developer',
          'Mobile Development',
          'iOS Developer',
          'Android Developer',
          'JavaScript Developer',
          'Node.js Developer',
          'React Developer',
          'Portfolio',
          'UAE Developer',
          'Dubai Developer'
        ]}
        image="/og-image.svg"
        url="https://islammelsayed.com"
      />
      
      <BackgroundCanvas />
      
      <main className="relative z-10 min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative py-8 sm:py-12 md:py-16 px-4 bg-gradient-to-b from-white/80 to-white/60 dark:from-gray-900/80 dark:to-gray-900/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h1 className="page-title hero-title">
                {t.name}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-4 font-medium hero-description">
                {t.heroDesc}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4 hero-buttons">
                <Button onClick={handleContact} className="btn-primary w-full sm:w-auto text-lg">
                  {t.contactMe}
                </Button>
                <CalendlyButton className="w-full sm:w-auto text-lg">
                  {lang === 'ar' ? 'حجز موعد' : 'Book a Call'}
                </CalendlyButton>
                <Button onClick={handleViewProjects} variant="outline" className="btn-secondary w-full sm:w-auto text-lg">
                  {t.viewProjects}
                </Button>
                <Button onClick={handleViewAbout} variant="outline" className="btn-secondary w-full sm:w-auto text-lg">
                  {lang === 'ar' ? 'تعرف علي' : 'About Me'}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Summary */}
        <ExperienceStats />

        {/* Approach Section */}
        <section className="py-8 sm:py-12 px-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="section-title gradient-text">
                {lang === 'ar' ? 'منهجيتي في العمل' : 'My Development Approach'}
              </h2>
              <p className="section-subtitle">
                {lang === 'ar' 
                  ? 'نهج شامل ومنظم لضمان نجاح كل مشروع'
                  : 'A comprehensive and systematic approach to ensure every project\'s success'
                }
              </p>
            </div>
            
            {/* Mobile/Tablet: Sticky Approach Cards */}
            <div className="sticky-cards-container lg:hidden">
              {[
                {
                  number: '01',
                  title: lang === 'ar' ? 'تحليل المتطلبات' : 'Requirements Analysis',
                  description: lang === 'ar' 
                    ? 'أقوم بتحليل شامل للمتطلبات والتقنيات المطلوبة لضمان الحل الأمثل للمشروع'
                    : 'I conduct comprehensive analysis of requirements and technologies to ensure optimal project solutions',
                  icon: '📋'
                },
                {
                  number: '02',
                  title: lang === 'ar' ? 'التصميم والتطوير' : 'Design & Development',
                  description: lang === 'ar'
                    ? 'أطور حلول تقنية متقدمة باستخدام أحدث التقنيات وأفضل الممارسات'
                    : 'I develop advanced technical solutions using cutting-edge technologies and best practices',
                  icon: '💻'
                },
                {
                  number: '03',
                  title: lang === 'ar' ? 'الاختبار والتحسين' : 'Testing & Optimization',
                  description: lang === 'ar'
                    ? 'أقوم باختبار شامل وتحسين الأداء لضمان الجودة العالية والتجربة المثلى'
                    : 'I conduct comprehensive testing and performance optimization to ensure high quality and optimal experience',
                  icon: '🔧'
                },
                {
                  number: '04',
                  title: lang === 'ar' ? 'النشر والدعم' : 'Deployment & Support',
                  description: lang === 'ar'
                    ? 'أضمن النشر الآمن والتشغيل المستقر مع تقديم الدعم الفني المستمر'
                    : 'I ensure secure deployment and stable operation with ongoing technical support',
                  icon: '🚀'
                }
              ].map((approach, index) => (
                <div className="sticky-card" key={index}>
                  <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 approach-card">
                    <div className="text-center">
                      <div className="text-5xl mb-6">{approach.icon}</div>
                      <div className="text-3xl font-bold text-blue-600 mb-4">{approach.number}</div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">{approach.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">{approach.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Desktop: Regular Approach Grid */}
            <div className="hidden lg:grid lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  number: '01',
                  title: lang === 'ar' ? 'تحليل المتطلبات' : 'Requirements Analysis',
                  description: lang === 'ar' 
                    ? 'أقوم بتحليل شامل للمتطلبات والتقنيات المطلوبة لضمان الحل الأمثل للمشروع'
                    : 'I conduct comprehensive analysis of requirements and technologies to ensure optimal project solutions',
                  icon: '📋'
                },
                {
                  number: '02',
                  title: lang === 'ar' ? 'التصميم والتطوير' : 'Design & Development',
                  description: lang === 'ar'
                    ? 'أطور حلول تقنية متقدمة باستخدام أحدث التقنيات وأفضل الممارسات'
                    : 'I develop advanced technical solutions using cutting-edge technologies and best practices',
                  icon: '💻'
                },
                {
                  number: '03',
                  title: lang === 'ar' ? 'الاختبار والتحسين' : 'Testing & Optimization',
                  description: lang === 'ar'
                    ? 'أقوم باختبار شامل وتحسين الأداء لضمان الجودة العالية والتجربة المثلى'
                    : 'I conduct comprehensive testing and performance optimization to ensure high quality and optimal experience',
                  icon: '🔧'
                },
                {
                  number: '04',
                  title: lang === 'ar' ? 'النشر والدعم' : 'Deployment & Support',
                  description: lang === 'ar'
                    ? 'أضمن النشر الآمن والتشغيل المستقر مع تقديم الدعم الفني المستمر'
                    : 'I ensure secure deployment and stable operation with ongoing technical support',
                  icon: '🚀'
                }
              ].map((approach, index) => (
                <div key={index} className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 approach-card">
                  <div className="text-center">
                    <div className="text-4xl mb-4">{approach.icon}</div>
                    <div className="text-2xl font-bold text-blue-600 mb-3">{approach.number}</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">{approach.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{approach.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Countries Section */}
        <CountriesSection />

        {/* Featured Projects Section */}
        <section className="py-8 sm:py-12 px-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="section-title gradient-text">{t.projectsTitle}</h2>
              <p className="section-subtitle">{t.projectsSubtitle}</p>
            </div>
            
            {/* Mobile/Tablet: Sticky Project Cards */}
            <div className="sticky-cards-container lg:hidden">
              {featuredProjects.map((project, index) => (
                <div className="sticky-card" key={index}>
                  <ProjectCard 
                    title={project.title}
                    role={project.role}
                    stack={project.stack}
                    result={project.result}
                    description={project.description}
                    image={project.image}
                    date={project.date}
                  />
                </div>
              ))}
            </div>
            
            {/* Desktop: Regular Grid */}
            <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <div key={index} className="transform hover:scale-105 transition-transform duration-300">
                  <ProjectCard 
                    title={project.title}
                    role={project.role}
                    stack={project.stack}
                    result={project.result}
                    description={project.description}
                    image={project.image}
                    date={project.date}
                  />
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button onClick={handleViewProjects} className="btn-primary text-lg">
                {lang === 'ar' ? 'عرض جميع المشاريع' : 'View All Projects'}
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 sm:py-20 px-4 testimonials-section bg-gradient-to-b from-white/60 to-gray-50/60 dark:from-gray-900/60 dark:to-gray-800/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="section-title gradient-text">{t.testimonialsTitle}</h2>
              <p className="section-subtitle">{t.testimonialsSubtitle}</p>
            </div>
            
            {/* Mobile/Tablet: Sticky Testimonial Cards */}
            <div className="sticky-cards-container lg:hidden">
              {linkedInTestimonials.map((testimonial, index) => (
                <div className="sticky-card" key={index}>
                  <div className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:border-blue-300 dark:hover:border-blue-400 transform hover:-translate-y-2 testimonial-card">
                    {/* Quote Icon */}
                    <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                      </svg>
                    </div>
                    
                    {/* Testimonial Content */}
                    <div className="mt-4">
                      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic text-lg">
                        "{testimonial.quote}"
                      </p>
                      
                      {/* Author Info */}
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
                            <span className="text-white font-bold text-lg">
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-900 dark:text-gray-100 text-lg truncate">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                            {testimonial.position}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Desktop: Regular Testimonials Grid */}
            <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {linkedInTestimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:border-blue-300 dark:hover:border-blue-400 transform hover:-translate-y-2 testimonial-card"
                >
                  {/* Quote Icon */}
                  <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  
                  {/* Testimonial Content */}
                  <div className="mt-4">
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic text-lg">
                      "{testimonial.quote}"
                    </p>
                    
                    {/* Author Info */}
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
                          <span className="text-white font-bold text-lg">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900 dark:text-gray-100 text-lg truncate">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                          {testimonial.position}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
            
            {/* View More Button */}
            <div className="text-center mt-12">
              <Button 
                onClick={() => window.open('https://www.linkedin.com/in/islammohamed92/', '_blank')}
                className="btn-secondary text-lg group"
              >
                <span className="flex items-center gap-2">
                  {lang === 'ar' ? 'عرض المزيد من التوصيات' : 'View More Recommendations'}
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Button>
            </div>
          </div>
        </section>

        {/* Extra bottom spacing for mobile/tablet sticky cards */}
        <div className="h-32 sm:h-48 md:h-64 lg:hidden"></div>
        
        {/* Copyright Section */}
        <footer className="py-8 px-4 bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="mb-4 sm:mb-0">
                <p className="text-gray-600 dark:text-gray-400">
                  © 2024 {lang === 'ar' ? 'اسلام السيد' : 'Islam Elsayed'}. {lang === 'ar' ? 'جميع الحقوق محفوظة' : 'All rights reserved'}.
                </p>
              </div>
              <div className="flex space-x-6">
                <a 
                  href="https://www.linkedin.com/in/islammohamed92/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  LinkedIn
                </a>
                <a 
                  href="mailto:islammohamed12@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {lang === 'ar' ? 'تواصل' : 'Contact'}
                </a>
              </div>
            </div>
          </div>
        </footer>
        
        {/* Floating Chat */}
        <FloatingChat />
      </main>
    </DynamicLayout>
  );
} 
'use client';
import { Button } from '@/components/ui/button';
import FloatingChat from '@/components/features/FloatingChat';
import BackgroundCanvas from '@/components/layout/BackgroundCanvas';
import { useLanguage } from './LanguageProvider';
import DynamicLayout from '@/components/layout/DynamicLayout';
import SEO from '@/components/layout/SEO';
import ProjectCard from '@/components/cards/ProjectCard';
import ExperienceStats from '@/components/sections/ExperienceStats';
import ApproachSection from '@/components/sections/ApproachSection';
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
        <ApproachSection />

        {/* Countries Section */}
        <CountriesSection />

        {/* Featured Projects Section */}
        <section className="py-8 sm:py-12 px-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="section-title gradient-text">{t.projectsTitle}</h2>
              <p className="section-subtitle">{t.projectsSubtitle}</p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
        <section className="py-8 sm:py-12 px-4 testimonials-section bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="section-title gradient-text">{t.testimonialsTitle}</h2>
              <p className="section-subtitle">{t.testimonialsSubtitle}</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {linkedInTestimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 dark:text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-gray-100">{testimonial.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.position}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-500">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

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
'use client';
import { useLanguage } from '@/app/LanguageProvider';
import DynamicLayout from '@/components/layout/DynamicLayout';
import SEO from '@/components/layout/SEO';
import ProjectCard from '@/components/cards/ProjectCard';
import BackgroundCanvas from '@/components/layout/BackgroundCanvas';
import FloatingChat from '@/components/features/FloatingChat';
import workProjectsData from '@/data/content/projects/work-projects.json';

export default function WorkPage() {
  const { t, lang } = useLanguage();
  const workProjects = workProjectsData[lang] || workProjectsData['en'];

  return (
    <DynamicLayout>
      <SEO 
        title={lang === 'ar' ? 'الأعمال - اسلام السيد' : 'Work - Islam Elsayed'}
        description={lang === 'ar' ? 'عرض مشاريع اسلام السيد في تطوير تطبيقات الجوال والويب. مشاريع React Native و IBM MobileFirst و تطبيقات المؤسسات.' : 'View Islam Elsayed\'s projects in mobile and web development. React Native, IBM MobileFirst, and enterprise applications.'}
        keywords={lang === 'ar' ? [
          'مشاريع تطوير الجوال',
          'React Native',
          'IBM MobileFirst',
          'تطبيقات المؤسسات',
          'تطوير الويب',
          'مشاريع اسلام السيد'
        ] : [
          'Mobile Development Projects',
          'React Native Projects',
          'IBM MobileFirst Projects',
          'Enterprise Applications',
          'Web Development',
          'Islam Elsayed Projects'
        ]}
        image="/og-image.svg"
        url="https://islammelsayed.com/work"
      />
      
      <BackgroundCanvas />
      
      <main className="relative z-10 min-h-screen pt-20">
        {/* Projects Section */}
        <section className="py-8 sm:py-12 px-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="page-title animate-fade-in">
                {lang === 'ar' ? 'تصميم النجاح' : 'Designing Success'}
              </h1>
              <p className="section-subtitle animate-fade-in-delay">
                {lang === 'ar' 
                  ? 'اكتشف كيف أقود فرق التطوير لبناء تطبيقات جوال وويب مبتكرة مع ميزات الذكاء الاصطناعي. استكشف القصص وراء المشاريع الناجحة التي أحدثت تحولاً في الخدمات الحكومية والبنكية.'
                  : 'Discover how I lead development teams to build innovative mobile and web applications with AI features. Explore the stories behind successful projects that transformed government and banking services.'
                }
              </p>
            </div>
            
            {/* Projects Grid */}
            <div className="relative">
              {/* Mobile and Tablet: Sticky Cards */}
              <div className="sticky-cards-container lg:hidden">
                {workProjects.map((project, idx) => (
                  <div className="sticky-card" key={idx}>
                    <ProjectCard {...project} />
                  </div>
                ))}
              </div>
              
              {/* Desktop: Regular Grid */}
              <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {workProjects.map((project, idx) => (
                  <div key={idx} className="transform hover:scale-105 transition-transform duration-300">
                    <ProjectCard {...project} />
                  </div>
                ))}
              </div>
              
              {/* Extra bottom spacing for mobile/tablet sticky cards */}
              <div className="h-32 sm:h-48 md:h-64 lg:hidden"></div>
            </div>
          </div>
        </section>
        
        {/* Floating Chat */}
        <FloatingChat />
      </main>
    </DynamicLayout>
  );
} 
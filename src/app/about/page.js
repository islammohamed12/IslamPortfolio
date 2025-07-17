'use client';
import React from 'react';
import { useLanguage } from '@/app/LanguageProvider';
import DynamicLayout from '@/components/layout/DynamicLayout';
import SEO from '@/components/layout/SEO';
import BackgroundCanvas from '@/components/layout/BackgroundCanvas';
import { Button } from '@/components/ui/button';
import experienceData from '@/data/content/experience.json';
import FloatingChat from '@/components/features/FloatingChat';
import expertiseAreasData from '@/data/config/expertise-areas.json';
import achievementsData from '@/data/config/achievements.json';

export default function AboutPage() {
  const { lang } = useLanguage();

  const handleContact = () => {
    window.location.href = '/contact';
  };

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/islammohamed92/', '_blank');
  };

  // Get experience data from centralized JSON
  const experience = experienceData[lang];

  const expertiseAreas = expertiseAreasData[lang];
  const achievements = achievementsData[lang];

  return (
    <DynamicLayout>
      <SEO 
        title={lang === 'ar' ? 'حول - اسلام السيد' : 'About - Islam Elsayed'}
        description={lang === 'ar' ? 'تعرف على اسلام السيد - مطور تطبيقات الجوال والويب مع خبرة 13+ عام في قيادة فرق التطوير وتطبيقات المؤسسات.' : 'Learn about Islam Elsayed - Mobile and Web App Developer with 13+ years experience leading development teams and enterprise applications.'}
        keywords={lang === 'ar' ? [
          'اسلام السيد',
          'مطور تطبيقات الجوال',
          'React Native',
          'IBM MobileFirst',
          'قائد فريق التطوير',
          'تطبيقات المؤسسات'
        ] : [
          'Islam Elsayed',
          'Mobile App Developer',
          'React Native',
          'IBM MobileFirst',
          'Development Team Lead',
          'Enterprise Applications'
        ]}
        image="/og-image.svg"
        url="https://islammelsayed.com/about"
      />
      
      <BackgroundCanvas />
      
      <main className="relative z-10 min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-8 sm:py-12 md:py-16 px-4 bg-gradient-to-b from-white/80 to-white/60 dark:from-gray-900/80 dark:to-gray-900/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-8 sm:mb-12">
              <img
                src="/assets/islam-profile.jpg"
                alt="Islam Elsayed"
                className="w-40 h-40 rounded-full object-cover object-top border-4 border-blue-200 shadow-lg mb-6"
              />
              <h1 className="page-title">
                {lang === 'ar' ? 'مرحباً، أنا اسلام' : 'Hey there, I\'m Islam'}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
                {lang === 'ar'
                  ? 'مطور تطبيقات الجوال والويب مع خبرة 13+ عام في قيادة فرق التطوير وتطوير حلول المؤسسات المتقدمة. متخصص في React Native و IBM MobileFirst و تكامل الذكاء الاصطناعي.'
                  : 'Mobile and Web App Developer with 13+ years experience leading development teams and building advanced enterprise solutions. Specialized in React Native, IBM MobileFirst, and AI integration.'
                }
              </p>
              
              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-gray-600">📧</span>
                  <a 
                    href="mailto:islammohamed12@gmail.com"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    islammohamed12@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-gray-600">📍</span>
                  <span className="text-gray-700">
                    {lang === 'ar' ? 'دبي، الإمارات العربية المتحدة' : 'Dubai, United Arab Emirates'}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button onClick={handleContact} className="btn-primary">
                  {lang === 'ar' ? 'تواصل معي' : 'Contact Me'}
                </Button>
                <Button onClick={handleLinkedIn} variant="outline" className="btn-secondary">
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Areas of Expertise */}
        <section className="py-8 sm:py-12 px-4 bg-white/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="section-title gradient-text">
                {lang === 'ar' ? 'مجالات الخبرة' : 'Areas of Expertise'}
              </h2>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {expertiseAreas.map((area, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${area.color} rounded-lg flex items-center justify-center mr-4`}>
                      <span className="text-2xl">{area.icon}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{area.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Experience Timeline */}
        <section className="py-8 sm:py-12 px-4 bg-gray-50/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="section-title gradient-text">
                {experience.title}
              </h2>
            </div>
            
            <div className="space-y-8">
              {experience.experiences.map((exp, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{exp.title}</h3>
                      <p className="text-lg font-medium text-blue-600 mb-1">{exp.company}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                        <p className="text-sm text-gray-500">{exp.period}</p>
                        <span className="text-gray-400">•</span>
                        <p className="text-sm text-gray-600 font-medium">{exp.location}</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>
                  
                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-600 mb-2">
                      {lang === 'ar' ? 'التقنيات المستخدمة:' : 'Technologies:'}
                    </h4>
                    <p className="text-sm text-gray-700 bg-gray-50/50 rounded px-3 py-2">
                      {exp.technologies.join(', ')}
                    </p>
                  </div>
                  
                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-600 mb-2">
                      {lang === 'ar' ? 'الإنجازات الرئيسية:' : 'Key Achievements:'}
                    </h4>
                    <div className="space-y-2">
                      {exp.highlights.map((achievement, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <span className="text-green-500 mt-1">✓</span>
                          <span className="text-gray-700 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-8 sm:py-12 px-4 bg-white/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="section-title gradient-text">
                {lang === 'ar' ? 'الإنجازات الرئيسية' : 'Key Achievements'}
              </h2>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300">
                  <div className="text-center">
                    <div className="text-4xl mb-4">{achievement.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{achievement.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-8 sm:py-12 px-4 bg-gradient-to-r from-blue-50/80 to-purple-50/80 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {lang === 'ar' ? 'هل تريد العمل معي؟' : 'Want to work together?'}
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              {lang === 'ar'
                ? 'دعنا نناقش مشروعك القادم ونحوله إلى حقيقة مع أحدث التقنيات والحلول المبتكرة.'
                : 'Let\'s discuss your next project and turn it into reality with the latest technologies and innovative solutions.'
              }
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button onClick={handleContact} className="btn-primary text-lg">
                {lang === 'ar' ? 'تواصل معي الآن' : 'Contact Me Now'}
              </Button>
              <Button onClick={handleLinkedIn} variant="outline" className="btn-secondary text-lg">
                LinkedIn
              </Button>
            </div>
          </div>
        </section>
        
        {/* Floating Chat */}
        <FloatingChat />
      </main>
    </DynamicLayout>
  );
} 
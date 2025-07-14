'use client';
import { useState } from 'react';
import { useLanguage } from '../LanguageProvider';
import DynamicLayout from '../DynamicLayout';
import SEO from '../../components/SEO';
import ProjectCard from '../../components/ProjectCard';
import BackgroundCanvas from '../../components/BackgroundCanvas';

export default function WorkPage() {
  const { t, lang } = useLanguage();

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
        image="/og-image.jpg"
        url="https://islamelsayed.vercel.app/work"
      />
      
      <BackgroundCanvas />
      
      <main className="relative z-10 min-h-screen pt-20">
        {/* Projects Section */}
        <section className="py-8 sm:py-12 px-4 bg-white/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="section-title gradient-text animate-fade-in">
                {lang === 'ar' ? 'تصميم النجاح' : 'Designing Success'}
              </h1>
              <p className="section-subtitle animate-fade-in-delay">
                {lang === 'ar' 
                  ? 'اكتشف كيف أقود فرق التطوير لبناء تطبيقات جوال وويب مبتكرة مع ميزات الذكاء الاصطناعي. استكشف القصص وراء المشاريع الناجحة التي أحدثت تحولاً في الخدمات الحكومية والبنكية.'
                  : 'Discover how I lead development teams to build innovative mobile and web applications with AI features. Explore the stories behind successful projects that transformed government and banking services.'
                }
              </p>
            </div>
            
            {/* Sticky Cards Container */}
            <div className="relative">
              <div className="sticky-cards-container">
                <div className="sticky-card">
                  <ProjectCard 
                    title="FAHR AI Assistant"
                    role={lang === 'ar' ? "قائد فريق التطوير" : "Development Team Lead"}
                    stack="OpenAI, FAISS, React, Node.js, Python"
                    result={lang === 'ar' ? "تحسين الكفاءة 40%" : "40% Efficiency Improvement"}
                    description={lang === 'ar' ? "تطوير نظام RAG آمن وقابل للتوسع باستخدام OpenAI و FAISS لدعم استعلامات الموارد البشرية. دمج وكلاء RAG للتفاعلات متعددة الخطوات" : "Developed a secure and scalable RAG system using OpenAI and FAISS to support HR queries. Integrated RAG agents for multi-step interactions"}
                    image="/project1.jpg"
                    date="2024"
                  />
                </div>
                
                <div className="sticky-card">
                  <ProjectCard 
                    title="FAHR HR UXUI"
                    role={lang === 'ar' ? "مهندس واجهة المستخدم" : "UX/UI Engineer"}
                    stack="React, Next.js, IBM MobileFirst"
                    result={lang === 'ar' ? "منصة إدارة شاملة" : "Comprehensive Management Platform"}
                    description={lang === 'ar' ? "تطبيق ويب React مبني بـ Next.js ومنصة IBM MobileFirst للهيئة الاتحادية للموارد البشرية الحكومية" : "React web application built with Next.js and IBM MobileFirst platform for the Federal Authority for Government Human Resources"}
                    image="/project2.jpg"
                    date="2023"
                  />
                </div>
                
                <div className="sticky-card">
                  <ProjectCard 
                    title="FAHR Mobile App"
                    role={lang === 'ar' ? "مطور تطبيقات الجوال" : "Mobile App Developer"}
                    stack="React Native, IBM MobileFirst"
                    result={lang === 'ar' ? "خدمات HR على الجوال" : "Mobile HR Services"}
                    description={lang === 'ar' ? "تطبيق React Native (Android & iOS) مبني بـ IBM MobileFirst، يقدم خدمات الموارد البشرية على الجوال" : "React Native app (Android & iOS) built with IBM MobileFirst, delivering HR services on mobile"}
                    image="/project3.jpg"
                    date="2023"
                    appStoreLinks={{
                      appStore: "https://apps.apple.com/us/app/fahr-smart-app/id918247230",
                      playStore: "https://play.google.com/store/apps/details?id=com.Fahr"
                    }}
                  />
                </div>
                
                <div className="sticky-card">
                  <ProjectCard 
                    title="Ajman One App"
                    role={lang === 'ar' ? "مطور تطبيقات الجوال" : "Mobile App Developer"}
                    stack="React Native, IBM MobileFirst"
                    result={lang === 'ar' ? "خدمات e-wallet شاملة" : "Comprehensive E-Wallet Services"}
                    description={lang === 'ar' ? "تطبيق جوال (iOS & Android) مطور بـ React Native و IBM MobileFirst، يقدم خدمات e-wallet ومدفوعات المرافق" : "Mobile app (iOS & Android) developed with React Native and IBM MobileFirst, offering e-wallet services and utility payments"}
                    image="/project4.jpg"
                    date="2022"
                    appStoreLinks={{
                      appStore: "https://apps.apple.com/ae/app/ajman-one/id1234567891",
                      playStore: "https://play.google.com/store/apps/details?id=ae.ajman.one"
                    }}
                  />
                </div>
                
                <div className="sticky-card">
                  <ProjectCard 
                    title="RTA Mobile Suite"
                    role={lang === 'ar' ? "قائد فريق التطوير" : "Development Team Lead"}
                    stack="IBM MobileFirst, React Native"
                    result={lang === 'ar' ? "منصة موحدة متعددة التطبيقات" : "Unified Multi-App Platform"}
                    description={lang === 'ar' ? "منصة موحدة لتطبيقات RTA متعددة (السائقين والمركبات، الشركات، المواقف الذكية، RTA دبي)" : "Unified platform for multiple RTA apps (Drivers & Vehicles, Companies, Smart Parking, RTA Dubai)"}
                    image="/project5.jpg"
                    date="2022"
                    appStoreLinks={{
                      appStore: "https://apps.apple.com/ae/app/rta-dubai/id426109507",
                      playStore: "https://play.google.com/store/apps/details?id=com.rta.rtadubai"
                    }}
                  />
                </div>
                
                <div className="sticky-card">
                  <ProjectCard 
                    title="Al Rajhi Bank App"
                    role={lang === 'ar' ? "مطور تطبيقات الجوال" : "Mobile App Developer"}
                    stack="React Native, IBM MobileFirst"
                    result={lang === 'ar' ? "تطبيق بنكي متعدد المنصات" : "Cross-Platform Banking App"}
                    description={lang === 'ar' ? "تطبيق e-banking متعدد المنصات (Android, iOS) وتطبيق Windows Phone أصلي لبنك الراجحي، السعودية" : "Cross-platform e-banking app (Android, iOS) and native Windows Phone app for Al Rajhi Bank, Saudi Arabia"}
                    image="/project6.jpg"
                    date="2021"
                    appStoreLinks={{
                      appStore: "https://apps.apple.com/sa/app/al-rajhi-bank/id1234567893",
                      playStore: "https://play.google.com/store/apps/details?id=sa.com.alrajhi.bank"
                    }}
                  />
                </div>
                
                <div className="sticky-card">
                  <ProjectCard 
                    title="Al Rajhi Takaful App"
                    role={lang === 'ar' ? "مطور تطبيقات الجوال" : "Mobile App Developer"}
                    stack="React Native, IBM MobileFirst"
                    result={lang === 'ar' ? "حل تأمين إلكتروني" : "Electronic Insurance Solution"}
                    description={lang === 'ar' ? "حل e-insurance متعدد المنصات (Android, iOS) للراجحي تكافل، السعودية" : "Cross-platform e-insurance solution (Android, iOS) for Al Rajhi Takaful, Saudi Arabia"}
                    image="/project7.jpg"
                    date="2021"
                    appStoreLinks={{
                      appStore: "https://apps.apple.com/sa/app/al-rajhi-takaful/id1234567894",
                      playStore: "https://play.google.com/store/apps/details?id=sa.com.alrajhi.takaful"
                    }}
                  />
                </div>
                
                <div className="sticky-card">
                  <ProjectCard 
                    title="Al Bilad App"
                    role={lang === 'ar' ? "مطور تطبيقات الجوال" : "Mobile App Developer"}
                    stack="React Native, IBM MobileFirst"
                    result={lang === 'ar' ? "تطبيق تأمين متعدد المنصات" : "Cross-Platform Insurance App"}
                    description={lang === 'ar' ? "تطبيق تأمين متعدد المنصات (Android, iOS) لبنك البلد، السعودية" : "Cross-platform insurance app (Android, iOS) for Al Bilad Bank, Saudi Arabia"}
                    image="/project8.jpg"
                    date="2020"
                    appStoreLinks={{
                      appStore: "https://apps.apple.com/sa/app/al-bilad/id1234567895",
                      playStore: "https://play.google.com/store/apps/details?id=sa.com.bilad"
                    }}
                  />
                </div>
                
                <div className="sticky-card">
                  <ProjectCard 
                    title="RTA Chatbot Project"
                    role={lang === 'ar' ? "مطور AI" : "AI Developer"}
                    stack="AI, Chatbot, AWS"
                    result={lang === 'ar' ? "تحسين إمكانية الوصول للخدمات" : "Improved Service Accessibility"}
                    description={lang === 'ar' ? "مساهمة في تطوير chatbot مدعوم بالذكاء الاصطناعي لهيئة الطرق والمواصلات بدبي، تحسين إمكانية الوصول للخدمات والأتمتة" : "Contributed to developing AI-powered chatbot for Dubai Roads and Transport Authority, improving service accessibility and automation"}
                    image="/project9.jpg"
                    date="2023"
                  />
                </div>
                
                <div className="sticky-card">
                  <ProjectCard 
                    title="Himma Web App"
                    role={lang === 'ar' ? "مطور ويب" : "Web Developer"}
                    stack="React, Node.js, MongoDB"
                    result={lang === 'ar' ? "تطبيق ويب شامل" : "Comprehensive Web Application"}
                    description={lang === 'ar' ? "تطوير تطبيق ويب شامل مع حلول متكاملة مثل AjmanPay integration و UAE Pass authentication" : "Developed a comprehensive web application with integrated solutions like AjmanPay integration and UAE Pass authentication"}
                    image="/project10.jpg"
                    date="2022"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </DynamicLayout>
  );
} 
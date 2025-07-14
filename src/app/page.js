'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import FloatingChat from '../components/FloatingChat';
import BackgroundCanvas from '../components/BackgroundCanvas';
import { useLanguage } from './LanguageProvider';
import DynamicLayout from './DynamicLayout';
import SEO from '../components/SEO';
import ProjectCard from '../components/ProjectCard';
import ExperienceStats from '../components/ExperienceStats';
import ApproachSection from '../components/ApproachSection';

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

  // Featured projects for home page
  const featuredProjects = [
    {
      title: "FAHR AI Assistant",
      role: lang === 'ar' ? "قائد فريق التطوير" : "Development Team Lead",
      stack: "OpenAI, FAISS, React, Node.js, Python",
      result: lang === 'ar' ? "تحسين الكفاءة 40%" : "40% Efficiency Improvement",
      description: lang === 'ar' ? "تطوير نظام RAG آمن وقابل للتوسع باستخدام OpenAI و FAISS لدعم استعلامات الموارد البشرية" : "Developed a secure and scalable RAG system using OpenAI and FAISS to support HR queries",
      image: "/project1.jpg",
      date: "2024"
    },
    {
      title: "FAHR Mobile App",
      role: lang === 'ar' ? "مطور تطبيقات الجوال" : "Mobile App Developer",
      stack: "React Native, IBM MobileFirst",
      result: lang === 'ar' ? "خدمات HR على الجوال" : "Mobile HR Services",
      description: lang === 'ar' ? "تطبيق React Native (Android & iOS) مبني بـ IBM MobileFirst، يقدم خدمات الموارد البشرية على الجوال" : "React Native app (Android & iOS) built with IBM MobileFirst, delivering HR services on mobile",
      image: "/project3.jpg",
      date: "2023"
    },
    {
      title: "Ajman One App",
      role: lang === 'ar' ? "مطور تطبيقات الجوال" : "Mobile App Developer",
      stack: "React Native, IBM MobileFirst",
      result: lang === 'ar' ? "خدمات e-wallet شاملة" : "Comprehensive E-Wallet Services",
      description: lang === 'ar' ? "تطبيق جوال (iOS & Android) مطور بـ React Native و IBM MobileFirst، يقدم خدمات e-wallet ومدفوعات المرافق" : "Mobile app (iOS & Android) developed with React Native and IBM MobileFirst, offering e-wallet services and utility payments",
      image: "/project4.jpg",
      date: "2022"
    }
  ];

  // LinkedIn testimonials
  const linkedInTestimonials = [
    {
      quote: lang === 'ar' 
        ? "اسلام من أفضل الأشخاص الذين عملت معهم وهو زميل مخلص، يفهم الأمور المعقدة. اسلام لاعب فريق موجه؛ مع كل مشكلة كان هناك حل. إنه خبير عالي في حلول وتقنيات التنقل، أنصح بشدة بالعمل مع اسلام."
        : "Islam is one of the best among all people I have worked with and is a loyal colleague, understands complex matters. Islam is a oriented team player; with every problem there was a solution. He is high expert in Mobility solutions and technologies, I Highly recommend Islam.",
      name: "Ahmed Refaie",
      position: lang === 'ar' ? "مدير مشاريع التحول الرقمي" : "Digital Transformation Project/Program Manager",
      company: "PMP®, PMI-ACP®"
    },
    {
      quote: lang === 'ar'
        ? "لقد كنت أعمل مع اسلام في RTA على تطبيقاتهم الجوالة منذ 18 شهراً. إنه متقن تقنياً، مخلص ومتحمس للعمل الجاد. إنه لاعب فريق جيد، مخطط وشخص قيّم كفرد. أنصح بخدماته."
        : "I have been working with Islam in RTA on their mobile apps since last 18 months. He is technically sound, dedicated and passionate to hard work. He is a good team player, planner & a valuable person as an individual. I recommend his services.",
      name: "Kausar Jahan",
      position: lang === 'ar' ? "مدير تصميم UX/CX والمنتجات" : "Lead UX/CX & Product Design Manager",
      company: "RTA"
    },
    {
      quote: lang === 'ar'
        ? "اسلام لديه شغف لتعلم التقنيات الجديدة، إنه عامل مجتهد، ويعرف الكثير من التقنيات المتعلقة بتطبيقات الجوال لكل من Native و Cross. ولديه إحساس بالإلحاح وملكية رائعة للعمل الذي يقوم به."
        : "Islam has the passion to learn new technologies, he is a hard worker, and knows a lot of technologies related to the mobile applications for both native and cross. And he has the sense of urgency and has a great ownership for the work he is doing.",
      name: "Mostafa Farahat",
      position: lang === 'ar' ? "مهندس حلول" : "Solution Architect",
      company: "IBM"
    },
    {
      quote: lang === 'ar'
        ? "عملت مع اسلام لمدة عام ونصف تقريباً. لديه مواهب ابتكارية ممتازة. عامل مجتهد، يعمل في فريق بموقف إيجابي، مهارات تواصل جيدة وموجه نحو العملاء."
        : "I worked with Islam for about 1 years and half. He has excellent innovative talents. Hard worker, work on a team with positive attitude, good communication skills and customer oriented.",
      name: "Wael Abdel Rahman",
      position: lang === 'ar' ? "نائب مدير PMO" : "PMO Deputy Director",
      company: "e-finance"
    },
    {
      quote: lang === 'ar'
        ? "فرد مخلص ومتفانٍ بوضوح لديه طموح للنجاح في أي بيئة معينة، مع نقاط قوة في تطوير تطبيقات الجوال."
        : "A loyal and clearly dedicated individual who has an ambition to succeed in any given environment, with strengths in Mobile Application Development.",
      name: "Mohamed Shebl Farrag",
      position: lang === 'ar' ? "قائد تقني" : "Technical Lead",
      company: "IBM Malaysia"
    },
    {
      quote: lang === 'ar'
        ? "بناءً على وقتي في العمل مع اسلام، أنصح به بشدة. إنه عامل مجتهد ومبادر يفهم بالضبط ما يدور حوله المشروع. ينتج عملاً عالي الجودة في الوقت المناسب. كما أنه يفهم المفاهيم الجديدة بسرعة ويقبل النقد البناء والتعليمات المتعلقة بعمله. ستستمتع بالعمل ولن تشعر بالملل أبداً مع عضو مبدع كهذا في فريقك."
        : "Based on my time working with Islam, I recommend him very highly. He is a hard-working self-starter who invariably understands exactly what a project is all about. He produces high quality work in a timely fashion. Also he grasps new concepts quickly and accepts constructive criticism and instruction concerning his work. You will have fun working and never get bored of work with such a creative member at your team.",
      name: "Mona Farag",
      position: lang === 'ar' ? "مستشار تطبيقات وتجربة العمارة" : "Application Consultant & Experience Architecture",
      company: "IBM"
    },
    {
      quote: lang === 'ar'
        ? "كان اسلام من أكثر المهنيين تفانياً خلال عمله في INTELLISC. يمكنني أن أنصح باسلام كشخص ذو تعليم عظيم ومهارات عميقة في حلول الأعمال. اسلام مطور موجه نحو التفاصيل، متألق وموجه نحو الأهداف. دائمًا قادر على التكيف مع بيئات العمل الجديدة."
        : "Islam was one of the most dedicated professionals through his work at INTELLISC. I can recommend Islam as a person with great education and deep skills of business solutions. Islam is a detail oriented, brilliant and goal oriented Developer. Is always capable of adapting to new working environments.",
      name: "Tarek Elywah",
      position: lang === 'ar' ? "مدير هندسة" : "Engineering Manager",
      company: "PMP®, PMI-ACP"
    },
    {
      quote: lang === 'ar'
        ? "اسلام هو ورقة الجوكر، إنه موثوق، فعال، لاعب فريق جيد، ويمكنه التسليم بجودة جيدة تحت ضغط هائل. إنه دائمًا حريص على الحفاظ على كود نظيف ودائمًا يبحث عن طرق لجعل المنتجات أكثر كفاءة في المعالجة وسهلة الصيانة. كان من دواعي سروري العمل معه."
        : "Islam is a Joker card, he is reliable, efficient, a good team player, and can deliver with good quality under enormous pressure. He is always keen to keep a clean code and always looking for ways to make the products more efficient in processing and easy to maintain. It was a pleasure working with him.",
      name: "Maha Ashour, MSc",
      position: lang === 'ar' ? "رئيس تصميم التجربة" : "Head of Experience Design",
      company: "Serco"
    },
    {
      quote: lang === 'ar'
        ? "اسلام، ذكي جداً مع مهارات إدارية وشخصية عالية ساعدته في إدارة والتحكم في مهامه وكذلك الآخرين. إنه موجه نحو الأهداف مع قدرة عالية على تحديد الأهداف والتعامل مع الأوهام والغموض المحيط."
        : "Islam, is very smart with highly managerial and personal skills that helped him to manage and control his tasks as well as other people. He is objective oriented with high capability to identify goals and deal with surrounding illusion and ambiguities.",
      name: "Nashwa Nassar",
      position: lang === 'ar' ? "تصميم تجربة مدفوع بالبيانات" : "Data-Driven Experience Design",
      company: "Ex-IBM"
    },
    {
      quote: lang === 'ar'
        ? "اسلام مطور برمجيات مخلص وموهوب عملت معه."
        : "Islam is a highly dedicated and talented SW developer that i worked with him.",
      name: "Shehab ElDin Tarek Salah",
      position: lang === 'ar' ? "قائد التحول الرقمي" : "Digital Transformation Leader",
      company: "Staff Software Engineer"
    },
    {
      quote: lang === 'ar'
        ? "اسلام مطور برمجيات مخلص وموهوب للغاية، إنه ذكي جداً ومتحمس للعمل، الابتكار والإبداع أثناء العمل من عاداته. استمر يا اسلام :)"
        : "Islam is a highly dedicated and talented SW developer, he is very smart and enthusiastic about work, innovation and creativity during work is one of his habits. Keep it up Islam :)",
      name: "Mohamed Abouzeid",
      position: lang === 'ar' ? "قائد هندسة" : "Engineering Lead, Payments",
      company: "TOGAF, OCJP, AWS CCP"
    },
    {
      quote: lang === 'ar'
        ? "اسلام مطور ذكي جداً ومخلص. كان يمكنه دائمًا العثور على طرق بسيطة لحل المشاكل. أظهر مهارته الممتازة في تحليل المشاكل. اسلام أيضًا شخص متعاون ولاعب فريق رائع."
        : "Islam is a very smart and dedicated developer. He could always find simple ways to solve problems. He showed his excellent problem analysis skill. Islam is also an obliging person and a great team player.",
      name: "Ahmed Moursi",
      position: lang === 'ar' ? "مهندس Full-stack" : "Full-stack engineer",
      company: "Software Developer"
    }
  ];

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
        image="/og-image.jpg"
        url="https://islamelsayed.vercel.app"
      />
      
      <BackgroundCanvas />
      
      <main className="relative z-10 min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative py-8 sm:py-12 md:py-16 px-4 bg-gradient-to-b from-white/80 to-white/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 gradient-text leading-tight hero-title">
                {t.name}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-4 font-medium hero-description">
                {t.heroDesc}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4 hero-buttons">
                <Button onClick={handleContact} className="btn-primary w-full sm:w-auto text-lg">
                  {t.contactMe}
                </Button>
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

        {/* Featured Projects Section */}
        <section className="py-8 sm:py-12 px-4 bg-white/60 backdrop-blur-sm">
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
        <section className="py-8 sm:py-12 px-4 testimonials-section bg-white/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="section-title gradient-text">{t.testimonialsTitle}</h2>
              <p className="section-subtitle">{t.testimonialsSubtitle}</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {linkedInTestimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-gray-200/50">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.position}</p>
                        <p className="text-sm text-gray-500">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Copyright Section */}
        <footer className="py-8 px-4 bg-gray-50/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="mb-4 sm:mb-0">
                <p className="text-gray-600">
                  © 2024 {lang === 'ar' ? 'اسلام السيد' : 'Islam Elsayed'}. {lang === 'ar' ? 'جميع الحقوق محفوظة' : 'All rights reserved'}.
                </p>
              </div>
              <div className="flex space-x-6">
                <a 
                  href="https://www.linkedin.com/in/islammohamed92/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  LinkedIn
                </a>
                <a 
                  href="mailto:islammohamed12@gmail.com"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
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
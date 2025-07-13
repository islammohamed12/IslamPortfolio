'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import FloatingChat from '../components/FloatingChat';
import ProjectCard from '../components/ProjectCard';
import SkillCard from '../components/SkillCard';
import CVDownload from '../components/CVDownload';
import SkillsFilter from '../components/SkillsFilter';
import SkillsStats from '../components/SkillsStats';
import AutoScrollSkills from '../components/AutoScrollSkills';
import { useLanguage } from './LanguageProvider';
import DynamicLayout from './DynamicLayout';
import SEO from '../components/SEO';
// Temporarily removed shadcn/ui imports

export default function Home() {
  const [activeSkillFilter, setActiveSkillFilter] = useState('all');
  const { t, lang, setLang } = useLanguage();

  // Reset filter when language changes
  useEffect(() => {
    setActiveSkillFilter('all');
  }, [lang]);

  const allSkills = [
    // Mobile Development
    {
      title: "React Native",
      description: lang === 'ar' ? "تطوير تطبيقات الجوال (متقدم)" : "Advanced mobile app development",
      icon: "📱",
      color: "from-blue-500 to-blue-600",
      category: lang === 'ar' ? "تطوير الجوال" : "Mobile Development"
    },
    {
      title: "IBM MobileFirst",
      description: lang === 'ar' ? "منصة تطوير تطبيقات الجوال" : "Mobile app development platform",
      icon: "🏢",
      color: "from-indigo-500 to-indigo-600",
      category: lang === 'ar' ? "تطوير الجوال" : "Mobile Development"
    },
    {
      title: "Cordova/PhoneGap",
      description: lang === 'ar' ? "تطوير تطبيقات متعددة المنصات" : "Cross-platform app development",
      icon: "📲",
      color: "from-purple-500 to-purple-600",
      category: lang === 'ar' ? "تطوير الجوال" : "Mobile Development"
    },
    {
      title: "Ionic",
      description: lang === 'ar' ? "تطوير تطبيقات هجينة" : "Hybrid app development",
      icon: "⚡",
      color: "from-blue-400 to-blue-500",
      category: lang === 'ar' ? "تطوير الجوال" : "Mobile Development"
    },
    {
      title: "Android SDK",
      description: lang === 'ar' ? "تطوير تطبيقات Android" : "Android app development",
      icon: "🤖",
      color: "from-green-600 to-green-700",
      category: lang === 'ar' ? "تطوير الجوال" : "Mobile Development"
    },
    
    // Frontend Development
    {
      title: "React",
      description: lang === 'ar' ? "تطوير واجهات المستخدم" : "User interface development",
      icon: "⚛️",
      color: "from-cyan-500 to-cyan-600",
      category: lang === 'ar' ? "تطوير الواجهة الأمامية" : "Frontend Development"
    },
    {
      title: "Angular",
      description: lang === 'ar' ? "إطار عمل JavaScript" : "JavaScript framework",
      icon: "🅰️",
      color: "from-red-500 to-red-600",
      category: lang === 'ar' ? "تطوير الواجهة الأمامية" : "Frontend Development"
    },
    {
      title: "Vue.js",
      description: lang === 'ar' ? "إطار عمل تقدمي" : "Progressive framework",
      icon: "💚",
      color: "from-green-500 to-green-600",
      category: lang === 'ar' ? "تطوير الواجهة الأمامية" : "Frontend Development"
    },
    {
      title: "TypeScript",
      description: lang === 'ar' ? "JavaScript مع أنواع ثابتة" : "JavaScript with static types",
      icon: "🔷",
      color: "from-blue-600 to-blue-700",
      category: lang === 'ar' ? "تطوير الواجهة الأمامية" : "Frontend Development"
    },
    {
      title: "HTML5/CSS3",
      description: lang === 'ar' ? "تطوير الويب الأساسي" : "Core web development",
      icon: "🌐",
      color: "from-orange-500 to-orange-600",
      category: lang === 'ar' ? "تطوير الواجهة الأمامية" : "Frontend Development"
    },
    {
      title: "Bootstrap",
      description: lang === 'ar' ? "إطار عمل CSS" : "CSS framework",
      icon: "🎨",
      color: "from-purple-500 to-purple-600",
      category: lang === 'ar' ? "تطوير الواجهة الأمامية" : "Frontend Development"
    },
    {
      title: "jQuery",
      description: lang === 'ar' ? "مكتبة JavaScript" : "JavaScript library",
      icon: "📜",
      color: "from-blue-400 to-blue-500",
      category: lang === 'ar' ? "تطوير الواجهة الأمامية" : "Frontend Development"
    },
    {
      title: "Backbone.js",
      description: lang === 'ar' ? "إطار عمل JavaScript" : "JavaScript framework",
      icon: "🦴",
      color: "from-gray-600 to-gray-700",
      category: lang === 'ar' ? "تطوير الواجهة الأمامية" : "Frontend Development"
    },
    
    // Backend & Cloud
    {
      title: "Node.js",
      description: lang === 'ar' ? "تطوير الخلفية والسحابة" : "Backend and cloud development",
      icon: "⚡",
      color: "from-green-500 to-green-600",
      category: lang === 'ar' ? "الخلفية والسحابة" : "Backend & Cloud"
    },
    {
      title: ".NET Core",
      description: lang === 'ar' ? "إطار عمل Microsoft" : "Microsoft framework",
      icon: "🔷",
      color: "from-purple-600 to-purple-700",
      category: lang === 'ar' ? "الخلفية والسحابة" : "Backend & Cloud"
    },
    {
      title: "C#",
      description: lang === 'ar' ? "لغة برمجة Microsoft" : "Microsoft programming language",
      icon: "💜",
      color: "from-purple-500 to-purple-600",
      category: lang === 'ar' ? "الخلفية والسحابة" : "Backend & Cloud"
    },
    {
      title: "Python",
      description: lang === 'ar' ? "لغة برمجة متعددة الاستخدامات" : "Versatile programming language",
      icon: "🐍",
      color: "from-yellow-500 to-yellow-600",
      category: lang === 'ar' ? "الخلفية والسحابة" : "Backend & Cloud"
    },
    {
      title: "Java",
      description: lang === 'ar' ? "لغة برمجة كائنية التوجه" : "Object-oriented programming language",
      icon: "☕",
      color: "from-orange-500 to-orange-600",
      category: lang === 'ar' ? "الخلفية والسحابة" : "Backend & Cloud"
    },
    {
      title: "Spring Boot",
      description: lang === 'ar' ? "إطار عمل Java" : "Java framework",
      icon: "🍃",
      color: "from-green-500 to-green-600",
      category: lang === 'ar' ? "الخلفية والسحابة" : "Backend & Cloud"
    },
    {
      title: "MongoDB",
      description: lang === 'ar' ? "قاعدة بيانات NoSQL" : "NoSQL database",
      icon: "🍃",
      color: "from-green-400 to-green-500",
      category: lang === 'ar' ? "الخلفية والسحابة" : "Backend & Cloud"
    },
    {
      title: "SQL Server",
      description: lang === 'ar' ? "قاعدة بيانات Microsoft" : "Microsoft database",
      icon: "🗄️",
      color: "from-blue-600 to-blue-700",
      category: lang === 'ar' ? "الخلفية والسحابة" : "Backend & Cloud"
    },
    {
      title: "MySQL",
      description: lang === 'ar' ? "قاعدة بيانات مفتوحة المصدر" : "Open-source database",
      icon: "🐬",
      color: "from-blue-500 to-blue-600",
      category: lang === 'ar' ? "الخلفية والسحابة" : "Backend & Cloud"
    },
    {
      title: "Oracle",
      description: lang === 'ar' ? "قاعدة بيانات مؤسسية" : "Enterprise database",
      icon: "🔴",
      color: "from-red-600 to-red-700",
      category: lang === 'ar' ? "الخلفية والسحابة" : "Backend & Cloud"
    },
    {
      title: "Redis",
      description: lang === 'ar' ? "قاعدة بيانات في الذاكرة" : "In-memory database",
      icon: "🔴",
      color: "from-red-500 to-red-600",
      category: lang === 'ar' ? "الخلفية والسحابة" : "Backend & Cloud"
    },
    
    // AI & Machine Learning
    {
      title: "OpenAI GPT",
      description: lang === 'ar' ? "نماذج الذكاء الاصطناعي" : "AI language models",
      icon: "🤖",
      color: "from-green-500 to-green-600",
      category: lang === 'ar' ? "الذكاء الاصطناعي" : "AI & Machine Learning"
    },
    {
      title: "LangChain",
      description: lang === 'ar' ? "إطار عمل AI" : "AI framework",
      icon: "🔗",
      color: "from-blue-500 to-blue-600",
      category: lang === 'ar' ? "الذكاء الاصطناعي" : "AI & Machine Learning"
    },
    {
      title: "AWS Bedrock",
      description: lang === 'ar' ? "خدمات AI من Amazon" : "Amazon AI services",
      icon: "☁️",
      color: "from-orange-500 to-orange-600",
      category: lang === 'ar' ? "الذكاء الاصطناعي" : "AI & Machine Learning"
    },
    {
      title: "Amazon SageMaker",
      description: lang === 'ar' ? "منصة تعلم الآلة" : "Machine learning platform",
      icon: "🎓",
      color: "from-purple-500 to-purple-600",
      category: lang === 'ar' ? "الذكاء الاصطناعي" : "AI & Machine Learning"
    },
    {
      title: "AWS Lambda",
      description: lang === 'ar' ? "حوسبة بدون خادم" : "Serverless computing",
      icon: "⚡",
      color: "from-yellow-500 to-yellow-600",
      category: lang === 'ar' ? "الذكاء الاصطناعي" : "AI & Machine Learning"
    },
    {
      title: "IBM Watson",
      description: lang === 'ar' ? "منصة الذكاء الاصطناعي" : "AI platform",
      icon: "🧠",
      color: "from-blue-600 to-blue-700",
      category: lang === 'ar' ? "الذكاء الاصطناعي" : "AI & Machine Learning"
    },
    {
      title: "Alteryx Designer",
      description: lang === 'ar' ? "تحليل البيانات والأتمتة" : "Data analytics and automation",
      icon: "📊",
      color: "from-green-500 to-green-600",
      category: lang === 'ar' ? "الذكاء الاصطناعي" : "AI & Machine Learning"
    },
    
    // Cloud & DevOps
    {
      title: "Docker",
      description: lang === 'ar' ? "الحاويات والنشر" : "Containerization and deployment",
      icon: "🐳",
      color: "from-blue-500 to-blue-600",
      category: lang === 'ar' ? "السحابة وDevOps" : "Cloud & DevOps"
    },
    {
      title: "Kubernetes",
      description: lang === 'ar' ? "إدارة الحاويات" : "Container orchestration",
      icon: "⚓",
      color: "from-blue-600 to-blue-700",
      category: lang === 'ar' ? "السحابة وDevOps" : "Cloud & DevOps"
    },
    {
      title: "CI/CD Pipelines",
      description: lang === 'ar' ? "التكامل والنشر المستمر" : "Continuous integration and deployment",
      icon: "🔄",
      color: "from-green-500 to-green-600",
      category: lang === 'ar' ? "السحابة وDevOps" : "Cloud & DevOps"
    },
    {
      title: "AWS AI Services",
      description: lang === 'ar' ? "خدمات الذكاء الاصطناعي" : "AI services",
      icon: "🤖",
      color: "from-orange-500 to-orange-600",
      category: lang === 'ar' ? "السحابة وDevOps" : "Cloud & DevOps"
    },
    
    // Enterprise & Integration
    {
      title: "Oracle E-Business Suite",
      description: lang === 'ar' ? "نظام تخطيط موارد المؤسسات" : "Enterprise resource planning",
      icon: "🏢",
      color: "from-red-600 to-red-700",
      category: lang === 'ar' ? "المؤسسات والتكامل" : "Enterprise & Integration"
    },
    {
      title: "RESTful APIs",
      description: lang === 'ar' ? "واجهات برمجة التطبيقات" : "Application programming interfaces",
      icon: "🌐",
      color: "from-blue-500 to-blue-600",
      category: lang === 'ar' ? "المؤسسات والتكامل" : "Enterprise & Integration"
    },
    {
      title: "SOAP",
      description: lang === 'ar' ? "بروتوكول تبادل البيانات" : "Data exchange protocol",
      icon: "📡",
      color: "from-gray-600 to-gray-700",
      category: lang === 'ar' ? "المؤسسات والتكامل" : "Enterprise & Integration"
    },
    {
      title: "AJAX",
      description: lang === 'ar' ? "التحديثات غير المتزامنة" : "Asynchronous updates",
      icon: "⚡",
      color: "from-blue-400 to-blue-500",
      category: lang === 'ar' ? "المؤسسات والتكامل" : "Enterprise & Integration"
    },
    {
      title: "XML/JSON",
      description: lang === 'ar' ? "تنسيقات تبادل البيانات" : "Data exchange formats",
      icon: "📄",
      color: "from-gray-500 to-gray-600",
      category: lang === 'ar' ? "المؤسسات والتكامل" : "Enterprise & Integration"
    },
    {
      title: "JSP",
      description: lang === 'ar' ? "صفحات Java Server" : "Java Server Pages",
      icon: "☕",
      color: "from-orange-500 to-orange-600",
      category: lang === 'ar' ? "المؤسسات والتكامل" : "Enterprise & Integration"
    },
    {
      title: "ASP.NET",
      description: lang === 'ar' ? "إطار عمل Microsoft" : "Microsoft framework",
      icon: "🔷",
      color: "from-purple-600 to-purple-700",
      category: lang === 'ar' ? "المؤسسات والتكامل" : "Enterprise & Integration"
    },
    
    // Development Tools
    {
      title: "Git & GitHub",
      description: lang === 'ar' ? "إدارة الكود والتعاون" : "Code management and collaboration",
      icon: "📚",
      color: "from-gray-500 to-gray-600",
      category: lang === 'ar' ? "أدوات التطوير" : "Development Tools"
    },
    {
      title: "Bitbucket",
      description: lang === 'ar' ? "إدارة الكود والتعاون" : "Code management and collaboration",
      icon: "🔵",
      color: "from-blue-500 to-blue-600",
      category: lang === 'ar' ? "أدوات التطوير" : "Development Tools"
    },
    {
      title: "SVN",
      description: lang === 'ar' ? "نظام التحكم في الإصدارات" : "Version control system",
      icon: "📦",
      color: "from-orange-500 to-orange-600",
      category: lang === 'ar' ? "أدوات التطوير" : "Development Tools"
    },
    {
      title: "TFS",
      description: lang === 'ar' ? "Team Foundation Server" : "Team Foundation Server",
      icon: "🔷",
      color: "from-blue-600 to-blue-700",
      category: lang === 'ar' ? "أدوات التطوير" : "Development Tools"
    },
    {
      title: "Rational Rose",
      description: lang === 'ar' ? "أدوات النمذجة" : "Modeling tools",
      icon: "🌹",
      color: "from-pink-500 to-pink-600",
      category: lang === 'ar' ? "أدوات التطوير" : "Development Tools"
    },
    {
      title: "VS Code",
      description: lang === 'ar' ? "بيئة التطوير" : "Development environment",
      icon: "💻",
      color: "from-blue-400 to-blue-500",
      category: lang === 'ar' ? "أدوات التطوير" : "Development Tools"
    },
    {
      title: "Postman",
      description: lang === 'ar' ? "اختبار APIs" : "API testing",
      icon: "📡",
      color: "from-orange-400 to-orange-500",
      category: lang === 'ar' ? "أدوات التطوير" : "Development Tools"
    },
    
    // Methodologies
    {
      title: "Agile (Scrum/Kanban)",
      description: lang === 'ar' ? "منهجيات التطوير الرشيقة" : "Agile development methodologies",
      icon: "🔄",
      color: "from-green-500 to-green-600",
      category: lang === 'ar' ? "المنهجيات" : "Methodologies"
    },
    {
      title: "Waterfall",
      description: lang === 'ar' ? "منهجية التطوير التقليدية" : "Traditional development methodology",
      icon: "🌊",
      color: "from-blue-500 to-blue-600",
      category: lang === 'ar' ? "المنهجيات" : "Methodologies"
    },
    {
      title: "DevSecOps",
      description: lang === 'ar' ? "الأمان في التطوير" : "Security in development",
      icon: "🔒",
      color: "from-red-500 to-red-600",
      category: lang === 'ar' ? "المنهجيات" : "Methodologies"
    }
  ];

  const filteredSkills = activeSkillFilter === 'all' 
    ? allSkills 
    : allSkills.filter(skill => skill.category === activeSkillFilter);

  const handleContact = () => {
    // Open email client
    window.open('mailto:islammohamed12@gmail.com?subject=مشروع جديد - اسلام السيد', '_blank');
  };

  const handleLinkedIn = () => {
    // Open LinkedIn profile
    window.open('https://www.linkedin.com/in/islammohamed92/', '_blank');
  };

  const handleViewProjects = () => {
    // Scroll to projects section
    document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' });
  };

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
        url="https://islamelsayed.com"
      />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-8 sm:py-12 md:py-16 px-4 bg-gradient-to-b from-gray-50/50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full mb-6 sm:mb-8 border border-blue-100 hero-welcome">
                <span className="text-sm sm:text-base font-semibold text-blue-700">{t.welcome}</span>
              </div>
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
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-8 sm:py-12 px-4 bg-gray-50/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="section-title gradient-text">{t.skillsTitle}</h2>
              <p className="section-subtitle">{t.skillsSubtitle}</p>
            </div>
            
            <SkillsStats skills={allSkills} lang={lang} />
            <SkillsFilter key={lang} onFilterChange={setActiveSkillFilter} />
            
            <AutoScrollSkills skills={filteredSkills} lang={lang} />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects-section" className="py-8 sm:py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="section-title gradient-text">{t.projectsTitle}</h2>
              <p className="section-subtitle">{t.projectsSubtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 stagger-animation">
              <ProjectCard 
                title="FAHR AI Assistant"
                role={lang === 'ar' ? "قائد فريق التطوير" : "Development Team Lead"}
                stack="OpenAI, FAISS, React, Node.js, Python"
                result={lang === 'ar' ? "تحسين الكفاءة 40%" : "40% Efficiency Improvement"}
                description={lang === 'ar' ? "تطوير نظام RAG آمن وقابل للتوسع باستخدام OpenAI و FAISS لدعم استعلامات الموارد البشرية. دمج وكلاء RAG للتفاعلات متعددة الخطوات" : "Developed a secure and scalable RAG system using OpenAI and FAISS to support HR queries. Integrated RAG agents for multi-step interactions"}
                image="/project1.jpg"
                date="2024"
              />
              <ProjectCard 
                title="FAHR HR UXUI"
                role={lang === 'ar' ? "مهندس واجهة المستخدم" : "UX/UI Engineer"}
                stack="React, Next.js, IBM MobileFirst"
                result={lang === 'ar' ? "منصة إدارة شاملة" : "Comprehensive Management Platform"}
                description={lang === 'ar' ? "تطبيق ويب React مبني بـ Next.js ومنصة IBM MobileFirst للهيئة الاتحادية للموارد البشرية الحكومية" : "React web application built with Next.js and IBM MobileFirst platform for the Federal Authority for Government Human Resources"}
                image="/project2.jpg"
                date="2023"
              />
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
              <ProjectCard 
                title="RTA Chatbot Project"
                role={lang === 'ar' ? "مطور AI" : "AI Developer"}
                stack="AI, Chatbot, AWS"
                result={lang === 'ar' ? "تحسين إمكانية الوصول للخدمات" : "Improved Service Accessibility"}
                description={lang === 'ar' ? "مساهمة في تطوير chatbot مدعوم بالذكاء الاصطناعي لهيئة الطرق والمواصلات بدبي، تحسين إمكانية الوصول للخدمات والأتمتة" : "Contributed to developing AI-powered chatbot for Dubai Roads and Transport Authority, improving service accessibility and automation"}
                image="/project9.jpg"
                date="2023"
              />
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
        </section>

        {/* CV Download Section */}
        <section className="py-8 sm:py-12 px-4 bg-gray-50/30 cv-section">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="section-title gradient-text">{t.cvTitle}</h2>
              <p className="section-subtitle">{t.cvSubtitle}</p>
            </div>
            <CVDownload />
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-8 sm:py-12 px-4 contact-section">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="section-title gradient-text">{t.contactTitle}</h2>
            <p className="section-subtitle mb-6 sm:mb-8">
              {t.contactSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4">
              <Button onClick={handleContact} className="btn-primary w-full sm:w-auto text-lg">
                {t.sendMessage}
              </Button>
              <Button onClick={handleLinkedIn} variant="outline" className="btn-secondary w-full sm:w-auto text-lg">
                {t.linkedin}
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
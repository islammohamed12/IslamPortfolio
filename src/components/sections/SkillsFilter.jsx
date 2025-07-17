'use client';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../app/LanguageProvider';

export default function SkillsFilter({ onFilterChange }) {
  const { lang } = useLanguage();
  
  const filters = [
    { 
      id: 'all', 
      label: lang === 'ar' ? 'الكل' : 'All', 
      count: 50 
    },
    { 
      id: lang === 'ar' ? 'تطوير الجوال' : 'Mobile Development', 
      label: lang === 'ar' ? 'تطوير الجوال' : 'Mobile Development', 
      count: 5 
    },
    { 
      id: lang === 'ar' ? 'تطوير الواجهة الأمامية' : 'Frontend Development', 
      label: lang === 'ar' ? 'تطوير الواجهات' : 'Frontend Development', 
      count: 8 
    },
    { 
      id: lang === 'ar' ? 'الخلفية والسحابة' : 'Backend & Cloud', 
      label: lang === 'ar' ? 'الخلفية والسحابة' : 'Backend & Cloud', 
      count: 9 
    },
    { 
      id: lang === 'ar' ? 'الذكاء الاصطناعي' : 'AI & Machine Learning', 
      label: lang === 'ar' ? 'الذكاء الاصطناعي' : 'AI & Machine Learning', 
      count: 7 
    },
    { 
      id: lang === 'ar' ? 'السحابة وDevOps' : 'Cloud & DevOps', 
      label: lang === 'ar' ? 'السحابة والأمان' : 'Cloud & DevOps', 
      count: 4 
    },
    { 
      id: lang === 'ar' ? 'المؤسسات والتكامل' : 'Enterprise & Integration', 
      label: lang === 'ar' ? 'الأنظمة المؤسسية' : 'Enterprise & Integration', 
      count: 7 
    },
    { 
      id: lang === 'ar' ? 'أدوات التطوير' : 'Development Tools', 
      label: lang === 'ar' ? 'أدوات التطوير' : 'Development Tools', 
      count: 6 
    },
    { 
      id: lang === 'ar' ? 'المنهجيات' : 'Methodologies', 
      label: lang === 'ar' ? 'المنهجيات' : 'Methodologies', 
      count: 3 
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-2">
      {filters.map((filter) => (
        <Button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          variant="outline"
          className="glass-effect hover:scale-105 transition-all duration-300 text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2"
        >
          <span className="truncate">{filter.label}</span>
          <span className="ml-1 sm:ml-2 px-1 sm:px-2 py-0.5 sm:py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
            {filter.count}
          </span>
        </Button>
      ))}
    </div>
  );
} 
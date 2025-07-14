'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '../app/LanguageProvider';

export default function CVDownload() {
  const { lang } = useLanguage();

  const downloadCV = (format) => {
    const link = document.createElement('a');
    link.href = `/assets/cv-islam-mohamed.${format}`;
    link.download = `cv-islam-mohamed.${format}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="glass-effect hover:scale-105 transition-transform duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <span className="text-2xl">📄</span>
            {lang === 'ar' ? 'السيرة الذاتية - PDF' : 'CV - PDF'}
          </CardTitle>
          <CardDescription>
            {lang === 'ar' 
              ? 'نسخة PDF منسقة بشكل احترافي من سيرتي الذاتية'
              : 'Professionally formatted PDF version of my CV'
            }
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            {lang === 'ar'
              ? 'تحتوي على جميع مهاراتي وخبراتي ومشاريعي بتنسيق PDF احترافي'
              : 'Contains all my skills, experience, and projects in professional PDF format'
            }
          </p>
          <Button 
            onClick={() => downloadCV('pdf')}
            className="w-full btn-primary"
          >
            {lang === 'ar' ? 'تحميل PDF' : 'Download PDF'}
          </Button>
        </CardContent>
      </Card>

      <Card className="glass-effect hover:scale-105 transition-transform duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <span className="text-2xl">📝</span>
            {lang === 'ar' ? 'السيرة الذاتية - Word' : 'CV - Word'}
          </CardTitle>
          <CardDescription>
            {lang === 'ar'
              ? 'نسخة Word قابلة للتعديل من سيرتي الذاتية'
              : 'Editable Word version of my CV'
            }
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            {lang === 'ar'
              ? 'نسخة DOCX يمكن تعديلها وإضافة معلومات إضافية حسب الحاجة'
              : 'DOCX version that can be edited and customized as needed'
            }
          </p>
          <Button 
            onClick={() => downloadCV('docx')}
            className="w-full btn-secondary"
          >
            {lang === 'ar' ? 'تحميل Word' : 'Download Word'}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
} 
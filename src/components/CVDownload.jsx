'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function CVDownload() {
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
            السيرة الذاتية - PDF
          </CardTitle>
          <CardDescription>
            نسخة PDF منسقة بشكل احترافي من سيرتي الذاتية
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            تحتوي على جميع مهاراتي وخبراتي ومشاريعي بتنسيق PDF احترافي
          </p>
          <Button 
            onClick={() => downloadCV('pdf')}
            className="w-full btn-primary"
          >
            تحميل PDF
          </Button>
        </CardContent>
      </Card>

      <Card className="glass-effect hover:scale-105 transition-transform duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <span className="text-2xl">📝</span>
            السيرة الذاتية - Word
          </CardTitle>
          <CardDescription>
            نسخة Word قابلة للتعديل من سيرتي الذاتية
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            نسخة DOCX يمكن تعديلها وإضافة معلومات إضافية حسب الحاجة
          </p>
          <Button 
            onClick={() => downloadCV('docx')}
            className="w-full btn-secondary"
          >
            تحميل Word
          </Button>
        </CardContent>
      </Card>
    </div>
  );
} 
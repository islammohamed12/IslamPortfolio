'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '../app/LanguageProvider';

export default function Chat() {
  const { t, lang } = useLanguage();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const quickActions = [
    {
      label: lang === 'ar' ? 'من أنت؟' : 'Who are you?',
      action: () => sendQuickMessage(lang === 'ar' ? 'من أنت؟' : 'Who are you?')
    },
    {
      label: lang === 'ar' ? 'ما هي مهاراتك؟' : 'What are your skills?',
      action: () => sendQuickMessage(lang === 'ar' ? 'ما هي مهاراتك التقنية؟' : 'What tech stack do you use?')
    },
    {
      label: lang === 'ar' ? 'مشاريعك' : 'Your projects',
      action: () => sendQuickMessage(lang === 'ar' ? 'أخبرني عن مشاريعك' : 'Tell me about your projects')
    },
    {
      label: lang === 'ar' ? 'حجز موعد' : 'Book a call',
      action: () => {
        // Direct Calendly integration
        window.open('https://calendly.com/islammelsayed', '_blank');
        // Also send a message to the chat for context
        sendQuickMessage(lang === 'ar' ? 'أريد حجز موعد' : 'I want to book a call');
      }
    },
    {
      label: lang === 'ar' ? 'تحميل CV' : 'Download CV',
      action: () => {
        const link = document.createElement('a');
        link.href = '/api/download-cv';
        link.download = 'cv-islam-mohamed.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    },
    {
      label: lang === 'ar' ? 'معلومات التواصل' : 'Contact info',
      action: () => sendQuickMessage(lang === 'ar' ? 'ما هي معلومات التواصل الخاصة بك؟' : 'What are your contact details?')
    }
  ];

  const sendQuickMessage = (message) => {
    setInput(message);
    sendMessage(message);
  };

  const sendMessage = async (customMessage = null) => {
    const messageToSend = customMessage || input.trim();
    if (!messageToSend) return;
    
    const userMsg = { role: 'user', content: messageToSend };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMsg] })
      });
      
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await res.json();
      setMessages((prev) => [...prev, data]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages((prev) => [...prev, { 
        role: 'assistant', 
        content: lang === 'ar' ? 'عذراً، حدث خطأ في الاتصال. حاول مرة أخرى.' : 'Sorry, there was a connection error. Please try again.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="glass-effect rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
          AI
        </div>
        <div>
          <h3 className="font-bold text-gray-800 dark:text-gray-200">{t.chatHeader}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {lang === 'ar' ? 'اسأل عن مهاراتي ومشاريعي وخبراتي' : 'Ask about my skills, projects, and experience'}
          </p>
        </div>
      </div>
      
      {/* Quick Actions */}
      <div className="mb-6">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          {lang === 'ar' ? 'اختر من هذه الخيارات السريعة:' : 'Choose from these quick actions:'}
        </p>
        <div className="flex flex-wrap gap-2">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              onClick={action.action}
              variant="outline"
              size="sm"
              className="text-xs bg-white/80 dark:bg-gray-700/80 hover:bg-white dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600"
            >
              {action.label}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="space-y-4 h-80 overflow-y-auto mb-6 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl">
        {messages.length === 0 && (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💬</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400">
              {lang === 'ar' ? 'اسأل عن مهاراتي أو مشاريعي أو خبراتي...' : 'Ask about my skills, projects, or experience...'}
            </p>
          </div>
        )}
        
        {messages.map((m, idx) => (
          <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
              m.role === 'user' 
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                : 'bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600'
            }`}>
              <p className="text-sm leading-relaxed whitespace-pre-line">{m.content}</p>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600 px-4 py-3 rounded-2xl">
              <div className="flex items-center gap-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {lang === 'ar' ? 'جاري الكتابة...' : 'Typing...'}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="flex gap-3">
        <Input
          className="flex-1 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={t.chatPlaceholder}
          disabled={isLoading}
        />
        <Button 
          onClick={() => sendMessage()} 
          disabled={isLoading || !input.trim()}
          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>{lang === 'ar' ? 'جاري...' : 'Sending...'}</span>
            </div>
          ) : (
            <span>{lang === 'ar' ? 'إرسال' : 'Send'}</span>
          )}
        </Button>
      </div>
    </div>
  );
} 
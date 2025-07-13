'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '../app/LanguageProvider';

export default function FloatingChat() {
  const { t, lang } = useLanguage();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  // Set greeting message on language change
  useEffect(() => {
    setMessages([
      {
        role: 'assistant',
        content: t.chatGreeting
      }
    ]);
  }, [lang, t.chatGreeting]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const userMsg = { role: 'user', content: input };
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
    <>
      {/* Floating Chat Button */}
      <div className={`fixed bottom-4 sm:bottom-6 z-50 ${!isOpen ? 'animate-pulse' : 'animate-bounce-in'} ${lang === 'ar' ? 'left-4 sm:left-6' : 'right-4 sm:right-6'}`}>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 transform chat-toggle"
        >
          {isOpen ? (
            <span className="text-lg sm:text-2xl transition-transform duration-300 hover:rotate-90">✕</span>
          ) : (
            <span className="text-lg sm:text-2xl transition-transform duration-300 hover:scale-110">💬</span>
          )}
        </Button>
      </div>

      {/* Chat Window */}
      <div className={`fixed bottom-20 sm:bottom-24 z-50 w-[calc(100vw-2rem)] sm:w-96 h-[400px] sm:h-[500px] bg-white/98 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-200/50 flex flex-col transition-all duration-500 ease-in-out transform chat-window ${lang === 'ar' ? 'left-4 sm:left-6' : 'right-4 sm:right-6'} ${
        isOpen 
          ? 'translate-y-0 opacity-100 scale-100 animate-slide-in-right' 
          : 'translate-y-4 opacity-0 scale-95 pointer-events-none'
      }`}>
          {/* Header */}
          <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 border-b border-gray-200/50 bg-gradient-to-r from-blue-50/80 to-purple-50/80 rounded-t-3xl">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-lg">
              AI
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-gray-900 text-sm sm:text-base truncate">{t.chatHeader}</h3>
              <p className="text-xs sm:text-sm text-gray-600 truncate font-medium">{lang === 'ar' ? 'اسأل عن مهاراتي ومشاريعي وخبراتي' : 'Ask about my skills, projects, and experience'}</p>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="sm"
              className="text-gray-500 hover:text-gray-700 p-2 sm:p-3 rounded-xl"
            >
              <span className="text-base sm:text-lg">✕</span>
            </Button>
          </div>
          
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.length === 0 && (
              <div className="text-center py-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">💬</span>
                </div>
                <p className="text-gray-500 text-sm">{lang === 'ar' ? 'اسأل عن مهاراتي أو مشاريعي أو خبراتي...' : 'Ask about my skills, projects, or experience...'}</p>
              </div>
            )}
            
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs px-3 py-2 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  <p className="leading-relaxed whitespace-pre-line">{m.content}</p>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 px-3 py-2 rounded-2xl">
                  <div className="flex items-center gap-2">
                    <div className="flex space-x-1">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                    <span className="text-xs text-gray-500">{lang === 'ar' ? 'جاري الكتابة...' : 'Typing...'}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Input */}
          <div className="p-3 sm:p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <Input
                className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-2 sm:px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={t.chatPlaceholder}
                disabled={isLoading}
              />
              <Button 
                onClick={sendMessage} 
                disabled={isLoading || !input.trim()}
                size="sm"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed px-2 sm:px-4"
              >
                {isLoading ? (
                  <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <span className="text-xs sm:text-sm">{lang === 'ar' ? 'إرسال' : 'Send'}</span>
                )}
              </Button>
            </div>
          </div>
        </div>
    </>
  );
} 
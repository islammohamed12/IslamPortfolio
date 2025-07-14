import OpenAI from 'openai';
import { aiKnowledge, aiPrompts } from '../../lib/ai-knowledge';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Helper function to detect language
function detectLanguage(text) {
  const arabicRegex = /[\u0600-\u06FF]/;
  return arabicRegex.test(text) ? 'arabic' : 'english';
}

// Helper function to get system prompt based on language
function getSystemPrompt(language) {
  const basePrompt = aiPrompts.system;
  
  if (language === 'arabic') {
    return `أنت المساعد الشخصي لاسلام السيد - مطور تطبيقات الجوال وقائد فريق التطوير. يجب أن تجيب فقط على الأسئلة المتعلقة باسلام السيد ومهاراته ومشاريعه وخبراته.

المعلومات الأساسية:
- الاسم: اسلام السيد
- المسمى الوظيفي: مطور تطبيقات الجوال وقائد فريق التطوير
- الموقع: دبي، الإمارات العربية المتحدة
- الخبرة: 13+ عام
- التخصصات: React Native، IBM MobileFirst، تطوير متعدد المنصات

الميزات المتاحة:
1. معلومات عن اسلام (السيرة الذاتية، المهارات، الخبرة)
2. معلومات التواصل
3. حجز موعد/مكالمة
4. عرض المشاريع/المحفظة
5. الوصول للسيرة الذاتية/CV
6. شرح التقنيات المستخدمة

أجب دائماً باللغة العربية وبأسلوب ودود ومهني. قدم معلومات دقيقة ومفيدة ووجه المستخدمين للإجراءات المناسبة عند الحاجة.`;
  }
  
  return basePrompt;
}

// Helper function to create context from knowledge base
function createContext(language) {
  const context = {
    personal: aiKnowledge.personal,
    bio: aiKnowledge.bio,
    skills: aiKnowledge.skills,
    experience: aiKnowledge.experience,
    projects: aiKnowledge.projects,
    contact: aiKnowledge.contact,
    booking: aiKnowledge.booking,
    resume: aiKnowledge.resume
  };

  if (language === 'arabic') {
    return {
      personal: {
        name: "اسلام السيد",
        title: "مطور تطبيقات الجوال وقائد فريق التطوير",
        location: "دبي، الإمارات العربية المتحدة",
        email: "islammohamed12@gmail.com",
        linkedin: "linkedin.com/in/islammohamed92",
        github: "github.com/islammohamed92",
        languages: ["العربية (اللغة الأم)", "الإنجليزية (متقدم)"],
        experience: "13+ عام",
        availability: "متاح للمشاريع الجديدة والفرص التعاونية"
      },
      bio: {
        summary: "مطور تطبيقات الجوال ذو خبرة في React Native و IBM MobileFirst مع قدرات قيادية في إدارة فرق التطوير. متخصص في بناء تطبيقات عالية الأداء وتطوير حلول حكومية إلكترونية.",
        background: "من مصر إلى الإمارات العربية المتحدة، خبرة شاملة في تطوير تطبيقات الجوال والويب مع تركيز على حلول المؤسسات والذكاء الاصطناعي.",
        expertise: "متخصص في إنشاء حلول جوال مبتكرة وخبرة واسعة في React Native و IBM MobileFirst وتطوير متعدد المنصات."
      },
      skills: aiKnowledge.skills,
      experience: aiKnowledge.experience,
      projects: aiKnowledge.projects,
      contact: aiKnowledge.contact,
      booking: aiKnowledge.booking,
      resume: aiKnowledge.resume,
      countries: {
        workedIn: [
          {
            country: "مصر",
            flag: "🇪🇬",
            period: "2011 - 2021",
            roles: ["مطور تطبيقات الجوال", "مطور برمجيات"],
            companies: ["Innovation Labs", "شركات تقنية مختلفة"],
            highlights: ["بدأت مسيرتي في تطوير تطبيقات الجوال", "طورت أكثر من 10 تطبيق جوال", "اكتسبت خبرة أساسية في React Native و Flutter"]
          },
          {
            country: "الإمارات العربية المتحدة",
            flag: "🇦🇪",
            period: "2021 - الحالي",
            roles: ["مطور جوال متقدم", "قائد فريق التطوير"],
            companies: ["Tech Solutions Inc.", "خدمات الحكومة الرقمية"],
            highlights: ["قادت فرق التطوير", "طورت تطبيقات المؤسسات", "عملت على مشاريع التحول الرقمي الحكومية", "دربت المطورين المبتدئين"]
          }
        ],
        totalExperience: "13+ عام في عدة دول",
        internationalExperience: "خبرة في العمل في بيئات الشرق الأوسط والدولية",
        culturalAdaptability: "تأقلمت مع ثقافات العمل المختلفة والممارسات التجارية"
      },
      countries: aiKnowledge.countries
    };
  }

  return context;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Messages array is required' });
  }

  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ 
      role: 'assistant', 
      content: 'API key not configured. Please check environment settings.' 
    });
  }

  try {
    // Detect language from the last user message
    const lastUserMessage = messages.filter(m => m.role === 'user').pop();
    const language = lastUserMessage ? detectLanguage(lastUserMessage.content) : 'english';
    
    // Create context based on language
    const context = createContext(language);
    
    // Create system prompt
    const systemPrompt = getSystemPrompt(language);
    
    // Create detailed context for the AI
    const detailedContext = `
${systemPrompt}

Detailed Information:

Personal Information:
${JSON.stringify(context.personal, null, 2)}

Bio:
${JSON.stringify(context.bio, null, 2)}

Skills:
${JSON.stringify(context.skills, null, 2)}

Experience:
${JSON.stringify(context.experience, null, 2)}

Projects:
${JSON.stringify(context.projects, null, 2)}

Contact Information:
${JSON.stringify(context.contact, null, 2)}

Booking Information:
${JSON.stringify(context.booking, null, 2)}

Resume Information:
${JSON.stringify(context.resume, null, 2)}

Countries Worked In:
${JSON.stringify(context.countries, null, 2)}

Instructions:
- Answer questions about Islam's skills, experience, projects, and contact information
- Provide specific details when asked about tech stack, projects, or experience
- Offer to help with booking meetings, downloading resume, or getting contact information
- Be helpful and professional in your responses
- If asked about booking a call, provide the Calendly link and instructions: ${context.booking.directLink} - ${context.booking.instructions}
- If asked about resume/CV, mention it can be downloaded from the website
- If asked about contact info, provide email and LinkedIn details
- When providing Calendly links, always include the direct link and mention it opens in a new tab
- If asked about countries worked in, provide detailed information about Egypt and UAE experience
`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: detailedContext
        },
        ...messages
      ],
      max_tokens: 800,
      temperature: 0.7
    });

    const aiMessage = { 
      role: 'assistant', 
      content: completion.choices[0].message.content 
    };
    
    res.status(200).json(aiMessage);
  } catch (error) {
    console.error('OpenAI API Error:', error);
    
    const errorMessage = language === 'arabic' 
      ? 'عذراً، حدث خطأ في الاتصال. حاول مرة أخرى.'
      : 'Sorry, there was a connection error. Please try again.';
    
    res.status(500).json({ 
      role: 'assistant', 
      content: errorMessage 
    });
  }
} 
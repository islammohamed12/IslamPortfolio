import OpenAI from 'openai';
import { aiKnowledge, aiPrompts } from '@/data/services/ai-knowledge';
import workProjectsData from '@/data/content/projects/work-projects.json';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Helper function to detect language
function detectLanguage(text) {
  const arabicRegex = /[\u0600-\u06FF]/;
  return arabicRegex.test(text) ? 'arabic' : 'english';
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message } = req.body;
    const language = detectLanguage(message);

    // Create context with centralized project data
    const context = createContext(language);
    
    const systemPrompt = aiPrompts.system;
    const userPrompt = `User message: ${message}\n\nPlease provide a helpful response based on the context provided.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
      max_tokens: 500,
      temperature: 0.7
    });

    const response = completion.choices[0].message.content;
    res.status(200).json({ role: "assistant", content: response });

  } catch (error) {
    console.error('Chat API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Helper function to create context from knowledge base
function createContext(language) {
  const context = {
    personal: aiKnowledge.personal,
    bio: aiKnowledge.bio,
    skills: aiKnowledge.skills,
    experience: aiKnowledge.experience,
    projects: workProjectsData.en, // Use centralized project data
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
      projects: workProjectsData.ar, // Use Arabic project data
      contact: aiKnowledge.contact,
      booking: aiKnowledge.booking,
      resume: aiKnowledge.resume
    };
  }

  return context;
} 
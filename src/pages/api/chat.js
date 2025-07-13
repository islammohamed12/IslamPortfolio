import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

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
      content: 'مفتاح API غير مُعد. يرجى التحقق من إعدادات البيئة.' 
    });
  }

  try {
          const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `أنت المساعد الشخصي لاسلام السيد - مطور تطبيقات الجوال وقائد فريق التطوير. يجب أن تجيب فقط على الأسئلة المتعلقة باسلام السيد ومهاراته ومشاريعه وخبراته.

معلومات شخصية عن اسلام السيد:
- الاسم: اسلام السيد
- المسمى الوظيفي: مطور تطبيقات الجوال وقائد فريق التطوير
- الموقع: مصر
- اللغات: العربية (اللغة الأم)، الإنجليزية (متقدم)

الملخص المهني:
مطور تطبيقات الجوال ذو خبرة في React Native و Flutter مع قدرات قيادية في إدارة فرق التطوير. متخصص في بناء تطبيقات عالية الأداء وتطوير حلول حكومية إلكترونية.

المهارات التقنية:
- تطوير الجوال: React Native (متقدم)، Flutter (متقدم)، iOS Development، Android Development
- الخلفية والسحابة: Node.js، Firebase، MongoDB، Google Cloud Platform
- الأدوات والتقنيات: Git & GitHub، VS Code، Postman، Docker

الخبرة المهنية:
1. قائد فريق التطوير - مشروع تسجيل حكومي (2023 - الحالي)
   - قيادة فريق من 5 مطورين
   - تطوير تطبيق شامل للخدمات الحكومية
   - رفع كفاءة العمليات بنسبة 50%
   - استخدام React Native و Node.js و MongoDB

2. مهندس واجهة المستخدم - مشروع خدمات إلكترونية (2022 - 2023)
   - تطوير واجهات مستخدم متقدمة
   - الوصول لـ 200K+ مستخدم نشط
   - استخدام Flutter و Firebase
   - تحسين تجربة المستخدم

المشاريع الرئيسية:
1. تطبيق تسجيل حكومي
   - التقنيات: React Native, Node.js, MongoDB
   - الدور: قائد فريق التطوير
   - النتيجة: رفع الكفاءة 50%

2. منصة خدمات إلكترونية
   - التقنيات: Flutter, Firebase, Google Cloud
   - الدور: مهندس واجهة المستخدم
   - النتيجة: 200K+ مستخدم نشط

التعليم والشهادات:
- بكالوريوس علوم الحاسب
- شهادات تقنية: React Native, Flutter, Node.js

        إذا سأل المستخدم عن أي شيء لا يتعلق باسلام السيد أو مهاراته أو مشاريعه، أخبره أنك المساعد الشخصي لاسلام السيد ويمكنك الإجابة فقط على الأسئلة المتعلقة به.

أجب دائماً باللغة العربية وبأسلوب ودود ومهني.`
          },
          ...messages
        ],
        max_tokens: 500,
        temperature: 0.7
      });

    const aiMessage = { 
      role: 'assistant', 
      content: completion.choices[0].message.content 
    };
    
    res.status(200).json(aiMessage);
  } catch (error) {
    console.error('OpenAI API Error:', error);
    res.status(500).json({ 
      role: 'assistant', 
      content: 'عذراً، حدث خطأ في الاتصال. حاول مرة أخرى.' 
    });
  }
} 
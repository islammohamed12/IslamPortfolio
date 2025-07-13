# Personal Portfolio Website with AI Chat

موقع شخصي مبني بـ Next.js مع ميزة الدردشة الذكية

## Features المميزات

- ✨ **Portfolio Display** - عرض المشاريع والخبرات
- 🤖 **AI Chat Integration** - دمج الدردشة الذكية
- 📱 **Responsive Design** - تصميم متجاوب
- 🌐 **Arabic RTL Support** - دعم اللغة العربية
- ⚡ **Fast Performance** - أداء سريع

## Tech Stack التقنيات المستخدمة

- **Frontend**: Next.js 14, React 18
- **Styling**: Tailwind CSS
- **AI**: OpenAI GPT-3.5-turbo
- **Deployment**: Vercel

## Quick Start البدء السريع

### Prerequisites المتطلبات المسبقة

- Node.js 16+ 
- OpenAI API Key

### Installation التثبيت

1. **Clone the repository استنساخ المستودع**
   ```bash
   git clone <repository-url>
   cd personal-website
   ```

2. **Install dependencies تثبيت الحزم**
   ```bash
   pnpm install
   ```

3. **Set up environment variables إعداد متغيرات البيئة**
   
   Create `.env.local` file:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Run development server تشغيل سيرفر التطوير**
   ```bash
   pnpm dev
   ```

5. **Open your browser افتح المتصفح**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure هيكل المشروع

```
personal-website/
├── README.md
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── app/
    │   ├── layout.js
    │   ├── page.js
    │   └── globals.css
    ├── components/
    │   ├── Chat.jsx
    │   └── ProjectCard.jsx
    └── pages/
        └── api/
            └── chat.js
```

## Deployment النشر

### Vercel Deployment النشر على Vercel

1. **Push to GitHub** ارفع الكود إلى GitHub
2. **Connect to Vercel** اربط المشروع بـ Vercel
3. **Add Environment Variables** أضف متغيرات البيئة
4. **Deploy** انشر الموقع

### Environment Variables متغيرات البيئة

Add these to your Vercel project:
```
OPENAI_API_KEY=your_openai_api_key_here
```

## Customization التخصيص

### Update Personal Info تحديث المعلومات الشخصية

Edit `src/app/page.js` to update:
- Name and title
- Project descriptions
- Personal information

### Modify Chat Behavior تعديل سلوك الدردشة

Edit `src/pages/api/chat.js` to:
- Change AI model
- Adjust response length
- Modify system prompt

### Update Styling تحديث التصميم

Edit `tailwind.config.js` and CSS files to:
- Change colors
- Modify layout
- Add custom components

## Contributing المساهمة

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License الترخيص

MIT License - see LICENSE file for details

---

Built with ❤️ using Next.js and OpenAI 
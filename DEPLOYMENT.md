# Deployment Guide - دليل النشر

## Vercel Deployment - النشر على Vercel

### Step 1: Prepare Your Repository الخطوة الأولى: تحضير المستودع

1. **Push your code to GitHub** ارفع الكود إلى GitHub
   ```bash
   git add .
   git commit -m "Initial portfolio website"
   git push origin main
   ```

2. **Ensure .gitignore is correct** تأكد من صحة ملف .gitignore
   - Make sure `.env.local` is in `.gitignore`
   - Verify `node_modules/` is excluded

### Step 2: Connect to Vercel الخطوة الثانية: الربط مع Vercel

1. **Go to Vercel** اذهب إلى Vercel
   - Visit [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Create New Project** إنشاء مشروع جديد
   - Click "New Project"
   - Import your GitHub repository
   - Select the repository containing your portfolio

### Step 3: Configure Build Settings الخطوة الثالثة: إعدادات البناء

1. **Framework Preset** إطار العمل
   - Select **Next.js** from the framework preset

2. **Build Settings** إعدادات البناء
   - **Build Command**: `pnpm build`
   - **Output Directory**: Leave empty (Next.js auto-detects)
   - **Install Command**: `pnpm install`

### Step 4: Environment Variables الخطوة الرابعة: متغيرات البيئة

1. **Add Environment Variables** إضافة متغيرات البيئة
   - Go to Project Settings → Environment Variables
   - Add the following variable:
     - **Name**: `OPENAI_API_KEY`
     - **Value**: Your OpenAI API key
     - **Environment**: Production (and Preview if needed)

2. **Get OpenAI API Key** الحصول على مفتاح OpenAI
   - Visit [OpenAI Platform](https://platform.openai.com/api-keys)
   - Create a new API key
   - Copy the key (starts with `sk-`)

### Step 5: Deploy الخطوة الخامسة: النشر

1. **Deploy** النشر
   - Click "Deploy"
   - Wait for build to complete (1-2 minutes)

2. **Verify Deployment** التحقق من النشر
   - Check the deployment URL
   - Test the chat functionality
   - Verify Arabic text displays correctly

### Step 6: Custom Domain (Optional) الخطوة السادسة: دومين مخصص (اختياري)

1. **Add Custom Domain** إضافة دومين مخصص
   - Go to Project Settings → Domains
   - Add your domain (e.g., `ismelsayed.com`)

2. **Configure DNS** إعداد DNS
   - Add the provided DNS records to your domain registrar
   - Wait for DNS propagation (up to 48 hours)

## Local Development - التطوير المحلي

### Prerequisites المتطلبات المسبقة

- Node.js 16 or higher
- pnpm package manager

### Setup الإعداد

1. **Install dependencies** تثبيت الحزم
   ```bash
   pnpm install
   ```

2. **Create environment file** إنشاء ملف البيئة
   ```bash
   cp env.example .env.local
   ```
   Then edit `.env.local` and add your OpenAI API key

3. **Run development server** تشغيل سيرفر التطوير
   ```bash
   pnpm dev
   ```

4. **Open in browser** فتح في المتصفح
   - Navigate to `http://localhost:3000`
   - Test the chat functionality

## Troubleshooting - حل المشاكل

### Common Issues المشاكل الشائعة

1. **Build fails** فشل البناء
   - Check that all dependencies are installed
   - Verify `package.json` has correct scripts

2. **Chat not working** الدردشة لا تعمل
   - Verify `OPENAI_API_KEY` is set correctly
   - Check browser console for errors
   - Ensure API key has sufficient credits

3. **Arabic text issues** مشاكل النص العربي
   - Verify `dir="rtl"` is set in layout
   - Check font support for Arabic characters

### Environment Variables متغيرات البيئة

Required variables:
```env
OPENAI_API_KEY=sk-your-api-key-here
```

## Performance Optimization - تحسين الأداء

1. **Image Optimization** تحسين الصور
   - Use Next.js Image component
   - Optimize image sizes

2. **Code Splitting** تقسيم الكود
   - Next.js handles this automatically
   - Consider lazy loading for heavy components

3. **Caching** التخزين المؤقت
   - Vercel provides automatic caching
   - Configure cache headers if needed

## Monitoring - المراقبة

1. **Vercel Analytics** تحليلات Vercel
   - Enable in project settings
   - Monitor performance metrics

2. **Error Tracking** تتبع الأخطاء
   - Check Vercel function logs
   - Monitor API response times

---

For more help, check the [Vercel Documentation](https://vercel.com/docs) 
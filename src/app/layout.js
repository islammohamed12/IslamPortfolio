import './globals.css';
import { LanguageProvider } from './LanguageProvider';
import Navigation from '@/components/layout/Navigation';
import DynamicLayout from '@/components/layout/DynamicLayout';
import GoogleAnalytics from '@/components/integrations/GoogleAnalytics';
import { Suspense } from 'react';

export const metadata = {
  title: {
    default: 'Islam Elsayed - Mobile App Developer & Team Lead',
    template: '%s | Islam Elsayed'
  },
  description: 'Experienced Mobile App Developer and Development Team Lead specializing in React Native, IBM MobileFirst, and cross-platform development. View portfolio, projects, and contact information.',
  keywords: [
    'Mobile App Developer',
    'React Native Developer',
    'IBM MobileFirst',
    'Cross-platform Development',
    'Team Lead',
    'Full Stack Developer',
    'Mobile Development',
    'iOS Developer',
    'Android Developer',
    'JavaScript Developer',
    'Node.js Developer',
    'React Developer',
    'Portfolio',
    'UAE Developer',
    'Dubai Developer'
  ],
  authors: [{ name: 'Islam Elsayed' }],
  creator: 'Islam Elsayed',
  publisher: 'Islam Elsayed',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://islammelsayed.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'ar': '/ar',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_SA',
    url: 'https://islammelsayed.com',
    title: 'Islam Elsayed - Mobile App Developer & Team Lead',
    description: 'Experienced Mobile App Developer and Development Team Lead specializing in React Native, IBM MobileFirst, and cross-platform development.',
    siteName: 'Islam Elsayed Portfolio',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Islam Elsayed - Mobile App Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Islam Elsayed - Mobile App Developer & Team Lead',
    description: 'Experienced Mobile App Developer and Development Team Lead specializing in React Native, IBM MobileFirst, and cross-platform development.',
    images: ['/og-image.svg'],
    creator: '@islamelsayed',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when needed
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Preload critical fonts */}
        <link 
          rel="preload" 
          href="/assets/fonts/Inter-Regular.woff2" 
          as="font" 
          type="font/woff2" 
          crossOrigin="anonymous"
        />
        <link 
          rel="preload" 
          href="/assets/fonts/Cairo-Regular.woff2" 
          as="font" 
          type="font/woff2" 
          crossOrigin="anonymous"
        />
        <link 
          rel="preload" 
          href="/assets/fonts/Inter-Bold.woff2" 
          as="font" 
          type="font/woff2" 
          crossOrigin="anonymous"
        />
        <link 
          rel="preload" 
          href="/assets/fonts/Cairo-Bold.woff2" 
          as="font" 
          type="font/woff2" 
          crossOrigin="anonymous"
        />
        
        {/* SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Islam Elsayed" />
        
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" />
        {/* PNG favicons will be generated from SVG when needed */}
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Additional SEO */}
        <meta name="geo.region" content="AE" />
        <meta name="geo.placename" content="Dubai, UAE" />
        <meta name="geo.position" content="25.2048;55.2708" />
        <meta name="ICBM" content="25.2048, 55.2708" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Islam Elsayed",
              "jobTitle": "Mobile App Developer & Team Lead",
              "description": "Experienced Mobile App Developer and Development Team Lead specializing in React Native, IBM MobileFirst, and cross-platform development.",
              "url": "https://islammelsayed.com",
              "sameAs": [
                "https://linkedin.com/in/islamelsayed",
                "https://github.com/islamelsayed"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "knowsAbout": [
                "React Native",
                "IBM MobileFirst",
                "Cross-platform Development",
                "Mobile App Development",
                "JavaScript",
                "Node.js",
                "React",
                "iOS Development",
                "Android Development"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dubai",
                "addressCountry": "AE"
              }
            })
          }}
        />
      </head>
      <body>
        <Suspense>
          <GoogleAnalytics />
        </Suspense>
        <LanguageProvider>
          <DynamicLayout>
            <Suspense>
              <Navigation />
            </Suspense>
            {children}
          </DynamicLayout>
        </LanguageProvider>
      </body>
    </html>
  );
} 
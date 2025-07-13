// Font loading utility for local fonts with fallback to Google Fonts

export const fontConfig = {
  inter: {
    family: 'Inter',
    weights: [300, 400, 500, 700],
    localFiles: {
      300: '/assets/fonts/Inter-Light.woff2',
      400: '/assets/fonts/Inter-Regular.woff2',
      500: '/assets/fonts/Inter-Medium.woff2',
      700: '/assets/fonts/Inter-Bold.woff2',
    },
    fallback: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
  },
  cairo: {
    family: 'Cairo',
    weights: [400, 500, 700],
    localFiles: {
      400: '/assets/fonts/Cairo-Regular.woff2',
      500: '/assets/fonts/Cairo-Medium.woff2',
      700: '/assets/fonts/Cairo-Bold.woff2',
    },
    fallback: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
  }
};

// Font loading status
let fontsLoaded = {
  inter: false,
  cairo: false
};

// Check if fonts are loaded
export const checkFontLoaded = (fontFamily) => {
  return document.fonts.check(`12px ${fontFamily}`);
};

// Load fonts with fallback
export const loadFonts = async () => {
  try {
    // Try to load local fonts first
    await Promise.all([
      document.fonts.load('300 12px Inter'),
      document.fonts.load('400 12px Inter'),
      document.fonts.load('500 12px Inter'),
      document.fonts.load('700 12px Inter'),
      document.fonts.load('400 12px Cairo'),
      document.fonts.load('500 12px Cairo'),
      document.fonts.load('700 12px Cairo'),
    ]);
    
    fontsLoaded.inter = true;
    fontsLoaded.cairo = true;
    
    console.log('Local fonts loaded successfully');
  } catch (error) {
    console.log('Local fonts failed to load, using Google Fonts fallback');
    // Google Fonts will be loaded via CSS import as fallback
  }
};

// Get font family string with fallbacks
export const getFontFamily = (fontType = 'inter') => {
  const config = fontConfig[fontType];
  if (!config) return fontConfig.inter.family;
  
  return `${config.family}, ${config.fallback}`;
};

// Initialize font loading
if (typeof window !== 'undefined') {
  // Load fonts when the page loads
  window.addEventListener('load', loadFonts);
} 
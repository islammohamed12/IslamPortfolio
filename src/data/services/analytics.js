// Google Analytics 4 Configuration
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Custom events for portfolio
export const trackProjectView = (projectName) => {
  event({
    action: 'view_project',
    category: 'engagement',
    label: projectName,
  });
};

export const trackCVDownload = (format) => {
  event({
    action: 'download_cv',
    category: 'engagement',
    label: format,
  });
};

export const trackContactForm = (method) => {
  event({
    action: 'contact_form',
    category: 'engagement',
    label: method,
  });
};

export const trackLanguageSwitch = (language) => {
  event({
    action: 'language_switch',
    category: 'preference',
    label: language,
  });
};

export const trackAppStoreClick = (appName, store) => {
  event({
    action: 'app_store_click',
    category: 'engagement',
    label: `${appName}_${store}`,
  });
};

export const trackCalendlyBooking = () => {
  event({
    action: 'calendly_booking',
    category: 'engagement',
    label: 'consultation_request',
  });
}; 
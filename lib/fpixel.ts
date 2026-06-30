export const FB_PIXEL = '1510407937497465';

declare global {
  interface Window {
    fbq: any;
  }
}

export const pageview = () => {
  window.fbq('track', 'PageView');
};

export const event = (name: string, options = {}) => {
  window.fbq('track', name, options);
};

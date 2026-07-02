import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_MEASUREMENT_ID = 'G-DV99MD5C7K';

const GoogleAnalytics = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: pathname + search,
      });
    }
  }, [pathname, search]);

  return null;
};

export default GoogleAnalytics;

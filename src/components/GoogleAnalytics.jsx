import { useEffect } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

const GA_MEASUREMENT_ID = 'G-DV99MD5C7K';

const VALID_ROUTES = [
  '/',
  '/sobre',
  '/aparelhos',
  '/aparelho/:slug',
  '/acessorios',
  '/contato',
  '/blog',
  '/blog/:slug',
];

const isValidRoute = (pathname) =>
  VALID_ROUTES.some((pattern) => matchPath({ path: pattern, end: true }, pathname));

const GoogleAnalytics = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    if (!isValidRoute(pathname) || typeof window.gtag !== 'function') {
      return;
    }

    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: pathname + search,
    });
  }, [pathname, search]);

  return null;
};

export default GoogleAnalytics;

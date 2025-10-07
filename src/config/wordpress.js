// Configuração da API do WordPress
export const WORDPRESS_CONFIG = {
  // URL base da API do WordPress
  // Para usar com seu próprio WordPress, substitua pela URL do seu site
  API_BASE_URL: 'https://acustikaauditiva.com.br/wp-json/wp/v2',
  
  // Configurações de paginação
  DEFAULT_POSTS_PER_PAGE: 6,
  MAX_POSTS_PER_PAGE: 20,
  
  // Configurações de cache (em milissegundos)
  CACHE_DURATION: 5 * 60 * 1000, // 5 minutos
  
  // Configurações de timeout
  REQUEST_TIMEOUT: 10000, // 10 segundos
};

// URLs de exemplo para diferentes instâncias do WordPress
export const WORDPRESS_EXAMPLES = {
  // WordPress.com (público)
  WORDPRESS_COM: 'https://public-api.wordpress.com/wp/v2/sites/YOUR_SITE.wordpress.com',
  
  // WordPress self-hosted
  SELF_HOSTED: 'https://yourdomain.com/wp-json/wp/v2',
  
  // WordPress local
  LOCAL: 'http://localhost/wordpress/wp-json/wp/v2',
  
  // Demo público (usado por padrão)
  DEMO: 'https://demo.wp-api.org/wp-json/wp/v2',
};

import { WORDPRESS_CONFIG } from '../config/wordpress';

// Configuração da API do WordPress
const WP_API_BASE_URL = WORDPRESS_CONFIG.API_BASE_URL;

// Cache simples em memória
const postCache = new Map();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutos

// Função para verificar se o cache é válido
const isCacheValid = (timestamp) => {
  return Date.now() - timestamp < CACHE_DURATION;
};

// Função para buscar posts do WordPress (apenas categoria Blog)
export const fetchPosts = async (page = 1, perPage = 10) => {
  try {
    // Verificar cache primeiro
    const cacheKey = `posts-${page}-${perPage}`;
    const cachedData = postCache.get(cacheKey);
    
    if (cachedData && isCacheValid(cachedData.timestamp)) {
      console.log('Posts carregados do cache:', page);
      return cachedData.data;
    }

    // Primeiro, buscar o ID da categoria "Blog"
    const categoriesResponse = await fetch(`${WP_API_BASE_URL}/categories?search=blog`);
    const categories = await categoriesResponse.json();
    
    // Encontrar a categoria "Blog" (case insensitive)
    const blogCategory = categories.find(cat => 
      cat.name.toLowerCase() === 'blog' || 
      cat.slug.toLowerCase() === 'blog'
    );
    
    if (!blogCategory) {
      console.warn('Categoria "Blog" não encontrada');
      return [];
    }
    
    // Buscar posts apenas da categoria Blog
    const response = await fetch(
      `${WP_API_BASE_URL}/posts?categories=${blogCategory.id}&_embed=true&page=${page}&per_page=${perPage}&orderby=date&order=desc&type=post`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const posts = await response.json();
    
    // Filtrar apenas posts do tipo "post" e não produtos
    const filteredPosts = posts.filter(post => 
      post.type === 'post' && 
      !post.slug.includes('produto') && 
      !post.slug.includes('product') &&
      !post.title.rendered.toLowerCase().includes('produto') &&
      !post.title.rendered.toLowerCase().includes('product')
    );
    
    // Transformar os dados para o formato que precisamos
    const transformedPosts = filteredPosts.map(post => ({
      id: post.id,
      title: post.title.rendered,
      excerpt: post.excerpt.rendered,
      content: post.content.rendered,
      date: post.date,
      slug: post.slug,
      featuredImage: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
      author: post._embedded?.author?.[0]?.name || 'Autor',
      categories: post._embedded?.['wp:term']?.[0] || [],
      link: post.link
    }));

    // Salvar no cache
    postCache.set(cacheKey, {
      data: transformedPosts,
      timestamp: Date.now()
    });

    // Preload dos posts individuais para cache
    transformedPosts.forEach(post => {
      const postCacheKey = `post-${post.slug}`;
      if (!postCache.has(postCacheKey)) {
        postCache.set(postCacheKey, {
          data: post,
          timestamp: Date.now()
        });
      }
    });

    return transformedPosts;
  } catch (error) {
    console.error('Erro ao buscar posts:', error);
    throw error;
  }
};

// Função para buscar um post específico por slug
export const fetchPostBySlug = async (slug) => {
  try {
    // Verificar cache primeiro
    const cacheKey = `post-${slug}`;
    const cachedData = postCache.get(cacheKey);
    
    if (cachedData && isCacheValid(cachedData.timestamp)) {
      console.log('Post carregado do cache:', slug);
      return cachedData.data;
    }

    const response = await fetch(
      `${WP_API_BASE_URL}/posts?slug=${slug}&_embed=true`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const posts = await response.json();
    
    if (posts.length === 0) {
      throw new Error('Post não encontrado');
    }
    
    const post = posts[0];
    
    const postData = {
      id: post.id,
      title: post.title.rendered,
      excerpt: post.excerpt.rendered,
      content: post.content.rendered,
      date: post.date,
      slug: post.slug,
      featuredImage: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
      author: post._embedded?.author?.[0]?.name || 'Autor',
      categories: post._embedded?.['wp:term']?.[0] || [],
      link: post.link
    };

    // Salvar no cache
    postCache.set(cacheKey, {
      data: postData,
      timestamp: Date.now()
    });

    return postData;
  } catch (error) {
    console.error('Erro ao buscar post:', error);
    throw error;
  }
};

// Função para buscar categorias (apenas categoria Blog)
export const fetchCategories = async () => {
  try {
    const response = await fetch(`${WP_API_BASE_URL}/categories?search=blog`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const categories = await response.json();
    
    // Filtrar apenas a categoria "Blog"
    const blogCategories = categories.filter(category => 
      category.name.toLowerCase() === 'blog' || 
      category.slug.toLowerCase() === 'blog'
    );
    
    return blogCategories.map(category => ({
      id: category.id,
      name: category.name,
      slug: category.slug,
      count: category.count
    }));
  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
    throw error;
  }
};

// Função para buscar posts por categoria (apenas categoria Blog)
export const fetchPostsByCategory = async (categoryId, page = 1, perPage = 10) => {
  try {
    // Verificar se a categoria é realmente a categoria Blog
    const categoriesResponse = await fetch(`${WP_API_BASE_URL}/categories?search=blog`);
    const categories = await categoriesResponse.json();
    
    const blogCategory = categories.find(cat => 
      cat.name.toLowerCase() === 'blog' || 
      cat.slug.toLowerCase() === 'blog'
    );
    
    if (!blogCategory || blogCategory.id !== categoryId) {
      console.warn('Tentativa de buscar posts de categoria que não é Blog');
      return [];
    }
    
    const response = await fetch(
      `${WP_API_BASE_URL}/posts?categories=${categoryId}&_embed=true&page=${page}&per_page=${perPage}&orderby=date&order=desc&type=post`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const posts = await response.json();
    
    // Filtrar apenas posts do tipo "post" e não produtos
    const filteredPosts = posts.filter(post => 
      post.type === 'post' && 
      !post.slug.includes('produto') && 
      !post.slug.includes('product') &&
      !post.title.rendered.toLowerCase().includes('produto') &&
      !post.title.rendered.toLowerCase().includes('product')
    );
    
    return filteredPosts.map(post => ({
      id: post.id,
      title: post.title.rendered,
      excerpt: post.excerpt.rendered,
      content: post.content.rendered,
      date: post.date,
      slug: post.slug,
      featuredImage: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
      author: post._embedded?.author?.[0]?.name || 'Autor',
      categories: post._embedded?.['wp:term']?.[0] || [],
      link: post.link
    }));
  } catch (error) {
    console.error('Erro ao buscar posts por categoria:', error);
    throw error;
  }
};

// Função utilitária para formatar data
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Função utilitária para extrair texto limpo do HTML
export const stripHtml = (html) => {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
};

// Função para limpar o cache
export const clearCache = () => {
  postCache.clear();
  console.log('Cache limpo');
};

// Função para obter estatísticas do cache
export const getCacheStats = () => {
  return {
    size: postCache.size,
    keys: Array.from(postCache.keys())
  };
};

// Função para preload de posts específicos
export const preloadPosts = async (slugs) => {
  const promises = slugs.map(slug => fetchPostBySlug(slug));
  try {
    await Promise.all(promises);
    console.log('Posts preloadados:', slugs);
  } catch (error) {
    console.warn('Erro no preload de posts:', error);
  }
};

import { WORDPRESS_CONFIG } from '../config/wordpress';

// Configuração da API do WordPress
const WP_API_BASE_URL = WORDPRESS_CONFIG.API_BASE_URL;

// Função para buscar posts do WordPress
export const fetchPosts = async (page = 1, perPage = 10) => {
  try {
    const response = await fetch(
      `${WP_API_BASE_URL}/posts?_embed=true&page=${page}&per_page=${perPage}&orderby=date&order=desc`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const posts = await response.json();
    
    // Transformar os dados para o formato que precisamos
    return posts.map(post => ({
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
    console.error('Erro ao buscar posts:', error);
    throw error;
  }
};

// Função para buscar um post específico por slug
export const fetchPostBySlug = async (slug) => {
  try {
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
    
    return {
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
  } catch (error) {
    console.error('Erro ao buscar post:', error);
    throw error;
  }
};

// Função para buscar categorias
export const fetchCategories = async () => {
  try {
    const response = await fetch(`${WP_API_BASE_URL}/categories`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const categories = await response.json();
    
    return categories.map(category => ({
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

// Função para buscar posts por categoria
export const fetchPostsByCategory = async (categoryId, page = 1, perPage = 10) => {
  try {
    const response = await fetch(
      `${WP_API_BASE_URL}/posts?categories=${categoryId}&_embed=true&page=${page}&per_page=${perPage}&orderby=date&order=desc`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const posts = await response.json();
    
    return posts.map(post => ({
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

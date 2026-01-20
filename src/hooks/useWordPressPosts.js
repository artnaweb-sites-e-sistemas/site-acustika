import { useState, useEffect, useCallback } from 'react';
import { localPosts } from '../data/localPosts';

// Hook para gerenciar posts locais (sem WordPress)
export const useWordPressPosts = (categoryId = null, page = 1, perPage = 10) => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const loadData = useCallback(async (pageNum = 1, append = false) => {
    // Simular um pequeno delay para melhorar UX
    await new Promise(resolve => setTimeout(resolve, 300));

    if (pageNum === 1) {
      setLoading(true);
    } else {
      setLoadingMore(true);
    }
    setError(null);

    try {
      // Extrair categorias únicas dos posts locais
      if (pageNum === 1 && categories.length === 0) {
        const categoryMap = new Map();
        localPosts.forEach(post => {
          post.categories.forEach(cat => {
            if (!categoryMap.has(cat.id)) {
              categoryMap.set(cat.id, cat);
            }
          });
        });
        setCategories(Array.from(categoryMap.values()));
      }

      // Filtrar posts por categoria se especificada
      let filteredPosts = localPosts;
      if (categoryId) {
        filteredPosts = localPosts.filter(post => 
          post.categories.some(cat => cat.id === categoryId || cat.slug === categoryId)
        );
      }

      // Ordenar por data (mais recente primeiro)
      filteredPosts = [...filteredPosts].sort((a, b) => new Date(b.date) - new Date(a.date));

      // Paginação
      const startIndex = (pageNum - 1) * perPage;
      const endIndex = startIndex + perPage;
      const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

      if (append) {
        setPosts(prevPosts => [...prevPosts, ...paginatedPosts]);
      } else {
        setPosts(paginatedPosts);
      }

      // Verificar se há mais posts
      setHasMore(endIndex < filteredPosts.length);

    } catch (err) {
      setError(err.message);
      console.error('Erro ao carregar dados:', err);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, [categoryId, perPage, categories.length]);

  useEffect(() => {
    loadData(page, page > 1);
  }, [page, loadData]);

  // Reset posts when category changes
  useEffect(() => {
    setPosts([]);
    setHasMore(false);
  }, [categoryId]);

  const loadMore = useCallback(() => {
    if (!loadingMore && hasMore) {
      // Esta função será chamada pelo componente para carregar mais posts
      // O useEffect será acionado quando o page mudar
    }
  }, [loadingMore, hasMore]);

  return {
    posts,
    categories,
    loading,
    loadingMore,
    error,
    hasMore,
    loadMore
  };
};

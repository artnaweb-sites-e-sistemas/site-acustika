import { useState, useEffect, useCallback } from 'react';
import { fetchPosts, fetchCategories, fetchPostsByCategory } from '../services/wordpressApi';

export const useWordPressPosts = (categoryId = null, page = 1, perPage = 10) => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const loadData = useCallback(async (pageNum = 1, append = false) => {
    if (pageNum === 1) {
      setLoading(true);
    } else {
      setLoadingMore(true);
    }
    setError(null);

    try {
      // Carregar categorias apenas na primeira vez
      if (pageNum === 1 && categories.length === 0) {
        const categoriesData = await fetchCategories();
        setCategories(categoriesData);
      }

      // Carregar posts
      let postsData;
      if (categoryId) {
        postsData = await fetchPostsByCategory(categoryId, pageNum, perPage);
      } else {
        postsData = await fetchPosts(pageNum, perPage);
      }

      if (append) {
        setPosts(prevPosts => [...prevPosts, ...postsData]);
      } else {
        setPosts(postsData);
      }

      // Verificar se há mais posts
      setHasMore(postsData.length === perPage);

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

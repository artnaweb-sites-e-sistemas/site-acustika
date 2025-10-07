import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useWordPressPosts } from '../hooks/useWordPressPosts';
import { formatDate, stripHtml } from '../services/wordpressApi';
import LoadingSpinner from '../components/LoadingSpinner';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { posts, categories, loading, loadingMore, error, hasMore } = useWordPressPosts(selectedCategory, currentPage, 6);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  const loadMorePosts = () => {
    setCurrentPage(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <h1 
              className="font-bold text-gray-800 mb-8"
              data-aos="fade-up"
            >
              Blog <span className="text-gradient">Acústika</span>
            </h1>
            <p 
              className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Fique por dentro das últimas novidades, dicas e informações sobre saúde auditiva, 
              tecnologia e cuidados com aparelhos auditivos.
            </p>
          </div>
        </div>
      </section>
      
      {/* Categories Filter */}
      <section className="bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 py-8">
          <div className="flex flex-wrap justify-center gap-3" data-aos="fade-up">
            <button
              onClick={() => handleCategoryChange(null)}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                selectedCategory === null
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              Todos
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Posts Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
          {loading && posts.length === 0 ? (
            <LoadingSpinner size="large" text="Carregando posts..." />
          ) : error ? (
            <div className="text-center py-20">
              <div className="text-red-500 text-6xl mb-4">⚠️</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Erro ao carregar posts</h3>
              <p className="text-gray-600">{error}</p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                  <article 
                    key={post.id} 
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    {post.featuredImage && (
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={post.featuredImage} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="mb-4">
                        {post.categories.map((category) => (
                          <span 
                            key={category.id}
                            className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mr-2 mb-2"
                          >
                            {category.name}
                          </span>
                        ))}
                      </div>
                      <h2 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                        {stripHtml(post.excerpt)}
                      </p>
                      <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                        <span>{formatDate(post.date)}</span>
                        <span>Por {post.author}</span>
                      </div>
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-center block"
                      >
                        Ler Mais
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
              
              {/* Load More Button */}
              {hasMore && (
                <div className="text-center mt-12" data-aos="fade-up">
                  <button 
                    onClick={loadMorePosts}
                    disabled={loadingMore}
                    className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
                  >
                    {loadingMore ? 'Carregando...' : 'Carregar Mais Posts'}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
          <div 
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl"
            data-aos="zoom-in"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Receba Nossas Atualizações
            </h3>
            <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
              Inscreva-se em nossa newsletter e receba as últimas notícias e dicas 
              sobre saúde auditiva diretamente no seu e-mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-6 py-4 rounded-xl text-gray-800 focus:outline-none focus:ring-4 focus:ring-white/30"
              />
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold">
                Inscrever-se
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

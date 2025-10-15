import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { fetchPostBySlug, formatDate, stripHtml, getCacheStats } from '../services/wordpressApi';
import LoadingSpinner from '../components/LoadingSpinner';
import '../styles/liquid-glass-buttons.css';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Funções de compartilhamento
  const shareToWhatsApp = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`Confira este artigo: ${post?.title}`);
    window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
  };

  const shareToFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  };

  const shareToInstagram = () => {
    // Instagram não permite compartilhamento direto via URL, então copiamos o link
    navigator.clipboard.writeText(window.location.href);
    alert('Link copiado! Cole no seu Instagram Stories ou feed.');
  };

  const shareToTwitter = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`Confira este artigo: ${post?.title}`);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  };

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      setError(null);

      try {
        const postData = await fetchPostBySlug(slug);
        setPost(postData);
      } catch (err) {
        setError(err.message);
        console.error('Erro ao carregar post:', err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadPost();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <LoadingSpinner size="large" text="Carregando artigo..." />
      </div>
    );
  }

  if (error) {
    return <Navigate to="/blog" replace />;
  }

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="py-8 md:py-12 relative overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse 85% 65% at 8% 8%, rgba(122, 68, 120, 0.15), transparent 60%),
            radial-gradient(ellipse 75% 60% at 75% 35%, rgba(100, 160, 160, 0.20), transparent 62%),
            radial-gradient(ellipse 70% 60% at 15% 80%, rgba(122, 68, 120, 0.12), transparent 62%),
            radial-gradient(ellipse 70% 60% at 92% 92%, rgba(100, 160, 160, 0.18), transparent 62%),
            linear-gradient(135deg, #f7f0f7 0%, #f0f7f7 50%, #e8f5f5 100%)
          `,
        }}
      >
        {/* Partículas animadas */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-acustika-purple/30 to-acustika-teal/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
                ))}
              </div>
              
        {/* Elementos decorativos */}
        <div className="absolute top-5 left-5 w-12 h-12 bg-gradient-to-r from-acustika-purple/20 to-acustika-teal/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-10 right-10 w-10 h-10 bg-gradient-to-r from-acustika-teal/20 to-acustika-purple/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-r from-acustika-purple/15 to-acustika-teal/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-5 right-5 w-12 h-12 bg-gradient-to-r from-acustika-teal/15 to-acustika-purple/15 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>

        {/* Padrões geométricos */}
        <div className="absolute top-1/4 left-1/4 w-20 h-20 border border-acustika-purple/10 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-16 h-16 border border-acustika-teal/10 rotate-12 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>

        {/* Overlay sutil */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8" style={{ paddingTop: '30px' }}>
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm w-fit mx-auto mb-4"
              data-aos="fade-up"
            >
              <div className="w-1.5 h-1.5 bg-gradient-to-r from-acustika-purple to-acustika-teal rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-gray-600" style={{ fontFamily: 'Karla, sans-serif' }}>
                {post.categories.map((category) => category.name).join(', ')}
              </span>
            </div>

            {/* Título */}
            <h1 
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3"
              data-aos="fade-up"
              data-aos-delay="100"
              style={{ fontFamily: 'Karla, sans-serif', fontWeight: '700', lineHeight: '1.2' }}
            >
                {post.title}
              </h1>
              
            {/* Meta informações */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-br from-acustika-purple/20 to-acustika-teal/20 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-acustika-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <span className="text-sm" style={{ fontFamily: 'Karla, sans-serif' }}>Por {post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-br from-acustika-purple/20 to-acustika-teal/20 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-acustika-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm" style={{ fontFamily: 'Karla, sans-serif' }}>{formatDate(post.date)}</span>
                </div>
              </div>
                </div>
              </div>
      </section>

            {/* Post Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none" data-aos="fade-up" data-aos-delay="600">
              <div 
                className="text-gray-700 leading-relaxed"
                style={{ 
                  fontFamily: 'Karla, sans-serif',
                  fontWeight: '400',
                  fontSize: '18px',
                  lineHeight: '1.7'
                }}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* Post Footer */}
            <footer className="mt-16 pt-8 border-t border-gray-200" data-aos="fade-up" data-aos-delay="800">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                <div>
                  <h3 
                    className="text-lg font-semibold text-gray-900 mb-4"
                    style={{ fontFamily: 'Karla, sans-serif' }}
                  >
                    Compartilhe este post
                  </h3>
                  <div className="flex gap-3">
                     {/* WhatsApp */}
                     <button 
                       onClick={shareToWhatsApp}
                       className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl flex items-center justify-center hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                       title="Compartilhar no WhatsApp"
                     >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                    </button>
                     
                     {/* Facebook */}
                     <button 
                       onClick={shareToFacebook}
                       className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl flex items-center justify-center hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
                       title="Compartilhar no Facebook"
                     >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </button>
                     
                     {/* Instagram */}
                     <button 
                       onClick={shareToInstagram}
                       className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl flex items-center justify-center hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                       title="Compartilhar no Instagram"
                     >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                      </svg>
                    </button>
                     
                     {/* Twitter */}
                     <button 
                       onClick={shareToTwitter}
                       className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-xl flex items-center justify-center hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                       title="Compartilhar no Twitter"
                     >
                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                       </svg>
                     </button>
                  </div>
                </div>
                
                <Link 
                  to="/blog"
                  className="px-8 py-4 bg-gradient-to-r from-acustika-purple to-acustika-teal text-white rounded-xl font-semibold hover:from-acustika-purple/90 hover:to-acustika-teal/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  style={{ fontFamily: 'Karla, sans-serif' }}
                >
                  Ver Mais Posts
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100" data-aos="fade-up" data-aos-delay="500">
              <div className="text-center max-w-4xl mx-auto">
                <h3 
                  className="text-2xl font-bold text-gray-900 mb-4"
                  style={{ 
                    fontFamily: 'Karla, sans-serif',
                    fontWeight: '700',
                    fontSize: '28px',
                    lineHeight: '1.2'
                  }}
                >
                  Precisa de ajuda com sua audição?
                </h3>
                
                <p 
                  className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
                  style={{ 
                    fontFamily: 'Karla, sans-serif',
                    fontWeight: '400',
                    fontSize: '18px',
                    lineHeight: '1.6'
                  }}
                >
                  Nossa equipe de especialistas está pronta para ajudar você com dúvidas sobre saúde auditiva e orientações sobre aparelhos auditivos.
                </p>
                
                <div className="flex justify-center">
                  <div className="bth">
                    <a 
                      href="https://wa.me/5511999999999" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="elementor-button group"
                    >
                      <span className="elementor-button-text">Agendar Consulta</span>
                      <span className="elementor-button-icon group-hover:rotate-0 transition-all duration-500" style={{ transform: 'rotate(45deg)' }}>
                        <i className="fas fa-calendar-alt text-base transition-all duration-500 group-hover:opacity-0 group-hover:scale-0"></i>
                        <i className="fab fa-whatsapp text-base absolute top-1/2 left-1/2 transition-all duration-500 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 whatsapp-icon-white" style={{ transform: 'translate(-50%, -50%) rotate(-45deg)', color: '#ffffff !important' }}></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;

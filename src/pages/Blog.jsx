import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useWordPressPosts } from '../hooks/useWordPressPosts';
import { formatDate, stripHtml, fetchPostBySlug } from '../services/wordpressApi';
import LoadingSpinner from '../components/LoadingSpinner';
import heroMainImage from '../assets/images/hero/hero-main.png';
import '../styles/liquid-glass-buttons.css';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { posts, loading, loadingMore, error, hasMore } = useWordPressPosts(null, currentPage, 6);

  const loadMorePosts = () => {
    setCurrentPage(prev => prev + 1);
  };

  // Função para preload do post quando o usuário passa o mouse sobre o link
  const handleMouseEnter = (slug) => {
    // Preload silencioso do post
    fetchPostBySlug(slug).catch(() => {
      // Ignorar erros de preload
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Background Animado Inspirado */}
      <section className="relative overflow-hidden" style={{ height: '400px' }}>
        {/* Background com gradiente moderno inspirado no 21st.dev */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 85% 65% at 8% 8%, rgba(122, 68, 120, 0.15), transparent 60%),
              radial-gradient(ellipse 75% 60% at 75% 35%, rgba(100, 160, 160, 0.20), transparent 62%),
              radial-gradient(ellipse 70% 60% at 15% 80%, rgba(122, 68, 120, 0.12), transparent 62%),
              radial-gradient(ellipse 70% 60% at 92% 92%, rgba(100, 160, 160, 0.18), transparent 62%),
              linear-gradient(135deg, #f7f0f7 0%, #f0f7f7 50%, #e8f5f5 100%)
            `,
          }}
        />
        
        {/* Canvas para partículas animadas */}
        <canvas 
          className="absolute inset-0 w-full h-full opacity-50"
          style={{ zIndex: 1 }}
          ref={(canvas) => {
            if (canvas) {
              const ctx = canvas.getContext('2d');
              if (ctx) {
                const resizeCanvas = () => {
                  canvas.width = canvas.offsetWidth;
                  canvas.height = canvas.offsetHeight;
                };
                
                resizeCanvas();
                window.addEventListener('resize', resizeCanvas);
                
                // Configurações das partículas
                const particles = [];
                const particleCount = 100; // Menos partículas para hero menor
                
                // Criar partículas
                for (let i = 0; i < particleCount; i++) {
                  particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 3 + 1,
                    speedX: (Math.random() - 0.5) * 0.5,
                    speedY: (Math.random() - 0.5) * 0.5,
                    opacity: Math.random() * 0.4 + 0.2,
                    life: Math.random() * 100,
                    maxLife: 100 + Math.random() * 50
                  });
                }
                
                // Função de animação
                const animate = () => {
                  ctx.clearRect(0, 0, canvas.width, canvas.height);
                  
                  particles.forEach(particle => {
                    // Atualizar vida da partícula
                    particle.life += 0.5;
                    if (particle.life > particle.maxLife) {
                      particle.life = 0;
                      particle.x = Math.random() * canvas.width;
                      particle.y = Math.random() * canvas.height;
                    }
                    
                    // Calcular opacidade baseada na vida
                    const lifeRatio = particle.life / particle.maxLife;
                    const opacity = Math.sin(lifeRatio * Math.PI) * particle.opacity;
                    
                    // Movimento suave com influência do tempo
                    const time = Date.now() * 0.0001;
                    particle.x += particle.speedX + Math.sin(time + particle.y * 0.01) * 0.1;
                    particle.y += particle.speedY + Math.cos(time + particle.x * 0.01) * 0.1;
                    
                    // Wrap around edges
                    if (particle.x < 0) particle.x = canvas.width;
                    if (particle.x > canvas.width) particle.x = 0;
                    if (particle.y < 0) particle.y = canvas.height;
                    if (particle.y > canvas.height) particle.y = 0;
                    
                    // Desenhar partícula com cores que combinam com o gradiente da Acustika
                    const colors = [
                      `rgba(122, 68, 120, ${opacity})`, // Roxo Acustika
                      `rgba(100, 160, 160, ${opacity})`, // Turquesa Acustika
                      `rgba(106, 58, 104, ${opacity})`, // Roxo escuro
                      `rgba(84, 144, 144, ${opacity})`  // Turquesa escuro
                    ];
                    ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
                    ctx.beginPath();
                    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                    ctx.fill();
                  });
                  
                  requestAnimationFrame(animate);
                };
                
                animate();
              }
            }
          }}
        />
        
        {/* Padrão geométrico sutil */}
        <div className="absolute inset-0 opacity-20" style={{ zIndex: 2 }}>
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(75, 85, 99, 0.05) 20px, rgba(75, 85, 99, 0.05) 21px),
                repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(107, 114, 128, 0.04) 30px, rgba(107, 114, 128, 0.04) 31px)
              `,
            }}
          />
        </div>
        
        {/* Elementos decorativos com cores harmoniosas da Acustika */}
        <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-acustika-purple/35 to-acustika-teal/35 rounded-full blur-3xl animate-pulse" style={{ zIndex: 2 }}></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-acustika-teal/30 to-acustika-purple/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s', zIndex: 2 }}></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-br from-acustika-purple/35 to-acustika-teal/35 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s', zIndex: 2 }}></div>
        
        {/* Radial accent com cores harmoniosas da Acustika */}
        <div className="absolute left-1/2 top-[calc(100%-90px)] h-[300px] w-[400px] md:h-[400px] md:w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-r from-acustika-purple/15 via-acustika-teal/15 to-acustika-purple/15 blur-3xl animate-pulse" style={{ animationDelay: '3s', zIndex: 2 }}></div>
        
        {/* Overlay sutil para profundidade */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/5" style={{ zIndex: 3 }}></div>
               
        <div className="relative container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 pt-8 pb-0 h-full" style={{ zIndex: 10 }}>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center h-full">
            
            {/* Coluna Esquerda: Conteúdo */}
            <div className="text-center lg:text-left space-y-6 flex flex-col justify-center h-full order-1 lg:order-first">
              {/* Badge moderno */}
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm w-fit mx-auto lg:mx-0"
              data-aos="fade-up"
              data-aos-delay="100"
            >
                  <div className="w-2 h-2 bg-gradient-to-r from-acustika-purple to-acustika-teal rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-600" style={{ fontFamily: 'Karla, sans-serif' }}>Conhecimento e saúde</span>
            </div>
            
              {/* Headline Principal com gradiente */}
               <h1 
                className="font-semibold text-gray-900 text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight"
              data-aos="fade-up"
                 data-aos-delay="200"
                 style={{ 
                  fontFamily: 'Noto Serif, serif',
                  fontWeight: '500',
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em',
                  background: 'linear-gradient(135deg, #1f2937 0%, #374151 50%, #4b5563 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Blog Acustika
            </h1>
               
              {/* Subtítulo */}
            <p 
                className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
                 style={{ 
                  fontFamily: 'Karla, sans-serif',
                  fontWeight: '400',
                  fontSize: '18px',
                  lineHeight: '1.4',
                  letterSpacing: '0.01em',
                  opacity: '0.8'
                 }}
               >
                 Fique por dentro das últimas novidades, dicas e informações sobre saúde auditiva, tecnologia e cuidados com aparelhos auditivos.
            </p>
          </div>
            
            {/* Coluna Direita: Imagem Principal */}
            <div 
              className="relative order-2 lg:order-last h-full flex items-end justify-center hidden lg:flex"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="relative">
                {/* Círculo estilizado animado no fundo */}
                <div className="absolute inset-0 flex items-end justify-center">
                  <div className="relative">
                    {/* Círculo principal com gradiente */}
                    <div 
                      className="w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] rounded-full opacity-25"
                      style={{
                        background: 'linear-gradient(135deg, rgba(122, 68, 120, 0.4) 0%, rgba(100, 160, 160, 0.4) 50%, rgba(122, 68, 120, 0.4) 100%)',
                        animation: 'float 4s ease-in-out infinite, glow 3s ease-in-out infinite alternate'
                      }}
                    />
                    
                    {/* Círculo secundário com movimento */}
                    <div 
                      className="absolute top-1/2 left-1/2 w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] rounded-full opacity-20"
                      style={{
                        background: 'radial-gradient(circle, rgba(100, 160, 160, 0.5) 0%, transparent 70%)',
                        transform: 'translate(-50%, -50%)',
                        animation: 'rotate 6s linear infinite, breathe 2s ease-in-out infinite'
                      }}
                    />
                    
                    {/* Círculo terciário com pulso */}
                    <div 
                      className="absolute top-1/2 left-1/2 w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] rounded-full opacity-15"
                      style={{
                        background: 'conic-gradient(from 0deg, rgba(122, 68, 120, 0.4), rgba(100, 160, 160, 0.4), rgba(122, 68, 120, 0.4))',
                        transform: 'translate(-50%, -50%)',
                        animation: 'pulse 2s ease-in-out infinite, shimmer 5s linear infinite'
                      }}
                    />
                  </div>
                </div>
                
                {/* Imagem com fundo transparente - colada no bottom */}
                <div className="relative z-10" style={{ marginBottom: '-15px' }}>
                  <img 
                    src={heroMainImage} 
                    alt="Blog Acustika Aparelhos Auditivos" 
                    className="w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] object-contain"
                    style={{ display: 'block' }}
                  />
                </div>
                </div>
              </div>
          </div>
        </div>
      </section>
      
      {/* Posts Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="max-w-7xl mx-auto">
          {loading && posts.length === 0 ? (
            <LoadingSpinner size="large" text="Carregando posts..." />
          ) : error ? (
            <div className="text-center py-20">
              <div className="text-red-500 text-6xl mb-4">⚠️</div>
                <h3 
                  className="text-xl font-semibold text-gray-800 mb-2"
                  style={{ fontFamily: 'Karla, sans-serif' }}
                >
                  Erro ao carregar posts
                </h3>
                <p 
                  className="text-gray-600"
                  style={{ fontFamily: 'Karla, sans-serif' }}
                >
                  {error}
                </p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                  <article 
                    key={post.id} 
                      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group flex flex-col"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    {post.featuredImage && (
                        <div className="aspect-video overflow-hidden bg-gray-50">
                        <img 
                          src={post.featuredImage} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    )}
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex-1 space-y-4">
                          {/* Categorias */}
                          <div className="flex flex-wrap gap-2">
                        {post.categories.map((category) => (
                          <span 
                            key={category.id}
                                className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-acustika-purple/10 to-acustika-teal/10 text-acustika-purple border border-acustika-purple/20"
                                style={{ fontFamily: 'Karla, sans-serif' }}
                          >
                                <div className="w-1.5 h-1.5 bg-gradient-to-r from-acustika-purple to-acustika-teal rounded-full"></div>
                            {category.name}
                          </span>
                        ))}
                      </div>
                          
                          {/* Título */}
                          <h2 
                            className="text-xl font-semibold text-gray-900 line-clamp-2 group-hover:text-acustika-purple transition-colors"
                            style={{ 
                              fontFamily: 'Karla, sans-serif',
                              fontWeight: '600',
                              fontSize: '20px',
                              lineHeight: '1.3'
                            }}
                          >
                        {post.title}
                      </h2>
                          
                          {/* Resumo */}
                          <p 
                            className="text-gray-600 text-sm line-clamp-3 leading-relaxed"
                            style={{ 
                              fontFamily: 'Karla, sans-serif',
                              fontWeight: '400',
                              fontSize: '14px',
                              lineHeight: '1.5'
                            }}
                          >
                        {stripHtml(post.excerpt)}
                      </p>
                          
                          {/* Meta informações */}
                          <div className="flex justify-between items-center text-xs text-gray-500 pt-2 border-t border-gray-100">
                            <span style={{ fontFamily: 'Karla, sans-serif' }}>{formatDate(post.date)}</span>
                            <span style={{ fontFamily: 'Karla, sans-serif' }}>Por {post.author}</span>
                          </div>
                      </div>
                        
                        {/* Botão Ler Mais */}
                        <div className="pt-4">
                      <Link 
                        to={`/blog/${post.slug}`}
                        onMouseEnter={() => handleMouseEnter(post.slug)}
                            className="w-full px-6 py-3 bg-gradient-to-r from-acustika-purple to-acustika-teal text-white rounded-xl font-semibold hover:from-acustika-purple/90 hover:to-acustika-teal/90 transition-all duration-300 transform hover:scale-105 shadow-lg text-center block"
                            style={{ fontFamily: 'Karla, sans-serif' }}
                      >
                        Ler Mais
                      </Link>
                        </div>
                    </div>
                  </article>
                ))}
              </div>
              
              {/* Load More Button */}
              {hasMore && (
                  <div className="text-center mt-16" data-aos="fade-up">
                  <button 
                    onClick={loadMorePosts}
                    disabled={loadingMore}
                      className="px-8 py-4 border-2 border-acustika-purple text-acustika-purple rounded-xl font-semibold hover:bg-acustika-purple hover:text-white transition-all duration-300 transform hover:scale-105"
                      style={{ fontFamily: 'Karla, sans-serif' }}
                  >
                    {loadingMore ? 'Carregando...' : 'Carregar Mais Posts'}
                  </button>
                </div>
              )}
            </>
          )}
          </div>
        </div>
      </section>
      
      {/* Card de Contato */}
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
                  Precisa de ajuda com saúde auditiva?
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
                  Nossa equipe especializada está pronta para ajudar você com dúvidas sobre saúde auditiva e orientações sobre aparelhos auditivos.
                </p>
                
                <div className="flex justify-center">
                  <div className="bth">
                    <a 
                      href="https://wa.me/5511999999999" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="elementor-button group"
                    >
                      <span className="elementor-button-text">Fale Conosco</span>
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

export default Blog;

import React, { useEffect, useState } from 'react';
import heroMainImage from '../assets/images/hero/hero-main.png';
import heroNewImage from '../assets/images/hero/hero-new.png';
import historyImage from '../assets/images/hero/history-image.jpg';
import experienceImage from '../assets/images/hero/experience-image.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Componente de contador animado
const Counter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`counter-${end}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [isVisible, end]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const startCount = 0;
    const endCount = end;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(startCount + (endCount - startCount) * easeOutQuart);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span id={`counter-${end}`}>
      {count}{suffix}
    </span>
  );
};

const Sobre = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

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
                <span className="text-sm font-medium text-gray-600" style={{ fontFamily: 'Karla, sans-serif' }}>Conheça nossa história</span>
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
            Sobre a Acustika
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
                 Há mais de 20 anos cuidando da sua saúde auditiva com tecnologia de ponta e atendimento humanizado.
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
                    src={heroNewImage} 
                    alt="Equipe Acustika" 
                    className="object-contain"
                    style={{ display: 'block', width: '500px', height: 'auto' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section - Figma Design */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Content Section */}
              <div className="space-y-10">
                {/* Heading */}
                <h2 
                  className="font-medium text-gray-900 text-3xl md:text-4xl lg:text-5xl leading-tight"
                  data-aos="fade-up"
                  style={{ 
                    fontFamily: 'Noto Serif, serif',
                    fontWeight: '500',
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    lineHeight: '1.2',
                    letterSpacing: '-0.02em'
                  }}
                >
                  Nossa História
                </h2>
                
                {/* Description */}
                <p 
                  className="text-gray-600 leading-relaxed"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  style={{ 
                    fontFamily: 'Karla, sans-serif',
                    fontWeight: '400',
                    fontSize: '18px',
                    lineHeight: '1.6',
                    letterSpacing: '0.01em'
                  }}
                >
              A Acustika é uma empresa especializada em soluções auditivas, dedicada a melhorar 
              a qualidade de vida das pessoas através de tecnologia avançada e atendimento 
                  personalizado. Há mais de 20 anos cuidando da sua saúde auditiva.
                </p>
                
                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-6" data-aos="fade-up" data-aos-delay="200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center shadow-sm" 
                        style={{ 
                          backgroundColor: '#7e4078',
                          minWidth: '48px',
                          minHeight: '48px',
                          maxWidth: '48px',
                          maxHeight: '48px'
                        }}
                      >
                        <i className="fas fa-heart text-white text-lg"></i>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Karla, sans-serif' }}>Nossa Missão</h3>
                      <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Karla, sans-serif' }}>
              Proporcionar soluções auditivas de alta qualidade, utilizando tecnologia de ponta 
              e oferecendo um atendimento humanizado e especializado para cada cliente.
            </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center shadow-sm" 
                        style={{ 
                          backgroundColor: '#64a0a0',
                          minWidth: '48px',
                          minHeight: '48px',
                          maxWidth: '48px',
                          maxHeight: '48px'
                        }}
                      >
                        <i className="fas fa-eye text-white text-lg"></i>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Karla, sans-serif' }}>Nossa Visão</h3>
                      <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Karla, sans-serif' }}>
              Ser referência em soluções auditivas, reconhecida pela excelência no atendimento 
              e pela qualidade dos produtos e serviços oferecidos.
            </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Image Section */}
              <div className="relative" data-aos="fade-left" data-aos-delay="300">
                <div className="relative">
                  {/* Background decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-acustika-purple/20 to-acustika-teal/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-acustika-teal/15 to-acustika-purple/15 rounded-full blur-xl"></div>
                  
                  {/* Main image container */}
                  <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                    <img 
                      src={historyImage} 
                      alt="Equipe Acustika" 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Título Principal */}
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 
                className="font-medium text-gray-900 text-3xl md:text-4xl lg:text-5xl mb-6"
                style={{ 
                  fontFamily: 'Noto Serif, serif',
                  fontWeight: '500',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em'
                }}
              >
                Nossos Valores
              </h2>
              <p 
                className="text-gray-600 max-w-3xl mx-auto"
                style={{ 
                  fontFamily: 'Karla, sans-serif',
                  fontWeight: '400',
                  fontSize: '18px',
                  lineHeight: '1.6'
                }}
              >
                Os princípios que guiam nossa atuação e garantem a excelência em cada atendimento.
              </p>
            </div>
            
            {/* Grid de Valores */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: 'fas fa-star',
                  title: 'Qualidade e Excelência',
                  description: 'Compromisso com a qualidade e excelência em todos os nossos serviços.'
                },
                {
                  icon: 'fas fa-users',
                  title: 'Atendimento Humanizado',
                  description: 'Atendimento humanizado e personalizado para cada cliente.'
                },
                {
                  icon: 'fas fa-lightbulb',
                  title: 'Inovação e Tecnologia',
                  description: 'Inovação e tecnologia de ponta para melhores resultados.'
                },
                {
                  icon: 'fas fa-shield-alt',
                  title: 'Ética e Transparência',
                  description: 'Ética e transparência em todas as nossas relações.'
                },
                {
                  icon: 'fas fa-handshake',
                  title: 'Responsabilidade Social',
                  description: 'Responsabilidade social e compromisso com a comunidade.'
                },
                {
                  icon: 'fas fa-graduation-cap',
                  title: 'Experiência e Especialização',
                  description: 'Anos de experiência no mercado com equipe especializada.'
                }
              ].map((valor, index) => (
                <div 
                  key={index}
                  className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: index % 2 === 0 ? '#7e4078' : '#64a0a0' }}>
                    <i className={`${valor.icon} text-white text-xl`}></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Karla, sans-serif' }}>
                    {valor.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Karla, sans-serif' }}>
                    {valor.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experiência Section */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        {/* Background com gradiente suave inspirado na hero */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 20% 20%, rgba(122, 68, 120, 0.08), transparent 50%),
              radial-gradient(ellipse 70% 50% at 80% 80%, rgba(100, 160, 160, 0.10), transparent 50%),
              radial-gradient(ellipse 60% 40% at 50% 50%, rgba(122, 68, 120, 0.05), transparent 60%),
              linear-gradient(135deg, #f8f5f8 0%, #f0f7f7 50%, #e8f2f2 100%)
            `,
          }}
        />
        
        {/* Elementos decorativos sutis */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-acustika-purple/10 to-acustika-teal/10 rounded-full blur-2xl animate-pulse" style={{ zIndex: 2 }}></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-acustika-teal/8 to-acustika-purple/8 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s', zIndex: 2 }}></div>
        
        {/* Container Principal */}
        <div className="relative container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Card Glassmorphism */}
            <div 
              className="rounded-tl-[40px] rounded-br-[40px] p-8 lg:p-20 backdrop-blur-md"
              style={{
                background: 'linear-gradient(135deg, rgba(122, 68, 120, 0.15) 0%, rgba(100, 160, 160, 0.15) 100%)',
                border: '1px solid rgba(122, 68, 120, 0.2)',
                boxShadow: '0 8px 32px rgba(122, 68, 120, 0.1)'
              }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                {/* Coluna Esquerda: Conteúdo */}
                <div className="space-y-10">
                  {/* Título */}
                  <h2 
                    className="font-medium text-gray-800 text-3xl md:text-4xl lg:text-5xl"
                    style={{ 
                      fontFamily: 'Noto Serif, serif',
                      fontWeight: '500',
                      fontSize: '40px',
                      lineHeight: '1.2'
                    }}
                  >
                Experiência e Especialização
                  </h2>
                  
                  {/* Descrição */}
                  <p 
                    className="text-gray-700 leading-relaxed"
                    style={{ 
                      fontFamily: 'Karla, sans-serif',
                      fontWeight: '400',
                      fontSize: '18px',
                      lineHeight: '1.4'
                    }}
                  >
                Com anos de experiência no mercado, nossa equipe de fonoaudiólogos e técnicos 
                especializados está preparada para oferecer o melhor atendimento e as melhores 
                soluções para suas necessidades auditivas.
              </p>
                  
                  {/* Estatísticas */}
                  <div className="grid grid-cols-2 gap-16">
                    {/* Anos de Experiência */}
                    <div className="text-center">
                      <div 
                        className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm"
                        style={{
                          background: 'rgba(255, 255, 255, 0.25)',
                          border: '1px solid rgba(255, 255, 255, 0.18)',
                          boxShadow: '0 8px 32px rgba(122, 68, 120, 0.1)'
                        }}
                      >
                        <span 
                          className="text-4xl font-bold text-gray-900"
                          style={{ fontFamily: 'Karla, sans-serif' }}
                        >
                          <Counter end={20} duration={2000} suffix="+" />
                        </span>
                      </div>
                      <p 
                        className="text-gray-600 font-medium text-lg"
                        style={{ fontFamily: 'Karla, sans-serif' }}
                      >
                        Anos de Experiência
                      </p>
                    </div>
                    
                    {/* Clientes Atendidos */}
                    <div className="text-center">
                      <div 
                        className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm"
                        style={{
                          background: 'rgba(255, 255, 255, 0.25)',
                          border: '1px solid rgba(255, 255, 255, 0.18)',
                          boxShadow: '0 8px 32px rgba(100, 160, 160, 0.1)'
                        }}
                      >
                        <span 
                          className="text-4xl font-bold text-gray-900"
                          style={{ fontFamily: 'Karla, sans-serif' }}
                        >
                          <Counter end={1000} duration={2500} suffix="+" />
                        </span>
                      </div>
                      <p 
                        className="text-gray-600 font-medium text-lg"
                        style={{ fontFamily: 'Karla, sans-serif' }}
                      >
                        Clientes Atendidos
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Coluna Direita: Imagem */}
                <div className="relative">
                  <div className="relative">
                    {/* Background decorative elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-acustika-purple/20 to-acustika-teal/20 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-acustika-teal/15 to-acustika-purple/15 rounded-full blur-xl"></div>
                    
                    {/* Main image container */}
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                      <img 
                        src={experienceImage} 
                        alt="Equipe especializada Acustika" 
                        className="w-full h-auto object-contain"
                      />
                    </div>
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

export default Sobre;

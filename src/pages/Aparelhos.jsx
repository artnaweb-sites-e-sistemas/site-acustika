import React from 'react';
import { Link } from 'react-router-dom';
import aparelhosHeroImage from '../assets/images/hero/aparelhos-hero.png';
// Imports das imagens dos aparelhos auditivos
import argosyVistaV from '../assets/images/hearing-aids/argosyvista-V.png';
import oticonXceed from '../assets/images/hearing-aids/aparelhos-auditivos-oticon-xceed.png.webp';
import rextonMCoreR from '../assets/images/hearing-aids/rexton-McoreR.jpg.webp';
import mCoreIX from '../assets/images/hearing-aids/m-core-ix-1.jpg.webp';
import oticonOwn from '../assets/images/hearing-aids/oticon-own250x250.jpg.webp';
import rextonRugged from '../assets/images/hearing-aids/rexton-rugged.jpg.webp';
import rextonStellar from '../assets/images/hearing-aids/rexton-stellar-04.jpg.webp';
import oticonZircon from '../assets/images/hearing-aids/oticon-zircon.jpg.webp';
import oticonReal from '../assets/images/hearing-aids/oticon-own250x250.png.webp';
import '../styles/liquid-glass-buttons.css';

const Aparelhos = () => {
  // Dados dos aparelhos auditivos
  const aparelhos = [
    {
      id: 1,
      nome: "Argosy Vista V",
      descricao: "Aparelho auditivo discreto com tecnologia avançada de processamento de som e conectividade Bluetooth.",
      imagem: argosyVistaV,
      categoria: "Intra-Auricular"
    },
    {
      id: 2,
      nome: "Oticon Xceed",
      descricao: "Solução potente para perdas auditivas severas com inteligência artificial e redução de ruído.",
      imagem: oticonXceed,
      categoria: "Retro-Auricular"
    },
    {
      id: 3,
      nome: "Rexton M-Core R",
      descricao: "Aparelho recarregável com bateria de longa duração e conectividade wireless para todos os dispositivos.",
      imagem: rextonMCoreR,
      categoria: "Recarregável"
    },
    {
      id: 4,
      nome: "Rexton M-Core iX",
      descricao: "Pequeno no tamanho, mas gigante na tecnologia.",
      imagem: mCoreIX,
      categoria: "Intra-Auricular"
    },
    {
      id: 5,
      nome: "Oticon Real",
      descricao: "Oticon Real é um modelo discreto e recarregável.",
      imagem: oticonReal,
      categoria: "Retro-Auricular"
    },
    {
      id: 6,
      nome: "Rexton Rugged",
      descricao: "É o nosso aparelho auditivo mais resistente.",
      imagem: rextonRugged,
      categoria: "Resistente"
    },
    {
      id: 7,
      nome: "Oticon Zircon",
      descricao: "Oferece um aparelho auditivo recarregável pequeno e discreto.",
      imagem: oticonZircon,
      categoria: "Retro-Auricular"
    },
    {
      id: 8,
      nome: "Rexton Cros",
      descricao: "Receba a informação sonora de ambos os lados.",
      imagem: rextonStellar,
      categoria: "CROS"
    },
    {
      id: 9,
      nome: "Oticon Own",
      descricao: "O aparelho auditivo que organiza os sons ao seu redor.",
      imagem: oticonOwn,
      categoria: "Intra-Auricular"
    }
  ];

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
                <span className="text-sm font-medium text-gray-600" style={{ fontFamily: 'Karla, sans-serif' }}>Tecnologia de ponta</span>
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
                Aparelhos Auditivos
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
                 Descubra nossa linha completa de aparelhos auditivos com tecnologia de ponta e design moderno para atender suas necessidades específicas.
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
                    src={aparelhosHeroImage} 
                    alt="Aparelhos Auditivos Acustika" 
                    className="object-contain"
                    style={{ display: 'block', width: '600px', marginLeft: '140px', height: 'auto' }}
                  />
                </div>
                </div>
              </div>
          </div>
        </div>
      </section>
      
      {/* Catálogo de Aparelhos Section */}
      <section className="py-16 md:py-20 bg-gray-50">
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
                Nossos Aparelhos
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
                Tecnologia de ponta, design moderno e qualidade garantida para atender suas necessidades auditivas específicas.
            </p>
          </div>
          
            {/* Grid de Aparelhos */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aparelhos.map((aparelho, index) => (
            <div 
                  key={aparelho.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group flex flex-col"
              data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Imagem */}
                  <div className="h-64 overflow-hidden bg-gray-50">
                    <img 
                      src={aparelho.imagem} 
                      alt={aparelho.nome} 
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
              </div>
                  
                  {/* Conteúdo */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex-1 space-y-4">
                      {/* Categoria */}
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-acustika-purple to-acustika-teal rounded-full"></div>
                        <span 
                          className="text-sm font-medium text-gray-500"
                          style={{ fontFamily: 'Karla, sans-serif' }}
                        >
                          {aparelho.categoria}
                        </span>
            </div>
            
                      {/* Nome */}
                      <h3 
                        className="font-semibold text-gray-900 text-xl"
                        style={{ 
                          fontFamily: 'Karla, sans-serif',
                          fontWeight: '600',
                          fontSize: '24px',
                          lineHeight: '1.2'
                        }}
                      >
                        {aparelho.nome}
                      </h3>
                      
                      {/* Descrição */}
                      <p 
                        className="text-gray-600 leading-relaxed"
                        style={{ 
                          fontFamily: 'Karla, sans-serif',
                          fontWeight: '400',
                          fontSize: '16px',
                          lineHeight: '1.5'
                        }}
                      >
                        {aparelho.descricao}
                      </p>
            </div>
            
                    {/* Botão Saiba Mais - sempre no footer */}
                    <div className="pt-4">
                      <div className="bth bth-white-icon w-full">
                        <Link 
                          to={`/aparelho/${aparelho.nome.toLowerCase().replace(/\s+/g, '-')}`}
                          className="elementor-button w-full text-center py-8"
                          style={{ paddingTop: '52px', paddingBottom: '52px' }}
                        >
                          <span className="elementor-button-text">Saiba Mais</span>
                        </Link>
              </div>
            </div>
          </div>
        </div>
              ))}
            </div>
            
            {/* Seção de Informação Adicional */}
            <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-100" data-aos="fade-up" data-aos-delay="500">
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
                  Temos outros modelos de aparelhos que não constam no site.
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
                  Entre em contato conosco para mais informações pelo WhatsApp.
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

export default Aparelhos;

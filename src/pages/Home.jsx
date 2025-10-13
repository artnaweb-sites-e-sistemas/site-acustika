import React, { useState, useEffect } from 'react';
import heroImage from '../assets/images/hero/hero-main.png';
import heroMainImage from '../assets/images/hero/hero-main.png';
import clinicMapImage from '../assets/images/clinic-map.jpg';
import partnerLogos from '../assets/images/partners.webp';
import testimonialPhoto from '../assets/images/testimonial-photo.jpg';
import serviceGeneral from '../assets/images/service-general.jpg';
import serviceRestorative from '../assets/images/service-restorative.jpg';
import serviceCosmetic from '../assets/images/service-cosmetic.jpg';
import kidsFriendlyBg from '../assets/images/fotobg5_optimized.jpg';
import dentistryDoneRightBg from '../assets/images/dentistry-bg.jpg';
import dentistryDoneRightMain from '../assets/images/dentistry-main.jpg';
import dentistryDoneRightFloating from '../assets/images/dentistry-floating.png';
import video1 from '../assets/images/video.mp4';
import visitUsLocationBg from '../assets/images/location-bg.jpg';
import visitUsGallery1 from '../assets/images/_MG_2087_optimized.jpg';
import visitUsGallery2 from '../assets/images/_MG_2105_optimized.jpg';
import visitUsGallery3 from '../assets/images/gallery-3.jpg';
import visitUsGallery4 from '../assets/images/gallery-4.jpg';
import unidadesMulti4 from '../assets/images/unidades.jpg';
import hashtagOucabemVivamelhor from '../assets/images/hashtag.png';
import faviconIcon from '../assets/images/favicon.png';
import favicon2Icon from '../assets/images/favicon2.png';
import testimonialImage from '../assets/images/testimonial.jpg';
// Imports das imagens das unidades
import kobrasol1 from '../assets/images/units/kobrasol-1.jpg';
import kobrasol2 from '../assets/images/units/kobrasol-2.jpg';
import kobrasol3 from '../assets/images/units/kobrasol-3.jpg';
import kobrasol4 from '../assets/images/units/kobrasol-4.jpg';
import ipiranga1 from '../assets/images/units/ipiranga-1.jpg';
import ipiranga2 from '../assets/images/units/ipiranga-2.jpg';
import ipiranga3 from '../assets/images/units/ipiranga-3.jpg';
// Imports das imagens dos aparelhos auditivos
import argosyVistaV from '../assets/images/hearing-aids/argosy-vista-v.jpg';
import oticonXceed from '../assets/images/hearing-aids/oticon-xceed.png';
import rextonMCoreR from '../assets/images/hearing-aids/rexton-m-core-r.jpg';
import '../styles/liquid-glass-buttons.css';

const Home = () => {
  // Estado para controlar o carrossel de endereços
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [currentTestimonialCardIndex, setCurrentTestimonialCardIndex] = useState(0);
  // Estado para controlar o carrossel automático de imagens de cada unidade
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Dados dos endereços das unidades
  const locations = [
    {
      id: 1,
      title: "São Paulo SP - Ipiranga",
      address: "Av. Nazaré, 1139 – Loja 2 – Térreo Ed. Cardeal Hummes",
      phone: "(11) 3895-3000",
      cellphone: "(11) 99770-4014",
      mapsUrl: "https://www.google.com/maps/search/Av.+Nazaré,+1139+-+Ipiranga,+São+Paulo+-+SP",
      images: [ipiranga1, ipiranga2, ipiranga3]
    },
    {
      id: 2,
      title: "Florianópolis SC - Rio Tavares",
      address: "Multi Open Shopping – Rodovia Dr. Antônio Luiz Moura Gonzaga, 3339, Sala 115C",
      phone: "(48) 3247-9000",
      cellphone: "(48) 99128-7927",
      mapsUrl: "https://www.google.com/maps/search/Multi+Open+Shopping+Rodovia+Dr.+Antônio+Luiz+Moura+Gonzaga+3339+Florianópolis",
      images: [clinicMapImage] // Placeholder até ter as fotos
    },
    {
      id: 3,
      title: "São José SC - Kobrasol",
      address: "Av. Lédio João Martins, 301 – Loja 5 – Ed. Kobrasol Center",
      phone: "(48) 3247-9000",
      cellphone: "(48) 99128-7927",
      mapsUrl: "https://www.google.com/maps/search/Av.+Lédio+João+Martins,+301+-+Kobrasol+São+José+SC",
      images: [kobrasol1, kobrasol2, kobrasol3, kobrasol4]
    }
  ];

  // Funções para navegar no carrossel
  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => 
      prevIndex === locations.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCard = () => {
    setCurrentCardIndex((prevIndex) => 
      prevIndex === 0 ? locations.length - 1 : prevIndex - 1
    );
  };

  // Carrossel automático de imagens
  useEffect(() => {
    const currentLocation = locations[currentCardIndex];
    if (currentLocation.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === currentLocation.images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Muda a cada 3 segundos

      return () => clearInterval(interval);
    }
  }, [currentCardIndex]);

  // Reset do índice de imagem quando muda de unidade
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [currentCardIndex]);

  // Dados dos depoimentos

  // Dados dos depoimentos com fotos
  const testimonialCards = [
    {
      id: 2,
      name: "Dona Rita",
      role: "Paciente",
      text: "Os aparelhos comprados na Acustika sempre foram muito bons, nunca tive nenhum problema com eles. O atendimento é ótimo, sempre gosto muito e fico até com saudades da fonoaudióloga.",
      photo: testimonialImage
    },
    {
      id: 3,
      name: "Marlon",
      role: "Paciente",
      text: "Tenho 38 anos e desde a infância convivi com a falta de audição do ouvido esquerdo, sempre com muita dificuldade para compreender as comunicações, principalmente porque participo de uma banda de música. Faz 6 meses que estou usando o aparelho da Acustika e a minha vida social e a autoestima melhoraram muito.",
      photo: testimonialImage
    },
    {
      id: 4,
      name: "Dona Odete",
      role: "Paciente",
      text: "Desde que comecei a usar os aparelhos da Acustika a minha vida mudou completamente. Eu participo das coisas, não me sinto mais solitária. Então eu agradeço bastante à Acustika pela forma de vida que está me proporcionando atualmente.",
      photo: testimonialImage
    }
  ];


  // Funções para navegar entre os cards de depoimentos com fotos
  const prevTestimonialCard = () => {
    setCurrentTestimonialCardIndex((prev) => (prev === 0 ? testimonialCards.length - 1 : prev - 1));
  };

  const nextTestimonialCard = () => {
    setCurrentTestimonialCardIndex((prev) => (prev === testimonialCards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Background Animado Inspirado */}
      <section className="relative overflow-hidden" style={{ height: '600px' }}>
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
                const particleCount = 150;
                
                // Criar partículas
                for (let i = 0; i < particleCount; i++) {
                  particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 3 + 1, // Tamanho maior
                    speedX: (Math.random() - 0.5) * 0.5,
                    speedY: (Math.random() - 0.5) * 0.5,
                    opacity: Math.random() * 0.4 + 0.2, // Opacidade maior
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
                <span className="text-sm font-medium text-gray-600" style={{ fontFamily: 'Karla, sans-serif' }}>Mais de 20 anos de experiência</span>
               </div>
               
              {/* Headline Principal com gradiente */}
               <h1 
                className="font-semibold text-gray-900 text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight"
                 data-aos="fade-up"
                 data-aos-delay="200"
                 style={{ 
                  fontFamily: 'Noto Serif, serif',
                  fontWeight: '500',
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em',
                  background: 'linear-gradient(135deg, #1f2937 0%, #374151 50%, #4b5563 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Ouvir bem é viver melhor.
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
               
              {/* Elementos de confiança */}
              <div 
                className="flex items-center justify-center lg:justify-start gap-2 mb-4"
                data-aos="fade-up"
                data-aos-delay="300"
                style={{ 
                  fontFamily: 'Karla, sans-serif',
                  fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '1.4',
                  opacity: '0.8'
                }}
              >
                <div className="flex text-gray-900">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star text-gray-900"></i>
                  ))}
                </div>
                <span className="text-gray-600">5,0 no Google Reviews</span>
              </div>
              
              {/* Ícones com estilo moderno */}
              <div 
                className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-6"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-200/30">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#7e4078' }}>
                    <i className="fas fa-stethoscope text-white"></i>
                  </div>
                  <span className="text-gray-700 font-medium" style={{ fontFamily: 'Karla, sans-serif', fontSize: '14px' }}>Exames</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-200/30">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#7e4078' }}>
                    <i className="fas fa-cog text-white"></i>
                  </div>
                  <span className="text-gray-700 font-medium" style={{ fontFamily: 'Karla, sans-serif', fontSize: '14px' }}>Ajustes</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-200/30">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#64a0a0' }}>
                    <i className="fas fa-comments text-white"></i>
                  </div>
                  <span className="text-gray-700 font-medium" style={{ fontFamily: 'Karla, sans-serif', fontSize: '14px' }}>Atendimento humanizado</span>
                </div>
              </div>
              
              {/* Botão CTA moderno */}
              <div 
                className="flex justify-center lg:justify-start"
                 data-aos="fade-up"
                 data-aos-delay="500"
               >
                <div className="bth">
                  <a href="https://wa.me/5548991287927" target="_blank" rel="noopener noreferrer" className="elementor-button group">
                    <span className="elementor-button-text">Agende sua consulta gratuita</span>
                    <span className="elementor-button-icon group-hover:rotate-0 transition-all duration-500" style={{ transform: 'rotate(45deg)' }}>
                      <img 
                        src={faviconIcon} 
                        alt="Acustika" 
                        className="w-4 h-4 transition-all duration-500 group-hover:opacity-0 group-hover:scale-0" 
                      />
                      <i className="fab fa-whatsapp text-base absolute top-1/2 left-1/2 transition-all duration-500 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 whatsapp-icon-white" style={{ transform: 'translate(-50%, -50%) rotate(-45deg)', color: '#ffffff !important' }}></i>
                    </span>
                  </a>
                </div>
                 </div>
               </div>
              
            {/* Coluna Direita: Imagem Principal */}
            <div 
              className="relative order-2 lg:order-last h-full flex items-end justify-center hidden lg:flex"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <div className="relative">
                {/* Círculo estilizado animado no fundo */}
                <div className="absolute inset-0 flex items-end justify-center">
                  <div className="relative">
                    {/* Círculo principal com gradiente */}
                    <div 
                      className="w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] rounded-full opacity-25"
                      style={{
                        background: 'linear-gradient(135deg, rgba(122, 68, 120, 0.4) 0%, rgba(100, 160, 160, 0.4) 50%, rgba(122, 68, 120, 0.4) 100%)',
                        animation: 'float 4s ease-in-out infinite, glow 3s ease-in-out infinite alternate'
                      }}
                    />
                    
                    {/* Círculo secundário com movimento */}
                    <div 
                      className="absolute top-1/2 left-1/2 w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] rounded-full opacity-20"
                      style={{
                        background: 'radial-gradient(circle, rgba(100, 160, 160, 0.5) 0%, transparent 70%)',
                        transform: 'translate(-50%, -50%)',
                        animation: 'rotate 6s linear infinite, breathe 2s ease-in-out infinite'
                      }}
                    />
                    
                    {/* Círculo terciário com pulso */}
                    <div 
                      className="absolute top-1/2 left-1/2 w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] rounded-full opacity-15"
                      style={{
                        background: 'conic-gradient(from 0deg, rgba(122, 68, 120, 0.4), rgba(100, 160, 160, 0.4), rgba(122, 68, 120, 0.4))',
                        transform: 'translate(-50%, -50%)',
                        animation: 'pulse 2s ease-in-out infinite, shimmer 5s linear infinite'
                      }}
                    />
                  </div>
                </div>

                {/* Imagem principal com efeito moderno */}
                <div className="relative hero-image-container z-10">
                  <img 
                    src={heroMainImage} 
                    alt="Paciente usando aparelho auditivo" 
                    className="w-[250px] h-[250px] lg:w-[550px] lg:h-[550px] object-cover"
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
                  lineHeight: '1.2'
                }}
              >
                Somos uma clínica de aparelhos auditivos dedicada a <span style={{ color: '#794376' }}>melhorar sua qualidade de vida</span>.
              </h2>
              
              {/* Description */}
              <div 
                className="space-y-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <p 
                  className="text-gray-600 leading-relaxed"
                   style={{ 
                    fontFamily: 'Noto Serif, serif',
                    fontWeight: '500',
                    fontSize: '18px',
                    lineHeight: '1.4'
                  }}
                >
                  A Acustika Aparelhos Auditivos se dedica a fornecer serviços de reabilitação auditiva acessíveis e de qualidade para a comunidade, com foco no cuidado preventivo e humanizado.
                </p>
                
                <p 
                  className="text-gray-600 leading-relaxed"
                  style={{ 
                    fontFamily: 'Noto Serif, serif',
                    fontWeight: '500',
                    fontSize: '18px',
                    lineHeight: '1.4'
                  }}
                >
                  Estamos convenientemente localizados em unidades de fácil acesso com estacionamento amplo. Atendemos São Paulo, Florianópolis, São José e todas as cidades vizinhas.
                </p>
                
                <p 
                  className="text-gray-600 leading-relaxed"
                  style={{ 
                    fontFamily: 'Noto Serif, serif',
                    fontWeight: '500',
                    fontSize: '18px',
                    lineHeight: '1.4'
                  }}
                >
                  <span className="font-semibold" style={{ color: '#7e4078' }}>Agende online agora</span> ou nos ligue no <span className="font-semibold" style={{ color: '#7e4078' }}>(11) 3895-3000</span>
                </p>
               </div>
            </div>
            
            {/* Map Card Section - Carrossel */}
             <div 
              className="relative max-w-md mx-auto lg:mx-0"
               data-aos="fade-left"
              data-aos-delay="300"
              style={{ height: '460px' }}
            >
              {/* Botões de Navegação */}
              <button
                onClick={prevCard}
                className="absolute left-2 lg:-left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Card anterior"
              >
                <i className="fas fa-chevron-left text-gray-600"></i>
              </button>
              
              <button
                onClick={nextCard}
                className="absolute right-2 lg:-right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Próximo card"
              >
                <i className="fas fa-chevron-right text-gray-600"></i>
              </button>
                 
              {/* Card Container */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden h-full transition-all duration-500 ease-in-out">
                {/* Map Image */}
                <div className="relative h-64 bg-gray-100 overflow-hidden">
                  <img 
                    src={locations[currentCardIndex].images[currentImageIndex]} 
                    alt={`Localização da clínica ${locations[currentCardIndex].title}`} 
                    className="w-full h-full object-cover transition-opacity duration-500"
                    style={{
                      imageRendering: 'auto',
                      backfaceVisibility: 'hidden',
                      transform: 'translateZ(0)'
                    }}
                  />
                  
                  {/* Indicadores de imagem */}
                  {locations[currentCardIndex].images.length > 1 && (
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                      {locations[currentCardIndex].images.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
                 
                {/* Card Content */}
                <div className="p-6 space-y-4">
                  {/* Title and Rating */}
                  <div className="space-y-1">
                    <h3 
                      className="font-semibold text-gray-900 text-xl"
                      style={{ 
                        fontFamily: 'Karla, sans-serif',
                        fontWeight: '600',
                        fontSize: '24px',
                        lineHeight: '1.2'
                      }}
                    >
                      {locations[currentCardIndex].title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span 
                        className="text-gray-900 font-medium"
                        style={{ 
                          fontFamily: 'Karla, sans-serif',
                          fontWeight: '400',
                          fontSize: '18px',
                          lineHeight: '1.4'
                        }}
                      >
                        5,0
                      </span>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="fas fa-star text-yellow-400"></i>
                        ))}
                      </div>
                      <span 
                        className="text-gray-900"
                        style={{ 
                          fontFamily: 'Karla, sans-serif',
                          fontWeight: '400',
                          fontSize: '18px',
                          lineHeight: '1.4'
                        }}
                      >
                        Google reviews
                      </span>
                   </div>
                 </div>
                 
                  {/* Address and Directions */}
                  <div className="space-y-2">
                    <p 
                      className="text-gray-900 leading-relaxed"
                      style={{ 
                        fontFamily: 'Karla, sans-serif',
                        fontWeight: '400',
                        fontSize: '18px',
                        lineHeight: '1.4'
                      }}
                    >
                      {locations[currentCardIndex].address}
                    </p>
                    <div className="flex items-center gap-1">
                      <a
                        href={locations[currentCardIndex].mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold cursor-pointer transition-colors"
                        style={{ 
                          color: '#7e4078',
                          fontFamily: 'Karla, sans-serif',
                          fontWeight: '600',
                          fontSize: '18px',
                          lineHeight: '1.4'
                        }}
                      >
                        Ver Direções
                      </a>
                      <i className="fas fa-external-link-alt" style={{ color: '#7e4078' }}></i>
                   </div>
                 </div>
                </div>
                 </div>
                 
              {/* Indicadores de posição */}
              <div className="flex justify-center mt-4 space-x-2">
                {locations.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCardIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentCardIndex 
                        ? 'w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    style={index === currentCardIndex ? { backgroundColor: '#7e4078' } : {}}
                    aria-label={`Ir para card ${index + 1}`}
                  />
                ))}
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section - Figma Design */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="flex flex-col items-center space-y-20">
            {/* Partner Logos Carousel */}
            <div 
              className="w-full overflow-hidden relative"
              data-aos="fade-up"
            >
              {/* Gradient fade effects */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
              
              <div className="flex animate-scroll">
                {/* First set of logos */}
                <div className="flex-shrink-0 mr-24 opacity-75 hover:opacity-100 transition-opacity duration-300">
                  <img 
                    src={partnerLogos} 
                    alt="Parceiros e marcas da Acustika" 
                    className="h-16 md:h-20 w-auto"
                  />
            </div>
                {/* Second set for seamless loop */}
                <div className="flex-shrink-0 mr-24 opacity-75 hover:opacity-100 transition-opacity duration-300">
                  <img 
                    src={partnerLogos} 
                    alt="Parceiros e marcas da Acustika" 
                    className="h-16 md:h-20 w-auto"
                  />
          </div>
                {/* Third set for seamless loop */}
                <div className="flex-shrink-0 mr-24 opacity-75 hover:opacity-100 transition-opacity duration-300">
                  <img 
                    src={partnerLogos} 
                    alt="Parceiros e marcas da Acustika" 
                    className="h-16 md:h-20 w-auto"
                  />
        </div>
                   </div>
                 </div>
                 
            {/* Testimonial Card Carousel */}
            <div 
              className="w-full max-w-6xl relative"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {/* Botões de Navegação */}
              <button
                onClick={prevTestimonialCard}
                className="absolute left-2 lg:-left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Depoimento anterior"
              >
                <i className="fas fa-chevron-left text-gray-600 text-lg"></i>
              </button>
              
              <button
                onClick={nextTestimonialCard}
                className="absolute right-2 lg:-right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Próximo depoimento"
              >
                <i className="fas fa-chevron-right text-gray-600 text-lg"></i>
              </button>

              <div className="bg-gradient-to-b from-white to-white/30 border border-white/20 rounded-xl overflow-hidden shadow-lg">
                <div className="flex flex-col lg:flex-row items-center gap-20 p-8 lg:p-16 transition-all duration-500 ease-in-out">
                  {/* Testimonial Photo */}
                  <div className="flex-shrink-0 w-full lg:w-[410px] h-[348px] lg:h-auto">
                    <img 
                      src={testimonialCards[currentTestimonialCardIndex].photo} 
                      alt={`${testimonialCards[currentTestimonialCardIndex].name} - Paciente satisfeita`} 
                      className="w-full h-full object-cover rounded-xl"
                    />
                </div>
                 
                  {/* Testimonial Content */}
                  <div className="flex-1 p-4 space-y-6">
                    {/* Quote Mark */}
                    <div className="relative">
                      <span 
                        className="absolute -left-8 -top-2 text-6xl font-medium text-gray-900"
                        style={{ 
                          fontFamily: 'Noto Serif, serif',
                          fontWeight: '500',
                          fontSize: '53px',
                          lineHeight: '1.4'
                        }}
                      >
                        "
                      </span>
                      
                      {/* Testimonial Text */}
                      <blockquote 
                        className="text-gray-900 leading-relaxed"
                        style={{ 
                          fontFamily: 'Noto Serif, serif',
                          fontWeight: '500',
                          fontSize: '24px',
                          lineHeight: '1.4'
                        }}
                      >
                        {testimonialCards[currentTestimonialCardIndex].text}
                      </blockquote>
              </div>
              
                    {/* Author Info */}
                    <div className="flex items-center gap-2">
                      <span 
                        className="font-semibold text-gray-900"
                        style={{ 
                          fontFamily: 'Karla, sans-serif',
                          fontWeight: '600',
                          fontSize: '18px',
                          lineHeight: '1.4'
                        }}
                      >
                        {testimonialCards[currentTestimonialCardIndex].name} /
                      </span>
                      <span 
                        className="text-gray-600"
                        style={{ 
                          fontFamily: 'Karla, sans-serif',
                          fontWeight: '400',
                          fontSize: '18px',
                          lineHeight: '1.4'
                        }}
                      >
                        {testimonialCards[currentTestimonialCardIndex].role}
                      </span>
                </div>
                 </div>
              </div>
              
                 {/* Pontos Indicadores */}
                 <div className="flex justify-center mt-6 space-x-2">
                   {testimonialCards.map((_, index) => (
                     <button
                       key={index}
                       onClick={() => setCurrentTestimonialCardIndex(index)}
                       className={`w-3 h-3 rounded-full transition-all duration-300 ${
                         index === currentTestimonialCardIndex 
                           ? 'bg-white scale-125' 
                           : 'bg-white/50 hover:bg-white/70'
                       }`}
                       aria-label={`Ir para depoimento ${index + 1}`}
                     />
                   ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Serviços Completos Section */}
      <section className="pt-0 pb-16 md:pb-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Imagens acima e abaixo do título */}
            <div className="flex flex-col items-center gap-6 mb-12" data-aos="fade-up">
              {/* Imagem das unidades acima */}
              <img 
                src={unidadesMulti4} 
                alt="Unidades múltiplas" 
                className="h-72 w-auto object-contain"
                style={{ mixBlendMode: 'multiply' }}
              />
              
              {/* Imagem da hashtag abaixo */}
              <img 
                src={hashtagOucabemVivamelhor} 
                alt="#OucabemVivamelhor" 
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
            
            {/* Título e Descrição */}
          <div className="text-center mb-20">
            <h2 
                className="font-medium text-gray-900 mb-6 text-3xl md:text-4xl lg:text-5xl"
              data-aos="fade-up"
                style={{ 
                  fontFamily: 'Noto Serif, serif',
                  fontWeight: '500',
                  fontSize: '40px',
                  lineHeight: '1.2'
                }}
              >
                Tecnologia que se adapta ao seu estilo de vida.
            </h2>
            
            {/* Divisor com ícone da logo */}
            <div className="flex justify-center mb-8" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center space-x-4">
                <div className="h-px bg-gray-300 w-16"></div>
                <img src={faviconIcon} alt="Acustika" className="w-6 h-6 opacity-60" />
                <div className="h-px bg-gray-300 w-16"></div>
              </div>
            </div>
            
            <div 
              className="max-w-4xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
                <p 
                  className="text-gray-600 leading-relaxed"
                  style={{ 
                    fontFamily: 'Karla, sans-serif',
                    fontWeight: '400',
                    fontSize: '18px',
                    lineHeight: '1.4'
                  }}
                >
                  Na Acustika, você encontra aparelhos auditivos modernos, discretos e confortáveis. Oferecemos desde modelos quase invisíveis até soluções recarregáveis de última geração, sempre com adaptação personalizada e acompanhamento contínuo.
                </p>
              </div>
          </div>
          
            {/* Cards de Serviços */}
            <div className="grid md:grid-cols-3 gap-10 mb-16">
              {/* Card 1 - Geral e Preventivo */}
            <div 
                className="service-card bg-gradient-to-b from-white to-white/30 border border-white/20 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-gray-300 hover:from-white hover:to-white/90 transition-all duration-300 cursor-pointer transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay="100"
              onClick={() => window.open('/servicos', '_self')}
            >
                {/* Imagem */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={argosyVistaV} 
                    alt="Argosy Vista V" 
                    className="w-full h-full object-contain bg-gray-50"
                  />
              </div>
                
                {/* Conteúdo */}
                <div className="p-6 space-y-4">
                  <h3 
                    className="font-semibold text-gray-900 text-xl"
                    style={{ 
                      fontFamily: 'Karla, sans-serif',
                      fontWeight: '600',
                      fontSize: '24px',
                      lineHeight: '1.2'
                    }}
                  >
                    Argosy Vista V
                  </h3>
                  <p 
                    className="text-gray-600 leading-relaxed"
                    style={{ 
                      fontFamily: 'Karla, sans-serif',
                      fontWeight: '400',
                      fontSize: '18px',
                      lineHeight: '1.4'
                    }}
                  >
                    Fácil manuseio, carregamento rápido para uma audição de qualidade.
                  </p>
               </div>
            </div>
            
              {/* Card 2 - Restaurador */}
            <div 
                className="service-card bg-gradient-to-b from-white to-white/30 border border-white/20 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-gray-300 hover:from-white hover:to-white/90 transition-all duration-300 cursor-pointer transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay="200"
              onClick={() => window.open('/servicos', '_self')}
            >
                {/* Imagem */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={oticonXceed} 
                    alt="Oticon Xceed" 
                    className="w-full h-full object-contain bg-gray-50"
                  />
            </div>
            
                {/* Conteúdo */}
                <div className="p-6 space-y-4">
                  <h3 
                    className="font-semibold text-gray-900 text-xl"
                    style={{ 
                      fontFamily: 'Karla, sans-serif',
                      fontWeight: '600',
                      fontSize: '24px',
                      lineHeight: '1.2'
                    }}
                  >
                    Oticon Xceed
                  </h3>
                  <p 
                    className="text-gray-600 leading-relaxed"
                    style={{ 
                      fontFamily: 'Karla, sans-serif',
                      fontWeight: '400',
                      fontSize: '18px',
                      lineHeight: '1.4'
                    }}
                  >
                    Aparelho mais potente do mundo.<br/>
                    Perda auditiva severa a profunda.
                  </p>
              </div>
            </div>
            
              {/* Card 3 - Cosmético */}
            <div 
                className="service-card bg-gradient-to-b from-white to-white/30 border border-white/20 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-gray-300 hover:from-white hover:to-white/90 transition-all duration-300 cursor-pointer transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay="300"
              onClick={() => window.open('/servicos', '_self')}
            >
                {/* Imagem */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={rextonMCoreR} 
                    alt="Rexton M-Core R" 
                    className="w-full h-full object-contain bg-gray-50"
                  />
            </div>
            
                {/* Conteúdo */}
                <div className="p-6 space-y-4">
                  <h3 
                    className="font-semibold text-gray-900 text-xl"
                    style={{ 
                      fontFamily: 'Karla, sans-serif',
                      fontWeight: '600',
                      fontSize: '24px',
                      lineHeight: '1.2'
                    }}
                  >
                    Rexton M-Core R
                  </h3>
                  <p 
                    className="text-gray-600 leading-relaxed"
                    style={{ 
                      fontFamily: 'Karla, sans-serif',
                      fontWeight: '400',
                      fontSize: '18px',
                      lineHeight: '1.4'
                    }}
                  >
                    Aparelho recarregável<br/>
                    durável, prático e fácil de usar
                  </p>
              </div>
              </div>
            </div>
            
            {/* Botão CTA */}
                   <div className="text-center">
              <div className="bth bth-white-icon inline-block" data-aos="fade-up" data-aos-delay="400">
                <a href="/aparelhos" className="elementor-button">
                  <span className="elementor-button-text">Ver todos os aparelhos</span>
                  <span className="elementor-button-icon">
                    <i className="fas fa-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Por que Escolher a Acustika Section */}
       <section className="pt-16 md:pt-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Título Principal */}
            <div className="text-center mb-30">
            <h2 
                className="font-medium text-gray-900 mb-6 text-3xl md:text-4xl lg:text-5xl"
              data-aos="fade-up"
                style={{ 
                  fontFamily: 'Noto Serif, serif',
                  fontWeight: '500',
                  fontSize: '40px',
                  lineHeight: '1.2'
                }}
              >
                Por que escolhem a Acustika?
            </h2>
            
            {/* Divisor com ícone da logo */}
            <div className="flex justify-center mb-12" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center space-x-4">
                <div className="h-px bg-gray-300 w-16"></div>
                <img src={faviconIcon} alt="Acustika" className="w-6 h-6 opacity-60" />
                <div className="h-px bg-gray-300 w-16"></div>
              </div>
            </div>
          
             {/* Cards de Motivos */}
             <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-12 shadow-sm border border-gray-100">
              <div className="grid lg:grid-cols-2 gap-20">
                {/* Coluna Esquerda */}
                <div className="space-y-12 lg:space-y-20">
                {/* Card 1 - Família */}
                <div 
                  className="flex flex-col lg:flex-row gap-6 items-center lg:items-start text-center lg:text-left"
              data-aos="fade-up"
              data-aos-delay="100"
            >
                  {/* Ícone */}
                  <div className="flex-shrink-0 relative">
                    <div 
                      className="w-20 h-20 lg:w-32 lg:h-32 rounded-xl flex items-center justify-center"
                       style={{
                         background: 'linear-gradient(135deg, rgba(122, 68, 120, 0.1) 0%, rgba(100, 160, 160, 0.3) 100%)',
                         border: '1px solid rgba(122, 68, 120, 0.2)'
                       }}
                    >
                       <i className="fas fa-users text-acustika-purple text-4xl lg:text-6xl"></i>
                </div>
                     {/* Badge de check */}
                     <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200">
                       <i className="fas fa-check text-acustika-purple"></i>
              </div>
                </div>
                 
                  {/* Conteúdo */}
                  <div className="flex-1 space-y-4">
                    <h3 
                      className="font-semibold text-gray-900 text-xl"
                      style={{ 
                        fontFamily: 'Karla, sans-serif',
                        fontWeight: '600',
                        fontSize: '24px',
                        lineHeight: '1.2'
                      }}
                    >
                      Audiologia para toda a família
                    </h3>
                    <p 
                      className="text-gray-600 leading-relaxed"
                      style={{ 
                        fontFamily: 'Karla, sans-serif',
                        fontWeight: '400',
                        fontSize: '18px',
                        lineHeight: '1.4'
                      }}
                    >
                      Crianças, adolescentes, adultos — forneceremos tratamento personalizado excelente e cuidados auditivos de qualidade para todas as idades.
                    </p>
              </div>
            </div>
            
                {/* Card 2 - Tecnologia */}
            <div 
                  className="flex flex-col lg:flex-row gap-6 items-center lg:items-start text-center lg:text-left"
              data-aos="fade-up"
              data-aos-delay="200"
            >
                  {/* Ícone */}
                  <div className="flex-shrink-0 relative">
                    <div 
                      className="w-20 h-20 lg:w-32 lg:h-32 rounded-xl flex items-center justify-center"
                       style={{
                         background: 'linear-gradient(135deg, rgba(122, 68, 120, 0.1) 0%, rgba(100, 160, 160, 0.3) 100%)',
                         border: '1px solid rgba(122, 68, 120, 0.2)'
                       }}
                    >
                       <i className="fas fa-stethoscope text-acustika-purple text-4xl lg:text-6xl"></i>
                </div>
                     {/* Badge de check */}
                     <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200">
                       <i className="fas fa-check text-acustika-purple"></i>
              </div>
                </div>
                 
                  {/* Conteúdo */}
                  <div className="flex-1 space-y-4">
                    <h3 
                      className="font-semibold text-gray-900 text-xl"
                      style={{ 
                        fontFamily: 'Karla, sans-serif',
                        fontWeight: '600',
                        fontSize: '24px',
                        lineHeight: '1.2'
                      }}
                    >
                      Tratamentos modernos e perfeitos
                    </h3>
                    <p 
                      className="text-gray-600 leading-relaxed"
                      style={{ 
                        fontFamily: 'Karla, sans-serif',
                        fontWeight: '400',
                        fontSize: '18px',
                        lineHeight: '1.4'
                      }}
                    >
                      Cuidados de alta tecnologia, seja para um simples ajuste ou uma transformação completa da sua audição.
                    </p>
                </div>
              </div>
            </div>
            
              {/* Coluna Direita */}
              <div className="space-y-12 lg:space-y-20">
                {/* Card 3 - Conforto */}
            <div 
                  className="flex flex-col lg:flex-row gap-6 items-center lg:items-start text-center lg:text-left"
              data-aos="fade-up"
              data-aos-delay="300"
            >
                  {/* Ícone */}
                  <div className="flex-shrink-0 relative">
                    <div 
                      className="w-20 h-20 lg:w-32 lg:h-32 rounded-xl flex items-center justify-center"
                       style={{
                         background: 'linear-gradient(135deg, rgba(122, 68, 120, 0.1) 0%, rgba(100, 160, 160, 0.3) 100%)',
                         border: '1px solid rgba(122, 68, 120, 0.2)'
                       }}
                    >
                       <i className="fas fa-star text-acustika-purple text-4xl lg:text-6xl"></i>
                </div>
                     {/* Badge de check */}
                     <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200">
                       <i className="fas fa-check text-acustika-purple"></i>
              </div>
                </div>
                  
                  {/* Conteúdo */}
                  <div className="flex-1 space-y-4">
                    <h3 
                      className="font-semibold text-gray-900 text-xl"
                      style={{ 
                        fontFamily: 'Karla, sans-serif',
                        fontWeight: '600',
                        fontSize: '24px',
                        lineHeight: '1.2'
                      }}
                    >
                      Conforto do paciente é nossa prioridade
                    </h3>
                    <p 
                      className="text-gray-600 leading-relaxed"
                      style={{ 
                        fontFamily: 'Karla, sans-serif',
                        fontWeight: '400',
                        fontSize: '18px',
                        lineHeight: '1.4'
                      }}
                    >
                      Excelemos em excelência auditiva — desfrute de uma visita segura e confortável.
                    </p>
                  </div>
          </div>
          
                {/* Card 4 - Idiomas */}
                <div 
                  className="flex flex-col lg:flex-row gap-6 items-center lg:items-start text-center lg:text-left"
              data-aos="fade-up"
              data-aos-delay="400"
            >
                  {/* Ícone */}
                  <div className="flex-shrink-0 relative">
                    <div 
                      className="w-20 h-20 lg:w-32 lg:h-32 rounded-xl flex items-center justify-center"
                       style={{
                         background: 'linear-gradient(135deg, rgba(122, 68, 120, 0.1) 0%, rgba(100, 160, 160, 0.3) 100%)',
                         border: '1px solid rgba(122, 68, 120, 0.2)'
                       }}
                    >
                       <svg className="w-12 h-12 lg:w-16 lg:h-16 text-acustika-purple" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>
                      </svg>
                    </div>
                     {/* Badge de check */}
                     <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200">
                       <i className="fas fa-check text-acustika-purple"></i>
                  </div>
                    </div>
                    
                  {/* Conteúdo */}
                  <div className="flex-1 space-y-4">
                    <h3 
                      className="font-semibold text-gray-900 text-xl"
                      style={{ 
                        fontFamily: 'Karla, sans-serif',
                        fontWeight: '600',
                        fontSize: '24px',
                        lineHeight: '1.2'
                      }}
                    >
                      Múltiplos idiomas falados
                    </h3>
                    <p 
                      className="text-gray-600 leading-relaxed"
                      style={{ 
                        fontFamily: 'Karla, sans-serif',
                        fontWeight: '400',
                        fontSize: '18px',
                        lineHeight: '1.4'
                      }}
                    >
                      Somos capazes de nos comunicar fluentemente com pacientes que falam português, inglês, espanhol e italiano.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
      {/* Somos Amigáveis com Crianças Section */}
      <section 
        className="relative py-0 w-full"
        style={{
          backgroundImage: `url(${kidsFriendlyBg})`,
          backgroundSize: '100% auto',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#f8f9fa',
          minHeight: '600px',
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)'
        }}
      >
        
        {/* Overlay Gradiente */}
          <div 
            className="absolute inset-0 w-full"
            style={{
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(241, 242, 242, 0) 100%)',
              height: '600px'
            }}
          />
        
        {/* Container Principal */}
        <div className="relative container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 pt-32 pb-12">
          <div className="max-w-7xl mx-auto">
            {/* Card Glassmorphism */}
            <div 
              className="ml-auto max-w-2xl"
              data-aos="fade-left"
                data-aos-delay="200"
              >
              <div 
                className="p-16 rounded-xl backdrop-blur-md"
                style={{
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.3) 100%)',
                  border: '2px solid rgba(255, 255, 255, 1)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                }}
              >
                {/* Conteúdo do Card */}
                <div className="space-y-8">
                  {/* Título */}
                  <h2 
                    className="font-medium text-gray-900 text-3xl md:text-4xl lg:text-5xl"
                    style={{ 
                      fontFamily: 'Noto Serif, serif',
                      fontWeight: '500',
                      fontSize: '40px',
                      lineHeight: '1.2'
                    }}
                  >
                    Acessórios Essenciais
            </h2>
            
                  
                  {/* Descrição */}
                  <p 
                    className="text-gray-600 leading-relaxed"
                    style={{ 
                      fontFamily: 'Karla, sans-serif',
                      fontWeight: '400',
                      fontSize: '18px',
                      lineHeight: '1.4'
                    }}
                  >
                    Pilhas, carregadores, produtos de limpeza e muito mais. Tudo que você precisa para manter seu aparelho auditivo funcionando perfeitamente, com qualidade garantida e preços competitivos.
                  </p>
                  
                  {/* Botão */}
                  <div className="pt-4">
                    <div className="bth bth-white-icon">
                      <a href="/acessorios" className="elementor-button">
                        <span className="elementor-button-text">Comprar Acessórios</span>
                  <span className="elementor-button-icon">
                    <i className="fas fa-arrow-right"></i>
                  </span>
                      </a>
                      </div>
                      </div>
                    </div>
                    </div>
                  </div>
                    </div>
                    </div>
      </section>

      {/* Audiologia Feita Direito Section */}
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
                    Sobre Nós
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
                    A Acustika é referência em saúde auditiva no Brasil. Nossa missão é devolver a clareza dos sons e a qualidade de vida aos nossos pacientes. Com mais de duas décadas de experiência, oferecemos atendimento próximo, personalizado e soluções auditivas das melhores marcas do mercado. Estamos presentes em São Paulo, Florianópolis, São José e cidades vizinhas, sempre com fácil acesso e estrutura acolhedora.
                  </p>
                  
                  {/* Lista de Benefícios */}
                  <div className="space-y-2">
                    {/* Item 1 */}
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <svg className="w-6 h-6 text-acustika-purple" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                  </div>
                      <p 
                        className="text-gray-700"
                        style={{ 
                          fontFamily: 'Karla, sans-serif',
                          fontWeight: '400',
                          fontSize: '18px',
                          lineHeight: '1.4'
                        }}
                      >
                        Preços Transparentes
                      </p>
                </div>
                    
                    {/* Item 2 */}
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <svg className="w-6 h-6 text-acustika-purple" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                      <p 
                        className="text-gray-700"
                        style={{ 
                          fontFamily: 'Karla, sans-serif',
                          fontWeight: '400',
                          fontSize: '18px',
                          lineHeight: '1.4'
                        }}
                      >
                        Garantia Incomparável
                      </p>
                    </div>
                    
                    {/* Item 3 */}
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <svg className="w-6 h-6 text-acustika-purple" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <p 
                        className="text-gray-700"
                        style={{ 
                          fontFamily: 'Karla, sans-serif',
                          fontWeight: '400',
                          fontSize: '18px',
                          lineHeight: '1.4'
                        }}
                      >
                        Ajustes GRATUITOS (para toda a vida!)
                      </p>
                      </div>
                    </div>
                    
                  {/* Citação */}
                  <div 
                    className="border-l-4 border-acustika-purple pl-5"
                  >
                    <p 
                      className="text-gray-700 italic"
                      style={{ 
                        fontFamily: 'Karla, sans-serif',
                        fontWeight: '400',
                        fontSize: '18px',
                        lineHeight: '1.4'
                      }}
                    >
                      "Nossa palavra é nosso valor. Prometemos fazer certo, no prazo e por um preço justo."
                    </p>
                    </div>
                  </div>
                  
                {/* Coluna Direita: Imagens */}
                <div className="relative">
                  {/* Vídeo Principal */}
                  <div className="relative z-10 group">
                    <div className="relative overflow-hidden shadow-2xl" style={{ borderRadius: '2rem 0 2rem 0' }}>
                      <video 
                        ref={(video) => {
                          if (video) {
                            video.addEventListener('loadedmetadata', () => {
                              // Otimizações para web
                              video.preload = 'metadata';
                              video.defaultMuted = true;
                              // Configurações de performance
                              video.setAttribute('webkit-playsinline', 'true');
                              video.setAttribute('playsinline', 'true');
                            });
                            
                            // Otimização de carregamento
                            video.addEventListener('canplay', () => {
                              video.style.opacity = '1';
                            });
                            
                            video.addEventListener('loadstart', () => {
                              video.style.opacity = '0.8';
                            });
                          }
                        }}
                        src={video1}
                        className="w-full h-auto transition-all duration-500 group-hover:scale-105 opacity-0"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        style={{
                          maxWidth: '100%',
                          height: 'auto',
                          objectFit: 'cover',
                          borderRadius: '2rem 0 2rem 0'
                        }}
                      />
                      {/* Overlay sutil para efeito moderno */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderRadius: '2rem 0 2rem 0' }}></div>
                      {/* Sound button overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button 
                          className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-200 hover:scale-110 active:scale-95"
                          onClick={(e) => {
                            const video = e.target.closest('.group').querySelector('video');
                            const button = e.target.closest('button');
                            const icon = button.querySelector('i');
                            
                            // Animação de clique
                            button.style.transform = 'scale(0.9)';
                            button.style.transition = 'transform 0.1s ease-out';
                            
                            setTimeout(() => {
                              button.style.transform = 'scale(1.1)';
                              button.style.transition = 'transform 0.15s ease-out';
                              
                              setTimeout(() => {
                                button.style.transform = 'scale(1)';
                                button.style.transition = 'transform 0.1s ease-out';
                              }, 150);
                            }, 100);
                            
                            if (video.muted) {
                              video.muted = false;
                              video.play();
                              // Ícone de som ativo
                              icon.className = 'fas fa-volume-up text-gray-800';
                            } else {
                              video.muted = true;
                              // Ícone de som mutado
                              icon.className = 'fas fa-volume-mute text-gray-800';
                            }
                          }}
                        >
                          <i className="fas fa-volume-mute text-gray-800"></i>
                        </button>
                  </div>
                </div>
            </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Título e Descrição */}
            <div className="text-center mb-16">
              <h2 
                className="font-medium text-gray-900 mb-6 text-4xl md:text-5xl lg:text-6xl"
              data-aos="fade-up"
                style={{ 
                  fontFamily: 'Noto Serif, serif',
                  fontWeight: '500',
                  fontSize: '69px',
                  lineHeight: '1.2'
                }}
              >
                Cuidado completo para sua audição.
            </h2>
            
            {/* Divisor com ícone da logo */}
            <div className="flex justify-center mb-8" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center space-x-4">
                <div className="h-px bg-gray-300 w-16"></div>
                <img src={faviconIcon} alt="Acustika" className="w-6 h-6 opacity-60" />
                <div className="h-px bg-gray-300 w-16"></div>
              </div>
            </div>
            
              <p 
                className="text-gray-600 text-lg max-w-3xl mx-auto"
                data-aos="fade-up"
                data-aos-delay="200"
                style={{ 
                  fontFamily: 'Karla, sans-serif',
                  fontWeight: '400',
                  fontSize: '18px',
                  lineHeight: '1.4'
                }}
              >
                Oferecemos uma gama completa de serviços especializados para cuidar da sua audição com excelência e tecnologia de ponta.
              </p>
            </div>

            {/* Cards de Serviços e Exames */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Card Serviços */}
              <div 
                className="card media-object p-8 shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, rgba(126, 64, 120, 0.1) 0%, rgba(100, 160, 160, 0.05) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(126, 64, 120, 0.2)'
                }}
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="space-y-6">
                  {/* Imagem */}
                  <div className="relative rounded-lg overflow-hidden">
                    <img 
                      alt="Serviços de aparelhos auditivos" 
                      className="w-full h-48 object-cover" 
                      src={visitUsGallery1}
                    />
                  </div>
                  
                  {/* Título */}
                  <h3 
                    className="font-bold text-2xl"
                    style={{ 
                      fontFamily: 'Karla, sans-serif',
                      fontWeight: '700',
                      fontSize: '24px',
                      lineHeight: '1.2',
                      color: '#7e4078'
                    }}
                  >
                    Serviços
                  </h3>
                  
                  {/* Lista de Serviços */}
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#7e4078' }}></div>
                      <span 
                        className="text-gray-700"
                        style={{ 
                          fontFamily: 'Karla, sans-serif',
                          fontWeight: '400',
                          fontSize: '16px',
                          lineHeight: '1.5'
                        }}
                      >
                        Avaliação auditiva completa
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#7e4078' }}></div>
                      <span 
                        className="text-gray-700"
                        style={{ 
                          fontFamily: 'Karla, sans-serif',
                          fontWeight: '400',
                          fontSize: '16px',
                          lineHeight: '1.5'
                        }}
                      >
                        Seleção e adaptação de aparelhos auditivos
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#7e4078' }}></div>
                      <span 
                        className="text-gray-700"
                        style={{ 
                          fontFamily: 'Karla, sans-serif',
                          fontWeight: '400',
                          fontSize: '16px',
                          lineHeight: '1.5'
                        }}
                      >
                        Conserto e revisão de aparelhos de todas as marcas
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#7e4078' }}></div>
                      <span 
                        className="text-gray-700"
                        style={{ 
                          fontFamily: 'Karla, sans-serif',
                          fontWeight: '400',
                          fontSize: '16px',
                          lineHeight: '1.5'
                        }}
                      >
                        Confecção de moldes personalizados
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#7e4078' }}></div>
                      <span 
                        className="text-gray-700"
                        style={{ 
                          fontFamily: 'Karla, sans-serif',
                          fontWeight: '400',
                          fontSize: '16px',
                          lineHeight: '1.5'
                        }}
                      >
                        Tampões para natação
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#7e4078' }}></div>
                      <span 
                        className="text-gray-700"
                        style={{ 
                          fontFamily: 'Karla, sans-serif',
                          fontWeight: '400',
                          fontSize: '16px',
                          lineHeight: '1.5'
                        }}
                      >
                        Atendimento domiciliar e teleatendimento
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#7e4078' }}></div>
                      <span 
                        className="text-gray-700"
                        style={{ 
                          fontFamily: 'Karla, sans-serif',
                          fontWeight: '400',
                          fontSize: '16px',
                          lineHeight: '1.5'
                        }}
                      >
                        Exames especializados: audiometria, mapeamento de fala, teste da orelhinha, impedanciometria, PAC e outros
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#7e4078' }}></div>
                      <span 
                        className="text-gray-700"
                        style={{ 
                          fontFamily: 'Karla, sans-serif',
                          fontWeight: '400',
                          fontSize: '16px',
                          lineHeight: '1.5'
                        }}
                      >
                        Palestras e ações de conscientização em empresas e instituições
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card Exames */}
              <div 
                className="card media-object p-8 shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, rgba(100, 160, 160, 0.1) 0%, rgba(126, 64, 120, 0.05) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(100, 160, 160, 0.2)'
                }}
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="space-y-6">
                  {/* Imagem */}
                  <div className="relative rounded-lg overflow-hidden">
                    <img 
                      alt="Exames auditivos" 
                      className="w-full h-48 object-cover" 
                      src={visitUsGallery2}
                    />
                  </div>
                  
                  {/* Título */}
                  <h3 
                    className="font-bold text-2xl"
                    style={{ 
                      fontFamily: 'Karla, sans-serif',
                      fontWeight: '700',
                      fontSize: '24px',
                      lineHeight: '1.2',
                      color: '#64a0a0'
                    }}
                  >
                    Exames
                  </h3>
                  
                  {/* Lista de Exames */}
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#7e4078' }}></div>
                      <span 
                        className="text-gray-700"
                        style={{ 
                          fontFamily: 'Karla, sans-serif',
                          fontWeight: '400',
                          fontSize: '16px',
                          lineHeight: '1.5'
                        }}
                      >
                        Audiometria Tonal e Vocal;
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#7e4078' }}></div>
                      <span 
                        className="text-gray-700"
                        style={{ 
                          fontFamily: 'Karla, sans-serif',
                          fontWeight: '400',
                          fontSize: '16px',
                          lineHeight: '1.5'
                        }}
                      >
                        Audiometria em Campo Livre;
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#7e4078' }}></div>
                      <span 
                        className="text-gray-700"
                        style={{ 
                          fontFamily: 'Karla, sans-serif',
                          fontWeight: '400',
                          fontSize: '16px',
                          lineHeight: '1.5'
                        }}
                      >
                        * Otoemissões Acústicas (Teste da Orelhinha);
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#7e4078' }}></div>
                      <span 
                        className="text-gray-700"
                        style={{ 
                          fontFamily: 'Karla, sans-serif',
                          fontWeight: '400',
                          fontSize: '16px',
                          lineHeight: '1.5'
                        }}
                      >
                        * Prova de Função Tubária;
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#7e4078' }}></div>
                      <span 
                        className="text-gray-700"
                        style={{ 
                          fontFamily: 'Karla, sans-serif',
                          fontWeight: '400',
                          fontSize: '16px',
                          lineHeight: '1.5'
                        }}
                      >
                        Acufenometria (Pesquisa do Zumbido);
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#7e4078' }}></div>
                      <span 
                        className="text-gray-700"
                        style={{ 
                          fontFamily: 'Karla, sans-serif',
                          fontWeight: '400',
                          fontSize: '16px',
                          lineHeight: '1.5'
                        }}
                      >
                        * Teste SISI;
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#7e4078' }}></div>
                      <span 
                        className="text-gray-700"
                        style={{ 
                          fontFamily: 'Karla, sans-serif',
                          fontWeight: '400',
                          fontSize: '16px',
                          lineHeight: '1.5'
                        }}
                      >
                        * Impedanciometria;
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#7e4078' }}></div>
                      <span 
                        className="text-gray-700"
                        style={{ 
                          fontFamily: 'Karla, sans-serif',
                          fontWeight: '400',
                          fontSize: '16px',
                          lineHeight: '1.5'
                        }}
                      >
                        * Mapeamento de Fala;
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#7e4078' }}></div>
                      <span 
                        className="text-gray-700"
                        style={{ 
                          fontFamily: 'Karla, sans-serif',
                          fontWeight: '400',
                          fontSize: '16px',
                          lineHeight: '1.5'
                        }}
                      >
                        * Avaliação do Processamento Auditivo Central (PAC);
                      </span>
                    </li>
                  </ul>
                  
                  {/* Nota sobre Santa Catarina */}
                  <div className="mt-6 p-4 rounded-lg border-l-4" style={{ backgroundColor: 'rgba(97, 158, 157, 0.1)', borderColor: '#619e9d' }}>
                    <p 
                      className="font-medium"
                      style={{ 
                        fontFamily: 'Karla, sans-serif',
                        fontWeight: '500',
                        fontSize: '14px',
                        lineHeight: '1.4',
                        color: '#619e9d'
                      }}
                    >
                      * Apenas nas unidades de Santa Catarina
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      




      {/* CTA Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
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
                const particleCount = 150;
                
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
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 relative" style={{ zIndex: 10 }}>
          {/* Elementos de luz pulsante */}
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-white/20 to-white/10 rounded-full blur-3xl animate-pulse" style={{ transform: 'translate(-50%, -50%)', animationDuration: '3s', zIndex: 1 }}></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-acustika-purple/30 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s', zIndex: 1 }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-acustika-teal/25 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s', zIndex: 1 }}></div>
          
          <div 
             className="rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl backdrop-blur-sm relative moving-gradient"
             style={{ 
               border: '1px solid rgba(255, 255, 255, 0.2)',
               zIndex: 2
             }}
            data-aos="zoom-in"
          >
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ 
                fontFamily: 'Noto Serif, serif',
                fontWeight: '500',
                fontSize: '48px',
                lineHeight: '1.2'
              }}
            >
              Estamos prontos para cuidar da sua audição.
            </h2>
            <p 
              className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto"
              style={{ 
                fontFamily: 'Karla, sans-serif',
                fontWeight: '400',
                fontSize: '20px',
                lineHeight: '1.4'
              }}
            >
              Agende sua consulta gratuita ou fale com um de nossos especialistas. Estamos em São Paulo, Florianópolis e São José, sempre prontos para receber você.
            </p>
            <div className="flex justify-center">
              <div className="bth-white">
                <a href="https://wa.me/5548991287927" target="_blank" rel="noopener noreferrer" className="elementor-button-white">
                  <span className="elementor-button-text">Agendar consulta gratuita</span>
                  <span className="elementor-button-icon group-hover:rotate-0 transition-all duration-500" style={{ transform: 'rotate(45deg)' }}>
                    <img 
                      src={favicon2Icon} 
                      alt="Acustika" 
                      className="w-4 h-4 transition-all duration-500 group-hover:opacity-0 group-hover:scale-0" 
                    />
                    <i className="fab fa-whatsapp text-base absolute top-1/2 left-1/2 transition-all duration-500 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 whatsapp-icon-white" style={{ transform: 'translate(-50%, -50%) rotate(-45deg)', color: '#ffffff !important' }}></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </section>
  </div>
);
};

export default Home;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import aparelhosHeroImage from '../assets/images/hero/aparelhos-hero-new_optimized.png';
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
import oticonIntent from '../assets/images/Oticon Intent.Png';
import oticonCross from '../assets/images/206622_CROS_miniRITE_T_312_2.png';
import argosyVistaVUP from '../assets/images/UH_Packshot_VistaV-UP-LeftHook_7850x7850px_050-6836-R8.png';
import argosyVistaVR from '../assets/images/UH_Packshot_VistaV-RLeftLeftReceiverP7Pewter_RGB7850x7850.jpg';
import argosyVistaV312 from '../assets/images/UH_Packshot_Advance72-312Left_LeftReceiverP7PewterActualSize-CMYK_050-6824-P7.png';
import argosyVistaVM from '../assets/images/UH_Packshot_Stride-V-M_Left-Hook-7850x7850px_050-6864-R8.png';
import argosyVistaVPR from '../assets/images/UH_Packshot_Advance72-PR_Left-Hook-7850x7850px_050-6830-P7.png';
import rextonReachSlim from '../assets/images/6e811e_929d9e323c1f4c0db4131ffc67359be6mv2.png';
import rextonReachLiIx from '../assets/images/filters_quality(40).png';
// Imports das imagens do Play PX
import playPx1 from '../assets/images/playpx/PRODUTO/Oticon_Play_PX_miniBTE_T_Right_C046CoolRed_LEDgreen_Hook_500pctSize_TIF.Png';
import playPx2 from '../assets/images/playpx/PRODUTO/Oticon_Play_PX_miniBTE_T_Right_C047CoolBlue_LEDgreen_Hook_500pctSize_TIF.Png';
import playPx3 from '../assets/images/playpx/PRODUTO/Oticon_Play_PX_miniBTE_T_Right_C048EmeraldGreen_LEDgreen_Hook_500pctSize_TIF.Png';
import playPx4 from '../assets/images/playpx/PRODUTO/Oticon_Play_PX_miniBTE_T_Right_C057PowerPink_LEDgreen_Hook_500pctSize_TIF.Png';
import playPx5 from '../assets/images/playpx/PRODUTO/Oticon_Play_PX_miniBTE_T_Right_C058Aquamarine_LEDgreen_Hook_500pctSize_TIF.Png';
import playPx6 from '../assets/images/playpx/PRODUTO/Oticon_Play_PX_miniBTE_T_Right_C079HearPink_LEDgreen_Hook_500pctSize_TIF.Png';
import playPx7 from '../assets/images/playpx/PRODUTO/Oticon_Play_PX_miniBTE_T_Right_C090ChromaBeige_LEDgreen_Hook_500pctSize_TIF.Png';
import playPx8 from '../assets/images/playpx/PRODUTO/Oticon_Play_PX_miniBTE_T_Right_C093ChestnutBrown_LEDgreen_Hook_500pctSize_TIF.Png';
import '../styles/liquid-glass-buttons.css';

const Aparelhos = () => {
  // Estado para controlar o carrossel do Play PX
  const [playPxImageIndex, setPlayPxImageIndex] = useState(0);

  // Array com todas as imagens do Play PX
  const playPxImages = [playPx1, playPx2, playPx3, playPx4, playPx5, playPx6, playPx7, playPx8];

  // Carrossel automático do Play PX
  useEffect(() => {
    const interval = setInterval(() => {
      setPlayPxImageIndex((prevIndex) =>
        prevIndex === playPxImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Muda a cada 2 segundos

    return () => clearInterval(interval);
  }, [playPxImages.length]);

  // Função para gerar slug a partir do nome do produto
  const generateSlug = (nome) => {
    return nome
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove acentos
      .replace(/[àáâãäå]/g, 'a')
      .replace(/[èéêë]/g, 'e')
      .replace(/[ìíîï]/g, 'i')
      .replace(/[òóôõö]/g, 'o')
      .replace(/[ùúûü]/g, 'u')
      .replace(/[ç]/g, 'c')
      .replace(/[ñ]/g, 'n')
      .replace(/['"]/g, '') // Remove aspas e apostrofes
      .replace(/[^a-z0-9]+/g, '-') // Substitui caracteres não alfanuméricos por hífen
      .replace(/^-+|-+$/g, ''); // Remove hífens do início e fim
  };

  // Mapeamento de rotas específicas para produtos que têm páginas dedicadas
  const routeMap = {
    'oticon-intent': '/aparelho/oticon-intent',
    'oticon-xceed': '/aparelho/oticon-xceed',
    'oticon-own': '/aparelho/oticon-own',
    'oticon-cross': '/aparelho/oticon-cross',
    'oticon-play-px': '/aparelho/oticon-play-px',
    'oticon-real': '/aparelho/oticon-real',
    'oticon-zircon': '/aparelho/oticon-zircon',
    'argosy-vista-v-up': '/aparelho/argosy-vista-v-up',
    'argosy-vista-v-r': '/aparelho/argosy-vista-v-r',
    'argosy-vista-v-312': '/aparelho/argosy-vista-v-312',
    'argosy-vista-v-m': '/aparelho/argosy-vista-v-m',
    'argosy-vista-v-pr': '/aparelho/argosy-vista-v-pr',
    'argosy-vista-b-intra': '/aparelho/argosy-vista-b-intra',
    'rexton-reach-slim': '/aparelho/rexton-reach-slim',
    'rexton-reach-li-ix': '/aparelho/rexton-reach-li-ix',
    'rexton-rugged-bli-a-prova-dagua': '/aparelho/rexton-rugged',
    'rexton-cross-do-reach-li-ix': '/aparelho/rexton-cros',
    'rexton-m-core-r': '/aparelho/rexton-m-core-r',
    'rexton-m-core-ix': '/aparelho/rexton-m-core-ix'
  };

  // Função para obter a rota do produto
  const getProductRoute = (nome) => {
    const slug = generateSlug(nome);
    return routeMap[slug] || `/aparelho/${slug}`;
  };

  // Dados dos aparelhos auditivos
  const aparelhos = [
    // Marca Oticon
    {
      id: 1,
      nome: "Oticon Intent",
      descricao: "Aparelho auditivo com tecnologia avançada e design moderno.",
      imagem: oticonIntent,
      categoria: "Oticon"
    },
    {
      id: 2,
      nome: "Oticon Xceed",
      descricao: "Solução potente para perdas auditivas severas com inteligência artificial e redução de ruído.",
      imagem: oticonXceed,
      categoria: "Oticon"
    },
    {
      id: 3,
      nome: "Oticon Own",
      descricao: "O aparelho auditivo que organiza os sons ao seu redor.",
      imagem: oticonOwn,
      categoria: "Oticon"
    },
    {
      id: 4,
      nome: "Oticon Cross",
      descricao: "Solução CROS para perda auditiva unilateral.",
      imagem: oticonCross,
      categoria: "Oticon"
    },
    {
      id: 5,
      nome: "Oticon Play PX",
      descricao: "Aparelho auditivo com conectividade e tecnologia de ponta.",
      imagem: oticonXceed,
      categoria: "Oticon"
    },
    // Marca Argosy
    {
      id: 6,
      nome: "Argosy Vista V UP",
      descricao: "Aparelho auditivo discreto com tecnologia avançada de processamento de som.",
      imagem: argosyVistaVUP,
      categoria: "Argosy"
    },
    {
      id: 7,
      nome: "Argosy Vista V R",
      descricao: "Modelo recarregável com bateria de longa duração.",
      imagem: argosyVistaVR,
      categoria: "Argosy"
    },
    {
      id: 8,
      nome: "Argosy Vista V 312",
      descricao: "Aparelho com pilha 312 e conectividade Bluetooth.",
      imagem: argosyVistaV312,
      categoria: "Argosy"
    },
    {
      id: 9,
      nome: "Argosy Vista V M",
      descricao: "Modelo médio com excelente qualidade sonora.",
      imagem: argosyVistaVM,
      categoria: "Argosy"
    },
    {
      id: 10,
      nome: "Argosy Vista V PR",
      descricao: "Aparelho auditivo com processamento de som avançado.",
      imagem: argosyVistaVPR,
      categoria: "Argosy"
    },
    {
      id: 11,
      nome: "Argosy Vista B Intra",
      descricao: "Modelo intra-auricular discreto e confortável.",
      imagem: argosyVistaV,
      categoria: "Argosy"
    },
    // Marca Rexton
    {
      id: 12,
      nome: "Rexton Reach Slim",
      descricao: "Aparelho auditivo fino e discreto com tecnologia moderna.",
      imagem: rextonReachSlim,
      categoria: "Rexton"
    },
    {
      id: 13,
      nome: "Rexton Reach Li ix",
      descricao: "Modelo com bateria de íon de lítio recarregável.",
      imagem: rextonReachLiIx,
      categoria: "Rexton"
    },
    {
      id: 14,
      nome: "Rexton Rugged Bli à prova d'água",
      descricao: "Aparelho resistente à água, ideal para atividades ao ar livre.",
      imagem: rextonRugged,
      categoria: "Rexton"
    },
    {
      id: 15,
      nome: "Rexton Cross",
      descricao: "Solução CROS com bateria recarregável de íon de lítio.",
      imagem: rextonStellar,
      categoria: "Rexton"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Background Animado Inspirado */}
      <section className="relative overflow-hidden min-h-[400px] lg:h-[400px] flex items-center">
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

        <div className="relative container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 pt-24 lg:pt-8 pb-0 lg:pb-0 h-full" style={{ zIndex: 10 }}>
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
              className="relative order-2 lg:order-last h-full flex items-end justify-center pt-8 lg:pt-0"
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
                  <div className="h-64 overflow-hidden bg-gray-50 relative">
                    {aparelho.id === 5 ? (
                      // Carrossel para Play PX
                      <div className="w-full h-full flex items-center justify-center" style={{ paddingRight: '120px', paddingTop: '45px' }}>
                        <img
                          src={playPxImages[playPxImageIndex]}
                          alt={`${aparelho.nome} - Cor ${playPxImageIndex + 1}`}
                          className="h-full w-auto object-contain transition-opacity duration-500"
                          style={{
                            imageRendering: 'auto',
                            backfaceVisibility: 'hidden',
                            transform: 'translateZ(0) scale(1.5)',
                            opacity: 1,
                            transformOrigin: 'center center'
                          }}
                        />
                      </div>
                    ) : (
                      // Imagem estática para outros aparelhos
                      <img
                        src={aparelho.imagem}
                        alt={aparelho.nome}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    )}
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
                          to={getProductRoute(aparelho.nome)}
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

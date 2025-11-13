import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import playPx1 from '../assets/images/playpx/PRODUTO/Oticon_Play_PX_miniBTE_T_Right_C046CoolRed_LEDgreen_Hook_500pctSize_TIF.Png';
import playPx2 from '../assets/images/playpx/PRODUTO/Oticon_Play_PX_miniBTE_T_Right_C047CoolBlue_LEDgreen_Hook_500pctSize_TIF.Png';
import playPx3 from '../assets/images/playpx/PRODUTO/Oticon_Play_PX_miniBTE_T_Right_C048EmeraldGreen_LEDgreen_Hook_500pctSize_TIF.Png';
import playPx4 from '../assets/images/playpx/PRODUTO/Oticon_Play_PX_miniBTE_T_Right_C057PowerPink_LEDgreen_Hook_500pctSize_TIF.Png';
import playPx5 from '../assets/images/playpx/PRODUTO/Oticon_Play_PX_miniBTE_T_Right_C058Aquamarine_LEDgreen_Hook_500pctSize_TIF.Png';
import playPx6 from '../assets/images/playpx/PRODUTO/Oticon_Play_PX_miniBTE_T_Right_C079HearPink_LEDgreen_Hook_500pctSize_TIF.Png';
import playPx7 from '../assets/images/playpx/PRODUTO/Oticon_Play_PX_miniBTE_T_Right_C090ChromaBeige_LEDgreen_Hook_500pctSize_TIF.Png';
import playPx8 from '../assets/images/playpx/PRODUTO/Oticon_Play_PX_miniBTE_T_Right_C093ChestnutBrown_LEDgreen_Hook_500pctSize_TIF.Png';
import oticonIntent from "../assets/images/Oticon Intent.Png";
import oticonXceed from "../assets/images/hearing-aids/aparelhos-auditivos-oticon-xceed.png.webp";
import oticonOwn from "../assets/images/hearing-aids/oticon-own250x250.jpg.webp";

const OticonPlayPX = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const playPxImages = [playPx1, playPx2, playPx3, playPx4, playPx5, playPx6, playPx7, playPx8];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === playPxImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    
    return () => clearInterval(interval);
  }, [playPxImages.length]);

  const aparelhos = [
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
    }
  ];

  const generateSlug = (nome) => {
    return nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/['"]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  };

  return (
    <div className="-mt-20">
      <section 
        className="py-16 md:py-20 relative overflow-hidden"
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
        <div className="absolute inset-0 bg-white/30" style={{ zIndex: 2 }}></div>
        
        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8" style={{ paddingTop: '50px' }}>
          <div className="text-center max-w-4xl mx-auto">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm w-fit mx-auto mb-6"
              data-aos="fade-up"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-acustika-purple to-acustika-teal rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-600" style={{ fontFamily: 'Karla, sans-serif' }}>Tecnologia de ponta</span>
            </div>
            
            <h1 
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
              style={{ 
                fontFamily: 'Karla, sans-serif',
                fontWeight: '700',
                lineHeight: '1.1'
              }}
            >
              Oticon Play PX
            </h1>
            
            <p 
              className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
              style={{ 
                fontFamily: 'Karla, sans-serif',
                fontWeight: '400',
                lineHeight: '1.6'
              }}
            >
              Aparelho auditivo com conectividade e tecnologia de ponta, desenvolvido para oferecer uma experiência auditiva superior com design moderno e discreto.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Karla, sans-serif', fontWeight: '700' }}
              data-aos="fade-up"
            >
              Principais Características
            </h2>
            <p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'Karla, sans-serif', fontWeight: '400' }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Tecnologias avançadas que tornam o Oticon Play PX uma escolha excepcional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-acustika-purple to-acustika-teal rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-brain text-white text-lg"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Karla, sans-serif' }}>
                Tecnologia BrainHearing™
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Karla, sans-serif' }}>
                Ajuda seu cérebro a entender e processar sons com mais facilidade, oferecendo melhor clareza de fala.
              </p>
            </div>

            <div 
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-acustika-purple to-acustika-teal rounded-full flex items-center justify-center mb-4">
                <i className="fab fa-bluetooth-b text-white text-lg"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Karla, sans-serif' }}>
                Conectividade Wireless
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Karla, sans-serif' }}>
                Se conecta sem fio com smartphones modernos. Ouça música, faça chamadas telefônicas e muito mais.
              </p>
            </div>

            <div 
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-acustika-purple to-acustika-teal rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-palette text-white text-lg"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Karla, sans-serif' }}>
                Múltiplas Cores
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Karla, sans-serif' }}>
                Disponível em diversas cores para combinar com seu estilo pessoal e preferências.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Karla, sans-serif', fontWeight: '700' }}
              data-aos="fade-up"
            >
              Especificações Técnicas
            </h2>
            <p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'Karla, sans-serif', fontWeight: '400' }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Detalhes técnicos que fazem a diferença na sua experiência auditiva
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg" data-aos="fade-right">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6" style={{ fontFamily: 'Karla, sans-serif' }}>
                Especificações
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600" style={{ fontFamily: 'Karla, sans-serif' }}>Tipo</span>
                  <span className="font-semibold text-gray-900" style={{ fontFamily: 'Karla, sans-serif' }}>Retro-Auricular</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600" style={{ fontFamily: 'Karla, sans-serif' }}>Conectividade</span>
                  <span className="font-semibold text-gray-900" style={{ fontFamily: 'Karla, sans-serif' }}>Bluetooth</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600" style={{ fontFamily: 'Karla, sans-serif' }}>Bateria</span>
                  <span className="font-semibold text-gray-900" style={{ fontFamily: 'Karla, sans-serif' }}>Recarregável</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600" style={{ fontFamily: 'Karla, sans-serif' }}>Cores Disponíveis</span>
                  <span className="font-semibold text-gray-900" style={{ fontFamily: 'Karla, sans-serif' }}>8 Cores</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg flex items-center justify-center relative overflow-hidden" data-aos="fade-left">
              <div className="text-center w-full">
                <div className="relative h-64 mb-4 flex items-center justify-center" style={{ paddingRight: '120px', paddingTop: '45px' }}>
                  <img 
                    src={playPxImages[currentImageIndex]} 
                    alt={`Oticon Play PX - Cor ${currentImageIndex + 1}`}
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
                <h4 className="text-xl font-semibold text-gray-900" style={{ fontFamily: 'Karla, sans-serif' }}>
                  Oticon Play PX
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Karla, sans-serif', fontWeight: '700' }}>
                Conheça outros aparelhos
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Karla, sans-serif' }}>
                Descubra mais opções da nossa linha de aparelhos auditivos
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-acustika-purple to-acustika-teal mx-auto rounded-full mt-6"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aparelhos.slice(0, 3).map((outroAparelho, index) => (
                <div 
                  key={outroAparelho.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group flex flex-col"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="h-48 overflow-hidden bg-gray-50">
                    <img 
                      src={outroAparelho.imagem} 
                      alt={outroAparelho.nome} 
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-acustika-purple to-acustika-teal rounded-full"></div>
                        <span className="text-sm font-medium text-gray-500" style={{ fontFamily: 'Karla, sans-serif' }}>
                          {outroAparelho.categoria}
                        </span>
                      </div>
                      
                      <h3 className="font-semibold text-gray-900 text-lg mb-3" style={{ fontFamily: 'Karla, sans-serif', fontWeight: '600' }}>
                        {outroAparelho.nome}
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Karla, sans-serif', fontWeight: '400' }}>
                        {outroAparelho.descricao}
                      </p>
                    </div>
                    
                    <div className="mt-4">
                      <Link 
                        to={`/aparelho/${generateSlug(outroAparelho.nome)}`}
                        className="w-full px-4 py-2 bg-gradient-to-r from-acustika-purple to-acustika-teal text-white font-medium rounded-lg hover:from-acustika-purple/90 hover:to-acustika-teal/90 transition-all duration-300 text-center block"
                        style={{ fontFamily: 'Karla, sans-serif' }}
                      >
                        Saiba Mais
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link 
                to="/aparelhos"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300"
                style={{ fontFamily: 'Karla, sans-serif' }}
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <i className="fas fa-arrow-left"></i>
                Ver Todos os Aparelhos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section 
        className="py-20 md:py-24 relative overflow-hidden"
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
        <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 relative" style={{ zIndex: 10 }}>
          <div 
            className="rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl backdrop-blur-sm relative moving-gradient"
            data-aos="zoom-in"
            style={{ border: '1px solid rgba(255, 255, 255, 0.2)', zIndex: 2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Noto Serif, serif', fontWeight: '500', fontSize: '48px', lineHeight: '1.2' }}>
              Pronto para experimentar o Oticon Play PX?
            </h2>
            <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto" style={{ fontFamily: 'Karla, sans-serif', fontWeight: '400', fontSize: '20px', lineHeight: '1.4' }}>
              Agende um teste gratuito e descubra como este aparelho pode transformar sua experiência auditiva.
            </p>
            <div className="flex justify-center">
              <div className="bth-white">
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="elementor-button-white group">
                  <span className="elementor-button-text">Agendar teste gratuito</span>
                  <span className="elementor-button-icon group-hover:rotate-0 transition-all duration-500" style={{ transform: 'rotate(45deg)' }}>
                    <i className="fas fa-calendar-alt text-base transition-all duration-500 group-hover:opacity-0 group-hover:scale-0"></i>
                    <i className="fab fa-whatsapp text-base absolute top-1/2 left-1/2 transition-all duration-500 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100" style={{ transform: 'translate(-50%, -50%) rotate(-45deg)' }}></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OticonPlayPX;


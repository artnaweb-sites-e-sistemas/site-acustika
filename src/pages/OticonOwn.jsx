import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import oticonOwn from "../assets/images/hearing-aids/oticon-own.jpg.webp";
import argosyVistaV from "../assets/images/hearing-aids/argosyvista-V.png";
import oticonXceed from "../assets/images/hearing-aids/aparelhos-auditivos-oticon-xceed.png.webp";
import rextonMCoreR from "../assets/images/hearing-aids/rexton-McoreR.jpg.webp";

const OticonOwn = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <div className="-mt-20">
      {/* Hero Section */}
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
        {/* Partículas animadas */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(80)].map((_, i) => (
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
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-acustika-purple/20 to-acustika-teal/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-r from-acustika-teal/20 to-acustika-purple/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-acustika-purple/15 to-acustika-teal/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 right-10 w-18 h-18 bg-gradient-to-r from-acustika-teal/15 to-acustika-purple/15 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>

        {/* Padrões geométricos */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-acustika-purple/10 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-acustika-teal/10 rotate-12 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>

        {/* Overlay sutil */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8" style={{ paddingTop: '50px' }}>
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm w-fit mx-auto mb-6"
              data-aos="fade-up"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-acustika-purple to-acustika-teal rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-600" style={{ fontFamily: 'Karla, sans-serif' }}>
                Tecnologia de ponta
              </span>
            </div>

            {/* Título */}
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
              style={{ fontFamily: 'Karla, sans-serif', fontWeight: '700', lineHeight: '1.1' }}
            >
              Oticon Own
            </h1>

            {/* Subtítulo */}
            <p 
              className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
              style={{ fontFamily: 'Karla, sans-serif', fontWeight: '400', lineHeight: '1.6' }}
            >
              Aparelho auditivo Intra-Canal acomodado discretamente no canal auditivo com tecnologia sem fio Bluetooth® opcional e bobina de indução embutida.
            </p>
          </div>
        </div>
      </section>

      {/* Seção de Características Principais */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ 
                fontFamily: 'Karla, sans-serif',
                fontWeight: '700'
              }}
              data-aos="fade-up"
            >
              Principais Características
            </h2>
            <p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              style={{ 
                fontFamily: 'Karla, sans-serif',
                fontWeight: '400'
              }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Descubra as tecnologias avançadas que tornam o Oticon Own uma escolha excepcional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Característica 1 */}
            <div 
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-acustika-purple to-acustika-teal rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-brain text-white text-lg"></i>
              </div>
              <h3 
                className="text-xl font-semibold text-gray-900 mb-3"
                style={{ fontFamily: 'Karla, sans-serif' }}
              >
                Recursos inteligentes
              </h3>
              <p 
                className="text-gray-600"
                style={{ fontFamily: 'Karla, sans-serif' }}
              >
                Depois de escanear e analisar a cena sonora 500 vezes por segundo para entender sua complexidade, o aparelho auditivo pode organizar os sons ao seu redor para criar contraste e equilíbrio entre eles.
              </p>
            </div>

            {/* Característica 2 */}
            <div 
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-acustika-purple to-acustika-teal rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-globe text-white text-lg"></i>
              </div>
              <h3 
                className="text-xl font-semibold text-gray-900 mb-3"
                style={{ fontFamily: 'Karla, sans-serif' }}
              >
                Sons do mundo real
              </h3>
              <p 
                className="text-gray-600"
                style={{ fontFamily: 'Karla, sans-serif' }}
              >
                O aparelho auditivo é treinado com cenas sonoras do mundo real, portanto é capaz de equilibrar a cena sonora ao seu redor.
              </p>
            </div>

            {/* Característica 3 */}
            <div 
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-acustika-purple to-acustika-teal rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-comments text-white text-lg"></i>
              </div>
              <h3 
                className="text-xl font-semibold text-gray-900 mb-3"
                style={{ fontFamily: 'Karla, sans-serif' }}
              >
                Melhor compreensão de fala
              </h3>
              <p 
                className="text-gray-600"
                style={{ fontFamily: 'Karla, sans-serif' }}
              >
                Melhore suas conversas com amigos e familiares. Esses aparelhos auditivos aprimoram a compreensão da fala em ambientes ruidosos e silenciosos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Especificações Técnicas */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ 
                fontFamily: 'Karla, sans-serif',
                fontWeight: '700'
              }}
              data-aos="fade-up"
            >
              Especificações Técnicas
            </h2>
            <p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              style={{ 
                fontFamily: 'Karla, sans-serif',
                fontWeight: '400'
              }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Detalhes técnicos que fazem a diferença na sua experiência auditiva
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Especificações */}
            <div 
              className="bg-white rounded-2xl p-8 shadow-lg"
              data-aos="fade-right"
            >
              <h3 
                className="text-2xl font-semibold text-gray-900 mb-6"
                style={{ fontFamily: 'Karla, sans-serif' }}
              >
                Especificações
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600" style={{ fontFamily: 'Karla, sans-serif' }}>Tipo</span>
                  <span className="font-semibold text-gray-900" style={{ fontFamily: 'Karla, sans-serif' }}>Intra-Canal</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600" style={{ fontFamily: 'Karla, sans-serif' }}>Conectividade</span>
                  <span className="font-semibold text-gray-900" style={{ fontFamily: 'Karla, sans-serif' }}>Bluetooth® Opcional</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600" style={{ fontFamily: 'Karla, sans-serif' }}>Bobina de Indução</span>
                  <span className="font-semibold text-gray-900" style={{ fontFamily: 'Karla, sans-serif' }}>Embutida</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600" style={{ fontFamily: 'Karla, sans-serif' }}>Análise Sonora</span>
                  <span className="font-semibold text-gray-900" style={{ fontFamily: 'Karla, sans-serif' }}>500x por segundo</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600" style={{ fontFamily: 'Karla, sans-serif' }}>Programa Musical</span>
                  <span className="font-semibold text-gray-900" style={{ fontFamily: 'Karla, sans-serif' }}>Oticon MyMusic</span>
                </div>
              </div>
            </div>

            {/* Imagem do Produto */}
            <div 
              className="bg-white rounded-2xl p-8 shadow-lg flex items-center justify-center"
              data-aos="fade-left"
            >
              <div className="text-center">
                <img 
                  src={oticonOwn} 
                  alt="Oticon Own"
                  className="w-full max-w-sm mx-auto mb-4"
                />
                <h4 
                  className="text-xl font-semibold text-gray-900"
                  style={{ fontFamily: 'Karla, sans-serif' }}
                >
                  Oticon Own
                </h4>
                <p 
                  className="text-gray-600 mt-2"
                  style={{ fontFamily: 'Karla, sans-serif' }}
                >
                  Intra-Canal discreto
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conheça outros aparelhos */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: 'Karla, sans-serif', fontWeight: '700' }}
              >
                Conheça outros aparelhos
              </h2>
              <p 
                className="text-lg text-gray-600 max-w-2xl mx-auto"
                style={{ fontFamily: 'Karla, sans-serif', fontWeight: '400' }}
              >
                Explore nossa linha completa de aparelhos auditivos
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Argosy Vista V */}
              <div 
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="h-48 flex items-center justify-center mb-4">
                  <img src={argosyVistaV} alt="Argosy Vista V" className="max-h-full object-contain" />
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Karla, sans-serif' }}>Argosy Vista V</h3>
                  <p className="text-gray-600 mb-4 flex-1" style={{ fontFamily: 'Karla, sans-serif' }}>
                    Aparelho auditivo discreto com tecnologia avançada de processamento de som e conectividade Bluetooth.
                  </p>
                  <div className="mt-auto">
                    <Link to="/aparelho/argosy-vista-v"
                      className="w-full px-6 py-3 text-white font-semibold rounded-xl shadow-lg hover:bg-gray-800 transition-all duration-300 block text-center"
                      style={{
                        backgroundColor: '#7e4078',
                        fontFamily: 'Karla, sans-serif'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#6a3a6a';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#7e4078';
                      }}
                    >
                      Saiba Mais
                    </Link>
                  </div>
                </div>
              </div>

              {/* Oticon Xceed */}
              <div 
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="h-48 flex items-center justify-center mb-4">
                  <img src={oticonXceed} alt="Oticon Xceed" className="max-h-full object-contain" />
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Karla, sans-serif' }}>Oticon Xceed</h3>
                  <p className="text-gray-600 mb-4 flex-1" style={{ fontFamily: 'Karla, sans-serif' }}>
                    Aparelho auditivo premium com tecnologia BrainHearing™ e conectividade wireless avançada.
                  </p>
                  <div className="mt-auto">
                    <Link to="/aparelho/oticon-xceed"
                      className="w-full px-6 py-3 text-white font-semibold rounded-xl shadow-lg hover:bg-gray-800 transition-all duration-300 block text-center"
                      style={{
                        backgroundColor: '#7e4078',
                        fontFamily: 'Karla, sans-serif'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#6a3a6a';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#7e4078';
                      }}
                    >
                      Saiba Mais
                    </Link>
                  </div>
                </div>
              </div>

              {/* Rexton M-Core R */}
              <div 
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="h-48 flex items-center justify-center mb-4">
                  <img src={rextonMCoreR} alt="Rexton M-Core R" className="max-h-full object-contain" />
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Karla, sans-serif' }}>Rexton M-Core R</h3>
                  <p className="text-gray-600 mb-4 flex-1" style={{ fontFamily: 'Karla, sans-serif' }}>
                    Nosso modelo mais popular com tecnologia Motion Core que se adapta automaticamente ao ambiente.
                  </p>
                  <div className="mt-auto">
                    <Link to="/aparelho/rexton-m-core-r"
                      className="w-full px-6 py-3 text-white font-semibold rounded-xl shadow-lg hover:bg-gray-800 transition-all duration-300 block text-center"
                      style={{
                        backgroundColor: '#7e4078',
                        fontFamily: 'Karla, sans-serif'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#6a3a6a';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#7e4078';
                      }}
                    >
                      Saiba Mais
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Botão Ver Todos */}
            <div className="text-center mt-12">
              <Link to="/aparelhos"
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

      {/* Pronto para experimentar? */}
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
          {/* Elementos decorativos animados */}
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-white/20 to-white/10 rounded-full blur-3xl animate-pulse" style={{ transform: 'translate(-50%, -50%)', animationDuration: '3s', zIndex: 1 }}></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-acustika-purple/30 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s', zIndex: 1 }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-acustika-teal/25 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s', zIndex: 1 }}></div>
          
          {/* Card centralizado */}
          <div 
            className="rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl backdrop-blur-sm relative moving-gradient"
            data-aos="zoom-in"
            style={{ border: '1px solid rgba(255, 255, 255, 0.2)', zIndex: 2 }}
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
              Pronto para experimentar o Oticon Own?
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
              Agende um teste gratuito e descubra como este aparelho pode transformar sua experiência auditiva. Estamos prontos para receber você.
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

export default OticonOwn;


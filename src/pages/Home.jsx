import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen section-bg">
      {/* Hero Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="text-center max-w-5xl mx-auto">
            <h1 
              className="font-bold text-gray-800 mb-8 leading-tight"
              data-aos="fade-up"
            >
              Bem-vindo à <span className="text-gradient">Acústika</span>
            </h1>
            <p 
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Sua solução completa em aparelhos auditivos, acessórios e serviços especializados.
              Cuidamos da sua audição com tecnologia de ponta e atendimento personalizado.
            </p>
            <div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <button className="btn-primary text-lg px-10 py-5">
                Conheça Nossos Produtos
              </button>
              <button className="btn-secondary text-lg px-10 py-5">
                Agende uma Consulta
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-20">
            <h2 
              className="font-bold text-gray-800 mb-6"
              data-aos="fade-up"
            >
              Por que escolher a <span className="text-gradient">Acústika</span>?
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Oferecemos soluções completas em saúde auditiva com tecnologia de ponta e atendimento especializado.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div 
              className="card-modern p-8 text-center group"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Aparelhos Auditivos</h3>
              <p className="text-gray-600 leading-relaxed">Tecnologia avançada para melhorar sua qualidade de vida auditiva com os melhores equipamentos do mercado.</p>
            </div>
            
            <div 
              className="card-modern p-8 text-center group"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-20 h-20 gradient-accent rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Serviços Especializados</h3>
              <p className="text-gray-600 leading-relaxed">Avaliação, manutenção e suporte técnico especializado com profissionais qualificados.</p>
            </div>
            
            <div 
              className="card-modern p-8 text-center group"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="w-20 h-20 gradient-secondary rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Acessórios</h3>
              <p className="text-gray-600 leading-relaxed">Pilhas, estojos e acessórios para seus aparelhos auditivos com qualidade garantida.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
          <div 
            className="gradient-cta rounded-3xl p-12 md:p-16 text-center text-white"
            data-aos="zoom-in"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para melhorar sua audição?
            </h2>
            <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto">
              Agende uma consulta gratuita e descubra como podemos ajudar você a ouvir melhor.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-blue-600 px-10 py-5 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Agendar Consulta Gratuita
              </button>
              <button className="border-2 border-white text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                Falar com Especialista
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import React from 'react';

const Aparelhos = () => {
  const aparelhos = [
    {
      id: 1,
      nome: "Aparelho Intra-Auricular",
      descricao: "Discreto e confortável, ideal para perdas auditivas leves a moderadas.",
      preco: "A partir de R$ 1.200",
      imagem: "🔊",
      features: ["Discreto", "Confortável", "Tecnologia Digital"]
    },
    {
      id: 2,
      nome: "Aparelho Retro-Auricular",
      descricao: "Potente e versátil, adequado para perdas auditivas moderadas a severas.",
      preco: "A partir de R$ 1.800",
      imagem: "🎧",
      features: ["Alta Potência", "Versátil", "Durabilidade"]
    },
    {
      id: 3,
      nome: "Aparelho Recarregável",
      descricao: "Tecnologia moderna com bateria recarregável, sem necessidade de troca de pilhas.",
      preco: "A partir de R$ 2.500",
      imagem: "🔋",
      features: ["Recarregável", "Econômico", "Ecológico"]
    },
    {
      id: 4,
      nome: "Aparelho com Bluetooth",
      descricao: "Conectividade wireless para telefone, TV e outros dispositivos.",
      preco: "A partir de R$ 3.000",
      imagem: "📱",
      features: ["Bluetooth", "Conectividade", "Multifuncional"]
    }
  ];

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
              <span className="text-gradient">Aparelhos Auditivos</span>
            </h1>
            <p 
              className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Descubra nossa linha completa de aparelhos auditivos com tecnologia de ponta 
              e design moderno para atender suas necessidades específicas.
            </p>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {aparelhos.map((aparelho, index) => (
              <div 
                key={aparelho.id} 
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-8 group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-8xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                  {aparelho.imagem}
                </div>
                <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                  {aparelho.nome}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {aparelho.descricao}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Características:</h4>
                  <div className="flex flex-wrap gap-2">
                    {aparelho.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gradient">
                    {aparelho.preco}
                  </span>
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Saiba Mais
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-20">
            <h2 
              className="font-bold text-gray-800 mb-6"
              data-aos="fade-up"
            >
              Por que escolher nossos <span className="text-gradient">aparelhos</span>?
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Oferecemos produtos de alta qualidade com tecnologia de ponta e suporte especializado.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div 
              className="text-center group"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Qualidade Garantida</h3>
              <p className="text-gray-600 leading-relaxed">Produtos de marcas reconhecidas mundialmente com certificações de qualidade.</p>
            </div>
            
            <div 
              className="text-center group"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Tecnologia Avançada</h3>
              <p className="text-gray-600 leading-relaxed">Recursos modernos como Bluetooth, redução de ruído e conectividade wireless.</p>
            </div>
            
            <div 
              className="text-center group"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Suporte Especializado</h3>
              <p className="text-gray-600 leading-relaxed">Acompanhamento profissional completo com fonoaudiólogos especializados.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
          <div 
            className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-2xl rounded-3xl p-12 md:p-16 text-center text-white"
            data-aos="zoom-in"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Encontrou o aparelho ideal?
            </h2>
            <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto">
              Agende uma avaliação gratuita e descubra qual aparelho auditivo é perfeito para suas necessidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-blue-600 px-10 py-5 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Agendar Avaliação Gratuita
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

export default Aparelhos;

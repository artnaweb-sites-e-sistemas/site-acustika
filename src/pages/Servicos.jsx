import React from 'react';

const Servicos = () => {
  const servicos = [
    {
      id: 1,
      nome: "Avaliação Auditiva",
      descricao: "Exame completo para identificar problemas auditivos e determinar o melhor tratamento.",
      duracao: "45-60 min",
      preco: "R$ 150,00",
      icone: "👂"
    },
    {
      id: 2,
      nome: "Ajuste e Calibração",
      descricao: "Ajuste fino dos aparelhos auditivos para otimizar o desempenho.",
      duracao: "30-45 min",
      preco: "R$ 80,00",
      icone: "⚙️"
    },
    {
      id: 3,
      nome: "Manutenção Preventiva",
      descricao: "Limpeza, verificação e manutenção preventiva dos aparelhos.",
      duracao: "20-30 min",
      preco: "R$ 60,00",
      icone: "🔧"
    },
    {
      id: 4,
      nome: "Reparo e Conserto",
      descricao: "Reparo de aparelhos com problemas técnicos ou danos.",
      duracao: "Variável",
      preco: "Sob consulta",
      icone: "🛠️"
    },
    {
      id: 5,
      nome: "Consultoria em Acessibilidade",
      descricao: "Orientação sobre adaptações e tecnologias assistivas.",
      duracao: "60-90 min",
      preco: "R$ 200,00",
      icone: "♿"
    },
    {
      id: 6,
      nome: "Acompanhamento Fonoaudiológico",
      descricao: "Sessões de reabilitação auditiva e treinamento.",
      duracao: "45-60 min",
      preco: "R$ 120,00",
      icone: "🗣️"
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
              Nossos <span className="text-gradient">Serviços</span>
            </h1>
            <p 
              className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Oferecemos uma gama completa de serviços especializados para cuidar da sua audição 
              com qualidade e profissionalismo.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicos.map((servico, index) => (
              <div 
                key={servico.id} 
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-8 text-center group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {servico.icone}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {servico.nome}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {servico.descricao}
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-medium">Duração:</span>
                    <span className="font-semibold text-gray-800">{servico.duracao}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-medium">Preço:</span>
                    <span className="text-xl font-bold text-gradient">{servico.preco}</span>
                  </div>
                </div>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Agendar
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-20">
            <h2 
              className="font-bold text-gray-800 mb-6"
              data-aos="fade-up"
            >
              Processo de <span className="text-gradient">Atendimento</span>
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Nosso processo estruturado garante o melhor atendimento e resultados para sua saúde auditiva.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div 
              className="text-center group"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Agendamento</h3>
              <p className="text-gray-600 leading-relaxed">Agende sua consulta online ou por telefone de forma rápida e fácil.</p>
            </div>
            
            <div 
              className="text-center group"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Avaliação</h3>
              <p className="text-gray-600 leading-relaxed">Exame completo e diagnóstico preciso com equipamentos modernos.</p>
            </div>
            
            <div 
              className="text-center group"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Tratamento</h3>
              <p className="text-gray-600 leading-relaxed">Solução personalizada para suas necessidades específicas.</p>
            </div>
            
            <div 
              className="text-center group"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Acompanhamento</h3>
              <p className="text-gray-600 leading-relaxed">Suporte contínuo e manutenção para garantir os melhores resultados.</p>
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
              Agende sua Consulta Hoje
            </h2>
            <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto">
              Nossa equipe de especialistas está pronta para cuidar da sua audição. 
              Entre em contato e agende sua avaliação.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-blue-600 px-10 py-5 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Agendar Online
              </button>
              <button className="border-2 border-white text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                Ligar Agora
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicos;

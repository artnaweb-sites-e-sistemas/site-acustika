import React from 'react';

const Sobre = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Sobre a Acústika
          </h1>
          
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-600 mb-6">
              A Acústika é uma empresa especializada em soluções auditivas, dedicada a melhorar 
              a qualidade de vida das pessoas através de tecnologia avançada e atendimento 
              personalizado.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nossa Missão</h2>
            <p className="text-gray-600 mb-6">
              Proporcionar soluções auditivas de alta qualidade, utilizando tecnologia de ponta 
              e oferecendo um atendimento humanizado e especializado para cada cliente.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nossa Visão</h2>
            <p className="text-gray-600 mb-6">
              Ser referência em soluções auditivas, reconhecida pela excelência no atendimento 
              e pela qualidade dos produtos e serviços oferecidos.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nossos Valores</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Compromisso com a qualidade e excelência</li>
              <li>Atendimento humanizado e personalizado</li>
              <li>Inovação e tecnologia de ponta</li>
              <li>Ética e transparência</li>
              <li>Responsabilidade social</li>
            </ul>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                Experiência e Especialização
              </h3>
              <p className="text-blue-700">
                Com anos de experiência no mercado, nossa equipe de fonoaudiólogos e técnicos 
                especializados está preparada para oferecer o melhor atendimento e as melhores 
                soluções para suas necessidades auditivas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;

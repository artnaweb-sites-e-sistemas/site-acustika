import React from 'react';

const Acessorios = () => {
  const acessorios = [
    {
      id: 1,
      nome: "Pilhas para Aparelhos",
      descricao: "Pilhas de longa duração para todos os tipos de aparelhos auditivos.",
      preco: "R$ 15,90",
      imagem: "🔋"
    },
    {
      id: 2,
      nome: "Estojos de Proteção",
      descricao: "Estojos resistentes para proteger e transportar seus aparelhos.",
      preco: "R$ 45,00",
      imagem: "💼"
    },
    {
      id: 3,
      nome: "Kit de Limpeza",
      descricao: "Kit completo para limpeza e manutenção dos aparelhos auditivos.",
      preco: "R$ 35,00",
      imagem: "🧽"
    },
    {
      id: 4,
      nome: "Cordões de Segurança",
      descricao: "Cordões para evitar perda dos aparelhos durante atividades.",
      preco: "R$ 25,00",
      imagem: "🔗"
    },
    {
      id: 5,
      nome: "Desumidificadores",
      descricao: "Desumidificadores para manter os aparelhos secos e funcionando.",
      preco: "R$ 85,00",
      imagem: "💧"
    },
    {
      id: 6,
      nome: "Controles Remotos",
      descricao: "Controles remotos para ajustar volume e configurações.",
      preco: "R$ 120,00",
      imagem: "📱"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Acessórios para Aparelhos Auditivos
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Encontre todos os acessórios necessários para manter seus aparelhos auditivos 
            funcionando perfeitamente e protegidos.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {acessorios.map((acessorio) => (
            <div key={acessorio.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="text-5xl mb-4 text-center">{acessorio.imagem}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {acessorio.nome}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {acessorio.descricao}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-blue-600">
                    {acessorio.preco}
                  </span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Dicas de Manutenção
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Cuidados Diários
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Limpe os aparelhos diariamente com pano seco</li>
                <li>• Remova a cera regularmente</li>
                <li>• Mantenha os aparelhos em local seco</li>
                <li>• Troque as pilhas quando necessário</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Manutenção Preventiva
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Use desumidificadores regularmente</li>
                <li>• Evite contato com água</li>
                <li>• Guarde em estojo apropriado</li>
                <li>• Faça revisões periódicas</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-blue-50 rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">
            Precisa de Ajuda?
          </h3>
          <p className="text-blue-700 mb-4">
            Nossa equipe está pronta para ajudar você a escolher os melhores acessórios 
            para seus aparelhos auditivos.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Fale Conosco
          </button>
        </div>
      </div>
    </div>
  );
};

export default Acessorios;

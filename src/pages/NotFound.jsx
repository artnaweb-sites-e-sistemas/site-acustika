import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  useEffect(() => {
    document.title = 'Página não encontrada | Acústika';
  }, []);

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 py-24 bg-gradient-to-br from-[#f7f0f7] via-white to-[#e8f5f5]">
      <div className="text-center max-w-lg">
        <p className="text-7xl font-bold text-[#64a0a0] mb-4">404</p>
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Página não encontrada
        </h1>
        <p className="text-gray-600 mb-8">
          O endereço que você acessou não existe ou foi movido.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 rounded-full text-white font-medium transition-opacity hover:opacity-90"
          style={{ background: 'linear-gradient(135deg, #64a0a0, #7a4478)' }}
        >
          Voltar para a Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;

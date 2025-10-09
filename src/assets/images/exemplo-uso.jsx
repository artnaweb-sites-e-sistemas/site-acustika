// EXEMPLO DE COMO USAR AS IMAGENS NA HOME PAGE
// Este arquivo é apenas para referência - pode ser deletado após implementação

import React from 'react';

// Importações das imagens (ajuste os nomes conforme suas imagens)
import heroImage from './hero/hero-main.jpg';
import teamPhoto1 from './team/fonoaudiologa-1.jpg';
import teamPhoto2 from './team/fonoaudiologa-2.jpg';
import teamPhoto3 from './team/fonoaudiologa-3.jpg';
import donaRitaPhoto from './testimonials/dona-rita.jpg';
import marlonPhoto from './testimonials/marlon.jpg';
import donaOdetePhoto from './testimonials/dona-odete.jpg';
import spUnitPhoto from './units/sao-paulo-ipiranga.jpg';
import florianopolisUnitPhoto from './units/florianopolis-rio-tavares.jpg';
import saoJoseUnitPhoto from './units/sao-jose-kobrasol.jpg';

const ExemploUsoImagens = () => {
  return (
    <div>
      {/* HERO SECTION - Substituir o placeholder atual */}
      <section className="hero-section">
        <div className="hero-image">
          <img 
            src={heroImage} 
            alt="Fonoaudióloga atendendo paciente com aparelho auditivo" 
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </section>

      {/* TEAM SECTION - Substituir os placeholders */}
      <section className="team-section">
        <div className="team-grid">
          <div className="team-member">
            <img 
              src={teamPhoto1} 
              alt="Nome do Profissional - Fonoaudióloga" 
              className="w-32 h-32 rounded-full object-cover"
            />
            <h3>Nome do Profissional</h3>
            <p>Fonoaudióloga</p>
          </div>
          {/* Repetir para outros membros */}
        </div>
      </section>

      {/* TESTIMONIALS SECTION - Adicionar fotos reais */}
      <section className="testimonials-section">
        <div className="testimonial-card">
          <img 
            src={donaRitaPhoto} 
            alt="Dona Rita" 
            className="w-12 h-12 rounded-full object-cover"
          />
          <blockquote>"Os aparelhos comprados na Acustika..."</blockquote>
          <cite>Dona Rita</cite>
        </div>
        {/* Repetir para outros depoimentos */}
      </section>

      {/* UNITS SECTION - Adicionar fotos das unidades */}
      <section className="units-section">
        <div className="unit-card">
          <img 
            src={spUnitPhoto} 
            alt="Unidade São Paulo - Ipiranga" 
            className="w-full h-48 object-cover rounded-lg"
          />
          <h3>São Paulo – SP – Ipiranga</h3>
          {/* Resto do conteúdo */}
        </div>
        {/* Repetir para outras unidades */}
      </section>
    </div>
  );
};

export default ExemploUsoImagens;

/* 
INSTRUÇÕES PARA IMPLEMENTAÇÃO:

1. Adicione suas imagens nas pastas correspondentes
2. Importe as imagens no topo do arquivo Home.jsx
3. Substitua os placeholders pelos componentes <img> com as imagens reais
4. Ajuste as classes CSS conforme necessário
5. Teste a responsividade em diferentes tamanhos de tela

EXEMPLO DE IMPORTAÇÃO NO HOME.JSX:
import heroImage from '../assets/images/hero/hero-main.jpg';
import teamPhoto1 from '../assets/images/team/fonoaudiologa-1.jpg';
// ... outras importações

EXEMPLO DE SUBSTITUIÇÃO NO JSX:
// Ao invés de:
<div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mx-auto mb-6 flex items-center justify-center">
  <svg>...</svg>
</div>

// Use:
<img 
  src={teamPhoto1} 
  alt="Nome do Profissional" 
  className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
/>
*/


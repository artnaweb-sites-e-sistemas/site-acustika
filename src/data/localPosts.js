// Posts locais que complementam os posts do WordPress
// Estes posts aparecem junto com os posts do WordPress no blog

import oticonOwnImage from '../assets/images/hearing-aids/oticon-own250x250.jpg.webp';

export const localPosts = [
  {
    id: 'local-oticon-own',
    title: 'Oticon Own: Tecnologia Avançada para Sua Audição',
    excerpt: '<p>Descubra o Oticon Own, um aparelho auditivo com tecnologia de ponta que oferece som natural e conectividade inteligente para melhorar sua qualidade de vida.</p>',
    content: `
      <div style="font-family: 'Karla', sans-serif; line-height: 1.7; color: #374151;">
        <h2 style="font-family: 'Noto Serif', serif; color: #1f2937; margin-top: 2rem; margin-bottom: 1rem;">Oticon Own: Revolução em Aparelhos Auditivos</h2>
        
        <p style="margin-bottom: 1.5rem; font-size: 1.125rem;">
          O <strong>Oticon Own</strong> representa o que há de mais moderno em tecnologia auditiva. Desenvolvido com foco na experiência natural de audição, este aparelho auditivo combina design discreto com funcionalidades avançadas.
        </p>

        <h3 style="font-family: 'Noto Serif', serif; color: #7e4078; margin-top: 2rem; margin-bottom: 1rem;">Características Principais</h3>
        
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
          <li style="margin-bottom: 0.75rem;"><strong>Tecnologia Deep Neural Network:</strong> Processamento de som baseado em inteligência artificial para uma experiência auditiva mais natural</li>
          <li style="margin-bottom: 0.75rem;"><strong>Conectividade Bluetooth:</strong> Conecte-se diretamente ao seu smartphone para chamadas, música e muito mais</li>
          <li style="margin-bottom: 0.75rem;"><strong>Design Discreto:</strong> Tamanho compacto e cores que se adaptam à sua pele</li>
          <li style="margin-bottom: 0.75rem;"><strong>Bateria Recarregável:</strong> Até 24 horas de uso contínuo com uma única carga</li>
          <li style="margin-bottom: 0.75rem;"><strong>Resistente à Água:</strong> Proteção IP68 para uso em diferentes ambientes</li>
        </ul>

        <h3 style="font-family: 'Noto Serif', serif; color: #7e4078; margin-top: 2rem; margin-bottom: 1rem;">Benefícios para o Usuário</h3>
        
        <p style="margin-bottom: 1.5rem; font-size: 1.125rem;">
          O Oticon Own foi desenvolvido pensando em proporcionar uma experiência auditiva natural e confortável. Com sua tecnologia avançada, você pode:
        </p>

        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
          <li style="margin-bottom: 0.75rem;">Ouvir com mais clareza em ambientes ruidosos</li>
          <li style="margin-bottom: 0.75rem;">Participar de conversas com mais confiança</li>
          <li style="margin-bottom: 0.75rem;">Aproveitar música e chamadas diretamente no aparelho</li>
          <li style="margin-bottom: 0.75rem;">Manter-se conectado com o mundo ao seu redor</li>
        </ul>

        <h3 style="font-family: 'Noto Serif', serif; color: #7e4078; margin-top: 2rem; margin-bottom: 1rem;">Material Descritivo Completo</h3>
        
        <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 0.5rem; padding: 1.5rem; margin: 2rem 0;">
          <p style="margin-bottom: 1rem; font-size: 1.125rem;">
            Para informações técnicas detalhadas, especificações completas e guia de uso do Oticon Own, consulte o material descritivo oficial abaixo:
          </p>
          <iframe 
            src="/oticon-own-material.pdf" 
            width="100%" 
            height="600px" 
            style="border: none; border-radius: 0.375rem;"
            title="Material Descritivo Oticon Own"
          >
            <p style="margin-top: 1rem;">
              Seu navegador não suporta visualização de PDF. 
              <a 
                href="/oticon-own-material.pdf" 
                download
                style="color: #7e4078; text-decoration: underline;"
              >
                Clique aqui para baixar o PDF
              </a>
            </p>
          </iframe>
        </div>

        <h3 style="font-family: 'Noto Serif', serif; color: #7e4078; margin-top: 2rem; margin-bottom: 1rem;">Por Que Escolher o Oticon Own?</h3>
        
        <p style="margin-bottom: 1.5rem; font-size: 1.125rem;">
          Na Acustika, acreditamos que cada pessoa merece uma solução auditiva personalizada. O Oticon Own é ideal para quem busca:
        </p>

        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
          <li style="margin-bottom: 0.75rem;">Tecnologia de última geração</li>
          <li style="margin-bottom: 0.75rem;">Design moderno e discreto</li>
          <li style="margin-bottom: 0.75rem;">Facilidade de uso</li>
          <li style="margin-bottom: 0.75rem;">Conectividade com dispositivos modernos</li>
        </ul>

        <div style="background: linear-gradient(135deg, #7e4078 0%, #64a0a0 100%); color: white; padding: 2rem; border-radius: 0.5rem; margin: 2rem 0; text-align: center;">
          <h3 style="font-family: 'Noto Serif', serif; margin-bottom: 1rem; font-size: 1.5rem;">Quer Saber Mais?</h3>
          <p style="margin-bottom: 1.5rem; font-size: 1.125rem;">
            Agende uma consulta gratuita e descubra se o Oticon Own é a solução ideal para você.
          </p>
          <a 
            href="https://wa.me/554891287927" 
            target="_blank" 
            rel="noopener noreferrer"
            style="display: inline-block; background: white; color: #7e4078; padding: 0.75rem 2rem; border-radius: 0.375rem; text-decoration: none; font-weight: 600; transition: transform 0.2s;"
            onMouseOver="this.style.transform='scale(1.05)'"
            onMouseOut="this.style.transform='scale(1)'"
          >
            Agendar Consulta
          </a>
        </div>
      </div>
    `,
    date: new Date().toISOString(),
    slug: 'oticon-own',
    featuredImage: oticonOwnImage,
    author: 'Acustika',
    categories: [{ id: 'local', name: 'Oticon', slug: 'oticon' }],
    link: '/blog/oticon-own',
    isLocal: true
  }
];

// Função para buscar um post local por slug
export const getLocalPostBySlug = (slug) => {
  return localPosts.find(post => post.slug === slug);
};

// Função para verificar se um slug é de um post local
export const isLocalPost = (slug) => {
  return localPosts.some(post => post.slug === slug);
};


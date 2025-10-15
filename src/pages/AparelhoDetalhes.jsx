import React from 'react';
import { useParams, Link } from 'react-router-dom';
import heroMainImage from '../assets/images/hero/hero-main.png';
import argosyVistaV from '../assets/images/hearing-aids/argosyvista-V.png';
import oticonXceed from '../assets/images/hearing-aids/aparelhos-auditivos-oticon-xceed.png.webp';
import rextonMCoreR from '../assets/images/hearing-aids/rexton-McoreR.jpg.webp';
import mCoreIX from '../assets/images/hearing-aids/m-core-ix-1.jpg.webp';
import oticonOwn from '../assets/images/hearing-aids/oticon-own250x250.jpg.webp';
import rextonRugged from '../assets/images/hearing-aids/rexton-rugged.jpg.webp';
import rextonStellar from '../assets/images/hearing-aids/rexton-stellar-04.jpg.webp';
import oticonZircon from '../assets/images/hearing-aids/oticon-zircon.jpg.webp';
import oticonReal from '../assets/images/hearing-aids/oticon-own250x250.png.webp';

const AparelhoDetalhes = () => {
  const { slug } = useParams();
  
  // Dados dos aparelhos (mesmo array da página Aparelhos)
  const aparelhos = [
    {
      id: 1,
      nome: "Argosy Vista V",
      descricao: "Aparelho auditivo discreto com tecnologia avançada de processamento de som e conectividade Bluetooth.",
      imagem: argosyVistaV,
      categoria: "Intra-Auricular"
    },
    {
      id: 2,
      nome: "Oticon Xceed",
      descricao: "Solução potente para perdas auditivas severas com inteligência artificial e redução de ruído.",
      imagem: oticonXceed,
      categoria: "Retro-Auricular"
    },
    {
      id: 3,
      nome: "Rexton M-Core R",
      descricao: "Aparelho recarregável com bateria de longa duração e conectividade wireless para todos os dispositivos.",
      imagem: rextonMCoreR,
      categoria: "Recarregável"
    },
    {
      id: 4,
      nome: "Rexton M-Core iX",
      descricao: "Pequeno no tamanho, mas gigante na tecnologia.",
      imagem: mCoreIX,
      categoria: "Intra-Auricular"
    },
    {
      id: 5,
      nome: "Oticon Real",
      descricao: "Oticon Real é um modelo discreto e recarregável.",
      imagem: oticonReal,
      categoria: "Retro-Auricular"
    },
    {
      id: 6,
      nome: "Rexton Rugged",
      descricao: "É o nosso aparelho auditivo mais resistente.",
      imagem: rextonRugged,
      categoria: "Resistente"
    },
    {
      id: 7,
      nome: "Oticon Zircon",
      descricao: "Oferece um aparelho auditivo recarregável pequeno e discreto.",
      imagem: oticonZircon,
      categoria: "Retro-Auricular"
    },
    {
      id: 8,
      nome: "Rexton Cros",
      descricao: "Receba a informação sonora de ambos os lados.",
      imagem: rextonStellar,
      categoria: "CROS"
    },
    {
      id: 9,
      nome: "Oticon Own",
      descricao: "O aparelho auditivo que organiza os sons ao seu redor.",
      imagem: oticonOwn,
      categoria: "Intra-Auricular"
    }
  ];
  
  // Encontrar o aparelho pelo slug
  const aparelho = aparelhos.find(a => 
    a.nome.toLowerCase().replace(/\s+/g, '-') === slug
  );
  
  if (!aparelho) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Aparelho não encontrado</h1>
          <Link to="/aparelhos" className="text-acustika-purple hover:underline">
            Voltar para Aparelhos
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-white -mt-20">
      {/* Hero Section - Background Animado Inspirado */}
      <section className="relative overflow-hidden py-16 md:py-20">
        {/* Background com gradiente moderno inspirado no 21st.dev */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 85% 65% at 8% 8%, rgba(122, 68, 120, 0.15), transparent 60%),
              radial-gradient(ellipse 75% 60% at 75% 35%, rgba(100, 160, 160, 0.20), transparent 62%),
              radial-gradient(ellipse 70% 60% at 15% 80%, rgba(122, 68, 120, 0.12), transparent 62%),
              radial-gradient(ellipse 70% 60% at 92% 92%, rgba(100, 160, 160, 0.18), transparent 62%),
              linear-gradient(135deg, #f7f0f7 0%, #f0f7f7 50%, #e8f5f5 100%)
            `,
          }}
        />
        
        {/* Canvas para partículas animadas */}
        <canvas 
          className="absolute inset-0 w-full h-full opacity-50"
          style={{ zIndex: 1 }}
          ref={(canvas) => {
            if (canvas) {
              const ctx = canvas.getContext('2d');
              const particles = [];
              const particleCount = 80;
              
              canvas.width = canvas.offsetWidth;
              canvas.height = canvas.offsetHeight;
              
              // Criar partículas
              for (let i = 0; i < particleCount; i++) {
                particles.push({
                  x: Math.random() * canvas.width,
                  y: Math.random() * canvas.height,
                  vx: (Math.random() - 0.5) * 0.3,
                  vy: (Math.random() - 0.5) * 0.3,
                  size: Math.random() * 1.5 + 0.5,
                  opacity: Math.random() * 0.4 + 0.1
                });
              }
              
              // Função de animação
              const animate = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                particles.forEach(particle => {
                  particle.x += particle.vx;
                  particle.y += particle.vy;
                  
                  if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                  if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
                  
                  ctx.beginPath();
                  ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                  ctx.fillStyle = `rgba(122, 68, 120, ${particle.opacity})`;
                  ctx.fill();
                });
                
                requestAnimationFrame(animate);
              };
              
              animate();
            }
          }}
        />
        
        {/* Padrões geométricos decorativos */}
        <div className="absolute inset-0" style={{ zIndex: 2 }}>
          <div className="absolute top-16 left-8 w-24 h-24 border border-acustika-purple/15 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-16 w-20 h-20 border border-acustika-teal/15 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-16 left-1/4 w-16 h-16 border border-acustika-purple/15 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-32 right-1/3 w-20 h-20 border border-acustika-teal/15 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
        
        {/* Overlay sutil */}
        <div className="absolute inset-0 bg-white/5" style={{ zIndex: 3 }}></div>
        
         {/* Conteúdo centralizado */}
         <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8" style={{ paddingTop: '50px' }}>
           <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm w-fit mx-auto mb-6"
              data-aos="fade-up"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-acustika-purple to-acustika-teal rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-600" style={{ fontFamily: 'Karla, sans-serif' }}>Tecnologia de ponta</span>
            </div>
            
            {/* Título */}
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
              style={{ 
                fontFamily: 'Karla, sans-serif',
                fontWeight: '700',
                lineHeight: '1.1'
              }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {aparelho.nome}
            </h1>
            
            {/* Subtítulo */}
            <p 
              className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
              style={{ 
                fontFamily: 'Karla, sans-serif',
                fontWeight: '400',
                lineHeight: '1.6'
              }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {aparelho.descricao}
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
               Descubra as tecnologias avançadas que tornam o {aparelho.nome} uma escolha excepcional
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
                 <i className="fab fa-bluetooth-b text-white text-lg"></i>
               </div>
               <h3 
                 className="text-xl font-semibold text-gray-900 mb-3"
                 style={{ fontFamily: 'Karla, sans-serif' }}
               >
                 Conectividade Bluetooth
               </h3>
               <p 
                 className="text-gray-600"
                 style={{ fontFamily: 'Karla, sans-serif' }}
               >
                 Conecte-se a qualquer dispositivo de mídia com Bluetooth habilitado e experimente ouvir o mundo no seu detalhe.
               </p>
             </div>

             {/* Característica 2 */}
             <div 
               className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
               data-aos="fade-up"
               data-aos-delay="200"
             >
               <div className="w-12 h-12 bg-gradient-to-r from-acustika-purple to-acustika-teal rounded-full flex items-center justify-center mb-4">
                 <i className="fas fa-volume-up text-white text-lg"></i>
               </div>
               <h3 
                 className="text-xl font-semibold text-gray-900 mb-3"
                 style={{ fontFamily: 'Karla, sans-serif' }}
               >
                 Ajuste Automático
               </h3>
               <p 
                 className="text-gray-600"
                 style={{ fontFamily: 'Karla, sans-serif' }}
               >
                 O Vista V se ajusta automaticamente ao seu ambiente sonoro, aprimorando os sons que você deseja ouvir e minimizando os ruídos de fundo.
               </p>
             </div>

             {/* Característica 3 */}
             <div 
               className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
               data-aos="fade-up"
               data-aos-delay="300"
             >
               <div className="w-12 h-12 bg-gradient-to-r from-acustika-purple to-acustika-teal rounded-full flex items-center justify-center mb-4">
                 <i className="fas fa-battery-full text-white text-lg"></i>
               </div>
               <h3 
                 className="text-xl font-semibold text-gray-900 mb-3"
                 style={{ fontFamily: 'Karla, sans-serif' }}
               >
                 Bateria de Longa Duração
               </h3>
               <p 
                 className="text-gray-600"
                 style={{ fontFamily: 'Karla, sans-serif' }}
               >
                 São baterias de íons de lítio com até 6 anos de durabilidade. Fácil manuseio, carregamento rápido para uma audição de qualidade durante o dia inteiro.
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
                   <span className="font-semibold text-gray-900" style={{ fontFamily: 'Karla, sans-serif' }}>{aparelho.categoria}</span>
                 </div>
                 <div className="flex justify-between items-center py-3 border-b border-gray-200">
                   <span className="text-gray-600" style={{ fontFamily: 'Karla, sans-serif' }}>Conectividade</span>
                   <span className="font-semibold text-gray-900" style={{ fontFamily: 'Karla, sans-serif' }}>Bluetooth 5.0</span>
                 </div>
                 <div className="flex justify-between items-center py-3 border-b border-gray-200">
                   <span className="text-gray-600" style={{ fontFamily: 'Karla, sans-serif' }}>Bateria</span>
                   <span className="font-semibold text-gray-900" style={{ fontFamily: 'Karla, sans-serif' }}>Íons de Lítio</span>
                 </div>
                 <div className="flex justify-between items-center py-3 border-b border-gray-200">
                   <span className="text-gray-600" style={{ fontFamily: 'Karla, sans-serif' }}>Durabilidade</span>
                   <span className="font-semibold text-gray-900" style={{ fontFamily: 'Karla, sans-serif' }}>Até 6 anos</span>
                 </div>
                 <div className="flex justify-between items-center py-3">
                   <span className="text-gray-600" style={{ fontFamily: 'Karla, sans-serif' }}>Carregamento</span>
                   <span className="font-semibold text-gray-900" style={{ fontFamily: 'Karla, sans-serif' }}>Rápido</span>
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
                   src={aparelho.imagem} 
                   alt={aparelho.nome}
                   className="w-full max-w-sm mx-auto mb-4"
                 />
                 <h4 
                   className="text-xl font-semibold text-gray-900"
                   style={{ fontFamily: 'Karla, sans-serif' }}
                 >
                   {aparelho.nome}
                 </h4>
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* Seção Outros Aparelhos */}
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
               Conheça outros aparelhos
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
               Descubra mais opções da nossa linha de aparelhos auditivos
             </p>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {aparelhos
               .filter(a => a.id !== aparelho.id) // Excluir o aparelho atual
               .slice(0, 3) // Mostrar apenas 3 aparelhos
               .map((outroAparelho, index) => (
                 <div 
                   key={outroAparelho.id}
                   className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group flex flex-col"
                   data-aos="fade-up"
                   data-aos-delay={index * 100}
                 >
                   {/* Imagem */}
                   <div className="h-48 overflow-hidden bg-gray-50">
                     <img 
                       src={outroAparelho.imagem} 
                       alt={outroAparelho.nome} 
                       className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                     />
                   </div>
                   
                   {/* Conteúdo */}
                   <div className="p-6 flex flex-col flex-1">
                     <div className="flex-1">
                       {/* Categoria */}
                       <div className="flex items-center gap-2 mb-3">
                         <div className="w-2 h-2 bg-gradient-to-r from-acustika-purple to-acustika-teal rounded-full"></div>
                         <span 
                           className="text-sm font-medium text-gray-500"
                           style={{ fontFamily: 'Karla, sans-serif' }}
                         >
                           {outroAparelho.categoria}
                         </span>
                       </div>
                       
                       {/* Nome */}
                       <h3 
                         className="font-semibold text-gray-900 text-lg mb-3"
                         style={{ 
                           fontFamily: 'Karla, sans-serif',
                           fontWeight: '600'
                         }}
                       >
                         {outroAparelho.nome}
                       </h3>
                       
                       {/* Descrição */}
                       <p 
                         className="text-gray-600 text-sm leading-relaxed"
                         style={{ 
                           fontFamily: 'Karla, sans-serif',
                           fontWeight: '400'
                         }}
                       >
                         {outroAparelho.descricao}
                       </p>
                     </div>
                     
                     {/* Botão Saiba Mais - sempre no footer */}
                     <div className="mt-4">
                       <Link 
                         to={`/aparelho/${outroAparelho.nome.toLowerCase().replace(/\s+/g, '-')}`}
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

           {/* Botão Ver Todos */}
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
       </section>

       {/* Seção CTA */}
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
               Pronto para experimentar o {aparelho.nome}?
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

export default AparelhoDetalhes;

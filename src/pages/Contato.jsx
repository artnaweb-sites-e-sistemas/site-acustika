import React, { useState } from 'react';
import contatoHeroImage from '../assets/images/hero/contato-hero.png';
import '../styles/liquid-glass-buttons.css';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  };

  // Dados das unidades (consistentes com a Home)
  const locations = [
    {
      id: 1,
      title: "São Paulo SP - Ipiranga",
      address: "Av. Nazaré, 1139 – Loja 2 – Térreo Ed. Cardeal Hummes",
      phone: "(11) 3895-3000",
      cellphone: "(11) 99770-4014",
      mapsUrl: "https://www.google.com/maps/search/Av.+Nazaré,+1139+-+Ipiranga,+São+Paulo+-+SP"
    },
    {
      id: 2,
      title: "Florianópolis SC - Rio Tavares",
      address: "Multi Open Shopping – Rodovia Dr. Antônio Luiz Moura Gonzaga, 3339, Sala 115C",
      phone: "(48) 3247-9000",
      cellphone: "(48) 99128-7927",
      mapsUrl: "https://www.google.com/maps/search/Multi+Open+Shopping+Rodovia+Dr.+Antônio+Luiz+Moura+Gonzaga+3339+Florianópolis"
    },
    {
      id: 3,
      title: "São José SC - Kobrasol",
      address: "Av. Lédio João Martins, 301 – Loja 5 – Ed. Kobrasol Center",
      phone: "(48) 3247-9000",
      cellphone: "(48) 99128-7927",
      mapsUrl: "https://www.google.com/maps/search/Av.+Lédio+João+Martins,+301+-+Kobrasol+São+José+SC"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Background Animado Inspirado */}
      <section className="relative overflow-hidden" style={{ height: '400px' }}>
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
              if (ctx) {
                const resizeCanvas = () => {
                  canvas.width = canvas.offsetWidth;
                  canvas.height = canvas.offsetHeight;
                };
                
                resizeCanvas();
                window.addEventListener('resize', resizeCanvas);
                
                // Configurações das partículas
                const particles = [];
                const particleCount = 100; // Menos partículas para hero menor
                
                // Criar partículas
                for (let i = 0; i < particleCount; i++) {
                  particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 3 + 1,
                    speedX: (Math.random() - 0.5) * 0.5,
                    speedY: (Math.random() - 0.5) * 0.5,
                    opacity: Math.random() * 0.4 + 0.2,
                    life: Math.random() * 100,
                    maxLife: 100 + Math.random() * 50
                  });
                }
                
                // Função de animação
                const animate = () => {
                  ctx.clearRect(0, 0, canvas.width, canvas.height);
                  
                  particles.forEach(particle => {
                    // Atualizar vida da partícula
                    particle.life += 0.5;
                    if (particle.life > particle.maxLife) {
                      particle.life = 0;
                      particle.x = Math.random() * canvas.width;
                      particle.y = Math.random() * canvas.height;
                    }
                    
                    // Calcular opacidade baseada na vida
                    const lifeRatio = particle.life / particle.maxLife;
                    const opacity = Math.sin(lifeRatio * Math.PI) * particle.opacity;
                    
                    // Movimento suave com influência do tempo
                    const time = Date.now() * 0.0001;
                    particle.x += particle.speedX + Math.sin(time + particle.y * 0.01) * 0.1;
                    particle.y += particle.speedY + Math.cos(time + particle.x * 0.01) * 0.1;
                    
                    // Wrap around edges
                    if (particle.x < 0) particle.x = canvas.width;
                    if (particle.x > canvas.width) particle.x = 0;
                    if (particle.y < 0) particle.y = canvas.height;
                    if (particle.y > canvas.height) particle.y = 0;
                    
                    // Desenhar partícula com cores que combinam com o gradiente da Acustika
                    const colors = [
                      `rgba(122, 68, 120, ${opacity})`, // Roxo Acustika
                      `rgba(100, 160, 160, ${opacity})`, // Turquesa Acustika
                      `rgba(106, 58, 104, ${opacity})`, // Roxo escuro
                      `rgba(84, 144, 144, ${opacity})`  // Turquesa escuro
                    ];
                    ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
                    ctx.beginPath();
                    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                    ctx.fill();
                  });
                  
                  requestAnimationFrame(animate);
                };
                
                animate();
              }
            }
          }}
        />
        
        {/* Padrão geométrico sutil */}
        <div className="absolute inset-0 opacity-20" style={{ zIndex: 2 }}>
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(75, 85, 99, 0.05) 20px, rgba(75, 85, 99, 0.05) 21px),
                repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(107, 114, 128, 0.04) 30px, rgba(107, 114, 128, 0.04) 31px)
              `,
            }}
          />
        </div>
        
        {/* Elementos decorativos com cores harmoniosas da Acustika */}
        <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-acustika-purple/35 to-acustika-teal/35 rounded-full blur-3xl animate-pulse" style={{ zIndex: 2 }}></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-acustika-teal/30 to-acustika-purple/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s', zIndex: 2 }}></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-br from-acustika-purple/35 to-acustika-teal/35 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s', zIndex: 2 }}></div>
        
        {/* Radial accent com cores harmoniosas da Acustika */}
        <div className="absolute left-1/2 top-[calc(100%-90px)] h-[300px] w-[400px] md:h-[400px] md:w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-r from-acustika-purple/15 via-acustika-teal/15 to-acustika-purple/15 blur-3xl animate-pulse" style={{ animationDelay: '3s', zIndex: 2 }}></div>
        
        {/* Overlay sutil para profundidade */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/5" style={{ zIndex: 3 }}></div>
               
        <div className="relative container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 pt-8 pb-0 h-full" style={{ zIndex: 10 }}>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center h-full">
            
            {/* Coluna Esquerda: Conteúdo */}
            <div className="text-center lg:text-left space-y-6 flex flex-col justify-center h-full order-1 lg:order-first">
              {/* Badge moderno */}
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm w-fit mx-auto lg:mx-0"
              data-aos="fade-up"
              data-aos-delay="100"
            >
                  <div className="w-2 h-2 bg-gradient-to-r from-acustika-purple to-acustika-teal rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-600" style={{ fontFamily: 'Karla, sans-serif' }}>Estamos aqui para ajudar</span>
            </div>
            
              {/* Headline Principal com gradiente */}
               <h1 
                className="font-semibold text-gray-900 text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight"
              data-aos="fade-up"
                 data-aos-delay="200"
                 style={{ 
                  fontFamily: 'Noto Serif, serif',
                  fontWeight: '500',
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em',
                  background: 'linear-gradient(135deg, #1f2937 0%, #374151 50%, #4b5563 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
            Entre em Contato
          </h1>
               
              {/* Subtítulo */}
            <p 
                className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
                 style={{ 
                  fontFamily: 'Karla, sans-serif',
                  fontWeight: '400',
                  fontSize: '18px',
                  lineHeight: '1.4',
                  letterSpacing: '0.01em',
                  opacity: '0.8'
                 }}
               >
                 Estamos aqui para ajudar! Entre em contato conosco para tirar suas dúvidas, agendar uma consulta ou solicitar informações sobre nossos produtos e serviços.
          </p>
        </div>
        
            {/* Coluna Direita: Imagem Principal */}
            <div 
              className="relative order-2 lg:order-last h-full flex items-end justify-center hidden lg:flex"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="relative">
                {/* Círculo estilizado animado no fundo */}
                <div className="absolute inset-0 flex items-end justify-center">
                  <div className="relative">
                    {/* Círculo principal com gradiente */}
                    <div 
                      className="w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] rounded-full opacity-25"
                      style={{
                        background: 'linear-gradient(135deg, rgba(122, 68, 120, 0.4) 0%, rgba(100, 160, 160, 0.4) 50%, rgba(122, 68, 120, 0.4) 100%)',
                        animation: 'float 4s ease-in-out infinite, glow 3s ease-in-out infinite alternate'
                      }}
                    />
                    
                    {/* Círculo secundário com movimento */}
                    <div 
                      className="absolute top-1/2 left-1/2 w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] rounded-full opacity-20"
                      style={{
                        background: 'radial-gradient(circle, rgba(100, 160, 160, 0.5) 0%, transparent 70%)',
                        transform: 'translate(-50%, -50%)',
                        animation: 'rotate 6s linear infinite, breathe 2s ease-in-out infinite'
                      }}
                    />
                    
                    {/* Círculo terciário com pulso */}
                    <div 
                      className="absolute top-1/2 left-1/2 w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] rounded-full opacity-15"
                      style={{
                        background: 'conic-gradient(from 0deg, rgba(122, 68, 120, 0.4), rgba(100, 160, 160, 0.4), rgba(122, 68, 120, 0.4))',
                        transform: 'translate(-50%, -50%)',
                        animation: 'pulse 2s ease-in-out infinite, shimmer 5s linear infinite'
                      }}
                    />
                  </div>
                </div>
                
                {/* Imagem com fundo transparente - colada no bottom */}
                <div className="relative z-10" style={{ marginBottom: '-15px' }}>
                  <img 
                    src={contatoHeroImage} 
                    alt="Contato Acustika Aparelhos Auditivos" 
                    className="object-contain"
                    style={{ display: 'block', width: '500px', height: 'auto' }}
                  />
                </div>
                </div>
              </div>
          </div>
        </div>
      </section>
      
      {/* Seção de Contato */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
              
          {/* Formulário de Contato */}
              <div className="bg-white rounded-2xl shadow-lg p-8" data-aos="fade-up">
                <h2 
                  className="text-2xl font-semibold text-gray-900 mb-6"
                  style={{ 
                    fontFamily: 'Karla, sans-serif',
                    fontWeight: '600',
                    fontSize: '28px',
                    lineHeight: '1.2'
                  }}
                >
              Envie sua Mensagem
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Karla, sans-serif' }}>
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-acustika-purple focus:border-transparent transition-all duration-300"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Karla, sans-serif' }}>
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-acustika-purple focus:border-transparent transition-all duration-300"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Karla, sans-serif' }}>
                  Telefone
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-acustika-purple focus:border-transparent transition-all duration-300"
                  placeholder="(11) 99999-9999"
                />
              </div>
              
              <div>
                    <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Karla, sans-serif' }}>
                  Assunto *
                </label>
                <select
                  id="assunto"
                  name="assunto"
                  required
                  value={formData.assunto}
                  onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-acustika-purple focus:border-transparent transition-all duration-300"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="consulta">Agendar Consulta</option>
                  <option value="produtos">Informações sobre Produtos</option>
                      <option value="acessorios">Informações sobre Acessórios</option>
                  <option value="suporte">Suporte Técnico</option>
                  <option value="outros">Outros</option>
                </select>
              </div>
              
              <div>
                    <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Karla, sans-serif' }}>
                  Mensagem *
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  rows={5}
                  value={formData.mensagem}
                  onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-acustika-purple focus:border-transparent transition-all duration-300"
                  placeholder="Descreva sua dúvida ou solicitação..."
                />
              </div>
              
              <button
                type="submit"
                    className="w-full bg-gradient-to-r from-acustika-purple to-acustika-teal text-white py-3 rounded-lg hover:from-acustika-purple/90 hover:to-acustika-teal/90 transition-all duration-300 font-semibold transform hover:scale-105"
                    style={{ fontFamily: 'Karla, sans-serif' }}
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
          
          {/* Informações de Contato */}
          <div className="space-y-8">
                
                {/* Informações Gerais */}
                <div className="bg-white rounded-2xl shadow-lg p-8" data-aos="fade-up" data-aos-delay="200">
                  <h2 
                    className="text-2xl font-semibold text-gray-900 mb-6"
                    style={{ 
                      fontFamily: 'Karla, sans-serif',
                      fontWeight: '600',
                      fontSize: '28px',
                      lineHeight: '1.2'
                    }}
                  >
                Informações de Contato
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-acustika-purple/20 to-acustika-teal/20 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-acustika-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                        <h3 className="font-semibold text-gray-800 mb-1" style={{ fontFamily: 'Karla, sans-serif' }}>E-mail</h3>
                        <p className="text-gray-600" style={{ fontFamily: 'Karla, sans-serif' }}>
                          contato@acustikaauditiva.com.br<br />
                          suporte@acustikaauditiva.com.br
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-acustika-purple/20 to-acustika-teal/20 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-acustika-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                        <h3 className="font-semibold text-gray-800 mb-1" style={{ fontFamily: 'Karla, sans-serif' }}>Horário de Funcionamento</h3>
                        <p className="text-gray-600" style={{ fontFamily: 'Karla, sans-serif' }}>
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 12h<br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
                {/* Nossas Unidades */}
                <div className="bg-white rounded-2xl shadow-lg p-8" data-aos="fade-up" data-aos-delay="300">
                  <h2 
                    className="text-2xl font-semibold text-gray-900 mb-6"
                    style={{ 
                      fontFamily: 'Karla, sans-serif',
                      fontWeight: '600',
                      fontSize: '28px',
                      lineHeight: '1.2'
                    }}
                  >
                    Nossas Unidades
                  </h2>
                  
                  <div className="space-y-6">
                    {locations.map((location, index) => (
                      <div key={location.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                        <h3 
                          className="font-semibold text-gray-800 mb-2"
                          style={{ fontFamily: 'Karla, sans-serif' }}
                        >
                          {location.title}
                        </h3>
                        <div className="space-y-2">
                          <div className="flex items-start space-x-3">
                            <svg className="w-5 h-5 text-acustika-purple mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <p className="text-gray-600 text-sm" style={{ fontFamily: 'Karla, sans-serif' }}>
                              {location.address}
                            </p>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              <svg className="w-4 h-4 text-acustika-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                              <span className="text-gray-600 text-sm" style={{ fontFamily: 'Karla, sans-serif' }}>{location.phone}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                              </svg>
                              <span className="text-gray-600 text-sm" style={{ fontFamily: 'Karla, sans-serif' }}>{location.cellphone}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Call to Action */}
                <div className="bg-gradient-to-r from-acustika-purple to-acustika-teal rounded-2xl p-8 text-white" data-aos="fade-up" data-aos-delay="400">
                  <h3 
                    className="text-xl font-semibold mb-3"
                    style={{ fontFamily: 'Karla, sans-serif' }}
                  >
                Atendimento de Emergência
              </h3>
                  <p 
                    className="mb-4 opacity-90"
                    style={{ fontFamily: 'Karla, sans-serif' }}
                  >
                Para casos urgentes, temos um número de emergência disponível 24h.
              </p>
                  <p 
                    className="text-2xl font-bold"
                    style={{ fontFamily: 'Karla, sans-serif' }}
                  >
                (11) 99999-7777
              </p>
            </div>
          </div>
        </div>
      </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;

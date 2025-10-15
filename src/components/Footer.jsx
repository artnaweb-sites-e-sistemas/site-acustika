import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoPb from '../assets/images/logo-pb.png';
import Modal from './Modal';

const Footer = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isCookiesOpen, setIsCookiesOpen] = useState(false);

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background com gradiente da marca */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: `
            radial-gradient(ellipse 60% 40% at 20% 20%, rgba(220, 38, 127, 0.3), transparent 50%),
            radial-gradient(ellipse 50% 30% at 80% 80%, rgba(100, 160, 160, 0.3), transparent 50%),
            linear-gradient(135deg, rgba(220, 38, 127, 0.1) 0%, rgba(100, 160, 160, 0.1) 100%)
          `,
        }}
      />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 pt-20 pb-8 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6 group" data-aos="fade-up" data-aos-offset="0">
              <img 
                src={logoPb} 
                alt="Acustika Logo" 
                className="h-16 w-auto group-hover:scale-110 transition-transform duration-300"
              />
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed" data-aos="fade-up" data-aos-delay="100" data-aos-offset="0">
              Sua solução completa em aparelhos auditivos, acessórios e serviços especializados. 
              Cuidamos da sua audição com tecnologia de ponta e atendimento personalizado.
            </p>
            <div className="flex space-x-4" data-aos="fade-up" data-aos-delay="200" data-aos-offset="0">
              {/* Instagram */}
              <a href="https://www.instagram.com/acustikaaparelhosauditivos/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-110">
                <i className="fab fa-instagram text-white text-lg"></i>
              </a>
              
              {/* Facebook */}
              <a href="https://www.facebook.com/acustikaaparelhosauditivos/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110">
                <i className="fab fa-facebook-f text-white text-lg"></i>
              </a>
              
              {/* WhatsApp */}
              <a href="https://wa.me/5548991287927" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center hover:bg-green-500 transition-all duration-300 transform hover:scale-110">
                <i className="fab fa-whatsapp text-white text-lg"></i>
              </a>
              
              {/* E-mail */}
              <a href="mailto:acustikaauditiva@gmail.com" className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center hover:bg-red-500 transition-all duration-300 transform hover:scale-110">
                <i className="fas fa-envelope text-white text-lg"></i>
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="border-l border-gray-700 pl-8" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-pink-600 to-teal-500 bg-clip-text text-transparent">Links Rápidos</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-[#659fa0] transition-colors block">Home</Link></li>
              <li><Link to="/sobre" className="text-gray-300 hover:text-[#659fa0] transition-colors block">Sobre Nós</Link></li>
              <li><Link to="/aparelhos" className="text-gray-300 hover:text-[#659fa0] transition-colors block">Aparelhos</Link></li>
              <li><Link to="/acessorios" className="text-gray-300 hover:text-[#659fa0] transition-colors block">Acessórios</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-[#659fa0] transition-colors block">Blog</Link></li>
            </ul>
          </div>

          {/* Serviços */}
          <div className="border-l border-gray-700 pl-8" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-pink-600 to-teal-500 bg-clip-text text-transparent">Serviços</h3>
            <ul className="space-y-3">
              <li><span className="text-gray-300 block">Avaliação Auditiva</span></li>
              <li><span className="text-gray-300 block">Ajuste de Aparelhos</span></li>
              <li><span className="text-gray-300 block">Manutenção</span></li>
              <li><span className="text-gray-300 block">Reparo</span></li>
              <li><span className="text-gray-300 block">Consultoria</span></li>
              <li><span className="text-gray-300 block">Acompanhamento</span></li>
            </ul>
          </div>

          {/* Contato */}
          <div className="border-l border-gray-700 pl-8" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-pink-600 to-teal-500 bg-clip-text text-transparent">Contato</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: '#64a0a0' }}>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="leading-relaxed">Rua das Flores, 123<br />Centro - São Paulo/SP</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#64a0a0' }}>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span>(48) 99128-7927</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#64a0a0' }}>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>contato@acustika.com.br</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center" data-aos="fade-up" data-aos-offset="0" data-aos-duration="600">
          <p className="text-gray-300 text-sm">
            © 2025 Acustika. Todos os direitos reservados. Desenvolvido com <span className="inline-block animate-heartbeat" style={{color: '#dc2626'}}>❤️</span> por <a href="https://artnaweb.com.br" target="_blank" rel="noopener noreferrer" className="text-[#659fa0] hover:text-white transition-colors hover:underline">ArtnaWEB</a>
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <button 
              onClick={() => setIsPrivacyOpen(true)}
              className="text-gray-300 hover:text-pink-400 text-sm transition-colors hover:underline"
            >
              Política de Privacidade
            </button>
            <button 
              onClick={() => setIsTermsOpen(true)}
              className="text-gray-300 hover:text-teal-400 text-sm transition-colors hover:underline"
            >
              Termos de Uso
            </button>
            <button 
              onClick={() => setIsCookiesOpen(true)}
              className="text-gray-300 hover:text-pink-400 text-sm transition-colors hover:underline"
            >
              Cookies
            </button>
          </div>
        </div>
      </div>

      {/* Modais */}
      <Modal 
        isOpen={isPrivacyOpen} 
        onClose={() => setIsPrivacyOpen(false)} 
        title="Política de Privacidade"
      >
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Informações que Coletamos</h3>
            <p className="mb-4">
              A Acustika coleta informações pessoais quando você utiliza nossos serviços, incluindo:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Nome completo e dados de contato</li>
              <li>Informações sobre sua saúde auditiva</li>
              <li>Dados de navegação em nosso site</li>
              <li>Informações de pagamento (quando aplicável)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Como Utilizamos suas Informações</h3>
            <p className="mb-4">
              Utilizamos suas informações pessoais para:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Prestar serviços de saúde auditiva</li>
              <li>Agendar consultas e acompanhamentos</li>
              <li>Enviar informações sobre produtos e serviços</li>
              <li>Melhorar nossa experiência do usuário</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Compartilhamento de Informações</h3>
            <p>
              Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para prestação de serviços ou por exigência legal.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Última atualização:</strong> Janeiro de 2025<br/>
              <strong>Contato:</strong> contato@acustika.com.br
            </p>
          </div>
        </div>
      </Modal>

      <Modal 
        isOpen={isTermsOpen} 
        onClose={() => setIsTermsOpen(false)} 
        title="Termos de Uso"
      >
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Aceitação dos Termos</h3>
            <p>
              Ao utilizar os serviços da Acustika, você concorda com estes termos de uso. Se não concordar com qualquer parte destes termos, não utilize nossos serviços.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Serviços Oferecidos</h3>
            <p className="mb-4">
              A Acustika oferece:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Consultoria em saúde auditiva</li>
              <li>Venda e manutenção de aparelhos auditivos</li>
              <li>Acessórios para aparelhos auditivos</li>
              <li>Serviços de avaliação e acompanhamento</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Responsabilidades do Cliente</h3>
            <p className="mb-4">
              O cliente se compromete a:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Fornecer informações verdadeiras e atualizadas</li>
              <li>Seguir as orientações dos profissionais</li>
              <li>Realizar manutenções preventivas</li>
              <li>Comunicar problemas ou dúvidas</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">4. Limitações de Responsabilidade</h3>
            <p>
              A Acustika não se responsabiliza por danos decorrentes do uso inadequado dos produtos ou descumprimento das orientações técnicas fornecidas.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">5. Modificações</h3>
            <p>
              Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após sua publicação.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Última atualização:</strong> Janeiro de 2025<br/>
              <strong>Contato:</strong> contato@acustika.com.br
            </p>
          </div>
        </div>
      </Modal>

      <Modal 
        isOpen={isCookiesOpen} 
        onClose={() => setIsCookiesOpen(false)} 
        title="Política de Cookies"
      >
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">O que são Cookies?</h3>
            <p>
              Cookies são pequenos arquivos de texto armazenados em seu dispositivo quando você visita nosso site. Eles nos ajudam a melhorar sua experiência de navegação e entender como você utiliza nossos serviços.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Tipos de Cookies que Utilizamos</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Cookies Essenciais</h4>
                <p className="text-sm text-gray-600">
                  Necessários para o funcionamento básico do site, incluindo navegação e acesso a áreas seguras.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Cookies de Performance</h4>
                <p className="text-sm text-gray-600">
                  Coletam informações sobre como você utiliza nosso site, ajudando-nos a melhorar sua experiência.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Cookies de Funcionalidade</h4>
                <p className="text-sm text-gray-600">
                  Permitem que o site lembre suas preferências e forneça recursos aprimorados.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Como Gerenciar Cookies</h3>
            <p className="mb-4">
              Você pode controlar e/ou excluir cookies conforme desejar. Você pode excluir todos os cookies que já estão no seu computador e configurar a maioria dos navegadores para impedir que sejam colocados.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Nota:</strong> Se você desabilitar cookies, algumas funcionalidades do site podem não funcionar corretamente.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Cookies de Terceiros</h3>
            <p>
              Nosso site pode conter cookies de terceiros, como Google Analytics, para análise de tráfego e comportamento dos usuários. Esses cookies são regidos pelas políticas de privacidade dos respectivos terceiros.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Última atualização:</strong> Janeiro de 2025<br/>
              <strong>Contato:</strong> contato@acustika.com.br
            </p>
          </div>
        </div>
      </Modal>
    </footer>
  );
};

export default Footer;

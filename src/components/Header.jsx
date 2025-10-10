import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoNormal from '../assets/images/normal.png';
import faviconIcon from '../assets/images/favicon.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Aparelhos', href: '/aparelhos' },
    { name: 'Acessórios', href: '/acessorios' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Contato', href: '/contato' },
    { name: 'Blog', href: '/blog' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="backdrop-blur-md shadow-sm sticky top-0 z-50 border-b" style={{ 
      background: 'linear-gradient(to right, rgba(100, 160, 160, 0.1), rgba(255, 255, 255, 1), rgba(122, 68, 120, 0.1))',
      borderColor: 'rgba(100, 160, 160, 0.2)'
    }}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <Link to="/" className="flex items-center group" data-aos="fade-right">
            <img 
              src={logoNormal} 
              alt="Acustika Aparelhos Auditivos" 
              className="h-12 w-auto group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation - Estilo CarePoint */}
          <nav className="hidden lg:flex space-x-8" data-aos="fade-down">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                data-aos="fade-down"
                data-aos-delay={index * 100}
                className={`text-sm font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? 'font-semibold'
                    : 'text-gray-700'
                }`}
                style={{ 
                  color: isActive(item.href) ? '#7a4478' : '#374151',
                  fontFamily: 'system-ui, -apple-system, sans-serif'
                }}
                onMouseEnter={(e) => {
                  if (!isActive(item.href)) {
                    e.target.style.color = '#7a4478';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(item.href)) {
                    e.target.style.color = '#374151';
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Estilo Acustika */}
          <div className="hidden lg:flex items-center" data-aos="fade-left">
            <div className="bth">
              <a href="https://wa.me/5548991287927" target="_blank" rel="noopener noreferrer" className="elementor-button group">
                <span className="elementor-button-text">Agendar Consulta</span>
                <span className="elementor-button-icon group-hover:rotate-0 transition-all duration-500" style={{ transform: 'rotate(45deg)' }}>
                  <img 
                    src={faviconIcon} 
                    alt="Acustika" 
                    className="w-4 h-4 transition-all duration-500 group-hover:opacity-0 group-hover:scale-0" 
                  />
                  <i className="fab fa-whatsapp text-base absolute top-1/2 left-1/2 transition-all duration-500 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 whatsapp-icon-white" style={{ transform: 'translate(-50%, -50%) rotate(-45deg)', color: '#ffffff !important' }}></i>
                </span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 transition-all duration-300"
            style={{
              color: '#6b7280'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#7a4478';
              e.target.style.backgroundColor = 'rgba(100, 160, 160, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#6b7280';
              e.target.style.backgroundColor = 'transparent';
            }}
            data-aos="fade-left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4" style={{ borderTop: '1px solid rgba(100, 160, 160, 0.2)' }} data-aos="fade-up">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? 'font-semibold'
                      : ''
                  }`}
                  style={{ 
                    color: isActive(item.href) ? '#7a4478' : '#6b7280',
                    backgroundColor: isActive(item.href) ? 'rgba(100, 160, 160, 0.1)' : 'transparent',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive(item.href)) {
                      e.target.style.color = '#7a4478';
                      e.target.style.backgroundColor = 'rgba(100, 160, 160, 0.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(item.href)) {
                      e.target.style.color = '#6b7280';
                      e.target.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4" data-aos="fade-up" data-aos-delay={navigation.length * 100}>
                <div className="bth">
                  <a href="https://wa.me/5548991287927" target="_blank" rel="noopener noreferrer" className="elementor-button group">
                    <span className="elementor-button-text">Agendar Consulta</span>
                    <span className="elementor-button-icon group-hover:rotate-0 transition-all duration-500" style={{ transform: 'rotate(45deg)' }}>
                      <img 
                        src={faviconIcon} 
                        alt="Acustika" 
                        className="w-4 h-4 transition-all duration-500 group-hover:opacity-0 group-hover:scale-0" 
                      />
                      <i className="fab fa-whatsapp text-base absolute top-1/2 left-1/2 transition-all duration-500 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 whatsapp-icon-white" style={{ transform: 'translate(-50%, -50%) rotate(-45deg)', color: '#ffffff !important' }}></i>
                    </span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

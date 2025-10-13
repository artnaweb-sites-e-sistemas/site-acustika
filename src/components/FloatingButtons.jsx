import React, { useState, useEffect } from 'react';

const FloatingButtons = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showWhatsAppTooltip, setShowWhatsAppTooltip] = useState(false);
  const [showWhatsAppChat, setShowWhatsAppChat] = useState(false);
  const [chatMessage, setChatMessage] = useState('');

  // Função para voltar ao topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Funções para controlar o chat do WhatsApp
  const openWhatsAppChat = () => {
    setShowWhatsAppChat(true);
    setShowWhatsAppTooltip(false);
  };

  const closeWhatsAppChat = () => {
    setShowWhatsAppChat(false);
    setChatMessage('');
  };

  const sendWhatsAppMessage = () => {
    if (chatMessage.trim()) {
      const encodedMessage = encodeURIComponent(chatMessage.trim());
      const whatsappUrl = `https://wa.me/5548991287927?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
      closeWhatsAppChat();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendWhatsAppMessage();
    }
  };

  // Effect para controlar a visibilidade do botão back to top
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setShowBackToTop(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect para mostrar o tooltip do WhatsApp após 10 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWhatsAppTooltip(true);
    }, 10000); // 10 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* WhatsApp Button */}
        <div className="relative">
          <button
            onClick={openWhatsAppChat}
            className="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 active:scale-95 flex items-center justify-center group"
            aria-label="Falar no WhatsApp"
          >
            <i className="fab fa-whatsapp text-white text-lg group-hover:scale-110 transition-all duration-300"></i>
          </button>
          
          {/* Tooltip */}
          {showWhatsAppTooltip && (
            <div 
              className="absolute right-16 top-1/2 transform -translate-y-1/2 text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap whatsapp-tooltip"
              style={{ 
                backgroundColor: '#25D366',
                opacity: '0.9',
                zIndex: '9999',
                animation: 'tooltipPulse 2s ease-in-out infinite'
              }}
            >
              Posso ajudar?
              <div 
                className="absolute right-[-6px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent whatsapp-tooltip-arrow"
                style={{ 
                  borderLeft: '8px solid #25D366',
                  opacity: '0.9'
                }}
              ></div>
            </div>
          )}
        </div>

        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-white/90 backdrop-blur-md border border-white/20 rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 active:scale-95 flex items-center justify-center group hover:bg-white"
            aria-label="Voltar ao topo"
          >
            <i className="fas fa-arrow-up text-acustika-purple text-xs group-hover:translate-y-[-1px] transition-all duration-300"></i>
          </button>
        )}
      </div>

      {/* Mini Chat do WhatsApp */}
      {showWhatsAppChat && (
        <div className="fixed bottom-6 right-20 z-50 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
          {/* Header do Chat */}
          <div className="bg-green-500 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <i className="fab fa-whatsapp text-white text-sm"></i>
              </div>
              <div>
                <h3 className="font-semibold text-sm">Acustika</h3>
                <p className="text-xs text-green-100">online</p>
              </div>
            </div>
            <button
              onClick={closeWhatsAppChat}
              className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <i className="fas fa-times text-white text-xs"></i>
            </button>
          </div>

          {/* Conteúdo do Chat */}
          <div className="p-4 bg-gray-50">
            <div className="mb-4">
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <p className="text-sm text-gray-700">
                  Olá! Como posso ajudar você hoje? 😊
                </p>
              </div>
            </div>
            
            <div className="space-y-3">
              <textarea
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Digite sua mensagem..."
                className="w-full p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                rows="3"
              />
              
              <div className="flex gap-2">
                <button
                  onClick={sendWhatsAppMessage}
                  className="flex-1 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors text-sm font-medium"
                >
                  Enviar
                </button>
                <button
                  onClick={closeWhatsAppChat}
                  className="px-4 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingButtons;


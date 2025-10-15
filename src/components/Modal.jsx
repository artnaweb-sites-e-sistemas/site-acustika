import React from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-acustika-purple to-acustika-teal p-6 relative">
          <h2 
            className="text-2xl font-bold text-white pr-12"
            style={{ fontFamily: 'Karla, sans-serif' }}
          >
            {title}
          </h2>
          
          {/* Botão fechar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-300"
            aria-label="Fechar modal"
          >
            <span className="text-white text-xl font-bold leading-none">×</span>
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
          <div 
            className="text-gray-700 leading-relaxed"
            style={{ fontFamily: 'Karla, sans-serif' }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

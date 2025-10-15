import React from 'react';
import { CircleLoader } from 'react-spinners';

const LoadingSpinner = ({ size = 'medium', text = 'Carregando...' }) => {
  const sizeMap = {
    small: 30,
    medium: 50,
    large: 70
  };

  return (
    <div className="flex flex-col items-center justify-center py-8">
      {/* CircleLoader com cores da Acustika */}
      <CircleLoader 
        color="#7A4478" // acustika-purple
        size={sizeMap[size]}
        speedMultiplier={1}
      />
      
      {/* Texto simples */}
      {text && (
        <p 
          className="mt-4 text-gray-600 text-sm"
          style={{ fontFamily: 'Karla, sans-serif' }}
        >
          {text}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;

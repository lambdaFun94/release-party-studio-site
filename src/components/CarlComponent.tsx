import React from 'react';

export interface CarlComponentProps {
  backgroundImage: string;
  fontSize: string;
  fontWeight: string;
  color: string;
  buttonText: string;
}

const CarlComponent = ({ backgroundImage, fontSize, fontWeight, color, buttonText }: CarlComponentProps) => {
  return (
    <div className={`bg-cover bg-center h-96 flex justify-center items-center`} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <button className={`p-4 bg-blue-500 text-white font-${fontWeight} text-${fontSize} hover:bg-blue-600`} style={{ color }}>
        {buttonText}
      </button>
    </div>
  );
};

export default CarlComponent;

import React from 'react';


const NewComponent = ({
  title,
  subtitle,
  backgroundColor,
  titleFontSize,
  titleFontWeight,
  titleColor,
  subtitleFontSize,
  subtitleFontWeight,
  subtitleColor,
}) => {
  return (
    <div
      className={`text-center p-8 bg-${backgroundColor}`}
    >
      <h1
        className={`text-${titleFontSize} font-${titleFontWeight} text-${titleColor}`}
      >
        {title}
      </h1>
      <h2
        className={`text-${subtitleFontSize} font-${subtitleFontWeight} text-${subtitleColor}`}
      >
        {subtitle}
      </h2>
    </div>
  );
};

export default NewComponent;



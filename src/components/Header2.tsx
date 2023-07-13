import React from 'react';

export interface Header2Props {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref: string;
  backgroundImage: string;
  fullWidth?: boolean;
  fullHeight?: boolean;
  fontSize?: string;
  fontWeight?: string;
  textColor?: string;
}

const Header2 = ({
  title,
  subtitle,
  buttonText,
  buttonHref,
  backgroundImage,
  fullWidth,
  fullHeight,
  fontSize,
  fontWeight,
  textColor,
}: Header2Props) => {
  const containerClasses = `flex flex-col justify-center items-center ${fullWidth ? 'w-full' : 'max-w-screen-xl mx-auto'
    } ${fullHeight ? 'h-screen' : ''}`;
  const bgClass = `absolute top-0 left-0 w-full h-full ${fullHeight ? '' : 'min-h-screen'
    } bg-center bg-cover background-image`;
  const textClasses = `${fontSize ? `text-${fontSize}` : 'text-4xl'
    } ${fontWeight ? `font-${fontWeight}` : 'font-bold'} ${textColor ? `text-${textColor}` : 'text-white'
    }`;

  return (
    <div className={containerClasses}>
      <div className={bgClass} style={{ backgroundImage: `url(${backgroundImage})` }} />
      <div className="relative z-10 p-10">
        <h1 className={textClasses}>{title}</h1>
        <h2 className={textClasses}>{subtitle}</h2>
        <a
          href={buttonHref}
          className="mt-10 py-3 px-6 bg-red-500 hover:bg-red-600 rounded-full text-white text-lg font-medium"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default Header2;



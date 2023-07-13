import React from 'react';

export interface HeaderComponentProps {
  title: string;
  titleFontWeight?: "normal" | "medium" | "bold";
  titleFontSize?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";
  titleFontColor?: "gray-100" | "gray-200" | "gray-300" | "gray-400" | "gray-500" | "gray-600" | "gray-700" | "gray-800" | "gray-900" | "red-100" |
  "red-200" | "red-300" | "red-400" | "red-500" | "red-600" | "red-700" | "red-800" | "red-900" | "orange-100" | "orange-200" | "orange-300" |
  "orange-400" | "orange-500" | "orange-600" | "orange-700" | "orange-800" | "orange-900" | "yellow-100" | "yellow-200" | "yellow-300" |
  "yellow-400" | "yellow-500" | "yellow-600" | "yellow-700" | "yellow-800" | "yellow-900" | "green-100" | "green-200" | "green-300" |
  "green-400" | "green-500" | "green-600" | "green-700" | "green-800" | "green-900" | "teal-100" | "teal-200" | "teal-300" | "teal-400" |
  "teal-500" | "teal-600" | "teal-700" | "teal-800" | "teal-900" | "blue-100" | "blue-200" | "blue-300" | "blue-400" | "blue-500" |
  "blue-600" | "blue-700" | "blue-800" | "blue-900" | "indigo-100" | "indigo-200" | "indigo-300" | "indigo-400" | "indigo-500" |
  "indigo-600" | "indigo-700" | "indigo-800" | "indigo-900" | "purple-100" | "purple-200" | "purple-300" | "purple-400" | "purple-500" |
  "purple-600" | "purple-700" | "purple-800" | "purple-900" | "pink-100" | "pink-200" | "pink-300" | "pink-400" | "pink-500" |
  "pink-600" | "pink-700" | "pink-800" | "pink-900";
  subtitle: string;
  subtitleFontWeight?: "normal" | "medium" | "bold";
  subtitleFontSize?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";
  subtitleFontColor?: "gray-100" | "gray-200" | "gray-300" | "gray-400" | "gray-500" | "gray-600" | "gray-700" | "gray-800" | "gray-900" | "red-100" |
  "red-200" | "red-300" | "red-400" | "red-500" | "red-600" | "red-700" | "red-800" | "red-900" | "orange-100" | "orange-200" | "orange-300" |
  "orange-400" | "orange-500" | "orange-600" | "orange-700" | "orange-800" | "orange-900" | "yellow-100" | "yellow-200" | "yellow-300" |
  "yellow-400" | "yellow-500" | "yellow-600" | "yellow-700" | "yellow-800" | "yellow-900" | "green-100" | "green-200" | "green-300" |
  "green-400" | "green-500" | "green-600" | "green-700" | "green-800" | "green-900" | "teal-100" | "teal-200" | "teal-300" | "teal-400" |
  "teal-500" | "teal-600" | "teal-700" | "teal-800" | "teal-900" | "blue-100" | "blue-200" | "blue-300" | "blue-400" | "blue-500" |
  "blue-600" | "blue-700" | "blue-800" | "blue-900" | "indigo-100" | "indigo-200" | "indigo-300" | "indigo-400" | "indigo-500" |
  "indigo-600" | "indigo-700" | "indigo-800" | "indigo-900" | "purple-100" | "purple-200" | "purple-300" | "purple-400" | "purple-500" |
  "purple-600" | "purple-700" | "purple-800" | "purple-900" | "pink-100" | "pink-200" | "pink-300" | "pink-400" | "pink-500" |
  "pink-600" | "pink-700" | "pink-800" | "pink-900";
  ctaLabel: string;
  ctaFontWeight?: "normal" | "medium" | "bold";
  ctaFontSize?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";
  ctaFontColor?: "gray-100" | "gray-200" | "gray-300" | "gray-400" | "gray-500" | "gray-600" | "gray-700" | "gray-800" | "gray-900" | "red-100" |
  "red-200" | "red-300" | "red-400" | "red-500" | "red-600" | "red-700" | "red-800" | "red-900" | "orange-100" | "orange-200" | "orange-300" |
  "orange-400" | "orange-500" | "orange-600" | "orange-700" | "orange-800" | "orange-900" | "yellow-100" | "yellow-200" | "yellow-300" |
  "yellow-400" | "yellow-500" | "yellow-600" | "yellow-700" | "yellow-800" | "yellow-900" | "green-100" | "green-200" | "green-300" |
  "green-400" | "green-500" | "green-600" | "green-700" | "green-800" | "green-900" | "teal-100" | "teal-200" | "teal-300" | "teal-400" |
  "teal-500" | "teal-600" | "teal-700" | "teal-800" | "teal-900" | "blue-100" | "blue-200" | "blue-300" | "blue-400" | "blue-500" |
  "blue-600" | "blue-700" | "blue-800" | "blue-900" | "indigo-100" | "indigo-200" | "indigo-300" | "indigo-400" | "indigo-500" |
  "indigo-600" | "indigo-700" | "indigo-800" | "indigo-900" | "purple-100" | "purple-200" | "purple-300" | "purple-400" | "purple-500" |
  "purple-600" | "purple-700" | "purple-800" | "purple-900" | "pink-100" | "pink-200" | "pink-300" | "pink-400" | "pink-500" |
  "pink-600" | "pink-700" | "pink-800" | "pink-900";
  bgImageUrl?: string;
  buttonBgColor?: string;
  buttonHref?: string;
}

const HeaderComponent = ({
  title,
  titleFontWeight = "normal",
  titleFontSize = "xl",
  titleFontColor = "gray-800",
  subtitle,
  subtitleFontWeight = "normal",
  subtitleFontSize = "xl",
  subtitleFontColor = "gray-800",
  ctaLabel,
  ctaFontWeight = "normal",
  ctaFontSize = "xl",
  ctaFontColor = "gray-800",
  buttonBgColor,
  bgImageUrl,
  buttonHref
}: HeaderComponentProps) => {
  const bgStyle = bgImageUrl ? { backgroundImage: `url(${bgImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {};

  const titleClasses = `font-${titleFontWeight} text-${titleFontSize} text-${titleFontColor}`;
  const subtitleClasses = `font-${subtitleFontWeight} text-${subtitleFontSize} text-${subtitleFontColor}`;
  const ctaClasses = `font-${ctaFontWeight} text-${ctaFontSize} text-${ctaFontColor}`;

  return (
    <header className="flex flex-col items-center justify-center py-12 text-center" style={bgStyle}>
      <h1 className={titleClasses}>{title}</h1>
      <p className={subtitleClasses}>{subtitle}</p>
      <button href={buttonHref} className={`px-6 py-2 mt-6 bg-${buttonBgColor} text-white rounded-full hover:bg-${buttonBgColor}-600 focus:outline-none focus:bg-${buttonBgColor}-600 ${ctaClasses}`}>{ctaLabel}</button>
    </header>
  );
}

export default HeaderComponent;

import React from 'react';

type PaddingValue = "px-2" | "px-4" | "px-6" | "py-2" | "py-4" | "py-6";
type SpacingValue = "mt-2" | "mt-4" | "mt-6" | "mb-2" | "mb-4" | "mb-6";

export interface DescriptionProps {
  backgroundColor: string;
  titleFont: "sans" | "serif" | "mono";
  titleFontSize: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";
  titleFontWeight: "thin" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black";
  paragraphFont: "sans" | "serif" | "mono";
  paragraphFontSize: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";
  paragraphFontWeight: "thin" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black";
  title: string;
  description: string;
  align: "left" | "center" | "right";
  titlePadding?: PaddingValue;
  descriptionPadding?: PaddingValue;
  spacing?: SpacingValue;
}

const Description = ({
  title,
  backgroundColor,
  description,
  titleFont,
  titleFontSize,
  titleFontWeight,
  paragraphFont,
  paragraphFontSize,
  paragraphFontWeight,
  align,
  titlePadding = "px-4",
  descriptionPadding = "py-2",
  spacing = "mt-4",
}: DescriptionProps) => {
  const alignmentClasses = `text-${align}`;

  return (
    <div className={`bg-${backgroundColor}`}>
      <h1
        className={`font-${titleFont} text-${titleFontSize} font-${titleFontWeight} ${alignmentClasses} ${titlePadding}`}
      >
        {title}
      </h1>
      <p
        className={`font-${paragraphFont} text-${paragraphFontSize} font-${paragraphFontWeight} ${alignmentClasses} ${descriptionPadding} ${spacing}`}
      >
        {description}
      </p>
    </div>
  );
};

export default Description;

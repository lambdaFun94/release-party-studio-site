import React from "react";

export interface ShirinComponentProps {
  imageUrl: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
}

const ShirinComponent = ({
  imageUrl,
  fontSize,
  fontWeight,
  color,
}: ShirinComponentProps) => {
  return (
    <header className="flex items-center justify-center h-16">
      <img src={imageUrl} alt="Shirin" className="h-8 w-auto" />
    </header>
  );
};

export default ShirinComponent;


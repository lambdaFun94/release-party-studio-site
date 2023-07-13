import React from "react";

type FontSizeValue = "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";
type FontWeightValue = "thin" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black";
type ColorValue = "gray-100" | "gray-200" | "gray-300" | "gray-400" | "gray-500" | "gray-600" | "gray-700" | "gray-800" | "gray-900" |
  "red-100" | "red-200" | "red-300" | "red-400" | "red-500" | "red-600" | "red-700" | "red-800" | "red-900" |
  "orange-100" | "orange-200" | "orange-300" | "orange-400" | "orange-500" | "orange-600" | "orange-700" | "orange-800" | "orange-900" |
  "yellow-100" | "yellow-200" | "yellow-300" | "yellow-400" | "yellow-500" | "yellow-600" | "yellow-700" | "yellow-800" | "yellow-900" |
  "green-100" | "green-200" | "green-300" | "green-400" | "green-500" | "green-600" | "green-700" | "green-800" | "green-900" |
  "teal-100" | "teal-200" | "teal-300" | "teal-400" | "teal-500" | "teal-600" | "teal-700" | "teal-800" | "teal-900" |
  "blue-100" | "blue-200" | "blue-300" | "blue-400" | "blue-500" | "blue-600" | "blue-700" | "blue-800" | "blue-900" |
  "indigo-100" | "indigo-200" | "indigo-300" | "indigo-400" | "indigo-500" | "indigo-600" | "indigo-700" | "indigo-800" | "indigo-900" |
  "purple-100" | "purple-200" | "purple-300" | "purple-400" | "purple-500" | "purple-600" | "purple-700" | "purple-800" | "purple-900" |
  "pink-100" | "pink-200" | "pink-300" | "pink-400" | "pink-500" | "pink-600" | "pink-700" | "pink-800" | "pink-900";

interface TitleFields {
  title: string;
  fontSize?: FontSizeValue;
  fontWeight?: FontWeightValue;
  color?: ColorValue;
}

interface AddressFields {
  addressee: string;
  addressLine1: string;
  addressLine2: string;
  fontSize?: FontSizeValue;
  fontWeight?: FontWeightValue;
  color?: ColorValue;
}

interface SubtitleFields {
  subtitle: string;
  fontSize?: FontSizeValue;
  fontWeight?: FontWeightValue;
  color?: ColorValue;
}

export interface VenueProps {
  title: TitleFields;
  address: AddressFields;
  subtitle: SubtitleFields;
  backgroundColor?: ColorValue;
  padding?: string;
  spacing?: string;
}

const Venue = ({
  title,
  address,
  subtitle,
  backgroundColor = "bg-white",
  padding = "p-4",
  spacing = "mb-4"
}: VenueProps) => {
  const {
    title: titleText,
    fontSize: titleFontSize = "text-lg",
    fontWeight: titleFontWeight = "font-medium",
    color: titleColor = "text-black"
  } = title;

  const {
    addressee,
    addressLine1,
    addressLine2,
    fontSize: addressFontSize = "text-base",
    fontWeight: addressFontWeight = "font-medium",
    color: addressColor = "text-gray-500"
  } = address;

  const {
    subtitle: subtitleText,
    fontSize: subtitleFontSize = "text-sm",
    fontWeight: subtitleFontWeight = "font-medium",
    color: subtitleColor = "text-gray-500"
  } = subtitle;

  return (
    <div className={`bg-${backgroundColor} rounded-lg shadow-md ${padding}`}>
      <h2
        className={`text-center ${titleFontSize} ${titleFontWeight} ${titleColor} ${spacing}`}
      >
        {titleText}
      </h2>
      <address className="text-center">
        <span className={`${addressFontSize} ${addressFontWeight} ${addressColor}`}>
          {addressee}
        </span>
        <br />
        <span className={`${addressFontSize} ${addressFontWeight} ${addressColor}`}>
          {addressLine1}
        </span>
        <br />
        <span className={`${addressFontSize} ${addressFontWeight} ${addressColor}`}>
          {addressLine2}
        </span>
      </address>
      <h3
        className={`text-center ${subtitleFontSize} ${subtitleFontWeight} ${subtitleColor}`}
      >
        {subtitleText}
      </h3>
    </div>
  );
};

export default Venue;

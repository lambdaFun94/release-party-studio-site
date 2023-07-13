import React from 'react';

export interface HeaderProps {
    title: string;
    cta: string;
    href: string;
    subtitle?: string;
    backgroundImage?: string;
    titleFontSize?: string;
    titleFontWeight?: string;
    titleColor?: string;
    ctaFontSize?: string;
    ctaFontWeight?: string;
    ctaColor?: string;
    subtitleFontSize?: string;
    subtitleFontWeight?: string;
    subtitleColor?: string;
}

const Header = ({
    title,
    cta,
    href,
    subtitle,
    backgroundImage,
    titleFontSize,
    titleFontWeight,
    titleColor,
    ctaFontSize,
    ctaFontWeight,
    ctaColor,
    subtitleFontSize,
    subtitleFontWeight,
    subtitleColor,
}: HeaderProps) => {
    return (
        <header className={backgroundImage}>
            <h1 className={`text-${titleFontSize} font-${titleFontWeight} text-${titleColor}`}>{title}</h1>
            {subtitle && <h2 className={`text-${subtitleFontSize} font-${subtitleFontWeight} text-${subtitleColor}`}>{subtitle}</h2>}
            <a href={href} className={`text-${ctaFontSize} font-${ctaFontWeight} text-${ctaColor}`}>{cta}</a>
        </header>
    );
}

export default Header;



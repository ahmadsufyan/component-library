import React from 'react';
import './style.scss';

export interface FooterProps {
  style?: React.CSSProperties,
  className?: string,
  children: React.ReactNode,
}

export const Footer: React.FC<FooterProps>= ({
  style,
  className,
  children
}) => {
  return(
    <footer
      className={`w-ful h-[60px] bg-black ${className}`}
      style={style}
    >
      {children}
    </footer>
  );
};
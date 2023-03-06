import React from 'react';
import styles from './style.module.scss';

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
      className={`text-white w-full p-10 min-h-[60px] bg-black ${className}`}
      style={style}
    >
      {children}
    </footer>
  );
};
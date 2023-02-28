import React from 'react';
import './style.scss';

export interface SelectProps {
  style?: React.CSSProperties,
  className?: string,
  children: React.ReactNode,
}

export const Select: React.FC<SelectProps>= ({
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
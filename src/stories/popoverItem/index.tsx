import React from 'react';
import './style.scss';

export interface PopoverItemProps {
  style?: React.CSSProperties,
  className?: string,
  prefixIcon?: React.ReactNode,
  children: React.ReactNode
}

export const PopoverItem: React.FC<PopoverItemProps> = ({
  style,
  className,
  prefixIcon,
  children
}) => {
 
  function resizeIfIcon(prefixIcon: React.ReactNode){
    if(React.isValidElement(prefixIcon)){
      const { props } = prefixIcon
      return React.cloneElement(prefixIcon, {
        className: 'w-[18px] h-[18px]',
        props
      } as any)
    }
    return prefixIcon            
  }

  return(
    <a style={style} className={`item ${className}`}>
      {prefixIcon && resizeIfIcon(prefixIcon)}
      {children}
    </a>
  );
};

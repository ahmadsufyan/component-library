import React, { useEffect, useState } from 'react';
import Chevron from '../assets/chevron-down.svg';
import './style.scss';

export interface AccordionItemProps {
  id?: string,
  isOpen?: boolean,
  isActive?: boolean,
  collapsible?: boolean,
  title?: string,
  suffixIcon?: boolean,
  children?: React.ReactNode|AccordionItemProps[],
  style?: React.CSSProperties,
  className?: string,
  onActive?: (id: string) => void
}

export const AccordionItem: React.FC<AccordionItemProps>  = ({
  id,
  isOpen = false,
  isActive = false,
  collapsible = true,
  onActive,
  title,
  suffixIcon = true,
  style,
  className,
  children
}: AccordionItemProps) => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  useEffect(() => {
    setActive(isActive)
  }, [isActive])

  return (
    <div
      style={style}
      className={`h-max w-full ${className}`}
    >
      <div className={'accordion-item--title ' + (active ? "accordion-item--active" : "")}>
        <button
          className='break-words text-left flex-1 leading-6'
          onClick={() => {
            setOpen(true)
            setActive(true)
            onActive && onActive(id ?? "")
          }}
        >
          {title}
        </button>
        {suffixIcon && <button
          onClick={() => {
            setOpen(!open)
          }}
        >
          <img
            className={'transition-transform accordion-item--icon ' + (!open || !collapsible ? '-rotate-90' : '')}
            src={Chevron}
          />
        </button>
        }
      </div>
      
      {React.Children.map(children as React.ReactNode, (child) => {
        return(
          <div className={'pl-4 my-2 ' + (open || !collapsible ? 'visible' : 'hidden')}>
            {
              React.isValidElement(child) ? React.cloneElement(child) : child
            }
          </div>
        )
      })}
    </div>
  );
};

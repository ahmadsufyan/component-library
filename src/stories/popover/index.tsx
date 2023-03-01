import React, { useEffect, useRef, useState } from 'react';
import { PopoverItem } from 'stories/popoverItem';
import './style.scss';

export interface PopoverProps {
  style?: React.CSSProperties,
  className?: string,
  position?: "top" | "bottom" | "left" | "right" | "topLeft" | "topRight" | "bottomLeft" | "bottomRight",
  trigger?: "click" | "hover",
  title: React.ReactNode,
  children: React.ReactNode,
  onClick?: () => void,
}

interface Extended {
  Item: typeof PopoverItem
}

export const Popover: React.FC<PopoverProps> & Extended = ({
  style,
  className,
  position = "bottom",
  trigger = "hover",
  title,
  onClick,
  children
}) => {
  const [triggerer, setTriggerer] = useState<'hover'|'click'>(trigger);
  const [open, setOpen] = useState(false);
  const ref = useRef<any>(null)

  useEffect(() => {
    function handleClickOutside(event:any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  useEffect(() => {
    setTriggerer(trigger)
  }, [trigger])

  return(
    <button
      ref={ref}
      className={`popup ${className}`}
      style={style}
      onMouseEnter={() => {
        if(triggerer === 'hover') setOpen(true)
      }}
      onMouseLeave={() => {
        if(triggerer === 'hover') setOpen(false)
      }}
      onClick={() => {
        if(triggerer === 'click') setOpen(true)
      }}
    >
      <div
        className={'font-semibold hover:underline hover:text-blue-500 ' + (open ? "text-blue-500" : "")}
        onClick={() => {
          onClick && onClick()
        }}
      >
        {title}
      </div>
      {children && <span
        className={(open ? "visible" : "hide") + ` ${position}`}
      >
        <div className='inner-content'>
          {React.Children.count(children) > 0 ?
            <ul className='list-none min-w-[12rem] relative'>
              {React.Children.map(children, (element) => {
                if(React.isValidElement(element)){
                  return (
                    <li className='text-white flex text-sm relative'>
                      {
                        React.cloneElement(
                          element,
                          {},
                        )
                      }
                    </li>
                  )
                }
                return element
              })}
            </ul>
            :
            children
          }
        </div>
      </span>
      }
    </button>
  );
};

Popover.Item = PopoverItem
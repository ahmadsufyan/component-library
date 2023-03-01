import React, { useEffect, useRef, useState } from 'react';
import './style.scss';

export interface DrawerProps {
  isOpen?: boolean,
  style?: React.CSSProperties,
  className?: string,
  position?: "top"|"bottom"|"left"|"right",
  children: React.ReactNode,
  onClose?: () => void,
}

export const Drawer: React.FC<DrawerProps>= ({
  isOpen = false,
  onClose,
  style,
  position = "right",
  className,
  children
}) => {
  const [open, setOpen] = useState<boolean>(isOpen)
  const ref = useRef<any>(null)

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  useEffect(() => {
    function handleClickOutside(event:any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false)
        onClose && onClose()
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return(
    <div
      ref={ref}
      className={`drawer ${className} ${position} ${position}--` + (open ? "open" : "close")}
      style={style}
    >
      {children}
    </div>
  );
};
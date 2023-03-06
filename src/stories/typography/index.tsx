import React from "react";
import styles from './style.module.scss';

export interface TypographyProps {
  strong?: boolean,
  italic?: boolean,
  underline?: boolean,
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p",
  children?: React.ReactNode
}

export const Typography = ({
  strong,
  italic,
  underline,
  variant = "p",
  children,
  ...props
}: TypographyProps) => {
  const Component = variant

  const newStyles:string[] = []
  if(strong) newStyles.push("!font-bold")
  if(underline) newStyles.push("!underline")
  if(italic) newStyles.push("!italic")
  newStyles.push(styles[`text--${variant}`])
  
  return(
    <Component
      {...props}
      className={newStyles.join(' ')}
    >
      {children}
    </Component>
  )
};

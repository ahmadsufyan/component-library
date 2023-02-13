import React from "react";
import "./style.scss";

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

  const styles:string[] = []
  if(strong) styles.push("!font-bold")
  if(underline) styles.push("!underline")
  if(italic) styles.push("!italic")
  styles.push(`text--${variant}`)
  
  return(
    <Component
      {...props}
      className={styles.join(' ')}
    >
      {children}
    </Component>
  )
};

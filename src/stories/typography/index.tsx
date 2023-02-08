import React from "react";

export interface TypographyProps {
  strong?: boolean,
  italic?: boolean,
  underline?: boolean,
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p",
  label?: string,
  display?: string,
}

export const Typography = ({
  label,
  strong,
  italic,
  underline,
  variant = "p",
  display,
  ...props
}: TypographyProps) => {
  const Component = variant

  const styles:string[] = []
  if(display) styles.push(display)
  if(strong) styles.push("!font-bold")
  if(underline) styles.push("!underline")
  if(italic) styles.push("!italic")

  return(
    <Component
      {...props}
      className={styles.join(' ')}
    >
      {variant}{' : '}{label}
    </Component>
  )
};

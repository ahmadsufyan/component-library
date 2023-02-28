import './style.scss';

export interface HeaderProps {
  style?: React.CSSProperties,
  className?: string,
  children: React.ReactNode,
}

export const Header:React.FC<HeaderProps> = ({
  style,
  className,
  children
}) => {
  return(
    <header
      className={`w-ful h-[60px] bg-black ${className}`}
      style={style}
    >
      {children}
    </header>
  )
}

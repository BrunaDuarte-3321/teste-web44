import { ButtonHTMLAttributes } from 'react'
import { ButtonIconContainer } from './style'

interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm'
  colors?: 'white' | 'black' | 'red' | 'green'
  children?: React.ReactNode
}

export const IconButton = ({
  size = 'sm',
  children,
  colors = 'black',
  ...props
}: ButtonIconProps) => {
  return (
    <ButtonIconContainer {...props} size={size} colors={colors}>
      {children}
    </ButtonIconContainer>
  )
}

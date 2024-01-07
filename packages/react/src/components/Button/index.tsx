import React, { ButtonHTMLAttributes } from 'react'
import { ButtonContainer } from './style'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg'
  bgColor?: 'error' | 'white' | 'primary'
  children?: React.ReactNode
  icon?: React.ReactElement
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  onClick?: () => void
}

export const Button = ({
  bgColor = 'primary',
  size = 'md',
  children,
  disabled,
  icon,
  iconPosition = 'left',
  onClick,
  ...props
}: ButtonProps) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick()
    }
  }

  return (
    <ButtonContainer
      {...props}
      backgroundColor={bgColor}
      size={size}
      disabled={disabled}
      onClick={handleClick}
    >
      {iconPosition === 'left' && icon}
      <span>{children}</span>
      {iconPosition === 'right' && icon}
    </ButtonContainer>
  )
}

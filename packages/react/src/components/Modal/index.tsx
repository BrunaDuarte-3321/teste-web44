import React from 'react'
import { Button } from '../Button'
import { ModalContainer } from './style'

interface ModalProps {
  children: React.ReactElement
  label: string
  size?: 'sm' | 'md' | 'lg'
  color?: 'error' | 'white' | 'primary'
  icon?: React.ReactElement
  iconPosition?: 'left' | 'right'
  disabled?: boolean
}

export const Modal = ({
  children,
  label,
  size = 'md',
  color = 'primary',
  icon,
  iconPosition = 'left',
  disabled,
}: ModalProps) => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Button
        size={size}
        bgColor={color}
        icon={icon}
        iconPosition={iconPosition}
        disabled={disabled}
        onClick={handleOpen}
      >
        {label}
      </Button>
      <ModalContainer
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {children}
      </ModalContainer>
    </>
  )
}

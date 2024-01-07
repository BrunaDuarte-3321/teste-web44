import { Tooltip } from '@mui/material'
import { ReactElement } from 'react'

interface TooltipProps {
  children: ReactElement
  title?: string | number | undefined
}

export const TooltipInfo = ({ title, children }: TooltipProps) => {
  return (
    <Tooltip title={title} arrow>
      {children}
    </Tooltip>
  )
}

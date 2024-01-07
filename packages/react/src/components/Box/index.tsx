import { BoxContainer } from './style'

interface BoxProps {
  sizeBox: 'login' | 'search' | 'table' | 'modal'
  children?: React.ReactNode
}

export const Box = ({ sizeBox, children }: BoxProps) => {
  return <BoxContainer size={sizeBox}>{children}</BoxContainer>
}

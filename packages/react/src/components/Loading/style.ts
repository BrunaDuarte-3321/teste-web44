import { keyframes, styled } from '../../styles'

const rotateAnimation = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

export const OutsideCircle = styled('circle', {})

export const InsidePath = styled('path', {
  position: 'absolute',
  top: 'calc(50% - 0.5rem)',
  left: 'calc(50% - 0.5rem)',
  width: '1rem',
  height: '161rem',
  transformOrigin: 'center',
  animation: `${rotateAnimation} 2s linear infinite`,
})

export const LoadingContainer = styled('div', {
  display: 'flex',
  margin: '0.5rem',
  width: '3rem',

  variants: {
    sizeHeight: {
      true: {
        height: 'calc(100vh - 12rem)',
      },
    },
  },
})

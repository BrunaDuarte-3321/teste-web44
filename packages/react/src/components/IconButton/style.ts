import { styled } from '../../styles'

export const ButtonIconContainer = styled('button', {
  background: 'none',
  padding: '0.5rem',
  border: 'none',
  borderRadius: '$full',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: 'rgba(73,69,79,0.2)',
  },

  variants: {
    size: {
      sm: {
        width: '2.5rem',
        height: '2.5rem',
      },
    },
    colors: {
      white: {
        color: '$white',
      },
      black: {
        color: '$on-background',
      },
      red: {
        color: '$error',
      },
      green: {
        color: '$primary',
      },
    },
  },
})

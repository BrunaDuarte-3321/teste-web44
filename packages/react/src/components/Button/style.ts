import { styled } from '../../styles'

export const ButtonContainer = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  borderRadius: '$lg',
  border: 'none',
  cursor: 'pointer',
  fontWeight: '$medium',
  lineHeight: '$shorter',
  letterSpacing: '$label-lg',
  width: '100%',
  variants: {
    size: {
      sm: {
        maxWidth: '$28',
        fontSize: '$body-sm',
        height: '$10',
        '> svg': {
          width: '$4',
          height: '$4',
        },
      },
      md: {
        maxWidth: '$48',
        fontSize: '$body-medium',
        height: '$10',
        '> svg': {
          width: '$5',
          height: '$5',
        },
      },
      lg: {
        maxWidth: '$100',
        fontSize: '$body-lg',
        height: '$10',
      },
    },
    backgroundColor: {
      error: {
        background: '$error',
        color: '$white',
      },
      white: {
        background: '$white',
        color: '$on-background',
      },
      primary: {
        background: '$primary',
        color: '$white',
      },
    },
    disabled: {
      true: {
        cursor: 'not-allowed',
        opacity: 0.6,

        '&:hover': {
          opacity: 0.6,
        },
      },
    },
  },
  '&:hover': {
    opacity: 0.9,
  },
})

import { styled } from '../../styles'

export const BoxContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '$4',
  padding: '$4',
  borderRadius: '$lg',
  backgroundColor: '$white',
  width: '100%',
  height: '100%',
  variants: {
    size: {
      login: {
        maxWidth: '$140',
        maxHeight: '$92',
      },
      search: {
        maxWidth: '$432',
        maxHeight: '$64',
      },
      table: {
        maxWidth: '$276',
        maxHeight: '$140',
      },
      modal: {
        maxWidth: '$156',
        maxHeight: '$80',
      },
    },
  },
})

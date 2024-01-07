import { styled } from '../../styles'

export const ClosedMenu = styled('button', {
  position: 'absolute',
  width: '$4',
  height: '$6',
  border: '1px solid #d9d9d9',
  borderRadius: '$sm',
  background: '$white',
  right: '-$2',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '#e6e0e9',
  },

  '@media (max-width: 790px)': {
    display: 'none',
  },
})

export const SidebarContainer = styled('menu', {
  height: '100vh',
  width: '100%',
  padding: 0,
  position: 'sticky',
  zIndex: 1,
  top: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  background: '$white',

  variants: {
    size: {
      open: {
        maxWidth: '$80',
      },
      closed: {
        maxWidth: '$20',
      },
    },
  },
})

export const SidebarContent = styled('div', {
  variants: {
    sizeContent: {
      openContent: {
        width: '$80',
        '> header': {
          position: 'relative',
          margin: '$16 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
      closedContent: {
        width: '$20',
        '> header': {
          position: 'relative',
          margin: '$16 0 $20 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
    },
  },
})

export const FooterSidebar = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '$5',
})

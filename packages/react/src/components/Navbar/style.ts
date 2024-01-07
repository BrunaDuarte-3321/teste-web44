import { styled } from '../../styles'

export const MenuSidebarContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '6.25rem',

  h3: {
    lineHeight: '$short',
    fontWeight: '$medium',
    textAlign: 'center',
    letterSpacing: '$title-md',
    margin: '0',
  },

  ul: {
    listStyle: 'none',
    padding: '0',
  },
})

export const MenuSidebarContainer2 = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
  maxWidth: '13rem',
  padding: '$5 $12',

  h3: {
    lineHeight: '$short',
    fontWeight: '$medium',
    textAlign: 'center',
    letterSpacing: '$title-md',
    margin: '0',
  },

  h4: {
    fontSize: 'sm',
    lineHeight: '$shorter',
    fontWeight: '$regular',
    letterSpacing: '$body-medium',
    margin: '0',
  },

  ul: {
    display: 'flex',
    flexDirection: 'column',
    listStyle: 'none',
  },

  li: {
    padding: '0 $6 0 0',
    position: 'relative',
    width: '$40',
    height: '$10',
    left: '-$28',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    borderRadius: '$lg',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '#e6e0e9',
    },
  },
})

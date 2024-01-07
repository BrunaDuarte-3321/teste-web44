import { Logout } from '../../icons/Logout'
import { styled } from '../../styles'
import { Button } from '../Button'
import { IconButton } from '../IconButton'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

export const FooterContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '$8',
})

export const ProfileContainer = styled('div', {
  padding: '0',
  width: '$48',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const SidebarProfile = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  fontWeight: '500',
  gap: '$3',

  '> svg': {
    color: '$on-background',
    width: '$10',
    height: '$10',
    borderRadius: '$full',
  },

  '> span': {
    width: '$40',
  },
})

interface FooterProps {
  isOpen: boolean
  user?: string
}

export const FooterContent = ({ isOpen, user }: FooterProps) => {
  return (
    <>
      {isOpen ? (
        <FooterContainer>
          <ProfileContainer>
            <SidebarProfile>
              <AccountCircleIcon />
              <span>{user}</span>
            </SidebarProfile>
          </ProfileContainer>
          <Button icon={<Logout />} bgColor="error">
            Sair
          </Button>
        </FooterContainer>
      ) : (
        <IconButton colors="red">
          <Logout />
        </IconButton>
      )}
    </>
  )
}

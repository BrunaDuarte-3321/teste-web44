import {
  KeyboardArrowLeftRounded,
  KeyboardArrowRightRounded,
} from '@mui/icons-material/'

import {
  ClosedMenu,
  FooterSidebar,
  SidebarContainer,
  SidebarContent,
} from './style'

interface SidebarProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  headerContent: React.ReactNode
  mainContent: React.ReactNode
  footerContent: React.ReactNode
}

export const Sidebar = ({
  isOpen,
  setIsOpen,
  headerContent,
  mainContent,
  footerContent,
}: SidebarProps) => {
  function openMenu() {
    !isOpen ? setIsOpen(true) : setIsOpen(false)
  }

  return (
    <SidebarContainer size={!isOpen ? 'closed' : 'open'}>
      <SidebarContent sizeContent={!isOpen ? 'closedContent' : 'openContent'}>
        <header>
          {headerContent}
          <ClosedMenu onClick={openMenu}>
            {isOpen ? (
              <KeyboardArrowLeftRounded />
            ) : (
              <KeyboardArrowRightRounded />
            )}
          </ClosedMenu>
        </header>
        {mainContent}
      </SidebarContent>
      <FooterSidebar>{footerContent}</FooterSidebar>
    </SidebarContainer>
  )
}

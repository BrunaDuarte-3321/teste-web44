import { Navbar } from '../Navbar'

interface MainContentProps {
  isOpen: boolean
}

export const MainContent = ({ isOpen }: MainContentProps) => {
  return (
    <>
      <Navbar
        title="Menu"
        type={isOpen ? 'open' : 'closed'}
        options={isOpen ? ['Content 1', 'Content 2', 'Content 3'] : []}
      />
    </>
  )
}

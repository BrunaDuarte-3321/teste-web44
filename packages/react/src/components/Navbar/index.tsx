import { ListAltRounded } from '@mui/icons-material'
import { MenuSidebarContainer, MenuSidebarContainer2 } from './style'

interface Props {
  title: string
  type: 'open' | 'closed'
  options: string[]
}
export const Navbar = ({ title, type, options }: Props) => {
  return (
    <>
      {type === 'closed' ? (
        <MenuSidebarContainer>
          <h3>{title}</h3>
          <ul>
            <li>
              <ListAltRounded />
            </li>
          </ul>
        </MenuSidebarContainer>
      ) : (
        <MenuSidebarContainer2>
          <h3>{title}</h3>
          <ul>
            {options.map((item, index) => (
              <li key={index}>
                <h4>{item}</h4>
              </li>
            ))}
          </ul>
        </MenuSidebarContainer2>
      )}
    </>
  )
}

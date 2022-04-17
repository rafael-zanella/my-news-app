import {
  Wrapper,
  Container,
  Logo,
  Item,
  Menu
} from './StyledComponents'
import {
  LogoDefault
} from '@/design-system/icons'

import { useTheme } from '@/Contexts/ThemeContext/ThemeContext'

import { menuItems } from './Nav.constants'
import Link from 'next/link'
import { FC, useState } from 'react'

interface IProps {
  hideLogo?: boolean
}

export const Nav: FC<IProps> = ({ hideLogo = false }) => {
  const { changeTheme, theme: { colors } } = useTheme()

  const [menu, setMenu] = useState(menuItems)

  const updateMenu = (selectedItemId: string) => {
    const newMenu = menu.map(item => ({
      ...item,
      isActive: item.id === selectedItemId
    }))

    setMenu(newMenu)
  }

  return (
    <Wrapper >
      <Container data-testid="nav">
        { !hideLogo && (
          <Logo onClick={changeTheme}>
            <LogoDefault fill={colors.onBackgroundColor} />
          </Logo>
        ) }

        <Menu>
          {
            menu.map(item => (
              <Item key={item.title} onClick={() => updateMenu(item.id)}>
                <Link href={item.href}>
                  <div>
                    {
                      item.isActive
                        ? <item.IconSelected stroke={colors.onBackgroundColor} fill={colors.onBackgroundColor} />
                        : <item.Icon stroke={colors.onBackgroundColor} fill={colors.backgroundColor} />
                    }
                  </div>
                </Link>
              </Item>
            ))
          }
        </Menu>
      </Container>
    </Wrapper>
  )
}

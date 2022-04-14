import {
  Container,
  Notification,
  Logo,
  Item,
  Menu
} from './StyledComponents'
import {
  LogoDefault,
  Bell
} from '@/design-system/icons'

import { useTheme } from '@/Contexts/ThemeContext/ThemeContext'
import { Typography } from '@/design-system/Typography'

import { menuItems } from './Nav.constants'
import Link from 'next/link'
import { useState } from 'react'

export const Nav = () => {
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
    <Container>
      <Logo>
        <LogoDefault fill={colors.onBackgroundColor} />
        <Typography type='h2' fontWeight={700}>My News App</Typography>
      </Logo>

      <Notification>
        <Bell
          width={24}
          height={24}
          onClick={changeTheme}
          stroke={colors.onBackgroundColor}
        />
      </Notification>

      <Menu>
        {
          menuItems.map(item => (
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
  )
}

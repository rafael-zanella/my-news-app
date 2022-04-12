import { Nav, ItemNav } from './NavMenu.styled'

import Link from 'next/link'
import {
  Home, HomeSelected,
  Search, SearchSelected,
  Bookmark, BookmarkSelected,
  Settings, SettingsSelected
} from '@/design-system/icons'
import { useTheme } from '@/Contexts/ThemeContext/ThemeContext'
import { useState } from 'react'

interface IMenu {
  id: string,
  title: string,
  href: string,
  isActive: boolean,
  Icon: any,
  IconSelected: any,
}

const itensMenu: IMenu[] = [
  {
    id: '1',
    title: 'Home',
    href: '/home',
    isActive: false,
    Icon: Home,
    IconSelected: HomeSelected
  },
  {
    id: '2',
    title: 'Search',
    href: '/',
    isActive: false,
    Icon: Search,
    IconSelected: SearchSelected
  },
  {
    id: '3',
    title: 'Bookmark',
    href: '/',
    isActive: false,
    Icon: Bookmark,
    IconSelected: BookmarkSelected
  },
  {
    id: '4',
    title: 'Settings',
    href: '/',
    isActive: false,
    Icon: Settings,
    IconSelected: SettingsSelected
  }
]

export const NavMenu = () => {
  const { theme: { colors } } = useTheme()

  const [menu, setMenu] = useState(itensMenu)

  const updateMenu = (selectedItemId: string) => {
    const newMenu = menu.map(item => ({
      ...item,
      isActive: item.id === selectedItemId
    }))

    setMenu(newMenu)
  }

  return (
    <Nav>
      {
        menu.map(item => (
          <ItemNav key={item.title} onClick={() => updateMenu(item.id)}>
            <Link href={item.href}>
              <div>
                {
                  item.isActive
                    ? <item.IconSelected stroke={colors.onBackgroundColor} fill={colors.onBackgroundColor} />
                    : <item.Icon stroke={colors.onBackgroundColor} fill={colors.backgroundColor} />
                }
              </div>
            </Link>
          </ItemNav>
        ))
      }
    </Nav>
  )
}

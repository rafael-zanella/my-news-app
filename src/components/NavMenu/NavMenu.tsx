import { Nav, ItemNav } from './NavMenu.styled'

import Link from 'next/link'
import {
  Home, HomeSelected,
  Search, SearchSelected,
  Bookmark, BookmarkSelected,
  Settings, SettingsSelected
} from '@/design-system/icons'
import { useTheme } from '@/Contexts/ThemeContext/ThemeContext'

export const NavMenu = () => {
  const { theme: { colors } } = useTheme()

  return (
    <Nav>
      <ItemNav>
        <Link href="/">
          <Home stroke={colors.onBackgroundColor} />
        </Link>
      </ItemNav>

      <ItemNav>
        <Link href="#">
          <Search stroke={colors.onBackgroundColor} />
        </Link>
      </ItemNav>

      <ItemNav>
        <Link href="#">
          <Bookmark stroke={colors.onBackgroundColor} />
        </Link>
      </ItemNav>

      <ItemNav>
        <Link href="#">
          <Settings stroke={colors.onBackgroundColor} />
        </Link>
      </ItemNav>
    </Nav>
  )
}

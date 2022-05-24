import {
  Bell,
  Bookmark,
  BookmarkSelected,
  Home,
  HomeSelected,
  Search,
  SearchSelected,
  Settings,
  SettingsSelected
} from '@/design-system/icons'

interface IMenu {
  title: string,
  href: string,
  isActive: boolean,
  Icon: any,
  IconSelected: any,
}

export const menuItems: IMenu[] = [
  {
    title: 'Home',
    href: '/',
    isActive: false,
    Icon: Home,
    IconSelected: HomeSelected
  },
  {
    title: 'Notifications',
    href: '/notifications',
    isActive: false,
    Icon: Bell,
    IconSelected: Bell
  },
  {
    title: 'Search',
    href: '/search',
    isActive: false,
    Icon: Search,
    IconSelected: SearchSelected
  },
  {
    title: 'Bookmark',
    href: '/bookmark',
    isActive: false,
    Icon: Bookmark,
    IconSelected: BookmarkSelected
  },
  {
    title: 'Settings',
    href: '/settings',
    isActive: false,
    Icon: Settings,
    IconSelected: SettingsSelected
  }
]

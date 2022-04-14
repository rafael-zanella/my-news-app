import { Bookmark, BookmarkSelected, Home, HomeSelected, Search, SearchSelected, Settings, SettingsSelected } from "@/design-system/icons";

interface IMenu {
  id: string,
  title: string,
  href: string,
  isActive: boolean,
  Icon: any,
  IconSelected: any,
}

export const menuItems: IMenu[] = [
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

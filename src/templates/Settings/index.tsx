import { Header } from '@/components/Header/Header'
import { Nav } from '@/components/Nav/Nav'
import { Section, Item, SettingsLayout } from './Settings.styled'
import {
  Moon,
  ChevronRight,
  CircleQuestion
} from '@/design-system/icons'
import { Typography } from '@/design-system/Typography'
import { useTheme } from '@/Contexts/ThemeContext/ThemeContext'
import { Toggle } from '@/components/Toggle/Toggle'
import Link from 'next/link'

export const Settings = () => {
  const { theme: { colors, title }, changeTheme } = useTheme()

  return (
    <SettingsLayout>
      <Header title="Settings" />
      <main>
        <Section>
          <Item>
            <div>
              <Moon width={16} height={16} stroke={colors.onBackgroundColor} />
              <Typography type='h3'>Dark Mode</Typography>
            </div>
            <Toggle checked={title === 'dark'} onChange={changeTheme} />
          </Item>

          <Link href="settings/terms">
            <Item>
              <div>
                <CircleQuestion width={16} height={16} stroke={colors.onBackgroundColor} />
                <Typography type='h3'>Terms & Conditions</Typography>
              </div>
              <ChevronRight stroke={colors.onBackgroundColor} />
            </Item>
          </Link>

          <Link href="settings/about">
            <Item>
              <div>
                <CircleQuestion width={16} height={16} stroke={colors.onBackgroundColor} />
                <Typography type='h3'>About</Typography>
              </div>
              <ChevronRight stroke={colors.onBackgroundColor} />
            </Item>
          </Link>
        </Section>
      </main>
      <Nav />
    </SettingsLayout>
  )
}

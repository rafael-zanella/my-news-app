import { Header } from '@/components/Header/Header'
import { Nav } from '@/components/Nav/Nav'
import { Section, Item, SettingsLayout } from './Settings.styled'
import {
  Moon,
  ChevronRight,
  User,
  CircleQuestion,
  ArrowRightToBracket,
  Bell
} from '@/design-system/icons'
import { Typography } from '@/design-system/Typography'
import { useTheme } from '@/Contexts/ThemeContext/ThemeContext'
import { Toggle } from '@/components/Toggle/Toggle'

export const Settings = () => {
  const { theme: { colors, title }, changeTheme } = useTheme()

  return (
    <SettingsLayout>
      <Header title="Settings" />
      <main>
        <Section>
          <Item>
            <div>
              <User width={16} height={16} stroke={colors.onBackgroundColor} />
              <Typography type='h3'>Profile</Typography>
            </div>
            <ChevronRight stroke={colors.onBackgroundColor} />
          </Item>

          <Item>
            <div>
              <Bell width={16} height={16} stroke={colors.onBackgroundColor} />
              <Typography type='h3'>Notifications</Typography>
            </div>
            <ChevronRight stroke={colors.onBackgroundColor} />
          </Item>

          <Item>
            <div>
              <Moon width={16} height={16} stroke={colors.onBackgroundColor} />
              <Typography type='h3'>Dark Mode</Typography>
            </div>
            <Toggle checked={title === 'dark'} onChange={changeTheme} />
          </Item>

          <Item>
            <div>
              <CircleQuestion width={16} height={16} stroke={colors.onBackgroundColor} />
              <Typography type='h3'>Terms & Conditions</Typography>
            </div>
            <ChevronRight stroke={colors.onBackgroundColor} />
          </Item>

          <Item>
            <div>
              <CircleQuestion width={16} height={16} stroke={colors.onBackgroundColor} />
              <Typography type='h3'>About</Typography>
            </div>
            <ChevronRight stroke={colors.onBackgroundColor} />
          </Item>

          <Item>
            <div>
              <ArrowRightToBracket width={16} height={16} stroke={colors.onBackgroundColor} />
              <Typography type='h3'>Log out</Typography>
            </div>
            <ChevronRight stroke={colors.onBackgroundColor} />
          </Item>
        </Section>
      </main>
      <Nav />
    </SettingsLayout>
  )
}

import {
  Container,
  Actions,
  Title
} from './Header.styled'
import {
  LogoDefault,
  Bell
} from '@/design-system/icons'
import { useTheme } from '@/Contexts/ThemeContext/ThemeContext'

export const Header = () => {
  const { changeTheme, theme } = useTheme()

  return (
    <Container>
      <Title>
        <LogoDefault fill={theme.colors.onBackgroundColor} />
        <h1>My News app</h1>
      </Title>

      <Actions>
        <Bell
          width={24}
          height={24}
          onClick={changeTheme}
          stroke={theme.colors.onBackgroundColor}
        />
      </Actions>
    </Container>
  )
}

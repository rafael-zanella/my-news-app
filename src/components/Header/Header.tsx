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
import { Typography } from '@/design-system/Typography'

export const Header = () => {
  const { changeTheme, theme } = useTheme()

  return (
    <Container>
      <Title>
        <LogoDefault fill={theme.colors.onBackgroundColor} />
        <Typography type='h2' fontWeight={700}>My News app</Typography>
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

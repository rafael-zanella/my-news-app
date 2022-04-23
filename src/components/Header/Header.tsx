import { FC, ReactNode } from 'react'
import {
  Container,
  Title,
  Actions
} from './Header.styled'
import { ChevronLeft } from '@/design-system/icons'
import { Typography } from '@/design-system/Typography'
import { useTheme } from '@/Contexts/ThemeContext/ThemeContext'

interface IProps {
  title?: string,
  onBack?: () => void,
  children?: ReactNode,
}

export const Header: FC<IProps> = ({ title, onBack, children }) => {
  const { theme: { colors } } = useTheme()

  return (
    <Container data-testid="header">
      <Title>
        {!!onBack && (
          <ChevronLeft
            data-testid="header_onBack_button"
            onClick={onBack}
            width="26px"
            height="26px"
            stroke={colors.onBackgroundColor}
          />
        )}

        { title && (
          <Typography
            data-testid="header_title"
            type='h2'
            fontWeight={700}
          >
            {title}
          </Typography>
        )}
      </Title>

      <Actions data-testid="header_actions">
        {children}
      </Actions>
    </Container>
  )
}

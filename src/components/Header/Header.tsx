import { FC, ReactNode } from 'react'
import styled from 'styled-components'
import {
  ChevronLeft
} from '@/design-system/icons'
import { Typography } from '@/design-system/Typography'
import { useTheme } from '@/Contexts/ThemeContext/ThemeContext'

interface IProps {
  title?: string,
  onBack?: () => void,
  children: ReactNode,
}

export const Header: FC<IProps> = ({ title, onBack, children }) => {
  const { theme: { colors } } = useTheme()

  return (
    <Container>
      <Title>
        {!!onBack && (
          <ChevronLeft
            onClick={onBack}
            width="26px"
            height="26px"
            stroke={colors.onBackgroundColor}
          />
        )}

        { title && <Typography type='h2' fontWeight={700}>{title}</Typography>}
      </Title>

      <Actions>
        {children}
      </Actions>
    </Container>
  )
}

export const Container = styled.div`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;

  svg {
    cursor: pointer;
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px
`

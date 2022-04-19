import type { FC, ReactNode } from 'react'
import styled from 'styled-components'

interface IProps {
  children: ReactNode
}

export const ListOfPostCards: FC<IProps> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

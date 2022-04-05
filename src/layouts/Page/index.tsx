import { FC, ReactNode } from 'react'
import styled from 'styled-components'

interface IPage {
  children: ReactNode
}

export const Page: FC<IPage> = ({ children }) => (
  <Container>
    {children}
  </Container>
)

const Container = styled.div`
  overflow: hidden;
  min-height: 100vh;
  min-width: 100vw;
  padding: 10px;

  display: grid;
  gap: 20px;
  grid-template-rows: 50px 40px ;
  grid-template-areas: 
    "header"
    "categories"
    "main"
  ;
`

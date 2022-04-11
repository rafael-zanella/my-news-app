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
  min-height: 100vh;
  padding: 10px 10px 10px 10px;
  overflow: hidden;

  display: grid;
  grid-gap: 20px;
  grid-template-rows: 50px 40px ;
  grid-template-columns: 100%;
  grid-template-areas: 
    "header"
    "categories"
    "main"
    "nav-menu"
  ;

  @media screen and (min-width: 768px){
    // TODO
  }
`

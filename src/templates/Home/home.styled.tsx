
import { DefaultLayout } from '@/layouts/DefaultLayout'
import styled from 'styled-components'

export const NavArea = styled.nav`
  grid-area: nav;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`

export const HeaderArea = styled.header`
  grid-area: header;
`

export const MainArea = styled.main`
  position: relative;
  grid-area: main;
  
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin-bottom: 20px;
`

export const HomePage = styled(DefaultLayout)`
  display: grid;
  grid-gap: 20px;
  grid-template-rows: 50px 100% ;
  grid-template-columns: 100%;
  grid-template-areas: 
    "header"
    "main"
    "nav"
  ;

  ${HeaderArea} {
    display: flex;
    flex-direction: column;
  }


  @media screen and (min-width: 800px){
    grid-template-areas: 
      "header main"
      "nav main"
    ;
  
    grid-template-rows: 10% 100% ;
    grid-template-columns: 10% 90%;


    ${MainArea} {
      padding: 0 20px;
    }

    ${HeaderArea} {
      position: sticky;
      top: 0;
    }

    ${NavArea} {
      bottom: 50%;
    }
  }
`

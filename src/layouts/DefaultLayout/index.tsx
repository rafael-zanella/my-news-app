import { breakpoints } from '@/design-system/breakpoints'
import styled from 'styled-components'

export const DefaultLayout = styled.div`
  min-height: 100vh;
  padding: 10px;
  overflow: hidden;

  max-width: 100vw;

  display: flex;
  flex-direction: column;
  margin: 0 auto;
  
  @media screen and (${breakpoints.tablet}) {
    display: grid;

    grid-template-rows: 60px 100%;
    grid-template-columns: 1fr 7fr 1fr;
    grid-template-areas: 
      "nav header ."
      "nav main ."
      "nav main ."
    ;

    position: relative;
    justify-content: center;
    margin: 0 auto;
    max-width: 1000px;
    padding: 20px 10px;

    header {
      grid-area: header;
      padding: 0 2vw;
      max-width: calc(700px + 2vw);
      width: 100%;
      margin: 0 auto;
    }
    
    main {
      grid-area: main;
      padding: 0 2vw;
      margin: 0 auto;
      max-width: calc(700px + 2vw);
    }
  }
`

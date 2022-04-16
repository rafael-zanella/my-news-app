import { breakpoints } from '@/design-system/breakpoints'
import styled from 'styled-components'

export const DefaultLayout = styled.div`
  min-height: 100vh;
  padding: 10px;
  overflow: hidden;

  @media screen and (${breakpoints.tablet}) {
    position: relative;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    max-width: 1280px;
    padding: 0 10px;
    
    main {
      margin: 0 5vw;
      max-width: 700px;
    }
  }
`

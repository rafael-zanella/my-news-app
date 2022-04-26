import { breakpoints } from '@/design-system/breakpoints'
import styled from 'styled-components'

export const Author = styled.div`
  grid-area: author;
  display: grid;
  align-items: center;
  grid-template-columns: 50px 1fr; 
  column-gap: 10px;

  grid-template-areas:
    "picture name date"
  ;

  img {
    grid-area: picture;
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }

  @media screen and (${breakpoints.tablet}) {
    grid-template-areas: 
      "picture name"
      "picture date"
    ;
  }
`

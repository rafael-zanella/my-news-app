import { breakpoints } from '@/design-system/breakpoints'
import styled from 'styled-components'

export const Details = styled.section`
  margin: 10px 0;

  display: grid;
  gap: 10px;
  grid-template-rows: 1fr;

  grid-template-areas: 
    "author"
    "actions"
  ;

  @media screen and (${breakpoints.tablet}) {
    gap: 20px;
    grid-template-columns: 1fr 1.5fr;
    grid-template-areas: 
      "author actions"
    ;
  }
`

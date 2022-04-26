import { breakpoints } from '@/design-system/breakpoints'
import styled from 'styled-components'

export const Actions = styled.div`
  grid-area: actions;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2vw;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  justify-self: flex-start;

  @media screen and (${breakpoints.tablet}) {
    justify-self: flex-end;
  }
`

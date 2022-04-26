import { breakpoints } from '@/design-system/breakpoints'
import styled from 'styled-components'

export const Banner = styled.div`
  width: 100%;
  max-height: 200px;
  height: 100%;
  overflow: hidden;

  img {
    max-width: 100%;
  }

  @media screen and (${breakpoints.tablet}) {
    max-height: 250px;
  }
`

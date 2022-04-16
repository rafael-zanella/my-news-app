import { breakpoints } from '@/design-system/breakpoints'
import styled from 'styled-components'

export const Notification = styled.div`
  @media only screen and (${breakpoints.mobile}) {
    position: absolute;
    right: 0;
  }

  @media screen and (${breakpoints.tablet}) {
    position: fixed;
    top: 130px;
    right: unset;
  }
`

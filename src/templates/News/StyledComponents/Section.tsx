import { breakpoints } from '@/design-system/breakpoints'
import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2vw;
  width: 100%;

  @media screen and (${breakpoints.tablet}) { }
`

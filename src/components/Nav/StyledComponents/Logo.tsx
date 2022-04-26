import { breakpoints } from '@/design-system/breakpoints'
import styled from 'styled-components'

export const Logo = styled.div`
  display: none;

  @media screen and (${breakpoints.tablet}){
    display: block;
    
    color: ${({ theme }) => theme.colors.onBackgroundColor};

    position: fixed;
    top: 40px;
  }
`

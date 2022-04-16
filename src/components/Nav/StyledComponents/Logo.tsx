import { breakpoints } from '@/design-system/breakpoints'
import styled from 'styled-components'

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: ${({ theme }) => theme.colors.onBackgroundColor};

  @media screen and (${breakpoints.tablet}){
    position: fixed;
    top: 40px;
    
    h2 { display: none } 
  }
`
